#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read package.json to get current version
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));

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

console.log(`📦 Package version: ${packageJson.version}`);
console.log(`🧩 Component count: ${componentCount}+`);
console.log(`📅 Update date: ${updateDate}`);

// Template for llms.txt (short file)
const llmsTemplate = `# Aki UI

> A modern React component library built with TypeScript and Tailwind CSS, featuring ${componentCount}+ beautiful components with complete theming system, dark mode support, and AI-friendly documentation.

## Key Information

**Technology Stack:** React 18, TypeScript, Tailwind CSS, Storybook
**Components:** ${componentCount}+ pre-built UI components 
**Features:** Dark mode, RTL support, responsive design, accessibility focus
**Package:** @akitectio/aki-ui on NPM
**Version:** ${packageJson.version}
**Updated:** ${updateDate}

## Documentation & Resources

**Main Documentation:** https://aki-ui.akitect.io/docs
**Component Demos:** https://aki-ui.akitect.io/storybook
**Installation Guide:** https://aki-ui.akitect.io/docs/installation
**Theme Customization:** https://aki-ui.akitect.io/docs/theming
**MCP Server Setup:** https://aki-ui.akitect.io/docs/mcp

## Quick Start

\`\`\`bash
npm install @akitectio/aki-ui
\`\`\`

\`\`\`tsx
import { Button, Card, Badge } from '@akitectio/aki-ui';

function App() {
  return (
    <Card>
      <Button variant="primary">Hello World</Button>
      <Badge variant="success">Ready</Badge>
    </Card>
  );
}
\`\`\`

## Available Components

**Layout:** Container, Grid, Stack, Divider, Spacer
**Navigation:** Navbar, Breadcrumb, Pagination, Tabs, Steps
**Data Entry:** Input, Textarea, Select, Checkbox, Radio, Switch, DatePicker, FileUpload
**Data Display:** Table, DataTable, List, Card, Badge, Avatar, Tooltip, Popover
**Feedback:** Alert, Toast, Modal, Drawer, Loading, Progress, Skeleton
**Interactive:** Button, ButtonGroup, Dropdown, Menu, Accordion, Collapse

## AI Integration Features

- llms.txt standard compliance for AI tool integration
- Detailed component documentation with TypeScript definitions
- Usage examples and best practices for each component
- Theme system with CSS custom properties
- Storybook integration for interactive component exploration

## Support & Community

**GitHub:** https://github.com/akitectio/aki-ui
**NPM:** https://www.npmjs.com/package/@akitectio/aki-ui
**Issues:** https://github.com/akitectio/aki-ui/issues
**Website:** https://aki-ui.akitect.io

---
*Generated automatically from Aki UI v${packageJson.version} on ${updateDate}*
`;

