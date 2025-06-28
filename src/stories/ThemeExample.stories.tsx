import { AkiUIProvider, useTheme, useColorMode } from '../lib/theme';
import type { Theme } from '../lib/theme/types';
import Button from '../lib/components/Button';
import Card from '../lib/components/Card';

export default {
    title: 'Documentation/Theming/Example',
    tags: ['autodocs'],
};

// Display current theme values
const ThemeDisplay = () => {
    const theme = useTheme();
    const { colorMode } = useColorMode();

    return (
        <div className="p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
            <h3 className="text-xl font-bold mb-4">Current Theme Settings</h3>
            <div>
                <p><strong>Color Mode:</strong> {colorMode}</p>
                <p><strong>Primary Color:</strong> {theme.colors.primary}</p>
                <p><strong>Secondary Color:</strong> {theme.colors.secondary}</p>
            </div>
        </div>
    );
};

// Simple example of using the theme system
export const SimpleExample = () => {
    const { toggleColorMode } = useColorMode();

    const theme: Partial<Theme> = {
        colors: {
            primary: 'blue-600',
            secondary: 'gray-600',
            accent: 'amber-500',
            success: 'green-500',
            warning: 'yellow-500',
            error: 'red-500',
            info: 'sky-500',
        }
    };

    return (
        <AkiUIProvider theme={theme} initialColorMode="light">
            <div className="p-8 max-w-3xl mx-auto">
                <Card>
                    <Card.Header>
                        <h2 className="text-2xl font-bold">@akitectio/aki-ui Theming</h2>
                    </Card.Header>
                    <Card.Body>
                        <p className="mb-4">
                            This example demonstrates how to use the theme system in @akitectio/aki-ui.
                        </p>

                        <Button
                            onClick={toggleColorMode}
                            variant="outline-primary"
                            className="mb-6"
                        >
                            Toggle Dark/Light Mode
                        </Button>

                        <ThemeDisplay />

                        <div className="mt-6">
                            <h3 className="text-lg font-bold mb-3">Button Variants</h3>
                            <div className="flex flex-wrap gap-2">
                                <Button variant="primary">Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="outline-primary">Outline</Button>
                                <Button variant="light">Light</Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="mt-6">
                    <Card.Header>Implementation</Card.Header>
                    <Card.Body>
                        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto">
                            {`// Import the theme provider
import { AkiUIProvider } from '@akitectio/aki-ui';

// Define your theme
const theme = {
  colors: {
    primary: 'blue-600',
    secondary: 'gray-600',
    // ... other colors
  }
};

// Wrap your app with the provider
<AkiUIProvider theme={theme} initialColorMode="light">
  <App />
</AkiUIProvider>`}
                        </pre>
                    </Card.Body>
                </Card>
            </div>
        </AkiUIProvider>
    );
};
