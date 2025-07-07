'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
    Card,
    Badge,
    DataTable,
    Avatar,
    VerticalNavbar
} from '@akitectio/aki-ui'
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
    ArrowLeftIcon
} from '@heroicons/react/24/outline'
import { CodeBlock } from '@/components/CodeBlock'
import { Tabs } from '@/components/Tabs'

const stats = [
    {
        title: 'Total Revenue',
        value: '$45,231',
        change: '+20.1%',
        trend: 'up',
        icon: CurrencyDollarIcon,
        color: 'green'
    },
    {
        title: 'Active Users',
        value: '2,380',
        change: '+15.3%',
        trend: 'up',
        icon: UsersIcon,
        color: 'blue'
    },
    {
        title: 'Orders',
        value: '1,456',
        change: '+8.2%',
        trend: 'up',
        icon: ShoppingCartIcon,
        color: 'purple'
    },
    {
        title: 'Conversion Rate',
        value: '3.24%',
        change: '-2.1%',
        trend: 'down',
        icon: ChartBarIcon,
        color: 'red'
    }
]

const recentOrders = [
    {
        id: '#3021',
        customer: 'John Doe',
        email: 'john@example.com',
        amount: '$125.00',
        status: 'Completed',
        date: '2023-12-01'
    },
    {
        id: '#3020',
        customer: 'Jane Smith',
        email: 'jane@example.com',
        amount: '$85.50',
        status: 'Processing',
        date: '2023-12-01'
    },
    {
        id: '#3019',
        customer: 'Bob Johnson',
        email: 'bob@example.com',
        amount: '$200.00',
        status: 'Completed',
        date: '2023-11-30'
    },
    {
        id: '#3018',
        customer: 'Alice Brown',
        email: 'alice@example.com',
        amount: '$95.75',
        status: 'Pending',
        date: '2023-11-30'
    }
]

