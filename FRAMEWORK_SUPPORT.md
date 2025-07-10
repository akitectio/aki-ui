# 🌐 Framework Support - Simplified

Aki UI components work universally across all React-based frameworks **without any adapters**!

## ✅ Supported Frameworks

| Framework            | Status | Import              | Notes                        |
| -------------------- | ------ | ------------------- | ---------------------------- |
| **React**            | ✅     | `@akitectio/aki-ui` | Works out of the box         |
| **Next.js**          | ✅     | `@akitectio/aki-ui` | App Router & Pages Router    |
| **Remix**            | ✅     | `@akitectio/aki-ui` | SSR & hydration handled      |
| **Gatsby**           | ✅     | `@akitectio/aki-ui` | Static generation compatible |
| **Vite**             | ✅     | `@akitectio/aki-ui` | Fast dev & build             |
| **Create React App** | ✅     | `@akitectio/aki-ui` | Standard setup               |

## 🚀 Quick Start for Any Framework

### 1. Install

```bash
npm install @akitectio/aki-ui
```

### 2. Import & Use

```tsx
import { Button, Card, Input } from "@akitectio/aki-ui";
import "@akitectio/aki-ui/css";

function MyComponent() {
  return (
    <Card className="p-6">
      <h2 className="text-xl mb-4">Universal Components</h2>
      <Input placeholder="Works everywhere" className="mb-4" />
      <Button variant="primary">This works in any React framework!</Button>
    </Card>
  );
}
```

## 📋 Framework-Specific Examples

### Next.js (App Router)

```tsx
"use client"; // Only for interactive components

import { Button, Card } from "@akitectio/aki-ui";
import "@akitectio/aki-ui/css";

export default function Page() {
  return (
    <Card>
      <Button onClick={() => alert("Next.js!")}>Next.js Button</Button>
    </Card>
  );
}
```

### Remix

```tsx
// app/routes/index.tsx
import { Button, Card } from "@akitectio/aki-ui";
import "@akitectio/aki-ui/css";

export default function Index() {
  return (
    <Card>
      <Button onClick={() => alert("Remix!")}>Remix Button</Button>
    </Card>
  );
}
```

### Gatsby

```tsx
// src/pages/index.tsx
import React from "react";
import { Button, Card } from "@akitectio/aki-ui";
import "@akitectio/aki-ui/css";

const IndexPage = () => (
  <Card>
    <Button onClick={() => alert("Gatsby!")}>Gatsby Button</Button>
  </Card>
);

export default IndexPage;
```

### Vite + React

```tsx
// src/App.tsx
import { Button, Card } from "@akitectio/aki-ui";
import "@akitectio/aki-ui/css";

function App() {
  return (
    <Card>
      <Button onClick={() => alert("Vite!")}>Vite Button</Button>
    </Card>
  );
}
```

## 🔧 Advanced Framework Integration

### Framework Detection (Optional)

```tsx
import { getFrameworkInfo } from "@akitectio/aki-ui";

function MyComponent() {
  const { framework, isSSR } = getFrameworkInfo();

  return (
    <div>
      <p>Framework: {framework}</p>
      <p>SSR: {isSSR ? "Yes" : "No"}</p>
    </div>
  );
}
```

### Custom Event Handling

```tsx
import { createEventHandler } from "@akitectio/aki-ui";

const handleClick = createEventHandler((event) => {
  // This works consistently across all frameworks
  console.log("Button clicked:", event);
});
```

## 🎯 Why No Adapters?

- **🎯 Simpler**: One import path for all frameworks
- **🔧 Less Maintenance**: No separate adapter code to maintain
- **📦 Smaller Bundle**: No duplicate code across adapters
- **🚀 Faster Setup**: Works immediately without configuration
- **🔄 Auto-Compatible**: Automatically handles SSR, hydration, and client-side rendering

## 💡 Migration from Adapters

If you were using adapters before, simply update your imports:

```tsx
// ❌ Old (with adapters)
import { Button } from "@akitectio/aki-ui/adapters/nextjs";
import { Button } from "@akitectio/aki-ui/adapters/remix";

// ✅ New (universal)
import { Button } from "@akitectio/aki-ui";
```

## 🆘 Angular Integration

For Angular projects, you can still use Aki UI components with a React wrapper:

```bash
npm install @angular/elements react react-dom @akitectio/aki-ui
```

```typescript
// angular-aki-wrapper.component.ts
import { Component, ElementRef, Input, OnInit } from "@angular/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@akitectio/aki-ui";

@Component({
  selector: "aki-button",
  template: "<div></div>",
})
export class AkiButtonComponent implements OnInit {
  @Input() variant: string = "primary";
  @Input() children: string = "";

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const root = ReactDOM.createRoot(this.elementRef.nativeElement);
    root.render(
      React.createElement(
        Button,
        {
          variant: this.variant,
        },
        this.children
      )
    );
  }
}
```

This simplified approach removes complexity while maintaining full compatibility! 🎉
