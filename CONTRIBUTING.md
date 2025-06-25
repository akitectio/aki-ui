# Contributing to Aki UI

Thank you for considering contributing to Aki UI! This document outlines the process and guidelines for contributing to this project.

## Project Structure

```bash
aki-ui/
├── .storybook/          # Storybook configuration
├── public/              # Public assets
├── src/
│   ├── lib/             # Component library source
│   │   ├── components/  # UI components
│   │   │   ├── Button/  # Example component
│   │   │   ├── Card/    # Example component
│   │   │   └── ...
│   │   └── index.ts     # Library entry point
│   ├── stories/         # Storybook stories
│   ├── App.tsx          # Demo application
│   └── index.ts         # Re-exports from lib
├── package.json
└── ...
```

## Import Aliases

We use path aliases instead of relative imports. Always use these aliases for importing components and other files:

```tsx
// Don't use relative imports like this:
import { Button } from '../../lib/components/Button';

// Do use aliases like this:
import { Button } from '@components/Button';
```

Available aliases:
- `@/*` - Points to src/*
- `@lib/*` - Points to src/lib/*
- `@components/*` - Points to src/lib/components/*
- `@stories/*` - Points to src/stories/*
- `@utils/*` - Points to src/lib/utils/* (when created)
- `@types/*` - Points to src/lib/types/* (when created)
- `@assets/*` - Points to src/assets/* (when created)

## Storybook Version Requirements

Aki UI uses Storybook 8.6.14. We have specific dependency requirements to ensure compatibility:

- All Storybook packages must be at version 8.6.14
- When updating or adding new Storybook-related dependencies, ensure they match this version
- If you encounter dependency conflicts, use `npm install --legacy-peer-deps` or `npm install --force`

> Note: Mixing Storybook versions (like 9.x and 8.x packages together) will cause compatibility issues and result in build failures.

## Development Workflow

1. **Setup**:

   ```bash
   git clone https://github.com/yourusername/aki-ui.git
   cd aki-ui
   npm install
   ```

2. **Run Storybook**:

   ```bash
   npm run storybook
   ```

3. **Create a New Component**:
   - Create a directory in `src/lib/components/YourComponent/`
   - Add component implementation in `YourComponent.tsx`
   - Add exports in `index.ts`
   - Add component to main exports in `src/lib/components/index.ts`
   - Create stories in `src/stories/YourComponent.stories.tsx`

4. **Testing**:
   - Add your component stories in Storybook
   - Test various states and edge cases

## Component Guidelines

- Each component should be in its own directory
- Export component types along with the component
- Use TypeScript interfaces for props with JSDoc comments
- Follow the established naming patterns
- Include appropriate default props
- Design for accessibility

## Commit Guidelines

Please follow these guidelines for commits:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (formatting, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools

Example: `feat: add Card component`

## Pull Request Process

1. Create a new branch for your feature or fix
2. Make your changes and test them
3. Submit a pull request with a clear description of the changes
4. Ensure your code passes all tests and linting

Thank you for contributing to Aki UI!

### 4. Commit Your Changes

Use conventional commit messages:

```bash
git commit -m "feat: add new dashboard widget component"
git commit -m "fix: resolve mobile navigation issue"
git commit -m "docs: update component usage examples"
```

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a pull request through GitHub's interface.

### PR Requirements

- [ ] Clear description of changes
- [ ] Tests pass
- [ ] Documentation updated
- [ ] Screenshots for UI changes
- [ ] Responsive design tested
- [ ] Accessibility considerations addressed

## Issue Reporting

### Bug Reports

Please include:

- **Description**: Clear description of the bug
- **Steps to reproduce**: Detailed steps
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Environment**: OS, browser, version
- **Screenshots**: If applicable

### Feature Requests

Please include:

- **Description**: Clear description of the feature
- **Use case**: Why this feature is needed
- **Acceptance criteria**: How to know it's complete
- **Design considerations**: UI/UX implications

## Style Guide

### Code Style

We use ESLint and Prettier for code formatting:

```bash
# Auto-format code
npm run format

# Check linting
npm run lint

# Fix linting issues
npm run lint:fix
```

### TypeScript Guidelines

- Use strict TypeScript configuration
- Define proper interfaces for all props
- Avoid `any` type unless absolutely necessary
- Use generic types where appropriate

```typescript
// Good
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  onClick: () => void;
  children: React.ReactNode;
}

// Avoid
interface ButtonProps {
  [key: string]: any;
}
```

### Component Structure

```typescript
// src/components/Example/Example.tsx
import React from 'react';
import { cn } from '../../utils/cn';

interface ExampleProps {
  className?: string;
  children: React.ReactNode;
}

export const Example: React.FC<ExampleProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn('base-classes', className)} {...props}>
      {children}
    </div>
  );
};

// Export from index
export { Example } from './Example';
```

### CSS Guidelines

- Use Tailwind CSS classes
- Follow mobile-first approach
- Use CSS custom properties for theme values
- Implement dark mode support

```css
/* Good */
.component {
  @apply bg-white dark:bg-gray-800 rounded-lg shadow-sm;
  transition: var(--transition-normal);
}

