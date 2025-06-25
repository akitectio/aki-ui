# Aki UI Library

This directory contains the core components of the Aki UI library.

## Directory Structure

- `components/`: Contains all UI components, each in its own directory
  - `Button/`: Button component and related files
  - `Card/`: Card component and related files
  - `FormControl/`: Form control component and related files
  - (more components will be added)

## Component Structure

Each component follows a consistent structure:

1. Component directory (e.g., `Button/`)
   - Component file (e.g., `Button.tsx`)
   - Index file for exports (e.g., `index.ts`)
   - (Optional) Additional files like utility functions, styles, etc.

## Adding New Components

When adding a new component:

1. Create a new directory in `components/`
2. Create the component file with TypeScript interface for props
3. Create an index.ts file that exports the component and its types
4. Update the main `components/index.ts` file to export the new component
5. Add Storybook stories in the `src/stories/` directory
