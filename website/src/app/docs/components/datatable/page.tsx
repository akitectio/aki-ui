'use client'

import { useState, useMemo } from 'react'
import { DataTable, Card } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function DataTablePage() {
  // Custom CSS for DataTable pagination styling
  const tableStyles = `
    .enhanced-datatable table {
      border-collapse: separate;
      border-spacing: 0;
    }
    
    .enhanced-datatable .pagination-wrapper {
      background: #f8fafc;
      border-top: 1px solid #e2e8f0;
      padding: 1rem 1.5rem;
    }
    
    .enhanced-datatable .pagination-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }
    
    .enhanced-datatable .pagination-info {
      font-size: 0.875rem;
      color: #64748b;
      font-weight: 500;
    }
    
    .enhanced-datatable .pagination-controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .enhanced-datatable .page-size-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      color: #64748b;
      font-weight: 500;
    }
    
    .enhanced-datatable select,
    .enhanced-datatable .pagination-button {
      padding: 0.5rem 0.75rem;
      border: 1px solid #d1d5db;
      background: white;
      color: #374151;
      font-size: 0.875rem;
      font-weight: 500;
      transition: all 0.15s ease;
      min-height: 2.5rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    
    .enhanced-datatable select {
      min-width: 4rem;
      cursor: pointer;
    }
    
    .enhanced-datatable .pagination-button {
      min-width: 2.5rem;
      cursor: pointer;
    }
    
    .enhanced-datatable .pagination-button:hover:not(:disabled) {
      background: #f1f5f9;
      border-color: #94a3b8;
    }
    
    .enhanced-datatable .pagination-button.active {
      background: #3b82f6;
      color: white;
      border-color: #3b82f6;
    }
    
    .enhanced-datatable .pagination-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background: #f8fafc;
    }
    
    .dark .enhanced-datatable .pagination-wrapper {
      background: #1e293b;
      border-color: #475569;
    }
    
    .dark .enhanced-datatable .pagination-info,
    .dark .enhanced-datatable .page-size-container {
      color: #cbd5e1;
    }
    
    .dark .enhanced-datatable select,
    .dark .enhanced-datatable .pagination-button {
      background: #334155;
      border-color: #475569;
      color: #f1f5f9;
    }
    
    .dark .enhanced-datatable .pagination-button:hover:not(:disabled) {
      background: #475569;
      border-color: #64748b;
    }
    
    .dark .enhanced-datatable .pagination-button:disabled {
      background: #1e293b;
      color: #64748b;
    }
  `;

  // Simple sample data for basic demo
  const [basicData] = useState([
    { id: 1, name: 'John Smith', email: 'john.smith@email.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@email.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike.johnson@email.com', role: 'Editor', status: 'Inactive' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah.wilson@email.com', role: 'User', status: 'Active' },
    { id: 5, name: 'David Brown', email: 'david.brown@email.com', role: 'Admin', status: 'Pending' },
  ])

  // Advanced data for complex demo
  const [advancedData] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@company.com',
      role: 'Senior Developer',
      status: 'Active',
      department: 'Engineering',
      salary: 95000,
      joinDate: '2023-01-15',
      avatar: '👨‍💼',
      projects: 12,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@company.com',
      role: 'Product Manager',
      status: 'Active',
      department: 'Product',
      salary: 105000,
      joinDate: '2022-08-20',
      avatar: '👩‍💼',
      projects: 8,
      rating: 4.9
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@company.com',
      role: 'UX Designer',
      status: 'Active',
      department: 'Design',
      salary: 75000,
      joinDate: '2023-03-10',
      avatar: '👨‍🎨',
      projects: 15,
      rating: 4.6
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice.brown@company.com',
      role: 'QA Engineer',
      status: 'Inactive',
      department: 'Engineering',
      salary: 70000,
      joinDate: '2022-11-05',
      avatar: '👩‍🔧',
      projects: 6,
      rating: 4.5
    },
    {
      id: 5,
      name: 'Charlie Wilson',
      email: 'charlie.wilson@company.com',
      role: 'DevOps Engineer',
      status: 'Active',
      department: 'Engineering',
      salary: 85000,
      joinDate: '2023-06-12',
      avatar: '👨‍🔧',
      projects: 9,
      rating: 4.7
    }
  ])

  // State for interactive demo
  const [demoMode, setDemoMode] = useState<'basic' | 'advanced'>('basic')
  const [showFilters, setShowFilters] = useState(false)
  const [selectable, setSelectable] = useState(false)
  const [striped, setStriped] = useState(true)
  const [compact, setCompact] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedRows, setSelectedRows] = useState<React.Key[]>([])

  // Simple columns for basic demo
  const basicColumns = useMemo(() => [
    {
      header: 'Name',
      accessor: 'name',
      sortable: true,
      width: '200px'
    },
    {
      header: 'Email',
      accessor: 'email',
      sortable: true,
      width: '250px'
    },
    {
      header: 'Role',
      accessor: 'role',
      sortable: true,
      width: '120px'
    },
    {
      header: 'Status',
      accessor: 'status',
      cell: (value: any) => (
        <div className="flex items-center justify-center py-1">
          <div className={`inline-flex items-center px-3 py-1 text-xs font-semibold ${value === 'Active'
            ? 'bg-green-100 text-green-800 border border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700'
            : value === 'Inactive'
              ? 'bg-red-100 text-red-800 border border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700'
              : 'bg-yellow-100 text-yellow-800 border border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700'
            }`}>
            <div className={`w-2 h-2 mr-2 ${value === 'Active' ? 'bg-green-500' :
                value === 'Inactive' ? 'bg-red-500' : 'bg-yellow-500'
              }`}></div>
            {value}
          </div>
        </div>
      ),
      sortable: true,
      width: '120px'
    }
  ], [])

  // Advanced columns with custom renderers
  const advancedColumns = useMemo(() => [
    {
      header: 'Employee',
      accessor: 'name',
      cell: (value: any, row: any) => (
        <div className="flex items-center space-x-4 py-1">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-xl shadow-md">
            {row.avatar}
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-semibold text-gray-900 dark:text-white text-base truncate">{value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 truncate">{row.email}</div>
          </div>
        </div>
      ),
      width: '320px',
      sortable: true
    },
    {
      header: 'Role & Department',
      accessor: 'role',
      cell: (value: any, row: any) => (
        <div className="space-y-2 py-1">
          <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            {value}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wide">
            {row.department}
          </div>
        </div>
      ),
      sortable: true,
      width: '200px'
    },
    {
      header: 'Salary',
      accessor: 'salary',
      cell: (value: any) => (
        <div className="text-right py-1">
          <div className="inline-flex items-center px-3 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <span className="font-mono font-bold text-green-700 dark:text-green-400 text-base">
              ${value.toLocaleString()}
            </span>
          </div>
        </div>
      ),
      sortable: true,
      width: '140px'
    },
    {
      header: 'Projects & Rating',
      accessor: 'projects',
      cell: (value: any, row: any) => (
        <div className="flex items-center justify-center space-x-4 py-1">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold shadow-sm">
              {value}
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">projects</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="flex items-center px-2 py-1 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
              <span className="text-yellow-500 text-sm">⭐</span>
              <span className="text-sm font-bold text-yellow-700 dark:text-yellow-400 ml-1">{row.rating}</span>
            </div>
          </div>
        </div>
      ),
      sortable: true,
      width: '180px'
    },
    {
      header: 'Status',
      accessor: 'status',
      cell: (value: any) => (
        <div className="flex items-center justify-center py-1">
          <div className={`flex items-center px-3 py-2 text-sm font-semibold shadow-sm ${value === 'Active'
            ? 'bg-green-100 text-green-800 border border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700'
            : 'bg-red-100 text-red-800 border border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700'
            }`}>
            <div className={`w-2 h-2 mr-2 ${value === 'Active' ? 'bg-green-500' : 'bg-red-500'
              }`}></div>
            {value}
          </div>
        </div>
      ),
      sortable: true,
      width: '130px'
    },
    {
      header: 'Actions',
      accessor: 'actions',
      cell: (_, row: any) => (
        <div className="flex items-center justify-center space-x-2 py-1">
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-all duration-200 shadow-sm"
            onClick={(e) => {
              e.stopPropagation()
              alert(`Edit ${row.name}`)
            }}
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit
          </button>
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium bg-gray-500 text-white hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 transition-all duration-200 shadow-sm"
            onClick={(e) => {
              e.stopPropagation()
              alert(`View ${row.name}`)
            }}
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View
          </button>
        </div>
      ),
      sortable: false,
      width: '160px'
    }
  ], [])

  const handleLoadingDemo = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  const currentData = demoMode === 'basic' ? basicData : advancedData
  const currentColumns = demoMode === 'basic' ? basicColumns : advancedColumns

  return (
    <PageHeader
      title="DataTable - Data Table"
      description="Modern data table component with full features: sorting, filtering, pagination, row selection and high performance for large datasets."
    >
      <style dangerouslySetInnerHTML={{ __html: tableStyles }} />
      <div className="space-y-8">
        {/* Import */}
        <section>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl">📦</span>
            <h2 className="text-2xl font-bold">Import</h2>
          </div>
          <CodeBlock language="typescript">
            {`import { DataTable } from '@akitectio/aki-ui'`}
          </CodeBlock>
        </section>

        {/* Interactive Demo */}
        <section>
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-2xl">🎮</span>
            <h2 className="text-2xl font-bold">Interactive Demo</h2>
          </div>

          <Card className="p-6 space-y-6">
            {/* Mode Selector */}
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border">
              <span className="font-medium text-gray-700 dark:text-gray-300">Demo mode:</span>
              <div className="flex space-x-2">
                <button
                  className={`px-4 py-2 rounded-lg transition-all ${demoMode === 'basic'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                  onClick={() => setDemoMode('basic')}
                >
                  🌟 Basic
                </button>
                <button
                  className={`px-4 py-2 rounded-lg transition-all ${demoMode === 'advanced'
                    ? 'bg-purple-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                  onClick={() => setDemoMode('advanced')}
                >
                  🚀 Advanced
                </button>
              </div>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <label className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
                <input
                  type="checkbox"
                  checked={showFilters}
                  onChange={(e) => setShowFilters(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium">🔍 Show filters</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
                <input
                  type="checkbox"
                  checked={selectable}
                  onChange={(e) => setSelectable(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium">✅ Row selection</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
                <input
                  type="checkbox"
                  checked={striped}
                  onChange={(e) => setStriped(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium">🦓 Striped rows</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
                <input
                  type="checkbox"
                  checked={compact}
                  onChange={(e) => setCompact(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium">📏 Compact view</span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-md disabled:opacity-50"
                onClick={handleLoadingDemo}
                disabled={loading}
              >
                {loading ? '⏳ Loading...' : '🔄 Test Loading'}
              </button>

              {selectedRows.length > 0 && (
                <div className="flex items-center space-x-3 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg">
                  <span className="text-sm font-medium">
                    ✅ Selected {selectedRows.length} rows
                  </span>
                  <button
                    className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors"
                    onClick={() => setSelectedRows([])}
                  >
                    Clear selection
                  </button>
                </div>
              )}
            </div>

            {/* DataTable */}
            <div className="border overflow-hidden shadow-lg bg-white dark:bg-gray-800 enhanced-datatable">
              <DataTable
                data={currentData}
                columns={currentColumns}
                loading={loading}
                showFilters={showFilters}
                selectable={selectable}
                selectedRowKeys={selectedRows}
                onSelectionChange={setSelectedRows}
                striped={striped}
                compact={compact}
                enablePagination={true}
                defaultPageSize={demoMode === 'basic' ? 5 : 4}
                pageSizeOptions={[3, 5, 10, 20]}
                rowKey={(row: any) => row.id}
                onRowClick={(row: any) => {
                  console.log('Row clicked:', row)
                  alert(`🔔 Clicked: ${row.name}`)
                }}
                className="shadow-sm"
                defaultSort={{ id: 'name', direction: 'asc' }}
                rowClassName=""
                rowProps={{}}
                onFetch={undefined}
                totalCount={currentData.length}
              />
            </div>

            {/* Demo Info */}
            <div className="text-sm text-gray-600 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
              <span className="font-medium">💡 Tip:</span> Click on rows to view information, use checkboxes to change table settings
            </div>
          </Card>
        </section>

        {/* Features */}
        <section>
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-2xl">⭐</span>
            <h2 className="text-2xl font-bold">Key Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-3xl">🔍</span>
                <h3 className="font-semibold text-lg">Search & Filter</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Global search and column-based filtering with high performance.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-3xl">🔄</span>
                <h3 className="font-semibold text-lg">Smart Sorting</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Multi-column sorting with custom sort functions.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-3xl">📄</span>
                <h3 className="font-semibold text-lg">Flexible Pagination</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Efficient pagination with customizable page sizes.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-3xl">✅</span>
                <h3 className="font-semibold text-lg">Row Selection</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Single and multi-row selection with batch operations.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-3xl">🎨</span>
                <h3 className="font-semibold text-lg">UI Customization</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Custom cell renderers and flexible styling options.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-3xl">⚡</span>
                <h3 className="font-semibold text-lg">High Performance</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Optimized for large datasets with virtualization.
              </p>
            </Card>
          </div>
        </section>

        {/* Basic Usage */}
        <section>
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-2xl">🚀</span>
            <h2 className="text-2xl font-bold">Basic Usage</h2>
          </div>

          <Card className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">1. Prepare data and columns</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Create data array and define column structure:
              </p>
            </div>

            <CodeBlock language="typescript">
              {`import { DataTable } from '@akitectio/aki-ui'

// Sample data
const data = [
  { id: 1, name: 'John Smith', email: 'john@email.com', role: 'Admin' },
  { id: 2, name: 'Jane Doe', email: 'jane@email.com', role: 'User' },
  { id: 3, name: 'Mike Johnson', email: 'mike@email.com', role: 'Editor' }
]

// Define columns
const columns = [
  { 
    header: 'Name', 
    accessor: 'name', 
    sortable: true,
    width: '200px' 
  },
  { 
    header: 'Email', 
    accessor: 'email', 
    sortable: true 
  },
  { 
    header: 'Role', 
    accessor: 'role', 
    sortable: true 
  }
]

// Component
function MyTable() {
  return (
    <DataTable 
      data={data}
      columns={columns}
      enablePagination={true}
      selectable={true}
      striped={true}
      defaultPageSize={10}
    />
  )
}`}
            </CodeBlock>
          </Card>
        </section>

        {/* Advanced Example */}
        <section>
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-2xl">🔥</span>
            <h2 className="text-2xl font-bold">Advanced Example</h2>
          </div>

          <Card className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">2. Custom cell renderers and actions</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Customize data display and add actions:
              </p>
            </div>

            <CodeBlock language="typescript">
              {`const advancedColumns = [
  {
    header: 'Employee',
    accessor: 'name',
    cell: (value, row) => (
      <div className="flex items-center space-x-3">
        <img src={row.avatar} className="w-10 h-10 rounded-full" />
        <div>
          <div className="font-medium">{value}</div>
          <div className="text-sm text-gray-500">{row.email}</div>
        </div>
      </div>
    ),
    sortable: true
  },
  {
    header: 'Status',
    accessor: 'status',
    cell: (value) => (
      <span className={\`px-2 py-1 rounded-full text-xs \${
        value === 'Active' 
          ? 'bg-green-100 text-green-800' 
          : 'bg-red-100 text-red-800'
      }\`}>
        {value}
      </span>
    ),
    sortable: true
  },
  {
    header: 'Actions',
    accessor: 'actions',
    cell: (_, row) => (
      <div className="flex space-x-2">
        <button 
          className="px-2 py-1 bg-blue-500 text-white rounded text-xs"
          onClick={() => editUser(row.id)}
        >
          Edit
        </button>
        <button 
          className="px-2 py-1 bg-red-500 text-white rounded text-xs"
          onClick={() => deleteUser(row.id)}
        >
          Delete
        </button>
      </div>
    ),
    sortable: false
  }
]`}
            </CodeBlock>
          </Card>
        </section>

        {/* Props Documentation */}
        <section>
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-2xl">📚</span>
            <h2 className="text-2xl font-bold">Properties (Props)</h2>
          </div>

          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 font-semibold">Property</th>
                    <th className="text-left py-2 font-semibold">Type</th>
                    <th className="text-left py-2 font-semibold">Default</th>
                    <th className="text-left py-2 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="space-y-1">
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 font-mono text-blue-600">data</td>
                    <td className="py-2 text-gray-600">Array</td>
                    <td className="py-2 text-gray-500">[]</td>
                    <td className="py-2">Data to display in the table</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 font-mono text-blue-600">columns</td>
                    <td className="py-2 text-gray-600">Array</td>
                    <td className="py-2 text-gray-500">[]</td>
                    <td className="py-2">Column structure definition</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 font-mono text-blue-600">selectable</td>
                    <td className="py-2 text-gray-600">boolean</td>
                    <td className="py-2 text-gray-500">false</td>
                    <td className="py-2">Enable row selection</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 font-mono text-blue-600">striped</td>
                    <td className="py-2 text-gray-600">boolean</td>
                    <td className="py-2 text-gray-500">false</td>
                    <td className="py-2">Display striped rows</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 font-mono text-blue-600">enablePagination</td>
                    <td className="py-2 text-gray-600">boolean</td>
                    <td className="py-2 text-gray-500">false</td>
                    <td className="py-2">Enable pagination feature</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 font-mono text-blue-600">defaultPageSize</td>
                    <td className="py-2 text-gray-600">number</td>
                    <td className="py-2 text-gray-500">10</td>
                    <td className="py-2">Default rows per page</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 font-mono text-blue-600">showFilters</td>
                    <td className="py-2 text-gray-600">boolean</td>
                    <td className="py-2 text-gray-500">false</td>
                    <td className="py-2">Show filter controls</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono text-blue-600">loading</td>
                    <td className="py-2 text-gray-600">boolean</td>
                    <td className="py-2 text-gray-500">false</td>
                    <td className="py-2">Display loading state</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Tips */}
        <section>
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-2xl">💡</span>
            <h2 className="text-2xl font-bold">Usage Tips</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 border-l-4 border-l-blue-500">
              <h3 className="font-semibold mb-2">🚀 Performance</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Use <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">rowKey</code> to help React optimize rendering when data changes.
              </p>
            </Card>

            <Card className="p-4 border-l-4 border-l-green-500">
              <h3 className="font-semibold mb-2">🎨 Customization</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Use <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">cell</code> function to create custom UI for each cell.
              </p>
            </Card>

            <Card className="p-4 border-l-4 border-l-yellow-500">
              <h3 className="font-semibold mb-2">📱 Responsive</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Set <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">width</code> for columns to make table display well on mobile.
              </p>
            </Card>

            <Card className="p-4 border-l-4 border-l-purple-500">
              <h3 className="font-semibold mb-2">⚡ Large Data</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enable pagination and use server-side filtering for datasets larger than 1000 records.
              </p>
            </Card>
          </div>
        </section>
      </div>
    </PageHeader>
  )
}
