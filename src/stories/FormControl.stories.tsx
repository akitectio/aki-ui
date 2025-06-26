import type { Meta, StoryObj } from '@storybook/react';
import { FormControl } from '../lib/components';

const meta: Meta<typeof FormControl> = {
    title: 'Components/FormControl',
    component: FormControl,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: 'select',
            options: ['outline', 'filled', 'unstyled'],
        },
        validationState: {
            control: 'select',
            options: ['valid', 'invalid', 'warning', undefined],
        },
        type: {
            control: 'select',
            options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search'],
        },
        disabled: {
            control: 'boolean',
        },
        readOnly: {
            control: 'boolean',
        },
        fullWidth: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof FormControl>;

// Basic story with controls
export const Basic: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter your username',
        helperText: 'Your username should be unique',
    },
};

// Different sizes
export const Sizes: Story = {
    render: () => (
        <div className="space-y-4">
            <FormControl
                label="Small"
                placeholder="Small input"
                size="sm"
            />
            <FormControl
                label="Medium (Default)"
                placeholder="Medium input"
                size="md"
            />
            <FormControl
                label="Large"
                placeholder="Large input"
                size="lg"
            />
        </div>
    ),
};

// Different variants
export const Variants: Story = {
    render: () => (
        <div className="space-y-4">
            <FormControl
                label="Outline (Default)"
                placeholder="Outline input"
                variant="outline"
            />
            <FormControl
                label="Filled"
                placeholder="Filled input"
                variant="filled"
            />
            <FormControl
                label="Unstyled"
                placeholder="Unstyled input"
                variant="unstyled"
            />
        </div>
    ),
};
