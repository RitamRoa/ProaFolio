import fs from 'fs';
import path from 'path';

const galleryDir = 'c:/Users/Ritham/Desktop/ProaFolio/public/gallery';
const files = fs.readdirSync(galleryDir);
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
const galleryImages = files
  .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
  .map(file => `/gallery/${encodeURIComponent(file)}`);

console.log(JSON.stringify(galleryImages, null, 2));
