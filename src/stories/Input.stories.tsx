import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../lib/components';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select', options: ['outline', 'filled', 'flushed', 'unstyled'] },
            description: 'Input variant style',
        },
        size: {
            control: { type: 'select', options: ['xs', 'sm', 'md', 'lg'] },
            description: 'Size of the input',
        },
        isInvalid: {
            control: 'boolean',
            description: 'Whether the input is invalid',
        },
        isDisabled: {
            control: 'boolean',
            description: 'Whether the input is disabled',
        },
        isReadOnly: {
            control: 'boolean',
            description: 'Whether the input is read-only',
        },
        fullWidth: {
            control: 'boolean',
            description: 'Whether the input takes full width',
        },
        type: {
            control: {
                type: 'select',
                options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'date']
            },
            description: 'Input type',
        },
        placeholder: {
            control: 'text',
            description: 'Input placeholder text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
    args: {
        placeholder: 'Type something...',
        className: 'w-64',
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Email address',
        placeholder: 'Enter your email',
        type: 'email',
        className: 'w-64',
    },
};

export const Variants: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <Input {...args} variant="outline" placeholder="Outline variant" className="w-64" />
            <Input {...args} variant="filled" placeholder="Filled variant" className="w-64" />
            <Input {...args} variant="flushed" placeholder="Flushed variant" className="w-64" />
            <Input {...args} variant="unstyled" placeholder="Unstyled variant" className="w-64" />
        </div>
    ),
};

export const Sizes: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <Input {...args} size="xs" placeholder="Extra small" className="w-64" />
            <Input {...args} size="sm" placeholder="Small" className="w-64" />
            <Input {...args} size="md" placeholder="Medium" className="w-64" />
            <Input {...args} size="lg" placeholder="Large" className="w-64" />
        </div>
    ),
};

export const Invalid: Story = {
    args: {
        placeholder: 'Enter email address',
        isInvalid: true,
        errorMessage: 'Please enter a valid email address',
        className: 'w-64',
    },
};

export const WithHelperText: Story = {
    args: {
        placeholder: 'Choose a username',
        helperText: 'Username must be at least 3 characters long',
        className: 'w-64',
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Disabled input',
        isDisabled: true,
        className: 'w-64',
    },
};

export const ReadOnly: Story = {
    args: {
        placeholder: 'Read-only input',
        value: 'Read-only content',
        isReadOnly: true,
        className: 'w-64',
    },
};

export const Password: Story = {
    args: {
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your password',
        className: 'w-64',
    },
};

export const WithIcons: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <Input
                {...args}
                placeholder="Search..."
                leftIcon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                className="w-64"
            />
            <Input
                {...args}
                placeholder="Your email"
                rightIcon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                className="w-64"
            />
            <Input
                {...args}
                placeholder="Username"
                leftIcon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                rightIcon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                className="w-64"
            />
        </div>
    ),
};

export const WithAddons: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <Input
                {...args}
                placeholder="Username"
                leftAddon="@"
                className="w-64"
            />
            <Input
                {...args}
                placeholder="0.00"
                rightAddon="USD"
                className="w-64"
            />
            <Input
                {...args}
                placeholder="Search"
                leftAddon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                rightAddon="Go"
                className="w-64"
            />
        </div>
    ),
};
