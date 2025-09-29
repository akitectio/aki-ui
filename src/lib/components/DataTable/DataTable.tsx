import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';

// API Integration Interfaces
export interface ApiDataTableSort {
    column: string;
    direction: 'asc' | 'desc';
}

export interface ApiDataTablePagination {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
}

export interface ApiDataTableResponse<T> {
    success: boolean;
    data: T[];
    pagination: ApiDataTablePagination;
    filters?: Record<string, any>;
    sort?: ApiDataTableSort;
    message?: string;
    error?: string;
}

export interface AdvancedDataTableFilter {
    key: string;
    type: 'text' | 'select' | 'date' | 'number' | 'boolean' | 'dateRange';
    label: string;
    placeholder?: string;
    options?: { value: string | number; label: string }[];
    defaultValue?: string | number | boolean;
}

export interface BulkAction {
    key: string;
    label: string;
    icon?: React.ReactNode;
    action: (selectedIds: React.Key[]) => void | Promise<void>;
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: (selectedIds: React.Key[]) => boolean;
}

export interface DataTableFilter {
    key: string;
    type: 'text' | 'select' | 'date' | 'number' | 'boolean' | 'dateRange';
    label: string;
    placeholder?: string;
    options?: { value: string | number; label: string }[];
    defaultValue?: string | number | boolean;
}

export interface Column<T> {
    /**
     * The header label for the column
     */
    header: React.ReactNode;

    /**
     * Accessor key to get the value from the data object
     */
    accessor: keyof T | string;

    /**
     * Optional custom cell renderer
     */
    cell?: (value: any, row: T, index: number) => React.ReactNode;

    /**
     * Whether this column is sortable
     * @default true
     */
    sortable?: boolean;

    /**
     * Whether this column is filterable
     * @default true
     */
    filterable?: boolean;

    /**
     * Width of the column (CSS value)
     * @example '200px', '20%'
     */
    width?: string;

    /**
     * Minimum width of the column
     */
    minWidth?: string;

    /**
     * Maximum width of the column
     */
    maxWidth?: string;

    /**
     * Whether this column can be resized
     * @default true
     */
    resizable?: boolean;

    /**
     * CSS class for the column
     */
    className?: string;

    /**
     * Whether the column should be hidden
     */
    hidden?: boolean;

    /**
     * Column alignment
     * @default 'left'
     */
    align?: 'left' | 'center' | 'right';

    /**
     * Whether the column is pinned (sticky)
     */
    pinned?: 'left' | 'right';

    /**
     * Custom filter component
     */
    filterComponent?: React.ComponentType<{
        value: string;
        onChange: (value: string) => void;
        placeholder?: string;
    }>;

    /**
     * Tooltip for the column header
     */
    tooltip?: string;

    /**
     * Whether column is required (for form tables)
     */
    required?: boolean;
}

export type SortDirection = 'asc' | 'desc';

export interface Sort {
    id: string;
    direction: SortDirection;
}

export interface Filter {
    id: string;
    value: string;
}

export interface PaginationState {
    pageIndex: number;
    pageSize: number;
}

export interface DataTableProps<T> {
    /**
     * The data to display in the table
     */
    data: T[];

    /**
     * Column definitions for the table
     */
    columns: Column<T>[];

    /**
     * Whether to show the table header
     * @default true
     */
    showHeader?: boolean;

    /**
     * CSS classes for the table
     */
    className?: string;

    /**
     * Whether the table can be sorted
     * @default true
     */
    sortable?: boolean;

    /**
     * Default sort order
     */
    defaultSort?: Sort;

    /**
     * Whether the table can be filtered
     * @default true
     */
    filterable?: boolean;

    /**
     * Whether to show the filter inputs in the header
     * @default false
     */
    showFilters?: boolean;

    /**
     * Whether the table has pagination
     * @default true
     */
    enablePagination?: boolean;

    /**
     * Default page size
     * @default 10
     */
    defaultPageSize?: number;

    /**
     * Available page sizes
     * @default [10, 25, 50, 100]
     */
    pageSizeOptions?: number[];

    /**
     * Whether the table is in a loading state
     * @default false
     */
    loading?: boolean;

    /**
     * Text to display when there is no data
     * @default 'No data available'
     */
    noDataText?: React.ReactNode;

    /**
     * Whether the table has zebra striping
     * @default true
     */
    striped?: boolean;

    /**
     * Whether the table rows are hoverable
     * @default true
     */
    hoverable?: boolean;

    /**
     * Whether the table has borders
     * @default true
     */
    bordered?: boolean;

    /**
     * Whether the table is compact
     * @default false
     */
    compact?: boolean;

    /**
     * Whether to enable row selection
     * @default false
     */
    selectable?: boolean;

    /**
     * Selected row keys
     */
    selectedRowKeys?: React.Key[];

    /**
     * Called when selected rows change
     */
    onSelectionChange?: (selectedRowKeys: React.Key[]) => void;

    /**
     * Function to get a unique key for each row
     * @default (row, index) => index
     */
    rowKey?: (row: T, index: number) => React.Key;

    /**
     * Called when a row is clicked
     */
    onRowClick?: (row: T, index: number) => void;

    /**
     * CSS class for the rows
     */
    rowClassName?: string | ((row: T, index: number) => string);

