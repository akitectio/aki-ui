# RTL Support

Aki UI provides comprehensive support for Right-to-Left (RTL) languages such as Arabic, Hebrew, Persian, and Urdu. This guide explains how to implement and work with RTL layouts in your Aki UI applications.

## Basic RTL Setup

### Using the RTLProvider

Wrap your application with the `RTLProvider` to enable RTL support:

```jsx
import { RTLProvider } from 'aki-ui';

function App() {
  return (
    <RTLProvider isRTL={true}>
      <YourApp />
    </RTLProvider>
  );
}
```

The `isRTL` prop determines the current direction. You can set this based on user preferences or language settings.

### Auto-detection Based on Language

You can automatically set RTL mode based on the document language:

```jsx
import { RTLProvider } from 'aki-ui';

function App() {
  // Check if the HTML or document lang attribute indicates an RTL language
  const isRTL = ['ar', 'he', 'fa', 'ur'].includes(
    document.documentElement.lang || document.documentElement.dir === 'rtl'
  );
  
  return (
    <RTLProvider isRTL={isRTL}>
      <YourApp />
    </RTLProvider>
  );
}
```

## Toggling RTL Mode

Use the `useRTL` hook to access and change the current RTL setting:

```jsx
import { useRTL, Button } from 'aki-ui';

function RTLToggle() {
  const { isRTL, setRTL } = useRTL();
  
  return (
    <Button 
      onClick={() => setRTL(!isRTL)} 
      aria-label={`Switch to ${isRTL ? 'LTR' : 'RTL'} mode`}
    >
      {isRTL ? 'LTR' : 'RTL'}
    </Button>
  );
}
```

## How Aki UI Components Handle RTL

All Aki UI components are designed to automatically adapt to RTL mode when it's enabled:

1. **Text alignment**: Text aligns to the right in RTL mode
2. **Direction-sensitive icons**: Icons that indicate direction (like arrows) are flipped
3. **Component layouts**: Components with directional layouts (like drawers, tooltips) adapt to RTL
4. **Margins and padding**: Direction-specific margins and paddings are flipped

## HTML and CSS Considerations

When the RTL mode is active, Aki UI applies the `dir="rtl"` attribute to the root element, which enables native RTL support in browsers. Additionally, CSS properties are flipped using logical properties:

- `margin-left` becomes `margin-inline-start`
- `padding-right` becomes `padding-inline-end`
- `border-left` becomes `border-inline-start`
- etc.

## Creating RTL-Aware Custom Components

When creating custom components, use the `useRTL` hook to make them RTL-aware:

```jsx
import { useRTL } from 'aki-ui';

function CustomComponent() {
  const { isRTL } = useRTL();
  
  return (
    <div className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} gap-2`}>
      <div>First item</div>
      <div>Second item</div>
    </div>
  );
}
```

## Using Logical Properties

For maximum RTL compatibility, use logical CSS properties when styling custom components:

```css
/* Instead of this */
.element {
  margin-left: 1rem;
  padding-right: 1rem;
  border-left: 1px solid;
}

/* Use this */
.element {
  margin-inline-start: 1rem;
  padding-inline-end: 1rem;
  border-inline-start: 1px solid;
}
```

Tailwind CSS users can use the following utilities:

```jsx
<div className="ms-4 pe-4 border-s">
  {/* Content */}
</div>
```

Where:
- `ms-4` is margin-inline-start (left in LTR, right in RTL)
- `pe-4` is padding-inline-end (right in LTR, left in RTL)
- `border-s` is border-inline-start (left border in LTR, right in RTL)

## Handling User Input

For input fields like text areas, you might need to set the direction explicitly:

```jsx
import { useRTL, TextArea } from 'aki-ui';

function RTLTextArea({ defaultValue }) {
  const { isRTL } = useRTL();
  
  return (
    <TextArea 
      dir={isRTL ? 'rtl' : 'ltr'}
      defaultValue={defaultValue}
    />
  );
}
```

## Handling Mixed Content

Some applications need to display mixed content (both LTR and RTL). You can handle this with isolated RTL contexts:

```jsx
import { RTLProvider, Card } from 'aki-ui';

function MixedContentExample() {
  return (
    <div>
      {/* Main content in the app's direction */}
      <p>This follows the application's direction</p>
      
      {/* Isolated RTL content */}
      <RTLProvider isRTL={true} isolate>
        <Card>
          <p>هذا النص باللغة العربية</p>
        </Card>
      </RTLProvider>
      
      {/* Back to the app's direction */}
      <p>This follows the application's direction again</p>
    </div>
  );
}
```

## Best Practices

1. **Test thoroughly**: Always test your UI in both LTR and RTL modes
2. **Use logical properties**: Use `inline-start/end` instead of `left/right`
3. **Consider text expansion**: RTL languages may have different text lengths
4. **Be mindful of imagery**: Images with directional content might need to be mirrored
5. **Avoid absolute positioning**: Prefer flexbox and grid for layouts that adapt well to direction changes

## Language-Specific Considerations

Different RTL languages have unique requirements:

- **Arabic**: Numerals are typically displayed using Arabic-Indic digits (٠١٢٣٤٥٦٧٨٩)
- **Hebrew**: Numerals are typically displayed using Western Arabic digits (0123456789)
- **Persian**: Has specific calendar and date formatting requirements
- **Bidirectional text**: When mixing LTR and RTL text, use Unicode bidirectional algorithm controls if needed

## Implementing Language Switching

For multilingual applications that support both LTR and RTL languages:

```jsx
import { RTLProvider, LanguageProvider } from 'aki-ui';

function App() {
  const [language, setLanguage] = useState('en');
  const isRTL = ['ar', 'he', 'fa', 'ur'].includes(language);
  
  return (
    <LanguageProvider language={language} setLanguage={setLanguage}>
      <RTLProvider isRTL={isRTL}>
        <YourApp />
      </RTLProvider>
    </LanguageProvider>
  );
}
```

## Further Resources

- [W3C's Internationalization Activity](https://www.w3.org/International/)
- [WHATWG's HTML Standard on RTL](https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute)
- [MDN Web Docs: CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)
