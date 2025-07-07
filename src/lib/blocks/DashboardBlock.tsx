import {
    Card,
    Badge,
    Avatar
} from '../components'
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

export function DashboardBlock() {
    return (
        <div className="flex h-full min-h-[600px] bg-gray-50 dark:bg-gray-900">
            {/* Sidebar */}
            <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">A</span>
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white">Admin Panel</span>
                    </div>
                </div>

                <div className="px-4 py-6 space-y-1">
                    <div className="flex items-center space-x-3 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <HomeIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Dashboard</span>
                    </div>
                    <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <UsersIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Users</span>
                    </div>
                    <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <ShoppingCartIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Orders</span>
                    </div>
                    <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <DocumentTextIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Reports</span>
                    </div>
                    <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <CogIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Settings</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">
                <div className="p-6">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            Dashboard Overview
                        </h1>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Welcome back! Here's what's happening with your business today.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon
                            return (
                                <Card key={index} className="p-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                                {stat.title}
                                            </p>
                                            <p className="text-lg font-bold text-gray-900 dark:text-white">
                                                {stat.value}
                                            </p>
                                            <div className="flex items-center mt-1">
                                                {stat.trend === 'up' ? (
                                                    <ArrowUpIcon className="w-3 h-3 text-green-500" />
                                                ) : (
                                                    <ArrowDownIcon className="w-3 h-3 text-red-500" />
                                                )}
                                                <span className={`text-xs ml-1 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                                                    {stat.change}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`p-2 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900/20`}>
                                            <IconComponent className={`w-4 h-4 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                                        </div>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>

                    {/* Recent Orders */}
                    <Card>
                        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                                <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Recent Orders
                                </h2>
                                <button className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                                    View all
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Order
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Customer
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Amount
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                                    {recentOrders.slice(0, 3).map((order) => (
                                        <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                                            <td className="px-4 py-2 whitespace-nowrap text-xs font-medium text-gray-900 dark:text-white">
                                                {order.id}
                                            </td>
                                            <td className="px-4 py-2 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-6 w-6">
                                                        <Avatar
                                                            src=""
                                                            fallback={order.customer.split(' ').map(n => n[0]).join('')}
                                                            size="sm"
                                                        />
                                                    </div>
                                                    <div className="ml-2">
                                                        <div className="text-xs font-medium text-gray-900 dark:text-white">
                                                            {order.customer}
                                                        </div>
                                                        <div className="text-xs text-gray-500 dark:text-gray-400">
                                                            {order.email}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-900 dark:text-white">
                                                {order.amount}
                                            </td>
                                            <td className="px-4 py-2 whitespace-nowrap">
                                                <Badge
                                                    variant={
                                                        order.status === 'Completed' ? 'success' :
                                                            order.status === 'Processing' ? 'warning' : 'secondary'
                                                    }
                                                >
                                                    {order.status}
                                                </Badge>
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
