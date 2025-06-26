import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AsyncSelect } from '../lib/components';
import type { SelectOption } from '../lib/components/Select/Select';

const meta: Meta<typeof AsyncSelect> = {
    title: 'Components/AsyncSelect',
    component: AsyncSelect,
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
        debounceMs: {
            control: { type: 'number', min: 0, max: 2000, step: 100 },
            description: 'Debounce delay in milliseconds',
        },
        creatable: {
            control: 'boolean',
            description: 'Whether new options can be created',
        },
        isInvalid: {
            control: 'boolean',
            description: 'Whether the select is in an error state',
        },
    },
};

export default meta;
type Story = StoryObj<typeof AsyncSelect>;

// Sample options for initial load
const initialOptions: SelectOption[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
];

// Sample options for async loading
const allFruits: SelectOption[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
    { value: 'kiwi', label: 'Kiwi' },
    { value: 'mango', label: 'Mango' },
    { value: 'pineapple', label: 'Pineapple' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'watermelon', label: 'Watermelon' },
    { value: 'blueberry', label: 'Blueberry' },
    { value: 'peach', label: 'Peach' },
    { value: 'plum', label: 'Plum' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'apricot', label: 'Apricot' },
    { value: 'coconut', label: 'Coconut' },
];

// Mock API load function
const mockLoadOptions = async (inputValue: string): Promise<SelectOption[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Filter options based on input value
    return allFruits.filter(option =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};

export const Basic: Story = {
    args: {
        loadOptions: mockLoadOptions,
        placeholder: 'Search for a fruit',
        defaultOptions: initialOptions,
        className: 'w-64',
    },
};

export const WithDebounce: Story = {
    args: {
        loadOptions: mockLoadOptions,
        placeholder: 'Search with 800ms debounce',
        debounceMs: 800,
        className: 'w-64',
    },
};

export const WithLabel: Story = {
    args: {
        loadOptions: mockLoadOptions,
        placeholder: 'Search for a fruit',
        label: 'Favorite Fruit',
        defaultOptions: true,
        className: 'w-64',
    },
};

export const Creatable: Story = {
    args: {
        loadOptions: mockLoadOptions,
        placeholder: 'Type to create a new option',
        creatable: true,
        createOptionMessage: 'Create "{inputValue}"',
        className: 'w-64',
    },
};

export const WithCaching: Story = {
    args: {
        loadOptions: mockLoadOptions,
        placeholder: 'Results are cached',
        cacheOptions: true,
        className: 'w-64',
    },
};

export const MultiSelect = () => {
    const [value, setValue] = useState<string[]>([]);

    return (
        <div className="w-64">
            <AsyncSelect
                loadOptions={mockLoadOptions}
                placeholder="Select multiple fruits"
                multiple={true}
                value={value}
                onChange={(newValue: string[] | string | number | number[]) => setValue(newValue as string[])}
                clearable={true}
                defaultOptions={true}
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
        loadOptions: mockLoadOptions,
        placeholder: 'Search for a fruit',
        isInvalid: true,
        errorMessage: 'This field is required',
        className: 'w-64',
    },
};

// Example of a real-world API integration
export const RealWorldApiExample = () => {
    const [value, setValue] = useState<string | null>(null);

    // This function simulates loading data from a real API
    const loadCountries = async (inputValue: string): Promise<SelectOption[]> => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));

        // For a real implementation, you would call your API here
        // Example with REST Countries API (simulated):
        const countries = [
            { name: 'United States', code: 'US' },
            { name: 'Canada', code: 'CA' },
            { name: 'United Kingdom', code: 'GB' },
            { name: 'Australia', code: 'AU' },
            { name: 'Germany', code: 'DE' },
            { name: 'France', code: 'FR' },
            { name: 'Japan', code: 'JP' },
            { name: 'China', code: 'CN' },
            { name: 'Brazil', code: 'BR' },
            { name: 'India', code: 'IN' },
        ];

        // Filter based on input
        const filtered = countries.filter(country =>
            country.name.toLowerCase().includes(inputValue.toLowerCase())
        );

        // Map to the format expected by AsyncSelect
        return filtered.map(country => ({
            value: country.code,
            label: country.name,
        }));
    };

    return (
        <div className="w-64">
            <AsyncSelect
                loadOptions={loadCountries}
                placeholder="Search for a country"
                value={value as string}
                onChange={(newValue: string | string[] | number | number[]) => setValue(newValue as string)}
                debounceMs={300}
                label="Country"
                helperText="Type to search countries"
            />
        </div>
    );
};
