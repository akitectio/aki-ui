import type { Meta, StoryObj } from '@storybook/react';
import { breakpoints, useBreakpoint, useMediaQuery, Show, useScreenSize } from '../lib/components';
import { useState, useEffect } from 'react';

const meta: Meta = {
    title: 'Layout/Breakpoints',
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `Breakpoints provide responsive design utilities and hooks for creating adaptive layouts. Based on Tailwind CSS breakpoint system.

## Features
- **Breakpoint Constants**: Predefined breakpoint values (sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px)
- **useBreakpoint Hook**: Get the current active breakpoint
- **useMediaQuery Hook**: Check if screen size matches a specific breakpoint
- **useScreenSize Hook**: Get detailed screen size information
- **Show Component**: Conditionally render content based on breakpoints
- **Responsive Utilities**: Helper functions for building responsive components

## Usage
These utilities help you create responsive designs that adapt to different screen sizes using hooks and components.`,
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const BreakpointDemo = () => {
    const currentBreakpoint = useBreakpoint();
    const screenSize = useScreenSize();
    const isMdOrLarger = useMediaQuery('md');
    const isLgOrLarger = useMediaQuery('lg');

    return (
        <div className="space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Current Breakpoint Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p><strong>Current Breakpoint:</strong> {currentBreakpoint}</p>
                        <p><strong>Screen Width:</strong> {screenSize.width}px</p>
                        <p><strong>Screen Height:</strong> {screenSize.height}px</p>
                    </div>
                    <div>
                        <p><strong>Is Mobile:</strong> {screenSize.isMobile ? 'Yes' : 'No'}</p>
                        <p><strong>Is Tablet:</strong> {screenSize.isTablet ? 'Yes' : 'No'}</p>
                        <p><strong>Is Desktop:</strong> {screenSize.isDesktop ? 'Yes' : 'No'}</p>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Media Query Results</h3>
                <div className="space-y-2">
                    <div className={`p-3 rounded ${isMdOrLarger ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        md or larger: {isMdOrLarger ? 'TRUE' : 'FALSE'}
                    </div>
                    <div className={`p-3 rounded ${isLgOrLarger ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        lg or larger: {isLgOrLarger ? 'TRUE' : 'FALSE'}
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Breakpoint Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {Object.entries(breakpoints).map(([name, value]) => (
                        <div key={name} className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-semibold text-blue-900">{name}</div>
                            <div className="text-blue-600">{value}px</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Demo: Story = {
    render: () => <BreakpointDemo />,
};

export const ShowComponent: Story = {
    render: () => (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold">Conditional Rendering with Show Component</h3>

            <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Show above md (tablet and up)</h4>
                    <Show above="md">
                        <div className="bg-green-100 p-3 rounded text-green-800">
                            This content is visible on tablet and desktop screens
                        </div>
                    </Show>
                    <Show below="md">
                        <div className="bg-blue-100 p-3 rounded text-blue-800">
                            This content is visible only on mobile screens
                        </div>
                    </Show>
                </div>

                <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Show only at lg breakpoint</h4>
                    <Show at="lg">
                        <div className="bg-purple-100 p-3 rounded text-purple-800">
                            This content is visible only at the lg breakpoint (1024px - 1279px)
                        </div>
                    </Show>
                    <div className="bg-gray-100 p-3 rounded text-gray-800">
                        This content is always visible
                    </div>
                </div>

                <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Show below xl (desktop and smaller)</h4>
                    <Show below="xl">
                        <div className="bg-orange-100 p-3 rounded text-orange-800">
                            This content is hidden on extra large screens (1280px+)
                        </div>
                    </Show>
                </div>
            </div>
        </div>
    ),
};

const ResponsiveGrid = () => {
    const currentBreakpoint = useBreakpoint();

    const getColumnsForBreakpoint = (bp: string) => {
        switch (bp) {
            case 'sm': return 1;
            case 'md': return 2;
            case 'lg': return 3;
            case 'xl': return 4;
            case '2xl': return 5;
            default: return 1;
        }
    };

    const columns = getColumnsForBreakpoint(currentBreakpoint);

    return (
        <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
                <p><strong>Current breakpoint:</strong> {currentBreakpoint}</p>
                <p><strong>Grid columns:</strong> {columns}</p>
            </div>

            <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
                {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} className="bg-blue-100 p-4 rounded text-center">
                        Item {i + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export const ResponsiveExample: Story = {
    render: () => (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold">Responsive Grid Example</h3>
            <p className="text-gray-600">
                This grid changes the number of columns based on the current breakpoint.
                Try resizing your window to see the effect.
            </p>
            <ResponsiveGrid />
        </div>
    ),
};

export const ResizeListener: Story = {
    render: () => {
        const [resizeCount, setResizeCount] = useState(0);
        const screenSize = useScreenSize();

        useEffect(() => {
            const handleResize = () => {
                setResizeCount(prev => prev + 1);
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return (
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Resize Event Tracking</h3>
                <div className="bg-gray-100 p-4 rounded-lg space-y-2">
                    <p><strong>Resize events detected:</strong> {resizeCount}</p>
                    <p><strong>Current size:</strong> {screenSize.width} × {screenSize.height}</p>
                    <p><strong>Device type:</strong> {
                        screenSize.isMobile ? 'Mobile' :
                            screenSize.isTablet ? 'Tablet' :
                                screenSize.isDesktop ? 'Desktop' : 'Unknown'
                    }</p>
                </div>
                <p className="text-sm text-gray-600">
                    Try resizing your browser window to see the live updates.
                </p>
            </div>
        );
    },
};
