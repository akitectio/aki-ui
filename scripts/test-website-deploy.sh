#!/bin/bash

# Script to test website deployment locally
set -e

echo "🚀 Testing Website Deployment..."

# Build the library
echo "📦 Building Aki UI library..."
npm run build:prod

# Install website dependencies
echo "📦 Installing website dependencies..."
npm run website:install

# Build website
echo "🏗️  Building website..."
npm run website:build

# Copy LLM files
echo "📋 Copying LLM files..."
cp public/llms.txt website/out/
cp public/llms-full.txt website/out/

# Add .nojekyll file
echo "📄 Adding .nojekyll file..."
touch website/out/.nojekyll

# Add CNAME file for custom domain
echo "🌐 Adding CNAME file..."
echo "aki-ui.akitect.io" > website/out/CNAME

echo "✅ Website built successfully!"
echo "📁 Output directory: website/out"
echo "🌐 You can serve it locally with: cd website/out && python3 -m http.server 8080"
