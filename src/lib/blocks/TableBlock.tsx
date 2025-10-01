import { Card, Badge, Avatar } from '../components';

interface TableColumn {
  key: string;
  title: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: any) => React.ReactNode;
}

interface TableBlockProps {
  title?: string;
  columns: TableColumn[];
  data: any[];
  showPagination?: boolean;
  showSearch?: boolean;
  pageSize?: number;
  className?: string;
  actions?: {
    onEdit?: (row: any) => void;
    onDelete?: (row: any) => void;
    onView?: (row: any) => void;
  };
}

const defaultData = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2023-12-01',
    avatar: ''
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'Active',
    lastLogin: '2023-12-01',
    avatar: ''
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Editor',
    status: 'Inactive',
    lastLogin: '2023-11-28',
    avatar: ''
  }
];

const defaultColumns: TableColumn[] = [
  {
    key: 'name',
    title: 'User',
    render: (value, row) => (
      <div className="flex items-center space-x-3">
        <Avatar 
          src={row.avatar} 
          fallback={value.split(' ').map((n: string) => n[0]).join('')}
          size="sm"
        />
        <div>
          <div className="font-medium text-gray-900 dark:text-white">{value}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{row.email}</div>
        </div>
      </div>
    )
  },
  {
    key: 'role',
    title: 'Role',
    align: 'center'
  },
  {
    key: 'status',
    title: 'Status',
    align: 'center',
    render: (value) => (
      <Badge variant={value === 'Active' ? 'success' : 'secondary'}>
        {value}
      </Badge>
    )
  },
  {
    key: 'lastLogin',
    title: 'Last Login',
    align: 'right'
  }
];

export function TableBlock({
  title = 'Data Table',
  columns = defaultColumns,
  data = defaultData,
  showPagination = true,
  showSearch = true,
  pageSize = 10,
  className = '',
  actions
}: TableBlockProps) {
  return (
    <Card className={className}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          {showSearch && (
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              <svg 
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider ${
                    column.align === 'center' ? 'text-center' :
                    column.align === 'right' ? 'text-right' : 'text-left'
                  }`}
                  style={{ width: column.width }}
                >
                  {column.title}
                </th>
              ))}
              {actions && (
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            {data.slice(0, pageSize).map((row, index) => (
              <tr key={row.id || index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`px-6 py-4 whitespace-nowrap ${
                      column.align === 'center' ? 'text-center' :
                      column.align === 'right' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {column.render 
                      ? column.render(row[column.key], row)
                      : (
                        <span className="text-sm text-gray-900 dark:text-white">
                          {row[column.key]}
                        </span>
                      )
                    }
                  </td>
                ))}
                {actions && (
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      {actions.onView && (
                        <button
                          onClick={() => actions.onView!(row)}
                          className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          View
                        </button>
                      )}
                      {actions.onEdit && (
                        <button
                          onClick={() => actions.onEdit!(row)}
                          className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                        >
                          Edit
                        </button>
                      )}
                      {actions.onDelete && (
                        <button
                          onClick={() => actions.onDelete!(row)}
                          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {showPagination && data.length > pageSize && (
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Showing <span className="font-medium">1</span> to{' '}
              <span className="font-medium">{Math.min(pageSize, data.length)}</span> of{' '}
              <span className="font-medium">{data.length}</span> results
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white">
                Previous
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white">
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}