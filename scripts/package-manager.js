#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const packageManagers = {
  npm: {
    lockFile: 'package-lock.json',
    installCmd: 'npm install',
    buildCmd: 'npm run build',
    storybookCmd: 'npm run storybook',
    testCmd: 'npm test'
  },
  yarn: {
    lockFile: 'yarn.lock', 
    installCmd: 'yarn install',
    buildCmd: 'yarn build',
    storybookCmd: 'yarn storybook',
    testCmd: 'yarn test'
  },
  pnpm: {
    lockFile: 'pnpm-lock.yaml',
    installCmd: 'pnpm install',
    buildCmd: 'pnpm build', 
    storybookCmd: 'pnpm storybook',
    testCmd: 'pnpm test'
  }
};

function detectPackageManager() {
  const cwd = process.cwd();
  
  // Check for lock files
  for (const [manager, config] of Object.entries(packageManagers)) {
    if (fs.existsSync(path.join(cwd, config.lockFile))) {
      return manager;
    }
  }
  
  // Check for package manager in package.json
  try {
    const packageJson = JSON.parse(fs.readFileSync(path.join(cwd, 'package.json'), 'utf8'));
    if (packageJson.packageManager) {
      const pm = packageJson.packageManager.split('@')[0];
      if (packageManagers[pm]) {
        return pm;
      }
    }
  } catch (error) {
    // Ignore error
  }
  
  // Check for globally installed package managers
  try {
    execSync('pnpm --version', { stdio: 'ignore' });
    return 'pnpm';
  } catch {}
  
  try {
    execSync('yarn --version', { stdio: 'ignore' });
    return 'yarn';
  } catch {}
  
  return 'npm'; // Default fallback
}

function checkPackageManager(manager) {
  try {
    execSync(`${manager} --version`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function setupPackageManager(manager) {
  console.log(`🔧 Setting up for ${manager}...`);
  
  const config = packageManagers[manager];
  
  if (!checkPackageManager(manager)) {
    console.log(`❌ ${manager} is not installed globally.`);
    
    if (manager === 'pnpm') {
      console.log('Install pnpm: npm install -g pnpm');
    } else if (manager === 'yarn') {
      console.log('Install yarn: npm install -g yarn');
    }
    return false;
  }
  
  return true;
}

function getCommands(manager = null) {
  const detected = manager || detectPackageManager();
  const config = packageManagers[detected];
  
  console.log(`📦 Package Manager: ${detected}`);
  console.log(`📄 Lock File: ${config.lockFile}`);
  console.log('');
  console.log('Available Commands:');
  console.log(`  Install:    ${config.installCmd}`);
  console.log(`  Build:      ${config.buildCmd}`);
  console.log(`  Storybook:  ${config.storybookCmd}`);
  console.log(`  Test:       ${config.testCmd}`);
  
  return { manager: detected, config };
}

// CLI usage
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (command === 'detect') {
    const manager = detectPackageManager();
    console.log(manager);
  } else if (command === 'setup') {
    const manager = args[1] || detectPackageManager();
    setupPackageManager(manager);
  } else if (command === 'info' || !command) {
    getCommands(args[1]);
  } else {
    console.log('Usage: node package-manager.js [detect|setup|info] [npm|yarn|pnpm]');
  }
}

export { detectPackageManager, setupPackageManager, getCommands, packageManagers };
