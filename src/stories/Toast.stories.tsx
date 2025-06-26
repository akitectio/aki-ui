import type { Meta, StoryObj } from '@storybook/react';
import Button from '../lib/components/Button';
import { ToastContainer, ToastProvider, toast } from '../lib/components/Toast';

const meta: Meta = {
    title: 'Components/Toast',
    component: ToastContainer,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <ToastProvider>
                <Story />
            </ToastProvider>
        ),
    ],
    argTypes: {
        position: {
            control: {
                type: 'select',
                options: [
                    'top',
                    'top-right',
                    'top-left',
                    'bottom',
                    'bottom-right',
                    'bottom-left',
                ],
            },
        },
        gap: {
            control: {
                type: 'select',
                options: ['sm', 'md', 'lg'],
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof ToastContainer>;

// Basic toast example
export const Basic: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-4">Toast Notifications</h2>
            <div className="flex flex-wrap gap-4">
                <Button
                    onClick={() =>
                        toast.show({
                            title: 'Default Toast',
                            message: 'This is a default toast notification.'
                        })
                    }
                >
                    Show Default Toast
                </Button>

                <Button
                    onClick={() =>
                        toast.info('This is an info toast notification.', {
                            title: 'Information',
                        })
                    }
                    variant="info"
                >
                    Show Info Toast
                </Button>

                <Button
                    onClick={() =>
                        toast.success('Your changes have been saved successfully.', {
                            title: 'Success',
                        })
                    }
                    variant="success"
                >
                    Show Success Toast
                </Button>

                <Button
                    onClick={() =>
                        toast.warning('This action might cause issues.', {
                            title: 'Warning',
                        })
                    }
                    variant="warning"
                >
                    Show Warning Toast
                </Button>

                <Button
                    onClick={() =>
                        toast.error('An error occurred while processing your request.', {
                            title: 'Error',
                        })
                    }
                    variant="danger"
                >
                    Show Error Toast
                </Button>
            </div>
        </div>
    ),
};

// Toast with custom duration
export const CustomDuration: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-4">Custom Duration Toasts</h2>
            <div className="flex flex-wrap gap-4">
                <Button
                    onClick={() =>
                        toast.info('This toast will disappear in 2 seconds.', {
                            duration: 2000,
                            title: 'Short Duration',
                        })
                    }
                    variant="info"
                >
                    2 Second Toast
                </Button>

                <Button
                    onClick={() =>
                        toast.info('This toast will stay for 10 seconds.', {
                            duration: 10000,
                            title: 'Long Duration',
                        })
                    }
                    variant="info"
                >
                    10 Second Toast
                </Button>

                <Button
                    onClick={() =>
                        toast.info('This toast will stay until dismissed.', {
                            duration: 0,
                            title: 'Persistent Toast',
                        })
                    }
                    variant="info"
                >
                    Persistent Toast
                </Button>
            </div>
        </div>
    ),
};

// Toast positioning
export const Positioning: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-4">Toast Positions</h2>
            <div className="flex flex-wrap gap-4">
                <Button
                    onClick={() => {
                        toast.dismissAll();
                        const provider = document.querySelector('[aria-live="polite"]');
                        if (provider) {
                            provider.className = provider.className.replace(/top-\w+|bottom-\w+|left-\w+|right-\w+|-translate-x-1\/2/g, '');
                            provider.className += ' top-0 left-1/2 transform -translate-x-1/2';
                        }
                        toast.info('Toast at the top center position', {
                            title: 'Top Center',
                        });
                    }}
                >
                    Top Center
                </Button>

                <Button
                    onClick={() => {
                        toast.dismissAll();
                        const provider = document.querySelector('[aria-live="polite"]');
                        if (provider) {
                            provider.className = provider.className.replace(/top-\w+|bottom-\w+|left-\w+|right-\w+|-translate-x-1\/2/g, '');
                            provider.className += ' top-0 right-0';
                        }
                        toast.info('Toast at the top right position', {
                            title: 'Top Right',
                        });
                    }}
                >
                    Top Right
                </Button>

                <Button
                    onClick={() => {
                        toast.dismissAll();
                        const provider = document.querySelector('[aria-live="polite"]');
                        if (provider) {
                            provider.className = provider.className.replace(/top-\w+|bottom-\w+|left-\w+|right-\w+|-translate-x-1\/2/g, '');
                            provider.className += ' top-0 left-0';
                        }
                        toast.info('Toast at the top left position', {
                            title: 'Top Left',
                        });
                    }}
                >
                    Top Left
                </Button>

                <Button
                    onClick={() => {
                        toast.dismissAll();
                        const provider = document.querySelector('[aria-live="polite"]');
                        if (provider) {
                            provider.className = provider.className.replace(/top-\w+|bottom-\w+|left-\w+|right-\w+|-translate-x-1\/2/g, '');
                            provider.className += ' bottom-0 left-1/2 transform -translate-x-1/2';
                        }
                        toast.info('Toast at the bottom center position', {
                            title: 'Bottom Center',
                        });
                    }}
                >
                    Bottom Center
                </Button>

                <Button
                    onClick={() => {
                        toast.dismissAll();
                        const provider = document.querySelector('[aria-live="polite"]');
                        if (provider) {
                            provider.className = provider.className.replace(/top-\w+|bottom-\w+|left-\w+|right-\w+|-translate-x-1\/2/g, '');
                            provider.className += ' bottom-0 right-0';
                        }
                        toast.info('Toast at the bottom right position', {
                            title: 'Bottom Right',
                        });
                    }}
                >
                    Bottom Right
                </Button>

                <Button
                    onClick={() => {
                        toast.dismissAll();
                        const provider = document.querySelector('[aria-live="polite"]');
                        if (provider) {
                            provider.className = provider.className.replace(/top-\w+|bottom-\w+|left-\w+|right-\w+|-translate-x-1\/2/g, '');
                            provider.className += ' bottom-0 left-0';
                        }
                        toast.info('Toast at the bottom left position', {
                            title: 'Bottom Left',
                        });
                    }}
                >
                    Bottom Left
                </Button>
            </div>
        </div>
    ),
};

