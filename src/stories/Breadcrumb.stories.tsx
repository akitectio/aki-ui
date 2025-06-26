import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '../lib/components';

const meta: Meta<typeof Breadcrumb> = {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        separator: {
            control: 'text',
            description: 'The separator between breadcrumb items',
        },
        maxItems: {
            control: 'number',
            description: 'The maximum number of items to show. If exceeded, will collapse the middle items',
        },
        transparent: {
            control: 'boolean',
            description: 'Render breadcrumbs without background',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Basic: Story = {
    args: {
        separator: <span className="text-gray-400 mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </span>,
        className: "text-sm font-medium bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm",
        children: (
            <>
                <Breadcrumb.Item href="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/library" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors">Library</Breadcrumb.Item>
                <Breadcrumb.Item active className="text-gray-800 dark:text-gray-200 font-semibold">Current Page</Breadcrumb.Item>
            </>
        ),
    },
};

export const ChevronSeparator: Story = {
    args: {
        separator: <span className="text-gray-500">›</span>,
        className: "text-sm font-medium",
        children: (
            <>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/library">Library</Breadcrumb.Item>
                <Breadcrumb.Item active>Current Page</Breadcrumb.Item>
            </>
        ),
    },
};

export const ArrowSeparator: Story = {
    args: {
        separator: <span className="text-blue-500">→</span>,
        className: "text-sm font-medium bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg",
        children: (
            <>
                <Breadcrumb.Item href="/" className="text-blue-600 dark:text-blue-400">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/library" className="text-blue-600 dark:text-blue-400">Library</Breadcrumb.Item>
                <Breadcrumb.Item active className="text-blue-800 dark:text-blue-300">Current Page</Breadcrumb.Item>
            </>
        ),
    },
};

export const ModernStyle: Story = {
    args: {
        separator: <span className="text-gray-300 mx-2">/</span>,
        className: "text-sm font-medium bg-white dark:bg-gray-800 p-3 rounded-xl shadow-md",
        children: (
            <>
                <Breadcrumb.Item href="/" className="text-gray-500 hover:text-indigo-600 transition-colors">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/library" className="text-gray-500 hover:text-indigo-600 transition-colors">Library</Breadcrumb.Item>
                <Breadcrumb.Item active className="text-indigo-600 font-semibold">Current Page</Breadcrumb.Item>
            </>
        ),
    },
};

export const WithIcons: Story = {
    args: {
        separator: <span className="text-gray-400 mx-2">•</span>,
        className: "bg-gray-50 dark:bg-gray-800 p-2 rounded-lg",
        children: (
            <>
                <Breadcrumb.Item href="/" className="flex items-center text-gray-600 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/library" className="flex items-center text-gray-600 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="flex items-center text-indigo-600 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Current Page
                </Breadcrumb.Item>
            </>
        ),
    },
};

export const Transparent: Story = {
    args: {
        transparent: true,
        separator: <span className="text-gray-300 font-light mx-2">/</span>,
        children: (
            <>
                <Breadcrumb.Item href="/" className="text-gray-500 hover:text-gray-700">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/library" className="text-gray-500 hover:text-gray-700">Library</Breadcrumb.Item>
                <Breadcrumb.Item active className="text-gray-900 font-medium">Current Page</Breadcrumb.Item>
            </>
        ),
    },
};

export const PillStyle: Story = {
    args: {
        separator: '',
        className: "text-sm font-medium",
        children: (
            <>
                <Breadcrumb.Item
                    href="/"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 transition-colors"
                >
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item
                    href="/library"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 transition-colors"
                >
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item
                    active
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                >
                    Current Page
                </Breadcrumb.Item>
            </>
        ),
    },
};

export const GradientStyle: Story = {
    args: {
        separator: "",
        className: "p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md",
        children: (
            <>
                <Breadcrumb.Item
                    href="/"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-1 rounded-l-md"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item
                    href="/library"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7 4a1 1 0 00-1 1v1h10V5a1 1 0 00-1-1H7zM4 7a1 1 0 011-1h10a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V7z" />
                    </svg>
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item
                    active
                    className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-r-md font-medium"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                    Current Page
                </Breadcrumb.Item>
            </>
        ),
    },
};

export const MaxItems: Story = {
    args: {
        maxItems: 3,
        separator: <span className="text-gray-400 mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </span>,
        className: "text-sm bg-white dark:bg-gray-800 shadow-sm rounded-lg p-3",
        children: (
            <>
                <Breadcrumb.Item href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/library" className="text-gray-600 hover:text-blue-600 transition-colors">Library</Breadcrumb.Item>
                <Breadcrumb.Item href="/category" className="text-gray-600 hover:text-blue-600 transition-colors">Category</Breadcrumb.Item>
                <Breadcrumb.Item href="/subcategory" className="text-gray-600 hover:text-blue-600 transition-colors">Subcategory</Breadcrumb.Item>
                <Breadcrumb.Item active className="text-blue-700 font-medium">Current Page</Breadcrumb.Item>
            </>
        ),
    },
};
