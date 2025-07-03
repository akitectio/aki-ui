'use client'

import { Card } from '@/components/client-components'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function DataTablePage() {
  // Sample data for examples
  const sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'Pending' },
  ]

  return (
    <PageHeader
      title="DataTable"
      description="Advanced data table component with sorting, filtering, pagination, and selection features for displaying tabular data efficiently."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Import</h2>
          <CodeBlock language="typescript">
            {`import { DataTable } from '@/components/client-components'`}
          </CodeBlock>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    {sampleData.map((row) => (
                      <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                          {row.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {row.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {row.role}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            row.status === 'Active' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : row.status === 'Inactive'
                              ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          }`}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <CodeBlock language="typescript">
{`const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  // ... more data
]

const columns = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
  { key: 'role', header: 'Role', sortable: true },
  { key: 'status', header: 'Status', sortable: true },
]

<DataTable 
  data={data}
  columns={columns}
  pagination
  searchable
  selectable
/>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">🔍 Search & Filter</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Built-in search functionality with customizable filters for each column.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">🔄 Sorting</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Multi-column sorting with ascending/descending order indicators.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">📄 Pagination</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Efficient pagination with customizable page sizes and navigation.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">✅ Selection</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Row selection with checkboxes and bulk action support.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Advanced Usage</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Custom Cell Renderers</h3>
              <CodeBlock language="typescript">
{`const columns = [
  { 
    key: 'name', 
    header: 'Name', 
    cell: (value, row) => (
      <div className="flex items-center">
        <img className="w-8 h-8 rounded-full mr-3" src={row.avatar} alt="" />
        <span className="font-medium">{value}</span>
      </div>
    )
  },
  { 
    key: 'status', 
    header: 'Status',
    cell: (value) => (
      <Badge variant={value === 'Active' ? 'success' : 'error'}>
        {value}
      </Badge>
    )
  },
  {
    key: 'actions',
    header: 'Actions',
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
                      Column configuration array
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      pagination
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Enable pagination controls
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      searchable
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Enable global search functionality
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      selectable
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Enable row selection with checkboxes
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      pageSize
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
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      onRowClick
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                      function
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      -
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Callback when a row is clicked
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Example with Real Data</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <CodeBlock language="typescript">
{`import { useState, useEffect } from 'react'
import { DataTable, Badge, Button } from '@/components/client-components'

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
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email', sortable: true },
    { 
      key: 'role', 
      header: 'Role', 
      sortable: true,
      cell: (value) => (
        <Badge variant={value === 'admin' ? 'primary' : 'secondary'}>
          {value}
        </Badge>
      )
    },
    {
      key: 'actions',
      header: 'Actions',
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

  const handleRowClick = (row) => {
    console.log('Row clicked:', row)
  }

  const handleSelectionChange = (selectedRows) => {
    console.log('Selected rows:', selectedRows)
  }

  return (
    <DataTable
      data={users}
      columns={columns}
      loading={loading}
      pagination
      pageSize={20}
      searchable
      selectable
      onRowClick={handleRowClick}
      onSelectionChange={handleSelectionChange}
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
