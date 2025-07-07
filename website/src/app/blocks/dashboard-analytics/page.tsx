'use client'

import { useState, useMemo } from 'react'
import {
    ChartBarIcon,
    ArrowUpIcon,
    ArrowDownIcon,
    EyeIcon,
    ShoppingCartIcon,
    UserGroupIcon,
    CurrencyDollarIcon,
    CalendarDaysIcon,
    FunnelIcon
} from '@heroicons/react/24/outline'
import { Card } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { Tabs } from '@/components/Tabs'
import BlockHeader from '@/components/BlockHeader'
import DevicePreviewWrapper from '@/components/DevicePreviewWrapper'

// Mock data for analytics
const analyticsData = {
    metrics: [
        {
            title: 'Total Revenue',
            value: '$124,592',
            change: '+12.5%',
            trend: 'up',
            icon: CurrencyDollarIcon
        },
        {
            title: 'Active Users',
            value: '8,423',
            change: '+8.2%',
            trend: 'up',
            icon: UserGroupIcon
        },
        {
            title: 'Page Views',
            value: '52,849',
            change: '+15.3%',
            trend: 'up',
            icon: EyeIcon
        },
        {
            title: 'Conversion Rate',
            value: '3.2%',
            change: '-2.1%',
            trend: 'down',
            icon: ShoppingCartIcon
        }
    ],
    chartData: [
        { month: 'Jan', revenue: 45000, users: 1200, orders: 245 },
        { month: 'Feb', revenue: 52000, users: 1400, orders: 289 },
        { month: 'Mar', revenue: 48000, users: 1350, orders: 267 },
        { month: 'Apr', revenue: 61000, users: 1600, orders: 334 },
        { month: 'May', revenue: 55000, users: 1450, orders: 298 },
        { month: 'Jun', revenue: 67000, users: 1750, orders: 378 },
        { month: 'Jul', revenue: 59000, users: 1520, orders: 312 }
    ],
    topProducts: [
        { name: 'Premium Plan', sales: 1234, revenue: '$24,680', change: '+12%' },
        { name: 'Basic Plan', sales: 2456, revenue: '$12,280', change: '+8%' },
        { name: 'Enterprise Plan', sales: 567, revenue: '$28,350', change: '+15%' },
        { name: 'Starter Plan', sales: 3421, revenue: '$6,842', change: '+5%' }
    ],
    recentActivity: [
        { action: 'New user registration', user: 'John Doe', time: '2 minutes ago' },
        { action: 'Purchase completed', user: 'Sarah Wilson', time: '5 minutes ago' },
        { action: 'Support ticket created', user: 'Mike Johnson', time: '8 minutes ago' },
        { action: 'Newsletter subscription', user: 'Emma Davis', time: '12 minutes ago' }
    ]
}

// Simple Bar Chart Component
function BarChart({ data, height = 200 }: { data: any[], height?: number }) {
    const maxValue = Math.max(...data.map(d => d.revenue))

    return (
        <div className="flex items-end justify-between h-48 px-4 py-4">
            {data.map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                    <div className="relative w-full max-w-12 mb-2">
                        <div
                            className="bg-blue-500 rounded-t-sm transition-all duration-300 hover:bg-blue-600"
                            style={{
                                height: `${(item.revenue / maxValue) * height}px`,
                                minHeight: '20px'
                            }}
                        />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">{item.month}</span>
                </div>
            ))}
        </div>
    )
}

