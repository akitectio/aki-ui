---
applyTo: "**/*.ts,**/*.tsx"
---

# Code Generation Instructions

## Overview

This file contains instructions for AI-powered code generation using the @akitectio/aki-ui component library.

### Tech Stack

- React + TypeScript
- Tailwind CSS
- @akitectio/aki-ui (mandatory UI component library)

### Core Requirements

- All UI components MUST use @akitectio/aki-ui exclusively
- NO other UI libraries permitted (Material-UI, Ant Design, Chakra UI, etc.)
- Custom UI components only when absolutely necessary

## General Guidelines

### 1. Component Import Requirements

- Import components individually for better tree-shaking:

  ```tsx
  // ✅ CORRECT - Import individually
  import { Button, Card, FormControl } from "@akitectio/aki-ui";

  // ❌ WRONG - Never use default imports
  import AkiUI from "@akitectio/aki-ui"; // PROHIBITED
  ```

### 2. Form Components

- Use Aki UI form components with proper validation
- Implement with react-hook-form and zod for type safety

```tsx
import { FormControl, Input, Button } from "@akitectio/aki-ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormControl label="Email" required error={errors.email?.message}>
        <Input type="email" {...register("email")} error={!!errors.email} />
      </FormControl>
      <Button type="submit" loading={isSubmitting}>
        Sign In
      </Button>
    </form>
  );
}
```

### 3. Dashboard Components

- Use Card, Grid, DataTable, and Badge components for dashboard UIs
- Include proper loading and error states

```tsx
import { Card, Grid, Badge, DataTable } from "@akitectio/aki-ui";

export function Dashboard() {
  // Example data structure
  const stats = [
    { label: "Users", value: "2,547", change: "+12%", trend: "up" },
    { label: "Revenue", value: "$43,210", change: "+8%", trend: "up" },
  ];

  return (
    <div className="p-6 space-y-6">
      <Grid cols={{ base: 1, sm: 2, lg: 4 }} gap={4}>
        {stats.map((stat, index) => (
          <Card key={index}>
            <Card.Body className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <Badge variant={stat.trend === "up" ? "success" : "error"}>
                {stat.change}
              </Badge>
            </Card.Body>
          </Card>
        ))}
      </Grid>
    </div>
  );
}
```

### 4. Styling Guidelines

- Use Tailwind CSS for custom styling
- Leverage Aki UI's theme system for consistency
- Follow mobile-first responsive design principles

### 5. Performance Optimization

- Import components individually to enable tree-shaking
- Use React.memo for components that don't change frequently
- Implement useCallback and useMemo for expensive operations
- Use lazy loading with React.lazy for large components

### 6. Accessibility Requirements

- Add proper ARIA labels and descriptions
- Use semantic HTML elements
- Implement keyboard navigation
- Test with screen readers

## Application Theme

```tsx
import { AkiUIProvider } from "@akitectio/aki-ui";

const customTheme = {
  colors: {
    primary: "#3b82f6",
    secondary: "#6b7280",
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
  },
};

export function App() {
  return (
    <AkiUIProvider theme={customTheme} initialColorMode="light">
      {/* Your app content */}
    </AkiUIProvider>
  );
}
```

## Error Handling Best Practices

```tsx
import { ErrorBoundary } from "react-error-boundary";
import { Alert, Button } from "@akitectio/aki-ui";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Alert variant="error">
      <Alert.Title>Something went wrong</Alert.Title>
      <Alert.Description>{error.message}</Alert.Description>
      <Button onClick={resetErrorBoundary} variant="outline" size="sm">
        Try again
      </Button>
    </Alert>
  );
}

export function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {/* Your app content */}
    </ErrorBoundary>
  );
}
```

## Documentation

For more information, refer to these resources:

