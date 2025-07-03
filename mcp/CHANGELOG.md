# Changelog

All notable changes to the Aki UI MCP Server will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-06-29

### New Features

- **Dedicated Optimization Tool**

  - `optimize_component` - New specialized tool for optimizing React components
  - Performance optimization suggestions
  - Accessibility improvements
  - Bundle size optimizations
  - Best practices recommendations

- **Dedicated Validation Tool**
  - `validate_code` - New specialized tool for validating React/Aki UI components
  - Comprehensive error and warning detection
  - Line-specific feedback
  - Best practices validation

## [0.2.1] - 2025-07-03

### Major Features

- **🚀 Automated Component Discovery System**

  - Replaced hardcoded component list with automated parsing of Aki UI source
  - MCP server now automatically discovers all components from `src/lib/components/index.ts`
  - Component metadata is generated and synced during build process
  - No more manual updates needed when adding new components

- **📁 Component Metadata Generation**

  - New `component-metadata-sync.ts` script parses Aki UI source and generates comprehensive metadata
  - Metadata includes component names, descriptions, categories, types, props, examples, and accessibility info
  - Metadata file is auto-generated and kept in sync with Aki UI changes

- **🔄 Build Process Integration**

  - Metadata sync integrated into Aki UI build workflow
  - `npm run build` automatically updates MCP component metadata
  - `npm run mcp:sync-metadata` command for manual sync
  - Metadata files excluded from git to prevent conflicts

- **📖 Enhanced Documentation**
  - Added `COMPONENT_AUTO_DISCOVERY.md` with complete workflow documentation
  - Test scripts for verifying component discovery functionality
  - Status check script for monitoring sync status

### Technical Improvements

- **Component Discovery Architecture**

  - Separated metadata generation (build-time) from metadata consumption (runtime)
  - MCP server reads from generated metadata file instead of parsing source directly
  - Works in both development and production environments
  - Supports distributed package architecture

- **Robust Metadata Loading**
  - Multiple fallback paths for metadata file location
  - Graceful handling of missing metadata files
  - Better error reporting and logging

### Workflow Changes

- **For Developers Adding Components:**

  1. Add component to `src/lib/components/index.ts` with proper comment format
  2. Run `npm run build` or `npm run mcp:sync-metadata`
  3. Component automatically available in all MCP tools

- **For MCP Server Distribution:**
  - Metadata file bundled with MCP server package
  - No dependency on Aki UI source files at runtime
  - Compatible with npm package distribution model

### Breaking Changes

- Removed hardcoded component list from `component-discovery.ts`
- Component discovery now requires metadata file to be generated first
- Added metadata file paths to `.gitignore`

### Migration Guide

- Run `npm run mcp:sync-metadata` to generate initial metadata file
- Update any custom scripts that relied on hardcoded component lists
- See `COMPONENT_AUTO_DISCOVERY.md` for complete workflow documentation

## [Unreleased]

### Added

- **Expanded Component Coverage**

  - Component discovery now covers 30+ Aki UI components (up from ~10)
  - Added support for Accordion, Avatar, Breadcrumb, ButtonGroup, Checkbox, Chip, Divider, Drawer, Dropdown, FloatingLabel, FormLayout, InputGroup, Modal, Pagination, Popover, Radio, Select, Skeleton, Spinner, Stack, Switch, Tabs, Toast, Tooltip, Typography, VerticalNavbar
  - Comprehensive component categorization and metadata

- **Form Tools (New Tool Category)**

  - `generate_form` - Generate form components with validation schemas
  - `validate_form_schema` - Validate form schemas and types
  - `suggest_form_fields` - Smart field suggestions based on data types
  - `optimize_form_layout` - Form layout optimization and accessibility compliance

- **Layout Tools (New Tool Category)**

  - `generate_layout` - Generate responsive layout components
  - `calculate_grid` - Grid system calculator and optimization
  - `check_responsive` - Responsive design validation
  - `suggest_layout_patterns` - Layout pattern recommendations

- **Testing Tools (New Tool Category)**

  - `generate_tests` - Generate component tests (unit, integration, accessibility)
  - `audit_accessibility` - Automated accessibility auditing
  - `benchmark_performance` - Performance benchmarking and optimization
  - `setup_visual_testing` - Visual regression testing support

- **Enhanced Documentation**

  - Comprehensive "Missing/Incomplete Areas" section in README
  - Detailed roadmap for future tool categories
  - Contributing guidelines for expanding tool coverage
  - Examples for all new tool interactions

- **Project Initialization Tool**
  - `init_project` - Initialize complete React projects with Aki UI setup
  - Support for Vite, Next.js, and Create React App project types
  - Pre-configured templates with TypeScript, routing, authentication, forms
  - Custom theme integration and example components
  - Comprehensive project structure with best practices

### Changed

- **Version Synchronization** - MCP server version now syncs with main @akitectio/aki-ui package
- **Workflow Integration** - Automated version bumping in CI/CD pipeline
- **Tool Architecture** - Modular tool system with dedicated classes for each category
- **Documentation** - Updated README with comprehensive tool listings and examples

## [1.0.0] - 2024-12-19

### Initial Release

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
