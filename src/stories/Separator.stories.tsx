import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '../lib/components/Separator';

const meta: Meta<typeof Separator> = {
    title: 'Components/Separator',
    component: Separator,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A visual divider component for content sections.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            control: 'select',
            options: ['horizontal', 'vertical'],
            description: 'The orientation of the separator'
        },
        decorative: {
            control: 'boolean',
            description: 'Whether the separator is decorative only'
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
    args: {
        orientation: 'horizontal'
    },
    render: (args) => (
        <div className="w-64 space-y-4">
            <div>Content above</div>
            <Separator {...args} />
            <div>Content below</div>
        </div>
    )
};

export const Vertical: Story = {
    args: {
        orientation: 'vertical'
    },
    render: (args) => (
        <div className="flex h-16 items-center space-x-4">
            <div>Left content</div>
            <Separator {...args} />
            <div>Right content</div>
        </div>
    )
};

export const InCard: Story = {
    render: () => (
        <div className="w-80 rounded-lg border p-6 shadow">
            <h3 className="text-lg font-semibold">Card Title</h3>
            <p className="text-sm text-gray-600 mt-2">Some description text here.</p>
            <Separator className="my-4" />
            <div className="space-y-2">
                <button className="w-full text-left p-2 rounded hover:bg-gray-100">
                    Action 1
                </button>
                <button className="w-full text-left p-2 rounded hover:bg-gray-100">
                    Action 2
                </button>
            </div>
        </div>
    )
};
