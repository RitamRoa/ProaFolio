# Ritam Roa — Professional Portfolio

A high-fidelity, high-performance portfolio dashboard built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**. Designed with a sophisticated, minimalist aesthetic using a curated four-color palette, featuring immersive motion effects and a unified data layer.

## 🚀 Key Features

-   **Dynamic Dashboard Layout**: A single-viewport experience with fluid tab-based navigation (Home, Featured, Gallery, About).
-   **Interactive Home Slider**: Auto-cycling featured posts with cache-busting image support and smooth transitions.
-   **Masonry Photography Gallery**: A high-density grid for personal photography featuring grayscale-to-color hover effects.
-   **Draggable Profile UI**: A unique, interactive profile picture component with touch/drag support for cycling through media.
-   **Centralized Data Architecture**: All content is managed via a dedicated `portfolio.tsx` data layer for easy maintenance.
-   **GitHub Integration**: Real-time fetching of repository counts and contribution metrics via the GitHub API.
-   **Distraction-Free Modals**: Custom-built image viewers for detailed project viewing and full-scale photography appreciation.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: Custom SVG implementations
-   **Deployment**: [Vercel](https://vercel.com/)
-   **Package Manager**: npm

## 🎨 Design System

The project adheres to a strict, premium color palette:
-   `#37353E` — Primary Background
-   `#44444E` — Secondary Surface / Borders
-   `#715A5A` — Accent / Action Color
-   `#D3DAD9` — High-Contrast Typography

## 📥 Getting Started

### Prerequisites
-   Node.js 18.x or higher
-   npm

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/RitamRoa/ProaFolio.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) to view the result.

## 🏗️ Structure

-   `src/app/` — Next.js App Router and Global Styles
-   `src/components/` — Reusable UI components and page sections
-   `src/data/portfolio.tsx` — **The Source of Truth.** Edit this file to update posts, images, and bio content.
-   `public/` — Static assets (images, certificates, and photography)

## 🌐 Deployment

This project is optimized for **Vercel**. 
Simply push your changes to the `main` branch, and Vercel will handle the production build and deployment automatically.

---
Built with ☕ and code by [Ritam Roa](https://github.com/RitamRoa)
