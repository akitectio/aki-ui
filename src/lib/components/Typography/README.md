# Typography Component

The Typography component provides a comprehensive text rendering system with consistent styling, semantic meaning, and accessibility features.

## Features

- 🎨 **13 Typography Variants**: From headings (h1-h6) to specialized text (caption, overline, button)
- 🎯 **Semantic HTML**: Automatic element selection based on variant or custom override
- 🌈 **Color System**: Built-in color variants (primary, secondary, success, warning, error, muted)
- ⚖️ **Font Weights**: Light to bold weight options
- 📱 **Responsive**: Automatic size adjustments for different screen sizes
- ♿ **Accessible**: WCAG-compliant contrast ratios and semantic structure
- 🎛️ **Flexible**: Extensive customization options and utility classes

## Basic Usage

```tsx
import { Typography } from "@akitectio/aki-ui";

function MyComponent() {
  return (
    <div>
      <Typography variant="h1">Main Title</Typography>
      <Typography variant="body1">
        This is the main content paragraph with proper styling.
      </Typography>
      <Typography variant="caption" color="secondary">
        Additional context or metadata
      </Typography>
    </div>
  );
}
```

## Typography Variants

### Headings

- `h1` - Main page titles (48px → 60px responsive)
- `h2` - Section titles (36px → 48px responsive)
- `h3` - Subsection titles (30px → 36px responsive)
- `h4` - Minor headings (24px → 30px responsive)
- `h5` - Small headings (20px → 24px responsive)
- `h6` - Smallest headings (18px → 20px responsive)

### Body Text

- `body1` - Primary body text (16px, 1.625 line-height)
- `body2` - Secondary body text (14px, 1.625 line-height)
- `subtitle1` - Important secondary text (18px, medium weight)
- `subtitle2` - Less prominent secondary text (16px, medium weight)

### Specialized

- `caption` - Image captions, metadata (12px)
- `overline` - Category labels, section dividers (12px, uppercase, tracked)
- `button` - Button text styling (14px, medium weight)

## Pre-configured Components

For convenience, we provide pre-configured components:

```tsx
import { H1, H2, Body, Caption, Link, Code } from "@akitectio/aki-ui";

function Example() {
  return (
    <article>
      <H1>Article Title</H1>
      <Body>
        Main content with <Link href="/docs">inline link</Link> and
        <Code>code snippet</Code>.
      </Body>
      <Caption>Published on June 29, 2025</Caption>
    </article>
  );
}
```

## Color Variants

```tsx
<Typography color="primary">Primary text (blue)</Typography>
<Typography color="secondary">Secondary text (gray)</Typography>
<Typography color="success">Success text (green)</Typography>
<Typography color="warning">Warning text (amber)</Typography>
<Typography color="error">Error text (red)</Typography>
<Typography color="muted">Muted text (light gray)</Typography>
```

## Text Modifiers

```tsx
<Typography weight="bold">Bold text</Typography>
<Typography italic>Italic text</Typography>
<Typography underline>Underlined text</Typography>
<Typography uppercase>Uppercase text</Typography>
<Typography truncate className="w-32">Long text that will be truncated...</Typography>
<Typography noWrap>Text that won't wrap</Typography>
```

## Alignment

```tsx
<Typography align="left">Left aligned</Typography>
<Typography align="center">Center aligned</Typography>
<Typography align="right">Right aligned</Typography>
<Typography align="justify">Justified text</Typography>
```

## Custom Components

Override the default HTML element:

```tsx
<Typography variant="h2" component="h1">
  Styled as h2 but rendered as h1 for SEO
</Typography>

<Typography variant="button" component="span">
  Button styling on a span element
</Typography>
```

## Accessibility Features

- **Semantic HTML**: Correct heading hierarchy and semantic elements
- **WCAG Compliance**: Proper contrast ratios for all color variants
- **Screen Reader Support**: Meaningful text content and structure
- **Keyboard Navigation**: Proper focus management for interactive elements

## Theme Integration

Typography automatically adapts to your theme:

```tsx
// Light mode: dark text on light background
// Dark mode: light text on dark background
<Typography>Automatically themed text</Typography>

// Color variants adapt to theme
<Typography color="primary">Theme-aware primary color</Typography>
```

## Best Practices

### 1. Maintain Hierarchy

```tsx
// ✅ Good: Clear hierarchy
<H1>Page Title</H1>
<H2>Section Title</H2>
<H3>Subsection Title</H3>
<Body>Content paragraph</Body>

// ❌ Bad: Inconsistent hierarchy
<H1>Page Title</H1>
<H4>Section Title</H4>  // Skipped h2, h3
<H2>Subsection Title</H2>  // Wrong order
```

### 2. Use Semantic Components

```tsx
// ✅ Good: Semantic meaning
<H1>Article Title</H1>
<Subtitle>Article subtitle</Subtitle>
<Body>Article content...</Body>
<Caption>Author and date</Caption>

// ❌ Bad: Visual-only styling
<Typography variant="h1">Article Title</Typography>
<Typography variant="h1" component="p">Not really a heading</Typography>
```

### 3. Consistent Color Usage

```tsx
// ✅ Good: Meaningful color usage
<Typography color="error">Error message</Typography>
<Typography color="success">Success message</Typography>
<Typography color="secondary">Helper text</Typography>

// ❌ Bad: Random color usage
<Typography color="error">Regular text</Typography>  // Confusing
```

### 4. Responsive Considerations

```tsx
// ✅ Good: Let variants handle responsiveness
<H1>Responsive heading</H1>

// ✅ Good: Custom responsive classes when needed
<Typography className="text-sm md:text-base lg:text-lg">
  Custom responsive text
</Typography>
```

## Advanced Usage

### Custom Styling with Tailwind

```tsx
<Typography
  variant="h2"
  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
>
  Gradient text heading
</Typography>
```

### Form Integration

```tsx
<div>
  <Label htmlFor="email">Email Address</Label>
  <input id="email" type="email" />
  <HelperText>We'll never share your email</HelperText>
  <ErrorText>Please enter a valid email</ErrorText>
</div>
```

### Code Documentation

```tsx
<div>
  <Body>Install the package:</Body>
  <Pre>npm install @akitectio/aki-ui</Pre>
  <Body>
    Then import components:{" "}
    <Code>import {Button} from '@akitectio/aki-ui'</Code>
  </Body>
</div>
```

## Performance Notes

- Typography components are lightweight and performant
- No runtime style generation - uses Tailwind CSS classes
- Tree-shakeable - only import what you use
- Minimal bundle impact when using pre-configured variants

## Related Components

- **Button**: Uses Typography for consistent text styling
- **Form Components**: Integrate with Label, ErrorText, and HelperText
- **Card**: Often contains Typography for titles and content
- **Alert**: Uses Typography variants for consistent messaging
