# Forms Components

This directory contains form-related components for the Aki UI library.

## Components

### InputGroup

A flexible container for grouping input elements with addons and icons.

**Features:**

- Left/Right Addons: Text or elements that appear outside the input with background styling
- Left/Right Elements: Icons or interactive elements that appear inside the input
- Size Support: Multiple sizes (xs, sm, md, lg) that automatically adjust padding
- Full Width: Option to expand to container width
- Accessibility: Proper focus management and ARIA attributes

**Basic Usage:**

```jsx
import {
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Input,
} from "@akitectio/aki-ui";

<InputGroup>
  <InputLeftAddon>https://</InputLeftAddon>
  <Input placeholder="www.example.com" />
  <InputRightAddon>.com</InputRightAddon>
</InputGroup>;
```

**With Icons:**

```jsx
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@akitectio/aki-ui";

<InputGroup>
  <InputLeftElement>
    <SearchIcon />
  </InputLeftElement>
  <Input placeholder="Search..." />
  <InputRightElement pointerEvents>
    <button onClick={handleClear}>
      <ClearIcon />
    </button>
  </InputRightElement>
</InputGroup>;
```

### FloatingLabel

An input component with animated floating label that moves up and shrinks when focused or has content.

**Features:**

- Animated Label: Smooth transition animations when label floats
- Multiple Variants: Outline, filled, and standard (underline) styles
- Size Support: Small, medium, and large sizes
- Color Schemes: Multiple color themes (blue, green, red, purple, gray)
- Validation States: Built-in error and helper text support
- Accessibility: Proper focus management and ARIA attributes
- Controlled/Uncontrolled: Supports both controlled and uncontrolled usage

**Basic Usage:**

```jsx
import { FloatingLabel } from "@akitectio/aki-ui";

<FloatingLabel
  label="Email Address"
  type="email"
  placeholder="Enter your email"
/>;
```

**With Custom Styling:**

```jsx
<FloatingLabel
  label="Username"
  variant="filled"
  size="lg"
  colorScheme="purple"
  helperText="Must be 3-20 characters long"
/>
```

**Controlled Usage:**

```jsx
const [email, setEmail] = useState("");

<FloatingLabel
  label="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  type="email"
/>;
```

## Props Reference

### InputGroup Props

- `size?: 'xs' | 'sm' | 'md' | 'lg'` - Size of the input group
- `fullWidth?: boolean` - Whether to expand to container width
- `children: React.ReactNode` - Input elements and addons/elements
- `className?: string` - Additional CSS classes

### InputAddon Props (InputLeftAddon, InputRightAddon)

- `children: React.ReactNode` - Content of the addon
- `className?: string` - Additional CSS classes

### InputElement Props (InputLeftElement, InputRightElement)

- `children: React.ReactNode` - Content of the element (usually an icon)
- `pointerEvents?: boolean` - Whether the element should have pointer events
- `className?: string` - Additional CSS classes

### FloatingLabel Props

- `label: string` - The floating label text (required)
- `variant?: 'outline' | 'filled' | 'standard'` - Visual style variant
- `size?: 'sm' | 'md' | 'lg'` - Size of the input
- `colorScheme?: 'blue' | 'green' | 'red' | 'purple' | 'gray'` - Color theme
- `isInvalid?: boolean` - Whether the input is in an invalid state
- `isDisabled?: boolean` - Whether the input is disabled
- `isReadOnly?: boolean` - Whether the input is read-only
- `errorMessage?: string` - Error message to display
- `helperText?: string` - Helper text to display below the input
- `fullWidth?: boolean` - Whether to expand to container width
- `wrapperClassName?: string` - Additional CSS classes for wrapper
- Plus all standard HTML input attributes

## Examples

See the Storybook documentation for interactive examples and all available props and variations.
