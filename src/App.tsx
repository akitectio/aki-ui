import { Button, Card, Alert } from './lib/components';
import { AkiUIProvider } from './lib/theme';
import TooltipTest from './test-tooltip';
import ToastTest from './test-toast';
import TestChatbot from './test-chatbot';

function App() {
    const handleOpenStorybook = () => {
        window.open('http://localhost:6006', '_blank');
    };

    return (
        <AkiUIProvider>
            <div className="p-8 flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-4xl font-bold mb-8">Aki UI Component Library</h1>

                <Alert
                    variant="info"
                    showIcon
                    className="mb-6 max-w-md"
                >
                    This project now uses path aliases for cleaner imports.
                </Alert>

                <Card className="max-w-md w-full mb-6">
                    <Card.Header>Component Documentation</Card.Header>
                    <Card.Body>
                        <p className="mb-6">This project uses Storybook for component documentation and development.</p>
                        <Button
                            variant="primary"
                            fullWidth
                            onClick={handleOpenStorybook}
                            className="mb-3"
                        >
                            Open Storybook
                        </Button>
                        <Button
                            variant="secondary"
                            fullWidth
                            onClick={() => window.location.href = '/tooltip-test'}
                            className="mb-3"
                        >
                            Test Tooltip
                        </Button>
                        <Button
                            variant="secondary"
                            fullWidth
                            onClick={() => window.location.href = '/chatbot-test'}
                        >
                            Test Chatbot
                        </Button>
                    </Card.Body>
                    <Card.Footer className="text-sm text-gray-600">
                        <p>You can run Storybook with:</p>
                        <code className="block bg-gray-100 p-2 mt-1 rounded">npm run storybook</code>
                    </Card.Footer>
                </Card>

                <TooltipTest />

                <div style={{ marginTop: '40px', borderTop: '2px solid #e5e7eb', paddingTop: '40px' }}>
                    <ToastTest />
                </div>

                {/* Chatbot is displayed on /chatbot-test route */}
                {window.location.pathname === '/chatbot-test' && <TestChatbot />}
            </div>
        </AkiUIProvider>
    );
}

export default App;
