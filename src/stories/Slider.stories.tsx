import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '../lib/components';

const meta: Meta<typeof Slider> = {
    title: 'Components/Slider',
    component: Slider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        min: {
            control: { type: 'number' },
            description: 'Minimum value',
            defaultValue: 0,
        },
        max: {
            control: { type: 'number' },
            description: 'Maximum value',
            defaultValue: 100,
        },
        step: {
            control: { type: 'number' },
            description: 'Step size',
            defaultValue: 1,
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the slider is disabled',
        },
        showTooltip: {
            control: 'boolean',
            description: 'Show tooltip when sliding',
        },
        showMarkers: {
            control: 'boolean',
            description: 'Show step markers on the track',
        },
        range: {
            control: 'boolean',
            description: 'Enable range selection mode',
        },
        size: {
            control: { type: 'select', options: ['sm', 'md', 'lg'] },
            description: 'Size of the slider',
        },
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
            },
            description: 'Color of the slider',
        },
        vertical: {
            control: 'boolean',
            description: 'Vertical orientation',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Basic: Story = {
    args: {
        min: 0,
        max: 100,
        defaultValue: 40,
        className: 'w-64',
    },
};

export const WithTooltip: Story = {
    args: {
        min: 0,
        max: 100,
        defaultValue: 40,
        showTooltip: true,
        className: 'w-64',
    },
};

export const DisabledSlider: Story = {
    args: {
        min: 0,
        max: 100,
        defaultValue: 60,
        disabled: true,
        className: 'w-64',
    },
};

export const WithStepAndMarkers: Story = {
    args: {
        min: 0,
        max: 100,
        step: 10,
        defaultValue: 50,
        showMarkers: true,
        showTooltip: true,
        className: 'w-64',
    },
};

export const RangeSlider: Story = {
    args: {
        min: 0,
        max: 100,
        defaultValue: [30, 70],
        range: true,
        showTooltip: true,
        className: 'w-64',
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex flex-col gap-8 w-64">
            <Slider size="sm" defaultValue={30} />
            <Slider size="md" defaultValue={50} />
            <Slider size="lg" defaultValue={70} />
        </div>
    ),
};

export const Colors: Story = {
    render: () => (
        <div className="flex flex-col gap-8 w-64">
            <Slider color="primary" defaultValue={50} />
            <Slider color="secondary" defaultValue={50} />
            <Slider color="success" defaultValue={50} />
            <Slider color="danger" defaultValue={50} />
            <Slider color="warning" defaultValue={50} />
            <Slider color="info" defaultValue={50} />
        </div>
    ),
};

export const VerticalSlider: Story = {
    args: {
        min: 0,
        max: 100,
        defaultValue: 60,
        vertical: true,
        showTooltip: true,
        verticalHeight: '200px',
    },
};

export const WithLabels: Story = {
    args: {
        min: 0,
        max: 100,
        defaultValue: 50,
        showTooltip: true,
        className: 'w-64',
        labels: {
            0: 'Min',
            25: '25%',
            50: '50%',
            75: '75%',
            100: 'Max',
        },
    },
};
