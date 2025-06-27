import { ToastProvider, useToastAPI, Button } from './lib/components';

const ToastTestComponent = () => {
    const toast = useToastAPI();

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Toast Test Page</h1>

            <div style={{ margin: '20px 0', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
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

                <Button
                    onClick={() => toast.dismissAll()}
                    variant="outline-danger"
                >
                    Dismiss All
                </Button>
            </div>

            <div style={{ margin: '20px 0' }}>
                <h3>Duration Tests</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
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
                            toast.info('This toast will stay until dismissed.', {
                                duration: 0,
                            })
                        }
                    >
                        Persistent Toast
                    </Button>
                </div>
            </div>
        </div>
    );
};

const ToastTest = () => {
    return (
        <ToastProvider position="top-right">
            <ToastTestComponent />
        </ToastProvider>
    );
};

export default ToastTest;
