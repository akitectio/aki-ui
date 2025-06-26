import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
    AkiUIProvider,
    useTheme,
    useColorMode
} from '../lib/theme';
import type { Theme } from '../lib/theme/types';
import Button from '../lib/components/Button';
import Card from '../lib/components/Card';
import React from 'react';

// Define the story component wrapper
const ThemeStory = ({
    theme,
    initialColorMode = 'light',
    children,
    onThemeChange
}: React.PropsWithChildren<{
    theme?: Partial<Theme>;
    initialColorMode?: 'light' | 'dark';
    onThemeChange?: (theme: Partial<Theme>) => void;
}>) => {
    return (
        <AkiUIProvider theme={theme} initialColorMode={initialColorMode}>
            {children}
        </AkiUIProvider>
    );
};

// Configure the story
const meta = {
    title: 'Documentation/Theming',
    component: ThemeStory,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        initialColorMode: 'light',
    },
} satisfies Meta<typeof ThemeStory>;

export default meta;
type Story = StoryObj<typeof meta>;

// Component to display current theme values
const ThemeDisplay = () => {
    const theme = useTheme();
    const { colorMode } = useColorMode();

    // Function to get inline style for color display instead of dynamic Tailwind classes
    const getColorStyle = (colorValue: string) => {
        // Parse Tailwind-like color values (e.g., 'blue-600')
        const [color, shade] = colorValue.split('-');

        // Map of basic colors to their hex values (simplified)
        const colorMap: Record<string, Record<string, string>> = {
            blue: {
                '600': '#2563eb',
                '700': '#1d4ed8'
            },
            red: {
                '500': '#ef4444',
                '600': '#dc2626'
            },
            green: {
                '500': '#22c55e',
                '600': '#16a34a'
            },
            yellow: {
                '500': '#eab308',
                '600': '#ca8a04'
            },
            amber: {
                '500': '#f59e0b',
                '600': '#d97706'
            },
            emerald: {
                '600': '#059669',
                '700': '#047857'
            },
            purple: {
                '600': '#9333ea',
                '700': '#7e22ce'
            },
            gray: {
                '500': '#6b7280',
                '600': '#4b5563',
                '700': '#374151',
                '800': '#1f2937'
            },
            sky: {
                '500': '#0ea5e9',
                '600': '#0284c7'
            }
        };

        // Try to get the hex value from our map
        try {
            if (color && shade && colorMap[color]?.[shade]) {
                return { backgroundColor: colorMap[color][shade] };
            }
        } catch (e) {
            // Fallback if we can't find the color
        }

        // Fallback - just use the value directly if it's a valid CSS color
        return { backgroundColor: colorValue };
    };

    return (
        <div className="p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded">
            <h2 className="text-xl font-bold mb-4">Current Theme Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Color Mode</h3>
                    <code className="block p-2 bg-gray-100 dark:bg-gray-700 rounded">
                        {colorMode}
                    </code>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Colors</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {Object.entries(theme.colors).map(([key, value]) => (
                            <div key={key} className="flex items-center">
                                <div
                                    className="w-6 h-6 mr-2 rounded"
                                    style={getColorStyle(value)}
                                    title={value}
                                ></div>
                                <span>{key}: {value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Basic example
export const Basic: Story = {
    args: {
        theme: {
            colors: {
                primary: 'blue-600',
                secondary: 'gray-500',
                accent: 'amber-500',
                success: 'green-500',
                warning: 'yellow-500',
                error: 'red-500',
                info: 'sky-500',
            }
        },
    },
    render: (args) => (
        <ThemeStory {...args}>
            <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <Card className="mb-6">
                        <Card.Header>
                            <h1 className="text-2xl font-bold">@akitectio/aki-ui Theming</h1>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-6">
                                This example demonstrates the theming capabilities of @akitectio/aki-ui.
                                The library provides a powerful theming system with support for light and dark modes.
                            </p>

                            <ThemeDisplay />

                            <div className="mt-6 space-y-4">
                                <h2 className="text-xl font-bold">Component Examples</h2>
                                <div className="space-y-2">
                                    <div className="flex flex-wrap gap-2">
                                        <Button variant="primary">Primary</Button>
                                        <Button variant="secondary">Secondary</Button>
                                        <Button variant="outline-primary">Outline</Button>
                                        <Button variant="light">Light</Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>Implementation</Card.Header>
                        <Card.Body>
                            <pre className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
                                {`import { AkiUIProvider } from '@akitectio/aki-ui';

// Define your theme
const theme = {
  colors: {
    primary: 'blue-600',
    secondary: 'gray-500',
    accent: 'amber-500',
    success: 'green-500',
    warning: 'yellow-500',
    error: 'red-500',
    info: 'sky-500',
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
            </div>
        </ThemeStory>
    ),
};

// Interactive theme customization
const CustomThemeDemo = ({ args }: { args: any }) => {
    const [currentTheme, setCurrentTheme] = useState('blue-600');
    const { colorMode, toggleColorMode } = useColorMode();

    // Memoize the theme update function to avoid unnecessary re-renders
    const handleThemeChange = React.useCallback((colorValue: string) => {
        setCurrentTheme(colorValue);
        args.onThemeChange?.({
            ...args.theme,
            colors: {
                ...args.theme?.colors,
                primary: colorValue,
            }
        });
    }, [args.onThemeChange, args.theme]);

    // Available theme colors for quick selection
    const themeColors = [
        { name: 'Blue Theme', color: 'blue-600', bgClass: 'bg-blue-600 hover:bg-blue-700' },
        { name: 'Emerald Theme', color: 'emerald-600', bgClass: 'bg-emerald-600 hover:bg-emerald-700' },
        { name: 'Purple Theme', color: 'purple-600', bgClass: 'bg-purple-600 hover:bg-purple-700' },
        { name: 'Amber Theme', color: 'amber-600', bgClass: 'bg-amber-600 hover:bg-amber-700' },
    ];

    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <Card className="mb-6">
                    <Card.Header>
                        <h1 className="text-2xl font-bold">Interactive Theme Customization</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Current theme: {currentTheme}</p>
                    </Card.Header>
                    <Card.Body>
                        <p className="mb-6">
                            You can change the theme dynamically and toggle between light and dark modes.
                        </p>

                        <div className="mb-6 space-y-4">
                            <h2 className="text-xl font-bold">Theme Controls</h2>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {themeColors.map(theme => (
                                    <Button
                                        key={theme.color}
                                        onClick={() => handleThemeChange(theme.color)}
                                        className={theme.bgClass}
                                    >
                                        {theme.name}
                                    </Button>
                                ))}
                            </div>

                            <Button
                                onClick={toggleColorMode}
                                variant="outline-secondary"
                            >
                                {colorMode === 'light' ? '🌙 Switch to Dark Mode' : '☀️ Switch to Light Mode'}
                            </Button>
                        </div>

                        <ThemeDisplay />

                        <div className="mt-6 space-y-4">
                            <h2 className="text-xl font-bold">Component Examples</h2>
                            <div className="space-y-2">
                                <div className="flex flex-wrap gap-2">
                                    <Button variant="primary">Primary</Button>
                                    <Button variant="secondary">Secondary</Button>
                                    <Button variant="outline-primary">Outline</Button>
                                    <Button variant="light">Light</Button>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export const CustomTheme: Story = {
    args: {
        theme: {
            colors: {
                primary: 'blue-600',
                secondary: 'gray-500',
                accent: 'amber-500',
                success: 'green-500',
                warning: 'yellow-500',
                error: 'red-500',
                info: 'sky-500',
            }
        },
    },
    render: (args) => {
        // Use useReducer instead of useState to better handle theme updates
        const themeReducer = (state: Partial<Theme>, update: Partial<Theme>) => {
            return { ...state, ...update };
        };

        // Ensure we have a default theme if args.theme is undefined
        const initialTheme: Partial<Theme> = args.theme || {
            colors: {
                primary: 'blue-600',
                secondary: 'gray-500',
                accent: 'amber-500',
                success: 'green-500',
                warning: 'yellow-500',
                error: 'red-500',
                info: 'sky-500',
            }
        };

        const [dynamicTheme, updateTheme] = React.useReducer(themeReducer, initialTheme);

        // Memoize the theme change handler to prevent unnecessary re-renders
        const handleThemeChange = React.useCallback((newTheme: Partial<Theme>) => {
            updateTheme(newTheme);
        }, []);

        return (
            <ThemeStory {...args} theme={dynamicTheme} onThemeChange={handleThemeChange}>
                <CustomThemeDemo args={{ ...args, onThemeChange: handleThemeChange }} />
            </ThemeStory>
        );
    }
};
