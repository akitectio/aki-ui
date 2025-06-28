<div align="center">

# Aki UI

**Build beautiful websites faster with React components powered by Tailwind CSS**

[![npm version](https://badge.fury.io/js/@akitectio%2Faki-ui.svg)](https://badge.fury.io/js/@akitectio%2Faki-ui)
[![npm downloads](https://img.shields.io/npm/dm/@akitectio/aki-ui.svg)](https://www.npmjs.com/package/@akitectio/aki-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://akitectio.github.io/aki-ui/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[📖 Documentation](https://akitectio.github.io/aki-ui/) • [📦 NPM Package](https://www.npmjs.com/package/@akitectio/aki-ui) • [🐛 GitHub](https://github.com/akitectio/aki-ui)

</div>

---

## ✨ Features

- 🎨 **30+ Beautiful Components** - Pre-built and customizable React components
- 🎭 **Theming System** - Full theme customization with CSS variables
- 📱 **Responsive Design** - Mobile-first approach with responsive utilities
- 🌙 **Dark Mode Ready** - Built-in dark mode support
- 🔧 **TypeScript** - Full TypeScript support with type definitions
- 🚀 **Modern Stack** - Built with React 18 and Tailwind CSS
- 📚 **Storybook** - Interactive component documentation
- 🎯 **Accessibility** - WCAG compliant components
- 🌍 **RTL Support** - Right-to-left language support

## 🚀 Quick Start

### Installation

```bash
npm install @akitectio/aki-ui
```

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

## 📋 Table of Contents

- [Installation](#-installation)
- [Components](#-components)
- [Theming](#-theming)
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

2. Import the CSS styles in your main file:

```jsx
import "@akitectio/aki-ui/css";
```

3. Start using components:

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

```
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

Visit our [Storybook documentation](https://akitectio.github.io/aki-ui/) to:

- 🎮 **Interactive Examples** - Try components with live code examples
- 🎨 **Design System** - Explore our design tokens and guidelines
- 📚 **API Reference** - Complete component API documentation
- 🎯 **Best Practices** - Learn how to use components effectively

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guide](CONTRIBUTING.md) to get started.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Write tests for your changes
5. Run the test suite: `npm test`
6. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ by [Akitect.io](https://akitect.io)**

[🌟 Star us on GitHub](https://github.com/akitectio/aki-ui)

</div>
