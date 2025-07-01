import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../lib';
import React from 'react';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive navigation bar component with brand, items, and mobile toggle functionality.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'light', 'dark', 'transparent'],
      description: 'Visual style variant of the navbar'
    },
    position: {
      control: 'select',
      options: ['static', 'fixed-top', 'fixed-bottom', 'sticky-top'],
      description: 'Positioning behavior of the navbar'
    },
    expand: {
      control: 'select',
      options: [true, false, 'sm', 'md', 'lg', 'xl'],
      description: 'When to expand on larger screens'
    },
    toggleable: {
      control: 'boolean',
      description: 'Whether to show mobile toggle button'
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50">
      <Navbar>
        <Navbar.Brand href="/">
          <div className="flex items-center space-x-2">
            <img src="/aki-ui-icon.png" alt="Logo" className="h-8 w-8" />
            <span className="font-bold text-xl">Aki UI</span>
          </div>
        </Navbar.Brand>
        <Navbar.Item href="/" active>Home</Navbar.Item>
        <Navbar.Item href="/about">About</Navbar.Item>
        <Navbar.Item href="/services">Services</Navbar.Item>
        <Navbar.Item href="/contact">Contact</Navbar.Item>
      </Navbar>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Page Content</h1>
        <p className="text-gray-600">
          This demonstrates the default navbar behavior. Try resizing your window to see the responsive behavior.
          On mobile devices, the navigation items will collapse into a hamburger menu.
        </p>
      </div>
    </div>
  ),
};

export const Primary: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant="primary">
        <Navbar.Brand href="/">
          <div className="flex items-center space-x-2">
            <img src="/aki-ui-icon.png" alt="Logo" className="h-8 w-8" />
            <span className="font-bold text-xl">Aki UI</span>
          </div>
        </Navbar.Brand>
        <Navbar.Item href="/" active>Home</Navbar.Item>
        <Navbar.Item href="/products">Products</Navbar.Item>
        <Navbar.Item href="/pricing">Pricing</Navbar.Item>
        <Navbar.Item href="/login">Login</Navbar.Item>
      </Navbar>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Primary Navbar</h1>
        <p className="text-gray-600">This shows the primary variant with a blue background.</p>
      </div>
    </div>
  ),
};

export const Dark: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant="dark">
        <Navbar.Brand href="/">
          <div className="flex items-center space-x-2">
            <img src="/aki-ui-icon.png" alt="Logo" className="h-8 w-8" />
            <span className="font-bold text-xl">Aki UI</span>
          </div>
        </Navbar.Brand>
        <Navbar.Item href="/" active>Dashboard</Navbar.Item>
        <Navbar.Item href="/analytics">Analytics</Navbar.Item>
        <Navbar.Item href="/reports">Reports</Navbar.Item>
        <Navbar.Item href="/settings">Settings</Navbar.Item>
      </Navbar>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Dark Navbar</h1>
        <p className="text-gray-600">This shows the dark variant with a dark background.</p>
      </div>
    </div>
  ),
};

export const FixedTop: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant="light" position="fixed-top">
        <Navbar.Brand href="/">
          <div className="flex items-center space-x-2">
            <img src="/aki-ui-icon.png" alt="Logo" className="h-8 w-8" />
            <span className="font-bold text-xl">Fixed Top</span>
          </div>
        </Navbar.Brand>
        <Navbar.Item href="/" active>Home</Navbar.Item>
        <Navbar.Item href="/features">Features</Navbar.Item>
        <Navbar.Item href="/docs">Documentation</Navbar.Item>
        <Navbar.Item href="/support">Support</Navbar.Item>
      </Navbar>
      <div className="pt-16 p-8">
        <h1 className="text-2xl font-bold mb-4">Fixed Top Navbar</h1>
        <p className="text-gray-600 mb-4">
          This navbar is fixed to the top of the viewport. Notice how the content starts below it.
        </p>
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="mb-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        ))}
      </div>
    </div>
  ),
};

export const ResponsiveTest: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant="primary">
        <Navbar.Brand href="/">
          <span className="font-bold text-xl">Responsive Test</span>
        </Navbar.Brand>
        <Navbar.Item href="/" active>Home</Navbar.Item>
        <Navbar.Item href="/dashboard">Dashboard</Navbar.Item>
        <Navbar.Item href="/analytics">Analytics</Navbar.Item>
        <Navbar.Item href="/reports">Reports</Navbar.Item>
        <Navbar.Item href="/team">Team</Navbar.Item>
        <Navbar.Item href="/settings">Settings</Navbar.Item>
        <Navbar.Item href="/help">Help</Navbar.Item>
      </Navbar>
      <div className="p-4 sm:p-6 lg:p-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Responsive Design Test</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Mobile (below 768px)</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Hamburger menu</li>
              <li>• Collapsible navigation</li>
              <li>• Full-width items</li>
              <li>• Smooth animations</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Tablet (768px - 1024px)</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Horizontal layout</li>
              <li>• Adequate spacing</li>
              <li>• Touch-friendly targets</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Desktop (&gt; 1024px)</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Full horizontal menu</li>
              <li>• Hover effects</li>
              <li>• Optimal spacing</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Testing Instructions:</h3>
          <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
            <li>Resize your browser window to see responsive behavior</li>
            <li>On mobile size (less than 768px), click the hamburger menu</li>
            <li>Test the smooth animations and transitions</li>
            <li>Verify touch targets are appropriately sized</li>
          </ol>
        </div>
      </div>
    </div>
  ),
};