    /**
     * Additional row props
     */
    rowProps?: React.HTMLAttributes<HTMLTableRowElement> | ((row: T, index: number) => React.HTMLAttributes<HTMLTableRowElement>);

    /**
     * Whether to enable column resizing
     * @default false
     */
    resizableColumns?: boolean;

    /**
     * Whether to enable virtualization for large datasets
     * Only renders visible rows for better performance with large datasets
     * @default false
     */
    virtualized?: boolean;

    /**
     * Height of the table when virtualized (CSS value)
     * Required when virtualized is true
     * @default '400px'
     */
    virtualizedHeight?: string;

    /**
     * Height of each row when virtualized (in pixels)
     * @default 48
     */
    rowHeight?: number;

    /**
     * Number of buffer rows to render above/below the visible area
     * @default 10
     */
    overscanCount?: number;

    /**
     * Enable bulk actions for selected rows
     */
    bulkActions?: Array<{
        label: string;
        icon?: React.ReactNode;
        action: (selectedRows: T[], selectedKeys: React.Key[]) => void | Promise<void>;
        variant?: 'default' | 'destructive' | 'success' | 'warning';
        disabled?: boolean;
    }>;

    /**
     * Enable export functionality
     */
    enableExport?: boolean;

    /**
     * Export formats available
     * @default ['csv', 'json']
     */
    exportFormats?: Array<'csv' | 'json' | 'xlsx'>;

    /**
     * Custom export function
     */
    onExport?: (format: string, data: T[]) => void;

    /**
     * Whether to show column visibility toggle
     * @default false
     */
    showColumnToggle?: boolean;

    /**
     * Whether to enable row expansion
     * @default false
     */
    expandable?: boolean;

    /**
     * Function to render expanded row content
     */
    renderExpandedRow?: (row: T, index: number) => React.ReactNode;

    /**
     * Expanded row keys
     */
    expandedRowKeys?: React.Key[];

    /**
     * Called when expanded rows change
     */
    onExpandedRowsChange?: (expandedKeys: React.Key[]) => void;

    /**
     * Table caption for accessibility
     */
    caption?: string;

    /**
     * Custom empty state component
     */
    emptyStateComponent?: React.ComponentType;

    /**
     * Custom loading component
     */
    loadingComponent?: React.ComponentType;

    /**
     * Error state
     */
    error?: string | Error;

    /**
     * Custom error component
     */
    errorComponent?: React.ComponentType<{ error: string | Error }>;

    /**
     * Whether to enable keyboard navigation
     * @default true
     */
    keyboardNavigation?: boolean;

    /**
     * Custom row height function for dynamic row heights
     */
    getRowHeight?: (row: T, index: number) => number;

    /**
     * Whether to enable drag and drop for rows
     * @default false
     */
    dragDropEnabled?: boolean;

    /**
     * Called when rows are reordered via drag and drop
     */
    onRowsReorder?: (newData: T[]) => void;

    /**
     * Maximum height of the table (enables scroll)
     */
    maxHeight?: string;

    /**
     * Whether to stick the header when scrolling
     * @default false
     */
    stickyHeader?: boolean;

    /**
     * Called when sorting changes
     */
    onSortChange?: (sorts: Sort[]) => void;

    /**
     * Called when filters change
     */
    onFilterChange?: (filters: Filter[]) => void;

    /**
     * Called when pagination changes
     */
    onPaginationChange?: (pagination: PaginationState) => void;

    /**
     * Global search functionality
     */
    searchable?: boolean;

    /**
     * Search value
     */
    searchValue?: string;

    /**
     * Called when search value changes
     */
    onSearchChange?: (value: string) => void;

    /**
     * Search placeholder text
     */
    searchPlaceholder?: string;

    /**
     * Whether to show search clear button
     * @default true
     */
    showSearchClear?: boolean;

    /**
     * Debounce delay for search (in ms)
     * @default 300
     */
    searchDebounce?: number;

    // Advanced API Integration Features
    /**
     * API endpoint for server-side data fetching
     */
    apiEndpoint?: string;

