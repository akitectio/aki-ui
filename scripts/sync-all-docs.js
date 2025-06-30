#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read package.json files
const mainPackageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
const mcpPackageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../mcp/package.json'), 'utf8'));

// Get component count by counting files in lib/components
const componentsDir = path.join(__dirname, '../src/lib/components');
let componentCount = 0;
try {
    const componentFiles = fs.readdirSync(componentsDir, { withFileTypes: true });
    componentCount = componentFiles.filter(dirent =>
        dirent.isDirectory() || (dirent.isFile() && dirent.name.endsWith('.tsx') && !dirent.name.includes('.stories.'))
    ).length;
} catch (error) {
    componentCount = 37; // fallback
}

// Get current date for updates
const updateDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

console.log(`📦 Main package version: ${mainPackageJson.version}`);
console.log(`🔧 MCP package version: ${mcpPackageJson.version}`);
console.log(`🧩 Component count: ${componentCount}+`);
console.log(`📅 Update date: ${updateDate}`);

// Template cho llms.txt (file ngắn)
const llmsTemplate = `# Aki UI

> A modern React component library built with TypeScript and Tailwind CSS, featuring ${componentCount}+ beautiful components with complete theming system, dark mode support, and AI-friendly documentation.

## Key Information

**Technology Stack:** React 18, TypeScript, Tailwind CSS, Storybook
**Components:** ${componentCount}+ pre-built UI components 
**Features:** Dark mode, RTL support, responsive design, accessibility focus
**Package:** @akitectio/aki-ui on NPM
**Version:** ${mainPackageJson.version}
**Last Updated:** ${updateDate}

## Documentation

- [Storybook Documentation](https://aki-ui.akitect.io/storybook) - Interactive component documentation and playground
- [NPM Package](https://www.npmjs.com/package/@akitectio/aki-ui) - Installation and package information
- [GitHub Repository](https://github.com/akitectio/aki-ui) - Source code and issues

## Component Categories

- [Layout & Navigation](https://aki-ui.akitect.io/storybook/?path=/docs/components-grid--docs) - Grid, Stack, Breadcrumb, Pagination
- [Form Controls](https://aki-ui.akitect.io/storybook/?path=/docs/components-button--docs) - Button, Input, Select, Checkbox, Radio, Switch, Slider, FormControl
- [Data Display](https://aki-ui.akitect.io/storybook/?path=/docs/components-card--docs) - Card, DataTable, Badge, Avatar, Chip, Alert
- [Feedback & Overlays](https://aki-ui.akitect.io/storybook/?path=/docs/components-modal--docs) - Modal, Drawer, Toast, Tooltip, Popover, Spinner, Skeleton
- [Interactive](https://aki-ui.akitect.io/storybook/?path=/docs/components-dropdown--docs) - Dropdown, Tabs, Accordion, Chatbot

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

**Installation:** \`npm install -g @akitectio/aki-ui-mcp-server\`  
**NPM Package:** [@akitectio/aki-ui-mcp-server](https://www.npmjs.com/package/@akitectio/aki-ui-mcp-server)  
**Version:** ${mcpPackageJson.version}

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
**Version:** ${mainPackageJson.version}
**Homepage:** https://akitect.io
`;

// Đọc file llms-full.txt hiện tại và cập nhật
let llmsFullContent = fs.readFileSync(path.join(__dirname, '../public/llms-full.txt'), 'utf8');

// Cập nhật version trong file llms-full.txt
llmsFullContent = llmsFullContent.replace(
    /\*\*Version:\*\* \d+\.\d+\.\d+/g,
    `**Version:** ${mainPackageJson.version}`
);

// Cập nhật component count
llmsFullContent = llmsFullContent.replace(
    /featuring \d+\+ beautiful components/g,
    `featuring ${componentCount}+ beautiful components`
);

llmsFullContent = llmsFullContent.replace(
    /\*\*Components:\*\* \d+\+ pre-built UI components/g,
    `**Components:** ${componentCount}+ pre-built UI components`
);

// Cập nhật thông tin trong Project Overview section
llmsFullContent = llmsFullContent.replace(
    /\*\*Name:\*\* @akitectio\/aki-ui\n\*\*Version:\*\* \d+\.\d+\.\d+/g,
    `**Name:** @akitectio/aki-ui\n**Version:** ${mainPackageJson.version}`
);

// Cập nhật MCP version trong file
llmsFullContent = llmsFullContent.replace(
    /npm install -g @akitectio\/aki-ui-mcp@\d+\.\d+\.\d+/g,
    `npm install -g @akitectio/aki-ui-mcp@${mcpPackageJson.version}`
);

// Ghi file
fs.writeFileSync(path.join(__dirname, '../public/llms.txt'), llmsTemplate);
fs.writeFileSync(path.join(__dirname, '../public/llms-full.txt'), llmsFullContent);

console.log(`✅ Updated LLM documentation files`);
console.log('📄 Files updated:');
console.log('   - public/llms.txt');
console.log('   - public/llms-full.txt');
console.log(`🔄 Synced versions: Main ${mainPackageJson.version}, MCP ${mcpPackageJson.version}`);
