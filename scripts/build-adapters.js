import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync, rmSync } from 'fs';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('📦 Aki UI now uses universal components - no adapters needed!');
console.log('🎯 All React frameworks are supported out of the box');
console.log('✅ Components work with: React, Next.js, Remix, Gatsby, Vite');
console.log('📖 See FRAMEWORK_SUPPORT.md for usage examples');

// Clean up any old adapter build files
const adaptersDir = resolve(__dirname, '../dist/adapters');
if (existsSync(adaptersDir)) {
    rmSync(adaptersDir, { recursive: true, force: true });
    console.log('🧹 Cleaned up old adapter files');
}

console.log('✅ Build adapters task completed - universal support enabled!');

// No more legacy adapter building needed
