import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../lib/components';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link',
                'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning',
                'outline-info', 'outline-light', 'outline-dark'
            ],
            description: 'The visual style variant of the button',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'The size of the button',
        },
        isLoading: {
            control: 'boolean',
            description: 'Displays a loading spinner and disables the button',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the button is disabled',
        },
        fullWidth: {
            control: 'boolean',
            description: 'Makes the button take the full width of its container',
        },
        rounded: {
            control: 'boolean',
            description: 'Makes the button corners rounded',
        },
        pill: {
            control: 'boolean',
            description: 'Makes the button have a pill shape (fully rounded corners)',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
    args: {
        variant: 'primary',
        children: 'Button',
    },
};

export const Variants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
        </div>
    ),
};

export const OutlineVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Button variant="outline-primary">Primary</Button>
            <Button variant="outline-secondary">Secondary</Button>
            <Button variant="outline-success">Success</Button>
            <Button variant="outline-danger">Danger</Button>
            <Button variant="outline-warning">Warning</Button>
            <Button variant="outline-info">Info</Button>
            <Button variant="outline-light">Light</Button>
            <Button variant="outline-dark">Dark</Button>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="primary" isLoading>Loading</Button>
            <Button variant="primary" isLoading loadingText="Processing...">Submit</Button>
        </div>
    ),
};

export const Shapes: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Button variant="primary">Default</Button>
            <Button variant="primary" rounded>Rounded</Button>
            <Button variant="primary" pill>Pill</Button>
        </div>
    ),
};

export const FullWidth: Story = {
    render: () => (
        <div className="w-full max-w-md">
            <Button variant="primary" fullWidth>Full Width Button</Button>
        </div>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Button
                variant="primary"
                startIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                }
            >
                Add Item
            </Button>
            <Button
                variant="outline-primary"
                endIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                }
            >
                Next Step
            </Button>
            <Button
                variant="success"
                startIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                }
                endIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                }
            >
                Both Icons
            </Button>
        </div>
    ),
};
