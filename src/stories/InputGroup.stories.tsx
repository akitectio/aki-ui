import type { Meta, StoryObj } from '@storybook/react';
import { InputGroup, InputLeftAddon, InputRightAddon, InputLeftElement, InputRightElement, Input } from '../lib/components';
import { useState } from 'react';

const meta: Meta<typeof InputGroup> = {
    title: 'Forms/InputGroup',
    component: InputGroup,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `InputGroup is a component for grouping input elements with addons and icons. It provides a flexible way to enhance inputs with additional visual elements.

## Features
- **Left/Right Addons**: Text or elements that appear outside the input with background styling
- **Left/Right Elements**: Icons or interactive elements that appear inside the input
- **Size Support**: Multiple sizes (xs, sm, md, lg) that automatically adjust padding
- **Full Width**: Option to expand to container width
- **Accessibility**: Proper focus management and ARIA attributes

## Usage
InputGroup can contain Input components along with addon and element components. The group automatically adjusts the styling of child inputs to accommodate the addons and elements.`,
            },
        },
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg'],
            description: 'Size of the input group',
        },
        fullWidth: {
            control: 'boolean',
            description: 'Whether the input group should expand to fill its container',
        },
        children: {
            control: false,
            description: 'Input elements and addons/elements',
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'md',
        fullWidth: false,
    },
    render: (args) => (
        <InputGroup {...args}>
            <InputLeftAddon>https://</InputLeftAddon>
            <Input placeholder="www.example.com" />
            <InputRightAddon>.com</InputRightAddon>
        </InputGroup>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <div className="space-y-4">
            <InputGroup>
                <InputLeftElement>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </InputLeftElement>
                <Input placeholder="Search..." />
            </InputGroup>

            <InputGroup>
                <InputLeftElement>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </InputLeftElement>
                <Input placeholder="Username" />
                <InputRightElement>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </InputRightElement>
            </InputGroup>
        </div>
    ),
};

export const PasswordInput: Story = {
    render: () => {
        const [showPassword, setShowPassword] = useState(false);

        return (
            <InputGroup>
                <InputLeftElement>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </InputLeftElement>
                <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                />
                <InputRightElement pointerEvents>
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                        {showPassword ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L12 12m-3.122-3.122L12 12m0 0l4.878 4.878M12 12l3.122-3.122M12 12L9.878 9.878" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        )}
                    </button>
                </InputRightElement>
            </InputGroup>
        );
    },
};

export const ContactForm: Story = {
    render: () => (
        <div className="space-y-4">
            <InputGroup fullWidth>
                <InputLeftElement>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </InputLeftElement>
                <Input placeholder="Full Name" />
            </InputGroup>

            <InputGroup fullWidth>
                <InputLeftElement>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </InputLeftElement>
                <Input type="email" placeholder="Email Address" />
            </InputGroup>

            <InputGroup fullWidth>
                <InputLeftElement>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </InputLeftElement>
                <Input type="tel" placeholder="Phone Number" />
            </InputGroup>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Extra Small</label>
                <InputGroup size="xs">
                    <InputLeftAddon>$</InputLeftAddon>
                    <Input placeholder="0.00" />
                </InputGroup>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Small</label>
                <InputGroup size="sm">
                    <InputLeftAddon>$</InputLeftAddon>
                    <Input placeholder="0.00" />
                </InputGroup>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Medium</label>
                <InputGroup size="md">
                    <InputLeftAddon>$</InputLeftAddon>
                    <Input placeholder="0.00" />
                </InputGroup>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Large</label>
                <InputGroup size="lg">
                    <InputLeftAddon>$</InputLeftAddon>
                    <Input placeholder="0.00" />
                </InputGroup>
            </div>
        </div>
    ),
};

export const DomainBuilder: Story = {
    render: () => (
        <InputGroup fullWidth>
            <InputLeftAddon>https://</InputLeftAddon>
            <Input placeholder="mywebsite" />
            <InputRightAddon>
                <select className="bg-transparent border-none focus:outline-none">
                    <option>.com</option>
                    <option>.org</option>
                    <option>.net</option>
                    <option>.io</option>
                </select>
            </InputRightAddon>
        </InputGroup>
    ),
};

export const PriceInput: Story = {
    render: () => (
        <div className="space-y-4">
            <InputGroup>
                <InputLeftAddon>$</InputLeftAddon>
                <Input type="number" placeholder="0.00" />
                <InputRightAddon>USD</InputRightAddon>
            </InputGroup>

            <InputGroup>
                <InputLeftElement>$</InputLeftElement>
                <Input type="number" placeholder="Enter amount" />
            </InputGroup>
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Normal</label>
                <InputGroup>
                    <InputLeftElement>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </InputLeftElement>
                    <Input placeholder="Search..." />
                </InputGroup>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Disabled</label>
                <InputGroup>
                    <InputLeftElement>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </InputLeftElement>
                    <Input placeholder="Search..." isDisabled />
                </InputGroup>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">With Error</label>
                <InputGroup>
                    <InputLeftElement>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </InputLeftElement>
                    <Input
                        placeholder="Search..."
                        isInvalid
                        errorMessage="This field is required"
                    />
                </InputGroup>
            </div>
        </div>
    ),
};
