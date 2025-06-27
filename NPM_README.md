# Aki UI

A modern, lightweight React component library built with TypeScript, focusing on accessibility, customization, and developer experience.

## Installation

```bash
npm install @akitectio/aki-ui
# or
yarn add @akitectio/aki-ui
# or
pnpm add @akitectio/aki-ui
```

## Quick Start

```jsx
import { Button, Input, Card } from "@akitectio/aki-ui";
import "@akitectio/aki-ui/dist/index.css";

function App() {
  return (
    <Card>
      <h2>Welcome to Aki UI</h2>
      <Input placeholder="Enter your name" />
      <Button variant="primary" size="lg">
        Get Started
      </Button>
    </Card>
  );
}
```

## Features

- ✨ **Modern Design**: Clean, contemporary UI components
- 🎨 **Fully Customizable**: CSS variables and theme system
- 🌍 **RTL Support**: Built-in right-to-left language support
- 🌙 **Dark Mode**: Automatic and manual dark mode switching
- ♿ **Accessibility First**: WCAG 2.1 compliant components
- 📱 **Responsive**: Mobile-first responsive design
- 🔧 **TypeScript**: Full TypeScript support with type definitions
- 🚀 **Performance**: Optimized bundle size and runtime performance
- 📚 **Storybook**: Interactive component documentation

## Available Components

- **Layout**: Container, Grid, Stack, Divider
- **Navigation**: Breadcrumb, Pagination, Tabs
- **Forms**: Input, Select, Checkbox, Radio, Switch, Slider
- **Feedback**: Alert, Toast, Modal, Spinner, Skeleton
- **Data Display**: Avatar, Badge, Card, Tooltip, Popover
- **Actions**: Button, ButtonGroup, Dropdown
- **And many more...**

## Theme Customization

```jsx
import { AkiUIProvider } from "@akitectio/aki-ui";

const customTheme = {
  colors: {
    primary: "#your-primary-color",
    secondary: "#your-secondary-color",
  },
  // ... other theme options
};

function App() {
  return (
    <AkiUIProvider theme={customTheme}>
      {/* Your app components */}
    </AkiUIProvider>
  );
}
```

## Documentation & Examples

- 📖 **Full Documentation**: [Storybook Documentation](https://akitectio.github.io/aki-ui)
- 🎮 **Interactive Examples**: Explore components in our Storybook
- 🔧 **API Reference**: Complete props and methods documentation
- 🎨 **Design System**: Colors, typography, spacing guidelines

## Browser Support

Aki UI supports all modern browsers:

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/akitectio/aki-ui/blob/main/CONTRIBUTING.md) for details.

### Development

```bash
# Clone the repository
git clone https://github.com/akitectio/aki-ui.git

# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook
```

## Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/akitectio/aki-ui/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/akitectio/aki-ui/discussions)
- 📧 **Email**: [support@akitect.io](mailto:support@akitect.io)

## Changelog

See [CHANGELOG.md](https://github.com/akitectio/aki-ui/blob/main/CHANGELOG.md) for a list of changes.

## License

[MIT](./LICENSE) © [Akitect.io](https://akitect.io)
