import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '../lib/components';
import type { DataTableColumn } from '../lib/components';

// Define sample data types
interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive' | 'pending';
    joinDate: string;
    lastLogin: string;
    avatar?: string;
}

// Need to explicitly type the DataTable with User generic
type UserDataTable = typeof DataTable<User>;

const meta: Meta<UserDataTable> = {
    title: 'Components/DataTable',
    component: DataTable as UserDataTable,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<UserDataTable>;

// Sample data
const users: User[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Admin',
        status: 'active',
        joinDate: '2022-01-15',
        lastLogin: '2023-06-24',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format&q=60'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        role: 'Editor',
        status: 'active',
        joinDate: '2022-02-10',
        lastLogin: '2023-06-22',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=32&h=32&fit=crop&crop=face&auto=format&q=60'
    },
    {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        role: 'Viewer',
        status: 'inactive',
        joinDate: '2022-03-05',
        lastLogin: '2023-05-15',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format&q=60'
    },
    {
        id: 4,
        name: 'Alice Williams',
        email: 'alice.williams@example.com',
        role: 'Editor',
        status: 'active',
        joinDate: '2022-04-20',
        lastLogin: '2023-06-23',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face&auto=format&q=60'
    },
    {
        id: 5,
        name: 'Charlie Brown',
        email: 'charlie.brown@example.com',
        role: 'Viewer',
        status: 'pending',
        joinDate: '2022-05-12',
        lastLogin: '2023-06-20',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face&auto=format&q=60'
    },
    {
        id: 6,
        name: 'Diana Miller',
        email: 'diana.miller@example.com',
        role: 'Admin',
        status: 'active',
        joinDate: '2022-06-08',
        lastLogin: '2023-06-21',
        avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=32&h=32&fit=crop&crop=face&auto=format&q=60'
    },
    {
        id: 7,
        name: 'Edward Davis',
        email: 'edward.davis@example.com',
        role: 'Editor',
        status: 'inactive',
        joinDate: '2022-07-14',
        lastLogin: '2023-05-30',
        avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=32&h=32&fit=crop&crop=face&auto=format&q=60'
    },
    {
        id: 8,
        name: 'Fiona Garcia',
        email: 'fiona.garcia@example.com',
        role: 'Viewer',
        status: 'active',
        joinDate: '2022-08-22',
        lastLogin: '2023-06-19',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face&auto=format&q=60'
    },
    {
        id: 9,
        name: 'George Harris',
        email: 'george.harris@example.com',
        role: 'Admin',
        status: 'pending',
        joinDate: '2022-09-17',
        lastLogin: '2023-06-18',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face&auto=format&q=60'
    },
    {
        id: 10,
        name: 'Hannah Lewis',
        email: 'hannah.lewis@example.com',
        role: 'Editor',
        status: 'active',
        joinDate: '2022-10-05',
        lastLogin: '2023-06-25',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=32&h=32&fit=crop&crop=face&auto=format&q=60'
    },
    {
        id: 11,
        name: 'Ian Walker',
        email: 'ian.walker@example.com',
        role: 'Viewer',
        status: 'inactive',
        joinDate: '2022-11-11',
        lastLogin: '2023-04-28',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=32&h=32&fit=crop&crop=face&auto=format&q=60'
    },
    {
        id: 12,
        name: 'Julia Roberts',
        email: 'julia.roberts@example.com',
        role: 'Admin',
        status: 'active',
        joinDate: '2022-12-29',
        lastLogin: '2023-06-24',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=32&h=32&fit=crop&crop=face&auto=format&q=60'
    },
];

