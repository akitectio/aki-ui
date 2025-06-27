import React, { useState } from 'react';
import {
    Bars3Icon,
    XMarkIcon,
    HomeIcon,
    BookOpenIcon,
    CubeIcon,
    WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

interface NavigationItem {
    name: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
    children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
    {
        name: 'Home',
        href: '/',
        icon: HomeIcon,
    },
    {
        name: 'Getting Started',
        href: '/docs/getting-started',
        icon: BookOpenIcon,
        children: [
            { name: 'Introduction', href: '/docs/getting-started/introduction' },
            { name: 'Installation', href: '/docs/getting-started/installation' },
            { name: 'Quick Start', href: '/docs/getting-started/quick-start' },
            { name: 'Theming', href: '/docs/getting-started/theming' },
        ],
    },
    {
        name: 'Components',
        href: '/docs/components',
        icon: CubeIcon,
        children: [
            { name: 'Accordion', href: '/docs/components/accordion' },
            { name: 'Alert', href: '/docs/components/alert' },
            { name: 'Avatar', href: '/docs/components/avatar' },
            { name: 'Badge', href: '/docs/components/badge' },
            { name: 'Breadcrumb', href: '/docs/components/breadcrumb' },
            { name: 'Button', href: '/docs/components/button' },
            { name: 'Button Group', href: '/docs/components/button-group' },
            { name: 'Card', href: '/docs/components/card' },
            { name: 'Chatbot', href: '/docs/components/chatbot' },
            { name: 'Checkbox', href: '/docs/components/checkbox' },
            { name: 'Chip', href: '/docs/components/chip' },
            { name: 'Data Table', href: '/docs/components/data-table' },
            { name: 'Divider', href: '/docs/components/divider' },
            { name: 'Drawer', href: '/docs/components/drawer' },
            { name: 'Dropdown', href: '/docs/components/dropdown' },
            { name: 'Form Control', href: '/docs/components/form-control' },
            { name: 'Input', href: '/docs/components/input' },
            { name: 'Modal', href: '/docs/components/modal' },
            { name: 'Pagination', href: '/docs/components/pagination' },
            { name: 'Popover', href: '/docs/components/popover' },
            { name: 'Radio', href: '/docs/components/radio' },
            { name: 'Select', href: '/docs/components/select' },
            { name: 'Skeleton', href: '/docs/components/skeleton' },
            { name: 'Slider', href: '/docs/components/slider' },
            { name: 'Spinner', href: '/docs/components/spinner' },
            { name: 'Switch', href: '/docs/components/switch' },
            { name: 'Tabs', href: '/docs/components/tabs' },
            { name: 'Toast', href: '/docs/components/toast' },
            { name: 'Tooltip', href: '/docs/components/tooltip' },
        ],
    },
    {
        name: 'Utilities',
        href: '/docs/utilities',
        icon: WrenchScrewdriverIcon,
        children: [
            { name: 'Color Modes', href: '/docs/utilities/color-modes' },
            { name: 'RTL Support', href: '/docs/utilities/rtl' },
            { name: 'Transitions', href: '/docs/utilities/transitions' },
        ],
    },
];

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    currentPath?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentPath = '/' }) => {
    const [expandedItems, setExpandedItems] = useState<string[]>(['Components']);

    const toggleExpanded = (itemName: string) => {
        setExpandedItems(prev =>
            prev.includes(itemName)
                ? prev.filter(name => name !== itemName)
                : [...prev, itemName]
        );
    };

    const isExpanded = (itemName: string) => expandedItems.includes(itemName);
    const isActive = (href: string) => currentPath === href;
    const isChildActive = (children: NavigationItem[]) =>
        children.some(child => isActive(child.href));

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:inset-0 lg:z-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
                    <div className="flex items-center">
                        <CubeIcon className="h-8 w-8 text-indigo-600" />
                        <span className="ml-2 text-xl font-bold text-gray-900">Aki UI</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                    >
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>

                <nav className="mt-5 px-2 pb-4 overflow-y-auto h-full">
                    <div className="space-y-1">
                        {navigationItems.map((item) => (
                            <div key={item.name}>
                                <button
                                    onClick={() => {
                                        if (item.children) {
                                            toggleExpanded(item.name);
                                        } else {
                                            window.location.href = item.href;
                                        }
                                    }}
                                    className={`
                    w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors
                    ${isActive(item.href) || (item.children && isChildActive(item.children))
                                            ? 'bg-indigo-100 text-indigo-900'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }
                  `}
                                >
                                    {item.icon && (
                                        <item.icon
                                            className={`
                        mr-3 h-5 w-5
                        ${isActive(item.href) || (item.children && isChildActive(item.children))
                                                    ? 'text-indigo-500'
                                                    : 'text-gray-400 group-hover:text-gray-500'
                                                }
                      `}
                                        />
                                    )}
                                    <span className="flex-1 text-left">{item.name}</span>
                                    {item.children && (
                                        <svg
                                            className={`
                        ml-3 h-5 w-5 transition-transform
                        ${isExpanded(item.name) ? 'rotate-90' : ''}
                      `}
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </button>

                                {item.children && isExpanded(item.name) && (
                                    <div className="mt-1 space-y-1 ml-4">
                                        {item.children.map((child) => (
                                            <button
                                                key={child.name}
                                                onClick={() => window.location.href = child.href}
                                                className={`
                          w-full group flex items-center pl-8 pr-2 py-2 text-sm font-medium rounded-md transition-colors
                          ${isActive(child.href)
                                                        ? 'bg-indigo-100 text-indigo-900 border-r-2 border-indigo-500'
                                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                    }
                        `}
                                            >
                                                {child.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </nav>
            </div>
        </>
    );
};

interface NavigationProps {
    children: React.ReactNode;
    currentPath?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ children, currentPath }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="h-screen flex overflow-hidden bg-gray-100">
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                currentPath={currentPath}
            />

            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" />
                    </button>

                    <div className="flex-1 px-4 flex justify-between">
                        <div className="flex-1 flex">
                            <div className="w-full flex md:ml-0">
                                <div className="relative w-full text-gray-400 focus-within:text-gray-600 flex items-center">
                                    <span className="text-lg font-semibold text-gray-900">
                                        Aki UI Documentation
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="ml-4 flex items-center md:ml-6">
                            <a
                                href="https://github.com/akitectio/aki-ui"
                                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="sr-only">GitHub</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <main className="flex-1 relative overflow-y-auto focus:outline-none">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Navigation;
