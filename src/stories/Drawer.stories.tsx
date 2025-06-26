import type { Meta, StoryObj } from '@storybook/react';
import { Drawer, Button } from '../lib/components';
import { useState, useRef } from 'react';
import type { DrawerRef } from '../lib/components/Drawer';

const meta: Meta<typeof Drawer> = {
    title: 'Components/Drawer',
    component: Drawer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        isOpen: {
            control: 'boolean',
            description: 'Controls whether the drawer is open',
        },
        placement: {
            control: { type: 'select', options: ['left', 'right', 'top', 'bottom'] },
            description: 'The placement of the drawer',
        },
        size: {
            control: { type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'] },
            description: 'The size of the drawer',
        },
        closeButton: {
            control: 'boolean',
            description: 'Whether to show a close button',
        },
        closeOnOverlayClick: {
            control: 'boolean',
            description: 'Whether to close when clicking outside',
        },
        closeOnEsc: {
            control: 'boolean',
            description: 'Whether to close when pressing escape key',
        },
        lockScroll: {
            control: 'boolean',
            description: 'Whether to prevent scrolling of the background',
        },
        hasOverlay: {
            control: 'boolean',
            description: 'Whether to show an overlay behind the drawer',
        },
        zIndex: {
            control: 'number',
            description: 'The z-index of the drawer',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

// Basic story is not very useful for Drawer since it needs state management
export const Basic: Story = {
    args: {
        isOpen: false,
        title: 'Drawer Title',
        children: 'Drawer Content',
        placement: 'right',
        size: 'md',
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div>
                <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
                <Drawer
                    {...args}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                >
                    <p>This is the drawer content.</p>
                    <p className="mt-4">You can put any content here.</p>
                </Drawer>
            </div>
        );
    },
};

export const Placements = () => {
    const [placement, setPlacement] = useState<'left' | 'right' | 'top' | 'bottom'>('right');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
                <Button onClick={() => { setPlacement('left'); setIsOpen(true); }}>
                    Left Drawer
                </Button>
                <Button onClick={() => { setPlacement('right'); setIsOpen(true); }}>
                    Right Drawer
                </Button>
                <Button onClick={() => { setPlacement('top'); setIsOpen(true); }}>
                    Top Drawer
                </Button>
                <Button onClick={() => { setPlacement('bottom'); setIsOpen(true); }}>
                    Bottom Drawer
                </Button>
            </div>

            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                placement={placement}
                title={`${placement.charAt(0).toUpperCase() + placement.slice(1)} Drawer`}
            >
                <p>This drawer opens from the {placement}.</p>
                <p className="mt-4">You can customize the placement based on your design needs.</p>
            </Drawer>
        </div>
    );
};

export const Sizes = () => {
    const [size, setSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'>('md');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
                <Button onClick={() => { setSize('xs'); setIsOpen(true); }}>
                    Extra Small
                </Button>
                <Button onClick={() => { setSize('sm'); setIsOpen(true); }}>
                    Small
                </Button>
                <Button onClick={() => { setSize('md'); setIsOpen(true); }}>
                    Medium
                </Button>
                <Button onClick={() => { setSize('lg'); setIsOpen(true); }}>
                    Large
                </Button>
                <Button onClick={() => { setSize('xl'); setIsOpen(true); }}>
                    Extra Large
                </Button>
                <Button onClick={() => { setSize('full'); setIsOpen(true); }}>
                    Full
                </Button>
            </div>

            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                size={size}
                title={`${size.toUpperCase()} Drawer`}
            >
                <p>This is a {size} sized drawer.</p>
                <p className="mt-4">Choose the appropriate size for your content needs.</p>
            </Drawer>
        </div>
    );
};

export const WithFooter = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>
                Open Drawer with Footer
            </Button>

            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Drawer with Footer"
                footer={
                    <div className="flex justify-end gap-2">
                        <Button variant="outline-primary" onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={() => setIsOpen(false)}>
                            Save
                        </Button>
                    </div>
                }
            >
                <p>This drawer has a footer with action buttons.</p>
                <p className="mt-4">Footers are useful for forms and dialogs that require actions.</p>
            </Drawer>
        </div>
    );
};

export const NoOverlay = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>
                Open Drawer without Overlay
            </Button>

            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="No Overlay"
                hasOverlay={false}
            >
                <p>This drawer doesn't have an overlay behind it.</p>
                <p className="mt-4">This can be useful for persistent sidebars or less intrusive drawers.</p>
            </Drawer>
        </div>
    );
};

export const WithRef = () => {
    const drawerRef = useRef<DrawerRef>(null);

    return (
        <div className="flex gap-2">
            <Button onClick={() => drawerRef.current?.open()}>
                Open
            </Button>
            <Button onClick={() => drawerRef.current?.close()}>
                Close
            </Button>
            <Button onClick={() => drawerRef.current?.toggle()}>
                Toggle
            </Button>

            <Drawer
                ref={drawerRef}
                title="Drawer with Ref"
            >
                <p>This drawer is controlled using the ref API.</p>
                <p className="mt-4">Using refs can give you more programmatic control over the drawer.</p>
            </Drawer>
        </div>
    );
};

export const AutoClose = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>
                Open Auto-closing Drawer
            </Button>

            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Auto-close Drawer"
                autoClose={3000}
            >
                <p>This drawer will automatically close after 3 seconds.</p>
                <p className="mt-4">Useful for notifications or temporary messages.</p>
            </Drawer>
        </div>
    );
};

export const ScrollingContent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>
                Open Drawer with Scrolling Content
            </Button>

            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Scrolling Content"
                size="md"
            >
                <div>
                    <p>This drawer contains a lot of content that will scroll.</p>
                    {Array.from({ length: 20 }).map((_, i) => (
                        <p key={i} className="my-4">
                            Scrollable content paragraph {i + 1}. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nullam in dui mauris. Vivamus
                            hendrerit arcu sed erat molestie vehicula.
                        </p>
                    ))}
                </div>
            </Drawer>
        </div>
    );
};

export const FormInDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>
                Open Form Drawer
            </Button>

            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Contact Form"
                footer={
                    <div className="flex justify-end gap-2">
                        <Button variant="outline-primary" onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" form="contact-form">
                            Submit
                        </Button>
                    </div>
                }
            >
                <form id="contact-form" className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            rows={4}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                </form>
            </Drawer>
        </div>
    );
};
