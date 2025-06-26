import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from '../lib/components';

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select', options: ['outline', 'filled', 'flushed', 'unstyled'] },
            description: 'The visual style of the select',
        },
        size: {
            control: { type: 'select', options: ['sm', 'md', 'lg'] },
            description: 'The size of the select',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the select is disabled',
        },
        searchable: {
            control: 'boolean',
            description: 'Whether the select allows searching',
        },
        clearable: {
            control: 'boolean',
            description: 'Whether the select can be cleared',
        },
        multiple: {
            control: 'boolean',
            description: 'Whether multiple options can be selected',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text when no option is selected',
        },
        isInvalid: {
            control: 'boolean',
            description: 'Whether the select is in an error state',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

// Sample options
const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
    { value: 'kiwi', label: 'Kiwi' },
    { value: 'mango', label: 'Mango' },
    { value: 'pineapple', label: 'Pineapple' },
    { value: 'strawberry', label: 'Strawberry' },
];

export const Basic: Story = {
    args: {
        options: options,
        placeholder: 'Select a fruit',
        className: 'w-64',
    },
};

export const WithLabel: Story = {
    args: {
        options: options,
        placeholder: 'Select a fruit',
        label: 'Favorite Fruit',
        className: 'w-64',
    },
};

export const Variants: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <Select
                options={options}
                placeholder="Outline variant"
                variant="outline"
                className="w-64"
            />
            <Select
                options={options}
                placeholder="Filled variant"
                variant="filled"
                className="w-64"
            />
            <Select
                options={options}
                placeholder="Flushed variant"
                variant="flushed"
                className="w-64"
            />
            <Select
                options={options}
                placeholder="Unstyled variant"
                variant="unstyled"
                className="w-64"
            />
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <Select
                options={options}
                placeholder="Small size"
                size="sm"
                className="w-64"
            />
            <Select
                options={options}
                placeholder="Medium size"
                size="md"
                className="w-64"
            />
            <Select
                options={options}
                placeholder="Large size"
                size="lg"
                className="w-64"
            />
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        options: options,
        placeholder: 'Select a fruit',
        disabled: true,
        className: 'w-64',
    },
};

export const Searchable: Story = {
    args: {
        options: options,
        placeholder: 'Search and select...',
        searchable: true,
        className: 'w-64',
    },
};

export const Clearable: Story = {
    args: {
        options: options,
        placeholder: 'Select a fruit',
        clearable: true,
        defaultValue: 'apple',
        className: 'w-64',
    },
};

export const Multiple = () => {
    const [value, setValue] = useState<string[]>(['apple', 'banana']);

    return (
        <div className="w-64">
            <Select
                options={options}
                placeholder="Select fruits"
                multiple={true}
                value={value}
                onChange={(newValue) => setValue(newValue as string[])}
                clearable={true}
                searchable={true}
                closeMenuOnSelect={false}
            />
            <div className="mt-4 text-sm">
                Selected: {value.length ? value.join(', ') : 'None'}
            </div>
        </div>
    );
};

export const WithError: Story = {
    args: {
        options: options,
        placeholder: 'Select a fruit',
        isInvalid: true,
        errorMessage: 'This field is required',
        className: 'w-64',
    },
};

export const WithHelperText: Story = {
    args: {
        options: options,
        placeholder: 'Select a fruit',
        helperText: 'Choose your favorite fruit',
        className: 'w-64',
    },
};

export const DisabledOptions: Story = {
    args: {
        options: [
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana', disabled: true },
            { value: 'orange', label: 'Orange' },
            { value: 'grape', label: 'Grape', disabled: true },
        ],
        placeholder: 'Some options are disabled',
        className: 'w-64',
    },
};

export const ControlledSelect = () => {
    const [value, setValue] = useState<string>('orange');

    return (
        <div className="w-64">
            <Select
                options={options}
                placeholder="Select a fruit"
                value={value}
                onChange={(newValue) => setValue(newValue as string)}
            />
            <div className="mt-4 text-sm">
                Selected: {value}
            </div>
            <div className="mt-2 flex gap-2">
                <button
                    className="px-2 py-1 bg-blue-500 text-white rounded text-xs"
                    onClick={() => setValue('apple')}
                >
                    Set to Apple
                </button>
                <button
                    className="px-2 py-1 bg-blue-500 text-white rounded text-xs"
                    onClick={() => setValue('banana')}
                >
                    Set to Banana
                </button>
            </div>
        </div>
    );
};
