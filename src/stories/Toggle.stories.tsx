import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '../lib/components/Toggle';
import { useState } from 'react';

const meta: Meta<typeof Toggle> = {
    title: 'Components/Toggle',
    component: Toggle,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A two-state button that can be either on (pressed) or off (not pressed).'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'outline'],
            description: 'Visual variant of the toggle'
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Size of the toggle'
        },
        pressed: {
            control: 'boolean',
            description: 'Whether the toggle is pressed'
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the toggle is disabled'
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [pressed, setPressed] = useState(false);

        return (
            <Toggle pressed={pressed} onPressedChange={setPressed}>
                Toggle me
            </Toggle>
        );
    }
};

export const WithIcon: Story = {
    render: () => {
        const [pressed, setPressed] = useState(false);

        return (
            <Toggle pressed={pressed} onPressedChange={setPressed}>
                <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                    />
                </svg>
                {pressed ? 'Checked' : 'Check'}
            </Toggle>
        );
    }
};

export const Outline: Story = {
    render: () => {
        const [pressed, setPressed] = useState(false);

        return (
            <Toggle
                variant="outline"
                pressed={pressed}
                onPressedChange={setPressed}
            >
                Outline Toggle
            </Toggle>
        );
    }
};

export const Sizes: Story = {
    render: () => {
        const [smallPressed, setSmallPressed] = useState(false);
        const [mediumPressed, setMediumPressed] = useState(false);
        const [largePressed, setLargePressed] = useState(false);

        return (
            <div className="flex items-center gap-4">
                <Toggle
                    size="sm"
                    pressed={smallPressed}
                    onPressedChange={setSmallPressed}
                >
                    Small
                </Toggle>
                <Toggle
                    size="md"
                    pressed={mediumPressed}
                    onPressedChange={setMediumPressed}
                >
                    Medium
                </Toggle>
                <Toggle
                    size="lg"
                    pressed={largePressed}
                    onPressedChange={setLargePressed}
                >
                    Large
                </Toggle>
            </div>
        );
    }
};

export const Variants: Story = {
    render: () => {
        const [defaultPressed, setDefaultPressed] = useState(false);
        const [outlinePressed, setOutlinePressed] = useState(false);

        return (
            <div className="flex items-center gap-4">
                <Toggle
                    variant="default"
                    pressed={defaultPressed}
                    onPressedChange={setDefaultPressed}
                >
                    Default
                </Toggle>
                <Toggle
                    variant="outline"
                    pressed={outlinePressed}
                    onPressedChange={setOutlinePressed}
                >
                    Outline
                </Toggle>
            </div>
        );
    }
};

export const Disabled: Story = {
    render: () => {
        return (
            <div className="flex items-center gap-4">
                <Toggle disabled pressed={false}>
                    Disabled Off
                </Toggle>
                <Toggle disabled pressed={true}>
                    Disabled On
                </Toggle>
            </div>
        );
    }
};

export const ToggleGroup: Story = {
    render: () => {
        const [selected, setSelected] = useState<string[]>([]);

        const toggleItem = (value: string) => {
            setSelected(prev =>
                prev.includes(value)
                    ? prev.filter(item => item !== value)
                    : [...prev, value]
            );
        };

        return (
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Toggle
                        pressed={selected.includes('bold')}
                        onPressedChange={() => toggleItem('bold')}
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" />
                        </svg>
                        Bold
                    </Toggle>
                    <Toggle
                        pressed={selected.includes('italic')}
                        onPressedChange={() => toggleItem('italic')}
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4v4h4.5L8 16h4v4" />
                        </svg>
                        Italic
                    </Toggle>
                    <Toggle
                        pressed={selected.includes('underline')}
                        onPressedChange={() => toggleItem('underline')}
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4v10a6 6 0 0 0 12 0V4M8 20h8" />
                        </svg>
                        Underline
                    </Toggle>
                </div>
                {selected.length > 0 && (
                    <p className="text-sm text-gray-600">
                        Selected: {selected.join(', ')}
                    </p>
                )}
            </div>
        );
    }
};
