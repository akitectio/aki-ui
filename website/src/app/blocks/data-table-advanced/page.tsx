'use client'

import { useState, useMemo } from 'react'
import { Card, Button } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { Tabs } from '@/components/Tabs'
import BlockHeader from '@/components/BlockHeader'
import DevicePreviewWrapper from '@/components/DevicePreviewWrapper'

// Sample data for the data table
const sampleUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', joinDate: '2023-01-15', lastLogin: '2024-01-20' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active', joinDate: '2023-02-20', lastLogin: '2024-01-19' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'inactive', joinDate: '2023-03-10', lastLogin: '2024-01-18' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'active', joinDate: '2023-04-05', lastLogin: '2024-01-17' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'active', joinDate: '2023-05-12', lastLogin: '2024-01-16' },
    { id: 6, name: 'Diana Davis', email: 'diana@example.com', role: 'User', status: 'inactive', joinDate: '2023-06-18', lastLogin: '2024-01-15' },
    { id: 7, name: 'Eva Garcia', email: 'eva@example.com', role: 'Manager', status: 'active', joinDate: '2023-07-25', lastLogin: '2024-01-14' },
    { id: 8, name: 'Frank Miller', email: 'frank@example.com', role: 'User', status: 'active', joinDate: '2023-08-30', lastLogin: '2024-01-13' },
    { id: 9, name: 'Grace Lee', email: 'grace@example.com', role: 'Admin', status: 'inactive', joinDate: '2023-09-15', lastLogin: '2024-01-12' },
    { id: 10, name: 'Henry Taylor', email: 'henry@example.com', role: 'User', status: 'active', joinDate: '2023-10-20', lastLogin: '2024-01-11' },
]

