import type { Meta, StoryObj } from '@storybook/react';
import { Stack, HStack, VStack, Spacer } from '../lib/components';

const meta: Meta<typeof Stack> = {
    title: 'Layout/Stacks',
    component: Stack,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `Stack components provide a simple way to organize elements in a single dimension (horizontal or vertical) with consistent spacing.

## Features
- **Flexible Direction**: Vertical or horizontal stacking with responsive support
- **Consistent Spacing**: Configurable spacing between items
- **Alignment Control**: Align items along cross and main axis
- **Responsive**: Different configurations for different screen sizes
- **Specialized Components**: HStack for horizontal, VStack for vertical layouts
- **Spacer Component**: Flexible space to push items apart

## Components
- **Stack**: Main component with full control over direction and properties
- **HStack**: Horizontal stack (shorthand for Stack with direction="horizontal")
- **VStack**: Vertical stack (shorthand for Stack with direction="vertical")  
- **Spacer**: Flexible space component for spacing items

## Usage
Perfect for navigation bars, button groups, form layouts, and any linear arrangement of components.`,
            },
        },
    },
    argTypes: {
        direction: {
            control: 'select',
            options: ['vertical', 'horizontal'],
            description: 'Direction of the stack',
        },
        spacing: {
            control: 'number',
            description: 'Spacing between stack items',
        },
        align: {
            control: 'select',
            options: ['start', 'center', 'end', 'stretch'],
            description: 'Alignment along cross axis',
        },
        justify: {
            control: 'select',
            options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
            description: 'Justification along main axis',
        },
        wrap: {
            control: 'boolean',
            description: 'Whether items should wrap',
        },
        reverse: {
            control: 'boolean',
            description: 'Whether to reverse the order',
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleBox: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className = ''
}) => (
    <div className={`bg-blue-100 p-4 rounded text-center ${className}`}>
        {children}
    </div>
);

export const Default: Story = {
    args: {
        direction: 'vertical',
        spacing: 4,
        align: 'stretch',
    },
    render: (args) => (
        <Stack {...args}>
            <SampleBox>Item 1</SampleBox>
            <SampleBox>Item 2</SampleBox>
            <SampleBox>Item 3</SampleBox>
        </Stack>
    ),
};

export const Directions: Story = {
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold mb-4">Vertical Stack (VStack)</h3>
                <VStack spacing={4}>
                    <SampleBox>First</SampleBox>
                    <SampleBox>Second</SampleBox>
                    <SampleBox>Third</SampleBox>
                </VStack>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Horizontal Stack (HStack)</h3>
                <HStack spacing={4}>
                    <SampleBox>First</SampleBox>
                    <SampleBox>Second</SampleBox>
                    <SampleBox>Third</SampleBox>
                </HStack>
            </div>
        </div>
    ),
};

export const Spacing: Story = {
    render: () => (
        <div className="space-y-8">
            {[2, 4, 6, 8].map(spacing => (
                <div key={spacing}>
                    <h4 className="font-medium mb-2">Spacing: {spacing}</h4>
                    <HStack spacing={spacing}>
                        <SampleBox>Item 1</SampleBox>
                        <SampleBox>Item 2</SampleBox>
                        <SampleBox>Item 3</SampleBox>
                    </HStack>
                </div>
            ))}
        </div>
    ),
};

export const Alignment: Story = {
    render: () => (
        <div className="space-y-8">
            {['start', 'center', 'end', 'stretch'].map(align => (
                <div key={align}>
                    <h4 className="font-medium mb-2">Align: {align}</h4>
                    <HStack align={align as any} spacing={4} className="h-20 bg-gray-50 p-4">
                        <SampleBox>Short</SampleBox>
                        <SampleBox className="h-16">Tall</SampleBox>
                        <SampleBox>Short</SampleBox>
                    </HStack>
                </div>
            ))}
        </div>
    ),
};

