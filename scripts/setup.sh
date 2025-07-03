#!/bin/bash

set -e

echo "🚀 Setting up Aki UI development environment..."

# Detect package manager
PM_DETECTED=$(node scripts/package-manager.js detect)
echo "📦 Detected package manager: $PM_DETECTED"

# Function to setup with specific package manager
setup_with_pm() {
    local pm=$1
    echo "🔧 Setting up with $pm..."
    
    case $pm in
        "npm")
            echo "📥 Installing dependencies with npm..."
            npm install
            
            # Setup website
            echo "🌐 Setting up website..."
            cd website && npm install && cd ..
            
            # Setup MCP
            echo "🔗 Setting up MCP..."
            cd mcp && npm install && cd ..
            ;;
        "yarn")
            echo "📥 Installing dependencies with yarn..."
            
            # Enable corepack for yarn
            if command -v corepack >/dev/null 2>&1; then
                corepack enable
                corepack prepare yarn@stable --activate
            fi
            
            yarn install
            
            # Yarn workspaces should handle subdirectories
            echo "🌐 Setting up workspaces..."
            yarn workspaces focus --production=false
            ;;
        "pnpm")
            echo "📥 Installing dependencies with pnpm..."
            pnpm install
            
            # pnpm should handle workspaces automatically
            echo "🌐 Setting up workspaces..."
            pnpm install -r
            ;;
        *)
            echo "❌ Unsupported package manager: $pm"
            exit 1
            ;;
    esac
}

# Check if specific package manager is requested
if [ "$1" != "" ]; then
    PM_REQUESTED=$1
    echo "🎯 Using requested package manager: $PM_REQUESTED"
    
    # Check if requested PM is available
    if ! command -v $PM_REQUESTED >/dev/null 2>&1; then
        echo "❌ $PM_REQUESTED is not installed"
        echo "Install it first:"
        case $PM_REQUESTED in
            "yarn")
                echo "  npm install -g yarn"
                ;;
            "pnpm") 
                echo "  npm install -g pnpm"
                ;;
        esac
        exit 1
    fi
    
    setup_with_pm $PM_REQUESTED
else
    setup_with_pm $PM_DETECTED
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "🔨 Next steps:"
echo "  Development:  $(node scripts/package-manager.js detect) run dev"
echo "  Storybook:    $(node scripts/package-manager.js detect) run storybook"  
echo "  Build:        $(node scripts/package-manager.js detect) run build"
echo ""
echo "📚 For more commands run: node scripts/package-manager.js info"
