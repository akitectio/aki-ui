import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';

// Define a type for setTimeout return value
// type TimeoutRef = ReturnType<typeof setTimeout>;

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
     * Server-side data loading function
     */
    onFetch?: (options: {
        paginationState: PaginationState,
        filters: Filter[],
        sorts: Sort[]
    }) => Promise<{ data: T[], totalCount: number }>;

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
    onFetch,
    resizableColumns = false,
    virtualized = false,
    virtualizedHeight = '400px',
    rowHeight = 48,
    overscanCount = 10,
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

    // Cache for server-side data
    const [serverData, setServerData] = useState<{
        data: T[],
        totalCount: number
    }>(() => ({
        data: onFetch ? [] : data,
        totalCount: onFetch ? 0 : data.length
    }));

    // Effect to fetch data if server-side - debounced to prevent rapid re-fetching
    const fetchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (!onFetch) return;

        // Clear any pending fetch
        if (fetchTimeoutRef.current) {
            clearTimeout(fetchTimeoutRef.current);
        }

        // Debounce the fetch call to prevent too many requests on rapid filter/sort changes
        fetchTimeoutRef.current = setTimeout(async () => {
            try {
                const result = await onFetch({
                    paginationState,
                    filters,
                    sorts,
                });

                if (isMounted.current) {
                    setServerData({
                        data: result.data,
                        totalCount: result.totalCount
                    });
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                if (isMounted.current) {
                    setServerData({
                        data: [],
                        totalCount: 0
                    });
                }
            }
        }, 200); // Debounce delay of 200ms

        return () => {
            if (fetchTimeoutRef.current) {
                clearTimeout(fetchTimeoutRef.current);
            }
        };
    }, [onFetch, paginationState, filters, sorts]);

    // Get source data based on whether using server-side or client-side
    const sourceData = useMemo(() =>
        onFetch ? serverData.data : data,
        [onFetch, serverData.data, data]
    );

    // Process data client-side with memoization
    const processedData = useMemo(() => {
        // Skip processing for server-side
        if (onFetch) return sourceData;

        let result = sourceData;

        // Apply filters - only if filters exist
        if (filters.length > 0) {
            result = result.filter(row => {
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
    }, [sourceData, columnMap, filters, sorts, onFetch]);

    // Calculate total count
    const totalCount = useMemo(() =>
        onFetch ? serverData.totalCount : processedData.length,
        [onFetch, serverData.totalCount, processedData]
    );

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

    // Get paginated data - optimization for pagination
    const paginatedData = useMemo(() => {
        if (!enablePagination || onFetch) {
            return processedData;
        }

        const { pageIndex, pageSize } = paginationState;
        const start = pageIndex * pageSize;
        const end = start + pageSize;

        return processedData.slice(start, end);
    }, [processedData, paginationState, onFetch, enablePagination]);

    // Handle selection with optimized updates
    const handleSelectAll = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const allKeys = isChecked
            ? paginatedData.map((row, index) => rowKey(row, index))
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
            paginatedData.every((row, idx) =>
                selected.includes(rowKey(row, idx))
            );
    }, [paginatedData, selected, rowKey]);

    // Render sort indicator - memoize once
    const SortIndicatorNone = useMemo(() => (
        <span className="ml-1 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
            </svg>
        </span>
    ), []);

    const SortIndicatorAsc = useMemo(() => (
        <span className="ml-1 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clipRule="evenodd" />
            </svg>
        </span>
    ), []);

    const SortIndicatorDesc = useMemo(() => (
        <span className="ml-1 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
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
                className="w-full p-1 text-sm border border-gray-300 rounded"
                placeholder={`Filter ${column.header}...`}
                value={filter?.value || ''}
                onChange={(e) => handleFilter(column.accessor as string, e.target.value)}
            />
        );
    }, [filterable, filtersMap, handleFilter]);

    // Cell renderer optimization - memoize the cell rendering logic
    const renderCell = useCallback((row: T, column: Column<T>, rowIndex: number) => {
        const value = row[column.accessor as keyof T];

        if (column.cell) {
            return column.cell(value, row, rowIndex);
        }

        return value !== undefined && value !== null ? String(value) : '';
    }, []);

    // Generate row class name efficiently
    const getRowClassName = useCallback((row: T, index: number) => {
        const classes = [];

        if (striped && index % 2 === 1) {
            classes.push('bg-gray-50');
        }

        if (hoverable) {
            classes.push('hover:bg-gray-100');
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
            <div className="flex flex-wrap items-center justify-between p-2 mt-2 bg-white border rounded">
                <div className="flex items-center mb-2 sm:mb-0">
                    <span className="mr-2 text-sm text-gray-600">Rows per page:</span>
                    <select
                        className="p-1 text-sm border border-gray-300 rounded"
                        value={pageSize}
                        onChange={(e) => handlePageSizeChange(Number(e.target.value))}
                    >
                        {pageSizeOptions.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                    <span className="ml-4 text-sm text-gray-600">
                        {totalCount > 0
                            ? `Showing ${showingFrom} to ${showingTo} of ${totalCount} entries`
                            : 'No entries'}
                    </span>
                </div>

                <div className="flex items-center space-x-1">
                    <button
                        className={`p-1 text-sm rounded ${pageIndex === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}
                        onClick={() => handlePageChange(0)}
                        disabled={pageIndex === 0}
                        type="button"
                    >
                        First
                    </button>
                    <button
                        className={`p-1 text-sm rounded ${pageIndex === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}
                        onClick={() => handlePageChange(pageIndex - 1)}
                        disabled={pageIndex === 0}
                        type="button"
                    >
                        Prev
                    </button>

                    {pageNumbers.map((page) => (
                        <button
                            key={page}
                            className={`px-2 py-1 text-sm rounded ${pageIndex === page ? 'bg-blue-500 text-white' : 'text-blue-600 hover:bg-blue-50'}`}
                            onClick={() => handlePageChange(page)}
                            type="button"
                        >
                            {page + 1}
                        </button>
                    ))}

                    <button
                        className={`p-1 text-sm rounded ${pageIndex >= calculatedTotalPages - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}
                        onClick={() => handlePageChange(pageIndex + 1)}
                        disabled={pageIndex >= calculatedTotalPages - 1}
                        type="button"
                    >
                        Next
                    </button>
                    <button
                        className={`p-1 text-sm rounded ${pageIndex >= calculatedTotalPages - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}
                        onClick={() => handlePageChange(calculatedTotalPages - 1)}
                        disabled={pageIndex >= calculatedTotalPages - 1}
                        type="button"
                    >
                        Last
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

    // Memoize the table class names
    const tableClassName = useMemo(() => `
        min-w-full 
        divide-y 
        divide-gray-200 
        ${bordered ? 'border border-gray-200' : ''} 
        ${compact ? 'text-xs' : 'text-sm'} 
        ${className}
    `, [bordered, compact, className]);

    // Loading spinner component - memoized
    const LoadingOverlay = useMemo(() => {
        if (!loading) return null;

        return (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 z-10">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
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
        <div className="relative overflow-hidden">
            <div
                ref={tableRef}
                className={`overflow-x-auto ${virtualized ? 'overflow-y-scroll' : 'overflow-y-auto'}`}
                style={{ height: virtualized ? virtualizedHeight : 'auto' }}
                onScroll={handleScroll}
            >
                {LoadingOverlay}

                <table className={tableClassName} style={{ height: virtualized ? `${visibleRowsInfo.totalHeight}px` : 'auto' }}>
                    {showHeader && (
                        <thead className="bg-gray-50 sticky top-0 z-10">
                            <tr>
                                {selectable && (
                                    <th className="px-3 py-2 border-b border-gray-200">
                                        <input
                                            type="checkbox"
                                            checked={isAllSelected}
                                            onChange={handleSelectAll}
                                            disabled={paginatedData.length === 0}
                                        />
                                    </th>
                                )}

                                {visibleColumns.map((column) => (
                                    <th
                                        key={column.accessor as string}
                                        className={`
                                            px-3 
                                            py-2 
                                            text-left 
                                            border-b 
                                            border-gray-200 
                                            font-medium 
                                            text-gray-700 
                                            ${column.sortable !== false && sortable ? 'cursor-pointer' : ''} 
                                            ${column.className || ''}
                                            ${resizableColumns && column.resizable !== false ? 'relative' : ''}
                                        `}
                                        style={{
                                            width: columnWidths[column.accessor as string] || column.width,
                                            minWidth: column.minWidth
                                        }}
                                        onClick={() => column.sortable !== false && sortable && handleSort(column.accessor as string)}
                                        ref={el => {
                                            if (el && resizableColumns) {
                                                columnRefs.current[column.accessor as string] = el;
                                            }
                                        }}
                                    >
                                        <div className="flex items-center">
                                            {column.header}
                                            {column.sortable !== false && sortable && renderSortIndicator(column.accessor as string)}
                                        </div>

                                        {showFilters && renderFilterInput(column)}

                                        {resizableColumns && column.resizable !== false && (
                                            <div
                                                className="absolute top-0 right-0 h-full w-2 cursor-col-resize group"
                                                onMouseDown={(e) => handleResizeStart(e, column.accessor as string)}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <div className="absolute right-0 top-0 h-full w-1 bg-gray-300 opacity-0 group-hover:opacity-100" />
                                            </div>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                    )}

                    <tbody className="bg-white divide-y divide-gray-200">
                        {virtualized && (
                            <tr style={{ height: `${visibleRowsInfo.offsetY}px` }} aria-hidden="true">
                                <td colSpan={visibleColumns.length + (selectable ? 1 : 0)} />
                            </tr>
                        )}

                        {(virtualized ? visibleRowsInfo.visibleRows : paginatedData).length > 0 ? (
                            (virtualized ? visibleRowsInfo.visibleRows : paginatedData).map((row, localIndex) => {
                                // For virtualized scrolling, we need to calculate the actual index
                                const rowIndex = virtualized
                                    ? visibleRowsInfo.startIndex + localIndex
                                    : localIndex;

                                const rowId = rowKey(row, rowIndex);

                                return (
                                    <tr
                                        key={rowId.toString()}
                                        className={getRowClassName(row, rowIndex)}
                                        {...getRowProps(row, rowIndex)}
                                        style={virtualized ? { height: `${rowHeight}px` } : undefined}
                                    >
                                        {selectable && (
                                            <td className="px-3 py-2 border-b border-gray-200">
                                                <input
                                                    type="checkbox"
                                                    checked={selected.includes(rowId)}
                                                    onChange={(e) => handleSelectRow(e, rowId)}
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                            </td>
                                        )}

                                        {visibleColumns.map((column) => (
                                            <td
                                                key={column.accessor as string}
                                                className={`
                                                    px-3 
                                                    py-2 
                                                    border-b 
                                                    border-gray-200 
                                                    ${column.className || ''}
                                                `}
                                            >
                                                {renderCell(row, column, rowIndex)}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td
                                    colSpan={visibleColumns.length + (selectable ? 1 : 0)}
                                    className="px-3 py-4 text-center text-gray-500"
                                >
                                    {noDataText}
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
