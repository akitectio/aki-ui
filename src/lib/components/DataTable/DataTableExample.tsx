import React, { useState, useMemo } from 'react';
import { DataTable, type Column } from './DataTable';

// Example data interface
interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive';
    createdAt: string;
}

// Sample data
const sampleUsers: User[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Admin',
        status: 'active',
        createdAt: '2024-01-15T10:30:00Z'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        role: 'User',
        status: 'active',
        createdAt: '2024-01-16T14:20:00Z'
    },
    {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        role: 'Moderator',
        status: 'inactive',
        createdAt: '2024-01-17T09:15:00Z'
    },
    // Add more sample data...
    ...Array.from({ length: 47 }, (_, i) => ({
        id: i + 4,
        name: `User ${i + 4}`,
        email: `user${i + 4}@example.com`,
        role: ['Admin', 'User', 'Moderator'][i % 3],
        status: (i % 2 === 0 ? 'active' : 'inactive') as 'active' | 'inactive',
        createdAt: new Date(2024, 0, 18 + i).toISOString()
    }))
];

export function DataTableExample() {
    // All data is handled client-side - no API calls
    const [users] = useState<User[]>(sampleUsers);
    const [selectedUserIds, setSelectedUserIds] = useState<React.Key[]>([]);

    // Define columns
    const columns: Column<User>[] = useMemo(() => [
        {
            header: 'ID',
            accessor: 'id',
            width: '80px',
            align: 'center',
        },
        {
            header: 'Name',
            accessor: 'name',
            cell: (value) => (
                <div className="flex items-center">
                    <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-2">
                        {String(value).charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium">{value}</span>
                </div>
            ),
        },
        {
            header: 'Email',
            accessor: 'email',
            cell: (value) => (
                <a href={`mailto:${value}`} className="text-blue-600 hover:underline">
                    {value}
                </a>
            ),
        },
        {
            header: 'Role',
            accessor: 'role',
            cell: (value) => (
                <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${value === 'Admin'
                            ? 'bg-red-100 text-red-800'
                            : value === 'Moderator'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-green-100 text-green-800'
                        }`}
                >
                    {value}
                </span>
            ),
            width: '120px',
            align: 'center',
        },
        {
            header: 'Status',
            accessor: 'status',
            cell: (value) => (
                <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${value === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                >
                    {value}
                </span>
            ),
            width: '100px',
            align: 'center',
        },
        {
            header: 'Created At',
            accessor: 'createdAt',
            cell: (value) => new Date(value).toLocaleDateString(),
            width: '120px',
        },
        {
            header: 'Actions',
            accessor: 'id',
            cell: (_, row) => (
                <div className="flex space-x-2">
                    <button
                        className="text-blue-600 hover:text-blue-900 text-sm"
                        onClick={(e) => {
                            e.stopPropagation();
                            alert(`Edit user ${row.name}`);
                        }}
                    >
                        Edit
                    </button>
                    <button
                        className="text-red-600 hover:text-red-900 text-sm"
                        onClick={(e) => {
                            e.stopPropagation();
                            alert(`Delete user ${row.name}`);
                        }}
                    >
                        Delete
                    </button>
                </div>
            ),
            width: '120px',
            sortable: false,
            filterable: false,
        },
    ], []);

    // Handle selection changes
    const handleSelectionChange = (selectedIds: React.Key[]) => {
        setSelectedUserIds(selectedIds);
    };

    // Handle row click
    const handleRowClick = (user: User, index: number) => {
        console.log('Row clicked:', user, 'at index:', index);
        // Navigate to user detail page or show modal
    };

    // Get selected users for display
    const selectedUsers = users.filter(user => selectedUserIds.includes(user.id));

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">DataTable Example - Client Side Only</h1>

            {/* Selection info */}
            {selectedUserIds.length > 0 && (
                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded">
                    <p className="text-blue-800">
                        Selected {selectedUserIds.length} user{selectedUserIds.length !== 1 ? 's' : ''}:
                        {' '}
                        {selectedUsers.map(u => u.name).join(', ')}
                    </p>
                    <button
                        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                        onClick={() => setSelectedUserIds([])}
                    >
                        Clear Selection
                    </button>
                </div>
            )}

            {/* DataTable without any server-side logic */}
            <DataTable<User>
                data={users}
                columns={columns}
                selectable={true}
                selectedRowKeys={selectedUserIds}
                onSelectionChange={handleSelectionChange}
                onRowClick={handleRowClick}
                rowKey={(user) => user.id}
                enablePagination={true}
                defaultPageSize={10}
                pageSizeOptions={[5, 10, 25, 50]}
                showFilters={true}
                sortable={true}
                defaultSort={{ id: 'name', direction: 'asc' }}
                striped={true}
                hoverable={true}
                bordered={true}
                loading={false}
                noDataText="No users found"
                className="shadow-lg rounded-lg overflow-hidden"
            />

            <div className="mt-6 p-4 bg-gray-50 border rounded">
                <h3 className="text-lg font-semibold mb-2">Features Demonstrated:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>✅ <strong>Client-side only</strong> - No automatic API calls</li>
                    <li>✅ <strong>Sorting</strong> - Click column headers to sort</li>
                    <li>✅ <strong>Filtering</strong> - Type in filter inputs (shown above headers)</li>
                    <li>✅ <strong>Pagination</strong> - Navigate through pages</li>
                    <li>✅ <strong>Row selection</strong> - Select individual rows or all</li>
                    <li>✅ <strong>Custom cell rendering</strong> - Avatars, badges, action buttons</li>
                    <li>✅ <strong>Row click handling</strong> - Click rows for navigation</li>
                    <li>✅ <strong>Responsive design</strong> - Horizontal scroll on mobile</li>
                    <li>✅ <strong>Accessibility</strong> - ARIA labels and keyboard navigation</li>
                    <li>✅ <strong>No server dependencies</strong> - Pure client-side processing</li>
                </ul>
            </div>
        </div>
    );
}

export default DataTableExample;
