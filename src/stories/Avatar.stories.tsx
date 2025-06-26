import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../lib/components';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['xs', 'sm', 'md', 'lg', 'xl'],
            },
            description: 'Size of the avatar',
        },
        shape: {
            control: {
                type: 'select',
                options: ['circle', 'square', 'rounded'],
            },
            description: 'Shape of the avatar',
        },
        status: {
            control: {
                type: 'select',
                options: [null, 'online', 'away', 'offline', 'busy'],
            },
            description: 'Online status indicator',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
    args: {
        src: 'https://i.pravatar.cc/300',
        alt: 'User avatar',
        size: 'md',
    },
};

export const WithFallback: Story = {
    args: {
        fallback: 'John Doe',
        size: 'md',
    },
};

export const WithStatus: Story = {
    args: {
        src: 'https://i.pravatar.cc/300',
        alt: 'User avatar',
        size: 'md',
        status: 'online',
    },
};

export const Sizes: Story = {
    render: (args) => (
        <div className="flex items-center gap-4">
            <Avatar {...args} size="xs" fallback="XS" />
            <Avatar {...args} size="sm" fallback="SM" />
            <Avatar {...args} size="md" fallback="MD" />
            <Avatar {...args} size="lg" fallback="LG" />
            <Avatar {...args} size="xl" fallback="XL" />
        </div>
    ),
};

export const Shapes: Story = {
    render: (args) => (
        <div className="flex items-center gap-4">
            <Avatar {...args} shape="circle" src="https://i.pravatar.cc/300?img=1" alt="Circle avatar" />
            <Avatar {...args} shape="square" src="https://i.pravatar.cc/300?img=2" alt="Square avatar" />
            <Avatar {...args} shape="rounded" src="https://i.pravatar.cc/300?img=3" alt="Rounded avatar" />
        </div>
    ),
};
