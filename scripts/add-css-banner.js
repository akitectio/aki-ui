#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read package.json to get version
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
const version = packageJson.version;

// Banner template
const banner = `/*
 * Aki UI Component Library v${version}
 * https://aki-ui.akitect.io
 * 
 * Copyright (c) 2024-2025 Akitect.io
 * Licensed under the MIT License
 * 
 * Author: Akitect.io <duy@akitect.io>
 * Website: https://akitect.io
 * Repository: https://github.com/akitectio/aki-ui
 * 
 * Built with React, TypeScript, and Tailwind CSS
 */
`;

// Path to the built CSS file
const cssFilePath = path.join(__dirname, '..', 'dist', 'index.css');

// Check if CSS file exists
if (fs.existsSync(cssFilePath)) {
  // Read the current CSS content
  let cssContent = fs.readFileSync(cssFilePath, 'utf-8');
  
  // Remove any existing banner comments to avoid duplication
  cssContent = cssContent.replace(/^\/\*![\s\S]*?\*\/\s*/m, '');
  
  // Prepend the correct banner
  const updatedContent = banner + '\n' + cssContent;
  
  // Write the updated content back to the file
  fs.writeFileSync(cssFilePath, updatedContent, 'utf-8');
  
  console.log(`✅ Added banner with version ${version} to dist/index.css`);
} else {
  console.error('❌ dist/index.css not found. Make sure to run build first.');
  process.exit(1);
}
