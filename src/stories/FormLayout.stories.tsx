import type { Meta, StoryObj } from '@storybook/react';
import { FormLayout, FormRow, FormColumn, FormSection, Input, FloatingLabel } from '../lib/components';

const meta: Meta<typeof FormLayout> = {
    title: 'Forms/Layout',
    component: FormLayout,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `FormLayout provides a flexible system for organizing form elements with consistent spacing and responsive design.

## Features
- **Flexible Direction**: Vertical or horizontal layouts
- **Responsive Grid**: FormRow and FormColumn for grid-based layouts
- **Consistent Spacing**: Configurable spacing between form elements
- **Form Sections**: Organized sections with titles and descriptions
- **Centered Forms**: Option to center forms with max-width
- **Accessibility**: Proper form structure and labeling

## Usage
Use FormLayout as the main container, FormRow for horizontal grouping, FormColumn for grid items, and FormSection for organizing related fields.`,
            },
        },
    },
    argTypes: {
        direction: {
            control: 'select',
            options: ['vertical', 'horizontal'],
            description: 'Layout direction',
        },
        spacing: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: 'Spacing between form elements',
        },
        centered: {
            control: 'boolean',
            description: 'Whether the form should be centered',
        },
        maxWidth: {
            control: 'text',
            description: 'Maximum width of the form',
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        direction: 'vertical',
        spacing: 'md',
        centered: false,
    },
    render: (args) => (
        <FormLayout {...args}>
            <Input label="First Name" placeholder="Enter your first name" />
            <Input label="Last Name" placeholder="Enter your last name" />
            <Input label="Email" type="email" placeholder="Enter your email" />
            <Input label="Phone" type="tel" placeholder="Enter your phone number" />
        </FormLayout>
    ),
};

export const HorizontalLayout: Story = {
    render: () => (
        <FormLayout direction="horizontal" spacing="md">
            <Input label="Search" placeholder="Search..." />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Search
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                Clear
            </button>
        </FormLayout>
    ),
};

export const GridLayout: Story = {
    render: () => (
        <FormLayout maxWidth="600px" centered>
            <FormRow columns={2} gap="md">
                <FormColumn>
                    <FloatingLabel label="First Name" />
                </FormColumn>
                <FormColumn>
                    <FloatingLabel label="Last Name" />
                </FormColumn>
            </FormRow>

            <FormRow columns={1}>
                <FormColumn>
                    <FloatingLabel label="Email Address" type="email" />
                </FormColumn>
            </FormRow>

            <FormRow columns={3} gap="sm">
                <FormColumn span={2}>
                    <FloatingLabel label="Address" />
                </FormColumn>
                <FormColumn span={1}>
                    <FloatingLabel label="Zip" />
                </FormColumn>
            </FormRow>
        </FormLayout>
    ),
};

export const ResponsiveGrid: Story = {
    render: () => (
        <FormLayout>
            <FormRow columns="auto" gap="md">
                <FloatingLabel label="Product Name" />
                <FloatingLabel label="SKU" />
                <FloatingLabel label="Price" type="number" />
                <FloatingLabel label="Category" />
            </FormRow>

            <FormRow columns={2} gap="lg">
                <div className="space-y-4">
                    <h3 className="font-medium">Product Details</h3>
                    <FloatingLabel label="Description" />
                    <FloatingLabel label="Weight" type="number" />
                </div>
                <div className="space-y-4">
                    <h3 className="font-medium">Inventory</h3>
                    <FloatingLabel label="Stock Quantity" type="number" />
                    <FloatingLabel label="Reorder Level" type="number" />
                </div>
            </FormRow>
        </FormLayout>
    ),
};

export const FormSections: Story = {
    render: () => (
        <FormLayout maxWidth="500px" centered spacing="lg">
            <FormSection
                title="Personal Information"
                description="Please provide your basic contact details"
            >
                <FormRow columns={2} gap="md">
                    <FloatingLabel label="First Name" />
                    <FloatingLabel label="Last Name" />
                </FormRow>
                <FloatingLabel label="Email Address" type="email" />
                <FloatingLabel label="Phone Number" type="tel" />
            </FormSection>

            <FormSection
                title="Address"
                description="Your shipping and billing address"
            >
                <FloatingLabel label="Street Address" />
                <FormRow columns={3} gap="sm">
                    <FormColumn span={2}>
                        <FloatingLabel label="City" />
                    </FormColumn>
                    <FormColumn span={1}>
                        <FloatingLabel label="ZIP" />
                    </FormColumn>
                </FormRow>
                <FloatingLabel label="Country" />
            </FormSection>

            <FormSection title="Preferences">
                <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Subscribe to newsletter</span>
                    </label>
                    <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Receive SMS notifications</span>
                    </label>
                </div>
            </FormSection>
        </FormLayout>
    ),
};

export const LoginForm: Story = {
    render: () => (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <FormLayout
                maxWidth="400px"
                centered
                spacing="lg"
                className="bg-white p-8 rounded-lg shadow-md"
            >
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
                    <p className="text-gray-600 mt-2">Welcome back! Please sign in to your account.</p>
                </div>

                <FloatingLabel
                    label="Email Address"
                    type="email"
                    fullWidth
                />

                <FloatingLabel
                    label="Password"
                    type="password"
                    fullWidth
                />

                <FormLayout direction="horizontal" spacing="sm" className="items-center justify-between">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                        Forgot password?
                    </a>
                </FormLayout>

                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    Sign In
                </button>

                <div className="text-center">
                    <span className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <a href="#" className="text-blue-600 hover:text-blue-800">
                            Sign up
                        </a>
                    </span>
                </div>
            </FormLayout>
        </div>
    ),
};

export const Spacing: Story = {
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-4">Extra Small Spacing (xs)</h3>
                <FormLayout spacing="xs" className="border border-gray-200 p-4 rounded">
                    <Input label="Field 1" placeholder="Input 1" />
                    <Input label="Field 2" placeholder="Input 2" />
                    <Input label="Field 3" placeholder="Input 3" />
                </FormLayout>
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-4">Small Spacing (sm)</h3>
                <FormLayout spacing="sm" className="border border-gray-200 p-4 rounded">
                    <Input label="Field 1" placeholder="Input 1" />
                    <Input label="Field 2" placeholder="Input 2" />
                    <Input label="Field 3" placeholder="Input 3" />
                </FormLayout>
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-4">Medium Spacing (md)</h3>
                <FormLayout spacing="md" className="border border-gray-200 p-4 rounded">
                    <Input label="Field 1" placeholder="Input 1" />
                    <Input label="Field 2" placeholder="Input 2" />
                    <Input label="Field 3" placeholder="Input 3" />
                </FormLayout>
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-4">Large Spacing (lg)</h3>
                <FormLayout spacing="lg" className="border border-gray-200 p-4 rounded">
                    <Input label="Field 1" placeholder="Input 1" />
                    <Input label="Field 2" placeholder="Input 2" />
                    <Input label="Field 3" placeholder="Input 3" />
                </FormLayout>
            </div>
        </div>
    ),
};
