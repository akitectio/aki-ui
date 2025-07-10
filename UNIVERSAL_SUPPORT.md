# Universal Framework Support - No More Adapters!

Aki UI v1.1.4+ now supports **universal framework compatibility** - one simple import works across all React-based frameworks!

## 🎯 What Changed?

**Before (with adapters):**

```tsx
// ❌ Old approach - different imports for each framework
import { Button } from "@akitectio/aki-ui/adapters/nextjs";
import { Button } from "@akitectio/aki-ui/adapters/remix";
import { Button } from "@akitectio/aki-ui/adapters/gatsby";
```

**Now (universal):**

```tsx
// ✅ New approach - one import works everywhere!
import { Button, Card, Input } from "@akitectio/aki-ui";
```

## 🚀 Supported Frameworks

All React-based frameworks work out of the box:

| Framework        | Support | Version | Notes                     |
| ---------------- | ------- | ------- | ------------------------- |
| React            | ✅ Full | 16.8+   | Standard React support    |
| Next.js          | ✅ Full | 13.0+   | App Router & Pages Router |
| Remix            | ✅ Full | 1.0+    | SSR & hydration optimized |
| Gatsby           | ✅ Full | 4.0+    | Static generation ready   |
| Vite             | ✅ Full | 4.0+    | Hot reload support        |
| Create React App | ✅ Full | 5.0+    | Standard CRA support      |

## 📦 Installation & Usage

```bash
npm install @akitectio/aki-ui
```

```tsx
import { Button, Card, Input, Badge } from "@akitectio/aki-ui";
import "@akitectio/aki-ui/css";

function App() {
  return (
    <Card>
      <h1>
        Universal Components <Badge>Works Everywhere!</Badge>
      </h1>
      <Input placeholder="Type something..." />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## 🛠 Advanced Features

### Framework Detection (Optional)

```tsx
import { getFrameworkInfo } from "@akitectio/aki-ui";

function MyComponent() {
  const { framework, isSSR } = getFrameworkInfo();

  // Optional optimizations based on framework
  if (framework === "nextjs") {
    // Next.js specific logic
  }

  return <div>Running on {framework}</div>;
}
```

### Universal Event Handlers

```tsx
import { createEventHandler } from "@akitectio/aki-ui";

function MyForm() {
  const handleSubmit = createEventHandler((data) => {
    // Works reliably across all frameworks
    console.log("Form submitted:", data);
  });

  return <Button onClick={handleSubmit}>Submit</Button>;
}
```

## 🔄 Migration Guide

If you were using adapters before:

1. **Update imports:**

   ```tsx
   // Old
   import { Button } from "@akitectio/aki-ui/adapters/nextjs";

   // New
   import { Button } from "@akitectio/aki-ui";
   ```

2. **Update package.json:**

   ```bash
   npm update @akitectio/aki-ui
   ```

3. **No other changes needed!** All your existing component usage stays the same.

## ✨ Benefits

- **🎯 Simpler API**: One import path for all frameworks
- **📦 Smaller Bundle**: No duplicate code across adapters
- **🚀 Better Performance**: Optimized universal components
- **🔧 Easier Maintenance**: Single codebase to maintain
- **📚 Cleaner Docs**: Consistent examples across frameworks

## 🤝 Framework-Specific Examples

### Next.js App Router

```tsx
"use client"; // Only for interactive components

import { Button, Card } from "@akitectio/aki-ui";

export default function Page() {
  return (
    <Card>
      <Button>Next.js Component</Button>
    </Card>
  );
}
```

### Remix

```tsx
import { Button, Card } from "@akitectio/aki-ui";

export default function RemixRoute() {
  return (
    <Card>
      <Button>Remix Component</Button>
    </Card>
  );
}
```

### Gatsby

```tsx
import { Button, Card } from "@akitectio/aki-ui";

const GatsbyPage = () => (
  <Card>
    <Button>Gatsby Component</Button>
  </Card>
);

export default GatsbyPage;
```

### Vite React

```tsx
import { Button, Card } from "@akitectio/aki-ui";

function App() {
  return (
    <Card>
      <Button>Vite Component</Button>
    </Card>
  );
}

export default App;
```

## 🔧 Under the Hood

Aki UI achieves universal compatibility through:

1. **Smart Component Wrapping**: Automatic SSR/hydration handling
2. **Framework Detection**: Optional runtime optimizations
3. **Universal Event System**: Consistent behavior across frameworks
4. **TypeScript First**: Full type safety everywhere

## 📞 Support

- 📖 [Full Documentation](https://aki-ui.akitect.io)
- 🐛 [Report Issues](https://github.com/akitectio/aki-ui/issues)
- 💬 [Community Discussions](https://github.com/akitectio/aki-ui/discussions)

---

**🎉 Enjoy the simplified, universal Aki UI experience!**
