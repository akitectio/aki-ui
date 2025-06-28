#!/bin/bash

# Build and publish script for Aki UI MCP Server

set -e

echo "🚀 Publishing Aki UI MCP Server..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Run this script from the mcp directory."
    exit 1
fi

# Check if logged in to npm
if ! npm whoami > /dev/null 2>&1; then
    echo "❌ Error: Not logged in to npm. Run 'npm login' first."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Type check
echo "🔍 Type checking..."
npm run type-check

# Build the project
echo "🏗️ Building project..."
npm run build

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed - dist directory not found."
    exit 1
fi

# Check if the main file exists
if [ ! -f "dist/index.js" ]; then
    echo "❌ Error: Build failed - dist/index.js not found."
    exit 1
fi

# Make the CLI executable
chmod +x dist/index.js

# Dry run to check what will be published
echo "🔍 Checking what will be published..."
npm pack --dry-run

# Ask for confirmation
echo "📋 Package contents shown above."
read -p "Do you want to continue with publishing? (y/N): " confirm
if [[ $confirm != [yY] && $confirm != [yY][eE][sS] ]]; then
    echo "❌ Publishing cancelled."
    exit 0
fi

# Publish to npm
echo "📤 Publishing to npm..."
npm publish --access public

echo "✅ Successfully published Aki UI MCP Server!"
echo "📦 Install with: npm install -g @akitectio/aki-ui-mcp-server"
echo "🔧 Run with: aki-ui-mcp"
