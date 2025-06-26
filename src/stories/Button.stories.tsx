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
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        isLoading: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        fullWidth: {
            control: 'boolean',
        },
        rounded: {
            control: 'boolean',
        },
        pill: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Button',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        children: 'Button',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: 'Button',
    },
};

export const OutlinePrimary: Story = {
    args: {
        variant: 'outline-primary',
        children: 'Button',
    },
};

export const Small: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        children: 'Small Button',
    },
};

export const Medium: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Medium Button',
    },
};

export const Large: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
        children: 'Large Button',
    },
};

export const Loading: Story = {
    args: {
        variant: 'primary',
        isLoading: true,
        children: 'Loading Button',
    },
};

export const LoadingWithText: Story = {
    args: {
        variant: 'primary',
        isLoading: true,
        loadingText: 'Processing...',
        children: 'Submit',
    },
};

export const Disabled: Story = {
    args: {
        variant: 'primary',
        disabled: true,
        children: 'Disabled Button',
    },
};

export const FullWidth: Story = {
    args: {
        variant: 'primary',
        fullWidth: true,
        children: 'Full Width Button',
    },
};

export const Rounded: Story = {
    args: {
        variant: 'primary',
        rounded: true,
        children: 'Rounded Button',
    },
};

export const Pill: Story = {
    args: {
        variant: 'primary',
        pill: true,
        children: 'Pill Button',
    },
};

export const WithStartIcon: Story = {
    args: {
        variant: 'primary',
        children: 'Add Item',
        startIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
        ),
    },
};

export const WithEndIcon: Story = {
    args: {
        variant: 'outline-primary',
        children: 'Next Step',
        endIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        ),
    },
};
