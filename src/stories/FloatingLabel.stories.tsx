import type { Meta, StoryObj } from '@storybook/react';
import { FloatingLabel } from '../lib/components';
import { useState } from 'react';

const meta: Meta<typeof FloatingLabel> = {
    title: 'Forms/Floating labels',
    component: FloatingLabel,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `FloatingLabel is an input component with an animated floating label. The label moves up and shrinks when the input is focused or has content, providing a clean and modern user experience.

## Features
- **Animated Label**: Smooth transition animations when label floats
- **Multiple Variants**: Outline, filled, and standard (underline) styles
- **Size Support**: Small, medium, and large sizes
- **Color Schemes**: Multiple color themes (blue, green, red, purple, gray)
- **Validation States**: Built-in error and helper text support
- **Accessibility**: Proper focus management and ARIA attributes
- **Controlled/Uncontrolled**: Supports both controlled and uncontrolled usage

## Usage
The FloatingLabel component automatically handles the label animation based on focus state and input value. It works with all standard HTML input types.`,
            },
        },
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'The floating label text',
        },
        variant: {
            control: 'select',
            options: ['outline', 'filled', 'standard'],
            description: 'Visual style variant of the input',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Size of the input',
        },
        colorScheme: {
            control: 'select',
            options: ['blue', 'green', 'red', 'purple', 'gray'],
            description: 'Color scheme for the floating label',
        },
        isInvalid: {
            control: 'boolean',
            description: 'Whether the input is in an invalid state',
        },
        isDisabled: {
            control: 'boolean',
            description: 'Whether the input is disabled',
        },
        fullWidth: {
            control: 'boolean',
            description: 'Whether the input should expand to fill its container',
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Email Address',
        placeholder: '',
        variant: 'outline',
        size: 'md',
        colorScheme: 'blue',
        fullWidth: false,
    },
};

export const Variants: Story = {
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Outline</h3>
                <FloatingLabel label="First Name" variant="outline" />
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Filled</h3>
                <FloatingLabel label="Last Name" variant="filled" />
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Standard</h3>
                <FloatingLabel label="Phone Number" variant="standard" />
            </div>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Small</h3>
                <FloatingLabel label="Small Input" size="sm" />
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Medium</h3>
                <FloatingLabel label="Medium Input" size="md" />
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Large</h3>
                <FloatingLabel label="Large Input" size="lg" />
            </div>
        </div>
    ),
};

export const ColorSchemes: Story = {
    render: () => (
        <div className="space-y-4">
            <FloatingLabel label="Blue Theme" colorScheme="blue" defaultValue="Some text" />
            <FloatingLabel label="Green Theme" colorScheme="green" defaultValue="Some text" />
            <FloatingLabel label="Red Theme" colorScheme="red" defaultValue="Some text" />
            <FloatingLabel label="Purple Theme" colorScheme="purple" defaultValue="Some text" />
            <FloatingLabel label="Gray Theme" colorScheme="gray" defaultValue="Some text" />
        </div>
    ),
};

export const WithContent: Story = {
    render: () => (
        <div className="space-y-4">
            <FloatingLabel label="Pre-filled Input" defaultValue="john.doe@example.com" />
            <FloatingLabel label="Empty Input" />
            <FloatingLabel label="With Placeholder" placeholder="Start typing..." />
        </div>
    ),
};

export const InputTypes: Story = {
    render: () => (
        <div className="space-y-4">
            <FloatingLabel label="Email" type="email" />
            <FloatingLabel label="Password" type="password" />
            <FloatingLabel label="Phone Number" type="tel" />
            <FloatingLabel label="Website" type="url" />
            <FloatingLabel label="Age" type="number" />
            <FloatingLabel label="Birthday" type="date" />
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Normal</h3>
                <FloatingLabel label="Normal Input" />
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Disabled</h3>
                <FloatingLabel label="Disabled Input" isDisabled defaultValue="Cannot edit this" />
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Read Only</h3>
                <FloatingLabel label="Read Only Input" isReadOnly defaultValue="Read only value" />
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">With Error</h3>
                <FloatingLabel
                    label="Invalid Input"
                    isInvalid
                    errorMessage="This field is required"
                    defaultValue="invalid@"
                />
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">With Helper Text</h3>
                <FloatingLabel
                    label="Username"
                    helperText="Must be 3-20 characters long"
                />
            </div>
        </div>
    ),
};

export const ContactForm: Story = {
    render: () => {
        const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        });

        const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData(prev => ({
                ...prev,
                [field]: e.target.value
            }));
        };

        return (
            <div className="max-w-md space-y-4">
                <h2 className="text-lg font-semibold mb-4">Contact Information</h2>

                <div className="grid grid-cols-2 gap-4">
                    <FloatingLabel
                        label="First Name"
                        value={formData.firstName}
                        onChange={handleChange('firstName')}
                        fullWidth
                    />
                    <FloatingLabel
                        label="Last Name"
                        value={formData.lastName}
                        onChange={handleChange('lastName')}
                        fullWidth
                    />
                </div>

                <FloatingLabel
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    fullWidth
                />

                <FloatingLabel
                    label="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    fullWidth
                />

                <div className="relative">
                    <textarea
                        className="block w-full py-3 px-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white transition-colors resize-none"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange('message')}
                        placeholder=" "
                    />
                    <label className={`absolute left-3 transition-all duration-200 ease-in-out pointer-events-none ${formData.message ? '-top-2 text-sm text-blue-600 bg-white px-1' : 'top-3 text-base text-gray-500'
                        }`}>
                        Message
                    </label>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    Send Message
                </button>
            </div>
        );
    },
};

export const Interactive: Story = {
    render: () => {
        const [value, setValue] = useState('');
        const [isFocused, setIsFocused] = useState(false);

        return (
            <div className="space-y-4">
                <FloatingLabel
                    label="Interactive Example"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    variant="outline"
                    colorScheme="purple"
                    helperText="Type something to see the label animation"
                />

                <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Current value:</strong> {value || '(empty)'}</p>
                    <p><strong>Is focused:</strong> {isFocused ? 'Yes' : 'No'}</p>
                    <p><strong>Label should float:</strong> {(isFocused || value) ? 'Yes' : 'No'}</p>
                </div>

                <button
                    onClick={() => setValue('')}
                    className="text-sm text-blue-600 hover:text-blue-800 underline"
                >
                    Clear value
                </button>
            </div>
        );
    },
};
