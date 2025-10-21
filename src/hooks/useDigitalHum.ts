"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Oscillators = {
  carrier: OscillatorNode;
  lfo: OscillatorNode;
  noise: AudioBufferSourceNode;
};

type AudioNodes = {
  oscillators: Oscillators | null;
  gain: GainNode | null;
};

export function useDigitalHum() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<AudioNodes>({ oscillators: null, gain: null });
  const [enabled, setEnabled] = useState(false);

  const stop = useCallback(() => {
    const context = audioContextRef.current;
    const { oscillators } = nodesRef.current;

    try {
      oscillators?.carrier.stop();
      oscillators?.lfo.stop();
      oscillators?.noise.stop();
    } catch {
      // ignored — nodes might already be stopped
    }

    nodesRef.current.gain?.disconnect();
    nodesRef.current = { oscillators: null, gain: null };

    if (context) {
      context.close().catch(() => undefined);
      audioContextRef.current = null;
    }

    setEnabled(false);
  }, []);

  const start = useCallback(async () => {
    if (enabled) return;

    const AudioContextConstructor = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextConstructor) {
      console.warn("Web Audio API is not supported in this browser.");
      return;
    }

    const context = new AudioContextConstructor();
    await context.resume();

    const gain = context.createGain();
    gain.gain.value = 0.045;

    const carrier = context.createOscillator();
    carrier.type = "triangle";
    carrier.frequency.value = 118;

    const lfo = context.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 4.4;

    const lfoGain = context.createGain();
    lfoGain.gain.value = 22;

    lfo.connect(lfoGain).connect(carrier.frequency);

    const noiseBuffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let index = 0; index < noiseData.length; index += 1) {
      noiseData[index] = (Math.random() * 2 - 1) * 0.35;
    }

    const noise = context.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const noiseGain = context.createGain();
    noiseGain.gain.value = 0.028;

    carrier.connect(gain);
    noise.connect(noiseGain).connect(gain);
    gain.connect(context.destination);

    carrier.start();
    lfo.start();
    noise.start();

    audioContextRef.current = context;
    nodesRef.current = { oscillators: { carrier, lfo, noise }, gain };
    setEnabled(true);
  }, [enabled]);

  const toggle = useCallback(async () => {
    if (enabled) {
      stop();
      return;
    }

    await start();
  }, [enabled, start, stop]);

  useEffect(
    () => () => {
      stop();
    },
    [stop],
  );

  return { enabled, toggle } as const;
}

export default useDigitalHum;
