'use client'

import { useState } from 'react'
import { DataTable, Card, Badge, Button } from '@/components/client-components'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function DataTableAdvancedPage() {
  // Mock enterprise API data
  const mockEnterpriseApi = {
    generateEmployeeData: (count: number = 50) => {
      const companies = ['TechCorp', 'DataSoft', 'CloudSys', 'DevCorp', 'WebTech']
      const teams = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta']
      const projects = ['Phoenix', 'Titan', 'Neptune', 'Apollo', 'Orion', 'Nexus']
      const skills = ['React', 'Vue', 'Angular', 'Node.js', 'Python', 'Java', 'AWS', 'Docker', 'K8s']
      
      return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        employeeId: `EMP${String(i + 1).padStart(4, '0')}`,
        name: `${['Alex', 'Morgan', 'Jordan', 'Casey', 'Taylor', 'Jamie', 'Avery', 'Riley', 'Sage', 'Quinn'][i % 10]} ${['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'][Math.floor(i / 10) % 10]}`,
        email: `employee${i + 1}@${companies[i % companies.length].toLowerCase()}.com`,
        role: ['Senior Engineer', 'Tech Lead', 'Staff Engineer', 'Principal Engineer', 'Engineering Manager', 'Product Manager', 'Designer', 'Data Scientist'][i % 8],
        level: ['L3', 'L4', 'L5', 'L6', 'L7'][Math.min(Math.floor(i / 10), 4)],
        team: teams[i % teams.length],
        project: projects[i % projects.length],
        status: ['Active', 'On Leave', 'Remote', 'Probation'][i % 4 === 3 ? 3 : i % 3],
        salary: 80000 + (i * 2500) + Math.floor((crypto.getRandomValues(new Uint32Array(1))[0] / (2 ** 32)) * 30000),
        department: ['Engineering', 'Product', 'Design', 'Data', 'DevOps', 'QA'][i % 6],
        location: ['San Francisco', 'New York', 'Remote', 'London', 'Berlin', 'Tokyo'][i % 6],
        joinDate: new Date(2018 + Math.floor(i / 12), (i * 3) % 12, (i % 28) + 1).toISOString().split('T')[0],
        lastActive: new Date(Date.now() - (crypto.getRandomValues(new Uint32Array(1))[0] / (2 ** 32)) * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        performance: Math.max(60, Math.min(100, 75 + Math.floor((crypto.getRandomValues(new Uint32Array(1))[0] / (2 ** 32)) * 30) - 15)),
        skillsCount: Math.floor((crypto.getRandomValues(new Uint32Array(1))[0] / (2 ** 32)) * 6) + 2,
        primarySkill: skills[i % skills.length],
        yearsExp: Math.min(15, Math.floor((Date.now() - new Date(2018 + Math.floor(i / 12), 0, 1).getTime()) / (365 * 24 * 60 * 60 * 1000)) + Math.floor((crypto.getRandomValues(new Uint32Array(1))[0] / (2 ** 32)) * 5)),
        projectsCompleted: Math.floor((crypto.getRandomValues(new Uint32Array(1))[0] / (2 ** 32)) * 20) + 1,
        avatar: `https://i.pravatar.cc/40?img=${(i % 70) + 1}`,
        certifications: Math.floor((crypto.getRandomValues(new Uint32Array(1))[0] / (2 ** 32)) * 4),
        isRemote: (crypto.getRandomValues(new Uint32Array(1))[0] / (2 ** 32)) > 0.6,
        contractType: ['Full-time', 'Part-time', 'Contractor', 'Intern'][i % 20 === 19 ? 3 : i % 15 === 14 ? 2 : i % 10 === 9 ? 1 : 0]
      }))
    }
  }

  // Extended sample data for advanced examples - now using realistic enterprise data
  const advancedData = mockEnterpriseApi.generateEmployeeData()

  const [selectedRows, setSelectedRows] = useState<React.Key[]>([])

  // Advanced columns with custom renderers
  const advancedColumns = [
    {
      header: 'Name',
      accessor: 'name',
      sortable: true,
      cell: (value: string, row: any) => (
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
            {value.charAt(0)}
          </div>
          <span className="font-medium">{value}</span>
        </div>
      )
    },
    {
      header: 'Contact',
      accessor: 'email',
      sortable: true,
      cell: (value: string, row: any) => (
        <div>
          <div className="font-medium">{value}</div>
          <div className="text-sm text-gray-500">{row.department}</div>
        </div>
      )
    },
    {
      header: 'Role',
      accessor: 'role',
      sortable: true,
      cell: (value: string) => (
        <Badge 
          variant={
            value === 'Admin' ? 'primary' :
            value === 'Manager' ? 'warning' :
            value === 'Editor' ? 'success' : 'secondary'
          }
        >
          {value}
        </Badge>
      )
    },
    {
      header: 'Status',
      accessor: 'status',
      sortable: true,
      filterable: true,
      cell: (value: string) => (
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full mr-2 ${
            value === 'Active' ? 'bg-green-500' :
            value === 'Inactive' ? 'bg-red-500' : 'bg-yellow-500'
          }`} />
          <span className={`${
            value === 'Active' ? 'text-green-700' :
            value === 'Inactive' ? 'text-red-700' : 'text-yellow-700'
          }`}>
            {value}
          </span>
        </div>
      )
    },
    {
      header: 'Performance',
      accessor: 'performance',
      sortable: true,
      cell: (value: number) => (
        <div className="w-full">
          <div className="flex justify-between text-sm mb-1">
            <span>{value}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${
                value >= 80 ? 'bg-green-500' :
                value >= 60 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${value}%` }}
            />
          </div>
        </div>
      )
    },
    {
      header: 'Salary',
      accessor: 'salary',
      sortable: true,
      cell: (value: number) => (
        <span className="font-mono">${value.toLocaleString()}</span>
      )
    },
    {
      header: 'Actions',
      accessor: 'id',
      sortable: false,
      filterable: false,
      cell: (_, row: any) => (
        <div className="flex space-x-1">
          <Button size="sm" variant="outline">Edit</Button>
          <Button size="sm" variant="outline">View</Button>
          <Button size="sm" variant="error">Delete</Button>
        </div>
      )
    }
  ]

  // Resizable columns
  const resizableColumns = [
    {
      header: 'Name',
      accessor: 'name',
      sortable: true,
      width: '200px',
      minWidth: '150px'
    },
    {
      header: 'Email',
      accessor: 'email',
      sortable: true,
      width: '250px',
      minWidth: '200px'
    },
    {
      header: 'Role',
      accessor: 'role',
      sortable: true,
      width: '120px',
      minWidth: '100px'
    },
    {
      header: 'Department',
      accessor: 'department',
      sortable: true,
      width: '150px',
      minWidth: '120px'
    }
  ]

  return (
    <PageHeader
      title="DataTable - Advanced"
      description="Advanced DataTable features including row selection, virtualization, column resizing, and complex cell renderers for sophisticated data display needs."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Row Selection</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Selected rows: {selectedRows.length}
                </p>
                {selectedRows.length > 0 && (
                  <Button 
                    size="sm" 
                    variant="error"
                    onClick={() => setSelectedRows([])}
                  >
                    Clear Selection
                  </Button>
                )}
              </div>
              
              <DataTable
                data={advancedData.slice(0, 10)}
                columns={advancedColumns.slice(0, 4)}
                enablePagination={true}
                defaultPageSize={5}
                selectable={true}
                selectedRowKeys={selectedRows}
                onSelectionChange={setSelectedRows}
                rowKey={(row) => row.id}
              />
              
              <CodeBlock language="typescript">
{`const [selectedRows, setSelectedRows] = useState<React.Key[]>([])

<DataTable
  data={data}
  columns={columns}
  selectable={true}
  selectedRowKeys={selectedRows}
  onSelectionChange={setSelectedRows}
  rowKey={(row) => row.id}
/>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Custom Cell Renderers</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <DataTable
                data={advancedData.slice(0, 8)}
                columns={advancedColumns}
                enablePagination={true}
                defaultPageSize={4}
                showFilters={true}
              />
              
              <CodeBlock language="typescript">
{`const columns = [
  {
    header: 'Name',
    accessor: 'name',
    cell: (value, row) => (
      <div className="flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
          {value.charAt(0)}
        </div>
        <span className="font-medium">{value}</span>
      </div>
    )
  },
  {
    header: 'Performance',
    accessor: 'performance',
    cell: (value) => (
      <div className="w-full">
        <div className="flex justify-between text-sm mb-1">
          <span>{value}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={\`h-2 rounded-full \${
              value >= 80 ? 'bg-green-500' :
              value >= 60 ? 'bg-yellow-500' : 'bg-red-500'
            }\`}
            style={{ width: \`\${value}%\` }}
          />
        </div>
      </div>
    )
  }
]`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Virtualized Table</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Handles large datasets efficiently by only rendering visible rows
              </p>
              
              <DataTable
                data={advancedData}
                columns={advancedColumns.slice(0, 5)}
                enablePagination={false}
                virtualized={true}
                virtualizedHeight="400px"
                rowHeight={60}
                overscanCount={5}
              />
              
              <CodeBlock language="typescript">
{`<DataTable
  data={largeDataset} // 1000+ rows
  columns={columns}
  enablePagination={false}
  virtualized={true}
  virtualizedHeight="400px"
  rowHeight={60}
  overscanCount={5} // Extra rows to render for smooth scrolling
/>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Resizable Columns</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Drag column borders to resize. Hover over column borders to see resize cursor.
              </p>
              
              <DataTable
                data={advancedData.slice(0, 6)}
                columns={resizableColumns}
                enablePagination={true}
                defaultPageSize={3}
                resizableColumns={true}
              />
              
              <CodeBlock language="typescript">
{`const columns = [
  {
    header: 'Name',
    accessor: 'name',
    width: '200px',
    minWidth: '150px',
    resizable: true // default true when resizableColumns enabled
  },
  {
    header: 'Email',
    accessor: 'email',
    width: '250px',
    minWidth: '200px'
  }
]

<DataTable
  data={data}
  columns={columns}
  resizableColumns={true}
/>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Row Actions & Events</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <DataTable
                data={advancedData.slice(0, 5)}
                columns={[
                  ...advancedColumns.slice(0, 3),
                  {
                    header: 'Quick Actions',
                    accessor: 'id',
                    sortable: false,
                    cell: (_, row: any) => (
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          onClick={(e) => {
                            e.stopPropagation()
                            alert(`Editing ${row.name}`)
                          }}
                        >
                          Edit
                        </Button>
                        <Button 
                          size="sm" 
                          variant="error"
                          onClick={(e) => {
                            e.stopPropagation()
                            alert(`Deleting ${row.name}`)
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    )
                  }
                ]}
                enablePagination={false}
                onRowClick={(row) => alert(`Clicked on ${row.name}`)}
                rowClassName={(row, index) => 
                  index % 2 === 0 ? 'bg-blue-50' : 'bg-white'
                }
              />
              
              <CodeBlock language="typescript">
{`<DataTable
  data={data}
  columns={columns}
  onRowClick={(row, index) => {
    console.log('Row clicked:', row)
    // Navigate to detail page
    router.push(\`/users/\${row.id}\`)
  }}
  rowClassName={(row, index) => 
    row.status === 'Active' ? 'bg-green-50' : 'bg-gray-50'
  }
  rowProps={(row, index) => ({
    'data-testid': \`user-row-\${row.id}\`,
    style: { cursor: 'pointer' }
  })}
/>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Advanced Props</h2>
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
                      selectedRowKeys
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                      React.Key[]
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      []
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Controlled selected row keys
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      onSelectionChange
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                      function
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      -
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Callback when selection changes
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      virtualized
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Enable virtualization for large datasets
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      virtualizedHeight
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                      string
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      '400px'
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Height of virtualized table container
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white font-mono">
                      resizableColumns
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Enable column resizing by dragging borders
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
      </div>
    </PageHeader>
  )
}
