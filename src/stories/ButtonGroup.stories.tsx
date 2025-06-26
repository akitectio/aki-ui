import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup, Button } from '../lib/components';

const meta: Meta<typeof ButtonGroup> = {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        vertical: {
            control: 'boolean',
            description: 'Whether the buttons should be stacked vertically',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'The size of all buttons in the group',
        },
        equalWidth: {
            control: 'boolean',
            description: 'Whether to display buttons with equal width',
        },
        ariaLabel: {
            control: 'text',
            description: 'Aria label for the button group',
        },
    },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Basic: Story = {
    args: {
        children: (
            <>
                <Button variant="primary">Left</Button>
                <Button variant="primary">Middle</Button>
                <Button variant="primary">Right</Button>
            </>
        ),
    },
};

export const Vertical: Story = {
    args: {
        vertical: true,
        children: (
            <>
                <Button variant="primary">Top</Button>
                <Button variant="primary">Middle</Button>
                <Button variant="primary">Bottom</Button>
            </>
        ),
    },
};

export const Mixed: Story = {
    args: {
        children: (
            <>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="danger">Danger</Button>
            </>
        ),
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        children: (
            <>
                <Button variant="primary">Left</Button>
                <Button variant="primary">Middle</Button>
                <Button variant="primary">Right</Button>
            </>
        ),
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        children: (
            <>
                <Button variant="primary">Left</Button>
                <Button variant="primary">Middle</Button>
                <Button variant="primary">Right</Button>
            </>
        ),
    },
};

export const EqualWidth: Story = {
    args: {
        equalWidth: true,
        children: (
            <>
                <Button variant="primary">Short</Button>
                <Button variant="primary">A Longer Button</Button>
                <Button variant="primary">Middle</Button>
            </>
        ),
    },
};
