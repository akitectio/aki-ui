# TypeScript Declaration Files

## Usage in TypeScript Projects

The package includes TypeScript declaration files for proper type support.

### Importing Components

```typescript
import { Button, Card, Alert } from "@akitectio/aki-ui";
```

### Importing Styles

Import the CSS separately:

```typescript
// Import the CSS in your main entry file
import "@akitectio/aki-ui/css";
```

Or using one of the alternate paths:

```typescript
import "@akitectio/aki-ui/style.css";
import "@akitectio/aki-ui/dist/index.css";
```

### Adapters

Adapters for frameworks like Next.js are available via subpaths:

```typescript
import { NextJS } from "@akitectio/aki-ui/adapters";
import { Badge } from "@akitectio/aki-ui/adapters/nextjs";
```

## Troubleshooting

If you encounter declaration file errors in your project, add the following to a `.d.ts` file in your project:

```typescript
declare module "@akitectio/aki-ui";
declare module "@akitectio/aki-ui/css";
declare module "@akitectio/aki-ui/style.css";
declare module "@akitectio/aki-ui/dist/index.css";
```

A sample declaration file is available at [samples/aki-ui.d.ts](./samples/aki-ui.d.ts) that you can copy to your project.
