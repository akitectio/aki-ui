#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typesDir = path.join(__dirname, '..', 'dist', 'types');
const indexFile = path.join(typesDir, 'index.d.ts');

// Check if index.d.ts exists
if (fs.existsSync(indexFile)) {
    console.log('🔧 Cleaning up TypeScript declaration files...');

    // Read the current content
    let content = fs.readFileSync(indexFile, 'utf8');

    // Remove CSS imports from declaration files
    content = content.replace(/import\s+['""]\.\/styles\.css['""]\s*;?\s*\n?/g, '');

    // Write the cleaned content back
    fs.writeFileSync(indexFile, content);

    console.log('✅ Removed CSS imports from declaration files');
} else {
    console.log('⚠️  index.d.ts not found, creating one...');

    // Create a clean index.d.ts file
    const cleanContent = `// TypeScript declarations for @akitectio/aki-ui
export * from "./lib/components";
export * from "./lib/theme";
`;

    fs.writeFileSync(indexFile, cleanContent);
    console.log('✅ Created clean index.d.ts file');
}
