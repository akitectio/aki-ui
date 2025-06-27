# Aki UI

[![Build, Publish and Deploy](https://github.com/akitectio/aki-ui/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/akitectio/aki-ui/actions/workflows/npm-publish.yml)
[![npm version](https://badge.fury.io/js/@akitectio%2Faki-ui.svg)](https://badge.fury.io/js/@akitectio%2Faki-ui)
[![npm downloads](https://img.shields.io/npm/dm/@akitectio/aki-ui.svg)](https://www.npmjs.com/package/@akitectio/aki-ui)

A modern React component library with Tailwind CSS styling.

## Links

- 📦 [NPM Package](https://www.npmjs.com/package/@akitectio/aki-ui)
- 📖 [Storybook Documentation](https://akitectio.github.io/aki-ui/)
- 🐛 [GitHub Repository](https://github.com/akitectio/aki-ui)

## Project Structure

The project has been reorganized with a cleaner structure:

```bash
aki-ui/
├── .storybook/          # Storybook configuration
├── public/              # Public assets
├── src/
│   ├── lib/             # Component library source
│   │   ├── components/  # UI components organized by type
│   │   └── index.ts     # Library entry point
│   ├── stories/         # Storybook stories
│   ├── App.tsx          # Simple demo application
│   └── index.ts         # Re-exports from lib
└── ...
```

## Getting Started

### Installation

```bash
npm install @akitectio/aki-ui
```

### Usage

```jsx
import { Button, Card, FormControl } from "@akitectio/aki-ui";
import "@akitectio/aki-ui/css";

function App() {
  return (
    <div>
      <Card>
        <Card.Header>
          <h2>Welcome</h2>
        </Card.Header>
        <Card.Body>
          <FormControl
            label="Email"
            placeholder="Enter your email"
            type="email"
          />
          <Button variant="primary" className="mt-4">
            Sign Up
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
```

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/aki-ui.git
cd aki-ui

# Install dependencies
npm install

# Start Storybook
npm run storybook
```

### Storybook Configuration

This project uses Storybook 8.6.14. All Storybook-related packages are pinned to this version to ensure compatibility. When updating Storybook dependencies, make sure to keep them all at the same version to avoid compatibility issues.

```bash
npm install @storybook/react@8.6.14 @storybook/addon-essentials@8.6.14 --save-dev
```

### Component Documentation

This project uses Storybook for component documentation and development. To view the component documentation:

```bash
npm run storybook
```

Then open [http://localhost:6006](http://localhost:6006) in your browser.

## Available Components

- **Button**: Various styles, sizes, and states
- **Card**: Flexible content container with header, body, footer, and image sections
- **FormControl**: Input fields with validation states, labels, and helper text

## License

MIT
