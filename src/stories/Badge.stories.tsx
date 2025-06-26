import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../lib/components';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
            description: 'The visual style variant of the badge',
        },
        pill: {
            control: 'boolean',
            description: 'Makes the badge have pill shape (fully rounded corners)',
        },
        visible: {
            control: 'boolean',
            description: 'Whether the badge is visible or not',
        },
        as: {
            control: 'text',
            description: 'The HTML element to render the badge as',
        },
        small: {
            control: 'boolean',
            description: 'Whether the badge has a small size',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Badge',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Badge',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        children: 'Badge',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: 'Badge',
    },
};

export const Pill: Story = {
    args: {
        variant: 'primary',
        pill: true,
        children: 'Pill Badge',
    },
};

export const Small: Story = {
    args: {
        variant: 'primary',
        small: true,
        children: 'Small',
    },
};

export const WithNumbers: Story = {
    args: {
        variant: 'primary',
        children: '42',
    },
};

export const WithCustomElement: Story = {
    args: {
        variant: 'primary',
        as: 'div',
        children: 'Custom Element',
    },
};
