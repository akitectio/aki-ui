'use client'

import { useState, useEffect } from 'react'
import {
    ChartBarIcon,
    UsersIcon,
    ShoppingCartIcon,
    CurrencyDollarIcon,
    HomeIcon,
    DocumentTextIcon,
    CogIcon,
    ArrowUpIcon,
    ArrowDownIcon,
} from '@heroicons/react/24/outline'
import { CodeBlock } from '@/components/CodeBlock'
import { Tabs } from '@/components/Tabs'
import BlockHeader from '@/components/BlockHeader'
import DevicePreviewWrapper from '@/components/DevicePreviewWrapper'

// Simple Card component for demo
const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`bg-white dark:bg-gray-800 shadow-sm rounded-lg border border-gray-200 dark:border-gray-700 ${className}`}>
        {children}
    </div>
)

// Simple Badge component for demo
const Badge = ({
    children,
    variant = 'default'
}: {
    children: React.ReactNode;
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}) => (
    <span className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        ${variant === 'default' ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300' : ''}
        ${variant === 'primary' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' : ''}
        ${variant === 'secondary' ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300' : ''}
        ${variant === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' : ''}
        ${variant === 'warning' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' : ''}
        ${variant === 'error' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' : ''}
    `}>
        {children}
    </span>
)

// Dashboard Component
function Dashboard({ selectedDevice = 'desktop' }: { selectedDevice?: string }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const isMobile = selectedDevice === 'mobile'
    const isTablet = selectedDevice === 'tablet'
    const isDesktop = selectedDevice === 'desktop' || selectedDevice === 'fullscreen'

    const stats = [
        {
            name: 'Total Users',
            value: '12,345',
            change: '+12%',
            changeType: 'positive',
            icon: UsersIcon,
        },
        {
            name: 'Revenue',
            value: '$45,678',
            change: '+8%',
            changeType: 'positive',
            icon: CurrencyDollarIcon,
        },
        {
            name: 'Orders',
            value: '2,345',
            change: '-3%',
            changeType: 'negative',
            icon: ShoppingCartIcon,
        },
        {
            name: 'Conversion Rate',
            value: '3.24%',
            change: '+2%',
            changeType: 'positive',
            icon: ChartBarIcon,
        },
    ]

    const navigation = [
        { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
        { name: 'Team', href: '#', icon: UsersIcon, current: false },
        { name: 'Projects', href: '#', icon: DocumentTextIcon, current: false },
        { name: 'Calendar', href: '#', icon: DocumentTextIcon, current: false },
        { name: 'Settings', href: '#', icon: CogIcon, current: false },
    ]

    const recentActivity = [
        { user: 'John Doe', action: 'Created new project', time: '2 hours ago' },
        { user: 'Jane Smith', action: 'Updated user profile', time: '4 hours ago' },
        { user: 'Mike Johnson', action: 'Completed task', time: '6 hours ago' },
        { user: 'Sarah Wilson', action: 'Added new member', time: '1 day ago' },
    ]

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex relative">
            {/* Mobile Sidebar Overlay */}
            {isMobile && sidebarOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setSidebarOpen(false)}
                    />
                    <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg z-50">
                        <div className="flex items-center justify-between h-16 bg-blue-600 px-4">
                            <h1 className="text-xl font-bold text-white">Dashboard</h1>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="text-white hover:text-gray-200"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <nav className="mt-8">
                            <div className="px-2 space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`
                                            group flex items-center px-2 py-2 text-sm font-medium rounded-md
                                            ${item.current
                                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                            }
                                        `}
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <item.icon className={`mr-3 h-5 w-5 flex-shrink-0 ${item.current ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`} />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </nav>
                    </div>
                </>
            )}

            {/* Sidebar */}
            <div className={`
                ${isMobile ? 'hidden' : isTablet ? 'w-16' : 'w-64'} 
                bg-white dark:bg-gray-800 shadow-lg flex-shrink-0
                ${isTablet ? 'overflow-hidden' : ''}
            `}>
                <div className="flex items-center justify-center h-16 bg-blue-600">
                    <h1 className={`font-bold text-white ${isTablet ? 'text-sm' : 'text-xl'}`}>
                        {isTablet ? 'DB' : 'Dashboard'}
                    </h1>
                </div>
                <nav className="mt-8">
                    <div className={`${isTablet ? 'px-1' : 'px-2'} space-y-1`}>
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`
                                    group flex items-center px-2 py-2 text-sm font-medium rounded-md
                                    ${item.current
                                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }
                                `}
                                title={isTablet ? item.name : undefined}
                            >
                                <item.icon
                                    className={`
                                        ${isTablet ? 'mx-auto' : 'mr-3'} h-5 w-5 flex-shrink-0
                                        ${item.current ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}
                                    `}
                                />
                                {!isTablet && item.name}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top bar */}
                <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                    <div className={`${isMobile ? 'px-4' : 'px-4 sm:px-6 lg:px-8'}`}>
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                {isMobile && (
                                    <button
                                        onClick={() => setSidebarOpen(!sidebarOpen)}
                                        className="mr-3 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                )}
                                <h1 className={`font-semibold text-gray-900 dark:text-white ${isMobile ? 'text-lg' : 'text-xl'}`}>
                                    {isMobile ? 'Dashboard' : 'Dashboard'}
                                </h1>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Badge variant="primary">Admin</Badge>
                                <div className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'} rounded-full bg-blue-600 flex items-center justify-center`}>
                                    <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium text-white`}>JD</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <div className={`${isMobile ? 'p-4' : 'p-6'}`}>
                    {/* Stats */}
                    <div className={`grid gap-${isMobile ? '4' : '5'} mb-${isMobile ? '6' : '8'} ${isMobile ? 'grid-cols-1' :
                        isTablet ? 'grid-cols-2' :
                            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                        }`}>
                        {stats.map((stat) => (
                            <Card key={stat.name} className={`${isMobile ? 'p-3' : 'p-4'}`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex-1 min-w-0">
                                        <dl>
                                            <dt className={`${isMobile ? 'text-xs' : 'text-xs'} font-medium text-gray-500 dark:text-gray-400 truncate mb-1`}>
                                                {stat.name}
                                            </dt>
                                            <dd className="flex items-baseline">
                                                <div className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-gray-900 dark:text-white truncate`}>
                                                    {stat.value}
                                                </div>
                                            </dd>
                                            <div className={`flex items-center text-xs font-semibold mt-1 ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                                                {stat.changeType === 'positive' ? (
                                                    <ArrowUpIcon className="h-3 w-3 flex-shrink-0 mr-1" />
                                                ) : (
                                                    <ArrowDownIcon className="h-3 w-3 flex-shrink-0 mr-1" />
                                                )}
                                                <span className="sr-only">
                                                    {stat.changeType === 'positive' ? 'Increased' : 'Decreased'} by
                                                </span>
                                                <span className="truncate">{stat.change}</span>
                                            </div>
                                        </dl>
                                    </div>
                                    <div className="flex-shrink-0 ml-3">
                                        <stat.icon className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'} text-blue-600`} />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Recent Activity */}
                    <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' :
                        isTablet ? 'grid-cols-1' :
                            'grid-cols-1 lg:grid-cols-2'
                        }`}>
                        <Card className={`${isMobile ? 'p-4' : 'p-6'}`}>
                            <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium text-gray-900 dark:text-white mb-4`}>
                                Recent Activity
                            </h3>
                            <div className="space-y-4">
                                {recentActivity.slice(0, isMobile ? 3 : 4).map((activity, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0">
                                            <div className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'} rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center`}>
                                                <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium text-blue-600 dark:text-blue-400`}>
                                                    {activity.user.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-900 dark:text-white`}>
                                                <span className="font-medium">{activity.user}</span> {activity.action}
                                            </p>
                                            <p className={`${isMobile ? 'text-xs' : 'text-xs'} text-gray-500 dark:text-gray-400`}>
                                                {activity.time}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {!isMobile && (
                            <Card className={`${isMobile ? 'p-4' : 'p-6'}`}>
                                <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium text-gray-900 dark:text-white mb-4`}>
                                    Quick Actions
                                </h3>
                                <div className="space-y-3">
                                    <button className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}>
                                        <UsersIcon className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'} mr-2`} />
                                        Add New User
                                    </button>
                                    <button className={`w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}>
                                        <DocumentTextIcon className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'} mr-2`} />
                                        Generate Report
                                    </button>
                                    <button className={`w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}>
                                        <CogIcon className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'} mr-2`} />
                                        Settings
                                    </button>
                                </div>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function DashboardPage() {
    const code = `import { useState } from 'react'
import { Card, Badge } from '@akitectio/aki-ui'
import {
    ChartBarIcon,
    UsersIcon,
    ShoppingCartIcon,
    CurrencyDollarIcon,
    HomeIcon,
    DocumentTextIcon,
    CogIcon,
    ArrowUpIcon,
    ArrowDownIcon,
} from '@heroicons/react/24/outline'

function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const stats = [
        {
            name: 'Total Users',
            value: '12,345',
            change: '+12%',
            changeType: 'positive',
            icon: UsersIcon,
        },
        {
            name: 'Revenue',
            value: '$45,678',
            change: '+8%',
            changeType: 'positive',
            icon: CurrencyDollarIcon,
        },
        {
            name: 'Orders',
            value: '2,345',
            change: '-3%',
            changeType: 'negative',
            icon: ShoppingCartIcon,
        },
        {
            name: 'Conversion Rate',
            value: '3.24%',
            change: '+2%',
            changeType: 'positive',
            icon: ChartBarIcon,
        },
    ]

    const navigation = [
        { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
        { name: 'Team', href: '#', icon: UsersIcon, current: false },
        { name: 'Projects', href: '#', icon: DocumentTextIcon, current: false },
        { name: 'Calendar', href: '#', icon: DocumentTextIcon, current: false },
        { name: 'Settings', href: '#', icon: CogIcon, current: false },
    ]

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <div className={\`w-64 bg-white shadow-lg flex-shrink-0 \${sidebarOpen ? 'block' : 'hidden'} lg:block\`}>
                <div className="flex items-center justify-center h-16 bg-blue-600">
                    <h1 className="text-xl font-bold text-white">Dashboard</h1>
                </div>
                <nav className="mt-8">
                    <div className="px-2 space-y-1">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={\`group flex items-center px-2 py-2 text-sm font-medium rounded-md \${item.current ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}\`}
                            >
                                <item.icon className={\`mr-3 h-5 w-5 flex-shrink-0 \${item.current ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}\`} />
                                {item.name}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top bar */}
                <div className="bg-white shadow-sm border-b border-gray-200">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
                            <div className="flex items-center space-x-4">
                                <Badge variant="primary">Admin</Badge>
                                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                                    <span className="text-sm font-medium text-white">JD</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <div className="p-6">
                    {/* Stats */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                        {stats.map((stat) => (
                            <Card key={stat.name} className="p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1 min-w-0">
                                        <dl>
                                            <dt className="text-xs font-medium text-gray-500 truncate mb-1">
                                                {stat.name}
                                            </dt>
                                            <dd className="flex items-baseline">
                                                <div className="text-xl font-semibold text-gray-900 truncate">
                                                    {stat.value}
                                                </div>
                                            </dd>
                                            <div className={\`flex items-center text-xs font-semibold mt-1 \${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}\`}>
                                                {stat.changeType === 'positive' ? (
                                                    <ArrowUpIcon className="h-3 w-3 flex-shrink-0 mr-1" />
                                                ) : (
                                                    <ArrowDownIcon className="h-3 w-3 flex-shrink-0 mr-1" />
                                                )}
                                                <span className="sr-only">
                                                    {stat.changeType === 'positive' ? 'Increased' : 'Decreased'} by
                                                </span>
                                                <span className="truncate">{stat.change}</span>
                                            </div>
                                        </dl>
                                    </div>
                                    <div className="flex-shrink-0 ml-3">
                                        <stat.icon className="h-6 w-6 text-blue-600" />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Recent Activity and Quick Actions */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Card className="p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
                            <div className="space-y-4">
                                {/* Activity items */}
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                                    <UsersIcon className="h-5 w-5 mr-2" />
                                    Add New User
                                </button>
                                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                    <DocumentTextIcon className="h-5 w-5 mr-2" />
                                    Generate Report
                                </button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}`

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <BlockHeader
                title="Dashboard Template"
            />

            {/* Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Admin Dashboard
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        A comprehensive dashboard layout with sidebar navigation, statistics cards, and activity feed. Perfect for admin panels and analytics dashboards.
                    </p>
                </div>

                {/* Tabs for Preview and Code */}
                <Tabs
                    persistKey="dashboard-01"
                    useUrlHash={true}
                    tabs={[
                        {
                            id: 'preview',
                            label: 'Preview',
                            content: (
                                <DevicePreviewWrapper>
                                    {(selectedDevice) => <Dashboard selectedDevice={selectedDevice} />}
                                </DevicePreviewWrapper>
                            )
                        },
                        {
                            id: 'code',
                            label: 'Code',
                            content: (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Implementation
                                    </h3>
                                    <CodeBlock code={code} language="tsx" />
                                </div>
                            )
                        }
                    ]}
                    defaultTab="preview"
                />

                {/* Features */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Features
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li>• Responsive sidebar navigation</li>
                            <li>• Statistics cards with trend indicators</li>
                            <li>• Recent activity feed</li>
                            <li>• Quick action buttons</li>
                            <li>• Mobile-friendly design</li>
                            <li>• Dark mode support</li>
                            <li>• Accessible components</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Use Cases
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li>• Admin dashboards</li>
                            <li>• Analytics platforms</li>
                            <li>• CRM systems</li>
                            <li>• Business intelligence tools</li>
                            <li>• Project management</li>
                            <li>• E-commerce backends</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}
