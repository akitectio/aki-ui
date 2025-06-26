import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../lib/components';

const meta: Meta<typeof Spinner> = {
    title: 'Components/Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: 'The size of the spinner',
        },
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
            description: 'The color of the spinner',
        },
        thickness: {
            control: 'select',
            options: ['thin', 'normal', 'thick'],
            description: 'The thickness of the spinner border',
        },
        speed: {
            control: 'select',
            options: ['slow', 'normal', 'fast'],
            description: 'The speed of the spinner animation',
        },
        label: {
            control: 'text',
            description: 'Accessible label for screen readers',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Basic: Story = {
    args: {
        size: 'md',
        color: 'primary',
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Spinner size="xs" />
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner size="xl" />
        </div>
    ),
};

export const Colors: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Spinner color="primary" />
            <Spinner color="secondary" />
            <Spinner color="success" />
            <Spinner color="danger" />
            <Spinner color="warning" />
            <Spinner color="info" />
            <Spinner color="light" />
            <Spinner color="dark" />
        </div>
    ),
};

export const Thickness: Story = {
    render: () => (
        <div className="flex gap-4">
            <Spinner thickness="thin" />
            <Spinner thickness="normal" />
            <Spinner thickness="thick" />
        </div>
    ),
};

export const Speed: Story = {
    render: () => (
        <div className="flex gap-4">
            <Spinner speed="slow" />
            <Spinner speed="normal" />
            <Spinner speed="fast" />
        </div>
    ),
};

export const WithText: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <Spinner />
                <span>Loading...</span>
            </div>
            <div className="flex items-center gap-2">
                <Spinner color="success" />
                <span>Processing your request</span>
            </div>
            <div className="flex items-center gap-2">
                <Spinner color="danger" />
                <span>Please wait while we connect to the server</span>
            </div>
        </div>
    ),
};

export const InButton: Story = {
    render: () => (
        <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
                <Spinner size="sm" color="light" />
                <span>Loading</span>
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded flex items-center gap-2">
                <span>Processing</span>
                <Spinner size="sm" color="dark" />
            </button>
        </div>
    ),
};
