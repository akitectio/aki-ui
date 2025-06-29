import type { Meta, StoryObj } from '@storybook/react';
// Import Typography component
import Typography from '../lib/components/Typography/Typography';
// Import typography variants
import {
  H1, H2, H3, Body, SmallText, Caption, Link, Code, Pre, Blockquote, Label, ErrorText, HelperText
} from '../lib/components/Typography/TypographyVariants';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Typography component for rendering text with consistent styling and semantic meaning.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'body1', 'body2', 'subtitle1', 'subtitle2',
        'caption', 'overline', 'button'
      ],
      description: 'Typography variant that determines the default styling',
    },
    component: {
      control: { type: 'text' },
      description: 'HTML element to render (overrides default for variant)',
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify', 'inherit'],
      description: 'Text alignment',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'muted', 'inherit'],
      description: 'Text color variant',
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'semibold', 'bold', 'inherit'],
      description: 'Font weight',
    },
    noWrap: {
      control: { type: 'boolean' },
      description: 'Prevents text wrapping',
    },
    truncate: {
      control: { type: 'boolean' },
      description: 'Truncates text with ellipsis',
    },
    italic: {
      control: { type: 'boolean' },
      description: 'Italic text style',
    },
    underline: {
      control: { type: 'boolean' },
      description: 'Underlined text',
    },
    uppercase: {
      control: { type: 'boolean' },
      description: 'Transform text to uppercase',
    },
    lowercase: {
      control: { type: 'boolean' },
      description: 'Transform text to lowercase',
    },
    capitalize: {
      control: { type: 'boolean' },
      description: 'Capitalize first letter of each word',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1 - Main Title</Typography>
      <Typography variant="h2">Heading 2 - Section Title</Typography>
      <Typography variant="h3">Heading 3 - Subsection Title</Typography>
      <Typography variant="h4">Heading 4 - Minor Heading</Typography>
      <Typography variant="h5">Heading 5 - Small Heading</Typography>
      <Typography variant="h6">Heading 6 - Smallest Heading</Typography>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <Typography variant="subtitle1">
        Subtitle 1 - Used for important secondary text
      </Typography>
      <Typography variant="body1">
        Body 1 - This is the primary body text variant. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
      </Typography>
      <Typography variant="subtitle2">
        Subtitle 2 - Used for less prominent secondary text
      </Typography>
      <Typography variant="body2">
        Body 2 - This is a smaller body text variant, perfect for secondary information, 
        captions, or supporting content that doesn't need as much visual weight.
      </Typography>
      <Typography variant="caption">
        Caption text - Used for image captions, metadata, or very small supporting text.
      </Typography>
      <Typography variant="overline">
        Overline Text - Used for category labels or section dividers
      </Typography>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-3">
      <Typography color="inherit">Default/Inherit color text</Typography>
      <Typography color="primary">Primary color text</Typography>
      <Typography color="secondary">Secondary color text</Typography>
      <Typography color="success">Success color text</Typography>
      <Typography color="warning">Warning color text</Typography>
      <Typography color="error">Error color text</Typography>
      <Typography color="muted">Muted color text</Typography>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div className="space-y-3">
      <Typography weight="light">Light weight text</Typography>
      <Typography weight="normal">Normal weight text</Typography>
      <Typography weight="medium">Medium weight text</Typography>
      <Typography weight="semibold">Semibold weight text</Typography>
      <Typography weight="bold">Bold weight text</Typography>
    </div>
  ),
};

export const TextAlignment: Story = {
  render: () => (
    <div className="space-y-4 w-full">
      <Typography align="left" className="border p-2">
        Left aligned text - This text is aligned to the left side of its container.
      </Typography>
      <Typography align="center" className="border p-2">
        Center aligned text - This text is centered within its container.
      </Typography>
      <Typography align="right" className="border p-2">
        Right aligned text - This text is aligned to the right side of its container.
      </Typography>
      <Typography align="justify" className="border p-2">
        Justified text - This text is justified, meaning it stretches to fill the full width 
        of its container with even spacing between words.
      </Typography>
    </div>
  ),
};

export const TextModifiers: Story = {
  render: () => (
    <div className="space-y-3">
      <Typography italic>Italic text styling</Typography>
      <Typography underline>Underlined text styling</Typography>
      <Typography uppercase>uppercase text transformation</Typography>
      <Typography lowercase>LOWERCASE TEXT TRANSFORMATION</Typography>
      <Typography capitalize>capitalize each word text transformation</Typography>
      <Typography noWrap className="w-32 border p-2">
        This text will not wrap and will overflow
      </Typography>
      <Typography truncate className="w-32 border p-2">
        This text will be truncated with ellipsis when it overflows
      </Typography>
    </div>
  ),
};

