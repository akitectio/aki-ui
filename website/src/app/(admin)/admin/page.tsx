'use client';'use client'



import { useState } from 'react';import { useState } from 'react'

import {import { Metadata } from 'next'

  Card,import { 

  Grid,  Card,

  Badge,  Grid,

  DataTable,  Badge, 

  Button,  DataTable,

  Avatar,  Button,

  Alert,  Avatar,

  VerticalNavbar,  Alert,

  PermissionPanel,  VerticalNavbar,

  Input,  PermissionPanel,

  Select,  Input,

  Dropdown,  Select,

} from '@akitectio/aki-ui';  Dropdown

} from '@akitectio/aki-ui'

// Mock data for usersimport {

const mockUsers = [  HomeIcon,

  {  UsersIcon,

    id: 1,  ShoppingCartIcon,

    name: 'John Doe',  CurrencyDollarIcon,

    email: 'john@example.com',  DocumentTextIcon,

    role: 'Admin',  CogIcon,

    status: 'Active',  ChartBarIcon,

    avatar: 'https://i.pravatar.cc/150?img=1',  BellIcon,

  },  MagnifyingGlassIcon,

  {  ArrowUpIcon,

    id: 2,  ArrowDownIcon,

    name: 'Jane Smith',  EyeIcon,

    email: 'jane@example.com',  PencilIcon,

    role: 'Editor',  TrashIcon,

    status: 'Active',  PlusIcon,

    avatar: 'https://i.pravatar.cc/150?img=2',  ChevronDownIcon

  },} from '@heroicons/react/24/outline'

  {import type { PermissionCategory } from '@akitectio/aki-ui'

    id: 3,

    name: 'Bob Johnson',interface User {

    email: 'bob@example.com',  id: number

    role: 'Viewer',  name: string

    status: 'Inactive',  email: string

    avatar: 'https://i.pravatar.cc/150?img=3',  role: string

  },  status: 'Active' | 'Inactive' | 'Pending'

];  lastLogin: string

  avatar: string

// Mock data for orders}

