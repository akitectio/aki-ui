# Aki UI MCP Server

Model Context Protocol server for Aki UI component library, providing AI assistants with real-time access to components, documentation, and code generation capabilities.

[![npm version](https://badge.fury.io/js/@akitectio%2Faki-ui-mcp.svg)](https://badge.fury.io/js/@akitectio%2Faki-ui-mcp)
[![Publish MCP Server to npm](https://github.com/akitectio/aki-ui/actions/workflows/publish-mcp.yml/badge.svg)](https://github.com/akitectio/aki-ui/actions/workflows/publish-mcp.yml)

## Features

### 🔍 Component Discovery

- Search and discover Aki UI components by name, category, or description
- Get detailed component information including props, examples, and accessibility features
- List all available components with categorization

### 🛠 Code Generation

- Generate React components using Aki UI
- Support for forms, dashboards, cards, tables, layouts, and custom components
- Code validation and optimization suggestions
- Performance and accessibility improvements

### 📚 Documentation Access

- Search documentation for components, guides, and API references
- Get usage examples with different complexity levels
- Access best practices for accessibility, performance, theming, and more

### 🎨 Theme Management

- Get current theme configuration
- Generate custom themes with different styles and preferences
- Convert theme configurations to CSS variables or Tailwind config

## Installation

### From npm (Recommended)

```bash
# Install globally
npm install -g @akitectio/aki-ui-mcp-server

# Or install locally in your project
npm install @akitectio/aki-ui-mcp-server
```

### From source

```bash
git clone https://github.com/akitectio/aki-ui.git
cd aki-ui/mcp
npm install
npm run build
```

## Usage

### With Claude Desktop

Add to your Claude Desktop configuration:

```json
{
  "mcpServers": {
    "aki-ui": {
      "command": "aki-ui-mcp",
      "args": [],
      "env": {}
    }
  }
}
```

If installed locally:

```json
{
  "mcpServers": {
    "aki-ui": {
      "command": "npx",
      "args": ["@akitectio/aki-ui-mcp-server"],
      "env": {}
    }
  }
}
```

### With Other MCP Clients

```bash
# If installed globally
aki-ui-mcp

# If installed locally
npx @akitectio/aki-ui-mcp-server

# Or in development mode from source
npm start
```

## Available Tools

### Component Discovery

- `search_components` - Search for components by query and category
- `get_component_details` - Get detailed information about a specific component
- `list_all_components` - List all available components

### Code Generation

- `generate_component` - Generate React component code using Aki UI
- `validate_code` - Validate component code for best practices
- `optimize_component` - Optimize code for performance and accessibility

### Documentation

- `search_docs` - Search documentation for topics or components
- `get_examples` - Get usage examples for components
- `get_best_practices` - Get best practices for different topics

### Theme Management

- `get_theme` - Get current theme configuration
- `generate_theme` - Generate custom theme configurations
- `apply_theme_vars` - Convert theme to CSS variables or Tailwind config

## Example Interactions

### Search for Components

```text
Human: Search for form-related components in Aki UI
AI: Using search_components tool with query "form"...
```

### Generate a Dashboard

```text
Human: Generate a dashboard component with stats cards and a data table
AI: Using generate_component tool with type "dashboard"...
```

### Get Best Practices

```text
Human: What are the accessibility best practices for Aki UI?
AI: Using get_best_practices tool with topic "accessibility"...
```

## Resources

The server provides access to these resources:

- `aki-ui://components/list` - Complete component list as JSON
- `aki-ui://docs/llms.txt` - AI-optimized documentation
- `aki-ui://theme/default` - Default theme configuration

## Development

```bash
# Install dependencies
npm install

# Development mode with auto-reload
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check
```

## Integration with Aki UI

This MCP server is designed to work seamlessly with the Aki UI component library, providing AI assistants with deep knowledge of:

- Component APIs and props
- Usage patterns and examples
- Best practices and accessibility guidelines
- Theme customization options
- Code generation templates

## Contributing

This MCP server is part of the Aki UI ecosystem. See the main project's contributing guidelines for information on how to contribute.
