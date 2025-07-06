import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../lib/components/Textarea';

const meta: Meta<typeof Textarea> = {
    title: 'Components/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A multi-line text input component for longer text content.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['outline', 'filled', 'unstyled'],
            description: 'Visual style variant'
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Size of the textarea'
        },
        resize: {
            control: 'select',
            options: ['none', 'vertical', 'horizontal', 'both'],
            description: 'Resize behavior'
        },
        error: {
            control: 'boolean',
            description: 'Whether the textarea has an error state'
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the textarea is disabled'
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Enter your message...'
    },
    render: (args) => (
        <div className="w-80">
            <Textarea {...args} />
        </div>
    )
};

export const Variants: Story = {
    render: () => (
        <div className="w-80 space-y-4">
            <div>
                <label className="block text-sm font-medium mb-2">Outline (default)</label>
                <Textarea placeholder="Outline textarea..." variant="outline" />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2">Filled</label>
                <Textarea placeholder="Filled textarea..." variant="filled" />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2">Unstyled</label>
                <Textarea placeholder="Unstyled textarea..." variant="unstyled" />
            </div>
        </div>
    )
};

export const Sizes: Story = {
    render: () => (
        <div className="w-80 space-y-4">
            <div>
                <label className="block text-sm font-medium mb-2">Small</label>
                <Textarea placeholder="Small textarea..." size="sm" />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2">Medium</label>
                <Textarea placeholder="Medium textarea..." size="md" />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2">Large</label>
                <Textarea placeholder="Large textarea..." size="lg" />
            </div>
        </div>
    )
};

export const ResizeOptions: Story = {
    render: () => (
        <div className="w-80 space-y-4">
            <div>
                <label className="block text-sm font-medium mb-2">No resize</label>
                <Textarea placeholder="Cannot be resized..." resize="none" />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2">Vertical resize</label>
                <Textarea placeholder="Can be resized vertically..." resize="vertical" />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2">Horizontal resize</label>
                <Textarea placeholder="Can be resized horizontally..." resize="horizontal" />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2">Both directions</label>
                <Textarea placeholder="Can be resized in both directions..." resize="both" />
            </div>
        </div>
    )
};

export const States: Story = {
    render: () => (
        <div className="w-80 space-y-4">
            <div>
                <label className="block text-sm font-medium mb-2">Normal</label>
                <Textarea placeholder="Normal state..." />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2">Error</label>
                <Textarea placeholder="Error state..." error />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2">Disabled</label>
                <Textarea placeholder="Disabled state..." disabled />
            </div>
        </div>
    )
};

export const WithForm: Story = {
    render: () => (
        <form className="w-80 space-y-4">
            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                </label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    rows={4}
                />
                <p className="text-xs text-gray-500 mt-1">
                    Maximum 500 characters
                </p>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
                Send Message
            </button>
        </form>
    )
};
