import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../lib/components';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
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
            description: 'Whether the checkbox is disabled',
        },
        indeterminate: {
            control: 'boolean',
            description: 'Whether the checkbox is in an indeterminate state',
        },
        size: {
            control: { type: 'select', options: ['sm', 'md', 'lg'] },
            description: 'Size of the checkbox',
        },
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
            },
            description: 'Color of the checkbox',
        },
        labelLeft: {
            control: 'boolean',
            description: 'Whether to render the label on the left side',
        },
        isInvalid: {
            control: 'boolean',
            description: 'Whether the checkbox is invalid',
        },
        required: {
            control: 'boolean',
            description: 'Whether the checkbox is required',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
    args: {
        label: 'Agree to terms and conditions',
    },
};

export const Checked: Story = {
    args: {
        label: 'Checked checkbox',
        defaultChecked: true,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled checkbox',
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        label: 'Disabled checked checkbox',
        defaultChecked: true,
        disabled: true,
    },
};

export const WithErrorMessage: Story = {
    args: {
        label: 'Invalid checkbox',
        isInvalid: true,
        errorMessage: 'This field is required',
    },
};

export const WithHelperText: Story = {
    args: {
        label: 'Subscribe to newsletter',
        helperText: 'You can unsubscribe at any time',
    },
};

export const Sizes: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <Checkbox {...args} size="sm" label="Small checkbox" />
            <Checkbox {...args} size="md" label="Medium checkbox" />
            <Checkbox {...args} size="lg" label="Large checkbox" />
        </div>
    ),
};

export const Colors: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <Checkbox {...args} color="primary" label="Primary" defaultChecked />
            <Checkbox {...args} color="secondary" label="Secondary" defaultChecked />
            <Checkbox {...args} color="success" label="Success" defaultChecked />
            <Checkbox {...args} color="danger" label="Danger" defaultChecked />
            <Checkbox {...args} color="warning" label="Warning" defaultChecked />
            <Checkbox {...args} color="info" label="Info" defaultChecked />
        </div>
    ),
};

export const LabelPosition: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <Checkbox {...args} labelLeft={false} label="Label on the right (default)" />
            <Checkbox {...args} labelLeft={true} label="Label on the left" />
        </div>
    ),
};

export const Indeterminate = () => {
    const [childChecked, setChildChecked] = useState([false, false, false]);
    const allChecked = childChecked.every(Boolean);
    const isIndeterminate = childChecked.some(Boolean) && !allChecked;

    const handleParentChange = (checked: boolean) => {
        setChildChecked([checked, checked, checked]);
    };

    const handleChildChange = (index: number, checked: boolean) => {
        const newChildChecked = [...childChecked];
        newChildChecked[index] = checked;
        setChildChecked(newChildChecked);
    };

    return (
        <div className="flex flex-col gap-2">
            <Checkbox
                label="Select all"
                checked={allChecked}
                indeterminate={isIndeterminate}
                onChange={handleParentChange}
            />

            <div className="ml-6 mt-2 flex flex-col gap-2">
                <Checkbox
                    label="Option 1"
                    checked={childChecked[0]}
                    onChange={(checked) => handleChildChange(0, checked)}
                />
                <Checkbox
                    label="Option 2"
                    checked={childChecked[1]}
                    onChange={(checked) => handleChildChange(1, checked)}
                />
                <Checkbox
                    label="Option 3"
                    checked={childChecked[2]}
                    onChange={(checked) => handleChildChange(2, checked)}
                />
            </div>
        </div>
    );
};
