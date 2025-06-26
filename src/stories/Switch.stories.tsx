import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../lib/components';

const meta: Meta<typeof Switch> = {
    title: 'Components/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        checked: {
            control: 'boolean',
            description: 'Controlled checked state',
        },
        defaultChecked: {
            control: 'boolean',
            description: 'Default checked state (uncontrolled)',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the switch is disabled',
        },
        size: {
            control: {
                type: 'select',
                options: ['sm', 'md', 'lg'],
            },
            description: 'Size of the switch',
        },
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
            },
            description: 'Color of the switch when checked',
        },
        labelPosition: {
            control: {
                type: 'radio',
                options: ['left', 'right'],
            },
            description: 'Position of the label',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
    args: {
        defaultChecked: true,
    },
};

export const WithLabel: Story = {
    args: {
        defaultChecked: true,
        label: 'Enable notifications',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        label: 'Disabled switch',
    },
};

export const Colors: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <Switch {...args} color="primary" defaultChecked label="Primary" />
            <Switch {...args} color="secondary" defaultChecked label="Secondary" />
            <Switch {...args} color="success" defaultChecked label="Success" />
            <Switch {...args} color="danger" defaultChecked label="Danger" />
            <Switch {...args} color="warning" defaultChecked label="Warning" />
            <Switch {...args} color="info" defaultChecked label="Info" />
        </div>
    ),
};

export const Sizes: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <Switch {...args} size="sm" defaultChecked label="Small" />
            <Switch {...args} size="md" defaultChecked label="Medium" />
            <Switch {...args} size="lg" defaultChecked label="Large" />
        </div>
    ),
};

export const LabelPositions: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <Switch {...args} labelPosition="left" defaultChecked label="Label on left" />
            <Switch {...args} labelPosition="right" defaultChecked label="Label on right" />
        </div>
    ),
};
