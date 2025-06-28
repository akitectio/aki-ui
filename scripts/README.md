# Aki UI Scripts

This directory contains automation scripts for the Aki UI project.

## Scripts

### `update-llm-docs.js`

Updates the LLM documentation files (`public/llms.txt` and `public/llms-full.txt`) with the current version from `package.json`.

**Usage:**

```bash
npm run update-llm-docs
```

### `sync-all-docs.js` ⭐ **Recommended**

Advanced script that synchronizes all documentation with:

- Current main package version
- Current MCP package version
- Dynamic component count (scans `src/lib/components/`)
- Current date

**Usage:**

```bash
npm run sync-all-docs
```

## Automation

These scripts are automatically run during:

- ✅ `npm run prepublishOnly` - Before publishing to NPM
- ✅ `npm run build-storybook` - When building Storybook
- ✅ GitHub Actions workflows for publishing

## Integration

The scripts are integrated into the CI/CD pipeline to ensure documentation is always up-to-date:

1. **Before NPM publish** - `prepublishOnly` hook runs `sync-all-docs`
2. **GitHub Actions** - Both main and MCP publish workflows update docs
3. **Storybook builds** - Documentation is updated before building

This ensures that every time you:

- 🚀 Publish a new version
- 📖 Build documentation
- 🤖 Trigger automated workflows

The LLM documentation files will contain the latest information about versions, component counts, and features.
