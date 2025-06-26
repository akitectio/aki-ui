import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '../lib/components';

const meta: Meta<typeof Chip> = {
    title: 'Components/Chip',
    component: Chip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'Content of the chip',
        },
        variant: {
            control: { type: 'select', options: ['solid', 'outlined', 'soft'] },
            description: 'Style variant of the chip',
        },
        size: {
            control: { type: 'select', options: ['sm', 'md', 'lg'] },
            description: 'Size of the chip',
        },
        color: {
            control: {
                type: 'select',
                options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']
            },
            description: 'Color of the chip',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the chip is disabled',
        },
        clickable: {
            control: 'boolean',
            description: 'Whether the chip is clickable',
        },
        deletable: {
            control: 'boolean',
            description: 'Whether the chip has a delete button',
        },
        rounded: {
            control: 'boolean',
            description: 'Whether the chip has a circular shape',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Basic: Story = {
    args: {
        label: 'Basic Chip',
    },
};

export const Variants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Chip label="Solid (Default)" variant="solid" />
            <Chip label="Outlined" variant="outlined" />
            <Chip label="Soft" variant="soft" />
        </div>
    ),
};

export const Colors: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
                <Chip label="Default" color="default" />
                <Chip label="Primary" color="primary" />
                <Chip label="Secondary" color="secondary" />
                <Chip label="Success" color="success" />
                <Chip label="Warning" color="warning" />
                <Chip label="Danger" color="danger" />
                <Chip label="Info" color="info" />
            </div>

            <div className="flex flex-wrap gap-2">
                <Chip label="Default" color="default" variant="outlined" />
                <Chip label="Primary" color="primary" variant="outlined" />
                <Chip label="Secondary" color="secondary" variant="outlined" />
                <Chip label="Success" color="success" variant="outlined" />
                <Chip label="Warning" color="warning" variant="outlined" />
                <Chip label="Danger" color="danger" variant="outlined" />
                <Chip label="Info" color="info" variant="outlined" />
            </div>

            <div className="flex flex-wrap gap-2">
                <Chip label="Default" color="default" variant="soft" />
                <Chip label="Primary" color="primary" variant="soft" />
                <Chip label="Secondary" color="secondary" variant="soft" />
                <Chip label="Success" color="success" variant="soft" />
                <Chip label="Warning" color="warning" variant="soft" />
                <Chip label="Danger" color="danger" variant="soft" />
                <Chip label="Info" color="info" variant="soft" />
            </div>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Chip label="Small" size="sm" />
            <Chip label="Medium" size="md" />
            <Chip label="Large" size="lg" />
        </div>
    ),
};

export const Clickable: Story = {
    args: {
        label: 'Clickable Chip',
        clickable: true,
        onClick: () => alert('Chip clicked'),
    },
};

export const Deletable: Story = {
    args: {
        label: 'Deletable Chip',
        deletable: true,
        onDelete: () => alert('Delete clicked'),
    },
};

export const ClickableAndDeletable: Story = {
    args: {
        label: 'Click or Delete',
        clickable: true,
        deletable: true,
        onClick: () => alert('Chip clicked'),
        onDelete: () => alert('Delete clicked'),
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Chip',
        disabled: true,
        clickable: true,
        deletable: true,
    },
};

export const WithIcons: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Chip
                label="With Start Icon"
                startIcon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                }
            />

            <Chip
                label="With End Icon"
                endIcon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                }
            />

            <Chip
                label="With Both Icons"
                startIcon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                }
                endIcon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                }
            />
        </div>
    ),
};

export const WithAvatar: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Chip
                label="John Doe"
                avatar={
                    <img
                        src="https://i.pravatar.cc/300?img=1"
                        alt="John Doe"
                        className="rounded-full w-full h-full object-cover"
                    />
                }
            />

            <Chip
                label="Jane Smith"
                avatar={
                    <img
                        src="https://i.pravatar.cc/300?img=5"
                        alt="Jane Smith"
                        className="rounded-full w-full h-full object-cover"
                    />
                }
                color="primary"
            />

            <Chip
                label="User"
                avatar={
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-full">
                        <svg className="w-3/4 h-3/4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </div>
                }
                variant="outlined"
            />
        </div>
    ),
};

export const RoundedVsSquare: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Chip
                label="Rounded (Default)"
                rounded={true}
            />

            <Chip
                label="Square Corners"
                rounded={false}
            />

            <Chip
                label="Rounded with Icon"
                rounded={true}
                startIcon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                }
            />

            <Chip
                label="Square with Icon"
                rounded={false}
                startIcon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                }
            />
        </div>
    ),
};

export const ChipsInAGroup = () => (
    <div className="p-4 border border-gray-200 rounded-md">
        <h3 className="text-sm font-medium mb-2">Filter by:</h3>
        <div className="flex flex-wrap gap-2">
            <Chip label="JavaScript" color="primary" variant="soft" clickable />
            <Chip label="React" color="secondary" variant="soft" clickable />
            <Chip label="TypeScript" color="info" variant="soft" clickable />
            <Chip label="CSS" color="success" variant="soft" clickable />
            <Chip label="HTML" color="warning" variant="soft" clickable />
        </div>
    </div>
);
