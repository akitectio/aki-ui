#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read package.json
const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Create version.ts content
const versionContent = `// Auto-generated version info
// This file is automatically updated when package.json version changes
export const VERSION = '${packageJson.version}';
export const PACKAGE_NAME = '${packageJson.name}';
export const DESCRIPTION = '${packageJson.description}';
`;

// Write to version.ts
const versionPath = path.join(__dirname, '../src/lib/version.ts');
fs.writeFileSync(versionPath, versionContent);

console.log(`✅ Updated version.ts with version ${packageJson.version}`);
