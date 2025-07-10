# Aki UI

> Build beautiful websites faster with React components powered by Tailwind CSS

[![npm version](https://badge.fury.io/js/@akitectio%2Faki-ui.svg)](https://badge.fury.io/js/@akitectio%2Faki-ui)
[![npm downloads](https://img.shields.io/npm/dm/@akitectio/aki-ui.svg)](https://www.npmjs.com/package/@akitectio/aki-ui)
[![MCP Server](https://img.shields.io/npm/v/@akitectio/aki-ui-mcp-server.svg?label=MCP%20Server&color=blue)](https://www.npmjs.com/package/@akitectio/aki-ui-mcp-server)
[![DeepScan grade](https://deepscan.io/api/teams/27426/projects/29883/branches/958357/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=27426&pid=29883&bid=958357)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://aki-ui.akitect.io/storybook)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Links:** [📖 Documentation](https://aki-ui.akitect.io/docs) • [📦 NPM Package](https://www.npmjs.com/package/@akitectio/aki-ui) • [🐛 GitHub](https://github.com/akitectio/aki-ui)

---

## ✨ Features

- 🎨 **48+ Beautiful Components** - Pre-built and customizable React components
- 🎭 **Complete Theming System** - Full theme customization with CSS variables and providers
- 🌙 **Dark Mode Support** - Built-in color mode switching with ColorModeProvider
- 🔧 **Full TypeScript Support** - Complete type definitions and IntelliSense
- 🚀 **Modern Stack** - Built with React 18 and Tailwind CSS
- 📚 **Storybook Documentation** - 40+ interactive component stories
- 🌍 **RTL Support** - Right-to-left language support with DirectionProvider
- 📱 **Responsive Design** - Mobile-first approach with Tailwind utilities
- ♿ **Accessibility Focus** - ARIA attributes and keyboard navigation support
- 🌐 **Multi-Framework Support** - Works with React, Next.js, Remix, Gatsby, and Angular

## 🚀 Quick Start

### Installation

```bash
npm install @akitectio/aki-ui
```

### TypeScript Support

Aki UI includes comprehensive TypeScript declarations. For detailed information about using TypeScript with Aki UI, see [TYPESCRIPT_USAGE.md](./TYPESCRIPT_USAGE.md).

### Basic Usage

```jsx
import { Button, Card, FormControl } from "@akitectio/aki-ui";
import "@akitectio/aki-ui/css";

function App() {
  return (
    <div className="p-6">
      <Card className="max-w-md">
        <Card.Header>
          <h2 className="text-xl font-semibold">Welcome to Aki UI</h2>
        </Card.Header>
        <Card.Body className="space-y-4">
          <FormControl
            label="Email Address"
            placeholder="Enter your email"
            type="email"
          />
          <Button variant="primary" size="lg" className="w-full">
            Get Started
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
```

### MCP Server Installation

For AI tools integration using Model Context Protocol:

```bash
# Install MCP server globally
npm install -g @akitectio/aki-ui-mcp-server

# Verify installation
aki-ui-mcp --version
```

**Configure with Claude Desktop:**

1. Open Claude Desktop settings
1. Add to your MCP configuration:

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

1. Restart Claude Desktop to load the server

## 📋 Table of Contents

- [Installation](#-installation)
- [MCP Server](#mcp-server-installation)
- [Components](#-components)
- [Theming](#-theming)
- [AI Integration](#-ai--llm-integration)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Installation

### Using NPM

Make sure you have [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/) installed in your project.

1. Install Aki UI as a dependency:

```bash
npm install @akitectio/aki-ui
```

1. Import the CSS styles in your main file:

```jsx
import "@akitectio/aki-ui/css";
```

1. Start using components:

```jsx
import { Button, Card } from "@akitectio/aki-ui";
```

### Using CDN

Include the following CSS file in your HTML head:

```html
<link
  href="https://cdn.jsdelivr.net/npm/@akitectio/aki-ui@latest/dist/index.css"
  rel="stylesheet"
/>
```

## 🧩 Components

Aki UI provides a comprehensive set of components organized by category:

### Layout & Navigation

| Component      | Description            |
| -------------- | ---------------------- |
| **Grid**       | Responsive grid system |
| **Stack**      | Flexible layout stack  |
| **Breadcrumb** | Navigation breadcrumbs |
| **Pagination** | Page navigation        |

### Form Controls

| Component       | Description                                     |
| --------------- | ----------------------------------------------- |
| **Button**      | Various button styles and states                |
| **Input**       | Text input with validation                      |
| **Select**      | Dropdown selection                              |
| **Checkbox**    | Checkbox input                                  |
| **Radio**       | Radio button input                              |
| **Switch**      | Toggle switch                                   |
| **Slider**      | Range slider                                    |
| **FormControl** | Complete form control with label and validation |

### Data Display

| Component     | Description                                    |
| ------------- | ---------------------------------------------- |
| **Card**      | Flexible content container                     |
| **DataTable** | Advanced data table with sorting and filtering |
| **Badge**     | Status and label badges                        |
| **Avatar**    | User avatar component                          |
| **Chip**      | Compact elements for tags and filters          |
| **Alert**     | Alert messages                                 |

### Feedback & Overlays

| Component    | Description          |
| ------------ | -------------------- |
| **Modal**    | Modal dialogs        |
| **Drawer**   | Side panel drawer    |
| **Toast**    | Toast notifications  |
| **Tooltip**  | Contextual tooltips  |
| **Popover**  | Rich popover content |
| **Spinner**  | Loading indicators   |
| **Skeleton** | Loading placeholders |

### Interactive

| Component     | Description         |
| ------------- | ------------------- |
| **Dropdown**  | Dropdown menus      |
| **Tabs**      | Tab navigation      |
| **Accordion** | Collapsible content |
| **Chatbot**   | AI chat interface   |

## 🎨 Theming

Aki UI comes with a powerful theming system that allows you to customize the appearance of all components.

### CSS Variables

```css
:root {
  --aki-primary: #3b82f6;
  --aki-secondary: #6b7280;
  --aki-success: #10b981;
  --aki-warning: #f59e0b;
  --aki-error: #ef4444;
}
```

### Dark Mode

```jsx
// Automatic dark mode detection
<div className="dark">
  <Button variant="primary">Dark Mode Button</Button>
</div>
```

## 🌐 Framework Support

Aki UI components work universally across all React-based frameworks **without any adapters**!

| Framework | Status       | Version | Import Path                        |
| --------- | ------------ | ------- | ---------------------------------- |
| React     | ✅ Supported | 16.8.0+ | `@akitectio/aki-ui`                |
| Next.js   | ✅ Supported | 13.0.0+ | `@akitectio/aki-ui`                |
| Remix     | ✅ Supported | 1.0.0+  | `@akitectio/aki-ui`                |
| Gatsby    | ✅ Supported | 4.0.0+  | `@akitectio/aki-ui`                |
| Vite      | ✅ Supported | 4.0.0+  | `@akitectio/aki-ui`                |
| Angular   | 🔄 Planned   | 14.0.0+ | React wrapper via Angular Elements |

### Framework-Specific Examples

**Next.js (App Router):**

```tsx
import { Button, Card } from "@akitectio/aki-ui";

export default function Page() {
  return (
    <Card>
      <Button>Next.js optimized component</Button>
    </Card>
  );
}
```

**Remix:**

```tsx
import { Button, Card } from "@akitectio/aki-ui";

export default function RemixRoute() {
  return (
    <Card>
      <Button>Universal component</Button>
    </Card>
  );
}
```

**Gatsby:**

```tsx
import { Button, Card } from "@akitectio/aki-ui";

export default function GatsbyPage() {
  return (
    <Card>
      <Button>Universal component</Button>
    </Card>
  );
}
```

**Angular (via React Wrapper):**

```typescript
// For Angular projects, you can use React components via Angular Elements
// See FRAMEWORK_SUPPORT.md for detailed integration guide
})
export class AppModule {}
```

```html
<!-- Angular template -->
<aki-card>
  <aki-button variant="primary">Angular integration</aki-button>
</aki-card>
```

## 🛠 Development

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/akitectio/aki-ui.git
cd aki-ui

# Install dependencies
npm install

# Start Storybook development server
npm run storybook
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run storybook    # Start Storybook
npm run test         # Run tests
npm run lint         # Lint code
```

### Project Structure

```text
aki-ui/
├── src/
│   ├── lib/                 # Component library source
│   │   ├── components/      # UI components
│   │   ├── theme/          # Theme system
│   │   └── utils/          # Utility functions
│   ├── stories/            # Storybook stories
│   └── styles/             # Global styles
├── .storybook/             # Storybook configuration
└── public/                 # Public assets
```

## 📖 Documentation

Visit our [Storybook documentation](https://aki-ui.akitect.io/storybook) to:

- 🎮 **Interactive Examples** - Try components with live code examples
- 🎨 **Design System** - Explore our design tokens and guidelines
- 📚 **API Reference** - Complete component API documentation
- 🎯 **Best Practices** - Learn how to use components effectively

## 🤖 AI & LLM Integration

Aki UI is designed to work seamlessly with AI tools and LLMs. Generate beautiful UIs faster and more efficiently!

### 🚀 **Currently Available**

#### AI Coding Assistant Support

Aki UI works perfectly with popular AI coding assistants:

```bash
# Supported AI Tools:
✅ GitHub Copilot
✅ Cursor IDE
✅ Windsurf
✅ Claude Dev
✅ Codeium
✅ Tabnine
✅ ChatGPT Code Interpreter
```

#### Smart Component Generation

Use AI to generate complex layouts instantly with our component library:

```jsx
// Example AI Prompt: "Create a modern dashboard with Aki UI"
import {
  Card,
  DataTable,
  Button,
  Badge,
  Grid,
  Avatar,
  Spinner,
} from "@akitectio/aki-ui";

function AIDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards Generated by AI */}
      <Grid cols={1} mdCols={2} lgCols={4} gap={4}>
        <Card>
          <Card.Body className="flex items-center space-x-4">
            <Avatar size="lg" src="/user-icon.png" />
            <div>
              <p className="text-2xl font-bold">2,547</p>
              <p className="text-gray-600">Total Users</p>
            </div>
            <Badge variant="success">+12%</Badge>
          </Card.Body>
        </Card>
        {/* More AI-generated cards... */}
      </Grid>

      {/* Data Table Generated by AI */}
      <Card>
        <Card.Header>
          <h3 className="text-lg font-semibold">User Management</h3>
          <Button variant="primary" size="sm">
            Add User
          </Button>
        </Card.Header>
        <Card.Body>
          <DataTable
            data={userData}
            columns={userColumns}
            searchable
            sortable
            pagination
          />
        </Card.Body>
      </Card>
    </div>
  );
}
```

#### AI Prompt Templates

Here are proven prompt templates for generating UI with Aki UI:

```bash
# Dashboard Creation
"Create a admin dashboard using @akitectio/aki-ui with sidebar navigation,
stats cards, data table, and charts. Include dark mode support."

# Form Generation
"Build a user registration form using Aki UI FormControl, validation,
and proper accessibility attributes."

# Landing Page
"Design a modern landing page with Aki UI featuring hero section,
feature cards, testimonials, and contact form."

# E-commerce Interface
"Create a product catalog page with Aki UI cards, filters, pagination,
and shopping cart functionality."
```

### 🤖 **AI-Friendly Documentation**

#### Structured Component Data

Our components are documented in an AI-friendly format:

```typescript
// TypeScript definitions help AI understand component APIs
interface ButtonProps {
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

// AI can easily understand and use these patterns
```

#### LLM Training Resources

Perfect for training AI models or feeding context to LLMs:

- **📄 Component Docs** - Structured markdown with examples
- **🔗 TypeScript Types** - Complete interface definitions
- **💡 Usage Patterns** - Real-world implementation examples
- **🎨 Design System** - Theme tokens and styling guidelines
- **🎯 Best Practices** - Accessibility and performance tips

#### MCP Server _(Available Now)_

Real-time AI interaction server using Model Context Protocol:

**NPM Package:** [@akitectio/aki-ui-mcp-server](https://www.npmjs.com/package/@akitectio/aki-ui-mcp-server)  
**Binary:** `aki-ui-mcp`

```bash
# Install globally
npm install -g @akitectio/aki-ui-mcp-server

# Verify installation
aki-ui-mcp --version

# Add to Claude Desktop config
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

**Features:**

- **🔍 Component Discovery** - Search and explore components in real-time
- **🛠 Code Generation** - Generate React components using Aki UI
- **📚 Dynamic Documentation** - Interactive documentation access
- **🎨 Theme Management** - Custom theme generation and management
- **✅ Code Validation** - Real-time code validation and optimization

**Supported Clients:** Claude Desktop, ChatGPT Code Interpreter, and any MCP-compatible AI tool

### 🔮 **Future AI Features** _(Roadmap)_

#### Aki UI GPT _(Coming Soon)_

- **Custom ChatGPT Model** - Trained specifically on Aki UI components
- **Component Generator** - Generate components from natural language
- **Theme Creator** - AI-powered theme generation
- **Layout Assistant** - Smart layout suggestions

#### AI Design Tools _(Planned)_

- **Figma to Code** - Convert Figma designs to Aki UI components
- **Screenshot to UI** - Generate code from UI screenshots
- **Smart Refactoring** - AI-powered code optimization
- **Component Suggestions** - Context-aware component recommendations

## 🌟 Ecosystem

### ✅ **Available Now**

#### 🎨 Design Resources

- **� Design Tokens** - Complete CSS variables and theme system
- **� Theme Providers** - ThemeProvider, ColorModeProvider, DirectionProvider
- **� Component Documentation** - 40+ Storybook stories with examples

#### 🛠 Development Tools

- **📚 Storybook** - Interactive component documentation and playground
- **🔧 TypeScript** - Full type definitions and IntelliSense support
- **⚛️ React Integration** - Optimized for React 18+ applications
- **� Tailwind CSS** - Built on top of Tailwind CSS utilities

### 🚧 **Coming Soon**

#### 🎯 Advanced Features

- **🎯 Figma Design System** - Complete design files for all components
- **📐 Layout Templates** - Pre-built page layouts and sections
- **�🎭 Theme Editor** - Visual theme customization tool
- **📱 Responsive Preview** - Multi-device component testing

#### 🚀 Extensions & Integrations

- **⚛️ Next.js Plugin** - Optimized setup for Next.js applications
- **🔥 Vite Plugin** - Fast development with Vite bundler
- **📦 CLI Tool** - Generate components and scaffolding
- **🌙 Theme Marketplace** - Community-created themes

### 🎯 **Pro Features** _(Roadmap)_

- **🎨 Advanced Components** - Premium component library
- **📊 Dashboard Templates** - Complete admin dashboard layouts
- **🎭 Custom Themes** - Professional theme collections
- **🛠 Design System Kit** - Enterprise design system tools
- **📞 Priority Support** - Direct access to our team

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guide](CONTRIBUTING.md) to get started.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Write tests for your changes
5. Run the test suite: `npm test`
6. Submit a pull request

## 🌍 Community

Join our growing community of developers building beautiful applications with Aki UI:

### 💬 Get Help & Support

- **📚 [Documentation](https://aki-ui.akitect.io/docs)** - Complete guides and API reference
- **💭 [GitHub Discussions](https://github.com/akitectio/aki-ui/discussions)** - Ask questions and share ideas
- **🐛 [GitHub Issues](https://github.com/akitectio/aki-ui/issues)** - Report bugs and request features
- **📧 [Support Email](mailto:duy@akitect.io)** - Direct support from our team
- **💼 [LinkedIn](https://www.linkedin.com/in/duydev)** - Professional updates and articles
- **� [Facebook](https://www.facebook.com/duydev)** - Social updates and community

### 🏆 Showcase

Built something amazing with Aki UI? We'd love to feature your project!

- **🌟 [Submit Your Project](https://github.com/akitectio/aki-ui/discussions/showcase)** - Share your creations
- **📸 [Gallery](https://aki-ui.akitect.io/showcase)** - Browse community projects

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💝 Credits

**Made with ❤️ by [Akitect.io](https://akitect.io)**

[🌟 Star us on GitHub](https://github.com/akitectio/aki-ui)
