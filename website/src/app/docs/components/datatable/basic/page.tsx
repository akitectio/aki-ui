'use client'

import { useState } from 'react'
import { DataTable, Card, Badge, Button } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function DataTablePage() {
  // Mock API function to simulate real data fetching
  const mockUserApi = {
    generateRealisticUsers: () => [
      {
        id: 1,
        name: 'Sarah Johnson',
        email: 'sarah.johnson@techcorp.com',
        phone: '+1 (555) 123-4567',
        role: 'Senior Developer',
        department: 'Engineering',
        status: 'Active',
        salary: 95000,
        joinDate: '2022-03-15',
        location: 'San Francisco, CA',
        avatar: 'https://i.pravatar.cc/40?img=1'
      },
      {
        id: 2,
        name: 'Michael Chen',
        email: 'michael.chen@techcorp.com',
        phone: '+1 (555) 234-5678',
        role: 'Product Manager',
        department: 'Product',
        status: 'Active',
        salary: 110000,
        joinDate: '2021-11-08',
        location: 'New York, NY',
        avatar: 'https://i.pravatar.cc/40?img=2'
      },
      {
        id: 3,
        name: 'Emily Rodriguez',
        email: 'emily.rodriguez@techcorp.com',
        phone: '+1 (555) 345-6789',
        role: 'UX Designer',
        department: 'Design',
        status: 'Active',
        salary: 78000,
        joinDate: '2023-01-20',
        location: 'Los Angeles, CA',
        avatar: 'https://i.pravatar.cc/40?img=3'
      },
      {
        id: 4,
        name: 'David Kim',
        email: 'david.kim@techcorp.com',
        phone: '+1 (555) 456-7890',
        role: 'DevOps Engineer',
        department: 'Engineering',
        status: 'On Leave',
        salary: 88000,
        joinDate: '2022-07-12',
        location: 'Seattle, WA',
        avatar: 'https://i.pravatar.cc/40?img=4'
      },
      {
        id: 5,
        name: 'Lisa Thompson',
        email: 'lisa.thompson@techcorp.com',
        phone: '+1 (555) 567-8901',
        role: 'Marketing Manager',
        department: 'Marketing',
        status: 'Active',
        salary: 72000,
        joinDate: '2021-09-05',
        location: 'Chicago, IL',
        avatar: 'https://i.pravatar.cc/40?img=5'
      },
      {
        id: 6,
        name: 'James Wilson',
        email: 'james.wilson@techcorp.com',
        phone: '+1 (555) 678-9012',
        role: 'Data Scientist',
        department: 'Analytics',
        status: 'Active',
        salary: 105000,
        joinDate: '2020-12-10',
        location: 'Boston, MA',
        avatar: 'https://i.pravatar.cc/40?img=6'
      },
      {
        id: 7,
        name: 'Rachel Green',
        email: 'rachel.green@techcorp.com',
        phone: '+1 (555) 789-0123',
        role: 'HR Specialist',
        department: 'Human Resources',
        status: 'Active',
        salary: 58000,
        joinDate: '2023-04-18',
        location: 'Austin, TX',
        avatar: 'https://i.pravatar.cc/40?img=7'
      },
      {
        id: 8,
        name: 'Alex Morgan',
        email: 'alex.morgan@techcorp.com',
        phone: '+1 (555) 890-1234',
        role: 'Sales Director',
        department: 'Sales',
        status: 'Inactive',
        salary: 125000,
        joinDate: '2019-06-22',
        location: 'Miami, FL',
        avatar: 'https://i.pravatar.cc/40?img=8'
      }
    ]
  }

  // Sample data for examples - now using realistic API-like data
  const sampleData = mockUserApi.generateRealisticUsers()

  const basicColumns = [
    {
      header: 'Name',
      accessor: 'name',
      sortable: true,
    },
    {
      header: 'Email', 
      accessor: 'email',
      sortable: true,
    },
    {
      header: 'Role',
      accessor: 'role', 
      sortable: true,
    },
    {
      header: 'Status',
      accessor: 'status',
      sortable: true,
      cell: (value: string) => (
        <Badge 
          variant={
            value === 'Active' ? 'success' :
            value === 'Inactive' ? 'error' : 'warning'
          }
        >
          {value}
        </Badge>
      )
    }
  ]

  return (
    <PageHeader
      title="DataTable - Basic"
      description="Essential data table component with core features like sorting, searching, and pagination for straightforward data display."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Import</h2>
          <CodeBlock language="typescript">
            {`import { DataTable } from '@akitectio/aki-ui'`}
          </CodeBlock>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <DataTable
                data={sampleData}
                columns={basicColumns}
                enablePagination={true}
                defaultPageSize={5}
                sortable={true}
                filterable={true}
                showFilters={false}
              />
              <CodeBlock language="typescript">
{`const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  // ... more data
]

const columns = [
  {
    header: 'Name',
    accessor: 'name',
    sortable: true,
  },
  {
    header: 'Email', 
    accessor: 'email',
    sortable: true,
  },
  {
    header: 'Role',
    accessor: 'role', 
    sortable: true,
  },
  {
    header: 'Status',
    accessor: 'status',
    sortable: true,
    cell: (value) => (
      <Badge variant={value === 'Active' ? 'success' : 'error'}>
        {value}
      </Badge>
    )
  }
]

<DataTable 
  data={data}
  columns={columns}
  enablePagination={true}
  defaultPageSize={5}
  sortable={true}
  filterable={true}
/>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">With Filters</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <DataTable
                data={sampleData}
                columns={basicColumns}
                enablePagination={true}
                defaultPageSize={5}
                sortable={true}
                filterable={true}
                showFilters={true}
              />
              <CodeBlock language="typescript">
{`<DataTable 
  data={data}
  columns={columns}
  enablePagination={true}
  defaultPageSize={5}
  sortable={true}
  filterable={true}
  showFilters={true} // Show filter inputs in header
/>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Custom Cell Renderers</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Advanced Column Configuration</h3>
              <CodeBlock language="typescript">
{`const columns = [
  { 
    header: 'Name',
    accessor: 'name',
    sortable: true,
    cell: (value, row) => (
      <div className="flex items-center">
        <img className="w-8 h-8 rounded-full mr-3" src={row.avatar} alt="" />
        <span className="font-medium">{value}</span>
      </div>
    )
  },
  { 
    header: 'Status',
    accessor: 'status',
    sortable: true,
    cell: (value) => (
      <Badge variant={value === 'Active' ? 'success' : 'error'}>
        {value}
      </Badge>
    )
  },
  {
    header: 'Actions',
    accessor: 'id',
    sortable: false,
    cell: (_, row) => (
      <div className="flex space-x-2">
        <Button size="sm" onClick={() => editUser(row.id)}>Edit</Button>
        <Button size="sm" variant="error" onClick={() => deleteUser(row.id)}>Delete</Button>
      </div>
    )
  }
]`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Prop
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Default
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      data
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                      Array&lt;object&gt;
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      []
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Array of data objects to display in the table
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      columns
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                      Array&lt;Column&gt;
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      []
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Column configuration array with header, accessor, and optional cell renderer
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      enablePagination
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      true
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Enable pagination controls
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      filterable
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      true
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Enable filtering functionality
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      sortable
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      true
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Enable column sorting
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      defaultPageSize
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      10
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Number of rows per page when pagination is enabled
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      showFilters
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Show filter inputs in table header
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      loading
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Show loading state
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Complete Example</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <CodeBlock language="typescript">
{`import { useState, useEffect } from 'react'
import { DataTable, Badge, Button } from '@akitectio/aki-ui'

function UserTable() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setLoading(true)
    const response = await fetch('/api/users')
    const data = await response.json()
    setUsers(data)
    setLoading(false)
  }

  const columns = [
    {
      header: 'Name',
      accessor: 'name',
      sortable: true,
    },
    {
      header: 'Email',
      accessor: 'email', 
      sortable: true,
    },
    { 
      header: 'Role',
      accessor: 'role',
      sortable: true,
      cell: (value) => (
        <Badge variant={value === 'admin' ? 'primary' : 'secondary'}>
          {value}
        </Badge>
      )
    },
    {
      header: 'Actions',
      accessor: 'id',
      sortable: false,
      cell: (_, row) => (
        <div className="flex space-x-2">
          <Button size="sm" onClick={() => editUser(row.id)}>
            Edit
          </Button>
          <Button size="sm" variant="error" onClick={() => deleteUser(row.id)}>
            Delete
          </Button>
        </div>
      )
    }
  ]

  return (
    <DataTable
      data={users}
      columns={columns}
      loading={loading}
      enablePagination={true}
      defaultPageSize={20}
      sortable={true}
      filterable={true}
      showFilters={true}
    />
  )
}`}
              </CodeBlock>
            </div>
          </Card>
        </section>
      </div>
    </PageHeader>
  )
}
