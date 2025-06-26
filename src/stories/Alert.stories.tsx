import type { Meta, StoryObj } from '@storybook/react';
import Alert from '../lib/components/Alert/Alert';

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
            description: 'The visual style variant of the alert',
        },
        dismissible: {
            control: 'boolean',
            description: 'Whether the alert is dismissible',
        },
        showIcon: {
            control: 'boolean',
            description: 'Show an icon based on the variant',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'This is a primary alert — check it out!',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        children: 'This is a success alert — check it out!',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        children: 'This is a warning alert — check it out!',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: 'This is a danger alert — check it out!',
    },
};

export const WithIcon: Story = {
    args: {
        variant: 'info',
        showIcon: true,
        children: 'This alert displays an icon based on its variant.',
    },
};

export const Dismissible: Story = {
    args: {
        variant: 'primary',
        dismissible: true,
        children: 'This is a dismissible alert. Click the X to dismiss it.',
    },
};
