# Aki UI

A modern React component library with Tailwind CSS styling.

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

### Import Aliases

The project uses path aliases for cleaner imports:

```jsx
// Instead of relative imports
import { Button } from '../../../lib/components';

// Use aliases
import { Button } from '@components';
```

Available aliases:
- `@/*` - Points to src/*
- `@lib/*` - Points to src/lib/*
- `@components/*` - Points to src/lib/components/*
- `@stories/*` - Points to src/stories/*
- `@utils/*` - Points to src/lib/utils/* (when created)
- `@types/*` - Points to src/lib/types/* (when created)
- `@assets/*` - Points to src/assets/* (when created)

## Getting Started

### Installation

```bash
npm install aki-ui
```

### Usage

```jsx
import { Button, Card, FormControl } from 'aki-ui';
import 'aki-ui/dist/style.css';

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

## Documentation

For detailed documentation, please see:

- [Introduction](./docs/introduction.md)
- [Why Aki UI](./docs/why-aki-ui.md)
- [Theming](./docs/theming.md)
- [Color Modes](./docs/color-modes.md)
- [RTL Support](./docs/rtl.md)

Or run Storybook to view the documentation in a more interactive format:

```bash
npm run storybook
```

## Available Components

- **Button**: Various styles, sizes, and states
- **Card**: Flexible content container with header, body, footer, and image sections
- **FormControl**: Input fields with validation states, labels, and helper text

## License

MIT
