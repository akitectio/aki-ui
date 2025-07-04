# Release Branch Build Configuration

This document explains the release branch build configuration for the Aki UI project.

## Overview

The project now supports special build configurations for release branches that follow the pattern `release-*`. These branches are optimized for production builds and have different behavior compared to development branches.

## Branch Patterns

- **Release branches**: `release-*` (e.g., `release-v1.0.0`, `release-2024-01`)
- **Development branches**: `main`, `develop`, `feature/*`, etc.

## Build Modes

### Release Branch Build (`release-*`)

- **NODE_ENV**: `production`
- **Minification**: Enabled (esbuild)
- **Source maps**: Disabled
- **Tree-shaking**: Enabled with aggressive optimization
- **Target**: `es2015` (broader compatibility)
- **Bundle size check**: Enabled
- **Storybook**: Built for documentation

### Development Branch Build

- **NODE_ENV**: `development`
- **Minification**: Disabled
- **Source maps**: Enabled
- **Tree-shaking**: Basic
- **Target**: `esnext` (faster build)
- **Bundle size check**: Skipped
- **Storybook**: Optional

## Scripts

### New Scripts Added

```bash
# Detect build mode based on branch name
npm run detect-build-mode

# Build for release (production mode)
npm run build:release

# Build for development
npm run build:dev
```

### Existing Scripts Updated

The existing build scripts now automatically detect the branch type and adjust the build configuration accordingly.

## GitHub Actions Workflows

### Release Branch Workflow (`.github/workflows/release-branch-build.yml`)

This workflow runs specifically for release branches:

- **Triggers**:
  - Push to `release-*` branches
  - Pull requests targeting `release-*` branches
- **Features**:
  - Automatic build mode detection
  - Production-optimized builds
  - Bundle size checking
  - Storybook generation
  - Build artifact upload
  - PR comments with build summary

### Main Workflow (`.github/workflows/publish-and-deploy.yml`)

Updated to exclude release branches:

- **Triggers**:
  - Push to `main` branch (excluding `release-*`)
  - Manual workflow dispatch
  - Release events

## Usage

### Creating a Release Branch

```bash
# Create a new release branch
git checkout -b release-v1.2.0

# Push to trigger the release build
git push origin release-v1.2.0
```

### Local Development

```bash
# For development builds
npm run build:dev

# For production builds (simulating release)
NODE_ENV=production npm run build:release

# Auto-detect based on current branch
npm run build
```

### Testing the Build Mode Detection

```bash
# Test the detection script
node scripts/detect-build-mode.js

# Get JSON output for CI/CD
node scripts/detect-build-mode.js --json
```

## Configuration Files

### Files Modified

1. **`vite.config.ts`**: Added conditional build settings based on branch detection
2. **`package.json`**: Added new scripts for release builds
3. **`.github/workflows/publish-and-deploy.yml`**: Excluded release branches
4. **`.github/workflows/release-branch-build.yml`**: New workflow for release branches

### Files Created

1. **`scripts/detect-build-mode.js`**: Branch detection and build mode configuration
2. **`RELEASE_BRANCH_BUILD.md`**: This documentation file

## Environment Variables

The system uses these environment variables for build mode detection:

- `NODE_ENV`: Set to `production` for release branches
- `GITHUB_REF_NAME`: GitHub Actions branch name
- `BRANCH_NAME`: Generic CI/CD branch name
- `CI_COMMIT_REF_NAME`: GitLab CI branch name

## Benefits

1. **Faster Development**: Non-release branches build faster with minimal optimization
2. **Production-Ready Releases**: Release branches are fully optimized for production
3. **Automatic Detection**: No manual configuration needed
4. **CI/CD Integration**: Seamless integration with GitHub Actions
5. **Bundle Size Control**: Automatic size checking for release builds
6. **Documentation**: Automatic Storybook builds for releases

## Troubleshooting

### Build Mode Not Detected

```bash
# Check current branch
git branch --show-current

# Test detection manually
node scripts/detect-build-mode.js
```

### Production Build Issues

```bash
# Clean build
npm run build:clean

# Force production build
NODE_ENV=production npm run build:release
```

### CI/CD Issues

Check the GitHub Actions logs for:

- Branch detection output
- Build mode selection
- Environment variables

## Examples

### Release Branch Names

✅ **Valid release branches**:

- `release-v1.0.0`
- `release-2024-01`
- `release-hotfix-1.2.3`
- `release-beta-2.0.0`

❌ **Invalid release branches**:

- `releases-v1.0.0` (missing hyphen)
- `release_v1.0.0` (underscore instead of hyphen)
- `v1.0.0-release` (wrong order)

### Build Output Comparison

**Development Build**:

```
Building for development...
- Source maps: enabled
- Minification: disabled
- Build time: ~30s
- Bundle size: ~2MB
```

**Release Build**:

```
Building for release in production mode...
- Source maps: disabled
- Minification: enabled
- Tree-shaking: aggressive
- Build time: ~60s
- Bundle size: ~800KB
```
