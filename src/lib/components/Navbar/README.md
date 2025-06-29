# Navbar Component

A responsive navigation component for building website headers with brand, navigation links, and mobile toggle functionality.

## Features

- 🎨 Multiple variants (primary, secondary, light, dark, transparent)
- 📱 Responsive design with mobile toggle
- 🔧 Flexible positioning (static, fixed-top, fixed-bottom, sticky-top)
- 🎯 Accessible and keyboard navigable
- 💫 Smooth animations and transitions
- 🧩 Composable sub-components

## Basic Usage

```tsx
import { Navbar } from "@akitectio/aki-ui";

function App() {
  return (
    <Navbar>
      <Navbar.Brand href="/">
        <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
        My App
      </Navbar.Brand>
      <Navbar.Item href="/" active>
        Home
      </Navbar.Item>
      <Navbar.Item href="/about">About</Navbar.Item>
      <Navbar.Item href="/contact">Contact</Navbar.Item>
    </Navbar>
  );
}
```

## API Reference

### Navbar Props

| Prop            | Type                                                             | Default        | Description                                     |
| --------------- | ---------------------------------------------------------------- | -------------- | ----------------------------------------------- |
| `variant`       | `'primary' \| 'secondary' \| 'light' \| 'dark' \| 'transparent'` | `'light'`      | The visual style variant                        |
| `position`      | `'static' \| 'fixed-top' \| 'fixed-bottom' \| 'sticky-top'`      | `'static'`     | The positioning of the navbar                   |
| `expand`        | `boolean \| 'sm' \| 'md' \| 'lg' \| 'xl'`                        | `true`         | When the navbar should expand on larger screens |
| `toggleable`    | `boolean`                                                        | `true`         | Whether to include a toggle button for mobile   |
| `toggleContent` | `React.ReactNode`                                                | hamburger icon | Custom toggle button content                    |
| `onToggle`      | `() => void`                                                     | -              | Callback when toggle button is clicked          |

### Navbar.Brand Props

| Prop      | Type              | Default | Description                              |
| --------- | ----------------- | ------- | ---------------------------------------- |
| `href`    | `string`          | -       | URL to navigate to when brand is clicked |
| `onClick` | `(event) => void` | -       | Custom click handler for brand           |

### Navbar.Item Props

| Prop       | Type              | Default | Description                        |
| ---------- | ----------------- | ------- | ---------------------------------- |
| `href`     | `string`          | -       | URL to navigate to                 |
| `active`   | `boolean`         | `false` | Whether the item is active/current |
| `disabled` | `boolean`         | `false` | Whether the item is disabled       |
| `onClick`  | `(event) => void` | -       | Custom click handler               |

## Examples

### Different Variants

```tsx
// Light navbar (default)
<Navbar variant="light">
  <Navbar.Brand href="/">Brand</Navbar.Brand>
  <Navbar.Item href="/">Home</Navbar.Item>
</Navbar>

// Dark navbar
<Navbar variant="dark">
  <Navbar.Brand href="/">Brand</Navbar.Brand>
  <Navbar.Item href="/">Home</Navbar.Item>
</Navbar>

// Primary navbar
<Navbar variant="primary">
  <Navbar.Brand href="/">Brand</Navbar.Brand>
  <Navbar.Item href="/">Home</Navbar.Item>
</Navbar>

// Transparent navbar (for overlays)
<Navbar variant="transparent">
  <Navbar.Brand href="/">Brand</Navbar.Brand>
  <Navbar.Item href="/">Home</Navbar.Item>
</Navbar>
```

### Fixed Positioning

```tsx
// Fixed to top
<Navbar position="fixed-top" variant="primary">
  <Navbar.Brand href="/">Fixed Top</Navbar.Brand>
  <Navbar.Item href="/">Home</Navbar.Item>
</Navbar>

// Sticky to top (scrolls with content until top)
<Navbar position="sticky-top" variant="light">
  <Navbar.Brand href="/">Sticky Top</Navbar.Brand>
  <Navbar.Item href="/">Home</Navbar.Item>
</Navbar>
```

### With Action Buttons

```tsx
<Navbar variant="light">
  <Navbar.Brand href="/">
    <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
    My App
  </Navbar.Brand>

  <Navbar.Item href="/" active>
    Home
  </Navbar.Item>
  <Navbar.Item href="/features">Features</Navbar.Item>
  <Navbar.Item href="/pricing">Pricing</Navbar.Item>

  {/* Action buttons */}
  <div className="flex items-center space-x-2 ml-auto">
    <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
      Sign In
    </button>
    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
      Sign Up
    </button>
  </div>
</Navbar>
```

### Custom Toggle Button

```tsx
<Navbar
  variant="primary"
  toggleContent={<span>☰</span>}
  onToggle={() => console.log("Toggled!")}
>
  <Navbar.Brand href="/">Brand</Navbar.Brand>
  <Navbar.Item href="/">Home</Navbar.Item>
</Navbar>
```

### With Dropdown Menu

```tsx
<Navbar>
  <Navbar.Brand href="/">Brand</Navbar.Brand>
  <Navbar.Item href="/">Home</Navbar.Item>

  <div className="relative group">
    <Navbar.Item href="#">
      Products
      <svg
        className="w-4 h-4 ml-1 inline"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </Navbar.Item>
    <div className="absolute hidden group-hover:block bg-white border rounded-md shadow-lg min-w-48 mt-1">
      <a
        href="/web-apps"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Web Apps
      </a>
      <a
        href="/mobile-apps"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Mobile Apps
      </a>
    </div>
  </div>
</Navbar>
```

## Responsive Behavior

The Navbar automatically adapts to different screen sizes:

- **Desktop**: All items are displayed horizontally
- **Mobile**: Items are hidden behind a toggle button (hamburger menu)
- **Breakpoints**: You can control when the navbar expands using the `expand` prop

## Accessibility

The Navbar component includes several accessibility features:

- Proper ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- Semantic HTML structure

## Styling

The component uses Tailwind CSS classes and can be customized through:

- CSS custom properties for theme integration
- Tailwind utility classes
- Custom CSS classes via the `className` prop

## Browser Support

Works in all modern browsers that support:

- CSS Flexbox
- CSS Grid (for responsive features)
- ES6+ JavaScript features
