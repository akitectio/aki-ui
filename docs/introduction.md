# Introduction to Aki UI

Aki UI is a modern, lightweight, and customizable React component library designed to streamline your development workflow while providing a beautiful, consistent user interface.

## What is Aki UI?

Aki UI is a collection of reusable React components built with TypeScript and styled with Tailwind CSS. It provides a comprehensive set of UI components that are:

- **Accessible**: Built with accessibility in mind, following WCAG guidelines
- **Customizable**: Easy to theme and adapt to your brand
- **Responsive**: Designed to work on all devices and screen sizes
- **Type-safe**: Fully typed with TypeScript for better developer experience
- **Lightweight**: Minimal bundle size with tree-shaking support

## Installation

```bash
npm install aki-ui
```

Or with yarn:

```bash
yarn add aki-ui
```

## Basic Usage

```jsx
import { Button, Card } from 'aki-ui';
import 'aki-ui/dist/style.css';

function App() {
  return (
    <Card>
      <Card.Header>
        <h2>Welcome to Aki UI</h2>
      </Card.Header>
      <Card.Body>
        <p>This is a simple example of Aki UI components.</p>
        <Button variant="primary">Get Started</Button>
      </Card.Body>
    </Card>
  );
}
```

## Browser Support

Aki UI supports all modern browsers, including:

- Chrome (and Chromium-based browsers)
- Firefox
- Safari
- Edge

## Next Steps

- Learn [why you should use Aki UI](./why-aki-ui.md)
- Explore [theming capabilities](./theming.md)
- Check out the [available components](../README.md#available-components)
