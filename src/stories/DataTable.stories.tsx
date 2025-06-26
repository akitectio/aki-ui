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
        lastLogin: '2023-06-24'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        role: 'Editor',
        status: 'active',
        joinDate: '2022-02-10',
        lastLogin: '2023-06-22'
    },
    {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        role: 'Viewer',
        status: 'inactive',
        joinDate: '2022-03-05',
        lastLogin: '2023-05-15'
    },
    {
        id: 4,
        name: 'Alice Williams',
        email: 'alice.williams@example.com',
        role: 'Editor',
        status: 'active',
        joinDate: '2022-04-20',
        lastLogin: '2023-06-23'
    },
    {
        id: 5,
        name: 'Charlie Brown',
        email: 'charlie.brown@example.com',
        role: 'Viewer',
        status: 'pending',
        joinDate: '2022-05-12',
        lastLogin: '2023-06-20'
    },
    {
        id: 6,
        name: 'Diana Miller',
        email: 'diana.miller@example.com',
        role: 'Admin',
        status: 'active',
        joinDate: '2022-06-08',
        lastLogin: '2023-06-21'
    },
    {
        id: 7,
        name: 'Edward Davis',
        email: 'edward.davis@example.com',
        role: 'Editor',
        status: 'inactive',
        joinDate: '2022-07-14',
        lastLogin: '2023-05-30'
    },
    {
        id: 8,
        name: 'Fiona Garcia',
        email: 'fiona.garcia@example.com',
        role: 'Viewer',
        status: 'active',
        joinDate: '2022-08-22',
        lastLogin: '2023-06-19'
    },
    {
        id: 9,
        name: 'George Harris',
        email: 'george.harris@example.com',
        role: 'Admin',
        status: 'pending',
        joinDate: '2022-09-17',
        lastLogin: '2023-06-18'
    },
    {
        id: 10,
        name: 'Hannah Lewis',
        email: 'hannah.lewis@example.com',
        role: 'Editor',
        status: 'active',
        joinDate: '2022-10-05',
        lastLogin: '2023-06-25'
    },
    {
        id: 11,
        name: 'Ian Walker',
        email: 'ian.walker@example.com',
        role: 'Viewer',
        status: 'inactive',
        joinDate: '2022-11-11',
        lastLogin: '2023-04-28'
    },
    {
        id: 12,
        name: 'Julia Roberts',
        email: 'julia.roberts@example.com',
        role: 'Admin',
        status: 'active',
        joinDate: '2022-12-29',
        lastLogin: '2023-06-24'
    },
];

// Sample columns
const columns: DataTableColumn<User>[] = [
    {
        header: 'ID',
        accessor: 'id',
        width: '70px',
    },
    {
        header: 'Name',
        accessor: 'name',
        cell: (value) => <span className="font-medium">{value}</span>,
    },
    {
        header: 'Email',
        accessor: 'email',
    },
    {
        header: 'Role',
        accessor: 'role',
        cell: (value) => {
            let badgeClass = '';
            switch (value) {
                case 'Admin':
                    badgeClass = 'bg-purple-100 text-purple-800';
                    break;
                case 'Editor':
                    badgeClass = 'bg-blue-100 text-blue-800';
                    break;
                case 'Viewer':
                    badgeClass = 'bg-gray-100 text-gray-800';
                    break;
                default:
                    badgeClass = 'bg-gray-100 text-gray-800';
            }
            return (
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${badgeClass}`}>
                    {value}
                </span>
            );
        },
    },
    {
        header: 'Status',
        accessor: 'status',
        cell: (value) => {
            let badgeClass = '';
            switch (value) {
                case 'active':
                    badgeClass = 'bg-green-100 text-green-800';
                    break;
                case 'inactive':
                    badgeClass = 'bg-red-100 text-red-800';
                    break;
                case 'pending':
                    badgeClass = 'bg-yellow-100 text-yellow-800';
                    break;
                default:
                    badgeClass = 'bg-gray-100 text-gray-800';
            }
            return (
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${badgeClass}`}>
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                </span>
            );
        },
    },
    {
        header: 'Join Date',
        accessor: 'joinDate',
    },
    {
        header: 'Last Login',
        accessor: 'lastLogin',
    },
    {
        header: 'Actions',
        accessor: 'id',
        sortable: false,
        filterable: false,
        cell: (_value) => (
            <div className="flex space-x-2">
                <button className="p-1 text-blue-500 hover:text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                </button>
                <button className="p-1 text-red-500 hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        ),
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