    /**
     * Initial data for the table (Laravel pagination format)
     */
    initialData?: {
        data: T[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };

    /**
     * Advanced filters configuration with UI
     */
    advancedFilters?: AdvancedDataTableFilter[];

    /**
     * Whether to enable export functionality with UI
     * @default false
     */
    enableExportUI?: boolean;

    /**
     * Export filename prefix
     * @default 'data-export'
     */
    exportFilename?: string;

    /**
     * Whether to enable refresh button
     * @default false
     */
    enableRefresh?: boolean;

    /**
     * Table title for the UI header
     */
    title?: string;

    /**
     * Table description for the UI header
     */
    description?: string;

    /**
     * API call handler for custom API integration
     */
    onApiCall?: (params: {
        page?: number;
        limit?: number;
        search?: string;
        filters?: Record<string, any>;
        sort?: ApiDataTableSort;
    }) => Promise<void>;

    /**
     * Refresh handler
     */
    onRefresh?: () => void | Promise<void>;

    /**
     * Whether to show advanced UI wrapper (search bar, filters, actions)
     * @default false
     */
    showAdvancedUI?: boolean;
}

export function DataTable<T>({
    data,
    columns,
    showHeader = true,
    className = '',
    sortable = true,
    defaultSort,
    filterable = true,
    showFilters = false,
    enablePagination = true,
    defaultPageSize = 10,
    pageSizeOptions = [10, 25, 50, 100],
    loading = false,
    noDataText = 'No data available',
    striped = true,
    hoverable = true,
    bordered = true,
    compact = false,
    selectable = false,
    selectedRowKeys,
    onSelectionChange,
    rowKey = (_, index) => index,
    onRowClick,
    rowClassName,
    rowProps,
    resizableColumns = false,
    virtualized = false,
    virtualizedHeight = '400px',
    rowHeight = 48,
    overscanCount = 10,
    // Advanced features - will be implemented gradually
    // bulkActions = [],
    // enableExport = false,
    // exportFormats = ['csv', 'json'],
    // onExport,
    // showColumnToggle = false,
    // expandable = false,
    // renderExpandedRow,
    // expandedRowKeys,
    // onExpandedRowsChange,
    // caption,
    // emptyStateComponent: EmptyStateComponent,
    // loadingComponent: LoadingComponent,
    // error,
    // errorComponent: ErrorComponent,
    // keyboardNavigation = true,
    // getRowHeight,
    // dragDropEnabled = false,
    // onRowsReorder,
    // maxHeight,
    // stickyHeader = false,
    // showSearchClear = true,
    // onSortChange,
    // onFilterChange,
    // onPaginationChange,
    // searchable = false,
    // searchValue,
    // onSearchChange,
    // searchPlaceholder = 'Search...',
    // searchDebounce = 300,
}: DataTableProps<T>) {
    // Memoize the column map for faster lookups
    const columnMap = useMemo(() =>
        new Map(columns.map(col => [col.accessor, col])),
        [columns]
    );

    // State for sorting - only update when explicitly changing
    const [sorts, setSorts] = useState<Sort[]>(() =>
        defaultSort ? [defaultSort] : []
    );

    // State for filtering - only update when explicitly changing
    const [filters, setFilters] = useState<Filter[]>([]);

    // State for pagination - memoize default to prevent unnecessary re-renders
    const [paginationState, setPaginationState] = useState<PaginationState>(() => ({
        pageIndex: 0,
        pageSize: defaultPageSize,
    }));

    // Search state - will be uncommented when implementing search
    // const [internalSearchValue, setInternalSearchValue] = useState<string>('');
    // const isSearchControlled = searchValue !== undefined;
    // const currentSearchValue = isSearchControlled ? searchValue : internalSearchValue;

    // Use controlled or uncontrolled selection mode
    const isControlled = selectedRowKeys !== undefined;
    const [selected, setSelected] = useState<React.Key[]>(() =>
        isControlled ? selectedRowKeys : []
    );

    // Sync with controlled props
    useEffect(() => {
        if (isControlled) {
            setSelected(selectedRowKeys || []);
        }
    }, [isControlled, selectedRowKeys]);

    // Track if component is mounted to prevent state updates after unmount
    const isMounted = useRef(true);
    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    // Process data client-side with memoization
    const processedData = useMemo(() => {
        let result = data;

        // Apply filters - only if filters exist
        if (filters.length > 0) {
            result = result.filter((row: T) => {
                return filters.every(filter => {
                    const column = columnMap.get(filter.id);
                    if (!column || !filter.value) return true;

                    const cellValue = row[filter.id as keyof T];
                    if (cellValue === undefined || cellValue === null) return false;

                    const stringValue = String(cellValue).toLowerCase();
                    return stringValue.includes(filter.value.toLowerCase());
                });
            });
        }

        // Apply sorting - only if sorts exist
        if (sorts.length > 0) {
            // Create a new array to avoid mutating source
            result = [...result].sort((a, b) => {
                for (const sort of sorts) {
                    const column = columnMap.get(sort.id);
                    if (!column) continue;

                    const aValue = a[sort.id as keyof T];
                    const bValue = b[sort.id as keyof T];

                    // Skip equal values
                    if (aValue === bValue) continue;

                    const direction = sort.direction === 'asc' ? 1 : -1;

                    // Handle null/undefined values
                    if (aValue === null || aValue === undefined) return direction;
                    if (bValue === null || bValue === undefined) return -direction;

                    // Use localeCompare for string comparison (better i18n support)
                    if (typeof aValue === 'string' && typeof bValue === 'string') {
                        return aValue.localeCompare(bValue) * direction;
                    }

                    // Default comparison for numbers/other types
                    return (aValue < bValue ? -1 : 1) * direction;
                }

                return 0;
            });
        }

        return result;
    }, [data, columnMap, filters, sorts]);

    // Calculate total count with error handling
    const totalCount = useMemo(() => {
        try {
            return Math.max(0, processedData.length);
        } catch (error) {
            console.error('DataTable: Error calculating total count:', error);
            return 0;
        }
    }, [processedData]);

    // Get visible columns
    const visibleColumns = useMemo(() =>
        columns.filter(column => !column.hidden),
        [columns]
    );

    // Handle sort with debouncing for performance
    const handleSort = useCallback((columnId: string) => {
        if (!sortable) return;

        const column = columnMap.get(columnId);
        if (!column || column.sortable === false) return;

        setSorts(prevSorts => {
            const existingSort = prevSorts.find(sort => sort.id === columnId);

            if (existingSort) {
                // Toggle direction or remove if already desc
                if (existingSort.direction === 'asc') {
                    return prevSorts.map(sort =>
                        sort.id === columnId ? { ...sort, direction: 'desc' } : sort
                    );
                } else {
                    return prevSorts.filter(sort => sort.id !== columnId);
                }
            } else {
                // Add new sort
                return [...prevSorts, { id: columnId, direction: 'asc' }];
            }
        });
    }, [sortable, columnMap]);

    // Filter input debouncing
    const filterDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Handle filter with debouncing for performance
    const handleFilter = useCallback((columnId: string, value: string) => {
        if (!filterable) return;

        const column = columnMap.get(columnId);
        if (!column || column.filterable === false) return;

        // Clear existing timeout
        if (filterDebounceRef.current) {
            clearTimeout(filterDebounceRef.current);
        }

        // Set a new timeout to update filter state
        filterDebounceRef.current = setTimeout(() => {
            setFilters(prevFilters => {
                const existingFilter = prevFilters.find(filter => filter.id === columnId);

                if (existingFilter) {
                    if (value) {
                        // Update existing filter
                        return prevFilters.map(filter =>
                            filter.id === columnId ? { ...filter, value } : filter
                        );
                    } else {
                        // Remove filter if value is empty
                        return prevFilters.filter(filter => filter.id !== columnId);
                    }
                } else if (value) {
                    // Add new filter
                    return [...prevFilters, { id: columnId, value }];
                }

                return prevFilters;
            });
        }, 300); // 300ms debounce

    }, [filterable, columnMap]);

    // Cleanup filter debounce on unmount
    useEffect(() => {
        return () => {
            if (filterDebounceRef.current) {
                clearTimeout(filterDebounceRef.current);
            }
        };
    }, []);

    // Handle pagination
    const handlePageChange = useCallback((pageIndex: number) => {
        setPaginationState(prev => ({
            ...prev,
            pageIndex: pageIndex
        }));
    }, []);

    const handlePageSizeChange = useCallback((pageSize: number) => {
        setPaginationState({
            pageIndex: 0,
            pageSize: pageSize
        });
    }, []);

    // Get paginated data - optimization for pagination with error handling
    const paginatedData = useMemo(() => {
        try {
            if (!enablePagination) {
                return processedData;
            }

            const { pageIndex, pageSize } = paginationState;

            // Validate pagination parameters
            if (pageIndex < 0 || pageSize <= 0) {
                console.warn('DataTable: Invalid pagination parameters');
                return processedData;
            }

            const start = pageIndex * pageSize;
            const end = start + pageSize;

            // Ensure we don't slice beyond array bounds
            return processedData.slice(start, Math.min(end, processedData.length));
        } catch (error) {
            console.error('DataTable: Error in pagination calculation:', error);
            return processedData;
        }
    }, [processedData, paginationState, enablePagination]);

    // Handle selection with optimized updates
    const handleSelectAll = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const allKeys = isChecked
            ? paginatedData.map((row: T, index: number) => rowKey(row, index))
            : [];

        // Update internal state if uncontrolled
        if (!isControlled) {
            setSelected(allKeys);
        }

        // Notify parent component
        if (onSelectionChange) {
            onSelectionChange(allKeys);
        }
    }, [paginatedData, rowKey, onSelectionChange, isControlled]);

    const handleSelectRow = useCallback((e: React.ChangeEvent<HTMLInputElement>, rowId: React.Key) => {
        e.stopPropagation();
        const isChecked = e.target.checked;

        const updateSelection = (prev: React.Key[]) => {
            return isChecked
                ? [...prev, rowId]
                : prev.filter(id => id !== rowId);
        };

        // Update internal state if uncontrolled
        if (!isControlled) {
            setSelected(prev => updateSelection(prev));
        }

        // Notify parent component
        if (onSelectionChange) {
            const newSelected = isControlled
                ? updateSelection(selected)
                : updateSelection(selected);

            onSelectionChange(newSelected);
        }
    }, [onSelectionChange, isControlled, selected]);

    // Calculate total pages - used in rendering pagination
    const calculatedTotalPages = useMemo(() => {
        if (!enablePagination) return 1;
        return Math.max(1, Math.ceil(totalCount / paginationState.pageSize));
    }, [totalCount, paginationState.pageSize, enablePagination]);

    // Get a sort for a column - using Map for O(1) lookup
    const sortsMap = useMemo(() =>
        new Map(sorts.map(sort => [sort.id, sort])),
        [sorts]
    );

    // Get a filter for a column - using Map for O(1) lookup
    const filtersMap = useMemo(() =>
        new Map(filters.map(filter => [filter.id, filter])),
        [filters]
    );

    // Check if all rows are selected
    const isAllSelected = useMemo(() => {
        return paginatedData.length > 0 &&
            selected.length >= paginatedData.length &&
            paginatedData.every((row: T, idx: number) =>
                selected.includes(rowKey(row, idx))
            );
    }, [paginatedData, selected, rowKey]);

    // Render sort indicator - memoize once
    const SortIndicatorNone = useMemo(() => (
        <span className="ml-2 text-gray-400 flex flex-col">
            <svg className="w-3 h-3 -mb-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
            </svg>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
        </span>
    ), []);

    const SortIndicatorAsc = useMemo(() => (
        <span className="ml-2 text-blue-600 flex flex-col">
            <svg className="w-3 h-3 -mb-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
            </svg>
            <svg className="w-3 h-3 opacity-30" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
        </span>
    ), []);

    const SortIndicatorDesc = useMemo(() => (
        <span className="ml-2 text-blue-600 flex flex-col">
            <svg className="w-3 h-3 -mb-0.5 opacity-30" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
            </svg>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
        </span>
    ), []);

    // Render sort indicator function - memoized
    const renderSortIndicator = useCallback((columnId: string) => {
        const sort = sortsMap.get(columnId);
        if (!sort) return SortIndicatorNone;
        return sort.direction === 'asc' ? SortIndicatorAsc : SortIndicatorDesc;
    }, [sortsMap, SortIndicatorNone, SortIndicatorAsc, SortIndicatorDesc]);

    // Render filter input - memoized
    const renderFilterInput = useCallback((column: Column<T>) => {
        if (!filterable || column.filterable === false) return null;

        const filter = filtersMap.get(column.accessor as string);

        return (
            <input
                type="text"
                className="w-full px-3 py-2 mt-3 text-xs bg-white border border-gray-200/60 rounded-lg focus:ring-2 focus:ring-blue-500/80 focus:border-blue-400 shadow-sm transition-all duration-200 ease-out placeholder-gray-400 text-gray-900"
                placeholder={`Filter ${column.header}...`}
                value={filter?.value || ''}
                onChange={(e) => handleFilter(column.accessor as string, e.target.value)}
                onClick={(e) => e.stopPropagation()}
                onFocus={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
            />
        );
    }, [filterable, filtersMap, handleFilter]);

    // Cell renderer optimization - memoize the cell rendering logic
    const renderCell = useCallback((row: T, column: Column<T>, rowIndex: number) => {
        const value = row[column.accessor as keyof T];

        if (column.cell) {
            return column.cell(value, row, rowIndex);
        }

        // Handle different value types safely
        if (value === undefined || value === null) {
            return '';
        }

        // If it's an object (but not a React element), try to stringify it safely
        if (typeof value === 'object' && !React.isValidElement(value)) {
            try {
                // For common object patterns, try to extract meaningful content
                if (value && typeof value === 'object') {
                    // If it has a name, title, or label property, use that
                    if ('name' in value && typeof value.name === 'string') {
                        return value.name;
                    }
                    if ('title' in value && typeof value.title === 'string') {
                        return value.title;
                    }
                    if ('label' in value && typeof value.label === 'string') {
                        return value.label;
                    }
                    // If it's an array, join with commas
                    if (Array.isArray(value)) {
                        return value.map(item =>
                            typeof item === 'object' ?
                                (item?.name || item?.title || item?.label || JSON.stringify(item)) :
                                String(item)
                        ).join(', ');
                    }
                    // Fallback: stringify the object
                    return JSON.stringify(value);
                }
            } catch (error) {
                console.warn('DataTable: Error rendering cell value', error);
                return '[Invalid Data]';
            }
        }

        return String(value);
    }, []);

    // Generate row class name efficiently - Modern 2025 styling
    const getRowClassName = useCallback((row: T, index: number) => {
        const classes = [];

        if (striped && index % 2 === 1) {
            classes.push('bg-gray-50/50');
        }

        if (hoverable) {
            classes.push('hover:bg-gray-50/80 hover:shadow-sm transition-all duration-200 ease-out');
        }

        if (typeof rowClassName === 'function') {
            classes.push(rowClassName(row, index));
        } else if (rowClassName) {
            classes.push(rowClassName);
        }

        return classes.join(' ');
    }, [striped, hoverable, rowClassName]);

    // Get row props efficiently
    const getRowProps = useCallback((row: T, index: number) => {
        const baseProps: React.HTMLAttributes<HTMLTableRowElement> = {};

        if (onRowClick) {
            baseProps.onClick = () => onRowClick(row, index);
            baseProps.style = { cursor: 'pointer' };
        }

        if (typeof rowProps === 'function') {
            return { ...baseProps, ...rowProps(row, index) };
        }

        if (rowProps) {
            return { ...baseProps, ...rowProps };
        }

        return baseProps;
    }, [onRowClick, rowProps]);

    // Pagination renderer - memoized for performance
    const PaginationComponent = useMemo(() => {
        if (!enablePagination) return null;

        const { pageIndex, pageSize } = paginationState;

        // Calculate visible page numbers
        const pageNumbers = [];
        const maxPages = 5;
        let startPage = Math.max(0, Math.min(pageIndex - Math.floor(maxPages / 2), calculatedTotalPages - maxPages));
        if (startPage < 0) startPage = 0;
        const endPage = Math.min(startPage + maxPages, calculatedTotalPages);

        for (let i = startPage; i < endPage; i++) {
            pageNumbers.push(i);
        }

        const showingFrom = totalCount === 0 ? 0 : pageIndex * pageSize + 1;
        const showingTo = Math.min((pageIndex + 1) * pageSize, totalCount);

        return (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 mt-1 bg-gray-50/30 border-t border-gray-200 rounded-b-2xl">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                        <label className="text-sm font-medium text-gray-700">Rows per page:</label>
                        <select
                            className="px-3 py-1.5 text-sm bg-white border border-gray-200/60 rounded-lg focus:ring-2 focus:ring-blue-500/80 focus:border-blue-400 transition-all duration-200 hover:border-gray-300 text-gray-900"
                            value={pageSize}
                            onChange={(e) => handlePageSizeChange(Number(e.target.value))}
                        >
                            {pageSizeOptions.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                    <span className="text-sm text-gray-600 font-medium">
                        {totalCount > 0
                            ? `Showing ${showingFrom}-${showingTo} of ${totalCount} results`
                            : 'No results'}
                    </span>
                </div>

                <div className="flex items-center gap-1">
                    <button
                        className={`p-2 text-sm font-medium rounded-lg transition-all duration-200 ${pageIndex === 0
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm active:scale-95'}`}
                        onClick={() => handlePageChange(0)}
                        disabled={pageIndex === 0}
                        type="button"
                        aria-label="Go to first page"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        className={`p-2 text-sm font-medium rounded-lg transition-all duration-200 ${pageIndex === 0
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm active:scale-95'}`}
                        onClick={() => handlePageChange(pageIndex - 1)}
                        disabled={pageIndex === 0}
                        type="button"
                        aria-label="Go to previous page"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="flex items-center gap-1 mx-2">
                        {pageNumbers.map((page) => (
                            <button
                                key={page}
                                className={`min-w-[36px] h-9 px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${pageIndex === page
                                    ? 'bg-blue-600 text-white shadow-sm'
                                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm active:scale-95'
                                    }`}
                                onClick={() => handlePageChange(page)}
                                type="button"
                                aria-label={`Go to page ${page + 1}`}
                                aria-current={pageIndex === page ? 'page' : undefined}
                            >
                                {page + 1}
                            </button>
                        ))}
                    </div>

                    <button
                        className={`p-2 text-sm font-medium rounded-lg transition-all duration-200 ${pageIndex >= calculatedTotalPages - 1
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm active:scale-95'}`}
                        onClick={() => handlePageChange(pageIndex + 1)}
                        disabled={pageIndex >= calculatedTotalPages - 1}
                        type="button"
                        aria-label="Go to next page"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button
                        className={`p-2 text-sm font-medium rounded-lg transition-all duration-200 ${pageIndex >= calculatedTotalPages - 1
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm active:scale-95'}`}
                        onClick={() => handlePageChange(calculatedTotalPages - 1)}
                        disabled={pageIndex >= calculatedTotalPages - 1}
                        type="button"
                        aria-label="Go to last page"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }, [
        enablePagination,
        paginationState,
        calculatedTotalPages,
        totalCount,
        pageSizeOptions,
        handlePageSizeChange,
        handlePageChange
    ]);

    // Memoize the table class names - Modern 2025 styling
    const tableClassName = useMemo(() => `
        min-w-full 
        divide-y 
        divide-gray-200
        ${bordered ? 'border border-gray-200' : ''} 
        ${compact ? 'text-xs' : 'text-sm'} 
        overflow-hidden
        bg-white
        ${className}
    `, [bordered, compact, className]);

    // Loading spinner component - Modern 2025 styling
    const LoadingOverlay = useMemo(() => {
        if (!loading) return null;

        return (
            <div className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-md z-10 rounded-2xl">
                <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                        <div className="animate-spin rounded-full h-10 w-10 border-3 border-gray-200"></div>
                        <div className="animate-spin rounded-full h-10 w-10 border-3 border-t-blue-600 border-r-transparent absolute inset-0"></div>
                    </div>
                    <p className="text-sm text-gray-900 font-medium animate-pulse">Loading data...</p>
                </div>
            </div>
        );
    }, [loading]);

    // Virtual scrolling state
    const tableRef = useRef<HTMLDivElement>(null);
    const [scrollTop, setScrollTop] = useState(0);

    // Handle scroll events for virtualization
    const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
        if (virtualized) {
            setScrollTop(e.currentTarget.scrollTop);
        }
    }, [virtualized]);

    // Calculate visible rows for virtualization
    const visibleRowsInfo = useMemo(() => {
        if (!virtualized || !tableRef.current) {
            return {
                startIndex: 0,
                endIndex: paginatedData.length - 1,
                visibleRows: paginatedData,
                totalHeight: 'auto',
                offsetY: 0
            };
        }

        const visibleHeight = tableRef.current.clientHeight;
        const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - overscanCount);
        const endIndex = Math.min(
            paginatedData.length - 1,
            Math.ceil((scrollTop + visibleHeight) / rowHeight) + overscanCount
        );

        // Only render the visible rows plus overscan
        const visibleRows = paginatedData.slice(startIndex, endIndex + 1);

        return {
            startIndex,
            endIndex,
            visibleRows,
            totalHeight: paginatedData.length * rowHeight,
            offsetY: startIndex * rowHeight
        };
    }, [virtualized, paginatedData, scrollTop, rowHeight, overscanCount]);

    // State for column widths when using resizable columns
    const [columnWidths, setColumnWidths] = useState<Record<string, string>>(() => {
        if (!resizableColumns) return {};

        // Initialize with column widths from props
        const initialWidths: Record<string, string> = {};
        columns.forEach(col => {
            const accessor = col.accessor as string;
            if (col.width) {
                initialWidths[accessor] = col.width;
            }
        });

        return initialWidths;
    });

    // Handle column resize
    const handleColumnResize = useCallback((columnId: string, newWidth: number) => {
        if (!resizableColumns) return;

        setColumnWidths(prev => ({
            ...prev,
            [columnId]: `${newWidth}px`
        }));
    }, [resizableColumns]);

    // Track column resize state
    const resizeStartXRef = useRef<number | null>(null);
    const resizeColumnIdRef = useRef<string | null>(null);
    const resizeStartWidthRef = useRef<number | null>(null);
    const columnRefs = useRef<Record<string, HTMLTableCellElement | null>>({});

    // Column resize handlers
    const handleResizeStart = useCallback((e: React.MouseEvent, columnId: string) => {
        if (!resizableColumns) return;

        e.preventDefault();
        e.stopPropagation();

        const column = columnMap.get(columnId);
        if (!column || column.resizable === false) return;

        // Store initial values
        resizeStartXRef.current = e.clientX;
        resizeColumnIdRef.current = columnId;

        // Get current column width
        const columnEl = columnRefs.current[columnId];
        if (columnEl) {
            resizeStartWidthRef.current = columnEl.getBoundingClientRect().width;
        }

        // Add event listeners for dragging
        document.addEventListener('mousemove', handleResizeMove);
        document.addEventListener('mouseup', handleResizeEnd);
    }, [resizableColumns, columnMap]);

    const handleResizeMove = useCallback((e: MouseEvent) => {
        if (
            resizeStartXRef.current === null ||
            resizeColumnIdRef.current === null ||
            resizeStartWidthRef.current === null
        ) return;

        // Calculate width change
        const deltaX = e.clientX - resizeStartXRef.current;
        const newWidth = Math.max(50, resizeStartWidthRef.current + deltaX);

        // Apply new width
        handleColumnResize(resizeColumnIdRef.current, newWidth);
    }, [handleColumnResize]);

    const handleResizeEnd = useCallback(() => {
        // Reset refs
        resizeStartXRef.current = null;
        resizeColumnIdRef.current = null;
        resizeStartWidthRef.current = null;

        // Remove event listeners
        document.removeEventListener('mousemove', handleResizeMove);
        document.removeEventListener('mouseup', handleResizeEnd);
    }, [handleResizeMove]);

    // Cleanup resize event listeners
    useEffect(() => {
        return () => {
            document.removeEventListener('mousemove', handleResizeMove);
            document.removeEventListener('mouseup', handleResizeEnd);
        };
    }, [handleResizeMove, handleResizeEnd]);

    return (
        <div className="relative overflow-hidden bg-white rounded-2xl shadow-sm border border-gray-200/60 ring-1 ring-gray-900/5" role="region" aria-label="Data table">
            <div
                ref={tableRef}
                className={`overflow-x-auto ${virtualized ? 'overflow-y-scroll' : 'overflow-y-auto'} scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100`}
                style={{ height: virtualized ? virtualizedHeight : 'auto' }}
                onScroll={handleScroll}
                role="table"
                aria-live="polite"
                aria-busy={loading}
            >
                {LoadingOverlay}

                <table
                    className={tableClassName}
                    style={{ height: virtualized ? `${visibleRowsInfo.totalHeight}px` : 'auto' }}
                    role="table"
                    aria-label="Data table"
                    aria-rowcount={totalCount}
                    aria-colcount={visibleColumns.length + (selectable ? 1 : 0)}
                >
                    {showHeader && (
                        <thead className="bg-gradient-to-r from-gray-50/80 to-gray-50/60 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-200/60" role="rowgroup">
                            <tr role="row">
                                {selectable && (
                                    <th
                                        className="px-6 py-4 w-16"
                                        role="columnheader"
                                        aria-label="Select all rows"
                                    >
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-white border-2 border-gray-300/80 rounded-md focus:ring-blue-500/80 focus:ring-2 focus:ring-offset-1 transition-all duration-200 hover:border-blue-400"
                                            checked={isAllSelected}
                                            onChange={handleSelectAll}
                                            disabled={paginatedData.length === 0}
                                            aria-label="Select all rows"
                                        />
                                    </th>
                                )}

                                {visibleColumns.map((column, index) => {
                                    const sortInfo = sorts.find(sort => sort.id === column.accessor);
                                    const isColumnSortable = column.sortable !== false && sortable;

                                    return (
                                        <th
                                            key={`header-${column.accessor?.toString() || index}`}
                                            className={`
                                                px-6 
                                                py-4 
                                                text-left 
                                                font-semibold 
                                                text-gray-900 
                                                tracking-tight
                                                text-sm
                                                leading-6
                                                ${isColumnSortable ? 'cursor-pointer hover:bg-gray-100/60 active:bg-gray-100/80 transition-all duration-200 ease-out' : ''} 
                                                ${column.className || ''}
                                                ${resizableColumns && column.resizable !== false ? 'relative' : ''}
                                                ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-left'}
                                            `}
                                            style={{
                                                width: columnWidths[column.accessor as string] || column.width,
                                                minWidth: column.minWidth
                                            }}
                                            onClick={() => isColumnSortable && handleSort(column.accessor as string)}
                                            ref={el => {
                                                if (el && resizableColumns) {
                                                    columnRefs.current[column.accessor as string] = el;
                                                }
                                            }}
                                            role="columnheader"
                                            scope="col"
                                            aria-sort={
                                                sortInfo
                                                    ? sortInfo.direction === 'asc'
                                                        ? 'ascending'
                                                        : 'descending'
                                                    : isColumnSortable
                                                        ? 'none'
                                                        : undefined
                                            }
                                            aria-label={`${column.header}${isColumnSortable ? '. Click to sort' : ''}`}
                                            tabIndex={isColumnSortable ? 0 : -1}
                                            onKeyDown={(e) => {
                                                if (isColumnSortable && (e.key === 'Enter' || e.key === ' ')) {
                                                    e.preventDefault();
                                                    handleSort(column.accessor as string);
                                                }
                                            }}
                                        >
                                            <div className="flex items-center justify-between group gap-2">
                                                <span className="text-sm font-semibold text-gray-900 tracking-tight">{column.header}</span>
                                                {isColumnSortable && (
                                                    <div className="opacity-40 group-hover:opacity-80 transition-all duration-200 ease-out transform group-hover:scale-110">
                                                        {renderSortIndicator(column.accessor as string)}
                                                    </div>
                                                )}
                                            </div>

                                            {showFilters && renderFilterInput(column)}

                                            {resizableColumns && column.resizable !== false && (
                                                <div
                                                    className="absolute top-0 right-0 h-full w-2 cursor-col-resize group hover:bg-blue-500 hover:opacity-50"
                                                    onMouseDown={(e) => handleResizeStart(e, column.accessor as string)}
                                                    aria-label={`Resize ${column.header} column`}
                                                    role="separator"
                                                    tabIndex={0}
                                                >
                                                    <div className="h-full w-px bg-gray-300 group-hover:bg-blue-500 ml-auto"></div>
                                                </div>
                                            )}
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                    )}

                    <tbody className="bg-white divide-y divide-gray-200/60" role="rowgroup">
                        {virtualized && (
                            <tr style={{ height: `${visibleRowsInfo.offsetY}px` }} aria-hidden="true">
                                <td colSpan={visibleColumns.length + (selectable ? 1 : 0)} />
                            </tr>
                        )}

                        {(virtualized ? visibleRowsInfo.visibleRows : paginatedData).length > 0 ? (
                            (virtualized ? visibleRowsInfo.visibleRows : paginatedData).map((row: T, localIndex: number) => {
                                // For virtualized scrolling, we need to calculate the actual index
                                const rowIndex = virtualized
                                    ? visibleRowsInfo.startIndex + localIndex
                                    : localIndex;

                                const rowId = rowKey(row, rowIndex);
                                // Ensure unique key by combining rowId with localIndex as fallback
                                const uniqueKey = `${rowId}-${localIndex}`;

                                return (
                                    <tr
                                        key={uniqueKey}
                                        className={getRowClassName(row, rowIndex)}
                                        {...getRowProps(row, rowIndex)}
                                        style={virtualized ? { height: `${rowHeight}px` } : undefined}
                                        role="row"
                                        aria-rowindex={rowIndex + 1}
                                        aria-selected={selectable ? selected.includes(rowId) : undefined}
                                        tabIndex={onRowClick ? 0 : -1}
                                        onKeyDown={onRowClick ? (e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                onRowClick(row, rowIndex);
                                            }
                                        } : undefined}
                                    >
                                        {selectable && (
                                            <td
                                                className="px-6 py-4 w-16"
                                                role="gridcell"
                                                aria-label={`Select row ${rowIndex + 1}`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 text-blue-600 bg-white border-2 border-gray-300/80 rounded-md focus:ring-blue-500/80 focus:ring-2 focus:ring-offset-1 transition-all duration-200 hover:border-blue-400 hover:scale-105"
                                                    checked={selected.includes(rowId)}
                                                    onChange={(e) => handleSelectRow(e, rowId)}
                                                    onClick={(e) => e.stopPropagation()}
                                                    aria-label={`Select row ${rowIndex + 1}`}
                                                />
                                            </td>
                                        )}

                                        {visibleColumns.map((column, index) => (
                                            <td
                                                key={`cell-${column.accessor?.toString() || index}`}
                                                className={`
                                                    px-6 
                                                    py-4
                                                    text-sm
                                                    text-gray-900
                                                    leading-relaxed
                                                    ${column.className || ''}
                                                    ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-left'}
                                                `}
                                                role="gridcell"
                                                aria-describedby={`${String(column.accessor)}-${rowIndex}`}
                                            >
                                                {renderCell(row, column, rowIndex)}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })
                        ) : (
                            <tr role="row">
                                <td
                                    colSpan={visibleColumns.length + (selectable ? 1 : 0)}
                                    className="px-6 py-16 text-center text-gray-500"
                                    role="gridcell"
                                    aria-label="No data available"
                                >
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="p-4 bg-gray-50/80 rounded-full">
                                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm font-semibold text-gray-900">No data found</p>
                                            <p className="text-xs text-gray-500">{noDataText}</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )}

                        {virtualized && (
                            <tr>
                                <td
                                    colSpan={visibleColumns.length + (selectable ? 1 : 0)}
                                    style={{
                                        height: `${Math.max(0, (paginatedData.length - (visibleRowsInfo.endIndex + 1)) * rowHeight)}px`,
                                        padding: 0
                                    }}
                                    aria-hidden="true"
                                />
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {PaginationComponent}
        </div>
    );
}

export default DataTable;
