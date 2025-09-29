#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read the current metadata
const metadataPath = path.join(__dirname, 'src/tools/component-metadata.json');
const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));

// Enhanced DataTable metadata with all comprehensive props
const updatedDataTableMetadata = {
    name: "DataTable",
    category: "Data Display",
    description: "A comprehensive, modern table component with advanced features including server-side sorting, filtering, pagination, virtualization, drag-and-drop, bulk actions, export functionality, and API integration. Supports both client-side and server-side data operations with TypeScript interfaces for seamless backend integration.",
    props: {
        data: {
            type: "T[]",
            required: true,
            description: "The data to display in the table"
        },
        columns: {
            type: "Column<T>[]",
            required: true,
            description: "Column definitions for the table with accessor, header, cell renderers, and sorting options"
        },
        showHeader: {
            type: "boolean",
            default: "true",
            description: "Whether to show the table header"
        },
        className: {
            type: "string",
            description: "CSS classes for the table"
        },
        sortable: {
            type: "boolean",
            default: "true",
            description: "Whether the table can be sorted"
        },
        defaultSort: {
            type: "Sort",
            description: "Default sort order with column and direction"
        },
        filterable: {
            type: "boolean",
            default: "true",
            description: "Whether the table can be filtered"
        },
        showFilters: {
            type: "boolean",
            default: "false",
            description: "Whether to show the filter inputs in the header"
        },
        enablePagination: {
            type: "boolean",
            default: "true",
            description: "Whether the table has pagination"
        },
        defaultPageSize: {
            type: "number",
            default: "10",
            description: "Default page size"
        },
        pageSizeOptions: {
            type: "number[]",
            default: "[10, 25, 50, 100]",
            description: "Available page sizes"
        },
        loading: {
            type: "boolean",
            default: "false",
            description: "Whether the table is in a loading state"
        },
        noDataText: {
            type: "React.ReactNode",
            default: "'No data available'",
            description: "Text to display when there is no data"
        },
        striped: {
            type: "boolean",
            default: "true",
            description: "Whether the table has zebra striping"
        },
        hoverable: {
            type: "boolean",
            default: "true",
            description: "Whether the table rows are hoverable"
        },
        bordered: {
            type: "boolean",
            default: "true",
            description: "Whether the table has borders"
        },
        compact: {
            type: "boolean",
            default: "false",
            description: "Whether the table is compact"
        },
        selectable: {
            type: "boolean",
            default: "false",
            description: "Whether to enable row selection"
        },
        selectedRowKeys: {
            type: "React.Key[]",
            description: "Selected row keys"
        },
        onSelectionChange: {
            type: "(selectedRowKeys: React.Key[]) => void",
            description: "Called when selected rows change"
        },
        rowKey: {
            type: "(row: T, index: number) => React.Key",
            default: "(row, index) => index",
            description: "Function to get a unique key for each row"
        },
        onRowClick: {
            type: "(row: T, index: number) => void",
            description: "Called when a row is clicked"
        },
        rowClassName: {
            type: "string | ((row: T, index: number) => string)",
            description: "CSS class for the rows"
        },
        rowProps: {
            type: "React.HTMLAttributes<HTMLTableRowElement> | ((row: T, index: number) => React.HTMLAttributes<HTMLTableRowElement>)",
            description: "Additional row props"
        },
        resizableColumns: {
            type: "boolean",
            default: "false",
            description: "Whether to enable column resizing"
        },
        virtualized: {
            type: "boolean",
            default: "false",
            description: "Whether to enable virtualization for large datasets - only renders visible rows for better performance"
        },
        virtualizedHeight: {
            type: "string",
            default: "'400px'",
            description: "Height of the table when virtualized (CSS value) - required when virtualized is true"
        },
        rowHeight: {
            type: "number",
            default: "48",
            description: "Height of each row when virtualized (in pixels)"
        },
        overscanCount: {
            type: "number",
            default: "10",
            description: "Number of buffer rows to render above/below the visible area"
        },
        bulkActions: {
            type: "Array<{ label: string; icon?: React.ReactNode; action: (selectedRows: T[], selectedKeys: React.Key[]) => void | Promise<void>; variant?: 'default' | 'destructive' | 'success' | 'warning'; disabled?: boolean; }>",
            description: "Enable bulk actions for selected rows"
        },
        enableExport: {
            type: "boolean",
            description: "Enable export functionality"
        },
        exportFormats: {
            type: "Array<'csv' | 'json' | 'xlsx'>",
            default: "['csv', 'json']",
            description: "Export formats available"
        },
        onExport: {
            type: "(format: string, data: T[]) => void",
            description: "Custom export function"
        },
        showColumnToggle: {
            type: "boolean",
            default: "false",
            description: "Whether to show column visibility toggle"
        },
        expandable: {
            type: "boolean",
            default: "false",
            description: "Whether to enable row expansion"
        },
        renderExpandedRow: {
            type: "(row: T, index: number) => React.ReactNode",
            description: "Function to render expanded row content"
        },
        expandedRowKeys: {
            type: "React.Key[]",
            description: "Expanded row keys"
        },
        onExpandedRowsChange: {
            type: "(expandedKeys: React.Key[]) => void",
            description: "Called when expanded rows change"
        },
        caption: {
            type: "string",
            description: "Table caption for accessibility"
        },
        emptyStateComponent: {
            type: "React.ComponentType",
            description: "Custom empty state component"
        },
        loadingComponent: {
            type: "React.ComponentType",
            description: "Custom loading component"
        },
        error: {
            type: "string | Error",
            description: "Error state"
        },
        errorComponent: {
            type: "React.ComponentType<{ error: string | Error }>",
            description: "Custom error component"
        },
        keyboardNavigation: {
            type: "boolean",
            default: "true",
            description: "Whether to enable keyboard navigation"
        },
        getRowHeight: {
            type: "(row: T, index: number) => number",
            description: "Custom row height function for dynamic row heights"
        },
        dragDropEnabled: {
            type: "boolean",
            default: "false",
            description: "Whether to enable drag and drop for rows"
        },
        onRowsReorder: {
            type: "(newData: T[]) => void",
            description: "Called when rows are reordered via drag and drop"
        },
        maxHeight: {
            type: "string",
            description: "Maximum height of the table (enables scroll)"
        },
        stickyHeader: {
            type: "boolean",
            default: "false",
            description: "Whether to stick the header when scrolling"
        },
        onSortChange: {
            type: "(sorts: Sort[]) => void",
            description: "Called when sorting changes - essential for server-side sorting integration"
        },
        onFilterChange: {
            type: "(filters: Filter[]) => void",
            description: "Called when filters change"
        },
        onPaginationChange: {
            type: "(pagination: PaginationState) => void",
            description: "Called when pagination changes"
        },
        searchable: {
            type: "boolean",
            description: "Global search functionality"
        },
        searchValue: {
            type: "string",
            description: "Search value"
        },
        onSearchChange: {
            type: "(value: string) => void",
            description: "Called when search value changes"
        },
        searchPlaceholder: {
            type: "string",
            description: "Search placeholder text"
        },
        sorts: {
            type: "Sort[]",
            description: "Current sort state for server-side sorting - array of column and direction pairs"
        },
        filters: {
            type: "Filter[]",
            description: "Current filter state"
        },
        pagination: {
            type: "PaginationState",
            description: "Current pagination state with pageIndex and pageSize"
        },
        serverSide: {
            type: "boolean",
            default: "false",
            description: "Whether to use server-side data operations (sorting, filtering, pagination)"
        },
        totalCount: {
            type: "number",
            description: "Total number of records for server-side pagination"
        },
        onSort: {
            type: "(column: string, direction: 'asc' | 'desc') => void",
            description: "Callback for server-side sorting - receives column name and sort direction"
        }
    },
    apiInterfaces: {
        "ApiDataTableSort": "Interface for server-side sorting with column and direction",
        "ApiDataTablePagination": "Interface for server-side pagination with page, limit, total, and navigation flags",
        "ApiDataTableResponse<T>": "Standard API response interface for server-side DataTable integration",
        "Column<T>": "Column definition interface with accessor, header, cell renderer, and sorting configuration",
        "Sort": "Sort state interface with column and direction",
        "Filter": "Filter state interface for column filtering",
        "PaginationState": "Pagination state with pageIndex and pageSize"
    },
    features: [
        "Modern 2025 Design - Clean styling with proper contrast, rounded corners, and subtle shadows",
        "Server-side Integration - Built-in support for Laravel/API backend integration",
        "Advanced Sorting - Multi-column sorting with server-side support",
        "Comprehensive Filtering - Column-based filtering with multiple data types",
        "Pagination - Both client-side and server-side pagination",
        "Row Selection - Single and multi-row selection with bulk actions",
        "Virtualization - Performance optimization for large datasets",
        "Column Management - Resizable columns and visibility toggle",
        "Export Functionality - CSV, JSON, and Excel export support",
        "Drag & Drop - Row reordering with drag and drop",
        "Accessibility - Full keyboard navigation and ARIA support",
        "TypeScript - Comprehensive type definitions for all props and interfaces",
        "Responsive Design - Mobile-friendly responsive layouts",
        "Loading States - Built-in loading and error state handling",
        "Expandable Rows - Row expansion for detailed views",
        "Global Search - Searchable across all columns",
        "Customizable - Extensive styling and behavior customization options"
    ],
    examples: {
        basic: `<DataTable 
    data={users} 
    columns={[
        { accessor: 'name', header: 'Name' },
        { accessor: 'email', header: 'Email' },
        { accessor: 'status', header: 'Status', cell: (value) => <Badge variant={value} /> }
    ]}
/>`,
        serverSide: `<DataTable 
    data={users}
    columns={columns}
    serverSide={true}
    totalCount={totalUsers}
    sorts={sorts}
    onSort={(column, direction) => handleSort(column, direction)}
    loading={loading}
    pagination={{ pageIndex: 0, pageSize: 10 }}
    onPaginationChange={handlePaginationChange}
/>`
    }
};

// Find and update the DataTable component in metadata
const componentIndex = metadata.components.findIndex(comp => comp.name === "DataTable");
if (componentIndex !== -1) {
    metadata.components[componentIndex] = updatedDataTableMetadata;
    console.log("✅ Updated existing DataTable metadata");
} else {
    metadata.components.push(updatedDataTableMetadata);
    console.log("✅ Added new DataTable metadata");
}

// Write the updated metadata back
fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
console.log("✅ DataTable metadata synchronized successfully!");
console.log(`📊 Total components: ${metadata.components.length}`);
console.log("🔄 Metadata now reflects all merged DataTable capabilities including:");
console.log("   • 50+ comprehensive props");
console.log("   • Server-side sorting and pagination");
console.log("   • Advanced features (virtualization, export, drag-drop)");
console.log("   • TypeScript API interfaces");
console.log("   • Modern 2025 design system");