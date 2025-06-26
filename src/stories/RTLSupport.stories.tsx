import type { Meta, StoryObj } from '@storybook/react';
import {
    AkiUIProvider,
    useDirection,
    useColorMode
} from '../lib/theme';
import Button from '../lib/components/Button';
import Card from '../lib/components/Card';
import FormControl from '../lib/components/FormControl';
import React from 'react';

// Define the story component wrapper
const RTLStory = ({
    initialDirection = 'ltr',
    initialColorMode = 'light',
    children,
}: React.PropsWithChildren<{
    initialDirection?: 'ltr' | 'rtl';
    initialColorMode?: 'light' | 'dark';
}>) => {
    return (
        <AkiUIProvider
            initialDirection={initialDirection}
            initialColorMode={initialColorMode}
        >
            {children}
        </AkiUIProvider>
    );
};

// Configure the story
const meta = {
    title: 'Documentation/RTL Support',
    component: RTLStory,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        initialDirection: 'ltr',
        initialColorMode: 'light',
    },
} satisfies Meta<typeof RTLStory>;

export default meta;
type Story = StoryObj<typeof meta>;

// Component to demonstrate RTL support
const RTLDemo = () => {
    const { direction, toggleDirection } = useDirection();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <Card className="mb-6">
                    <Card.Header>
                        <h1 className="text-2xl font-bold">RTL Support Demo</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Current direction: {direction.toUpperCase()}
                        </p>
                    </Card.Header>
                    <Card.Body>
                        <p className="mb-6">
                            This example demonstrates RTL (Right-to-Left) support in @akitectio/aki-ui.
                            The components automatically adapt to the text direction.
                        </p>

                        <div className="mb-6 space-y-4">
                            <div className="flex space-x-4 rtl:space-x-reverse">
                                <Button
                                    onClick={toggleDirection}
                                    variant="primary"
                                >
                                    {direction === 'ltr' ? 'Switch to RTL' : 'Switch to LTR'}
                                </Button>
                                <Button
                                    onClick={toggleColorMode}
                                    variant="outline-secondary"
                                >
                                    {colorMode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                                </Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <Card.Header>Text Direction Example</Card.Header>
                                <Card.Body>
                                    <p>This text follows the current direction.</p>
                                    <p className="mt-4 text-sm text-gray-500">
                                        Notice how elements like buttons and form controls adapt.
                                    </p>
                                </Card.Body>
                                <Card.Footer className="flex justify-between rtl:flex-row-reverse">
                                    <Button variant="outline-secondary">Cancel</Button>
                                    <Button variant="primary">Submit</Button>
                                </Card.Footer>
                            </Card>

                            <Card>
                                <Card.Header>Form Controls</Card.Header>
                                <Card.Body>
                                    <div className="space-y-4">
                                        <FormControl
                                            label="Name"
                                            placeholder="Enter your name"
                                        />

                                        <FormControl
                                            label="Email"
                                            type="email"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="mt-6">
                            <Card>
                                <Card.Header>RTL Text Example</Card.Header>
                                <Card.Body>
                                    <p className="text-right" dir="rtl">
                                        هذا مثال على النص العربي الذي يعرض من اليمين إلى اليسار.
                                        ستلاحظ أن النص يبدأ من اليمين وينتهي على اليسار.
                                    </p>
                                </Card.Body>
                            </Card>
                        </div>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Header>Implementation</Card.Header>
                    <Card.Body>
                        <pre className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
                            {`import { AkiUIProvider, useDirection } from '@akitectio/aki-ui';

// Wrap your app with the provider
<AkiUIProvider initialDirection="rtl">
  <App />
</AkiUIProvider>

// Use the direction hook in components
const MyComponent = () => {
  const { direction, toggleDirection } = useDirection();
  
  return (
    <div>
      <Button onClick={toggleDirection}>
        {direction === 'ltr' ? 'Switch to RTL' : 'Switch to LTR'}
      </Button>
    </div>
  );
};`}
                        </pre>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

// Basic story with LTR as default
export const Default: Story = {
    args: {
        initialDirection: 'ltr',
    },
    render: (args) => (
        <RTLStory {...args}>
            <RTLDemo />
        </RTLStory>
    ),
};

// RTL enabled by default
export const RTLEnabled: Story = {
    args: {
        initialDirection: 'rtl',
    },
    render: (args) => (
        <RTLStory {...args}>
            <RTLDemo />
        </RTLStory>
    ),
};
