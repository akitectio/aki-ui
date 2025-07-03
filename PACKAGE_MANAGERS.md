# Multi Package Manager Support

Aki UI supports npm, yarn, and pnpm package managers with automatic detection and setup.

## Quick Setup

```bash
# Auto-detect and setup
npm run setup

# Or specify package manager
npm run setup:npm
npm run setup:yarn
npm run setup:pnpm
```

## Package Manager Detection

The project automatically detects your preferred package manager:

1. **Lock file detection**: Looks for `package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml`
2. **package.json field**: Checks `packageManager` field
3. **Global availability**: Tests for installed package managers
4. **Fallback**: Defaults to npm

## Available Commands

### NPM

```bash
npm install          # Install dependencies
npm run build        # Build library
npm run storybook    # Start Storybook
npm run dev          # Development mode
```

### Yarn

```bash
yarn install         # Install dependencies
yarn build           # Build library
yarn storybook       # Start Storybook
yarn dev             # Development mode
```

### PNPM

```bash
pnpm install         # Install dependencies
pnpm build           # Build library
pnpm storybook       # Start Storybook
pnpm dev             # Development mode
```

## Configuration Files

- **`.npmrc`**: NPM configuration (already exists)
- **`.yarnrc.yml`**: Yarn Berry configuration with workspace support
- **`.pnpmrc`**: PNPM configuration with peer dependency handling

## CI/CD Support

The GitHub Actions workflow automatically:

- Detects package manager from lock files
- Tests with npm, yarn, and pnpm
- Uses appropriate commands for each PM
- Caches dependencies efficiently

## Troubleshooting

### React 19 Compatibility

All configurations include peer dependency overrides for React 19 compatibility with Storybook.

### Package Manager Installation

```bash
# Install yarn globally
npm install -g yarn

# Install pnpm globally
npm install -g pnpm

# Enable corepack (Node.js 16+)
corepack enable
```

## Utilities

```bash
# Detect current package manager
npm run pm:detect

# Show package manager info
npm run pm:info

# Setup specific package manager
npm run pm:setup
```
