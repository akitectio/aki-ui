import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '../lib/components/Progress';
import { useState, useEffect } from 'react';

const meta: Meta<typeof Progress> = {
    title: 'Components/Progress',
    component: Progress,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A component for displaying progress indicators and completion status.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
            description: 'Current progress value'
        },
        max: {
            control: { type: 'number', min: 1 },
            description: 'Maximum progress value'
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Size of the progress bar'
        },
        variant: {
            control: 'select',
            options: ['default', 'success', 'warning', 'danger'],
            description: 'Visual style variant'
        },
        showValue: {
            control: 'boolean',
            description: 'Whether to show progress values'
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 50,
        max: 100
    },
    render: (args) => (
        <div className="w-64">
            <Progress {...args} />
        </div>
    )
};

export const WithValue: Story = {
    args: {
        value: 75,
        max: 100,
        showValue: true
    },
    render: (args) => (
        <div className="w-64">
            <Progress {...args} />
        </div>
    )
};

export const Sizes: Story = {
    render: () => (
        <div className="w-64 space-y-4">
            <div>
                <div className="text-sm mb-2">Small</div>
                <Progress value={30} size="sm" />
            </div>
            <div>
                <div className="text-sm mb-2">Medium</div>
                <Progress value={60} size="md" />
            </div>
            <div>
                <div className="text-sm mb-2">Large</div>
                <Progress value={90} size="lg" />
            </div>
        </div>
    )
};

export const Variants: Story = {
    render: () => (
        <div className="w-64 space-y-4">
            <div>
                <div className="text-sm mb-2">Default</div>
                <Progress value={50} variant="default" />
            </div>
            <div>
                <div className="text-sm mb-2">Success</div>
                <Progress value={80} variant="success" />
            </div>
            <div>
                <div className="text-sm mb-2">Warning</div>
                <Progress value={60} variant="warning" />
            </div>
            <div>
                <div className="text-sm mb-2">Danger</div>
                <Progress value={30} variant="danger" />
            </div>
        </div>
    )
};

export const Animated: Story = {
    render: () => {
        const [progress, setProgress] = useState(0);

        useEffect(() => {
            const timer = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) return 0;
                    return prev + 1;
                });
            }, 50);

            return () => clearInterval(timer);
        }, []);

        return (
            <div className="w-64 space-y-2">
                <div className="text-sm">Animated Progress</div>
                <Progress value={progress} showValue />
            </div>
        );
    }
};
