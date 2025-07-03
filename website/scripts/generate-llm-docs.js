#!/usr/bin/env node

import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔄 Generating LLM documentation files for website...');

try {
  // Run the main LLM docs script from parent directory
  execSync('npm run update-llm-docs', { 
    cwd: path.join(__dirname, '../..'), 
    stdio: 'inherit' 
  });
  
  console.log('✅ LLM documentation files generated successfully!');
} catch (error) {
  console.error('❌ Failed to generate LLM documentation files:', error.message);
  process.exit(1);
}
