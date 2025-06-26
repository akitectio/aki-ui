import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../lib/components';

const meta: Meta<typeof Divider> = {
    title: 'Components/Divider',
    component: Divider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            control: { type: 'select', options: ['horizontal', 'vertical'] },
            description: 'The orientation of the divider',
        },
        variant: {
            control: { type: 'select', options: ['solid', 'dashed', 'dotted'] },
            description: 'The style variant of the divider',
        },
        thickness: {
            control: { type: 'number' },
            description: 'The thickness of the divider in pixels',
        },
        color: {
            control: 'color',
            description: 'The color of the divider',
        },
        light: {
            control: 'boolean',
            description: 'Whether the divider should have a lighter color',
        },
        margin: {
            control: { type: 'number' },
            description: 'The margin around the divider in pixels',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
    args: {
        className: 'w-64',
    },
};

export const Vertical: Story = {
    args: {
        orientation: 'vertical',
        className: 'h-32',
    },
};

export const Variants: Story = {
    render: () => (
        <div className="flex flex-col gap-8 items-center">
            <div className="w-64">
                <p className="mb-2 text-sm font-medium">Solid (Default)</p>
                <Divider variant="solid" />
            </div>

            <div className="w-64">
                <p className="mb-2 text-sm font-medium">Dashed</p>
                <Divider variant="dashed" />
            </div>

            <div className="w-64">
                <p className="mb-2 text-sm font-medium">Dotted</p>
                <Divider variant="dotted" />
            </div>
        </div>
    ),
};

export const Colors: Story = {
    render: () => (
        <div className="flex flex-col gap-8 items-center">
            <div className="w-64">
                <p className="mb-2 text-sm font-medium">Default</p>
                <Divider />
            </div>

            <div className="w-64">
                <p className="mb-2 text-sm font-medium">Light</p>
                <Divider light />
            </div>

            <div className="w-64">
                <p className="mb-2 text-sm font-medium">Custom Color</p>
                <Divider color="#3B82F6" />
            </div>

            <div className="w-64">
                <p className="mb-2 text-sm font-medium">Custom Color and Thickness</p>
                <Divider color="#10B981" thickness={3} />
            </div>
        </div>
    ),
};

export const WithLabel: Story = {
    render: () => (
        <div className="flex flex-col gap-8 items-center">
            <div className="w-64">
                <Divider label="OR" />
            </div>

            <div className="w-64">
                <Divider
                    label="CENTER"
                    labelAlignment="center"
                />
            </div>

            <div className="w-64">
                <Divider
                    label="LEFT"
                    labelAlignment="left"
                />
            </div>

            <div className="w-64">
                <Divider
                    label="RIGHT"
                    labelAlignment="right"
                />
            </div>

            <div className="w-64">
                <Divider
                    label={<span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">CUSTOM</span>}
                    color="#3B82F6"
                />
            </div>
        </div>
    ),
};

export const WithContent: Story = {
    render: () => (
        <div className="max-w-md mx-auto">
            <div className="text-lg font-medium">Section Title</div>
            <p className="text-gray-600 mb-4">
                This is some content before the divider. The divider helps to separate
                different sections of content visually.
            </p>

            <Divider className="my-6" />

            <p className="text-gray-600">
                This is another section of content after the divider. The visual separation
                makes the content easier to read and understand.
            </p>
        </div>
    ),
};

export const InCard: Story = {
    render: () => (
        <div className="w-80 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="p-4">
                <h3 className="text-lg font-medium">Card Header</h3>
                <p className="text-sm text-gray-600">This is the card header content</p>
            </div>

            <Divider />

            <div className="p-4">
                <p className="text-sm text-gray-600">This is the card body content</p>
            </div>

            <Divider />

            <div className="p-4 bg-gray-50">
                <p className="text-sm text-gray-600">Card Footer</p>
            </div>
        </div>
    ),
};

export const CustomStyling: Story = {
    render: () => (
        <div className="w-64">
            <Divider
                color="rgba(79, 70, 229, 0.6)"
                thickness={2}
                variant="dashed"
                margin={8}
            />
        </div>
    ),
};
