#!/bin/bash

set -e

# Function to show help
show_help() {
    echo "🚀 Aki UI Setup Script"
    echo ""
    echo "Usage: $0 [PACKAGE_MANAGER]"
    echo ""
    echo "PACKAGE_MANAGER:"
    echo "  npm     Use npm as package manager"
    echo "  yarn    Use yarn as package manager"
    echo "  pnpm    Use pnpm as package manager"
    echo "  auto    Auto-detect package manager (default)"
    echo ""
    echo "Examples:"
    echo "  $0          # Auto-detect and use detected package manager"
    echo "  $0 npm      # Force use npm"
    echo "  $0 yarn     # Force use yarn"
    echo "  $0 pnpm     # Force use pnpm"
    echo ""
    exit 0
}

# Check for help flag
if [[ "$1" == "--help" ]] || [[ "$1" == "-h" ]] || [[ "$1" == "help" ]]; then
    show_help
fi

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
                echo "🔧 Enabling corepack..."
                corepack enable
            else
                echo "⚠️  Corepack not available, using global yarn"
            fi
            
            # Check if yarn is available
            if ! command -v yarn >/dev/null 2>&1; then
                echo "📦 Installing yarn globally..."
                npm install -g yarn
            fi
            
            yarn install
            
            # Setup website and mcp manually for yarn v4 compatibility
            echo "🌐 Setting up website..."
            cd website && yarn install && cd ..
            
            echo "🔗 Setting up MCP..."
            cd mcp && yarn install && cd ..
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