export const SemanticUsage: Story = {
  render: () => (
    <article className="max-w-4xl space-y-6">
      <header>
        <Typography variant="h1" className="mb-2">
          Complete Guide to Typography
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          Understanding the fundamentals of text styling and hierarchy
        </Typography>
        <Typography variant="caption" color="muted">
          Published on June 29, 2025 • 5 min read
        </Typography>
      </header>

      <section>
        <Typography variant="h2" className="mb-4">
          Introduction
        </Typography>
        <Typography variant="body1" className="mb-4">
          Typography is one of the most important aspects of design. It helps establish 
          hierarchy, improve readability, and create visual interest. In this guide, 
          we'll explore the various typography variants available in Aki UI.
        </Typography>
        
        <Typography variant="h3" className="mb-3">
          Getting Started
        </Typography>
        <Typography variant="body2" className="mb-4">
          Before diving into advanced typography concepts, let's start with the basics. 
          Understanding when to use each variant is crucial for creating effective designs.
        </Typography>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
          <Typography variant="h4" color="primary" className="mb-2">
            Pro Tip
          </Typography>
          <Typography variant="body2">
            Always maintain a clear visual hierarchy by using heading variants consistently 
            and limiting the number of different font weights in a single design.
          </Typography>
        </div>
      </section>

      <section>
        <Typography variant="h2" className="mb-4">
          Best Practices
        </Typography>
        <ul className="space-y-2 ml-6">
          <li><Typography variant="body2">Use semantic HTML elements when possible</Typography></li>
          <li><Typography variant="body2">Maintain consistent spacing between text elements</Typography></li>
          <li><Typography variant="body2">Consider reading flow and visual hierarchy</Typography></li>
          <li><Typography variant="body2">Test readability across different screen sizes</Typography></li>
        </ul>
      </section>

      <footer className="border-t pt-4">
        <Typography variant="overline" color="muted">
          Tags
        </Typography>
        <div className="flex space-x-2 mt-2">
          <Typography variant="caption" className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            Typography
          </Typography>
          <Typography variant="caption" className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            Design System
          </Typography>
          <Typography variant="caption" className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            UI Components
          </Typography>
        </div>
      </footer>
    </article>
  ),
};

export const ResponsiveTypography: Story = {
  render: () => (
    <div className="space-y-6">
      <Typography variant="h2" className="mb-4">
        Responsive Typography
      </Typography>
      <Typography variant="body1" className="mb-4">
        Typography variants automatically adjust their sizes on different screen sizes. 
        Headings become larger on desktop screens and smaller on mobile devices.
      </Typography>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-4 rounded">
          <Typography variant="h3" className="mb-2">Mobile First</Typography>
          <Typography variant="body2">
            All typography starts with mobile-optimized sizes and scales up for larger screens.
          </Typography>
        </div>
        <div className="border p-4 rounded">
          <Typography variant="h3" className="mb-2">Desktop Enhanced</Typography>
          <Typography variant="body2">
            On larger screens, headings increase in size to take advantage of the available space.
          </Typography>
        </div>
      </div>
    </div>
  ),
};

export const TypographyVariants: Story = {
  render: () => {
    // Using imported variants
    
    return (
      <div className="space-y-8 max-w-4xl">
        <div>
          <Typography variant="h2" className="mb-4">Typography Variants</Typography>
          <Typography variant="body1" className="mb-6">
            Pre-configured components for common typography patterns.
          </Typography>
        </div>

        <section>
          <Typography variant="h3" className="mb-4">Heading Variants</Typography>
          <div className="space-y-3">
            <H1>H1 - Main Page Title</H1>
            <H2>H2 - Section Title</H2>
            <H3>H3 - Subsection Title</H3>
          </div>
        </section>

        <section>
          <Typography variant="h3" className="mb-4">Text Variants</Typography>
          <div className="space-y-3">
            <Body>Body - Primary text content for paragraphs and main content.</Body>
            <SmallText>SmallText - Secondary text content and descriptions.</SmallText>
            <Caption>Caption - Metadata, timestamps, and auxiliary information.</Caption>
          </div>
        </section>

        <section>
          <Typography variant="h3" className="mb-4">Interactive Elements</Typography>
          <div className="space-y-3">
            <div>
              <Link href="#" className="mr-4">Link - Interactive text link</Link>
              <Link href="#" target="_blank" rel="noopener">External link</Link>
            </div>
          </div>
        </section>

        <section>
          <Typography variant="h3" className="mb-4">Code Elements</Typography>
          <div className="space-y-3">
            <div>
              <Body>Inline code: <Code>const example = "Hello World";</Code></Body>
            </div>
            <Pre>{`function example() {
  console.log("Hello World");
  return true;
}`}</Pre>
          </div>
        </section>

        <section>
          <Typography variant="h3" className="mb-4">Special Elements</Typography>
          <div className="space-y-4">
            <Blockquote>
              "Typography is the craft of endowing human language with a durable visual form."
            </Blockquote>
            
            <div>
              <Label>Form Label</Label>
              <Body>Associated form content</Body>
              <HelperText>Helper text for additional context</HelperText>
              <ErrorText>Error message for validation feedback</ErrorText>
            </div>
          </div>
        </section>

        <section>
          <Typography variant="h3" className="mb-4">Usage Examples</Typography>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <Pre>{`import { H1, Body, Link, Code } from '@akitectio/aki-ui';

function MyComponent() {
  return (
    <div>
      <H1>Welcome to Aki UI</H1>
      <Body>
        Get started by reading our <Link href="/docs">documentation</Link>.
        You can also check the <Code>package.json</Code> for dependencies.
      </Body>
    </div>
  );
}`}</Pre>
          </div>
        </section>
      </div>
    );
  },
};
