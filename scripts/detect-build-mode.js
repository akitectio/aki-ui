#!/usr/bin/env node

/**
 * Script to detect build mode based on branch name
 * Release branches (release-*) should only build in production mode
 */

import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getCurrentBranch() {
    try {
        // Try to get branch from git
        const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
        return branch;
    } catch (error) {
        // Fallback to environment variables (for CI/CD)
        return process.env.GITHUB_REF_NAME ||
            process.env.BRANCH_NAME ||
            process.env.CI_COMMIT_REF_NAME ||
            'main';
    }
}

function isReleaseBranch(branchName) {
    return /^release-/.test(branchName);
}

function setBuildMode() {
    const currentBranch = getCurrentBranch();
    const isRelease = isReleaseBranch(currentBranch);

    console.log(`Current branch: ${currentBranch}`);
    console.log(`Is release branch: ${isRelease}`);

    if (isRelease) {
        console.log('🚀 Release branch detected - setting production mode');
        process.env.NODE_ENV = 'production';

        // Export for shell scripts
        console.log('export NODE_ENV=production');

        // Write to a file for sourcing in shell scripts
        const envFile = join(__dirname, '../.env.build');
        writeFileSync(envFile, 'NODE_ENV=production\n');

        return 'production';
    } else {
        console.log('🔧 Development/main branch detected - setting development mode');
        process.env.NODE_ENV = 'development';

        // Export for shell scripts
        console.log('export NODE_ENV=development');

        // Write to a file for sourcing in shell scripts
        const envFile = join(__dirname, '../.env.build');
        writeFileSync(envFile, 'NODE_ENV=development\n');

        return 'development';
    }
}

function main() {
    const mode = setBuildMode();

    // If called with --json flag, output JSON for CI/CD
    if (process.argv.includes('--json')) {
        console.log(JSON.stringify({
            branch: getCurrentBranch(),
            isRelease: isReleaseBranch(getCurrentBranch()),
            buildMode: mode,
            nodeEnv: mode
        }));
    }

    // Exit with different codes for different modes
    process.exit(mode === 'production' ? 0 : 1);
}

main();

export {
    getCurrentBranch,
    isReleaseBranch,
    setBuildMode
};