- [Aki UI Documentation](https://akitectio.github.io/aki-ui/)
- [React Documentation](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

**Example:**

```tsx
import { Card, Grid, Badge, DataTable } from "@akitectio/aki-ui";

export function Dashboard() {
  const stats = [
    { label: "Total Users", value: "2,547", change: "+12%", trend: "up" },
    { label: "Revenue", value: "$43,210", change: "+8%", trend: "up" },
  ];

  return (
    <div className="p-6 space-y-6">
      <Grid cols={{ base: 1, sm: 2, lg: 4 }} gap={4}>
        {stats.map((stat, index) => (
          <Card key={index}>
            <Card.Body className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <Badge variant={stat.trend === "up" ? "success" : "error"}>
                {stat.change}
              </Badge>
            </Card.Body>
          </Card>
        ))}
      </Grid>
    </div>
  );
}
```

### 3. Layout Components

- Use `Grid` component for responsive layouts
- Implement proper navigation with `Button` components
- Include proper semantic HTML structure
- Support dark mode when applicable

### 4. Data Display Components

- Use `DataTable` for tabular data with sorting, filtering, and pagination
- Use `Card` for content grouping
- Use `Badge` for status indicators
- Implement proper loading states

## Theme Integration

### 1. Theme Configuration

```typescript
import { AkiUIProvider } from "@akitectio/aki-ui";

const customTheme = {
  colors: {
    primary: "#3b82f6",
    secondary: "#6b7280",
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "3rem",
  },
};

export function App() {
  return (
    <AkiUIProvider theme={customTheme} initialColorMode="light">
      {/* Your app content */}
    </AkiUIProvider>
  );
}
```

### 2. Dark Mode Support

- Always consider dark mode in component design
- Use theme-aware color classes
- Test components in both light and dark modes

## Performance Guidelines

### 1. Component Optimization

- Use `React.memo` for components that don't change frequently
- Implement `useCallback` and `useMemo` for expensive operations
- Use lazy loading for large components with `React.lazy`

### 2. Bundle Optimization

- **MANDATORY: Import components individually from Aki UI** - `import { Button, Card } from '@akitectio/aki-ui'`
- **PROHIBITED: No default imports** - Never use `import AkiUI from '@akitectio/aki-ui'`
- **REQUIRED: Use dynamic imports for large features**
- **REQUIRED: Implement code splitting at the route level**

## Testing Requirements

### 1. Unit Testing

- Test component rendering with different props
- Test user interactions (clicks, form submissions)
- Test accessibility features
- Mock external dependencies

### 2. Integration Testing

- Test component composition
- Test data flow between components
- Test error handling scenarios

## Accessibility Requirements

### 1. ARIA Support

- Add proper ARIA labels and descriptions
- Use semantic HTML elements
- Implement keyboard navigation
- Ensure proper focus management

### 2. Screen Reader Support

- Test with screen readers
- Provide alternative text for images
- Use proper heading hierarchy

## Error Handling

### 1. Error Boundaries

```tsx
import { ErrorBoundary } from "react-error-boundary";
import { Alert, Button } from "@akitectio/aki-ui";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Alert variant="error">
      <Alert.Title>Something went wrong</Alert.Title>
      <Alert.Description>{error.message}</Alert.Description>
      <Button onClick={resetErrorBoundary} variant="outline" size="sm">
        Try again
      </Button>
    </Alert>
  );
}

export function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {/* Your app content */}
    </ErrorBoundary>
  );
}
```

### 2. Loading States

- Always implement loading states for async operations
- Use Aki UI's loading components and states
- Provide meaningful loading messages

## Security Guidelines

### 1. Input Validation

- Validate all user inputs on both client and server
- Use proper sanitization for user-generated content
- Implement proper authentication and authorization

### 2. Data Handling

- Never expose sensitive data in client-side code
- Use proper error messages that don't leak information
- Implement proper CORS policies

## Code Examples

### Complete Form Component

```tsx
import React from "react";
import { Card, FormControl, Input, Button, Alert } from "@akitectio/aki-ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Submit form logic here
      console.log("Form submitted:", data);
      reset();
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <Card.Header>
        <h2 className="text-xl font-semibold">Contact Us</h2>
      </Card.Header>
      <Card.Body>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormControl label="Name" required error={errors.name?.message}>
            <Input
              {...register("name")}
              error={!!errors.name}
              placeholder="Your name"
            />
          </FormControl>

          <FormControl label="Email" required error={errors.email?.message}>
            <Input
              type="email"
              {...register("email")}
              error={!!errors.email}
              placeholder="your@email.com"
            />
          </FormControl>

          <FormControl label="Message" required error={errors.message?.message}>
            <Input
              {...register("message")}
              error={!!errors.message}
              placeholder="Your message"
              rows={4}
            />
          </FormControl>

          <Button type="submit" loading={isSubmitting} className="w-full">
            Send Message
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
}
```

### Complete Dashboard Component

```tsx
import React, { useState, useEffect } from "react";
import { Card, Grid, Badge, DataTable, Button, Alert } from "@akitectio/aki-ui";

interface DashboardStats {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

interface User {
  id: number;
  name: string;
  email: string;
  status: "Active" | "Pending" | "Inactive";
}

export function Dashboard() {
  const [stats, setStats] = useState<DashboardStats[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API calls
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setStats([
          { label: "Total Users", value: "2,547", change: "+12%", trend: "up" },
          { label: "Revenue", value: "$43,210", change: "+8%", trend: "up" },
          { label: "Orders", value: "1,234", change: "-3%", trend: "down" },
          { label: "Conversion", value: "3.4%", change: "+0.5%", trend: "up" },
        ]);

        setUsers([
          {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            status: "Active",
          },
          {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            status: "Pending",
          },
          {
            id: 3,
            name: "Bob Johnson",
            email: "bob@example.com",
            status: "Inactive",
          },
        ]);
      } catch (err) {
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email", sortable: true },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <Badge
          variant={
            value === "Active"
              ? "success"
              : value === "Pending"
              ? "warning"
              : "secondary"
          }
        >
          {value}
        </Badge>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (_, row: User) => (
        <div className="flex gap-2">
          <Button size="sm" variant="secondary">
            Edit
          </Button>
          <Button size="sm" variant="error">
            Delete
          </Button>
        </div>
      ),
    },
  ];

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <Grid cols={{ base: 1, sm: 2, lg: 4 }} gap={4}>
            {[...Array(4)].map((_, i) => (
              <Card key={i}>
                <Card.Body className="h-20 bg-gray-100"></Card.Body>
              </Card>
            ))}
          </Grid>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <Alert variant="error">
          <Alert.Title>Error</Alert.Title>
          <Alert.Description>{error}</Alert.Description>
        </Alert>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button variant="primary">Add New</Button>
      </div>

      {/* Stats Grid */}
      <Grid cols={{ base: 1, sm: 2, lg: 4 }} gap={4}>
        {stats.map((stat, index) => (
          <Card key={index}>
            <Card.Body className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <Badge variant={stat.trend === "up" ? "success" : "error"}>
                {stat.change}
              </Badge>
            </Card.Body>
          </Card>
        ))}
      </Grid>

      {/* Users Table */}
      <Card>
        <Card.Header>
          <h2 className="text-lg font-semibold">Recent Users</h2>
        </Card.Header>
        <Card.Body>
          <DataTable
            data={users}
            columns={columns}
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

## Additional Resources

- [Aki UI Documentation](https://akitectio.github.io/aki-ui/)
- [React Best Practices](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

Remember to always test your components thoroughly and ensure they meet accessibility standards before deploying to production.
