#!/bin/bash

# Script to test npm authentication and publishing process
# Run this locally to verify everything works before GitHub Actions

echo "🔍 Testing npm authentication and publishing process..."
echo ""

# Check if logged in
echo "1. Checking npm authentication..."
if npm whoami > /dev/null 2>&1; then
    echo "✅ Logged in as: $(npm whoami)"
else
    echo "❌ Not logged in to npm. Please run: npm login"
    exit 1
fi

# Check package info
PKG_NAME=$(node -p "require('./package.json').name")
PKG_VERSION=$(node -p "require('./package.json').version")

echo ""
echo "2. Package information:"
echo "   Name: $PKG_NAME"
echo "   Version: $PKG_VERSION"

# Check if version already exists
echo ""
echo "3. Checking if version already exists on npm..."
if npm view "$PKG_NAME@$PKG_VERSION" version >/dev/null 2>&1; then
    echo "⚠️  Version $PKG_VERSION already exists on npm"
    echo "   You may need to increment version before publishing"
else
    echo "✅ Version $PKG_VERSION is available"
fi

# Build package
echo ""
echo "4. Building package..."
npm run build

# Test publish (dry run)
echo ""
echo "5. Testing publish (dry run)..."
if [[ $PKG_NAME == @* ]]; then
    echo "   Running: npm publish --dry-run --access public"
    npm publish --dry-run --access public
else
    echo "   Running: npm publish --dry-run"
    npm publish --dry-run
fi

echo ""
echo "✅ Test completed! If no errors above, GitHub Actions should work."
echo ""
echo "To actually publish:"
echo "  - Make sure NPM_TOKEN secret is added to GitHub"
echo "  - Push changes to trigger GitHub Actions"
echo "  - Or run workflow manually from GitHub Actions tab"
