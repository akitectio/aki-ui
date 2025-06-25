# Theming

Aki UI offers a flexible theming system that allows you to customize the look and feel of all components to match your brand. This guide will walk you through the different ways to customize Aki UI.

## Theming Basics

Aki UI's theming is built on top of Tailwind CSS, making it easy to customize if you're already familiar with Tailwind's approach to styling.

### Theme Structure

The Aki UI theme consists of several key elements:

- **Colors**: Primary, secondary, accent, and semantic colors (success, warning, error, info)
- **Typography**: Font families, sizes, weights, and line heights
- **Spacing**: Consistent spacing scale for margins, padding, gaps
- **Borders**: Border widths, radii, and styles
- **Shadows**: Box shadow definitions for different elevation levels
- **Transitions**: Duration and easing functions for animations

## Customization Methods

### 1. Tailwind Configuration (Recommended)

The easiest way to customize Aki UI is by extending your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Add more custom colors as needed
      },
      borderRadius: {
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
      },
      // Customize other theme properties
    },
  },
  plugins: [],
}
```

### 2. Theme Provider

For more dynamic theming (like runtime theme switching), use the AkiThemeProvider:

```jsx
import { AkiThemeProvider } from 'aki-ui';

function App() {
  return (
    <AkiThemeProvider 
      theme={{
        colors: {
          primary: '#0ea5e9',
          secondary: '#6366f1',
          // other colors
        },
        // other theme properties
      }}
    >
      <YourApp />
    </AkiThemeProvider>
  );
}
```

### 3. Component-Level Customization

You can customize individual components using props:

```jsx
<Button 
  variant="primary" 
  className="bg-custom-blue hover:bg-custom-blue-dark" 
>
  Custom Button
</Button>
```

## Creating a Custom Theme

A complete custom theme involves these steps:

1. Define your design tokens (colors, typography, spacing, etc.)
2. Create a theme object or extend the Tailwind config
3. Apply the theme to your application

Here's an example of a complete custom theme:

```jsx
// theme.js
export const myCustomTheme = {
  colors: {
    primary: {
      light: '#4fd1c5',
      main: '#319795',
      dark: '#285e61',
    },
    secondary: {
      light: '#9f7aea',
      main: '#805ad5',
      dark: '#553c9a',
    },
    // Other colors
  },
  typography: {
    fontFamily: {
      sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    // Font sizes, weights, etc.
  },
  // Other theme properties
};

// In your app
import { AkiThemeProvider } from 'aki-ui';
import { myCustomTheme } from './theme';

function App() {
  return (
    <AkiThemeProvider theme={myCustomTheme}>
      <YourApp />
    </AkiThemeProvider>
  );
}
```

## Theme Switching

Aki UI supports runtime theme switching, which is useful for implementing features like dark mode:

```jsx
import { useTheme } from 'aki-ui';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button 
      onClick={() => setTheme(theme.name === 'dark' ? 'light' : 'dark')}
    >
      Toggle Theme
    </Button>
  );
}
```

## Best Practices

- **Design system consistency**: Create a complete theme rather than overriding individual components
- **Color accessibility**: Ensure your theme colors meet WCAG contrast requirements
- **Limit custom CSS**: Try to work within the theming system before adding custom CSS
- **Component composition**: Combine existing components rather than creating entirely new ones

## Next Steps

- Learn about [Color Modes](./color-modes.md)
- Explore [RTL Support](./rtl.md)
