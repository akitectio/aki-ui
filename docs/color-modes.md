# Color Modes

Aki UI provides built-in support for multiple color modes, including light and dark modes. This allows your application to adapt to user preferences and different viewing conditions.

## Basic Usage

### Using the ColorModeProvider

Wrap your application with the `ColorModeProvider` to enable color mode switching:

```jsx
import { ColorModeProvider } from 'aki-ui';

function App() {
  return (
    <ColorModeProvider defaultMode="light">
      <YourApp />
    </ColorModeProvider>
  );
}
```

### Toggling Color Mode

Use the `useColorMode` hook to access and change the current color mode:

```jsx
import { useColorMode, Button, Icon } from 'aki-ui';

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Button 
      variant="ghost" 
      onClick={toggleColorMode} 
      aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
    >
      <Icon name={colorMode === 'light' ? 'moon' : 'sun'} />
    </Button>
  );
}
```

## System Preference Detection

Aki UI can automatically detect and respect the user's system color mode preference:

```jsx
<ColorModeProvider defaultMode="system">
  <YourApp />
</ColorModeProvider>
```

With `defaultMode="system"`, the initial color mode will be determined by the user's operating system or browser settings using the `prefers-color-scheme` media query.

## Persisting User Preferences

By default, Aki UI will save the user's color mode preference in localStorage:

```jsx
<ColorModeProvider storageKey="my-app-color-mode">
  <YourApp />
</ColorModeProvider>
```

This ensures that the user's preference is remembered between visits. You can customize the storage key using the `storageKey` prop.

## Creating Component Variants for Different Modes

All Aki UI components automatically adapt to the current color mode, but you can also create custom components that respond to the color mode:

```jsx
import { useColorMode } from 'aki-ui';

function CustomComponent() {
  const { colorMode } = useColorMode();
  
  return (
    <div className={colorMode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}>
      This component adapts to the current color mode.
    </div>
  );
}
```

## CSS Variables Approach

Aki UI uses CSS variables for theming, making it easy to implement color modes:

```css
:root {
  /* Light mode (default) */
  --aki-bg-primary: #ffffff;
  --aki-text-primary: #1a202c;
  --aki-border-color: #e2e8f0;
  /* other variables */
}

[data-color-mode="dark"] {
  --aki-bg-primary: #1a202c;
  --aki-text-primary: #f7fafc;
  --aki-border-color: #2d3748;
  /* other variables */
}
```

You can extend these variables in your own CSS or Tailwind configuration.

## Customizing Specific Color Modes

You can provide specific theme overrides for each color mode:

```jsx
<ColorModeProvider
  lightTheme={{
    colors: {
      primary: '#3182ce',
      background: '#ffffff',
      // other colors
    }
  }}
  darkTheme={{
    colors: {
      primary: '#63b3ed',
      background: '#1a202c',
      // other colors
    }
  }}
>
  <YourApp />
</ColorModeProvider>
```

## Handling Images and Media

When using images that need to adapt to color modes, you can use the `useColorMode` hook:

```jsx
import { useColorMode } from 'aki-ui';

function AdaptiveImage() {
  const { colorMode } = useColorMode();
  
  return (
    <img 
      src={colorMode === 'dark' ? '/logo-dark.png' : '/logo-light.png'} 
      alt="Logo" 
    />
  );
}
```

## Best Practices

1. **Use semantic colors**: Define colors based on their function (e.g., `primary`, `background`, `text`) rather than their appearance
2. **Test both modes**: Always test your UI in both light and dark modes
3. **Consider contrast**: Ensure text remains readable in all color modes
4. **Smooth transitions**: Add transitions to color changes for a better user experience
5. **Respect user preferences**: Default to the system preference when possible

## Advanced: Creating Custom Color Modes

Beyond just light and dark, you can create custom color modes like "sepia" or high-contrast modes:

```jsx
<ColorModeProvider
  modes={['light', 'dark', 'sepia', 'high-contrast']}
  modeThemes={{
    light: { /* light theme values */ },
    dark: { /* dark theme values */ },
    sepia: { /* sepia theme values */ },
    'high-contrast': { /* high-contrast theme values */ }
  }}
>
  <YourApp />
</ColorModeProvider>
```

## Next Steps

- Learn about [RTL support](./rtl.md)
- Explore [component customization](./component-customization.md)
