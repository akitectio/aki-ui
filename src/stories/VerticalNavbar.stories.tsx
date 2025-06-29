import type { Meta, StoryObj } from '@storybook/react';
import { VerticalNavbar } from '../lib';
import { 
  HomeIcon, 
  ChartBarIcon, 
  DocumentTextIcon, 
  UserGroupIcon, 
  CogIcon,
  BellIcon,
  InboxIcon,
  CalendarIcon,
  FolderIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';

// Import custom icons từ thư mục riêng
import { 
  HomeIcon as CustomHomeIcon,
  ChartIcon as CustomChartIcon,
  DocumentIcon as CustomDocumentIcon,
  UsersIcon as CustomUsersIcon,
  SettingsIcon as CustomSettingsIcon
} from '../icons';

const meta: Meta<typeof VerticalNavbar> = {
  title: 'Components/VerticalNavbar',
  component: VerticalNavbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A vertical sidebar navigation component perfect for dashboards and admin panels.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'light', 'dark'],
      description: 'Visual variant of the navbar',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the navbar',
    },
    collapsible: {
      control: { type: 'boolean' },
      description: 'Whether the navbar is collapsible',
    },
    defaultCollapsed: {
      control: { type: 'boolean' },
      description: 'Whether the navbar is initially collapsed',
    },
    overlay: {
      control: { type: 'boolean' },
      description: 'Whether to show overlay on mobile',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex h-screen bg-gray-50">
      <VerticalNavbar>
        <VerticalNavbar.Header>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-lg">Aki UI</span>
          </div>
        </VerticalNavbar.Header>

        <VerticalNavbar.Group title="Main">
          <VerticalNavbar.Item href="/" active icon={<CustomHomeIcon />}>
            Dashboard
          </VerticalNavbar.Item>
          <VerticalNavbar.Item href="/analytics" icon={<CustomChartIcon />}>
            Analytics
          </VerticalNavbar.Item>
          <VerticalNavbar.Item href="/reports" icon={<CustomDocumentIcon />}>
            Reports
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Group title="Management">
          <VerticalNavbar.Item href="/users" icon={<CustomUsersIcon />}>
            Users
          </VerticalNavbar.Item>
          <VerticalNavbar.Item href="/settings" icon={<CustomSettingsIcon />}>
            Settings
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Footer>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                John Doe
              </p>
              <p className="text-xs text-gray-500 truncate">
                john@example.com
              </p>
            </div>
          </div>
        </VerticalNavbar.Footer>
      </VerticalNavbar>

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Main Content Area
        </h1>
        <p className="text-gray-600 mb-6">
          This is the main content area. The vertical navbar is on the left side.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Card {item}</h3>
              <p className="text-gray-600">
                This is a sample card to demonstrate the layout with vertical navbar.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <div className="flex h-screen bg-gray-50">
      <VerticalNavbar variant="dark">
        <VerticalNavbar.Header>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-lg text-white">Admin Panel</span>
          </div>
        </VerticalNavbar.Header>

        <VerticalNavbar.Group title="Dashboard">
          <VerticalNavbar.Item 
            href="/" 
            active 
            icon={<HomeIcon />}
            badge={<span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">New</span>}
          >
            Overview
          </VerticalNavbar.Item>
          <VerticalNavbar.Item 
            href="/analytics" 
            icon={<PresentationChartLineIcon />}
            badge={<span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Live</span>}
          >
            Analytics
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Group title="Communication">
          <VerticalNavbar.Item 
            href="/inbox" 
            icon={<InboxIcon />}
            badge={<span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center">5</span>}
          >
            Inbox
          </VerticalNavbar.Item>
          <VerticalNavbar.Item 
            href="/notifications" 
            icon={<BellIcon />}
            badge={<span className="bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center">12</span>}
          >
            Notifications
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Group title="Content">
          <VerticalNavbar.Item href="/calendar" icon={<CalendarIcon />}>
            Calendar
          </VerticalNavbar.Item>
          <VerticalNavbar.Item href="/documents" icon={<FolderIcon />}>
            Documents
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Footer>
          <div className="text-xs text-gray-400 text-center">
            v1.0.0 • © 2025 Aki UI
          </div>
        </VerticalNavbar.Footer>
      </VerticalNavbar>

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Dashboard with Badges
        </h1>
        <p className="text-gray-600">
          Notice the badges and counters in the navigation items.
        </p>
      </div>
    </div>
  ),
};

export const Collapsible: Story = {
  render: () => (
    <div className="flex h-screen bg-gray-50">
      <VerticalNavbar collapsible defaultCollapsed={false} variant="primary">
        <VerticalNavbar.Header collapsible>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-lg text-white">Aki UI</span>
          </div>
        </VerticalNavbar.Header>

        <VerticalNavbar.Group title="Navigation" collapsible defaultCollapsed={false}>
          <VerticalNavbar.Item href="/" active icon={<HomeIcon />}>
            Home
          </VerticalNavbar.Item>
          <VerticalNavbar.Item href="/products" icon={<ShoppingCartIcon />}>
            Products
          </VerticalNavbar.Item>
          <VerticalNavbar.Item href="/orders" icon={<CreditCardIcon />}>
            Orders
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Group title="Analytics" collapsible defaultCollapsed={true}>
          <VerticalNavbar.Item href="/reports" icon={<DocumentTextIcon />}>
            Reports
          </VerticalNavbar.Item>
          <VerticalNavbar.Item href="/insights" icon={<ChartBarIcon />}>
            Insights
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Group title="Settings">
          <VerticalNavbar.Item href="/profile" icon={<UserGroupIcon />}>
            Profile
          </VerticalNavbar.Item>
          <VerticalNavbar.Item href="/preferences" icon={<CogIcon />}>
            Preferences
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Footer>
          <div className="text-center">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Upgrade Plan
            </button>
          </div>
        </VerticalNavbar.Footer>
      </VerticalNavbar>

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Collapsible Navigation
        </h1>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">Features:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Click the collapse button to toggle the sidebar width</li>
            <li>• Collapsible groups can be expanded/collapsed independently</li>
            <li>• Icons remain visible when collapsed</li>
            <li>• Smooth animations for better user experience</li>
          </ul>
        </div>
        <p className="text-gray-600">
          Try collapsing the sidebar to see how it adapts. The main content area
          automatically adjusts to the available space.
        </p>
      </div>
    </div>
  ),
};

export const ECommerceDashboard: Story = {
  render: () => (
    <div className="flex h-screen bg-gray-50">
      <VerticalNavbar variant="light" size="lg">
        <VerticalNavbar.Header>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
              <ShoppingCartIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-xl text-gray-900">ShopAdmin</h2>
              <p className="text-xs text-gray-500">E-commerce Dashboard</p>
            </div>
          </div>
        </VerticalNavbar.Header>

        <VerticalNavbar.Group title="Overview">
          <VerticalNavbar.Item 
            href="/" 
            active 
            icon={<HomeIcon />}
            badge={<div className="w-2 h-2 bg-green-500 rounded-full"></div>}
          >
            Dashboard
          </VerticalNavbar.Item>
          <VerticalNavbar.Item 
            href="/analytics" 
            icon={<ChartBarIcon />}
          >
            Analytics
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Group title="Sales">
          <VerticalNavbar.Item 
            href="/orders" 
            icon={<CreditCardIcon />}
            badge={<span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">24</span>}
          >
            Orders
          </VerticalNavbar.Item>
          <VerticalNavbar.Item 
            href="/products" 
            icon={<ShoppingCartIcon />}
          >
            Products
          </VerticalNavbar.Item>
          <VerticalNavbar.Item 
            href="/customers" 
            icon={<UserGroupIcon />}
            badge={<span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">1.2k</span>}
          >
            Customers
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Group title="Content">
          <VerticalNavbar.Item href="/inventory" icon={<FolderIcon />}>
            Inventory
          </VerticalNavbar.Item>
          <VerticalNavbar.Item href="/reports" icon={<DocumentTextIcon />}>
            Reports
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Group title="System">
          <VerticalNavbar.Item href="/settings" icon={<CogIcon />}>
            Settings
          </VerticalNavbar.Item>
          <VerticalNavbar.Item disabled icon={<BellIcon />}>
            Notifications
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Footer>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-semibold text-sm">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                John Doe
              </p>
              <p className="text-xs text-gray-500 truncate">
                Store Manager
              </p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <CogIcon className="w-4 h-4" />
            </button>
          </div>
        </VerticalNavbar.Footer>
      </VerticalNavbar>

      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              E-commerce Dashboard
            </h1>
            <p className="text-gray-600">
              Welcome back! Here's what's happening with your store today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Sales</p>
                  <p className="text-2xl font-bold text-gray-900">$12,426</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CreditCardIcon className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <p className="text-sm text-green-600 mt-2">+12% from last month</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Orders</p>
                  <p className="text-2xl font-bold text-gray-900">184</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ShoppingCartIcon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <p className="text-sm text-blue-600 mt-2">+5% from last week</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Customers</p>
                  <p className="text-2xl font-bold text-gray-900">1,284</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <UserGroupIcon className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <p className="text-sm text-purple-600 mt-2">+8% from last month</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Products</p>
                  <p className="text-2xl font-bold text-gray-900">892</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FolderIcon className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <p className="text-sm text-orange-600 mt-2">+3 new this week</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Order #{1000 + item}</p>
                      <p className="text-sm text-gray-600">Customer {item}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">${(Math.random() * 500 + 50).toFixed(2)}</p>
                      <p className="text-sm text-green-600">Completed</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Products</h3>
              <div className="space-y-4">
                {['Wireless Headphones', 'Smart Watch', 'Laptop Stand', 'Phone Case'].map((product, index) => (
                  <div key={product} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                      <div>
                        <p className="font-medium text-gray-900">{product}</p>
                        <p className="text-sm text-gray-600">{120 - index * 20} sold</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">${(Math.random() * 200 + 50).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const MobileResponsive: Story = {
  render: () => (
    <div className="flex h-screen bg-gray-50">
      <VerticalNavbar overlay variant="secondary">
        <VerticalNavbar.Header>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-lg text-white">Mobile App</span>
          </div>
        </VerticalNavbar.Header>

        <VerticalNavbar.Group title="Main Menu">
          <VerticalNavbar.Item href="/" active icon={<HomeIcon />}>
            Home
          </VerticalNavbar.Item>
          <VerticalNavbar.Item href="/explore" icon={<ChartBarIcon />}>
            Explore
          </VerticalNavbar.Item>
          <VerticalNavbar.Item href="/favorites" icon={<DocumentTextIcon />}>
            Favorites
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Group title="Account">
          <VerticalNavbar.Item href="/profile" icon={<UserGroupIcon />}>
            Profile
          </VerticalNavbar.Item>
          <VerticalNavbar.Item href="/settings" icon={<CogIcon />}>
            Settings
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Footer>
          <div className="text-center">
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Sign Out
            </button>
          </div>
        </VerticalNavbar.Footer>
      </VerticalNavbar>

      <div className="flex-1 p-4 lg:p-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 lg:hidden">
          <h3 className="font-semibold text-blue-900 mb-2">Mobile Navigation Test</h3>
          <p className="text-sm text-blue-800">
            On mobile devices, tap the hamburger menu button (top-left) to open the navigation sidebar.
            The overlay will close the navigation when you tap outside of it.
          </p>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Mobile Responsive Navigation
        </h1>
        <p className="text-gray-600 mb-6">
          This example demonstrates how the vertical navbar adapts to different screen sizes.
          On desktop, it's always visible. On mobile, it slides in from the left with an overlay.
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3">Responsive Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Hidden by default on mobile (&lt; 1024px)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Hamburger menu button appears on mobile</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Slide-in animation with overlay</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Touch-friendly targets and spacing</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-sm border">
                <h4 className="font-semibold text-gray-900 mb-2">Content Block {item}</h4>
                <p className="text-gray-600 text-sm">
                  This content area demonstrates how the layout adapts when the navigation
                  is hidden on mobile devices.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

export const MinimalSidebar: Story = {
  render: () => (
    <div className="flex h-screen bg-gray-100">
      <VerticalNavbar 
        collapsible 
        defaultCollapsed={true}
        variant="light"
        width="280px"
        collapsedWidth="72px"
        className="shadow-lg border-r border-gray-200"
      >
        <VerticalNavbar.Header>
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">A</span>
            </div>
          </div>
        </VerticalNavbar.Header>

        <VerticalNavbar.Group>
          <VerticalNavbar.Item 
            href="/" 
            active 
            icon={<HomeIcon />}
            badge={<div className="w-2 h-2 bg-green-500 rounded-full"></div>}
          >
            Dashboard
          </VerticalNavbar.Item>
          <VerticalNavbar.Item 
            href="/analytics" 
            icon={<ChartBarIcon />}
          >
            Analytics
          </VerticalNavbar.Item>
          <VerticalNavbar.Item 
            href="/projects" 
            icon={<FolderIcon />}
            badge={<span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-medium">3</span>}
          >
            Projects
          </VerticalNavbar.Item>
          <VerticalNavbar.Item 
            href="/calendar" 
            icon={<CalendarIcon />}
          >
            Calendar
          </VerticalNavbar.Item>
          <VerticalNavbar.Item 
            href="/messages" 
            icon={<InboxIcon />}
            badge={<span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full font-medium">12</span>}
          >
            Messages
          </VerticalNavbar.Item>
          <VerticalNavbar.Item 
            href="/settings" 
            icon={<CogIcon />}
          >
            Settings
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Footer>
          <div className="flex items-center justify-center p-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                <span className="text-gray-700 font-semibold text-sm">JD</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
          </div>
        </VerticalNavbar.Footer>
      </VerticalNavbar>

      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Minimal Collapsible Sidebar
          </h1>
          <p className="text-gray-600 mb-8">
            This example shows a clean, minimal sidebar that starts in collapsed mode. 
            Click the expand button (top-right of sidebar) to see the full navigation labels.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <ChartBarIcon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Collapsed Mode Benefits</h3>
                  <p className="text-sm text-gray-500">Space-efficient navigation</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Maximizes content area space</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Icons provide quick visual recognition</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Easy to expand when needed</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Perfect for focused work environments</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <CogIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Interactive Features</h3>
                  <p className="text-sm text-gray-500">Smart sidebar functionality</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Smooth expand/collapse animations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span>Badge notifications support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Active state indicators</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span>Tooltip support for collapsed items</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <HomeIcon className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-900 mb-2">Try It Out!</h3>
                <p className="text-indigo-700 mb-3">
                  Interact with the sidebar to see how it behaves in different states:
                </p>
                <ul className="space-y-2 text-sm text-indigo-600">
                  <li>• Click the expand/collapse button in the top-right of the sidebar</li>
                  <li>• Notice how badges and indicators remain visible</li>
                  <li>• Observe the smooth animations during state transitions</li>
                  <li>• See how the main content area adjusts automatically</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const WithCustomIcons: Story = {
  render: () => (
    <div className="flex h-screen bg-gray-50">
      <VerticalNavbar variant="light" collapsible>
        <VerticalNavbar.Header>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-bold text-lg">Custom App</span>
          </div>
        </VerticalNavbar.Header>

        <VerticalNavbar.Group title="Navigation" icon={<CustomHomeIcon size={16} />}>
          <VerticalNavbar.Item href="/" active icon={<CustomHomeIcon />}>
            Dashboard
          </VerticalNavbar.Item>
          <VerticalNavbar.Item href="/analytics" icon={<CustomChartIcon />}>
            Analytics
          </VerticalNavbar.Item>
          <VerticalNavbar.Item href="/reports" icon={<CustomDocumentIcon />}>
            Reports
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Group title="Administration" collapsible>
          <VerticalNavbar.Item href="/users" icon={<CustomUsersIcon />}>
            User Management
          </VerticalNavbar.Item>
          <VerticalNavbar.Item href="/settings" icon={<CustomSettingsIcon />}>
            System Settings
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Footer>
          <div className="flex items-center space-x-3 p-2 bg-gray-100 rounded-lg">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                Jane Doe
              </p>
              <p className="text-xs text-gray-500 truncate">
                Admin
              </p>
            </div>
          </div>
        </VerticalNavbar.Footer>
      </VerticalNavbar>

      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Custom Icons Demo
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
            <h2 className="text-xl font-semibold mb-4">Hướng dẫn sử dụng icon riêng</h2>
            <div className="space-y-4 text-gray-600">
              <p><strong>Cách 1: Inline SVG Components</strong></p>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`const CustomIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="...your svg path"/>
  </svg>
);

<VerticalNavbar.Item icon={<CustomIcon />}>
  Menu Item
</VerticalNavbar.Item>`}
              </pre>
              
              <p><strong>Cách 2: Icon Components với Props</strong></p>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`// src/icons/index.tsx
export const MyIcon: React.FC<IconProps> = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} stroke={color}>
    <path d="..."/>
  </svg>
);

// Trong stories/component
import { MyIcon } from '../icons';
<VerticalNavbar.Item icon={<MyIcon />}>Menu</VerticalNavbar.Item>`}
              </pre>

              <p><strong>Cách 3: Import từ file SVG</strong></p>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`// Với Vite/React
import MyIconSVG from './assets/my-icon.svg?react';
<VerticalNavbar.Item icon={<MyIconSVG />}>Menu</VerticalNavbar.Item>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
