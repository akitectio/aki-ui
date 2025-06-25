# Aki UI Storybook

This project uses Storybook to document and develop UI components.

## Getting Started

To run Storybook:

```bash
npm run storybook
```

This will start the Storybook server at [http://localhost:6006](http://localhost:6006)

## Adding New Components

1. Create your component in `src/components/ui`
2. Add it to the exports in `src/components/ui/index.ts`
3. Create a story file alongside your component (e.g., `MyComponent.stories.tsx`)

## Story Structure

A basic story file should include:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import MyComponent from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define argTypes here
  },
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Basic: Story = {
  args: {
    // Define your component props here
  },
};

// Add more stories as needed
```

## Available Addons

- Links: Navigate between stories
- Essentials: Core Storybook features
- Interactions: Test component interactions
- A11y: Accessibility testing

## Documentation

For more information on Storybook, visit:

- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [Writing Stories](https://storybook.js.org/docs/react/writing-stories/introduction)