/* Avoid inline styles when possible */
```

## Component Development

### Creating New Components

1. **Planning Phase**
   - Define component purpose and API
   - Consider accessibility requirements
   - Plan responsive behavior
   - Review design system consistency

2. **Development Phase**
   - Create component file structure
   - Implement base functionality
   - Add TypeScript interfaces
   - Include proper styling

3. **Testing Phase**
   - Write unit tests
   - Test responsive design
   - Verify accessibility
   - Cross-browser testing

4. **Documentation Phase**
   - Add JSDoc comments
   - Create usage examples
   - Update component library docs

### Component Checklist

- [ ] TypeScript interfaces defined
- [ ] Responsive design implemented
- [ ] Dark mode support added
- [ ] Accessibility features included
- [ ] Unit tests written
- [ ] Documentation updated
- [ ] Storybook story created (if applicable)

### Accessibility Requirements

All components must meet WCAG 2.1 AA standards:

- [ ] Keyboard navigation support
- [ ] Screen reader compatibility
- [ ] Proper color contrast
- [ ] Focus indicators
- [ ] ARIA labels where needed

```typescript
// Example: Accessible button component
<button
  aria-label="Close dialog"
  aria-describedby="dialog-description"
  onKeyDown={handleKeyDown}
  className="focus:ring-2 focus:ring-primary-500"
>
  <CloseIcon aria-hidden="true" />
</button>
```

### Testing Guidelines

#### Unit Tests

```typescript
// __tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

#### Integration Tests

```typescript
// Test component interactions
it('opens modal when button is clicked', () => {
  render(<DashboardPage />);
  fireEvent.click(screen.getByText('Open Settings'));
  expect(screen.getByRole('dialog')).toBeInTheDocument();
});
```

### Performance Considerations

- Use React.memo for expensive components
- Implement proper code splitting
- Optimize bundle size
- Consider loading states

```typescript
// Good: Memoized component
export const ExpensiveComponent = React.memo<Props>(({ data }) => {
  const processedData = useMemo(() => processData(data), [data]);
  
  return <div>{/* Component content */}</div>;
});

// Good: Lazy loading
const ChartComponent = lazy(() => import('./ChartComponent'));
```

## Release Process

### Version Numbering

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Release Checklist

- [ ] All tests passing
- [ ] Documentation updated
- [ ] Version number updated
- [ ] Changelog updated
- [ ] Build successful
- [ ] Security audit passed

## Getting Help

- **Documentation**: Check the [docs](./docs/) folder
- **Issues**: Search existing [GitHub issues](https://github.com/your-org/aki-ui/issues)
- **Discussions**: Use [GitHub Discussions](https://github.com/your-org/aki-ui/discussions)
- **Discord**: Join our [Discord community](https://discord.gg/aki-ui)

## Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- Annual contributor highlights

Thank you for contributing to Aki UI! 🎉

---

Last Updated: June 2025
