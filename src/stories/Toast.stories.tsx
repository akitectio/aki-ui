import type { Meta, StoryObj } from '@storybook/react';
import Button from '../lib/components/Button';
import { useToastAPI, ToastProvider } from '../lib/components/Toast';

// Component wrapper to use hooks properly
const BasicToastExample = () => {
    const toast = useToastAPI();

    return (
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
                    variant="secondary"
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
    );
};

const AutoCloseToastExample = () => {
    const toast = useToastAPI();

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-4">Auto Close Timing</h2>
            <div className="flex flex-wrap gap-4">
                <Button
                    onClick={() =>
                        toast.info('This toast will disappear in 2 seconds.', {
                            duration: 2000,
                        })
                    }
                >
                    2 Second Toast
                </Button>
                <Button
                    onClick={() =>
                        toast.info('This toast will stay for 10 seconds.', {
                            duration: 10000,
                        })
                    }
                >
                    10 Second Toast
                </Button>
                <Button
                    onClick={() =>
                        toast.info('This toast will stay until dismissed.', {
                            duration: 0,
                        })
                    }
                >
                    Persistent Toast
                </Button>
                <Button
                    onClick={() => toast.dismissAll()}
                    variant="danger"
                >
                    Dismiss All
                </Button>
            </div>
        </div>
    );
};

const meta: Meta = {
    title: 'Components/Toast',
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
    render: () => (
        <ToastProvider>
            <BasicToastExample />
        </ToastProvider>
    )
};

export const AutoClose: Story = {
    render: () => (
        <ToastProvider>
            <AutoCloseToastExample />
        </ToastProvider>
    )
};
