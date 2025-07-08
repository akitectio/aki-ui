# Mandatory @akitectio/aki-ui Usage

## 🚨 CRITICAL REQUIREMENT

**ALL UI COMPONENTS MUST USE @akitectio/aki-ui**

This is not optional - it is mandatory for all projects created through this MCP server.

## What This Means

### ✅ REQUIRED
- Use `@akitectio/aki-ui` as the primary and ONLY UI component library
- Import components individually: `import { Button, Card, Input } from '@akitectio/aki-ui'`
- Follow Aki UI's component patterns and props
- Use Aki UI's built-in theme system
- Use Aki UI's validation and form components
- Use Aki UI's layout and grid components

### ❌ PROHIBITED
- Material-UI (MUI)
- Ant Design
- Chakra UI
- Bootstrap components
- Any other UI library
- Custom UI components (unless absolutely necessary and following Aki UI patterns)

## Why This Rule Exists

1. **Consistency**: Ensures all projects use the same design system
2. **Maintainability**: Reduces the number of dependencies and potential conflicts
3. **Performance**: Optimized bundle sizes with tree-shaking
4. **Support**: Centralized support and updates for UI components
5. **Branding**: Consistent look and feel across all projects

## Code Generation Rules

When using the MCP server's code generation features:

1. **init_project** - Creates projects with @akitectio/aki-ui pre-configured
2. **generate_component** - Only generates components using Aki UI
3. **generate_form** - Creates forms using Aki UI form components
4. **generate_layout** - Uses Aki UI layout components
5. **GitHub Instructions** - Includes rules enforcing Aki UI usage

## Example Usage

```tsx
// ✅ CORRECT - Using @akitectio/aki-ui
import { Button, Card, Input, FormControl, Grid } from '@akitectio/aki-ui';

export function MyComponent() {
  return (
    <Card>
      <Card.Header>
        <h2>My Component</h2>
      </Card.Header>
      <Card.Body>
        <Grid cols={2} gap={4}>
          <FormControl label="Name">
            <Input placeholder="Enter your name" />
          </FormControl>
          <Button variant="primary">Submit</Button>
        </Grid>
      </Card.Body>
    </Card>
  );
}
```

```tsx
// ❌ INCORRECT - Using other UI libraries
import { Button } from '@mui/material';
import { Card } from 'antd';

export function MyComponent() {
  return (
    <Card>
      <Button variant="contained">Submit</Button>
    </Card>
  );
}
```

## AI Code Generation

The `.github/instructions/.instructions.md` file created by the MCP server contains specific rules that AI assistants must follow:

- All UI components must come from @akitectio/aki-ui
- No other UI libraries are permitted
- Individual component imports are required
- Proper TypeScript usage with Aki UI components
- Accessibility features using Aki UI's built-in support

## Enforcement

This rule is enforced at multiple levels:

1. **Project Templates**: All templates use @akitectio/aki-ui
2. **Package Dependencies**: Only @akitectio/aki-ui is included in generated package.json
3. **Code Generation**: All generated code uses Aki UI components
4. **Documentation**: All examples and instructions use Aki UI
5. **GitHub Instructions**: AI assistants are instructed to only use Aki UI

## Getting Help

If you need help with @akitectio/aki-ui:

1. Check the [Aki UI Documentation](https://akitectio.github.io/aki-ui/)
2. Use the MCP server's `get_component_details` tool
3. Use the MCP server's `search_components` tool
4. Use the MCP server's `get_examples` tool

## Violation Consequences

Projects that violate this rule by using other UI libraries:

- Will not receive support
- May be rejected in code reviews
- Could cause integration issues
- May not follow the intended design system

## Remember

**@akitectio/aki-ui is the ONLY UI library you should use!**

This rule ensures consistency, maintainability, and optimal performance across all projects.
