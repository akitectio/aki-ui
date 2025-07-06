import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '../lib/components/Dialog';
import Button from '../lib/components/Button';
import { useState } from 'react';

const meta: Meta<typeof Dialog> = {
    title: 'Components/Dialog',
    component: Dialog,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A modal dialog component that overlays the main content and requires user interaction.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        open: {
            control: 'boolean',
            description: 'Whether the dialog is open'
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                </Dialog.Trigger>
                <Dialog.Content>
                    <Dialog.Header>
                        <Dialog.Title>Dialog Title</Dialog.Title>
                        <Dialog.Description>
                            This is a dialog description. It explains what the dialog is about.
                        </Dialog.Description>
                    </Dialog.Header>
                    <div className="py-4">
                        <p className="text-sm text-gray-600">
                            This is the main content of the dialog. You can put any content here.
                        </p>
                    </div>
                    <Dialog.Footer>
                        <Button variant="outline" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={() => setOpen(false)}>
                            Continue
                        </Button>
                    </Dialog.Footer>
                </Dialog.Content>
            </Dialog>
        );
    }
};

export const WithForm: Story = {
    render: () => {
        const [open, setOpen] = useState(false);
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            console.log('Form submitted:', { name, email });
            setOpen(false);
            setName('');
            setEmail('');
        };

        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                    <Button>Add User</Button>
                </Dialog.Trigger>
                <Dialog.Content>
                    <Dialog.Header>
                        <Dialog.Title>Add New User</Dialog.Title>
                        <Dialog.Description>
                            Enter the user's information below.
                        </Dialog.Description>
                    </Dialog.Header>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <Dialog.Footer>
                            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button type="submit">
                                Add User
                            </Button>
                        </Dialog.Footer>
                    </form>
                </Dialog.Content>
            </Dialog>
        );
    }
};

export const Confirmation: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        const handleConfirm = () => {
            console.log('Confirmed!');
            setOpen(false);
        };

        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                    <Button variant="danger">Delete Item</Button>
                </Dialog.Trigger>
                <Dialog.Content>
                    <Dialog.Header>
                        <Dialog.Title>Are you sure?</Dialog.Title>
                        <Dialog.Description>
                            This action cannot be undone. This will permanently delete the item.
                        </Dialog.Description>
                    </Dialog.Header>
                    <Dialog.Footer>
                        <Button variant="outline" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={handleConfirm}>
                            Delete
                        </Button>
                    </Dialog.Footer>
                </Dialog.Content>
            </Dialog>
        );
    }
};

export const LongContent: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                    <Button variant="outline">Open Long Dialog</Button>
                </Dialog.Trigger>
                <Dialog.Content>
                    <Dialog.Header>
                        <Dialog.Title>Terms and Conditions</Dialog.Title>
                        <Dialog.Description>
                            Please read through our terms and conditions.
                        </Dialog.Description>
                    </Dialog.Header>
                    <div className="py-4 max-h-60 overflow-y-auto">
                        <div className="space-y-4 text-sm text-gray-600">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            </p>
                        </div>
                    </div>
                    <Dialog.Footer>
                        <Button variant="outline" onClick={() => setOpen(false)}>
                            Decline
                        </Button>
                        <Button onClick={() => setOpen(false)}>
                            Accept
                        </Button>
                    </Dialog.Footer>
                </Dialog.Content>
            </Dialog>
        );
    }
};