export const Justification: Story = {
    render: () => (
        <div className="space-y-8">
            {['start', 'center', 'end', 'between', 'around', 'evenly'].map(justify => (
                <div key={justify}>
                    <h4 className="font-medium mb-2">Justify: {justify}</h4>
                    <HStack justify={justify as any} className="w-full bg-gray-50 p-4">
                        <SampleBox>Item 1</SampleBox>
                        <SampleBox>Item 2</SampleBox>
                        <SampleBox>Item 3</SampleBox>
                    </HStack>
                </div>
            ))}
        </div>
    ),
};

export const WithSpacer: Story = {
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold mb-4">Navigation Bar Layout</h3>
                <HStack className="w-full bg-gray-100 p-4 rounded">
                    <SampleBox>Logo</SampleBox>
                    <SampleBox>Home</SampleBox>
                    <SampleBox>About</SampleBox>
                    <Spacer />
                    <SampleBox>Login</SampleBox>
                    <SampleBox>Sign Up</SampleBox>
                </HStack>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Card Header</h3>
                <HStack className="w-full bg-white border border-gray-200 p-4 rounded">
                    <SampleBox>Title</SampleBox>
                    <Spacer />
                    <SampleBox>Action 1</SampleBox>
                    <SampleBox>Action 2</SampleBox>
                </HStack>
            </div>
        </div>
    ),
};

export const ResponsiveStack: Story = {
    render: () => (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold">Responsive Direction</h3>
            <p className="text-gray-600">
                This stack is vertical on mobile and horizontal on larger screens.
            </p>
            <Stack
                direction={{ base: 'vertical', md: 'horizontal' }}
                spacing={4}
                align="center"
            >
                <SampleBox>Responsive Item 1</SampleBox>
                <SampleBox>Responsive Item 2</SampleBox>
                <SampleBox>Responsive Item 3</SampleBox>
            </Stack>
        </div>
    ),
};

export const FormLayout: Story = {
    render: () => (
        <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-6">User Profile Form</h3>
            <VStack spacing={4}>
                <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                    />
                </div>

                <HStack spacing={4} className="w-full">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="First"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Last"
                        />
                    </div>
                </HStack>

                <HStack spacing={3} justify="end" className="w-full">
                    <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
                        Cancel
                    </button>
                    <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                        Save
                    </button>
                </HStack>
            </VStack>
        </div>
    ),
};

export const ButtonGroups: Story = {
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold mb-4">Primary Actions</h3>
                <HStack spacing={3}>
                    <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                        Save
                    </button>
                    <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
                        Cancel
                    </button>
                    <button className="px-4 py-2 text-red-700 bg-red-100 rounded-md hover:bg-red-200">
                        Delete
                    </button>
                </HStack>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Navigation Tabs</h3>
                <HStack spacing={0}>
                    <button className="px-4 py-2 text-blue-600 bg-blue-50 border border-blue-200 rounded-l-md">
                        Home
                    </button>
                    <button className="px-4 py-2 text-gray-700 bg-white border-t border-b border-gray-200">
                        Products
                    </button>
                    <button className="px-4 py-2 text-gray-700 bg-white border-t border-b border-gray-200">
                        About
                    </button>
                    <button className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-r-md">
                        Contact
                    </button>
                </HStack>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Icon Buttons</h3>
                <HStack spacing={2}>
                    <button className="p-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </button>
                    <button className="p-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                    <button className="p-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                    </button>
                </HStack>
            </div>
        </div>
    ),
};

export const WrappingAndReverse: Story = {
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold mb-4">Wrapping Items</h3>
                <Stack direction="horizontal" wrap spacing={4} className="w-64">
                    {Array.from({ length: 8 }, (_, i) => (
                        <SampleBox key={i} className="w-20">
                            {i + 1}
                        </SampleBox>
                    ))}
                </Stack>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Reversed Order</h3>
                <HStack reverse spacing={4}>
                    <SampleBox>First</SampleBox>
                    <SampleBox>Second</SampleBox>
                    <SampleBox>Third</SampleBox>
                </HStack>
            </div>
        </div>
    ),
};
