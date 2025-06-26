import type { Meta, StoryObj } from '@storybook/react';
import { Popover, Button, Card, Badge } from '../lib/components';
import { useState, useRef } from 'react';
import type { PopoverRef } from '../lib/components/Popover';

const meta: Meta<typeof Popover> = {
    title: 'Components/Popover',
    component: Popover,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        placement: {
            control: {
                type: 'select',
                options: [
                    'top', 'top-start', 'top-end',
                    'bottom', 'bottom-start', 'bottom-end',
                    'left', 'left-start', 'left-end',
                    'right', 'right-start', 'right-end',
                ],
            },
            description: 'The placement of the popover',
        },
        trigger: {
            control: {
                type: 'select',
                options: ['click', 'hover', 'focus', 'manual'],
            },
            description: 'How the popover is triggered',
        },
        offset: {
            control: { type: 'number', min: 0, max: 20 },
            description: 'Offset from the trigger element in pixels',
        },
        hasArrow: {
            control: 'boolean',
            description: 'Whether to show an arrow pointing to the trigger element',
        },
        closeOnOutsideClick: {
            control: 'boolean',
            description: 'Whether to close when clicking outside',
        },
        closeOnEsc: {
            control: 'boolean',
            description: 'Whether to close when pressing escape key',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
    args: {
        content: 'This is a simple popover content',
        placement: 'bottom',
        trigger: 'click',
        offset: 8,
        hasArrow: true,
    },
    render: (args) => (
        <Popover {...args}>
            <Button>Click me</Button>
        </Popover>
    ),
};

export const Placements = () => {
    return (
        <div className="grid grid-cols-3 gap-8">
            <Popover
                content="This popover is on top"
                placement="top"
                hasArrow
            >
                <Button>Top</Button>
            </Popover>

            <Popover
                content="This popover is on top-start"
                placement="top-start"
                hasArrow
            >
                <Button>Top Start</Button>
            </Popover>

            <Popover
                content="This popover is on top-end"
                placement="top-end"
                hasArrow
            >
                <Button>Top End</Button>
            </Popover>

            <Popover
                content="This popover is on bottom"
                placement="bottom"
                hasArrow
            >
                <Button>Bottom</Button>
            </Popover>

            <Popover
                content="This popover is on bottom-start"
                placement="bottom-start"
                hasArrow
            >
                <Button>Bottom Start</Button>
            </Popover>

            <Popover
                content="This popover is on bottom-end"
                placement="bottom-end"
                hasArrow
            >
                <Button>Bottom End</Button>
            </Popover>

            <Popover
                content="This popover is on left"
                placement="left"
                hasArrow
            >
                <Button>Left</Button>
            </Popover>

            <Popover
                content="This popover is on right"
                placement="right"
                hasArrow
            >
                <Button>Right</Button>
            </Popover>
        </div>
    );
};

export const Triggers = () => {
    return (
        <div className="flex flex-col gap-4">
            <Popover
                content="This popover is triggered by click"
                trigger="click"
                hasArrow
                placement="right"
            >
                <Button>Click Trigger</Button>
            </Popover>

            <Popover
                content="This popover is triggered by hover"
                trigger="hover"
                hasArrow
                placement="right"
                showDelay={200}
                hideDelay={200}
            >
                <Button>Hover Trigger</Button>
            </Popover>

            <Popover
                content="This popover is triggered by focus"
                trigger="focus"
                hasArrow
                placement="right"
            >
                <Button>Focus Trigger</Button>
            </Popover>
        </div>
    );
};

export const WithRichContent = () => {
    return (
        <Popover
            content={
                <div className="w-64">
                    <h3 className="text-lg font-medium mb-2">Profile Details</h3>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            JD
                        </div>
                        <div>
                            <div className="font-medium">John Doe</div>
                            <div className="text-sm text-gray-600">Product Designer</div>
                        </div>
                    </div>
                    <div className="mb-3 text-sm">
                        John has been with the company for 3 years and specializes in UI/UX design.
                    </div>
                    <div className="flex gap-2">
                        <Badge variant="primary">Design</Badge>
                        <Badge variant="success">UX</Badge>
                        <Badge variant="info">Research</Badge>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between">
                        <Button size="sm">View Profile</Button>
                        <Button size="sm" variant="outline-primary">Message</Button>
                    </div>
                </div>
            }
            placement="right"
            offset={12}
            hasArrow
        >
            <Button>Show Profile</Button>
        </Popover>
    );
};

export const ControlledPopover = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="mb-4 flex gap-2">
                <Button onClick={() => setIsOpen(true)}>
                    Open Popover
                </Button>
                <Button variant="outline-primary" onClick={() => setIsOpen(false)}>
                    Close Popover
                </Button>
            </div>

            <Popover
                content="This is a controlled popover"
                isOpen={isOpen}
                onOpenChange={setIsOpen}
                trigger="manual"
                hasArrow
            >
                <Button variant="secondary">Controlled Trigger</Button>
            </Popover>
        </div>
    );
};

export const WithRef = () => {
    const popoverRef = useRef<PopoverRef>(null);

    return (
        <div>
            <div className="mb-4 flex gap-2">
                <Button onClick={() => popoverRef.current?.open()}>
                    Open
                </Button>
                <Button onClick={() => popoverRef.current?.close()}>
                    Close
                </Button>
                <Button onClick={() => popoverRef.current?.toggle()}>
                    Toggle
                </Button>
            </div>

            <Popover
                ref={popoverRef}
                content="This popover is controlled via ref"
                trigger="manual"
                hasArrow
            >
                <Button variant="secondary">Ref-controlled Trigger</Button>
            </Popover>
        </div>
    );
};

export const WithInteractiveContent = () => {
    return (
        <Popover
            content={
                <Card className="w-64 p-0 overflow-hidden border-none">
                    <div className="p-3 border-b border-gray-200">
                        <h3 className="font-medium">Color Theme</h3>
                    </div>
                    <div className="p-3">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <input type="radio" id="light" name="theme" defaultChecked />
                                <label htmlFor="light">Light</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" id="dark" name="theme" />
                                <label htmlFor="dark">Dark</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" id="system" name="theme" />
                                <label htmlFor="system">System</label>
                            </div>
                            <div className="mt-3">
                                <Button size="sm" fullWidth>Apply</Button>
                            </div>
                        </div>
                    </div>
                </Card>
            }
            placement="bottom-end"
            hasArrow
        >
            <Button variant="outline-primary">Theme Settings</Button>
        </Popover>
    );
};

export const FormInPopover = () => {
    return (
        <Popover
            content={
                <div className="w-72">
                    <h3 className="text-lg font-medium mb-3">Quick Message</h3>
                    <form className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                rows={3}
                                placeholder="Type your message here..."
                            />
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline-primary" type="button">
                                Cancel
                            </Button>
                            <Button size="sm" type="submit">
                                Send
                            </Button>
                        </div>
                    </form>
                </div>
            }
            placement="bottom"
            offset={12}
            closeOnOutsideClick={false}
        >
            <Button>Contact Us</Button>
        </Popover>
    );
};
