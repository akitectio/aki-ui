import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '../lib/components/Accordion/Accordion';

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        allowMultiple: {
            control: 'boolean',
            description: 'Allow multiple items to be expanded at once',
        },
        flush: {
            control: 'boolean',
            description: 'Flush style (without borders)',
        },
        alwaysOpen: {
            control: 'boolean',
            description: 'Always keep at least one item expanded',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
    args: {
        children: (
            <>
                <Accordion.Item id="item1">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        <p>This is the content for the first accordion item. It can contain any elements.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item id="item2">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        <p>This is the content for the second accordion item. You can put any content here.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item id="item3">
                    <Accordion.Header>Accordion Item #3</Accordion.Header>
                    <Accordion.Body>
                        <p>This is the content for the third accordion item. Add whatever you need here.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </>
        ),
    },
};

export const AllowMultiple: Story = {
    args: {
        allowMultiple: true,
        children: (
            <>
                <Accordion.Item id="item1">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        <p>Multiple items can be expanded at once.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item id="item2">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        <p>Try clicking on different headers to see multiple items expanded.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </>
        ),
    },
};

export const Flush: Story = {
    args: {
        flush: true,
        children: (
            <>
                <Accordion.Item id="item1">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        <p>This accordion has flush styling (without borders).</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item id="item2">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        <p>Notice the difference in appearance.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </>
        ),
    },
};

export const DefaultExpanded: Story = {
    args: {
        defaultExpandedItems: ['item2'],
        children: (
            <>
                <Accordion.Item id="item1">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        <p>This item is initially collapsed.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item id="item2">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        <p>This item is initially expanded by setting defaultExpandedItems.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </>
        ),
    },
};
