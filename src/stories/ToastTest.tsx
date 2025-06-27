import { useToastAPI } from '../lib/components/Toast';
import { Button } from '../lib/components';

// Simple test component that uses the toast hook
const ToastStoryTest = () => {
    const toast = useToastAPI();

    const showToast = () => {
        toast.info('This is a test toast message', {
            title: 'Test Toast',
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Toast Test in Story</h2>
            <p>Click the button below to show a toast notification.</p>
            <Button onClick={showToast}>Show Toast</Button>
        </div>
    );
};

export default ToastStoryTest;
