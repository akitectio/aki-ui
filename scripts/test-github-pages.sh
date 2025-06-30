#!/bin/bash

# Test deployment setup script
echo "🚀 Testing GitHub Pages deployment setup..."

# Check if secrets are documented
echo ""
echo "📋 Required GitHub Secrets:"
echo "  ✓ NEXT_PUBLIC_GA_ID: G-SCVKWYC8YX"
echo ""

# Test local build with production env
echo "🔨 Testing production build..."
cd website

# Set production environment
export NODE_ENV=production
export NEXT_PUBLIC_GA_ID=G-SCVKWYC8YX
export NEXT_PUBLIC_SITE_URL=https://aki-ui.akitect.io

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🏗️  Building website..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📁 Output directory: website/out"
    echo "📊 Build size:"
    du -sh out/
    echo ""
    echo "🔍 Analytics check:"
    if grep -r "G-SCVKWYC8YX" out/ > /dev/null; then
        echo "  ✅ Google Analytics ID found in build"
    else
        echo "  ❌ Google Analytics ID not found in build"
    fi
    echo ""
    echo "🌐 To test locally:"
    echo "  cd website/out && python3 -m http.server 8000"
    echo "  Then visit: http://localhost:8000"
else
    echo "❌ Build failed!"
    exit 1
fi
