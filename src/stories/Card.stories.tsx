import type { Meta, StoryObj } from '@storybook/react';
import { Card, Button } from '../lib/components';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        bordered: {
            control: 'boolean',
        },
        elevated: {
            control: 'boolean',
        },
        hoverable: {
            control: 'boolean',
        },
        fullWidth: {
            control: 'boolean',
        },
        borderRadius: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg', 'xl'],
        },
        align: {
            control: 'select',
            options: ['left', 'center', 'right'],
        },
        bgColor: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
    args: {
        children: (
            <>
                <Card.Body>
                    <h2 className="text-xl font-semibold mb-2">Basic Card</h2>
                    <p>This is a basic card with just a body.</p>
                </Card.Body>
            </>
        ),
        style: { width: '300px' },
    },
};

export const WithHeaderAndFooter: Story = {
    args: {
        children: (
            <>
                <Card.Header>
                    <h2 className="text-xl font-semibold">Card Title</h2>
                </Card.Header>
                <Card.Body>
                    <p>This card has a header and footer. The header typically contains a title, while the footer often contains actions.</p>
                </Card.Body>
                <Card.Footer>
                    <div className="flex justify-end space-x-2">
                        <Button variant="outline-primary" size="sm">Cancel</Button>
                        <Button variant="primary" size="sm">Save</Button>
                    </div>
                </Card.Footer>
            </>
        ),
        style: { width: '350px' },
    },
};
