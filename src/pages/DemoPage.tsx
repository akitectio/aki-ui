import React, { useState } from 'react';
import { 
  VerticalNavbar,
  Button,
  Card,
  Badge,
  Avatar,
  Input,
  Alert,
  Spinner,
  DataTable,
  Modal,
  Dropdown,
  Tabs,
  Tab
} from '../lib';
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
  PresentationChartLineIcon,
  PlusIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  // Sample data for DataTable
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', avatar: null },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', avatar: null },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Editor', status: 'Inactive', avatar: null },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'User', status: 'Active', avatar: null },
    { id: 5, name: 'David Brown', email: 'david@example.com', role: 'Admin', status: 'Pending', avatar: null },
  ];

  const columns = [
    {
      key: 'name' as const,
      header: 'Name',
      render: (user: typeof users[0]) => (
        <div className="flex items-center space-x-3">
          <Avatar size="sm" name={user.name} />
          <span className="font-medium">{user.name}</span>
        </div>
      ),
    },
    {
      key: 'email' as const,
      header: 'Email',
      render: (user: typeof users[0]) => (
        <span className="text-gray-600">{user.email}</span>
      ),
    },
    {
      key: 'role' as const,
      header: 'Role',
      render: (user: typeof users[0]) => (
        <Badge 
          variant={user.role === 'Admin' ? 'danger' : user.role === 'Editor' ? 'warning' : 'info'}
        >
          {user.role}
        </Badge>
      ),
    },
    {
      key: 'status' as const,
      header: 'Status',
      render: (user: typeof users[0]) => (
        <Badge 
          variant={user.status === 'Active' ? 'success' : user.status === 'Inactive' ? 'danger' : 'warning'}
        >
          {user.status}
        </Badge>
      ),
    },
    {
      key: 'actions' as const,
      header: 'Actions',
      render: (user: typeof users[0]) => (
        <div className="flex items-center space-x-2">
          <Button size="sm" variant="ghost">
            <EyeIcon className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost">
            <PencilIcon className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost">
            <TrashIcon className="w-4 h-4" />
          </Button>
        </div>
      ),
    },
  ];

  const renderDashboardContent = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <PlusIcon className="w-4 h-4 mr-2" />
          Add New
        </Button>
      </div>

      <Alert variant="info">
        <div className="flex items-center space-x-2">
          <BellIcon className="w-5 h-5" />
          <span>You have 3 new notifications. Click to view them.</span>
        </div>
      </Alert>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">1,284</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <UserGroupIcon className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">+12% from last month</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Sales</p>
              <p className="text-2xl font-bold text-gray-900">$12,426</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CreditCardIcon className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">+8% from last month</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Orders</p>
              <p className="text-2xl font-bold text-gray-900">892</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <ShoppingCartIcon className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <p className="text-sm text-purple-600 mt-2">+23 new today</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Revenue</p>
              <p className="text-2xl font-bold text-gray-900">$8,426</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <PresentationChartLineIcon className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <p className="text-sm text-orange-600 mt-2">+15% from last week</p>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Avatar size="sm" name={`Customer ${item}`} />
                  <div>
                    <p className="font-medium text-gray-900">Order #{1000 + item}</p>
                    <p className="text-sm text-gray-600">Customer {item}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">${(Math.random() * 500 + 50).toFixed(2)}</p>
                  <Badge variant="success">Completed</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
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
        </Card>
      </div>
    </div>
  );

  const renderUsersContent = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users Management</h1>
          <p className="text-gray-600 mt-1">Manage your team members and their permissions.</p>
        </div>
        <Button>
          <PlusIcon className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Input 
          placeholder="Search users..." 
          className="flex-1"
        />
        <Dropdown>
          <Dropdown.Trigger asChild>
            <Button variant="outline">
              Filter by Role
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item>All Roles</Dropdown.Item>
            <Dropdown.Item>Admin</Dropdown.Item>
            <Dropdown.Item>Editor</Dropdown.Item>
            <Dropdown.Item>User</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </div>

      <Card>
        <DataTable
          data={users}
          columns={columns}
          selectedIds={selectedUsers}
          onSelectionChange={setSelectedUsers}
          selectable
          searchable
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
          }}
        />
      </Card>
    </div>
  );

  const renderAnalyticsContent = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-1">Track your performance and growth metrics.</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="revenue">Revenue</Tabs.Trigger>
          <Tabs.Trigger value="users">Users</Tabs.Trigger>
          <Tabs.Trigger value="products">Products</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="overview" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue Trend</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Chart placeholder</p>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Chart placeholder</p>
              </div>
            </Card>
          </div>
        </Tabs.Content>

        <Tabs.Content value="revenue" className="mt-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Analytics</h3>
            <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Revenue chart placeholder</p>
            </div>
          </Card>
        </Tabs.Content>

        <Tabs.Content value="users" className="mt-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">User Analytics</h3>
            <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">User analytics placeholder</p>
            </div>
          </Card>
        </Tabs.Content>

        <Tabs.Content value="products" className="mt-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Performance</h3>
            <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Product analytics placeholder</p>
            </div>
          </Card>
        </Tabs.Content>
      </Tabs>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboardContent();
      case 'users':
        return renderUsersContent();
      case 'analytics':
        return renderAnalyticsContent();
      default:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <Card className="p-8">
              <div className="text-center">
                <Spinner size="lg" className="mb-4" />
                <p className="text-gray-600">Loading {activeTab} content...</p>
              </div>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <VerticalNavbar variant="light" className="shadow-lg">
        <VerticalNavbar.Header>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h2 className="font-bold text-xl text-gray-900">Aki UI</h2>
              <p className="text-xs text-gray-500">Demo Dashboard</p>
            </div>
          </div>
        </VerticalNavbar.Header>

        <VerticalNavbar.Group title="Main Menu">
          <VerticalNavbar.Item 
            href="#" 
            active={activeTab === 'dashboard'}
            icon={<HomeIcon />}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </VerticalNavbar.Item>
          <VerticalNavbar.Item 
            href="#" 
            active={activeTab === 'analytics'}
            icon={<ChartBarIcon />}
            onClick={() => setActiveTab('analytics')}
          >
            Analytics
          </VerticalNavbar.Item>
          <VerticalNavbar.Item 
            href="#" 
            active={activeTab === 'reports'}
            icon={<DocumentTextIcon />}
            onClick={() => setActiveTab('reports')}
          >
            Reports
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Group title="Management">
          <VerticalNavbar.Item 
            href="#" 
            active={activeTab === 'users'}
            icon={<UserGroupIcon />}
            badge={<span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">5</span>}
            onClick={() => setActiveTab('users')}
          >
            Users
          </VerticalNavbar.Item>
          <VerticalNavbar.Item 
            href="#" 
            active={activeTab === 'products'}
            icon={<ShoppingCartIcon />}
            onClick={() => setActiveTab('products')}
          >
            Products
          </VerticalNavbar.Item>
          <VerticalNavbar.Item 
            href="#" 
            active={activeTab === 'orders'}
            icon={<CreditCardIcon />}
            badge={<span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">12</span>}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Group title="Tools">
          <VerticalNavbar.Item 
            href="#" 
            active={activeTab === 'calendar'}
            icon={<CalendarIcon />}
            onClick={() => setActiveTab('calendar')}
          >
            Calendar
          </VerticalNavbar.Item>
          <VerticalNavbar.Item 
            href="#" 
            active={activeTab === 'files'}
            icon={<FolderIcon />}
            onClick={() => setActiveTab('files')}
          >
            Files
          </VerticalNavbar.Item>
          <VerticalNavbar.Item 
            href="#" 
            active={activeTab === 'messages'}
            icon={<InboxIcon />}
            badge={<span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">3</span>}
            onClick={() => setActiveTab('messages')}
          >
            Messages
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Group title="System">
          <VerticalNavbar.Item 
            href="#" 
            active={activeTab === 'settings'}
            icon={<CogIcon />}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </VerticalNavbar.Item>
          <VerticalNavbar.Item 
            href="#" 
            active={activeTab === 'notifications'}
            icon={<BellIcon />}
            badge={<div className="w-2 h-2 bg-red-500 rounded-full"></div>}
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
          </VerticalNavbar.Item>
        </VerticalNavbar.Group>

        <VerticalNavbar.Footer>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <Avatar size="sm" name="John Doe" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                John Doe
              </p>
              <p className="text-xs text-gray-500 truncate">
                Admin
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
          {renderContent()}
        </div>
      </div>

      {/* Modal Example */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Add New Item"
      >
        <div className="space-y-4">
          <Input 
            label="Name"
            placeholder="Enter item name"
          />
          <Input 
            label="Description"
            placeholder="Enter description"
          />
          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DemoPage;
