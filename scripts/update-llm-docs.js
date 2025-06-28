#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read package.json để lấy thông tin mới nhất
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));

// Template cho llms.txt (file ngắn)
const llmsTemplate = `# Aki UI

> A modern React component library built with TypeScript and Tailwind CSS, featuring 37+ beautiful components with complete theming system, dark mode support, and AI-friendly documentation.

## Key Information

**Technology Stack:** React 18, TypeScript, Tailwind CSS, Storybook
**Components:** 37+ pre-built UI components 
**Features:** Dark mode, RTL support, responsive design, accessibility focus
**Package:** @akitectio/aki-ui on NPM
**Version:** ${packageJson.version}

## Documentation

- [Storybook Documentation](https://akitectio.github.io/aki-ui/) - Interactive component documentation and playground
- [NPM Package](https://www.npmjs.com/package/@akitectio/aki-ui) - Installation and package information
- [GitHub Repository](https://github.com/akitectio/aki-ui) - Source code and issues

## Component Categories

- [Layout & Navigation](https://akitectio.github.io/aki-ui/?path=/docs/components-grid--docs) - Grid, Stack, Breadcrumb, Pagination
- [Form Controls](https://akitectio.github.io/aki-ui/?path=/docs/components-button--docs) - Button, Input, Select, Checkbox, Radio, Switch, Slider, FormControl
- [Data Display](https://akitectio.github.io/aki-ui/?path=/docs/components-card--docs) - Card, DataTable, Badge, Avatar, Chip, Alert
- [Feedback & Overlays](https://akitectio.github.io/aki-ui/?path=/docs/components-modal--docs) - Modal, Drawer, Toast, Tooltip, Popover, Spinner, Skeleton
- [Interactive](https://akitectio.github.io/aki-ui/?path=/docs/components-dropdown--docs) - Dropdown, Tabs, Accordion, Chatbot

## Installation & Usage

\`\`\`bash
npm install @akitectio/aki-ui
\`\`\`

\`\`\`jsx
import { Button, Card, FormControl } from "@akitectio/aki-ui";
import "@akitectio/aki-ui/css";
\`\`\`

## Theming System

- **Theme Providers:** ThemeProvider, ColorModeProvider, DirectionProvider
- **CSS Variables:** Complete customization with CSS custom properties
- **Dark Mode:** Built-in color mode switching
- **RTL Support:** Right-to-left language support

## AI Integration

- **AI-Friendly:** Works with GitHub Copilot, Cursor, Windsurf, Claude Dev
- **TypeScript Definitions:** Complete type definitions for AI code completion
- **Structured Documentation:** Markdown-based docs optimized for LLM training
- **Component Examples:** Real-world usage patterns for AI code generation
- **MCP Server (Available Now):** Model Context Protocol server for dynamic AI interactions

### MCP Server Features (Available)
- **Project Initialization:** Complete project setup with Vite, Next.js, or Create React App
- Real-time component discovery and search
- Dynamic code generation and validation  
- Interactive documentation queries
- Theme customization assistance
- Code analysis and optimization suggestions

Installation: \`npm install -g @akitectio/aki-ui-mcp\`

## Development

- [Contributing Guide](https://github.com/akitectio/aki-ui/blob/main/CONTRIBUTING.md) - How to contribute to the project
- [Development Setup](https://github.com/akitectio/aki-ui#development) - Local development instructions
- [Storybook Stories](https://github.com/akitectio/aki-ui/tree/main/src/stories) - Component story examples

## Community

- [GitHub Discussions](https://github.com/akitectio/aki-ui/discussions) - Ask questions and share ideas
- [GitHub Issues](https://github.com/akitectio/aki-ui/issues) - Report bugs and request features
- [Support Email](mailto:support@akitect.io) - Direct support from the team

## Company

**Created by:** Akitect.io
**License:** MIT
**Version:** ${packageJson.version}
**Homepage:** https://akitect.io
`;

// Đọc file llms-full.txt hiện tại và cập nhật version
let llmsFullContent = fs.readFileSync(path.join(__dirname, '../public/llms-full.txt'), 'utf8');

// Cập nhật version trong file llms-full.txt
llmsFullContent = llmsFullContent.replace(
    /\*\*Version:\*\* \d+\.\d+\.\d+/g,
    `**Version:** ${packageJson.version}`
);

// Cập nhật thông tin trong Project Overview section
llmsFullContent = llmsFullContent.replace(
    /\*\*Name:\*\* @akitectio\/aki-ui\n\*\*Version:\*\* \d+\.\d+\.\d+/g,
    `**Name:** @akitectio/aki-ui\n**Version:** ${packageJson.version}`
);

// Ghi file
fs.writeFileSync(path.join(__dirname, '../public/llms.txt'), llmsTemplate);
fs.writeFileSync(path.join(__dirname, '../public/llms-full.txt'), llmsFullContent);

console.log(`✅ Updated LLM documentation files with version ${packageJson.version}`);
console.log('📄 Files updated:');
console.log('   - public/llms.txt');
console.log('   - public/llms-full.txt');