const mockOrders = [

  { id: 1, customer: 'Alice Brown', product: 'Product A', amount: '$125.00', status: 'Completed' },interface Order {

  { id: 2, customer: 'Charlie Davis', product: 'Product B', amount: '$89.99', status: 'Pending' },  id: string

  { id: 3, customer: 'Diana Wilson', product: 'Product C', amount: '$199.00', status: 'Processing' },  customer: string

];  amount: string

  status: 'Completed' | 'Pending' | 'Failed'

// Permission categories  date: string

const permissionCategories = [}

  {

    id: 'content',const mockUsers: User[] = [

    name: 'Content Management',  {

    description: 'Manage content, posts, and media',    id: 1,

    permissions: [    name: 'John Doe',

      { id: 'content.create', name: 'Create Content', description: 'Create new posts and pages', enabled: true },    email: 'john@example.com',

      { id: 'content.edit', name: 'Edit Content', description: 'Edit existing content', enabled: true },    role: 'Admin',

      { id: 'content.delete', name: 'Delete Content', description: 'Delete posts and pages', enabled: false },    status: 'Active',

      { id: 'content.publish', name: 'Publish Content', description: 'Publish and unpublish content', enabled: true },    lastLogin: '2 hours ago',

    ],    avatar: '👨‍💼'

  },  },

  {  {

    id: 'users',    id: 2,

    name: 'User Management',    name: 'Jane Smith',

    description: 'Manage users and roles',    email: 'jane@example.com',

    permissions: [    role: 'Editor',

      { id: 'users.view', name: 'View Users', description: 'View user profiles', enabled: true },    status: 'Active',

      { id: 'users.create', name: 'Create Users', description: 'Add new users', enabled: false },    lastLogin: '1 day ago',

      { id: 'users.edit', name: 'Edit Users', description: 'Modify user information', enabled: false },    avatar: '👩‍💻'

      { id: 'users.delete', name: 'Delete Users', description: 'Remove users from system', enabled: false },  },

    ],  {

  },    id: 3,

  {    name: 'Mike Johnson',

    id: 'settings',    email: 'mike@example.com',

    name: 'System Settings',    role: 'User',

    description: 'Configure system settings',    status: 'Inactive',

    permissions: [    lastLogin: '5 days ago',

      { id: 'settings.view', name: 'View Settings', description: 'View system configuration', enabled: true },    avatar: '👨‍🔧'

      { id: 'settings.edit', name: 'Edit Settings', description: 'Modify system settings', enabled: false },  },

    ],  {

  },    id: 4,

];    name: 'Sarah Wilson',

    email: 'sarah@example.com',

export default function AdminPage() {    role: 'Editor',

  const [activeSection, setActiveSection] = useState('dashboard');    status: 'Pending',

    lastLogin: 'Never',

  // User columns for DataTable    avatar: '👩‍🎨'

  const userColumns = [  }

    {]

      header: 'User',

      accessorKey: 'name',const mockOrders: Order[] = [

      cell: (info: any) => (  {

        <div className="flex items-center gap-3">    id: '#3021',

          <Avatar src={info.row.original.avatar} alt={info.getValue()} size="sm" />    customer: 'John Doe',

          <div>    amount: '$459.99',

            <div className="font-medium">{info.getValue()}</div>    status: 'Completed',

            <div className="text-sm text-gray-500">{info.row.original.email}</div>    date: '2024-01-15'

          </div>  },

        </div>  {

      ),    id: '#3020',

    },    customer: 'Jane Smith',

    {    amount: '$229.50',

      header: 'Role',    status: 'Pending',

      accessorKey: 'role',    date: '2024-01-15'

      cell: (info: any) => {  },

        const role = info.getValue();  {

        const variant = role === 'Admin' ? 'danger' : role === 'Editor' ? 'warning' : 'info';    id: '#3019',

        return <Badge variant={variant}>{role}</Badge>;    customer: 'Mike Johnson',

      },    amount: '$89.99',

    },    status: 'Failed',

    {    date: '2024-01-14'

      header: 'Status',  },

      accessorKey: 'status',  {

      cell: (info: any) => {    id: '#3018',

        const status = info.getValue();    customer: 'Sarah Wilson',

        return (    amount: '$349.99',

          <Badge variant={status === 'Active' ? 'success' : 'secondary'}>    status: 'Completed',

            {status}    date: '2024-01-14'

          </Badge>  }

        );]

      },

    },const permissionCategories: PermissionCategory[] = [

    {  {

      header: 'Actions',    id: 'users',

      accessorKey: 'id',    name: 'User Management',

      cell: (info: any) => (    variant: 'primary',

        <div className="flex gap-2">    permissions: [

          <Button size="sm" variant="outline">Edit</Button>      { id: 'view-users', name: 'View Users', granted: true, variant: 'success' },

          <Button size="sm" variant="danger">Delete</Button>      { id: 'create-users', name: 'Create Users', granted: true, variant: 'success' },

        </div>      { id: 'edit-users', name: 'Edit Users', granted: true, variant: 'success' },

      ),      { id: 'delete-users', name: 'Delete Users', granted: false, variant: 'danger' },

    },    ],

  ];  },

  {

  // Order columns for DataTable    id: 'orders',

  const orderColumns = [    name: 'Order Management',

    { header: 'ID', accessorKey: 'id' },    variant: 'info',

    { header: 'Customer', accessorKey: 'customer' },    permissions: [

    { header: 'Product', accessorKey: 'product' },      { id: 'view-orders', name: 'View Orders', granted: true, variant: 'success' },

    { header: 'Amount', accessorKey: 'amount' },      { id: 'edit-orders', name: 'Edit Orders', granted: true, variant: 'success' },

    {      { id: 'refund-orders', name: 'Process Refunds', granted: false, variant: 'warning' },

      header: 'Status',      { id: 'delete-orders', name: 'Delete Orders', granted: false, variant: 'danger' },

      accessorKey: 'status',    ],

      cell: (info: any) => {  },

        const status = info.getValue();  {

        const variant =    id: 'content',

          status === 'Completed' ? 'success' : status === 'Processing' ? 'warning' : 'info';    name: 'Content Management',

        return <Badge variant={variant}>{status}</Badge>;    variant: 'secondary',

      },    permissions: [

    },      { id: 'view-content', name: 'View Content', granted: true, variant: 'success' },

  ];      { id: 'create-content', name: 'Create Content', granted: true, variant: 'success' },

      { id: 'edit-content', name: 'Edit Content', granted: false, variant: 'warning' },

  const menuItems = [      { id: 'publish-content', name: 'Publish Content', granted: false, variant: 'danger' },

    {    ],

      icon: (  },

        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">  {

          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />    id: 'settings',

        </svg>    name: 'System Settings',

      ),    variant: 'warning',

      label: 'Dashboard',    permissions: [

      isActive: activeSection === 'dashboard',      { id: 'view-settings', name: 'View Settings', granted: true, variant: 'success' },

      onClick: () => setActiveSection('dashboard'),      { id: 'edit-settings', name: 'Edit Settings', granted: false, variant: 'warning' },

    },      { id: 'manage-api', name: 'Manage API Keys', granted: false, variant: 'danger' },

    {      { id: 'system-maintenance', name: 'System Maintenance', granted: false, variant: 'danger' },

      icon: (    ],

        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">  },

          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />]

        </svg>

      ),export default function AdminPage() {

      label: 'Users',  const [activeSection, setActiveSection] = useState('dashboard')

      isActive: activeSection === 'users',  const [searchTerm, setSearchTerm] = useState('')

      onClick: () => setActiveSection('users'),  const [selectedRole, setSelectedRole] = useState('')

      badge: mockUsers.length.toString(),

    },  const stats = [

    {    {

      icon: (      name: 'Total Users',

        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">      value: '2,847',

          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />      change: '+12.5%',

        </svg>      changeType: 'positive' as const,

      ),      icon: UsersIcon,

      label: 'Orders',    },

      isActive: activeSection === 'orders',    {

      onClick: () => setActiveSection('orders'),      name: 'Total Revenue',

      badge: mockOrders.length.toString(),      value: '$54,329',

    },      change: '+8.2%',

    {      changeType: 'positive' as const,

      icon: (      icon: CurrencyDollarIcon,

        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">    },

          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />    {

        </svg>      name: 'Active Orders',

      ),      value: '1,247',

      label: 'Permissions',      change: '-3.1%',

      isActive: activeSection === 'permissions',      changeType: 'negative' as const,

      onClick: () => setActiveSection('permissions'),      icon: ShoppingCartIcon,

    },    },

    {    {

      icon: (      name: 'Conversion Rate',

        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">      value: '3.24%',

          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />      change: '+0.5%',

        </svg>      changeType: 'positive' as const,

      ),      icon: ChartBarIcon,

      label: 'Profile',    },

      isActive: activeSection === 'profile',  ]

      onClick: () => setActiveSection('profile'),

    },  const getStatusBadge = (status: string) => {

    {    switch (status) {

      icon: (      case 'Active':

        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">      case 'Completed':

          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />        return <Badge variant="success">{status}</Badge>

          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />      case 'Pending':

        </svg>        return <Badge variant="warning">{status}</Badge>

      ),      case 'Inactive':

      label: 'Settings',      case 'Failed':

      isActive: activeSection === 'settings',        return <Badge variant="danger">{status}</Badge>

      onClick: () => setActiveSection('settings'),      default:

    },        return <Badge variant="secondary">{status}</Badge>

  ];    }

  }

  return (

    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">  const userColumns = [

      {/* Header */}    {

      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">      key: 'user',

        <div className="px-6 py-4 flex items-center justify-between">      header: 'User',

          <div className="flex items-center gap-4">      render: (user: User) => (

            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Portal</h1>        <div className="flex items-center space-x-3">

            <Badge variant="primary">Dashboard</Badge>          <Avatar size="sm">{user.avatar}</Avatar>

          </div>          <div>

          <div className="flex items-center gap-4">            <div className="font-medium text-gray-900 dark:text-white">{user.name}</div>

            <Button            <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>

              variant="outline"          </div>

              size="sm"        </div>

              onClick={() => window.location.href = '/'}      ),

            >    },

              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">    {

                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />      key: 'role',

              </svg>      header: 'Role',

              Back to Home      render: (user: User) => (

            </Button>        <Badge variant={user.role === 'Admin' ? 'primary' : user.role === 'Editor' ? 'info' : 'secondary'}>

            <Avatar src="https://i.pravatar.cc/150?img=12" alt="Admin User" size="sm" />          {user.role}

          </div>        </Badge>

        </div>      ),

      </header>    },

    {

      <div className="flex">      key: 'status',

        {/* Sidebar */}      header: 'Status',

        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-[calc(100vh-73px)]">      render: (user: User) => getStatusBadge(user.status),

          <div className="p-4">    },

            <VerticalNavbar items={menuItems} />    {

          </div>      key: 'lastLogin',

        </aside>      header: 'Last Login',

      render: (user: User) => (

        {/* Main Content */}        <span className="text-sm text-gray-600 dark:text-gray-300">{user.lastLogin}</span>

        <main className="flex-1 p-6">      ),

          {/* Dashboard Section */}    },

          {activeSection === 'dashboard' && (    {

            <div className="space-y-6">      key: 'actions',

              <div>      header: 'Actions',

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h2>      render: (user: User) => (

                <p className="text-gray-600 dark:text-gray-400">Welcome to your admin dashboard</p>        <div className="flex items-center space-x-2">

              </div>          <Button size="sm" variant="outline" className="p-1">

            <EyeIcon className="w-4 h-4" />

              {/* Stats Cards */}          </Button>

              <Grid cols={4} gap="md">          <Button size="sm" variant="outline" className="p-1">

                <Card>            <PencilIcon className="w-4 h-4" />

                  <div className="p-6">          </Button>

                    <div className="flex items-center justify-between mb-2">          <Button size="sm" variant="outline" className="p-1 text-red-600 hover:text-red-700">

                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users</span>            <TrashIcon className="w-4 h-4" />

                      <Badge variant="primary">+12%</Badge>          </Button>

                    </div>        </div>

                    <div className="text-3xl font-bold text-gray-900 dark:text-white">1,234</div>      ),

                  </div>    },

                </Card>  ]

                <Card>

                  <div className="p-6">  const orderColumns = [

                    <div className="flex items-center justify-between mb-2">    {

                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Orders</span>      key: 'order',

                      <Badge variant="success">+8%</Badge>      header: 'Order ID',

                    </div>      render: (order: Order) => (

                    <div className="text-3xl font-bold text-gray-900 dark:text-white">856</div>        <span className="font-mono text-sm text-gray-900 dark:text-white">{order.id}</span>

                  </div>      ),

                </Card>    },

                <Card>    {

                  <div className="p-6">      key: 'customer',

                    <div className="flex items-center justify-between mb-2">      header: 'Customer',

                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Revenue</span>      render: (order: Order) => (

                      <Badge variant="warning">+15%</Badge>        <span className="font-medium text-gray-900 dark:text-white">{order.customer}</span>

                    </div>      ),

                    <div className="text-3xl font-bold text-gray-900 dark:text-white">$12,345</div>    },

                  </div>    {

                </Card>      key: 'amount',

                <Card>      header: 'Amount',

                  <div className="p-6">      render: (order: Order) => (

                    <div className="flex items-center justify-between mb-2">        <span className="font-semibold text-gray-900 dark:text-white">{order.amount}</span>

                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Active</span>      ),

                      <Badge variant="success">Live</Badge>    },

                    </div>    {

                    <div className="text-3xl font-bold text-gray-900 dark:text-white">432</div>      key: 'status',

                  </div>      header: 'Status',

                </Card>      render: (order: Order) => getStatusBadge(order.status),

              </Grid>    },

    {

              {/* Recent Activity */}      key: 'date',

              <Card>      header: 'Date',

                <div className="p-6">      render: (order: Order) => (

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>        <span className="text-sm text-gray-600 dark:text-gray-300">{order.date}</span>

                  <div className="space-y-4">      ),

                    <Alert variant="info" title="New user registered">    },

                      John Doe just created an account  ]

                    </Alert>

                    <Alert variant="success" title="Order completed">  const renderDashboard = () => (

                      Order #1234 has been shipped    <div className="space-y-6">

                    </Alert>      {/* Stats Cards */}

                    <Alert variant="warning" title="System update">      <Grid cols={{ base: 1, md: 2, lg: 4 }} gap="6">

                      Scheduled maintenance in 2 hours        {stats.map((stat) => (

                    </Alert>          <Card key={stat.name} className="p-6">

                  </div>            <div className="flex items-center justify-between">

                </div>              <div>

              </Card>                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">

            </div>                  {stat.name}

          )}                </p>

                <p className="text-2xl font-bold text-gray-900 dark:text-white">

          {/* Users Section */}                  {stat.value}

          {activeSection === 'users' && (                </p>

            <div className="space-y-6">                <div className="flex items-center mt-2">

              <div className="flex items-center justify-between">                  {stat.changeType === 'positive' ? (

                <div>                    <ArrowUpIcon className="w-4 h-4 text-green-500 mr-1" />

                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">User Management</h2>                  ) : (

                  <p className="text-gray-600 dark:text-gray-400">Manage users and their permissions</p>                    <ArrowDownIcon className="w-4 h-4 text-red-500 mr-1" />

                </div>                  )}

                <Button variant="primary">                  <span

                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">                    className={`text-sm font-medium ${

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />                      stat.changeType === 'positive'

                  </svg>                        ? 'text-green-600 dark:text-green-400'

                  Add User                        : 'text-red-600 dark:text-red-400'

                </Button>                    }`}

              </div>                  >

                    {stat.change}

              <Card>                  </span>

                <div className="p-6">                </div>

                  <DataTable              </div>

                    columns={userColumns}              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">

                    data={mockUsers}                <stat.icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />

                    enableSearch              </div>

                    enablePagination            </div>

                    pageSize={10}          </Card>

                  />        ))}

                </div>      </Grid>

              </Card>

            </div>      {/* Recent Activity */}

          )}      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <Card>

          {/* Orders Section */}          <Card.Header>

          {activeSection === 'orders' && (            <div className="flex items-center justify-between">

            <div className="space-y-6">              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">

              <div>                Recent Users

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Order Management</h2>              </h3>

                <p className="text-gray-600 dark:text-gray-400">View and manage orders</p>              <Button size="sm" variant="outline">

              </div>                View All

              </Button>

              <Card>            </div>

                <div className="p-6">          </Card.Header>

                  <DataTable          <Card.Body className="p-0">

                    columns={orderColumns}            <DataTable

                    data={mockOrders}              data={mockUsers.slice(0, 3)}

                    enableSearch              columns={userColumns.slice(0, 3)}

                    enablePagination              showPagination={false}

                    pageSize={10}            />

                  />          </Card.Body>

                </div>        </Card>

              </Card>

            </div>        <Card>

          )}          <Card.Header>

            <div className="flex items-center justify-between">

          {/* Permissions Section */}              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">

          {activeSection === 'permissions' && (                Recent Orders

            <div className="space-y-6">              </h3>

              <div>              <Button size="sm" variant="outline">

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Permission Management</h2>                View All

                <p className="text-gray-600 dark:text-gray-400">Configure role permissions</p>              </Button>

              </div>            </div>

          </Card.Header>

              <PermissionPanel          <Card.Body className="p-0">

                categories={permissionCategories}            <DataTable

                onPermissionChange={(categoryId, permissionId, enabled) => {              data={mockOrders.slice(0, 3)}

                  console.log('Permission changed:', { categoryId, permissionId, enabled });              columns={orderColumns}

                }}              showPagination={false}

              />            />

            </div>          </Card.Body>

          )}        </Card>

      </div>

          {/* Profile Section */}

          {activeSection === 'profile' && (      {/* Quick Actions */}

            <div className="space-y-6">      <Card>

              <div>        <Card.Header>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">User Profile</h2>          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">

                <p className="text-gray-600 dark:text-gray-400">Manage your profile and preferences</p>            Quick Actions

              </div>          </h3>

        </Card.Header>

              {/* Profile Information */}        <Card.Body>

              <Card>          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="p-6">            <Button variant="primary" className="w-full">

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Profile Information</h3>              <PlusIcon className="w-4 h-4 mr-2" />

                  <div className="flex items-start gap-6 mb-6">              Add New User

                    <Avatar src="https://i.pravatar.cc/150?img=12" alt="Admin User" size="lg" />            </Button>

                    <div className="flex-1">            <Button variant="outline" className="w-full">

                      <Button variant="outline" size="sm">Change Photo</Button>              <DocumentTextIcon className="w-4 h-4 mr-2" />

                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">              Generate Report

                        JPG, GIF or PNG. Max size 2MB            </Button>

                      </p>            <Button variant="outline" className="w-full">

                    </div>              <CogIcon className="w-4 h-4 mr-2" />

                  </div>              System Settings

                  <Grid cols={2} gap="md">            </Button>

                    <Input          </div>

                      label="First Name"        </Card.Body>

                      placeholder="Enter first name"      </Card>

                      defaultValue="Admin"    </div>

                      leftIcon={  )

                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />  const renderUsers = () => (

                        </svg>    <div className="space-y-6">

                      }      <div className="flex items-center justify-between">

                    />        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">

                    <Input          User Management

                      label="Last Name"        </h2>

                      placeholder="Enter last name"        <Button variant="primary">

                      defaultValue="User"          <PlusIcon className="w-4 h-4 mr-2" />

                      leftIcon={          Add User

                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">        </Button>

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />      </div>

                        </svg>

                      }      {/* Filters */}

                    />      <Card>

                    <Input        <Card.Body>

                      label="Email"          <div className="flex flex-col md:flex-row gap-4">

                      type="email"            <div className="flex-1">

                      placeholder="admin@example.com"              <Input

                      defaultValue="admin@example.com"                placeholder="Search users..."

                      leftIcon={                value={searchTerm}

                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">                onChange={(e) => setSearchTerm(e.target.value)}

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />                leftIcon={<MagnifyingGlassIcon className="w-4 h-4" />}

                        </svg>              />

                      }            </div>

                    />            <div className="w-full md:w-48">

                    <Input              <Select

                      label="Phone"                value={selectedRole}

                      type="tel"                onChange={(value) => setSelectedRole(value)}

                      placeholder="+1 234 567 8900"                placeholder="Filter by role"

                      defaultValue="+1 234 567 8900"                options={[

                      leftIcon={                  { value: '', label: 'All Roles' },

                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">                  { value: 'admin', label: 'Admin' },

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />                  { value: 'editor', label: 'Editor' },

                        </svg>                  { value: 'user', label: 'User' },

                      }                ]}

                    />              />

                  </Grid>            </div>

                  <div className="mt-6 flex gap-3">          </div>

                    <Button variant="primary">Save Changes</Button>        </Card.Body>

                    <Button variant="outline">Cancel</Button>      </Card>

                  </div>

                </div>      {/* Users Table */}

              </Card>      <Card>

        <Card.Body className="p-0">

              {/* Security Settings */}          <DataTable

              <Card>            data={mockUsers}

                <div className="p-6">            columns={userColumns}

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Security</h3>            searchable

                  <Grid cols={1} gap="md">            selectable

                    <Input            pagination={{

                      label="Current Password"              pageSize: 10,

                      type="password"              showSizeChanger: true,

                      placeholder="Enter current password"            }}

                      leftIcon={          />

                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">        </Card.Body>

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />      </Card>

                        </svg>    </div>

                      }  )

                    />

                    <Input  const renderOrders = () => (

                      label="New Password"    <div className="space-y-6">

                      type="password"      <div className="flex items-center justify-between">

                      placeholder="Enter new password"        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">

                      leftIcon={          Order Management

                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">        </h2>

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />        <div className="flex items-center space-x-2">

                        </svg>          <Button variant="outline">

                      }            Export

                    />          </Button>

                    <Input          <Button variant="primary">

                      label="Confirm New Password"            <PlusIcon className="w-4 h-4 mr-2" />

                      type="password"            New Order

                      placeholder="Confirm new password"          </Button>

                      leftIcon={        </div>

                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">      </div>

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />

                        </svg>      <Card>

                      }        <Card.Body className="p-0">

                    />          <DataTable

                  </Grid>            data={mockOrders}

                  <div className="mt-6">            columns={orderColumns}

                    <Button variant="primary">Update Password</Button>            searchable

                  </div>            selectable

                </div>            pagination={{

              </Card>              pageSize: 10,

              showSizeChanger: true,

              {/* Preferences */}            }}

              <Card>          />

                <div className="p-6">        </Card.Body>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Preferences</h3>      </Card>

                  <Grid cols={2} gap="md">    </div>

                    <Select  )

                      label="Language"

                      options={[  const renderPermissions = () => (

                        { value: 'en', label: 'English' },    <div className="space-y-6">

                        { value: 'vi', label: 'Tiếng Việt' },      <div className="flex items-center justify-between">

                        { value: 'ja', label: '日本語' },        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">

                      ]}          Permission Management

                      defaultValue="en"        </h2>

                    />        <Button variant="primary">

                    <Select          Save Changes

                      label="Timezone"        </Button>

                      options={[      </div>

                        { value: 'utc', label: 'UTC' },

                        { value: 'est', label: 'EST' },      <Alert variant="info">

                        { value: 'pst', label: 'PST' },        <div className="flex">

                        { value: 'jst', label: 'JST' },          <BellIcon className="w-5 h-5 mr-2" />

                      ]}          <div>

                      defaultValue="utc"            <p className="font-medium">Permission Management</p>

                    />            <p className="text-sm">

                  </Grid>              Manage user permissions and access controls for different system features.

                </div>              Changes will take effect immediately after saving.

              </Card>            </p>

          </div>

              {/* Activity Log */}        </div>

              <Card>      </Alert>

                <div className="p-6">

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Recent Activity</h3>      <Card>

                  <div className="space-y-4">        <Card.Body>

                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">          <PermissionPanel

                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>            categories={permissionCategories}

                      <div className="flex-1">            title="System Permissions"

                        <p className="text-sm font-medium text-gray-900 dark:text-white">Logged in from new device</p>            showAllPermissions={true}

                        <p className="text-xs text-gray-500 dark:text-gray-400">Chrome on Windows • 2 hours ago</p>            showCollapseToggle={true}

                      </div>            onPermissionChange={(categoryId, permissionId, granted) => {

                    </div>              console.log('Permission changed:', { categoryId, permissionId, granted })

                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">            }}

                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>          />

                      <div className="flex-1">        </Card.Body>

                        <p className="text-sm font-medium text-gray-900 dark:text-white">Password changed</p>      </Card>

                        <p className="text-xs text-gray-500 dark:text-gray-400">Security update • 1 day ago</p>    </div>

                      </div>  )

                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">  const renderSettings = () => (

                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>    <div className="space-y-6">

                      <div className="flex-1">      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">

                        <p className="text-sm font-medium text-gray-900 dark:text-white">Profile updated</p>        System Settings

                        <p className="text-xs text-gray-500 dark:text-gray-400">Personal information • 3 days ago</p>      </h2>

                      </div>

                    </div>      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                  </div>        <Card>

                </div>          <Card.Header>

              </Card>            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">

            </div>              General Settings

          )}            </h3>

          </Card.Header>

          {/* Settings Section */}          <Card.Body>

          {activeSection === 'settings' && (            <div className="space-y-4">

            <div className="space-y-6">              <div>

              <div>                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Settings</h2>                  Site Name

                <p className="text-gray-600 dark:text-gray-400">Configure system settings</p>                </label>

              </div>                <Input defaultValue="Admin Portal" />

              </div>

              {/* General Settings */}              <div>

              <Card>                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">

                <div className="p-6">                  Site Description

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">General Settings</h3>                </label>

                  <Grid cols={2} gap="md">                <Input defaultValue="Comprehensive admin dashboard" />

                    <Input              </div>

                      label="Site Name"              <div>

                      placeholder="Enter site name"                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">

                      defaultValue="Aki UI Admin"                  Timezone

                      leftIcon={                </label>

                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">                <Select

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />                  defaultValue="utc"

                        </svg>                  options={[

                      }                    { value: 'utc', label: 'UTC' },

                    />                    { value: 'est', label: 'Eastern Time' },

                    <Input                    { value: 'pst', label: 'Pacific Time' },

                      label="Contact Email"                  ]}

                      type="email"                />

                      placeholder="contact@example.com"              </div>

                      defaultValue="contact@example.com"            </div>

                      leftIcon={          </Card.Body>

                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">        </Card>

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />

                        </svg>        <Card>

                      }          <Card.Header>

                    />            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">

                    <Select              Security Settings

                      label="Default Role"            </h3>

                      options={[          </Card.Header>

                        { value: 'viewer', label: 'Viewer' },          <Card.Body>

                        { value: 'editor', label: 'Editor' },            <div className="space-y-4">

                        { value: 'admin', label: 'Admin' },              <div>

                      ]}                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">

                      defaultValue="viewer"                  Session Timeout (minutes)

                      leftIcon={                </label>

                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">                <Input type="number" defaultValue="30" />

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />              </div>

                        </svg>              <div>

                      }                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">

                    />                  Password Policy

                    <Input                </label>

                      label="Session Timeout"                <Select

                      type="number"                  defaultValue="strong"

                      placeholder="30"                  options={[

                      defaultValue="30"                    { value: 'basic', label: 'Basic (6+ characters)' },

                      leftIcon={                    { value: 'medium', label: 'Medium (8+ characters, mixed case)' },

                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">                    { value: 'strong', label: 'Strong (12+ characters, mixed case, numbers, symbols)' },

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />                  ]}

                        </svg>                />

                      }              </div>

                      rightIcon={<span className="text-gray-400 text-sm">min</span>}              <div>

                    />                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">

                  </Grid>                  Two-Factor Authentication

                  <div className="mt-6">                </label>

                    <Button variant="primary">Save Settings</Button>                <Select

                  </div>                  defaultValue="optional"

                </div>                  options={[

              </Card>                    { value: 'disabled', label: 'Disabled' },

                    { value: 'optional', label: 'Optional' },

              {/* Notification Settings */}                    { value: 'required', label: 'Required' },

              <Card>                  ]}

                <div className="p-6">                />

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Notifications</h3>              </div>

                  <div className="space-y-4">            </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">          </Card.Body>

                      <div>        </Card>

                        <p className="font-medium text-gray-900 dark:text-white">Email Notifications</p>      </div>

                        <p className="text-sm text-gray-500 dark:text-gray-400">Receive email updates</p>

                      </div>      <Card>

                      <input type="checkbox" defaultChecked className="w-5 h-5" />        <Card.Header>

                    </div>          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">

                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">            Danger Zone

                      <div>          </h3>

                        <p className="font-medium text-gray-900 dark:text-white">Push Notifications</p>        </Card.Header>

                        <p className="text-sm text-gray-500 dark:text-gray-400">Receive push notifications</p>        <Card.Body>

                      </div>          <div className="space-y-4">

                      <input type="checkbox" defaultChecked className="w-5 h-5" />            <Alert variant="warning">

                    </div>              <div className="flex">

                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">                <BellIcon className="w-5 h-5 mr-2" />

                      <div>                <div>

                        <p className="font-medium text-gray-900 dark:text-white">Weekly Reports</p>                  <p className="font-medium">Destructive Actions</p>

                        <p className="text-sm text-gray-500 dark:text-gray-400">Receive weekly analytics</p>                  <p className="text-sm">

                      </div>                    These actions cannot be undone. Please proceed with caution.

                      <input type="checkbox" className="w-5 h-5" />                  </p>

                    </div>                </div>

                  </div>              </div>

                </div>            </Alert>

              </Card>            <div className="flex flex-col sm:flex-row gap-4">

            </div>              <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">

          )}                Reset All Settings

        </main>              </Button>

      </div>              <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">

    </div>                Clear All Data

  );              </Button>

}            </div>

          </div>
        </Card.Body>
      </Card>
    </div>
  )

  const renderProfile = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        User Profile
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <Card className="lg:col-span-1">
          <Card.Body className="text-center">
            <div className="space-y-4">
              <div className="flex justify-center">
                <Avatar size="lg" className="w-24 h-24">👨‍💼</Avatar>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Admin User
                </h3>
                <p className="text-gray-600 dark:text-gray-400">System Administrator</p>
                <Badge variant="success" className="mt-2">Active</Badge>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <p><span className="font-medium">Joined:</span> January 2024</p>
                  <p><span className="font-medium">Last Login:</span> 2 hours ago</p>
                  <p><span className="font-medium">Role:</span> Super Admin</p>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

        {/* Profile Settings */}
        <Card className="lg:col-span-2">
          <Card.Header>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Profile Settings
            </h3>
          </Card.Header>
          <Card.Body>
            <div className="space-y-6">
              {/* Basic Information */}
              <div>
                <h4 className="text-md font-medium text-gray-900 dark:text-white mb-4">
                  Basic Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      First Name
                    </label>
                    <Input defaultValue="Admin" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Last Name
                    </label>
                    <Input defaultValue="User" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <Input type="email" defaultValue="admin@akiui.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <Input defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>
              </div>

              {/* Security */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h4 className="text-md font-medium text-gray-900 dark:text-white mb-4">
                  Security
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Current Password
                    </label>
                    <Input type="password" placeholder="Enter current password" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        New Password
                      </label>
                      <Input type="password" placeholder="Enter new password" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Confirm Password
                      </label>
                      <Input type="password" placeholder="Confirm new password" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h4 className="text-md font-medium text-gray-900 dark:text-white mb-4">
                  Preferences
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Language
                    </label>
                    <Select
                      defaultValue="en"
                      options={[
                        { value: 'en', label: 'English' },
                        { value: 'vi', label: 'Tiếng Việt' },
                        { value: 'fr', label: 'Français' },
                        { value: 'es', label: 'Español' },
                      ]}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Timezone
                    </label>
                    <Select
                      defaultValue="utc"
                      options={[
                        { value: 'utc', label: 'UTC' },
                        { value: 'est', label: 'Eastern Time' },
                        { value: 'pst', label: 'Pacific Time' },
                        { value: 'gmt+7', label: 'GMT+7 (Vietnam)' },
                      ]}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary">
                    Save Changes
                  </Button>
                  <Button variant="outline">
                    Cancel
                  </Button>
                  <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                    Delete Account
                  </Button>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* Activity Log */}
      <Card>
        <Card.Header>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Activity
          </h3>
        </Card.Header>
        <Card.Body>
          <div className="space-y-4">
            {[
              { action: 'Logged in', time: '2 hours ago', ip: '192.168.1.100' },
              { action: 'Updated user permissions', time: '1 day ago', ip: '192.168.1.100' },
              { action: 'Generated monthly report', time: '2 days ago', ip: '192.168.1.100' },
              { action: 'Modified system settings', time: '3 days ago', ip: '192.168.1.100' },
              { action: 'Logged in', time: '3 days ago', ip: '192.168.1.100' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-900 dark:text-white">{activity.action}</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {activity.time} • {activity.ip}
                </div>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  )

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: HomeIcon },
    { id: 'users', label: 'Users', icon: UsersIcon },
    { id: 'orders', label: 'Orders', icon: ShoppingCartIcon },
    { id: 'permissions', label: 'Permissions', icon: CogIcon },
    { id: 'profile', label: 'Profile', icon: UsersIcon },
    { id: 'settings', label: 'Settings', icon: CogIcon },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'users':
        return renderUsers()
      case 'orders':
        return renderOrders()
      case 'permissions':
        return renderPermissions()
      case 'profile':
        return renderProfile()
      case 'settings':
        return renderSettings()
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Admin Portal Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Admin Portal
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Aki UI Demo Dashboard
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.href = '/'}
              className="flex items-center space-x-2"
            >
              <HomeIcon className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
            <Button variant="outline" size="sm">
              <BellIcon className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Dropdown
              trigger={
                <Button variant="outline" className="flex items-center space-x-2">
                  <Avatar size="sm">👨‍💼</Avatar>
                  <span>Admin User</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </Button>
              }
              items={[
                { id: 'profile', label: 'Profile' },
                { id: 'settings', label: 'Account Settings' },
                { id: 'logout', label: 'Logout' },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <VerticalNavbar
          collapsible
          defaultCollapsed={false}
          className="border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
        >
          <div className="px-4 py-6 space-y-1">
            {menuItems.map((item) => (
              <VerticalNavbar.Item
                key={item.id}
                href="#"
                active={activeSection === item.id}
                icon={<item.icon className="w-5 h-5" />}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault()
                  setActiveSection(item.id)
                }}
              >
                {item.label}
              </VerticalNavbar.Item>
            ))}
          </div>
        </VerticalNavbar>

        {/* Main Content */}
        <div className="flex-1">
          <main className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {menuItems.find(item => item.id === activeSection)?.label || 'Dashboard'}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {activeSection === 'dashboard' && 'Overview of your admin portal'}
                {activeSection === 'users' && 'Manage system users and their permissions'}
                {activeSection === 'orders' && 'Track and manage customer orders'}
                {activeSection === 'permissions' && 'Configure user roles and permissions'}
                {activeSection === 'profile' && 'Manage your personal profile and account settings'}
                {activeSection === 'settings' && 'System configuration and preferences'}
              </p>
            </div>
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  )
}