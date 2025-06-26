import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from '../lib/components';
import { useState } from 'react';

const meta: Meta<typeof Radio> = {
    title: 'Components/Radio',
    component: Radio,
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
            description: 'Whether the radio button is disabled',
        },
        size: {
            control: { type: 'select', options: ['sm', 'md', 'lg'] },
            description: 'Size of the radio button',
        },
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
            },
            description: 'Color of the radio button',
        },
        labelLeft: {
            control: 'boolean',
            description: 'Whether to render the label on the left side',
        },
        isInvalid: {
            control: 'boolean',
            description: 'Whether the radio button is invalid',
        },
        required: {
            control: 'boolean',
            description: 'Whether the radio button is required',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Basic: Story = {
    args: {
        label: 'Option 1',
        name: 'option',
        value: '1',
    },
};

export const Checked: Story = {
    args: {
        label: 'Selected option',
        defaultChecked: true,
        name: 'option',
        value: '1',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled option',
        disabled: true,
        name: 'option',
        value: '1',
    },
};

export const DisabledChecked: Story = {
    args: {
        label: 'Disabled selected option',
        defaultChecked: true,
        disabled: true,
        name: 'option',
        value: '1',
    },
};

export const WithErrorMessage: Story = {
    args: {
        label: 'Invalid option',
        isInvalid: true,
        errorMessage: 'Please select a valid option',
        name: 'option',
        value: '1',
    },
};

export const WithHelperText: Story = {
    args: {
        label: 'Option with helper text',
        helperText: 'This option is recommended',
        name: 'option',
        value: '1',
    },
};

export const Sizes: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <Radio {...args} size="sm" label="Small radio" name="size" value="sm" />
            <Radio {...args} size="md" label="Medium radio" name="size" value="md" />
            <Radio {...args} size="lg" label="Large radio" name="size" value="lg" />
        </div>
    ),
};

export const Colors: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <Radio {...args} color="primary" label="Primary" name="color" value="primary" defaultChecked />
            <Radio {...args} color="secondary" label="Secondary" name="color" value="secondary" />
            <Radio {...args} color="success" label="Success" name="color" value="success" />
            <Radio {...args} color="danger" label="Danger" name="color" value="danger" />
            <Radio {...args} color="warning" label="Warning" name="color" value="warning" />
            <Radio {...args} color="info" label="Info" name="color" value="info" />
        </div>
    ),
};

export const LabelPosition: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <Radio {...args} labelLeft={false} label="Label on the right (default)" name="labelPosition" value="right" />
            <Radio {...args} labelLeft={true} label="Label on the left" name="labelPosition" value="left" />
        </div>
    ),
};

export const RadioGroupExample = () => {
    const [selectedValue, setSelectedValue] = useState<string>('2');

    return (
        <RadioGroup
            label="Favorite Programming Language"
            name="programming-language"
            value={selectedValue}
            onChange={setSelectedValue}
            helperText="Select your preferred programming language"
        >
            <Radio label="JavaScript" value="1" />
            <Radio label="TypeScript" value="2" />
            <Radio label="Python" value="3" />
            <Radio label="Java" value="4" />
            <Radio label="C#" value="5" />
        </RadioGroup>
    );
};

export const RadioGroupHorizontal = () => {
    return (
        <RadioGroup
            label="Select an option"
            name="horizontal-options"
            defaultValue="2"
            direction="horizontal"
            spacing="md"
        >
            <Radio label="Option 1" value="1" />
            <Radio label="Option 2" value="2" />
            <Radio label="Option 3" value="3" />
        </RadioGroup>
    );
};

export const RadioGroupDisabled = () => {
    return (
        <RadioGroup
            label="Disabled Radio Group"
            name="disabled-options"
            defaultValue="2"
            disabled
        >
            <Radio label="Option 1" value="1" />
            <Radio label="Option 2" value="2" />
            <Radio label="Option 3" value="3" />
        </RadioGroup>
    );
};

export const RadioGroupWithError = () => {
    return (
        <RadioGroup
            label="Select an option"
            name="error-options"
            isInvalid
            errorMessage="Please select a valid option"
            required
        >
            <Radio label="Option 1" value="1" />
            <Radio label="Option 2" value="2" />
            <Radio label="Option 3" value="3" />
        </RadioGroup>
    );
};

export const RadioGroupWithSpacing = () => {
    return (
        <div className="flex flex-col gap-8">
            <RadioGroup
                label="Small Spacing"
                name="spacing-sm"
                defaultValue="1"
                spacing="sm"
            >
                <Radio label="Option 1" value="1" />
                <Radio label="Option 2" value="2" />
                <Radio label="Option 3" value="3" />
            </RadioGroup>

            <RadioGroup
                label="Medium Spacing"
                name="spacing-md"
                defaultValue="1"
                spacing="md"
            >
                <Radio label="Option 1" value="1" />
                <Radio label="Option 2" value="2" />
                <Radio label="Option 3" value="3" />
            </RadioGroup>

            <RadioGroup
                label="Large Spacing"
                name="spacing-lg"
                defaultValue="1"
                spacing="lg"
            >
                <Radio label="Option 1" value="1" />
                <Radio label="Option 2" value="2" />
                <Radio label="Option 3" value="3" />
            </RadioGroup>
        </div>
    );
};
