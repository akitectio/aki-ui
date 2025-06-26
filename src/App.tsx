import { Button, Card, Alert } from './lib/components';
import { AkiUIProvider } from './lib/theme';

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
                        >
                            Open Storybook
                        </Button>
                    </Card.Body>
                    <Card.Footer className="text-sm text-gray-600">
                        <p>You can run Storybook with:</p>
                        <code className="block bg-gray-100 p-2 mt-1 rounded">npm run storybook</code>
                    </Card.Footer>
                </Card>
            </div>
        </AkiUIProvider>
    );
}

export default App;