// Template for llms-full.txt (comprehensive file)
const llmsFullTemplate = `# Aki UI - Complete Documentation

> A modern React component library built with TypeScript and Tailwind CSS, featuring ${componentCount}+ beautiful components with complete theming system, dark mode support, and AI-friendly documentation.

## Key Information

**Technology Stack:** React 18, TypeScript, Tailwind CSS, Storybook
**Components:** ${componentCount}+ pre-built UI components 
**Features:** Dark mode, RTL support, responsive design, accessibility focus
**Package:** @akitectio/aki-ui on NPM
**Version:** ${packageJson.version}
**Updated:** ${updateDate}

## Documentation & Resources

**Main Documentation:** https://aki-ui.akitect.io/docs
**Component Demos:** https://aki-ui.akitect.io/storybook
**Installation Guide:** https://aki-ui.akitect.io/docs/installation
**Theme Customization:** https://aki-ui.akitect.io/docs/theming
**MCP Server Setup:** https://aki-ui.akitect.io/docs/mcp

## Installation

\`\`\`bash
# Install the package
npm install @akitectio/aki-ui

# Or with yarn
yarn add @akitectio/aki-ui

# Or with pnpm  
pnpm add @akitectio/aki-ui
\`\`\`

## Basic Setup

\`\`\`tsx
// Import CSS in your main file (e.g., main.tsx or App.tsx)
import '@akitectio/aki-ui/styles.css';

// Import components
import { Button, Card, Badge } from '@akitectio/aki-ui';

function App() {
  return (
    <div className="p-4">
      <Card className="max-w-md">
        <h1>Welcome to Aki UI</h1>
        <Button variant="primary">Get Started</Button>
        <Badge variant="success">Ready to use</Badge>
      </Card>
    </div>
  );
}
\`\`\`

## Component Categories

### Layout Components
- **Container:** Responsive container with max-width constraints
- **Grid:** CSS Grid system for layouts
- **Stack:** Flexible vertical/horizontal stacking
- **Divider:** Visual separation between content
- **Spacer:** Flexible spacing component

### Navigation Components  
- **Navbar:** Responsive navigation bar
- **Breadcrumb:** Hierarchical navigation
- **Pagination:** Page navigation controls
- **Tabs:** Tabbed content navigation
- **Steps:** Step-by-step process indicator

### Data Entry Components
- **Input:** Text input with variants and validation
- **Textarea:** Multi-line text input
- **Select:** Dropdown selection with search
- **Checkbox:** Single or grouped checkboxes
- **Radio:** Radio button groups
- **Switch:** Toggle switch control
- **DatePicker:** Date selection component
- **FileUpload:** File upload with drag & drop

### Data Display Components
- **Table:** Basic table component
- **DataTable:** Advanced table with sorting, filtering, pagination
- **List:** Flexible list component
- **Card:** Content container with header/footer
- **Badge:** Status and labeling component
- **Avatar:** User profile images and initials
- **Tooltip:** Contextual information overlay
- **Popover:** Rich content overlay

### Feedback Components
- **Alert:** Status messages and notifications
- **Toast:** Temporary notification messages
- **Modal:** Dialog overlays
- **Drawer:** Slide-out panels
- **Loading:** Loading indicators and spinners
- **Progress:** Progress bars and indicators
- **Skeleton:** Loading placeholder animations

### Interactive Components
- **Button:** Primary action component with variants
- **ButtonGroup:** Grouped button controls
- **Dropdown:** Dropdown menus and actions
- **Menu:** Context and navigation menus
- **Accordion:** Collapsible content sections
- **Collapse:** Show/hide content toggle

## Theme System

Aki UI includes a comprehensive theme system built on CSS custom properties:

\`\`\`tsx
import { ThemeProvider, createTheme } from '@akitectio/aki-ui';

const customTheme = createTheme({
  colors: {
    primary: '#3B82F6',
    secondary: '#6B7280',
    success: '#10B981',
    danger: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6'
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem', 
    lg: '1.5rem'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem'
  }
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
\`\`\`

## Component Usage Examples

### Button Component
\`\`\`tsx
import { Button } from '@akitectio/aki-ui';

// Basic button
<Button variant="primary">Click Me</Button>

// With loading state
<Button variant="primary" isLoading>Submitting...</Button>

// With icons
<Button 
  variant="outline" 
  startIcon={<PlusIcon />}
  endIcon={<ArrowIcon />}
>
  Add Item
</Button>

// Full width
<Button variant="secondary" fullWidth>Full Width</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
\`\`\`

### Card Component
\`\`\`tsx
import { Card } from '@akitectio/aki-ui';

<Card>
  <Card.Header>
    <h3>Card Title</h3>
  </Card.Header>
  <Card.Body>
    <p>Card content goes here</p>
  </Card.Body>
  <Card.Footer>
    <Button variant="primary">Action</Button>
  </Card.Footer>
</Card>
\`\`\`

### Form Components
\`\`\`tsx
import { Input, Select, Checkbox, Button } from '@akitectio/aki-ui';

<form>
  <Input 
    label="Email"
    type="email"
    placeholder="Enter your email"
    required
  />
  
  <Select 
    label="Country"
    options={[
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' }
    ]}
  />
  
  <Checkbox label="Subscribe to newsletter" />
  
  <Button type="submit" variant="primary">
    Submit
  </Button>
</form>
\`\`\`

### DataTable Component
\`\`\`tsx
import { DataTable } from '@akitectio/aki-ui';

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' }
];

const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email' },
  { 
    key: 'status', 
    label: 'Status',
    render: (value) => (
      <Badge variant={value === 'active' ? 'success' : 'secondary'}>
        {value}
      </Badge>
    )
  }
];

<DataTable 
  data={data}
  columns={columns}
  pagination
  searchable
  sortable
/>
\`\`\`

## MCP Server Integration

Aki UI includes a Model Context Protocol (MCP) server for AI assistants:

\`\`\`json
{
  "mcpServers": {
    "aki-ui": {
      "command": "aki-ui-mcp"
    }
  }
}
\`\`\`

Alternative with npx:

\`\`\`json
{
  "mcpServers": {
    "aki-ui": {
      "command": "npx",
      "args": ["@akitectio/aki-ui-mcp-server"]
    }
  }
}
\`\`\`

The MCP server provides:
- Component generation tools
- Theme customization utilities  
- Code validation and optimization
- Usage examples and best practices
- Real-time component documentation

## AI Integration Features

- **llms.txt standard compliance** for AI tool integration
- **Detailed component documentation** with TypeScript definitions
- **Usage examples and best practices** for each component
- **Theme system with CSS custom properties** for easy customization
- **Storybook integration** for interactive component exploration
- **MCP server** for AI assistant integration
- **TypeScript support** with full type definitions
- **Accessibility guidelines** and ARIA attributes
- **Responsive design patterns** and mobile-first approach

## Advanced Usage

### Custom Hooks
\`\`\`tsx
import { useTheme, useToast, useModal } from '@akitectio/aki-ui';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  const { showToast } = useToast();
  const { openModal, closeModal } = useModal();
  
  const handleAction = () => {
    showToast('Action completed!', { variant: 'success' });
  };
  
  return (
    <Button onClick={handleAction}>
      Show Toast
    </Button>
  );
}
\`\`\`

### Compound Components
\`\`\`tsx
import { Accordion } from '@akitectio/aki-ui';

<Accordion>
  <Accordion.Item value="item1">
    <Accordion.Trigger>Section 1</Accordion.Trigger>
    <Accordion.Content>
      Content for section 1
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item2">
    <Accordion.Trigger>Section 2</Accordion.Trigger>
    <Accordion.Content>
      Content for section 2
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
\`\`\`

## Performance Optimization

- **Tree-shakable** - Import only what you need
- **Lazy loading** - Components load on demand
- **Optimized bundle size** - Minimal runtime overhead
- **CSS-in-JS free** - Uses Tailwind CSS for styling
- **Modern React patterns** - Hooks, Suspense, Concurrent features

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## TypeScript Support

Full TypeScript support with comprehensive type definitions:

\`\`\`tsx
import type { ButtonProps, CardProps } from '@akitectio/aki-ui';

interface MyComponentProps {
  buttonProps?: ButtonProps;
  cardProps?: CardProps;
}

function MyComponent({ buttonProps, cardProps }: MyComponentProps) {
  return (
    <Card {...cardProps}>
      <Button {...buttonProps}>Click me</Button>
    </Card>
  );
}
\`\`\`

## Support & Community

**GitHub:** https://github.com/akitectio/aki-ui
**NPM:** https://www.npmjs.com/package/@akitectio/aki-ui
**Issues:** https://github.com/akitectio/aki-ui/issues
**Discussions:** https://github.com/akitectio/aki-ui/discussions
**Website:** https://aki-ui.akitect.io
**Storybook:** https://aki-ui.akitect.io/storybook

---
*Generated automatically from Aki UI v${packageJson.version} on ${updateDate}*
`;

// Write files
console.log('📝 Updating LLM documentation files...');
fs.writeFileSync(path.join(__dirname, '../public/llms.txt'), llmsTemplate);
fs.writeFileSync(path.join(__dirname, '../public/llms-full.txt'), llmsFullTemplate);

// Also copy to website/public if it exists
const websitePublicDir = path.join(__dirname, '../website/public');
if (fs.existsSync(websitePublicDir)) {
  fs.writeFileSync(path.join(websitePublicDir, 'llms.txt'), llmsTemplate);
  fs.writeFileSync(path.join(websitePublicDir, 'llms-full.txt'), llmsFullTemplate);
  console.log('✅ Updated website LLM files:');
  console.log('   - website/public/llms.txt');
  console.log('   - website/public/llms-full.txt');
}

console.log('✅ Updated LLM documentation files:');
console.log('   - public/llms.txt');
console.log('   - public/llms-full.txt');
console.log(`🔗 LLMs.txt URL: https://aki-ui.akitect.io/llms.txt`);
