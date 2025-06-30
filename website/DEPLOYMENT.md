# Website Deployment to GitHub Pages

This directory contains the Next.js website for Aki UI that gets deployed to GitHub Pages instead of the Storybook.

## Local Development

```bash
# Install dependencies
npm run website:install

# Start development server
npm run website:dev

# Build for production
npm run website:build

# Test complete deployment process
npm run website:test-deploy
```

## GitHub Pages Deployment

The website is automatically deployed to GitHub Pages via GitHub Actions when code is pushed to the `main` branch.

### Deployment Process

1. **Build Library**: The Aki UI library is built first
2. **Install Dependencies**: Website dependencies are installed
3. **Build Website**: Next.js builds the static site with GitHub Pages configuration
4. **Copy Assets**: LLM documentation files are copied
5. **Deploy**: Static files are deployed to GitHub Pages

### Configuration

The website is configured for GitHub Pages with custom domain:

- **Static Export**: `output: 'export'` in `next.config.js`
- **Custom Domain**: `aki-ui.akitect.io` via CNAME file
- **Image Optimization**: Disabled for static export compatibility
- **Trailing Slashes**: Enabled for consistent routing

### URLs

- **Production**: <https://aki-ui.akitect.io>
- **Development**: <http://localhost:3000>

## Features

- 🎨 Complete component documentation
- 🚀 Interactive examples and playground
- 📱 Responsive design
- 🌓 Dark/light mode support
- 📖 LLM integration guides
- 🔧 MCP (Model Context Protocol) documentation
- ♿ Accessibility focused

## Differences from Storybook

The website provides:

- Better SEO optimization
- Custom branding and layout
- Enhanced navigation
- Better mobile experience
- Integrated documentation
- LLM-specific content
