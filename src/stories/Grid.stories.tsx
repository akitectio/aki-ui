import type { Meta, StoryObj } from '@storybook/react';
import { Grid, GridItem, SimpleGrid } from '../lib/components';

const meta: Meta<typeof Grid> = {
    title: 'Layout/Grid',
    component: Grid,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `Grid is a responsive grid layout system that provides powerful tools for creating complex layouts. Built on CSS Grid with responsive capabilities.

## Features
- **Responsive Columns**: Configure different column counts for different breakpoints
- **Flexible Gaps**: Control spacing between grid items responsively  
- **Grid Items**: Position items with span, start, and end properties
- **Simple Grid**: Easy-to-use grid with equal-width columns
- **Auto-fit Grids**: Automatically fit columns based on minimum width

## Components
- **Grid**: Main grid container with full control
- **GridItem**: Individual grid items with positioning
- **SimpleGrid**: Simplified grid with equal columns

## Usage
Perfect for creating responsive layouts, dashboards, card grids, and complex page structures.`,
            },
        },
    },
    argTypes: {
        cols: {
            control: 'number',
            description: 'Number of columns',
        },
        gap: {
            control: 'number',
            description: 'Gap between grid items',
        },
        rows: {
            control: 'number',
            description: 'Number of rows',
        },
        flow: {
            control: 'select',
            options: ['row', 'col', 'row-dense', 'col-dense'],
            description: 'Grid auto flow',
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        cols: 3,
        gap: 4,
    },
    render: (args) => (
        <Grid {...args}>
            {Array.from({ length: 9 }, (_, i) => (
                <div key={i} className="bg-blue-100 p-4 rounded text-center">
                    Item {i + 1}
                </div>
            ))}
        </Grid>
    ),
};

export const ResponsiveColumns: Story = {
    render: () => (
        <Grid cols={{ base: 1, md: 2, lg: 3, xl: 4 }} gap={4}>
            {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="bg-green-100 p-4 rounded text-center">
                    Card {i + 1}
                </div>
            ))}
        </Grid>
    ),
};

export const WithGridItems: Story = {
    render: () => (
        <Grid cols={4} gap={4}>
            <GridItem colSpan={2} className="bg-blue-100 p-4 rounded text-center">
                Spans 2 columns
            </GridItem>
            <div className="bg-gray-100 p-4 rounded text-center">Regular item</div>
            <div className="bg-gray-100 p-4 rounded text-center">Regular item</div>

            <GridItem colSpan={3} className="bg-green-100 p-4 rounded text-center">
                Spans 3 columns
            </GridItem>
            <div className="bg-gray-100 p-4 rounded text-center">Regular item</div>

            <div className="bg-gray-100 p-4 rounded text-center">Regular item</div>
            <GridItem colSpan={2} className="bg-purple-100 p-4 rounded text-center">
                Spans 2 columns
            </GridItem>
            <div className="bg-gray-100 p-4 rounded text-center">Regular item</div>
        </Grid>
    ),
};

export const ComplexLayout: Story = {
    render: () => (
        <Grid cols={6} rows={4} gap={4} className="h-96">
            <GridItem
                colSpan={4}
                rowSpan={2}
                className="bg-blue-100 p-4 rounded flex items-center justify-center"
            >
                <div className="text-center">
                    <h3 className="text-lg font-semibold">Main Content</h3>
                    <p className="text-sm text-gray-600">4 cols × 2 rows</p>
                </div>
            </GridItem>

            <GridItem
                colSpan={2}
                className="bg-green-100 p-4 rounded flex items-center justify-center"
            >
                <div className="text-center">
                    <h4 className="font-medium">Sidebar 1</h4>
                    <p className="text-xs text-gray-600">2 cols × 1 row</p>
                </div>
            </GridItem>

            <GridItem
                colSpan={2}
                className="bg-yellow-100 p-4 rounded flex items-center justify-center"
            >
                <div className="text-center">
                    <h4 className="font-medium">Sidebar 2</h4>
                    <p className="text-xs text-gray-600">2 cols × 1 row</p>
                </div>
            </GridItem>

            <GridItem
                colSpan={3}
                className="bg-purple-100 p-4 rounded flex items-center justify-center"
            >
                <div className="text-center">
                    <h4 className="font-medium">Footer Left</h4>
                    <p className="text-xs text-gray-600">3 cols × 1 row</p>
                </div>
            </GridItem>

            <GridItem
                colSpan={3}
                className="bg-pink-100 p-4 rounded flex items-center justify-center"
            >
                <div className="text-center">
                    <h4 className="font-medium">Footer Right</h4>
                    <p className="text-xs text-gray-600">3 cols × 1 row</p>
                </div>
            </GridItem>

            <GridItem
                colSpan={6}
                className="bg-gray-100 p-4 rounded flex items-center justify-center"
            >
                <div className="text-center">
                    <h4 className="font-medium">Full Width Footer</h4>
                    <p className="text-xs text-gray-600">6 cols × 1 row</p>
                </div>
            </GridItem>
        </Grid>
    ),
};