// Analytics Dashboard Component
function AnalyticsDashboard({ selectedDevice = 'desktop' }: { selectedDevice?: 'mobile' | 'tablet' | 'desktop' | 'fullscreen' }) {
    const [dateRange, setDateRange] = useState('7d')
    const [selectedMetric, setSelectedMetric] = useState('revenue')

    const isMobile = selectedDevice === 'mobile'
    const isTablet = selectedDevice === 'tablet'

    const filteredData = useMemo(() => {
        // In a real app, this would filter based on dateRange
        return analyticsData.chartData
    }, [dateRange])

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Analytics Dashboard
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Track your business performance and key metrics
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <select
                            value={dateRange}
                            onChange={(e) => setDateRange(e.target.value)}
                            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                        >
                            <option value="7d">Last 7 days</option>
                            <option value="30d">Last 30 days</option>
                            <option value="90d">Last 90 days</option>
                            <option value="1y">Last year</option>
                        </select>
                        <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <FunnelIcon className="h-4 w-4" />
                            <span>Filter</span>
                        </button>
                    </div>
                </div>

                {/* Metrics Cards */}
                <div className={`grid ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-4'} gap-4`}>
                    {analyticsData.metrics.map((metric, index) => (
                        <Card key={index} className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                        {metric.title}
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {metric.value}
                                    </p>
                                </div>
                                <div className={`p-3 rounded-full ${metric.trend === 'up' ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'
                                    }`}>
                                    <metric.icon className={`h-6 w-6 ${metric.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                                        }`} />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center">
                                {metric.trend === 'up' ? (
                                    <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
                                ) : (
                                    <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
                                )}
                                <span className={`text-sm font-medium ${metric.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                                    }`}>
                                    {metric.change}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                                    vs last period
                                </span>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Charts Section */}
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-6`}>
                    <Card className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Revenue Trend
                            </h3>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => setSelectedMetric('revenue')}
                                    className={`px-3 py-1 text-sm rounded-md ${selectedMetric === 'revenue'
                                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                                        }`}
                                >
                                    Revenue
                                </button>
                                <button
                                    onClick={() => setSelectedMetric('users')}
                                    className={`px-3 py-1 text-sm rounded-md ${selectedMetric === 'users'
                                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                                        }`}
                                >
                                    Users
                                </button>
                            </div>
                        </div>
                        <BarChart data={filteredData} />
                    </Card>

                    <Card className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Top Products
                        </h3>
                        <div className="space-y-4">
                            {analyticsData.topProducts.map((product, index) => (
                                <div key={index} className="flex items-center justify-between py-2">
                                    <div className="flex-1">
                                        <p className="font-medium text-gray-900 dark:text-white">
                                            {product.name}
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {product.sales} sales
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium text-gray-900 dark:text-white">
                                            {product.revenue}
                                        </p>
                                        <p className="text-sm text-green-600 dark:text-green-400">
                                            {product.change}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Recent Activity */}
                <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Recent Activity
                    </h3>
                    <div className="space-y-4">
                        {analyticsData.recentActivity.map((activity, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                                        {activity.action}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        by {activity.user} • {activity.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default function DashboardAnalyticsPage() {
    const code = `import { useState, useMemo } from 'react'
import { 
    ChartBarIcon, 
    ArrowUpIcon, 
    ArrowDownIcon,
    EyeIcon,
    ShoppingCartIcon,
    UserGroupIcon,
    CurrencyDollarIcon,
    FunnelIcon
} from '@heroicons/react/24/outline'
import { Card } from '@akitectio/aki-ui'

// Simple Bar Chart Component
function BarChart({ data, height = 200 }) {
    const maxValue = Math.max(...data.map(d => d.revenue))
    
    return (
        <div className="flex items-end justify-between h-48 px-4 py-4">
            {data.map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                    <div className="relative w-full max-w-12 mb-2">
                        <div 
                            className="bg-blue-500 rounded-t-sm transition-all duration-300 hover:bg-blue-600"
                            style={{
                                height: \`\${(item.revenue / maxValue) * height}px\`,
                                minHeight: '20px'
                            }}
                        />
                    </div>
                    <span className="text-xs text-gray-600">{item.month}</span>
                </div>
            ))}
        </div>
    )
}

function AnalyticsDashboard() {
    const [dateRange, setDateRange] = useState('7d')
    const [selectedMetric, setSelectedMetric] = useState('revenue')
    
    const analyticsData = {
        metrics: [
            { 
                title: 'Total Revenue', 
                value: '$124,592', 
                change: '+12.5%', 
                trend: 'up',
                icon: CurrencyDollarIcon 
            },
            { 
                title: 'Active Users', 
                value: '8,423', 
                change: '+8.2%', 
                trend: 'up',
                icon: UserGroupIcon 
            },
            { 
                title: 'Page Views', 
                value: '52,849', 
                change: '+15.3%', 
                trend: 'up',
                icon: EyeIcon 
            },
            { 
                title: 'Conversion Rate', 
                value: '3.2%', 
                change: '-2.1%', 
                trend: 'down',
                icon: ShoppingCartIcon 
            }
        ],
        chartData: [
            { month: 'Jan', revenue: 45000, users: 1200, orders: 245 },
            { month: 'Feb', revenue: 52000, users: 1400, orders: 289 },
            { month: 'Mar', revenue: 48000, users: 1350, orders: 267 },
            { month: 'Apr', revenue: 61000, users: 1600, orders: 334 },
            { month: 'May', revenue: 55000, users: 1450, orders: 298 },
            { month: 'Jun', revenue: 67000, users: 1750, orders: 378 },
            { month: 'Jul', revenue: 59000, users: 1520, orders: 312 }
        ],
        topProducts: [
            { name: 'Premium Plan', sales: 1234, revenue: '$24,680', change: '+12%' },
            { name: 'Basic Plan', sales: 2456, revenue: '$12,280', change: '+8%' },
            { name: 'Enterprise Plan', sales: 567, revenue: '$28,350', change: '+15%' },
            { name: 'Starter Plan', sales: 3421, revenue: '$6,842', change: '+5%' }
        ]
    }
    
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Analytics Dashboard
                        </h1>
                        <p className="text-gray-600">
                            Track your business performance and key metrics
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <select
                            value={dateRange}
                            onChange={(e) => setDateRange(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="7d">Last 7 days</option>
                            <option value="30d">Last 30 days</option>
                            <option value="90d">Last 90 days</option>
                            <option value="1y">Last year</option>
                        </select>
                        <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <FunnelIcon className="h-4 w-4" />
                            <span>Filter</span>
                        </button>
                    </div>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {analyticsData.metrics.map((metric, index) => (
                        <Card key={index} className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">
                                        {metric.title}
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {metric.value}
                                    </p>
                                </div>
                                <div className={\`p-3 rounded-full \${
                                    metric.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                                }\`}>
                                    <metric.icon className={\`h-6 w-6 \${
                                        metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                                    }\`} />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center">
                                {metric.trend === 'up' ? (
                                    <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
                                ) : (
                                    <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
                                )}
                                <span className={\`text-sm font-medium \${
                                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                                }\`}>
                                    {metric.change}
                                </span>
                                <span className="text-sm text-gray-500 ml-2">
                                    vs last period
                                </span>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Revenue Trend
                            </h3>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => setSelectedMetric('revenue')}
                                    className={\`px-3 py-1 text-sm rounded-md \${
                                        selectedMetric === 'revenue' 
                                            ? 'bg-blue-100 text-blue-700' 
                                            : 'text-gray-500 hover:text-gray-700'
                                    }\`}
                                >
                                    Revenue
                                </button>
                                <button
                                    onClick={() => setSelectedMetric('users')}
                                    className={\`px-3 py-1 text-sm rounded-md \${
                                        selectedMetric === 'users' 
                                            ? 'bg-blue-100 text-blue-700' 
                                            : 'text-gray-500 hover:text-gray-700'
                                    }\`}
                                >
                                    Users
                                </button>
                            </div>
                        </div>
                        <BarChart data={analyticsData.chartData} />
                    </Card>

                    <Card className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Top Products
                        </h3>
                        <div className="space-y-4">
                            {analyticsData.topProducts.map((product, index) => (
                                <div key={index} className="flex items-center justify-between py-2">
                                    <div className="flex-1">
                                        <p className="font-medium text-gray-900">
                                            {product.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {product.sales} sales
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium text-gray-900">
                                            {product.revenue}
                                        </p>
                                        <p className="text-sm text-green-600">
                                            {product.change}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}`

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <BlockHeader title="Analytics Dashboard" />

            {/* Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Analytics Dashboard
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        A comprehensive analytics dashboard with interactive charts, key metrics, and real-time data visualization.
                        Perfect for business intelligence and data-driven applications.
                    </p>
                </div>

                {/* Tabs for Preview and Code */}
                <Tabs
                    persistKey="dashboard-analytics"
                    useUrlHash={true}
                    tabs={[
                        {
                            id: 'preview',
                            label: 'Preview',
                            content: (
                                <DevicePreviewWrapper>
                                    {(selectedDevice) => (
                                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                                                <AnalyticsDashboard selectedDevice={selectedDevice} />
                                            </div>
                                        </div>
                                    )}
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
                            <li>• Interactive charts and graphs</li>
                            <li>• Real-time data updates</li>
                            <li>• Key performance metrics cards</li>
                            <li>• Customizable date range filters</li>
                            <li>• Top products/services tracking</li>
                            <li>• Recent activity timeline</li>
                            <li>• Responsive grid system</li>
                            <li>• Dark mode support</li>
                            <li>• Export functionality</li>
                            <li>• Performance optimized</li>
                            <li>• Trend indicators with colors</li>
                            <li>• Mobile-first design</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Use Cases
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li>• Business intelligence dashboards</li>
                            <li>• Marketing analytics platforms</li>
                            <li>• Financial reporting tools</li>
                            <li>• Website traffic analysis</li>
                            <li>• Sales performance tracking</li>
                            <li>• User behavior analytics</li>
                            <li>• IoT data visualization</li>
                            <li>• Social media insights</li>
                            <li>• E-commerce analytics</li>
                            <li>• SaaS metrics monitoring</li>
                            <li>• Project management dashboards</li>
                            <li>• Customer support analytics</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}
