import React from 'react';
import {
    Button,
    Card,
    Badge,
    Avatar,
    DataTable,
    Input,
    Select,
    Switch,
    Alert,
    Breadcrumb,
    Grid,
    GridItem,
    HStack,
    VStack,
    Typography,
    Navbar
} from '../lib/components';
import { useRouter } from '../components/Router';
import { VERSION } from '../lib/version';
import {
    ArrowRightIcon,
    CodeBracketIcon,
    CubeIcon,
    ShieldCheckIcon,
    ChartBarIcon,
    UserGroupIcon,
    DocumentTextIcon,
    CogIcon,
    BellIcon,
    EyeIcon,
    PencilIcon,
    TrashIcon,
    PlayIcon,
    StarIcon,
    LightBulbIcon,
    RocketLaunchIcon,
    BoltIcon,
    SparklesIcon
} from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/20/solid';

const HomePage: React.FC = () => {
    const { navigate } = useRouter();

    return (
        <div className="bg-white">
            {/* Navigation */}
            <Navbar variant="light" className="border-b border-gray-200">
                <Navbar.Brand href="/">
                    <CubeIcon className="h-8 w-8 text-indigo-600" />
                    <span className="ml-2 text-xl font-bold text-gray-900">Aki UI</span>
                </Navbar.Brand>
                
                <Navbar.Item href="/docs">Documentation</Navbar.Item>
                <Navbar.Item href="/demo">Components</Navbar.Item>
                <Navbar.Item href="/templates">Templates</Navbar.Item>
                <Navbar.Item href="/playground">Playground</Navbar.Item>
                
                <div className="flex items-center space-x-4 ml-auto">
                    <Button variant="ghost" size="sm" onClick={() => window.open('https://github.com/akitectio/aki-ui', '_blank')}>
                        GitHub
                    </Button>
                    <Button variant="primary" size="sm" onClick={() => navigate('/docs')}>
                        Get Started
                    </Button>
                </div>
            </Navbar>

            {/* Hero Section */}
            <div className="relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="py-20 sm:py-24 lg:py-32">
                            <Typography variant="h1" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Rapidly build modern{' '}
                                <span className="text-indigo-600">websites</span>{' '}
                                without ever leaving your HTML.
                            </Typography>
                            <Typography variant="body1" className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                                A utility-first React component library packed with beautiful components like{' '}
                                <code className="text-sm font-semibold text-gray-900">Button</code>,{' '}
                                <code className="text-sm font-semibold text-gray-900">Card</code>, and{' '}
                                <code className="text-sm font-semibold text-gray-900">DataTable</code>{' '}
                                that can be composed to build any design, directly in your markup.
                            </Typography>
                            
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Button 
                                    variant="primary" 
                                    size="lg" 
                                    className="px-8 py-3"
                                    onClick={() => navigate('/docs')}
                                >
                                    Get started
                                </Button>
                                <Button 
                                    variant="ghost" 
                                    size="lg" 
                                    className="px-8 py-3"
                                    onClick={() => navigate('/demo')}
                                >
                                    <PlayIcon className="h-5 w-5 mr-2" />
                                    Live demo
                                </Button>
                            </div>

                            <div className="mt-8 flex items-center justify-center space-x-6 text-sm">
                                <div className="flex items-center text-gray-500">
                                    <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                                    36+ Components
                                </div>
                                <div className="flex items-center text-gray-500">
                                    <CheckIcon className="h-4 w-4 text-green-500 mr-1" />
                                    TypeScript Ready
                                </div>
                                <div className="flex items-center text-gray-500">
                                    <BoltIcon className="h-4 w-4 text-indigo-500 mr-1" />
                                    Tailwind CSS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Code Preview */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl">
                        <div className="rounded-2xl bg-gray-900 p-8 ring-1 ring-gray-900/10 shadow-2xl">
                            <div className="flex items-center mb-6">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="flex-1 text-center">
                                    <Typography variant="caption" className="text-gray-400">
                                        App.tsx
                                    </Typography>
                                </div>
                            </div>
                            <pre className="text-sm text-gray-300 overflow-x-auto">
                                <code>{`import { Button, Card, Badge, Grid } from '@akitectio/aki-ui';

function App() {
  return (
    <Grid cols={{ base: 1, md: 2, lg: 3 }} gap={6}>
      <Card className="p-6">
        <Card.Header>
          <h3 className="font-semibold">Project Alpha</h3>
          <Badge variant="success">Active</Badge>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600 mb-4">
            A modern web application built with Aki UI components.
          </p>
          <Button variant="primary" size="sm">
            View Details
          </Button>
        </Card.Body>
      </Card>
      {/* More cards... */}
    </Grid>
  );
}`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* Live Preview */}
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <Typography variant="h2" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            See it in action
                        </Typography>
                        <Typography variant="body1" className="mt-4 text-lg text-gray-600">
                            This is the actual result rendered in your browser.
                        </Typography>
                    </div>
                    
                    <div className="mx-auto max-w-6xl">
                        <Grid cols={{ base: 1, md: 2, lg: 3 }} gap={6}>
                            <Card className="p-6">
                                <Card.Header className="flex items-center justify-between mb-4">
                                    <Typography variant="h5" className="font-semibold">Project Alpha</Typography>
                                    <Badge variant="success">Active</Badge>
                                </Card.Header>
                                <Card.Body>
                                    <Typography variant="body2" className="text-gray-600 mb-4">
                                        A modern web application built with Aki UI components.
                                    </Typography>
                                    <Button variant="primary" size="sm">
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                            
                            <Card className="p-6">
                                <Card.Header className="flex items-center justify-between mb-4">
                                    <Typography variant="h5" className="font-semibold">Project Beta</Typography>
                                    <Badge variant="warning">In Progress</Badge>
                                </Card.Header>
                                <Card.Body>
                                    <Typography variant="body2" className="text-gray-600 mb-4">
                                        E-commerce platform with advanced features and integrations.
                                    </Typography>
                                    <Button variant="outline-primary" size="sm">
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                            
                            <Card className="p-6">
                                <Card.Header className="flex items-center justify-between mb-4">
                                    <Typography variant="h5" className="font-semibold">Project Gamma</Typography>
                                    <Badge variant="secondary">Planning</Badge>
                                </Card.Header>
                                <Card.Body>
                                    <Typography variant="body2" className="text-gray-600 mb-4">
                                        Mobile application with cross-platform compatibility.
                                    </Typography>
                                    <Button variant="ghost" size="sm">
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Grid>
                    </div>
                </div>
            </div>

            {/* Why Aki UI Section */}
            <div className="bg-gray-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <Typography variant="overline" className="text-indigo-600 font-semibold">
                            Why Aki UI?
                        </Typography>
                        <Typography variant="h2" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Built for the modern web.
                        </Typography>
                        <Typography variant="body1" className="mt-6 text-lg leading-8 text-gray-600">
                            Aki UI is unapologetically modern, and takes advantage of all the latest and greatest React features to make the developer experience as enjoyable as possible.
                        </Typography>
                    </div>
                                    A modern React UI component library built with TypeScript and Tailwind CSS.
                                    Build beautiful, accessible, and responsive applications with ease.
                                </p>

                                <div className="mt-8 flex items-center gap-4">
                                    <Badge variant="primary" className="text-sm">
                                        Current version: v{VERSION}
                                    </Badge>
                                </div>

                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <Button
                                            variant="primary"
                                            size="lg"
                                            className="w-full flex items-center justify-center px-8 py-3"
                                            onClick={() => navigate('/demo')}
                                        >
                                            Live Demo
                                            <ArrowRightIcon className="ml-2 h-5 w-5" />
                                        </Button>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <Button
                                            variant="outline-primary"
                                            size="lg"
                                            className="w-full flex items-center justify-center px-8 py-3"
                                            onClick={() => navigate('/docs')}
                                        >
                                            Documentation
                                        </Button>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="w-full flex items-center justify-center px-8 py-3"
                                            onClick={() => navigate('/templates')}
                                        >
                                            Templates
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <div className="h-56 w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
                        <div className="text-white text-center">
                            <CubeIcon className="h-24 w-24 mx-auto mb-4 opacity-80" />
                            <div className="text-lg font-semibold">Beautiful Components</div>
                        </div>
                    
                    <div className="mt-20">
                        <Grid cols={{ base: 1, md: 3 }} gap={8}>
                            {/* TypeScript Support */}
                            <div className="text-center">
                                <div className="mx-auto h-16 w-16 rounded-xl bg-indigo-100 flex items-center justify-center">
                                    <CodeBracketIcon className="h-8 w-8 text-indigo-600" />
                                </div>
                                <Typography variant="h6" className="mt-6 font-semibold text-gray-900">
                                    Built with TypeScript
                                </Typography>
                                <Typography variant="body2" className="mt-2 text-gray-600">
                                    Full TypeScript support with comprehensive type definitions for better developer experience and IntelliSense.
                                </Typography>
                            </div>

                            {/* Component Library */}
                            <div className="text-center">
                                <div className="mx-auto h-16 w-16 rounded-xl bg-green-100 flex items-center justify-center">
                                    <CubeIcon className="h-8 w-8 text-green-600" />
                                </div>
                                <Typography variant="h6" className="mt-6 font-semibold text-gray-900">
                                    36+ Components
                                </Typography>
                                <Typography variant="body2" className="mt-2 text-gray-600">
                                    Comprehensive component library with forms, navigation, data display, and interactive elements.
                                </Typography>
                            </div>

                            {/* Accessibility */}
                            <div className="text-center">
                                <div className="mx-auto h-16 w-16 rounded-xl bg-purple-100 flex items-center justify-center">
                                    <ShieldCheckIcon className="h-8 w-8 text-purple-600" />
                                </div>
                                <Typography variant="h6" className="mt-6 font-semibold text-gray-900">
                                    Accessible by Default
                                </Typography>
                                <Typography variant="body2" className="mt-2 text-gray-600">
                                    All components are built with accessibility in mind, following WCAG guidelines.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* Admin Template Showcase Section */}
            <div className="bg-gray-900 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center mb-12">
                        <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Showcase</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                            Admin Template Built with Aki UI
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                            See how easy it is to build a complete admin dashboard using our component library.
                        </p>
                    </div>

                    {/* Mini Admin Dashboard Preview */}
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                        {/* Dashboard Header */}
                        <div className="bg-indigo-600 px-6 py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="text-white font-bold text-lg">AdminPro Dashboard</div>
                                    <Breadcrumb className="text-indigo-200">
                                        <span className="text-indigo-200 hover:text-white cursor-pointer">Home</span>
                                        <span className="text-white">Dashboard</span>
                                    </Breadcrumb>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Button variant="outline-light" size="sm" className="text-white hover:bg-indigo-700">
                                        <BellIcon className="h-5 w-5" />
                                    </Button>
                                    <Avatar
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="Admin User"
                                        size="sm"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="p-6">
                            {/* Stats Cards */}
                            <Grid cols={{ base: 1, sm: 2, lg: 4 }} gap={6} className="mb-8">
                                <GridItem>
                                    <Card className="p-6">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <UserGroupIcon className="h-8 w-8 text-indigo-600" />
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">Total Users</dt>
                                                    <dd className="text-lg font-medium text-gray-900">71,897</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </Card>
                                </GridItem>
                                <GridItem>
                                    <Card className="p-6">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <ChartBarIcon className="h-8 w-8 text-green-600" />
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">Revenue</dt>
                                                    <dd className="text-lg font-medium text-gray-900">$58,445</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </Card>
                                </GridItem>
                                <GridItem>
                                    <Card className="p-6">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <DocumentTextIcon className="h-8 w-8 text-yellow-600" />
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">Orders</dt>
                                                    <dd className="text-lg font-medium text-gray-900">12,234</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </Card>
                                </GridItem>
                                <GridItem>
                                    <Card className="p-6">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <CogIcon className="h-8 w-8 text-red-600" />
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">Support Tickets</dt>
                                                    <dd className="text-lg font-medium text-gray-900">142</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </Card>
                                </GridItem>
                            </Grid>

                            {/* Dashboard Content Grid */}
                            <Grid cols={{ base: 1, lg: 3 }} gap={6}>
                                {/* Recent Users Table */}
                                <GridItem colSpan={{ base: 1, lg: 2 }}>
                                    <Card className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-lg font-medium text-gray-900">Recent Users</h3>
                                            <div className="flex items-center space-x-2">
                                                <Input
                                                    placeholder="Search users..."
                                                    size="sm"
                                                    className="w-48"
                                                />
                                                <Select
                                                    placeholder="Filter by role"
                                                    size="sm"
                                                    className="w-32"
                                                    options={[
                                                        { value: 'admin', label: 'Admin' },
                                                        { value: 'user', label: 'User' },
                                                        { value: 'moderator', label: 'Moderator' }
                                                    ]}
                                                />
                                            </div>
                                        </div>
                                        <DataTable
                                            data={[
                                                {
                                                    id: 1,
                                                    name: 'John Doe',
                                                    email: 'john@example.com',
                                                    role: 'Admin',
                                                    status: 'Active',
                                                    lastLogin: '2 hours ago'
                                                },
                                                {
                                                    id: 2,
                                                    name: 'Jane Smith',
                                                    email: 'jane@example.com',
                                                    role: 'User',
                                                    status: 'Active',
                                                    lastLogin: '1 day ago'
                                                },
                                                {
                                                    id: 3,
                                                    name: 'Mike Johnson',
                                                    email: 'mike@example.com',
                                                    role: 'Moderator',
                                                    status: 'Inactive',
                                                    lastLogin: '3 days ago'
                                                },
                                                {
                                                    id: 4,
                                                    name: 'Sarah Wilson',
                                                    email: 'sarah@example.com',
                                                    role: 'User',
                                                    status: 'Active',
                                                    lastLogin: '5 minutes ago'
                                                }
                                            ]}
                                            columns={[
                                                {
                                                    header: 'Name',
                                                    accessor: 'name',
                                                    cell: (value: any, row: any) => (
                                                        <div className="flex items-center">
                                                            <Avatar
                                                                fallback={value}
                                                                size="sm"
                                                                className="mr-3"
                                                            />
                                                            <div>
                                                                <div className="text-sm font-medium text-gray-900">{value}</div>
                                                                <div className="text-sm text-gray-500">{row.email}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                },
                                                {
                                                    header: 'Role',
                                                    accessor: 'role',
                                                    cell: (value: any) => (
                                                        <Badge
                                                            variant={value === 'Admin' ? 'primary' : value === 'Moderator' ? 'warning' : 'secondary'}
                                                        >
                                                            {value}
                                                        </Badge>
                                                    )
                                                },
                                                {
                                                    header: 'Status',
                                                    accessor: 'status',
                                                    cell: (value: any) => (
                                                        <Badge
                                                            variant={value === 'Active' ? 'success' : 'danger'}
                                                        >
                                                            {value}
                                                        </Badge>
                                                    )
                                                },
                                                {
                                                    header: 'Last Login',
                                                    accessor: 'lastLogin'
                                                },
                                                {
                                                    header: 'Actions',
                                                    accessor: 'actions',
                                                    cell: () => (
                                                        <HStack spacing={2}>
                                                            <Button variant="outline-info" size="sm">
                                                                <EyeIcon className="h-4 w-4" />
                                                            </Button>
                                                            <Button variant="outline-warning" size="sm">
                                                                <PencilIcon className="h-4 w-4" />
                                                            </Button>
                                                            <Button variant="outline-danger" size="sm">
                                                                <TrashIcon className="h-4 w-4" />
                                                            </Button>
                                                        </HStack>
                                                    )
                                                }
                                            ]}
                                        />
                                    </Card>
                                </GridItem>

                                {/* Settings Panel */}
                                <GridItem>
                                    <VStack spacing={6}>
                                        {/* Quick Actions */}
                                        <Card className="p-6 w-full">
                                            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
                                            <VStack spacing={3}>
                                                <Button variant="primary" className="w-full">
                                                    Create New User
                                                </Button>
                                                <Button variant="outline-primary" className="w-full">
                                                    Export Data
                                                </Button>
                                                <Button variant="outline-secondary" className="w-full">
                                                    System Backup
                                                </Button>
                                            </VStack>
                                        </Card>

                                        {/* System Settings */}
                                        <Card className="p-6 w-full">
                                            <h3 className="text-lg font-medium text-gray-900 mb-4">System Settings</h3>
                                            <VStack spacing={4}>
                                                <div className="flex items-center justify-between w-full">
                                                    <span className="text-sm text-gray-700">Email Notifications</span>
                                                    <Switch defaultChecked />
                                                </div>
                                                <div className="flex items-center justify-between w-full">
                                                    <span className="text-sm text-gray-700">Auto Backup</span>
                                                    <Switch defaultChecked />
                                                </div>
                                                <div className="flex items-center justify-between w-full">
                                                    <span className="text-sm text-gray-700">Maintenance Mode</span>
                                                    <Switch />
                                                </div>
                                                <div className="flex items-center justify-between w-full">
                                                    <span className="text-sm text-gray-700">Debug Mode</span>
                                                    <Switch />
                                                </div>
                                            </VStack>
                                        </Card>

                                        {/* System Status */}
                                        <Card className="p-6 w-full">
                                            <h3 className="text-lg font-medium text-gray-900 mb-4">System Status</h3>
                                            <VStack spacing={3}>
                                                <Alert variant="success" className="text-sm">
                                                    All systems operational
                                                </Alert>
                                                <div className="w-full">
                                                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                                                        <span>Server Load</span>
                                                        <span>23%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '23%' }}></div>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                                                        <span>Memory Usage</span>
                                                        <span>67%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                                                    </div>
                                                </div>
                                            </VStack>
                                        </Card>
                                    </VStack>
                                </GridItem>
                            </Grid>
                        </div>
                    </div>

                    {/* Features Used */}
                    <div className="mt-12">
                        <h3 className="text-xl font-semibold text-white text-center mb-8">
                            Components Used in This Admin Template
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {[
                                'Card', 'DataTable', 'Button', 'Input', 'Select', 'Avatar',
                                'Badge', 'Alert', 'Switch', 'Grid', 'Stack', 'Breadcrumb'
                            ].map((component) => (
                                <div key={component} className="bg-gray-800 rounded-lg p-3 text-center">
                                    <span className="text-indigo-300 text-sm font-medium">{component}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready to Build Your Own?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            This entire admin dashboard was built using just a handful of Aki UI components.
                            Get started today and create beautiful, functional interfaces in minutes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                variant="primary"
                                size="lg"
                                className="px-8 py-3"
                                onClick={() => navigate('/docs')}
                            >
                                Start Building
                                <ArrowRightIcon className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                variant="outline-light"
                                size="lg"
                                className="px-8 py-3"
                                onClick={() => navigate('/templates')}
                            >
                                View Templates
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Start Section */}
            <div className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Quick Start</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Get up and running in minutes
                        </p>
                    </div>

                    <div className="mt-10 max-w-3xl mx-auto">
                        <Card className="p-6">
                            <h3 className="text-lg font-semibold mb-4">Installation</h3>
                            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                                npm install @akitectio/aki-ui
                            </div>

                            <h3 className="text-lg font-semibold mb-4 mt-6">Usage</h3>
                            <div className="bg-gray-900 rounded-lg p-4 text-gray-100 font-mono text-sm">
                                <div className="text-blue-400">import</div>{' '}
                                <span className="text-yellow-300">{'{ Button, Card }'}</span>{' '}
                                <div className="text-blue-400">from</div>{' '}
                                <span className="text-green-400">'@akitectio/aki-ui'</span>
                                <br /><br />
                                <div className="text-purple-400">function</div>{' '}
                                <span className="text-yellow-300">App</span>() {'{'}
                                <br />
                                <span className="ml-4">
                                    <div className="text-blue-400">return</div> (
                                    <br />
                                    <span className="ml-4 text-red-400">{'<Button variant="primary">Hello World</Button>'}</span>
                                    <br />
                                    )
                                </span>
                                <br />
                                {'}'}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                    <div className="flex justify-center space-x-6 md:order-2">
                        <a href="https://github.com/akitectio/aki-ui" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">GitHub</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1">
                        <p className="text-center text-base text-gray-400">
                            &copy; 2025 Akitect.io. Built with ❤️ using Aki UI.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
