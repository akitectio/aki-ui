# Aki UI Framework Adapters

This directory contains framework-specific adapters for Aki UI components. These adapters provide optimized implementations for different React frameworks.

## Next.js Adapter

The Next.js adapter provides client-side components that are safe to use in Next.js App Router.

### Installation

```bash
npm install @akitectio/aki-ui
```

### Usage

#### Option 1: Using the Next.js Adapter (Recommended)

```tsx
// Import from the Next.js adapter
import { Badge, Button, Card } from "@akitectio/aki-ui/adapters/nextjs";

// Use in your client components
("use client");

export function MyComponent() {
  return (
    <div>
      <Badge variant="primary">New</Badge>
      <Button onClick={() => alert("Hello!")}>Click me</Button>
      <Card>
        <p>This is a card</p>
      </Card>
    </div>
  );
}
```

#### Option 2: Using Standard Components

```tsx
// Standard usage (works with regular React)
import { Badge, Button, Card } from "@akitectio/aki-ui";

export function MyComponent() {
  return (
    <div>
      <Badge variant="primary">New</Badge>
      <Button onClick={() => alert("Hello!")}>Click me</Button>
      <Card>
        <p>This is a card</p>
      </Card>
    </div>
  );
}
```

### Why Use Adapters?

- **Next.js App Router**: Ensures components are properly marked as client components
- **Server-Side Rendering**: Handles SSR and hydration correctly
- **Performance**: Optimized for each framework's specific needs
- **TypeScript**: Full type support maintained

### Framework Support

| Framework | Status       | Version | Notes                     |
| --------- | ------------ | ------- | ------------------------- |
| Next.js   | ✅ Supported | 13.0.0+ | App Router & Pages Router |
| React     | ✅ Supported | 16.8.0+ | Standard React support    |
| Remix     | 🔄 Planned   | TBD     | Coming soon               |
| Gatsby    | 🔄 Planned   | TBD     | Coming soon               |

### Contributing

To add support for a new framework:

1. Create a new directory under `adapters/[framework-name]`
2. Implement the adapter components
3. Export from the main adapters index
4. Add documentation
5. Update the framework support table

For more information, see the main [Aki UI documentation](https://aki-ui.akitect.io).
