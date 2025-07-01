'use client'

import { useState } from 'react'
import { DataTable, Card, Badge, Button } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function ResponsiveDataTablePage() {
  // Sample data optimized for responsive display
  const sampleData = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234 567 8901',
      role: 'Admin',
      department: 'IT',
      salary: 85000,
      status: 'Active',
      hireDate: '2023-01-15',
      location: 'New York, NY'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 234 567 8902',
      role: 'Developer',
      department: 'Engineering',
      salary: 75000,
      status: 'Active',
      hireDate: '2023-02-20',
      location: 'San Francisco, CA'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+1 234 567 8903',
      role: 'Designer',
      department: 'Design',
      salary: 70000,
      status: 'Inactive',
      hireDate: '2023-03-10',
      location: 'Los Angeles, CA'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      phone: '+1 234 567 8904',
      role: 'Manager',
      department: 'Sales',
      salary: 90000,
      status: 'Active',
      hireDate: '2023-04-05',
      location: 'Chicago, IL'
    },
    {
      id: 5,
      name: 'Tom Brown',
      email: 'tom@example.com',
      phone: '+1 234 567 8905',
      role: 'Analyst',
      department: 'Finance',
      salary: 65000,
      status: 'Active',
      hireDate: '2023-05-12',
      location: 'Boston, MA'
    }
  ]

  // Basic responsive columns
  const basicColumns = [
    {
      accessor: 'name',
      header: 'Name',
      cell: (value: string) => (
        <span className="font-medium text-gray-900">{value}</span>
      ),
      priority: 1 // Always visible
    },
    {
      accessor: 'email',
      header: 'Email',
      cell: (value: string) => (
        <span className="text-blue-600">{value}</span>
      ),
      priority: 2 // Hidden on mobile
    },
    {
      accessor: 'role',
      header: 'Role',
      cell: (value: string) => (
        <Badge variant={value === 'Admin' ? 'destructive' : 'default'}>
          {value}
        </Badge>
      ),
      priority: 1 // Always visible
    },
    {
      accessor: 'department',
      header: 'Department',
      priority: 3 // Hidden on tablet and below
    },
    {
      accessor: 'status',
      header: 'Status',
      cell: (value: string) => (
        <Badge variant={value === 'Active' ? 'success' : 'secondary'}>
          {value}
        </Badge>
      ),
      priority: 2 // Hidden on mobile
    }
  ]

  // Responsive columns with breakpoint customization
  const customColumns = [
    {
      accessor: 'name',
      header: 'Employee',
      cell: (value: string, row: any) => (
        <div className="flex flex-col">
          <span className="font-medium text-gray-900">{value}</span>
          <span className="text-sm text-gray-500 md:hidden">{row.email}</span>
        </div>
      ),
      className: 'min-w-[180px]'
    },
    {
      accessor: 'email',
      header: 'Email',
      cell: (value: string) => (
        <span className="text-blue-600">{value}</span>
      ),
      className: 'hidden md:table-cell'
    },
    {
      accessor: 'phone',
      header: 'Phone',
      className: 'hidden lg:table-cell'
    },
    {
      accessor: 'role',
      header: 'Role',
      cell: (value: string) => (
        <Badge variant={value === 'Admin' ? 'destructive' : 'default'}>
          {value}
        </Badge>
      )
    },
    {
      accessor: 'salary',
      header: 'Salary',
      cell: (value: number) => (
        <span className="font-mono text-green-600">
          ${value.toLocaleString()}
        </span>
      ),
      className: 'hidden xl:table-cell text-right'
    },
    {
      accessor: 'status',
      header: 'Status',
      cell: (value: string) => (
        <Badge variant={value === 'Active' ? 'success' : 'secondary'}>
          {value}
        </Badge>
      ),
      className: 'hidden sm:table-cell'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader
        title="Responsive DataTable"
        description="Learn how to implement responsive DataTable that adapts to different screen sizes"
      />

      <div className="space-y-8">
        {/* Basic Responsive Example */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Basic Responsive Table</h2>
          <p className="text-gray-600 mb-4">
            This example shows a DataTable that automatically hides less important columns on smaller screens.
          </p>

          <DataTable
            data={sampleData}
            columns={basicColumns}
            enablePagination={true}
            defaultPageSize={5}
          />

          <CodeBlock className="mt-4">
            {`import { DataTable, Badge } from '@akitectio/aki-ui'

const columns = [
  {
    accessor: 'name',
    header: 'Name',
    cell: (value: string) => (
      <span className="font-medium text-gray-900">{value}</span>
    ),
    priority: 1 // Always visible
  },
  {
    accessor: 'email',
    header: 'Email',
    cell: (value: string) => (
      <span className="text-blue-600">{value}</span>
    ),
    priority: 2 // Hidden on mobile
  },
  {
    accessor: 'role',
    header: 'Role',
    cell: (value: string) => (
      <Badge variant={value === 'Admin' ? 'destructive' : 'default'}>
        {value}
      </Badge>
    ),
    priority: 1 // Always visible
  }
]

<DataTable
  data={data}
  columns={columns}
  enablePagination={true}
  defaultPageSize={5}
/>`}
          </CodeBlock>
        </Card>

        {/* Custom Responsive Example */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Custom Responsive Behavior</h2>
          <p className="text-gray-600 mb-4">
            This example demonstrates custom responsive behavior using Tailwind CSS classes
            to control column visibility at different breakpoints.
          </p>

          <DataTable
            data={sampleData}
            columns={customColumns}
            enablePagination={true}
            defaultPageSize={5}
          />

          <CodeBlock className="mt-4">
            {`import { DataTable, Badge } from '@akitectio/aki-ui'

const columns = [
  {
    accessor: 'name',
    header: 'Employee',
    cell: (value: string, row: any) => (
      <div className="flex flex-col">
        <span className="font-medium text-gray-900">{value}</span>
        <span className="text-sm text-gray-500 md:hidden">{row.email}</span>
      </div>
    ),
    className: 'min-w-[180px]'
  },
  {
    accessor: 'email',
    header: 'Email',
    cell: (value: string) => (
      <span className="text-blue-600">{value}</span>
    ),
    className: 'hidden md:table-cell' // Hidden on mobile
  },
  {
    accessor: 'phone',
    header: 'Phone',
    className: 'hidden lg:table-cell' // Hidden on tablet and below
  },
  {
    accessor: 'role',
    header: 'Role',
    cell: (value: string) => (
      <Badge variant={value === 'Admin' ? 'destructive' : 'default'}>
        {value}
      </Badge>
    )
  },
  {
    accessor: 'salary',
    header: 'Salary',
    cell: (value: number) => (
      <span className="font-mono text-green-600">
        \${value.toLocaleString()}
      </span>
    ),
    className: 'hidden xl:table-cell text-right' // Hidden on large and below
  }
]

<DataTable
  data={data}
  columns={columns}
  enablePagination={true}
  defaultPageSize={5}
/>`}
          </CodeBlock>
        </Card>

        {/* Responsive Breakpoints */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Responsive Breakpoints</h2>
          <p className="text-gray-600 mb-4">
            Understanding Tailwind CSS responsive breakpoints for optimal table display:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Breakpoint</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Class</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Min Width</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Recommended Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Mobile</td>
                  <td className="border border-gray-300 px-4 py-2 font-mono">sm:hidden</td>
                  <td className="border border-gray-300 px-4 py-2">&lt; 640px</td>
                  <td className="border border-gray-300 px-4 py-2">Show only essential columns</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Tablet</td>
                  <td className="border border-gray-300 px-4 py-2 font-mono">md:table-cell</td>
                  <td className="border border-gray-300 px-4 py-2">≥ 768px</td>
                  <td className="border border-gray-300 px-4 py-2">Add secondary information</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Laptop</td>
                  <td className="border border-gray-300 px-4 py-2 font-mono">lg:table-cell</td>
                  <td className="border border-gray-300 px-4 py-2">≥ 1024px</td>
                  <td className="border border-gray-300 px-4 py-2">Show additional details</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Desktop</td>
                  <td className="border border-gray-300 px-4 py-2 font-mono">xl:table-cell</td>
                  <td className="border border-gray-300 px-4 py-2">≥ 1280px</td>
                  <td className="border border-gray-300 px-4 py-2">Full information display</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock className="mt-4">
            {`// Column visibility at different breakpoints
const columns = [
  // Always visible
  { accessor: 'name', header: 'Name' },
  
  // Hidden on mobile (< 640px)
  { accessor: 'email', header: 'Email', className: 'hidden sm:table-cell' },
  
  // Hidden on tablet and below (< 768px)
  { accessor: 'phone', header: 'Phone', className: 'hidden md:table-cell' },
  
  // Hidden on laptop and below (< 1024px)
  { accessor: 'department', header: 'Department', className: 'hidden lg:table-cell' },
  
  // Hidden on desktop and below (< 1280px)
  { accessor: 'salary', header: 'Salary', className: 'hidden xl:table-cell' }
]`}
          </CodeBlock>
        </Card>

        {/* Best Practices */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Best Practices</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">1. Priority-Based Column Hiding</h3>
              <p className="text-gray-600">
                Define column priorities and hide less important columns first. Always keep 
                the most essential information visible.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">2. Responsive Cell Content</h3>
              <p className="text-gray-600">
                Combine multiple pieces of information in a single cell on smaller screens 
                to maintain context without overwhelming the interface.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">3. Horizontal Scrolling</h3>
              <p className="text-gray-600">
                For tables with many columns, consider adding horizontal scrolling as a 
                fallback option using <code className="bg-gray-100 px-1 rounded">overflow-x-auto</code>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">4. Progressive Enhancement</h3>
              <p className="text-gray-600">
                Start with mobile-first design and progressively enhance the table with 
                more columns and features as screen size increases.
              </p>
            </div>
          </div>

          <CodeBlock className="mt-4">
            {`// Mobile-first responsive design
const mobileFirstColumns = [
  // Base mobile layout
  {
    accessor: 'name',
    header: 'User',
    cell: (value: string, row: any) => (
      <div>
        <div className="font-medium">{value}</div>
        <div className="text-sm text-gray-500 sm:hidden">
          {row.role} • {row.status}
        </div>
      </div>
    )
  },
  
  // Progressive enhancement for larger screens
  {
    accessor: 'role',
    header: 'Role',
    className: 'hidden sm:table-cell'
  },
  {
    accessor: 'status',
    header: 'Status',
    className: 'hidden sm:table-cell'
  },
  {
    accessor: 'email',
    header: 'Email',
    className: 'hidden md:table-cell'
  }
]`}
          </CodeBlock>
        </Card>
      </div>
    </div>
  )
}