function DashboardExample() {
    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Sidebar */}
            <VerticalNavbar
                collapsible
                defaultCollapsed={false}
                className="border-r border-gray-200 dark:border-gray-700"
            >
                <VerticalNavbar.Header>
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">A</span>
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white">Admin Panel</span>
                    </div>
                </VerticalNavbar.Header>

                <div className="px-4 py-6 space-y-1">
                    <VerticalNavbar.Item href="#" active icon={<HomeIcon className="w-5 h-5" />}>
                        Dashboard
                    </VerticalNavbar.Item>
                    <VerticalNavbar.Item href="#" icon={<UsersIcon className="w-5 h-5" />}>
                        Users
                    </VerticalNavbar.Item>
                    <VerticalNavbar.Item href="#" icon={<ShoppingCartIcon className="w-5 h-5" />}>
                        Orders
                    </VerticalNavbar.Item>
                    <VerticalNavbar.Item href="#" icon={<DocumentTextIcon className="w-5 h-5" />}>
                        Reports
                    </VerticalNavbar.Item>
                    <VerticalNavbar.Item href="#" icon={<CogIcon className="w-5 h-5" />}>
                        Settings
                    </VerticalNavbar.Item>
                </div>
            </VerticalNavbar>

            {/* Main Content */}
            <div className="flex-1 overflow-hidden">
                <div className="p-6">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Dashboard Overview
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            Welcome back! Here's what's happening with your business today.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon
                            return (
                                <Card key={index} className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                                {stat.title}
                                            </p>
                                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                                {stat.value}
                                            </p>
                                            <div className="flex items-center mt-1">
                                                {stat.trend === 'up' ? (
                                                    <ArrowUpIcon className="w-4 h-4 text-green-500" />
                                                ) : (
                                                    <ArrowDownIcon className="w-4 h-4 text-red-500" />
                                                )}
                                                <span className={`text-sm ml-1 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                                                    {stat.change}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`p-3 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900/20`}>
                                            <IconComponent className={`w-6 h-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                                        </div>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>

                    {/* Recent Orders */}
                    <Card className="mb-8">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Recent Orders
                                </h2>
                                <Link href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                    View all
                                </Link>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Order
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Customer
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Amount
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                                    {recentOrders.map((order) => (
                                        <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                                {order.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-8 w-8">
                                                        <Avatar
                                                            size="sm"
                                                            fallback={order.customer.split(' ').map(n => n[0]).join('')}
                                                        />
                                                    </div>
                                                    <div className="ml-3">
                                                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                            {order.customer}
                                                        </div>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                                            {order.email}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                                {order.amount}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <Badge
                                                    variant={
                                                        order.status === 'Completed' ? 'success' :
                                                            order.status === 'Processing' ? 'warning' : 'secondary'
                                                    }
                                                >
                                                    {order.status}
                                                </Badge>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                {order.date}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default function DashboardBlockPage() {
    const code = `'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
    Card,
    Badge,
    DataTable,
    Avatar,
    VerticalNavbar
} from '@akitectio/aki-ui'
import {
    ChartBarIcon,
    UsersIcon,
    ShoppingCartIcon,
    CurrencyDollarIcon,
    HomeIcon,
    DocumentTextIcon,
    CogIcon,
    ArrowUpIcon,
    ArrowDownIcon
} from '@heroicons/react/24/outline'

const stats = [
    {
        title: 'Total Revenue',
        value: '$45,231',
        change: '+20.1%',
        trend: 'up',
        icon: CurrencyDollarIcon,
        color: 'green'
    },
    {
        title: 'Active Users',
        value: '2,380',
        change: '+15.3%',
        trend: 'up',
        icon: UsersIcon,
        color: 'blue'
    },
    {
        title: 'Orders',
        value: '1,456',
        change: '+8.2%',
        trend: 'up',
        icon: ShoppingCartIcon,
        color: 'purple'
    },
    {
        title: 'Conversion Rate',
        value: '3.24%',
        change: '-2.1%',
        trend: 'down',
        icon: ChartBarIcon,
        color: 'red'
    }
]

const recentOrders = [
    {
        id: '#3021',
        customer: 'John Doe',
        email: 'john@example.com',
        amount: '$125.00',
        status: 'Completed',
        date: '2023-12-01'
    },
    {
        id: '#3020',
        customer: 'Jane Smith',
        email: 'jane@example.com',
        amount: '$85.50',
        status: 'Processing',
        date: '2023-12-01'
    },
    {
        id: '#3019',
        customer: 'Bob Johnson',
        email: 'bob@example.com',
        amount: '$200.00',
        status: 'Completed',
        date: '2023-11-30'
    },
    {
        id: '#3018',
        customer: 'Alice Brown',
        email: 'alice@example.com',
        amount: '$95.75',
        status: 'Pending',
        date: '2023-11-30'
    }
]

function DashboardExample() {
    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Sidebar */}
            <VerticalNavbar
                collapsible
                defaultCollapsed={false}
                className="border-r border-gray-200 dark:border-gray-700"
            >
                <VerticalNavbar.Header>
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">A</span>
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white">Admin Panel</span>
                    </div>
                </VerticalNavbar.Header>

                <div className="px-4 py-6 space-y-1">
                    <VerticalNavbar.Item href="#" active icon={<HomeIcon className="w-5 h-5" />}>
                        Dashboard
                    </VerticalNavbar.Item>
                    <VerticalNavbar.Item href="#" icon={<UsersIcon className="w-5 h-5" />}>
                        Users
                    </VerticalNavbar.Item>
                    <VerticalNavbar.Item href="#" icon={<ShoppingCartIcon className="w-5 h-5" />}>
                        Orders
                    </VerticalNavbar.Item>
                    <VerticalNavbar.Item href="#" icon={<DocumentTextIcon className="w-5 h-5" />}>
                        Reports
                    </VerticalNavbar.Item>
                    <VerticalNavbar.Item href="#" icon={<CogIcon className="w-5 h-5" />}>
                        Settings
                    </VerticalNavbar.Item>
                </div>
            </VerticalNavbar>

            {/* Main Content */}
            <div className="flex-1 overflow-hidden">
                <div className="p-6">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Dashboard Overview
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            Welcome back! Here's what's happening with your business today.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon
                            return (
                                <Card key={index} className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                                {stat.title}
                                            </p>
                                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                                {stat.value}
                                            </p>
                                            <div className="flex items-center mt-1">
                                                {stat.trend === 'up' ? (
                                                    <ArrowUpIcon className="w-4 h-4 text-green-500" />
                                                ) : (
                                                    <ArrowDownIcon className="w-4 h-4 text-red-500" />
                                                )}
                                                <span className={\`text-sm ml-1 \${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}\`}>
                                                    {stat.change}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={\`p-3 rounded-lg bg-\${stat.color}-100 dark:bg-\${stat.color}-900/20\`}>
                                            <IconComponent className={\`w-6 h-6 text-\${stat.color}-600 dark:text-\${stat.color}-400\`} />
                                        </div>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>

                    {/* Recent Orders */}
                    <Card className="mb-8">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Recent Orders
                                </h2>
                                <Link href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                    View all
                                </Link>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Order
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Customer
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Amount
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                                    {recentOrders.map((order) => (
                                        <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                                {order.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-8 w-8">
                                                        <Avatar
                                                            size="sm"
                                                            fallback={order.customer.split(' ').map(n => n[0]).join('')}
                                                        />
                                                    </div>
                                                    <div className="ml-3">
                                                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                            {order.customer}
                                                        </div>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                                            {order.email}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                                {order.amount}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <Badge
                                                    variant={
                                                        order.status === 'Completed' ? 'success' :
                                                            order.status === 'Processing' ? 'warning' : 'secondary'
                                                    }
                                                >
                                                    {order.status}
                                                </Badge>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                {order.date}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}`

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Header */}
            <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/blocks"
                                className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                            >
                                <ArrowLeftIcon className="w-5 h-5" />
                                <span>Back to Blocks</span>
                            </Link>
                            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
                            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Dashboard Layout
                            </h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                                Copy Code
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Admin Dashboard
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        A complete dashboard layout with collapsible sidebar, stats cards, and data tables. Perfect for admin panels and analytics dashboards.
                    </p>
                </div>

                {/* Tabs for Preview and Code */}
                <Tabs
                    tabs={[
                        {
                            id: 'preview',
                            label: 'Preview',
                            content: (
                                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                    <div className="h-96">
                                        <DashboardExample />
                                    </div>
                                </div>
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
                            <li>• Collapsible sidebar navigation</li>
                            <li>• Stats cards with trend indicators</li>
                            <li>• Data table with sorting</li>
                            <li>• Responsive design</li>
                            <li>• Dark mode support</li>
                            <li>• Clean, modern UI</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Use Cases
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li>• Admin panels</li>
                            <li>• Analytics dashboards</li>
                            <li>• Business intelligence</li>
                            <li>• E-commerce backends</li>
                            <li>• CRM systems</li>
                            <li>• Data management tools</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