function AdvancedDataTableDemo() {
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('all')
    const [roleFilter, setRoleFilter] = useState('all')
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(5)
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' })
    const [selectedRows, setSelectedRows] = useState<number[]>([])

    // Filter and search logic
    const filteredData = useMemo(() => {
        let filtered = sampleUsers.filter(user => {
            const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesStatus = statusFilter === 'all' || user.status === statusFilter
            const matchesRole = roleFilter === 'all' || user.role === roleFilter

            return matchesSearch && matchesStatus && matchesRole
        })

        // Apply sorting
        if (sortConfig.key) {
            filtered.sort((a, b) => {
                const aValue = a[sortConfig.key as keyof typeof a]
                const bValue = b[sortConfig.key as keyof typeof b]

                if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
                if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
                return 0
            })
        }

        return filtered
    }, [searchTerm, statusFilter, roleFilter, sortConfig])

    // Pagination logic
    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize
        return filteredData.slice(startIndex, startIndex + pageSize)
    }, [filteredData, currentPage, pageSize])

    const totalPages = Math.ceil(filteredData.length / pageSize)

    const handleSort = (key: string) => {
        setSortConfig(prev => ({
            key,
            direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
        }))
    }

    const handleRowSelect = (userId: number) => {
        setSelectedRows(prev =>
            prev.includes(userId)
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        )
    }

    const handleSelectAll = () => {
        if (selectedRows.length === paginatedData.length) {
            setSelectedRows([])
        } else {
            setSelectedRows(paginatedData.map(user => user.id))
        }
    }

    const handleExport = () => {
        const csvContent = [
            ['ID', 'Name', 'Email', 'Role', 'Status', 'Join Date', 'Last Login'],
            ...filteredData.map(user => [
                user.id,
                user.name,
                user.email,
                user.role,
                user.status,
                user.joinDate,
                user.lastLogin
            ])
        ].map(row => row.join(',')).join('\n')

        const blob = new Blob([csvContent], { type: 'text/csv' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'users-export.csv'
        a.click()
        window.URL.revokeObjectURL(url)
    }

    const handleBulkAction = (action: string) => {
        console.log(`Bulk action: ${action} for users:`, selectedRows)
        // In a real app, this would make API calls
        alert(`${action} action performed on ${selectedRows.length} selected users`)
        setSelectedRows([])
    }

    return (
        <div className="w-full max-w-7xl mx-auto p-4 space-y-6">
            <Card className="overflow-hidden">
                <div className="p-6">
                    <div className="flex flex-col lg:flex-row gap-4 mb-6">
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Search users..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="w-full sm:w-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                            >
                                <option value="all">All Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                            <select
                                value={roleFilter}
                                onChange={(e) => setRoleFilter(e.target.value)}
                                className="w-full sm:w-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                            >
                                <option value="all">All Roles</option>
                                <option value="Admin">Admin</option>
                                <option value="Manager">Manager</option>
                                <option value="User">User</option>
                            </select>
                            <button
                                onClick={handleExport}
                                className="whitespace-nowrap px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Export CSV
                            </button>
                        </div>
                    </div>

                    {selectedRows.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <span className="text-sm font-medium">
                                {selectedRows.length} selected
                            </span>
                            <button
                                onClick={() => handleBulkAction('Activate')}
                                className="text-xs px-2 py-1 h-auto bg-green-600 text-white rounded hover:bg-green-700"
                            >
                                Activate
                            </button>
                            <button
                                onClick={() => handleBulkAction('Deactivate')}
                                className="text-xs px-2 py-1 h-auto bg-yellow-600 text-white rounded hover:bg-yellow-700"
                            >
                                Deactivate
                            </button>
                            <button
                                onClick={() => handleBulkAction('Delete')}
                                className="text-xs px-2 py-1 h-auto bg-red-600 text-white rounded hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    )}

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="text-left p-3 font-medium text-gray-900 dark:text-gray-100">
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.length === paginatedData.length && paginatedData.length > 0}
                                            onChange={handleSelectAll}
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                    </th>
                                    <th
                                        className="text-left p-3 font-medium text-gray-900 dark:text-gray-100 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                                        onClick={() => handleSort('name')}
                                    >
                                        <div className="flex items-center gap-1">
                                            Name
                                            {sortConfig.key === 'name' && (
                                                <span className="text-blue-600">
                                                    {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                                </span>
                                            )}
                                        </div>
                                    </th>
                                    <th
                                        className="text-left p-3 font-medium text-gray-900 dark:text-gray-100 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                                        onClick={() => handleSort('email')}
                                    >
                                        <div className="flex items-center gap-1">
                                            Email
                                            {sortConfig.key === 'email' && (
                                                <span className="text-blue-600">
                                                    {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                                </span>
                                            )}
                                        </div>
                                    </th>
                                    <th
                                        className="text-left p-3 font-medium text-gray-900 dark:text-gray-100 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                                        onClick={() => handleSort('role')}
                                    >
                                        <div className="flex items-center gap-1">
                                            Role
                                            {sortConfig.key === 'role' && (
                                                <span className="text-blue-600">
                                                    {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                                </span>
                                            )}
                                        </div>
                                    </th>
                                    <th className="text-left p-3 font-medium text-gray-900 dark:text-gray-100">
                                        Status
                                    </th>
                                    <th
                                        className="text-left p-3 font-medium text-gray-900 dark:text-gray-100 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                                        onClick={() => handleSort('lastLogin')}
                                    >
                                        <div className="flex items-center gap-1">
                                            Last Login
                                            {sortConfig.key === 'lastLogin' && (
                                                <span className="text-blue-600">
                                                    {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                                </span>
                                            )}
                                        </div>
                                    </th>
                                    <th className="text-left p-3 font-medium text-gray-900 dark:text-gray-100">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedData.map((user) => (
                                    <tr
                                        key={user.id}
                                        className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                                    >
                                        <td className="p-3">
                                            <input
                                                type="checkbox"
                                                checked={selectedRows.includes(user.id)}
                                                onChange={() => handleRowSelect(user.id)}
                                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            />
                                        </td>
                                        <td className="p-3 font-medium text-gray-900 dark:text-gray-100">
                                            {user.name}
                                        </td>
                                        <td className="p-3 text-gray-600 dark:text-gray-400">
                                            {user.email}
                                        </td>
                                        <td className="p-3">
                                            <span
                                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                                    ${user.role === 'Admin' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' : ''}
                                                    ${user.role === 'Manager' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : ''}
                                                    ${user.role === 'User' ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200' : ''}
                                                `}
                                            >
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <span
                                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                                    ${user.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
                                                    ${user.status === 'inactive' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : ''}
                                                `}
                                            >
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="p-3 text-gray-600 dark:text-gray-400">
                                            {user.lastLogin}
                                        </td>
                                        <td className="p-3">
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => console.log('Edit user:', user.id)}
                                                    className="text-xs px-2 py-1 h-auto bg-blue-600 text-white rounded hover:bg-blue-700"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => console.log('Delete user:', user.id)}
                                                    className="text-xs px-2 py-1 h-auto bg-red-600 text-white rounded hover:bg-red-700"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {filteredData.length === 0 && (
                        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                            No users found matching your criteria.
                        </div>
                    )}

                    {filteredData.length > 0 && (
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    Show
                                </span>
                                <select
                                    value={pageSize}
                                    onChange={(e) => {
                                        setPageSize(Number(e.target.value))
                                        setCurrentPage(1)
                                    }}
                                    className="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                                >
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                </select>
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    of {filteredData.length} entries
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                    disabled={currentPage === 1}
                                    className="text-sm px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Previous
                                </button>
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    Page {currentPage} of {totalPages}
                                </span>
                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                    disabled={currentPage === totalPages}
                                    className="text-sm px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    )
}

export default function DataTableAdvancedPage() {
    const codeExample = `import { useState, useMemo } from 'react'
import { Card, Button, Input, Badge, Select, DataTable } from '@akitectio/aki-ui'

const sampleUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', lastLogin: '2024-01-20' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active', lastLogin: '2024-01-19' },
    // ... more data
]

export default function AdvancedDataTable() {
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('all')
    const [roleFilter, setRoleFilter] = useState('all')
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(5)
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' })
    const [selectedRows, setSelectedRows] = useState([])

    // Filter and search logic
    const filteredData = useMemo(() => {
        let filtered = sampleUsers.filter(user => {
            const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                user.email.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesStatus = statusFilter === 'all' || user.status === statusFilter
            const matchesRole = roleFilter === 'all' || user.role === roleFilter
            
            return matchesSearch && matchesStatus && matchesRole
        })

        // Apply sorting
        if (sortConfig.key) {
            filtered.sort((a, b) => {
                const aValue = a[sortConfig.key]
                const bValue = b[sortConfig.key]
                
                if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
                if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
                return 0
            })
        }

        return filtered
    }, [searchTerm, statusFilter, roleFilter, sortConfig])

    // Pagination logic
    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize
        return filteredData.slice(startIndex, startIndex + pageSize)
    }, [filteredData, currentPage, pageSize])

    const handleSort = (key) => {
        setSortConfig(prev => ({
            key,
            direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
        }))
    }

    const handleRowSelect = (userId) => {
        setSelectedRows(prev => 
            prev.includes(userId) 
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        )
    }

    const handleExport = () => {
        const csvContent = [
            ['ID', 'Name', 'Email', 'Role', 'Status', 'Last Login'],
            ...filteredData.map(user => [
                user.id, user.name, user.email, user.role, user.status, user.lastLogin
            ])
        ].map(row => row.join(',')).join('\\n')
        
        const blob = new Blob([csvContent], { type: 'text/csv' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'users-export.csv'
        a.click()
        window.URL.revokeObjectURL(url)
    }

    return (
        <Card>
            <div className="p-6">
                {/* Search and Filter Controls */}
                <div className="flex flex-col lg:flex-row gap-4 mb-6">
                    <div className="flex-1">
                        <Input
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full sm:w-32"
                        >
                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </Select>
                        <Select
                            value={roleFilter}
                            onChange={(e) => setRoleFilter(e.target.value)}
                            className="w-full sm:w-32"
                        >
                            <option value="all">All Roles</option>
                            <option value="Admin">Admin</option>
                            <option value="Manager">Manager</option>
                            <option value="User">User</option>
                        </Select>
                        <Button onClick={handleExport} className="whitespace-nowrap">
                            Export CSV
                        </Button>
                    </div>
                </div>

                {/* Bulk Actions */}
                {selectedRows.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <span className="text-sm font-medium">
                            {selectedRows.length} selected
                        </span>
                        <Button className="text-xs px-2 py-1 h-auto">
                            Activate
                        </Button>
                        <Button className="text-xs px-2 py-1 h-auto">
                            Deactivate
                        </Button>
                        <Button className="text-xs px-2 py-1 h-auto bg-red-600 hover:bg-red-700">
                            Delete
                        </Button>
                    </div>
                )}

                {/* Data Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th className="text-left p-3 font-medium">
                                    <input
                                        type="checkbox"
                                        onChange={handleSelectAll}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                </th>
                                <th
                                    className="text-left p-3 font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                                    onClick={() => handleSort('name')}
                                >
                                    <div className="flex items-center gap-1">
                                        Name
                                        {sortConfig.key === 'name' && (
                                            <span className="text-blue-600">
                                                {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                            </span>
                                        )}
                                    </div>
                                </th>
                                <th
                                    className="text-left p-3 font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                                    onClick={() => handleSort('email')}
                                >
                                    <div className="flex items-center gap-1">
                                        Email
                                        {sortConfig.key === 'email' && (
                                            <span className="text-blue-600">
                                                {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                            </span>
                                        )}
                                    </div>
                                </th>
                                <th className="text-left p-3 font-medium">Role</th>
                                <th className="text-left p-3 font-medium">Status</th>
                                <th className="text-left p-3 font-medium">Last Login</th>
                                <th className="text-left p-3 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((user) => (
                                <tr
                                    key={user.id}
                                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                                >
                                    <td className="p-3">
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(user.id)}
                                            onChange={() => handleRowSelect(user.id)}
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                    </td>
                                    <td className="p-3 font-medium">{user.name}</td>
                                    <td className="p-3 text-gray-600 dark:text-gray-400">{user.email}</td>
                                    <td className="p-3">
                                        <Badge
                                            className={\`
                                                \${user.role === 'Admin' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' : ''}
                                                \${user.role === 'Manager' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : ''}
                                                \${user.role === 'User' ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200' : ''}
                                            \`}
                                        >
                                            {user.role}
                                        </Badge>
                                    </td>
                                    <td className="p-3">
                                        <Badge
                                            className={\`
                                                \${user.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
                                                \${user.status === 'inactive' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : ''}
                                            \`}
                                        >
                                            {user.status}
                                        </Badge>
                                    </td>
                                    <td className="p-3 text-gray-600 dark:text-gray-400">{user.lastLogin}</td>
                                    <td className="p-3">
                                        <div className="flex gap-2">
                                            <Button className="text-xs px-2 py-1 h-auto">
                                                Edit
                                            </Button>
                                            <Button className="text-xs px-2 py-1 h-auto bg-red-600 hover:bg-red-700">
                                                Delete
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Show</span>
                        <Select
                            value={pageSize}
                            onChange={(e) => {
                                setPageSize(Number(e.target.value))
                                setCurrentPage(1)
                            }}
                            className="w-20"
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                        </Select>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            of {filteredData.length} entries
                        </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <Button
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className="text-sm px-3 py-1"
                        >
                            Previous
                        </Button>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            Page {currentPage} of {totalPages}
                        </span>
                        <Button
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                            className="text-sm px-3 py-1"
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}`

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <BlockHeader title="Advanced Data Table" />

            {/* Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Advanced Data Table
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        A feature-rich data table with sorting, filtering, pagination, and row actions.
                        Perfect for displaying and managing large datasets with advanced functionality.
                    </p>
                </div>

                {/* Tabs for Preview and Code */}
                <Tabs
                    persistKey="data-table-advanced"
                    useUrlHash={true}
                    tabs={[
                        {
                            id: 'preview',
                            label: 'Preview',
                            content: (
                                <DevicePreviewWrapper>
                                    {(selectedDevice) => (
                                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                            <Card className="overflow-hidden">
                                                <AdvancedDataTableDemo />
                                            </Card>
                                        </div>
                                    )}
                                </DevicePreviewWrapper>
                            )
                        },
                        {
                            id: 'code',
                            label: 'Code',
                            content: (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Implementation
                                    </h3>
                                    <CodeBlock code={codeExample} language="tsx" />
                                </div>
                            )
                        }
                    ]}
                    defaultTab="preview"
                />

                {/* Features */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Features
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li>• Column sorting (ascending/descending)</li>
                            <li>• Global search and column filtering</li>
                            <li>• Pagination with customizable page sizes</li>
                            <li>• Row selection (single/multiple)</li>
                            <li>• Bulk actions for selected rows</li>
                            <li>• Export to CSV functionality</li>
                            <li>• Responsive design with horizontal scroll</li>
                            <li>• Custom cell renderers with badges</li>
                            <li>• Dark mode support</li>
                            <li>• Accessible keyboard navigation</li>
                            <li>• Real-time filtering and search</li>
                            <li>• Status indicators and badges</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Use Cases
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li>• Admin dashboards</li>
                            <li>• User management interfaces</li>
                            <li>• Product catalogs</li>
                            <li>• Order management</li>
                            <li>• Customer databases</li>
                            <li>• Inventory systems</li>
                            <li>• Analytics reports</li>
                            <li>• Content management</li>
                            <li>• CRM systems</li>
                            <li>• Project management tools</li>
                            <li>• Financial reporting</li>
                            <li>• Data visualization platforms</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}