// Sample columns
const columns: DataTableColumn<User>[] = [
    {
        header: 'User',
        accessor: 'name',
        cell: (value, row) => (
            <div className="flex items-center gap-3">
                <img
                    src={row.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(row.name)}&background=f3f4f6&color=374151&size=32`}
                    alt={`${row.name} avatar`}
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-100"
                />
                <div className="min-w-0">
                    <div className="text-sm font-semibold text-gray-900 truncate">{value}</div>
                    <div className="text-xs text-gray-500 truncate">{row.email}</div>
                </div>
            </div>
        ),
        width: '280px',
    },
    {
        header: 'Role',
        accessor: 'role',
        cell: (value) => {
            let badgeClass = '';
            let icon = '';
            switch (value) {
                case 'Admin':
                    badgeClass = 'bg-purple-100 text-purple-800 border-purple-200';
                    icon = '👑';
                    break;
                case 'Editor':
                    badgeClass = 'bg-blue-100 text-blue-800 border-blue-200';
                    icon = '✏️';
                    break;
                case 'Viewer':
                    badgeClass = 'bg-gray-100 text-gray-800 border-gray-200';
                    icon = '👁️';
                    break;
                default:
                    badgeClass = 'bg-gray-100 text-gray-800 border-gray-200';
                    icon = '👤';
            }
            return (
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border ${badgeClass}`}>
                    <span>{icon}</span>
                    {value}
                </span>
            );
        },
        width: '120px',
    },
    {
        header: 'Status',
        accessor: 'status',
        cell: (value) => {
            let badgeClass = '';
            let dotClass = '';
            switch (value) {
                case 'active':
                    badgeClass = 'bg-green-50 text-green-800 border-green-200';
                    dotClass = 'bg-green-500';
                    break;
                case 'inactive':
                    badgeClass = 'bg-red-50 text-red-800 border-red-200';
                    dotClass = 'bg-red-500';
                    break;
                case 'pending':
                    badgeClass = 'bg-yellow-50 text-yellow-800 border-yellow-200';
                    dotClass = 'bg-yellow-500';
                    break;
                default:
                    badgeClass = 'bg-gray-100 text-gray-800 border-gray-200';
                    dotClass = 'bg-gray-500';
            }
            return (
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border ${badgeClass}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${dotClass}`}></div>
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                </span>
            );
        },
        width: '110px',
    },
    {
        header: 'Join Date',
        accessor: 'joinDate',
        cell: (value) => {
            const date = new Date(value);
            return (
                <div className="text-sm">
                    <div className="font-medium text-gray-900">
                        {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="text-xs text-gray-500">
                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                </div>
            );
        },
        width: '120px',
    },
    {
        header: 'Last Login',
        accessor: 'lastLogin',
        cell: (value) => {
            const date = new Date(value);
            const now = new Date();
            const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

            let timeAgo = '';
            if (diffDays === 0) timeAgo = 'Today';
            else if (diffDays === 1) timeAgo = 'Yesterday';
            else if (diffDays < 7) timeAgo = `${diffDays} days ago`;
            else if (diffDays < 30) timeAgo = `${Math.floor(diffDays / 7)} weeks ago`;
            else timeAgo = `${Math.floor(diffDays / 30)} months ago`;

            return (
                <div className="text-sm">
                    <div className="font-medium text-gray-900">{timeAgo}</div>
                    <div className="text-xs text-gray-500">
                        {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                </div>
            );
        },
        width: '130px',
    },
    {
        header: 'Actions',
        accessor: 'id',
        sortable: false,
        filterable: false,
        cell: (_value, row) => (
            <div className="flex items-center gap-1">
                <button
                    className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                    title={`Edit ${row.name}`}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </button>
                <button
                    className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200"
                    title={`View ${row.name}`}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </button>
                <button
                    className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                    title={`Delete ${row.name}`}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        ),
        width: '120px',
    },
];

// Basic Example
export const Basic: Story = {
    args: {
        data: users,
        columns,
    },
};

// With Sorting and Filtering
export const WithSortingAndFiltering: Story = {
    args: {
        data: users,
        columns,
        sortable: true,
        filterable: true,
        showFilters: true,
    },
};

// With Pagination
export const WithPagination: Story = {
    args: {
        data: users,
        columns,
        enablePagination: true,
        defaultPageSize: 5,
        pageSizeOptions: [5, 10, 20],
    },
};

// With Row Selection
export const WithRowSelection: Story = {
    args: {
        data: users,
        columns,
        selectable: true,
    },
};

// Compact Table
export const CompactTable: Story = {
    args: {
        data: users,
        columns,
        compact: true,
        striped: true,
    },
};

// Custom Styling
export const CustomStyling: Story = {
    args: {
        data: users,
        columns,
        bordered: false,
        striped: true,
        hoverable: true,
        className: 'shadow-lg rounded-lg overflow-hidden',
    },
};

// Loading State
export const LoadingState: Story = {
    args: {
        data: users,
        columns,
        loading: true,
    },
};

// Empty State
export const EmptyState: Story = {
    args: {
        data: [],
        columns,
        noDataText: 'No users found. Try a different search or add a new user.',
    },
};

// With Custom Row Click Handler
export const WithRowClickHandler: Story = {
    args: {
        data: users,
        columns: columns.filter(col => col.accessor !== 'actions'), // Remove actions column
        onRowClick: (row: User) => alert(`Row clicked: ${row.name}`),
        hoverable: true,
        rowClassName: 'cursor-pointer',
    },
};

// Generate large dataset for virtualization demo
const generateLargeDataset = (count: number) => {
    const result: User[] = [];
    const roles = ['Admin', 'Editor', 'Viewer'];
    const statuses: ('active' | 'inactive' | 'pending')[] = ['active', 'inactive', 'pending'];

    for (let i = 0; i < count; i++) {
        const randomDate = () => {
            const start = new Date(2022, 0, 1);
            const end = new Date();
            const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
            return date.toISOString().split('T')[0];
        };

        result.push({
            id: i + 1,
            name: `User ${i + 1}`,
            email: `user${i + 1}@example.com`,
            role: roles[Math.floor(Math.random() * roles.length)],
            status: statuses[Math.floor(Math.random() * statuses.length)],
            joinDate: randomDate(),
            lastLogin: randomDate()
        });
    }

    return result;
};

// Modern Design Showcase
export const ModernDesign: Story = {
    args: {
        data: users,
        columns,
        sortable: true,
        filterable: true,
        showFilters: true,
        selectable: true,
        striped: true,
        hoverable: true,
        bordered: true,
        defaultPageSize: 5,
        pageSizeOptions: [5, 10, 25],
    },
};

// Virtualized Table for Large Datasets
export const VirtualizedTable: Story = {
    args: {
        data: generateLargeDataset(1000),
        columns,
        virtualized: true,
        virtualizedHeight: '400px',
        rowHeight: 48,
        enablePagination: false, // Disable pagination when using virtualization
    },
};

// With Resizable Columns
export const ResizableColumns: Story = {
    args: {
        data: users,
        columns: columns.map(col => ({
            ...col,
            // Set initial widths for resizable columns
            width: col.accessor === 'id' ? '80px' :
                col.accessor === 'email' ? '250px' :
                    col.accessor === 'name' ? '180px' : undefined,
            minWidth: '80px',
        })),
        resizableColumns: true,
    },
};
