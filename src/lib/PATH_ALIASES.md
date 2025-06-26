# Aki UI Library

## Path Aliases

This project uses path aliases to make imports cleaner and more maintainable. Here are the available aliases:

| Alias | Path | Description |
| ----- | ---- | ----------- |
| `@/*` | `src/*` | Root source directory |
| `@components/*` | `src/lib/components/*` | UI components |
| `@theme/*` | `src/lib/theme/*` | Theme related files |
| `@styles/*` | `src/styles/*` | CSS and style utilities |
| `@utils/*` | `src/lib/utils/*` | Utility functions |
| `@hooks/*` | `src/lib/hooks/*` | React hooks |
| `@types/*` | `src/lib/types/*` | TypeScript type definitions |
| `@assets/*` | `src/assets/*` | Static assets |
| `@docs/*` | `src/docs/*` | Documentation files |
| `@stories/*` | `src/stories/*` | Storybook stories |

## Usage Examples

```tsx
// Import a component
import { Button } from '@components/Button';

// Import theme utilities
import { useTheme } from '@theme/ThemeContext';

// Import styles
import '@styles/docs.css';

// Import utility functions
import { getAssetPath } from '@utils';

// Import hooks
import { useMediaQuery } from '@hooks/useMediaQuery';

// Import types
import { ThemeConfig } from '@types/theme';

// Import assets
import logo from '@assets/aki_ui_logo.svg';
```

## Benefits of Path Aliases

1. **Cleaner imports**: No more messy relative paths like `../../../components/Button`.
2. **Easier refactoring**: Moving files around doesn't break import paths.
3. **Better organization**: Imports clearly indicate which part of the codebase they're from.
4. **Improved maintainability**: New developers can quickly understand the project structure.
