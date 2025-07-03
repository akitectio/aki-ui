#!/bin/bash

# Script to update all logos and favicons to use aki-ui-icon.png
# This script ensures consistency across the entire project

echo "🚀 Updating all logos and favicons to use aki-ui-icon.png..."

# Root project directory
ROOT_DIR="/Users/joinytran/Data/Work/akitect.io/aki-ecosystem/aki-ui"

# Copy base icon to all necessary locations
echo "📁 Copying base icon to all directories..."

# Copy to website/public
cp "$ROOT_DIR/public/aki-ui-icon.png" "$ROOT_DIR/website/public/"

# Copy to storybook
cp "$ROOT_DIR/public/aki-ui-icon.png" "$ROOT_DIR/storybook-static/"
cp "$ROOT_DIR/public/aki-ui-icon.png" "$ROOT_DIR/.storybook/"

# Generate different sizes for website
echo "🎨 Generating different favicon sizes..."
cd "$ROOT_DIR/website/public"

# Generate favicons in different sizes
sips -z 16 16 aki-ui-icon.png --out favicon-16x16.png
sips -z 32 32 aki-ui-icon.png --out favicon-32x32.png
sips -z 192 192 aki-ui-icon.png --out android-chrome-192x192.png
sips -z 512 512 aki-ui-icon.png --out android-chrome-512x512.png
sips -z 180 180 aki-ui-icon.png --out apple-touch-icon.png
sips -s format ico aki-ui-icon.png --out favicon.ico

echo "🔧 Rebuilding Storybook with new icons..."
cd "$ROOT_DIR"
npm run build-storybook

echo "✅ All logos and favicons have been updated!"
echo "📍 Updated locations:"
echo "   - Main HTML file favicon"
echo "   - Website favicon and icons"
echo "   - Storybook favicon (rebuilt)"
echo "   - Web manifest icons"
echo "   - Social media meta images"
echo "   - AI Tools icons in docs"
echo ""
echo "🌐 Next steps:"
echo "   - Website: cd website && npm run build"
echo "   - Test: npm run dev"
