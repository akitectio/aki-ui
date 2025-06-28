# Changelog

All notable changes to the Aki UI MCP Server will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-12-19

### Added

#### Core Features

- **Component Discovery Tools**

  - `search_components` - Search for Aki UI components by name, category, or description
  - `get_component_details` - Get detailed information about specific components including props, examples, and accessibility features
  - `list_all_components` - List all available components with categorization

- **Code Generation Tools**

  - `generate_component` - Generate React component code using Aki UI components
  - `validate_code` - Validate React/Aki UI component code for best practices
  - `optimize_component` - Optimize component code for performance and accessibility
  - Support for forms, dashboards, cards, tables, layouts, and custom components

- **Documentation Tools**

  - `search_docs` - Search Aki UI documentation for specific topics or components
  - `get_examples` - Get usage examples with different complexity levels (basic, intermediate, advanced)
  - `get_best_practices` - Get best practices for accessibility, performance, theming, forms, layouts, and general development

- **Theme Management Tools**
  - `get_theme` - Get current theme configuration
  - `generate_theme` - Generate custom theme configurations with different styles and preferences
  - `apply_theme_vars` - Convert theme configurations to CSS variables or Tailwind config format

#### MCP Protocol Features

- **Prompts**: Pre-built prompts for dashboard and form generation
- **Resources**: Access to component lists, documentation, and theme configurations
- **Tools**: 12 comprehensive tools for AI-assisted development

#### Component Support

- Complete support for all Aki UI components:
  - Button, Card, Input, DataTable, Grid, Alert, Badge, Chatbot
  - Detailed prop definitions and usage examples
  - Accessibility guidelines and best practices

#### AI Integration

- Optimized for use with Claude Desktop, ChatGPT, and other MCP clients
- Real-time component discovery and code generation
- Dynamic documentation access
- Theme customization assistance

### Technical Details

- Built with TypeScript and Model Context Protocol SDK
- Node.js 18+ support
- Global CLI tool (`aki-ui-mcp`)
- Comprehensive error handling and validation
- Type-safe implementation with Zod schemas

### Documentation

- Complete README with installation and usage instructions
- Examples for all supported MCP clients
- Best practices documentation
- Component API reference

### Published

- ✅ Successfully published to npm as `@akitectio/aki-ui-mcp-server@1.0.0`
- 📦 Available for global installation: `npm install -g @akitectio/aki-ui-mcp-server`
- 🔧 Ready for use with Claude Desktop, ChatGPT, and other MCP clients

[1.0.0]: https://github.com/akitectio/aki-ui/releases/tag/mcp-v1.0.0