// Toast with custom content
export const CustomContent: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-4">Custom Content Toasts</h2>
            <div className="flex flex-wrap gap-4">
                <Button
                    onClick={() =>
                        toast.show({
                            title: 'Custom Content',
                            message: (
                                <div className="flex flex-col gap-2">
                                    <p>This toast has custom content with a button.</p>
                                    <Button
                                        size="sm"
                                        variant="success"
                                        onClick={(e: React.MouseEvent) => {
                                            e.stopPropagation();
                                            toast.success('Button in toast clicked!');
                                        }}
                                    >
                                        Click Me
                                    </Button>
                                </div>
                            ),
                        })
                    }
                >
                    Toast with Button
                </Button>

                <Button
                    onClick={() =>
                        toast.show({
                            title: 'Profile Updated',
                            message: (
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                        JD
                                    </div>
                                    <div>Your profile has been updated successfully.</div>
                                </div>
                            ),
                        })
                    }
                >
                    Toast with Avatar
                </Button>

                <Button
                    onClick={() => {
                        const id = toast.info('This toast will update in 2 seconds...');
                        setTimeout(() => {
                            toast.update(id, {
                                title: 'Updated Toast',
                                message: 'This toast has been updated!',
                                variant: 'success',
                            });
                        }, 2000);
                    }}
                >
                    Updating Toast
                </Button>
            </div>
        </div>
    ),
};

// Toast with progress control
export const ProgressControl: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-4">Progress Control</h2>
            <div className="flex flex-wrap gap-4">
                <Button
                    onClick={() =>
                        toast.info('This toast has no progress bar.', {
                            title: 'No Progress',
                            showProgress: false,
                        })
                    }
                    variant="info"
                >
                    No Progress Bar
                </Button>

                <Button
                    onClick={() =>
                        toast.info('This toast pauses on hover.', {
                            title: 'Pause on Hover',
                            pauseOnHover: true,
                            duration: 5000,
                        })
                    }
                    variant="info"
                >
                    Pause on Hover
                </Button>

                <Button
                    onClick={() =>
                        toast.info('This toast does not pause on hover.', {
                            title: 'No Pause',
                            pauseOnHover: false,
                            duration: 5000,
                        })
                    }
                    variant="info"
                >
                    No Pause on Hover
                </Button>
            </div>
        </div>
    ),
};

// API Usage Example
export const APIUsage: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-4">Toast API Usage</h2>
            <div className="p-4 border rounded-md bg-gray-50 mb-4">
                <pre className="text-sm">
                    {`// Basic usage
toast.show({ 
  title: 'Title',
  message: 'Message' 
});

// Variants
toast.info('Info message');
toast.success('Success message');
toast.warning('Warning message');
toast.error('Error message');

// With title
toast.info('Message', { title: 'Title' });

// Custom duration (in ms, 0 for no auto-close)
toast.info('Message', { duration: 3000 });

// Update a toast
const id = toast.info('Loading...');
// Later:
toast.update(id, { 
  message: 'Completed!',
  variant: 'success'
});

// Dismiss toast
toast.dismiss(id);

// Dismiss all toasts
toast.dismissAll();`}
                </pre>
            </div>
            <Button
                onClick={() =>
                    toast.success('Try out the API examples from the code above!')
                }
                variant="success"
            >
                Run API Example
            </Button>
        </div>
    ),
};