export const SimpleGridExample: Story = {
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold mb-4">Responsive Columns</h3>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                    {Array.from({ length: 6 }, (_, i) => (
                        <div key={i} className="bg-blue-100 p-4 rounded text-center">
                            Card {i + 1}
                        </div>
                    ))}
                </SimpleGrid>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Fixed Columns</h3>
                <SimpleGrid columns={4} spacing={6}>
                    {Array.from({ length: 8 }, (_, i) => (
                        <div key={i} className="bg-green-100 p-4 rounded text-center">
                            Item {i + 1}
                        </div>
                    ))}
                </SimpleGrid>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Auto-fit with Minimum Width</h3>
                <SimpleGrid minChildWidth="200px" spacing={4}>
                    {Array.from({ length: 10 }, (_, i) => (
                        <div key={i} className="bg-purple-100 p-4 rounded text-center">
                            Auto-fit {i + 1}
                        </div>
                    ))}
                </SimpleGrid>
            </div>
        </div>
    ),
};

export const CardGrid: Story = {
    render: () => (
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
            {[
                { title: 'Article 1', content: 'This is a sample article with some content to demonstrate the card layout.' },
                { title: 'Article 2', content: 'Another article with different content length to show how the grid adapts.' },
                { title: 'Article 3', content: 'A third article with even more content to demonstrate the flexibility of the grid system.' },
                { title: 'Article 4', content: 'Short content.' },
                { title: 'Article 5', content: 'This article has medium length content that fits nicely in the card layout.' },
                { title: 'Article 6', content: 'The final article with its own unique content.' },
            ].map((article, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm">{article.content}</p>
                    <div className="mt-4">
                        <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                            Read more →
                        </button>
                    </div>
                </div>
            ))}
        </SimpleGrid>
    ),
};

export const Dashboard: Story = {
    render: () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Dashboard</h2>

            {/* Stats Cards */}
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={4}>
                {[
                    { label: 'Total Users', value: '12,345', change: '+5.2%', positive: true },
                    { label: 'Revenue', value: '$54,321', change: '+12.1%', positive: true },
                    { label: 'Orders', value: '1,234', change: '-2.3%', positive: false },
                    { label: 'Conversion', value: '3.21%', change: '+0.5%', positive: true },
                ].map((stat, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                        <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                        <div className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</div>
                        <div className={`text-sm mt-2 ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                            {stat.change}
                        </div>
                    </div>
                ))}
            </SimpleGrid>

            {/* Main Content Grid */}
            <Grid cols={{ base: 1, lg: 3 }} gap={6}>
                <GridItem colSpan={{ base: 1, lg: 2 }}>
                    <div className="bg-white border border-gray-200 rounded-lg p-6 h-64">
                        <h3 className="text-lg font-semibold mb-4">Analytics Chart</h3>
                        <div className="bg-gray-100 rounded h-full flex items-center justify-center">
                            <span className="text-gray-500">Chart placeholder</span>
                        </div>
                    </div>
                </GridItem>

                <GridItem>
                    <div className="bg-white border border-gray-200 rounded-lg p-6 h-64">
                        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                        <div className="space-y-3">
                            {Array.from({ length: 5 }, (_, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Activity item {i + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </GridItem>
            </Grid>
        </div>
    ),
};

export const LanguageManagerLayout: Story = {
    name: 'Language Manager Layout',
    render: () => (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Language Management Layout</h2>
            <p className="text-gray-600">Form (4 cols) + Table (8 cols) responsive layout</p>

            <Grid cols={{ base: 1, lg: 12 }} gap={6}>
                <GridItem colSpan={{ base: 1, lg: 4 }}>
                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                        <h3 className="font-semibold text-blue-900 mb-4">Add New Language</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Language Name</label>
                                <input className="w-full px-3 py-2 border rounded-md" placeholder="English" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Language Code</label>
                                <input className="w-full px-3 py-2 border rounded-md" placeholder="en" />
                            </div>
                            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                                Add Language
                            </button>
                        </div>
                    </div>
                </GridItem>

                <GridItem colSpan={{ base: 1, lg: 8 }}>
                    <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-4">Language List</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="text-left p-3 text-sm font-medium">Name</th>
                                        <th className="text-left p-3 text-sm font-medium">Code</th>
                                        <th className="text-left p-3 text-sm font-medium">Status</th>
                                        <th className="text-left p-3 text-sm font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    <tr>
                                        <td className="p-3">English</td>
                                        <td className="p-3">en</td>
                                        <td className="p-3">
                                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Active</span>
                                        </td>
                                        <td className="p-3">
                                            <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Vietnamese</td>
                                        <td className="p-3">vi</td>
                                        <td className="p-3">
                                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Active</span>
                                        </td>
                                        <td className="p-3">
                                            <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </GridItem>
            </Grid>
        </div>
    ),
};
