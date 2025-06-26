import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Button } from '../lib/components';

const meta: Meta<typeof Tooltip> = {
    title: 'Components/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        position: {
            control: {
                type: 'select',
                options: ['top', 'right', 'bottom', 'left'],
            },
            description: 'Position of the tooltip',
        },
        delay: {
            control: {
                type: 'number',
            },
            description: 'Delay before showing tooltip (ms)',
        },
        trigger: {
            control: {
                type: 'select',
                options: ['hover', 'click', 'focus', 'manual'],
            },
            description: 'How to trigger the tooltip',
        },
        theme: {
            control: {
                type: 'select',
                options: ['dark', 'light'],
            },
            description: 'Visual theme of the tooltip',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
    args: {
        content: 'This is a tooltip',
        position: 'top',
        children: <Button>Hover me</Button>,
    },
};

export const Positions: Story = {
    render: (args) => (
        <div className="flex gap-4">
            <Tooltip {...args} content="Top tooltip" position="top">
                <Button>Top</Button>
            </Tooltip>
            <Tooltip {...args} content="Right tooltip" position="right">
                <Button>Right</Button>
            </Tooltip>
            <Tooltip {...args} content="Bottom tooltip" position="bottom">
                <Button>Bottom</Button>
            </Tooltip>
            <Tooltip {...args} content="Left tooltip" position="left">
                <Button>Left</Button>
            </Tooltip>
        </div>
    ),
};

export const Triggers: Story = {
    render: (args) => (
        <div className="flex gap-4">
            <Tooltip {...args} content="Hover tooltip" trigger="hover">
                <Button>Hover</Button>
            </Tooltip>
            <Tooltip {...args} content="Click tooltip" trigger="click">
                <Button>Click</Button>
            </Tooltip>
            <Tooltip {...args} content="Focus tooltip" trigger="focus">
                <Button>Focus</Button>
            </Tooltip>
        </div>
    ),
};

export const Themes: Story = {
    render: (args) => (
        <div className="flex gap-4">
            <Tooltip {...args} content="Dark theme tooltip" theme="dark">
                <Button>Dark</Button>
            </Tooltip>
            <Tooltip {...args} content="Light theme tooltip" theme="light">
                <Button>Light</Button>
            </Tooltip>
        </div>
    ),
};

export const WithDelay: Story = {
    args: {
        content: 'Tooltip with 500ms delay',
        delay: 500,
        children: <Button>Hover me</Button>,
    },
};

export const WithComplexContent: Story = {
    args: {
        content: (
            <div>
                <h4 className="font-bold mb-1">Tooltip title</h4>
                <p>This tooltip has complex content with multiple elements.</p>
                <hr className="my-1 border-gray-600" />
                <div className="flex justify-between">
                    <span>Value:</span>
                    <span className="font-medium">42</span>
                </div>
            </div>
        ),
        maxWidth: '250px',
        children: <Button>Hover for details</Button>,
    },
};
