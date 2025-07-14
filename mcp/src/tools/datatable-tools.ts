import { Tool, CallToolResult } from "@modelcontextprotocol/sdk/types.js";

export interface DataTableColumn {
  key: string;
  title: string;
  type?:
    | "text"
    | "number"
    | "date"
    | "boolean"
    | "enum"
    | "image"
    | "link"
    | "badge"
    | "action";
  width?: string | number;
  sortable?: boolean;
  filterable?: boolean;
  searchable?: boolean;
  align?: "left" | "center" | "right";
  format?: {
    dateFormat?: string;
    numberFormat?: string;
    enumMapping?: Record<
      string,
      { label: string; color?: string; variant?: string }
    >;
    linkTarget?: "_blank" | "_self";
    imageSize?: "sm" | "md" | "lg";
  };
  render?: "custom" | "default";
  customRender?: string; // React component code
}

export interface DataTableFilter {
  key: string;
  type: "text" | "select" | "date" | "number" | "boolean" | "dateRange";
  label: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  defaultValue?: string | number | boolean;
}

export interface DataTableSort {
  column: string;
  direction: "asc" | "desc";
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface DataTableResponse<T = Record<string, unknown>> {
  success: boolean;
  data: T[];
  pagination: PaginationInfo;
  filters?: Record<string, string | number | boolean>;
  sort?: DataTableSort;
  message?: string;
  error?: string;
}

export interface DataTableConfig {
  columns: DataTableColumn[];
  filters?: DataTableFilter[];
  defaultSort?: DataTableSort;
  defaultFilters?: Record<string, any>;
  pagination?: {
    defaultLimit?: number;
    limitOptions?: number[];
    showSizeChanger?: boolean;
    showQuickJumper?: boolean;
  };
  features?: {
    search?: boolean;
    bulkActions?: boolean;
    export?: boolean;
    refresh?: boolean;
    columnToggle?: boolean;
  };
  actions?: {
    create?: string; // URL or function name
    edit?: string;
    delete?: string;
    view?: string;
    bulk?: Array<{
      key: string;
      label: string;
      action: string;
      variant?: "primary" | "secondary" | "danger";
    }>;
  };
}

export class DataTableTools {
  getTools(): Tool[] {
    return [
      {
        name: "generate_datatable_api_structure",
        description:
          "Generate API response structure for datatables with pagination, filtering, and sorting",
        inputSchema: {
          type: "object",
          properties: {
            entityName: {
              type: "string",
              description:
                "Name of the entity (e.g., 'posts', 'users', 'products')",
            },
            columns: {
              type: "array",
              description: "Table columns configuration",
              items: {
                type: "object",
                properties: {
                  key: { type: "string" },
                  title: { type: "string" },
                  type: {
                    type: "string",
                    enum: [
                      "text",
                      "number",
                      "date",
                      "boolean",
                      "enum",
                      "image",
                      "link",
                      "badge",
                      "action",
                    ],
                  },
                  sortable: { type: "boolean" },
                  filterable: { type: "boolean" },
                  searchable: { type: "boolean" },
                },
                required: ["key", "title"],
              },
            },
            filters: {
              type: "array",
              description: "Available filters for the table",
              items: {
                type: "object",
                properties: {
                  key: { type: "string" },
                  type: {
                    type: "string",
                    enum: [
                      "text",
                      "select",
                      "date",
                      "number",
                      "boolean",
                      "dateRange",
                    ],
                  },
                  label: { type: "string" },
                  options: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        value: { type: "string" },
                        label: { type: "string" },
                      },
                    },
                  },
                },
                required: ["key", "type", "label"],
              },
            },
            features: {
              type: "array",
              description:
                "Features to include (search, bulkActions, export, etc.)",
              items: { type: "string" },
            },
          },
          required: ["entityName", "columns"],
        },
      },
      {
        name: "generate_datatable_component",
        description:
          "Generate a complete DataTable component with API integration",
        inputSchema: {
          type: "object",
          properties: {
            config: {
              type: "object",
              description: "DataTable configuration object",
            },
            apiEndpoint: {
              type: "string",
              description: "API endpoint URL for fetching data",
            },
            features: {
              type: "array",
              description:
                "Features to include (typescript, realtime, caching, etc.)",
              items: { type: "string" },
            },
          },
          required: ["config", "apiEndpoint"],
        },
      },
      {
        name: "generate_api_response_types",
        description: "Generate TypeScript types for DataTable API responses",
        inputSchema: {
          type: "object",
          properties: {
            entityName: {
              type: "string",
              description: "Name of the entity",
            },
            entityFields: {
              type: "array",
              description: "Fields of the entity",
              items: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  type: { type: "string" },
                  optional: { type: "boolean" },
                  description: { type: "string" },
                },
                required: ["name", "type"],
              },
            },
            includeRelations: {
              type: "boolean",
              description: "Whether to include related entities",
            },
          },
          required: ["entityName", "entityFields"],
        },
      },
      {
        name: "generate_api_endpoint_code",
        description:
          "Generate complete API endpoint code for DataTable with all features",
        inputSchema: {
          type: "object",
          properties: {
            entityName: {
              type: "string",
              description: "Name of the entity",
            },
            framework: {
              type: "string",
              enum: ["nextjs", "express", "fastapi", "laravel"],
              description: "Backend framework to use",
            },
            database: {
              type: "string",
              enum: ["prisma", "mongoose", "sequelize", "raw-sql"],
              description: "Database ORM/driver to use",
            },
            features: {
              type: "array",
              description:
                "Features to include (pagination, filtering, sorting, search, etc.)",
              items: { type: "string" },
            },
            authRequired: {
              type: "boolean",
              description: "Whether authentication is required",
            },
          },
          required: ["entityName", "framework", "database"],
        },
      },
      {
        name: "validate_datatable_response",
        description:
          "Validate DataTable API response format and suggest improvements",
        inputSchema: {
          type: "object",
          properties: {
            response: {
              type: "object",
              description: "API response object to validate",
            },
            expectedSchema: {
              type: "object",
              description: "Expected response schema",
            },
          },
          required: ["response"],
        },
      },
    ];
  }

  async callTool(name: string, args: any): Promise<CallToolResult> {
    switch (name) {
      case "generate_datatable_api_structure":
        return this.generateDataTableApiStructure(args);
      case "generate_datatable_component":
        return this.generateDataTableComponent(args);
      case "generate_api_response_types":
        return this.generateApiResponseTypes(args);
      case "generate_api_endpoint_code":
        return this.generateApiEndpointCode(args);
      case "validate_datatable_response":
        return this.validateDataTableResponse(args);
      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  }

  private async generateDataTableApiStructure(args: {
    entityName: string;
    columns: DataTableColumn[];
    filters?: DataTableFilter[];
    features?: string[];
  }): Promise<CallToolResult> {
    const { entityName, columns, filters = [], features = [] } = args;

    const apiStructure = {
      endpoint: `/api/${entityName}`,
      method: "GET",
      queryParameters: {
        // Pagination
        page: {
          type: "number",
          default: 1,
          description: "Page number (1-based)",
        },
        limit: {
          type: "number",
          default: 10,
          description: "Number of items per page",
        },
        // Sorting
        sortBy: {
          type: "string",
          description: `Column to sort by. Available: ${columns
            .filter((c) => c.sortable !== false)
            .map((c) => c.key)
            .join(", ")}`,
          optional: true,
        },
        sortOrder: {
          type: "string",
          enum: ["asc", "desc"],
          default: "asc",
          description: "Sort direction",
        },
        // Search
        ...(features.includes("search") && {
          search: {
            type: "string",
            description: `Global search across searchable columns: ${columns
              .filter((c) => c.searchable)
              .map((c) => c.key)
              .join(", ")}`,
            optional: true,
          },
        }),
        // Filters
        ...filters.reduce(
          (acc, filter) => ({
            ...acc,
            [filter.key]: {
              type: filter.type === "dateRange" ? "string" : filter.type,
              description: `Filter by ${filter.label}`,
              optional: true,
              ...(filter.type === "select" &&
                filter.options && {
                  enum: filter.options.map((opt) => opt.value),
                }),
              ...(filter.type === "dateRange" && {
                format: "YYYY-MM-DD,YYYY-MM-DD or YYYY-MM-DD",
              }),
            },
          }),
          {}
        ),
      },
      responseSchema: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
            description: "Whether the request was successful",
          },
          data: {
            type: "array",
            description: `Array of ${entityName} objects`,
            items: {
              type: "object",
              properties: columns.reduce(
                (acc, col) => ({
                  ...acc,
                  [col.key]: {
                    type: col.type || "string",
                    description: col.title,
                  },
                }),
                {}
              ),
            },
          },
          pagination: {
            type: "object",
            properties: {
              page: { type: "number", description: "Current page number" },
              limit: { type: "number", description: "Items per page" },
              total: { type: "number", description: "Total number of items" },
              totalPages: {
                type: "number",
                description: "Total number of pages",
              },
              hasNext: {
                type: "boolean",
                description: "Whether there is a next page",
              },
              hasPrev: {
                type: "boolean",
                description: "Whether there is a previous page",
              },
            },
          },
          filters: {
            type: "object",
            description: "Applied filters",
            optional: true,
          },
          sort: {
            type: "object",
            properties: {
              column: { type: "string" },
              direction: { type: "string", enum: ["asc", "desc"] },
            },
            optional: true,
          },
          message: {
            type: "string",
            description: "Success message",
            optional: true,
          },
        },
      },
    };

    const exampleResponse = {
      success: true,
      data: [
        // Generate example data based on columns
        columns.reduce(
          (acc, col) => ({
            ...acc,
            [col.key]: this.getExampleValue(col.type || "text", col.key),
          }),
          {}
        ),
      ],
      pagination: {
        page: 1,
        limit: 10,
        total: 42,
        totalPages: 5,
        hasNext: true,
        hasPrev: false,
      },
      ...(filters.length > 0 && {
        filters: filters.reduce(
          (acc, filter) => ({
            ...acc,
            [filter.key]: filter.defaultValue || null,
          }),
          {}
        ),
      }),
      sort: {
        column: columns.find((c) => c.sortable !== false)?.key || "id",
        direction: "asc",
      },
      message: `${entityName} retrieved successfully`,
    };

    return {
      content: [
        {
          type: "text",
          text: `# DataTable API Structure for ${entityName}

## API Specification

\`\`\`json
${JSON.stringify(apiStructure, null, 2)}
\`\`\`

## Example Response

\`\`\`json
${JSON.stringify(exampleResponse, null, 2)}
\`\`\`

## Usage Examples

### Basic Request
\`\`\`
GET /api/${entityName}?page=1&limit=10
\`\`\`

### With Sorting
\`\`\`
GET /api/${entityName}?page=1&limit=10&sortBy=createdAt&sortOrder=desc
\`\`\`

${
  features.includes("search")
    ? `### With Search
\`\`\`
GET /api/${entityName}?page=1&limit=10&search=keyword
\`\`\``
    : ""
}

${
  filters.length > 0
    ? `### With Filters
\`\`\`
GET /api/${entityName}?page=1&limit=10${filters
        .map((f) => `&${f.key}=value`)
        .join("")}
\`\`\``
    : ""
}

## Error Response Format

\`\`\`json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE",
  "details": {
    "field": "validation error details"
  }
}
\`\`\`
`,
        },
      ],
    };
  }

  private async generateDataTableComponent(args: {
    config: DataTableConfig;
    apiEndpoint: string;
    features?: string[];
  }): Promise<CallToolResult> {
    const { config, apiEndpoint, features = [] } = args;
    const includeTypeScript = features.includes("typescript");

    const componentCode = `${
      includeTypeScript
        ? `
// Types
interface DataItem {
${config.columns
  .map((col) => `  ${col.key}: ${this.getTypeScriptType(col.type || "text")};`)
  .join("\n")}
}

interface ApiResponse {
  success: boolean;
  data: DataItem[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  filters?: Record<string, any>;
  sort?: {
    column: string;
    direction: "asc" | "desc";
  };
  message?: string;
  error?: string;
}
`
        : ""
    }

import React, { useState, useEffect, useCallback } from 'react';
import { DataTable, Button, Input, Select, Stack } from '@akitectio/aki-ui';
${features.includes("toast") ? "import { toast } from 'react-hot-toast';" : ""}

export default function ${this.capitalize(
      config.columns[0]?.key?.replace(/s$/, "") || "Entity"
    )}DataTable() {
  const [data, setData] = useState${
    includeTypeScript ? "<DataItem[]>" : ""
  }([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: ${config.pagination?.defaultLimit || 10},
    total: 0,
    totalPages: 0,
    hasNext: false,
    hasPrev: false
  });
  const [filters, setFilters] = useState${
    includeTypeScript ? "<Record<string, any>>" : ""
  }(${JSON.stringify(config.defaultFilters || {})});
  const [sort, setSort] = useState${
    includeTypeScript
      ? "<{column: string; direction: 'asc' | 'desc'} | null>"
      : ""
  }(${config.defaultSort ? JSON.stringify(config.defaultSort) : "null"});
  ${
    config.features?.search
      ? "const [searchQuery, setSearchQuery] = useState('');"
      : ""
  }

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        ...filters,
        ${
          config.features?.search
            ? "...(searchQuery && { search: searchQuery }),"
            : ""
        }
        ...(sort && {
          sortBy: sort.column,
          sortOrder: sort.direction
        })
      });

      const response = await fetch(\`${apiEndpoint}?\${queryParams}\`);
      const result${
        includeTypeScript ? ": ApiResponse" : ""
      } = await response.json();

      if (result.success) {
        setData(result.data);
        setPagination(result.pagination);
        ${
          features.includes("toast")
            ? "toast.success(result.message || 'Data loaded successfully');"
            : ""
        }
      } else {
        ${
          features.includes("toast")
            ? "toast.error(result.error || 'Failed to load data');"
            : "console.error('Failed to load data:', result.error);"
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      ${features.includes("toast") ? "toast.error('Failed to load data');" : ""}
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit, filters, sort${
    config.features?.search ? ", searchQuery" : ""
  }]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlePageChange = (page${includeTypeScript ? ": number" : ""}) => {
    setPagination(prev => ({ ...prev, page }));
  };

  const handleLimitChange = (limit${includeTypeScript ? ": number" : ""}) => {
    setPagination(prev => ({ ...prev, limit, page: 1 }));
  };

  const handleSortChange = (column${
    includeTypeScript ? ": string" : ""
  }, direction${includeTypeScript ? ": 'asc' | 'desc'" : ""}) => {
    setSort({ column, direction });
  };

  const handleFilterChange = (key${includeTypeScript ? ": string" : ""}, value${
      includeTypeScript ? ": any" : ""
    }) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  const columns = [
${config.columns
  .map(
    (col) => `    {
      key: '${col.key}',
      title: '${col.title}',
      ${col.sortable !== false ? "sortable: true," : ""}
      ${
        col.width
          ? `width: ${
              typeof col.width === "string" ? `'${col.width}'` : col.width
            },`
          : ""
      }
      ${col.align ? `align: '${col.align}',` : ""}
      ${col.type && col.type !== "text" ? `type: '${col.type}',` : ""}
      ${col.format ? `format: ${JSON.stringify(col.format)},` : ""}
      ${col.customRender ? `render: ${col.customRender}` : ""}
    }`
  )
  .join(",\n")}
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Data Management</h1>
        <div className="flex gap-2">
          ${
            config.features?.refresh
              ? `
          <Button
            variant="outline"
            onClick={fetchData}
            loading={loading}
          >
            Refresh
          </Button>`
              : ""
          }
          ${
            config.actions?.create
              ? `
          <Button
            onClick={() => window.location.href = '${config.actions.create}'}
          >
            Add New
          </Button>`
              : ""
          }
        </div>
      </div>

      {/* Filters */}
      ${
        config.filters && config.filters.length > 0
          ? `
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <Stack direction="horizontal" spacing={4} wrap>
          ${config.filters
            .map((filter) => {
              switch (filter.type) {
                case "text":
                  return `
          <Input
            placeholder="${filter.placeholder || `Filter by ${filter.label}`}"
            value={filters.${filter.key} || ''}
            onChange={(e) => handleFilterChange('${
              filter.key
            }', e.target.value)}
          />`;
                case "select":
                  return `
          <Select
            placeholder="${filter.placeholder || `Select ${filter.label}`}"
            value={filters.${filter.key} || ''}
            onChange={(value) => handleFilterChange('${filter.key}', value)}
            options={${JSON.stringify(filter.options || [])}}
          />`;
                default:
                  return `
          <Input
            type="${filter.type}"
            placeholder="${filter.placeholder || filter.label}"
            value={filters.${filter.key} || ''}
            onChange={(e) => handleFilterChange('${
              filter.key
            }', e.target.value)}
          />`;
              }
            })
            .join("")}
          ${
            config.features?.search
              ? `
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />`
              : ""
          }
        </Stack>
      </div>`
          : ""
      }

      {/* Data Table */}
      <DataTable
        data={data}
        columns={columns}
        loading={loading}
        pagination={{
          current: pagination.page,
          pageSize: pagination.limit,
          total: pagination.total,
          showSizeChanger: true,
          showQuickJumper: true,
          onPageChange: handlePageChange,
          onPageSizeChange: handleLimitChange
        }}
        ${
          config.defaultSort
            ? `
        defaultSort={{
          column: '${config.defaultSort.column}',
          direction: '${config.defaultSort.direction}'
        }}`
            : ""
        }
        onSortChange={handleSortChange}
        ${
          config.features?.bulkActions
            ? `
        bulkActions={[
          ${
            config.actions?.bulk
              ?.map(
                (action) => `
          {
            key: '${action.key}',
            label: '${action.label}',
            variant: '${action.variant || "primary"}',
            action: ${action.action}
          }`
              )
              .join(",") || ""
          }
        ]}`
            : ""
        }
      />
    </div>
  );
}`;

    return {
      content: [
        {
          type: "text",
          text: `# DataTable Component

\`\`\`tsx
${componentCode}
\`\`\`

## Usage

\`\`\`tsx
import ${this.capitalize(
            config.columns[0]?.key?.replace(/s$/, "") || "Entity"
          )}DataTable from './components/${this.capitalize(
            config.columns[0]?.key?.replace(/s$/, "") || "Entity"
          )}DataTable';

export default function ${this.capitalize(
            config.columns[0]?.key?.replace(/s$/, "") || "Entity"
          )}Page() {
  return (
    <div className="container mx-auto p-6">
      <${this.capitalize(
        config.columns[0]?.key?.replace(/s$/, "") || "Entity"
      )}DataTable />
    </div>
  );
}
\`\`\`

## Features Included

${features.map((feature) => `- ✅ ${feature}`).join("\n")}
${config.features?.search ? "- ✅ Global search" : ""}
${config.features?.bulkActions ? "- ✅ Bulk actions" : ""}
${config.features?.export ? "- ✅ Data export" : ""}
${config.features?.refresh ? "- ✅ Manual refresh" : ""}
${config.features?.columnToggle ? "- ✅ Column toggle" : ""}

## Required Dependencies

\`\`\`bash
npm install @akitectio/aki-ui
${features.includes("toast") ? "npm install react-hot-toast" : ""}
\`\`\`
`,
        },
      ],
    };
  }

  private async generateApiResponseTypes(args: {
    entityName: string;
    entityFields: Array<{
      name: string;
      type: string;
      optional?: boolean;
      description?: string;
    }>;
    includeRelations?: boolean;
  }): Promise<CallToolResult> {
    const { entityName, entityFields, includeRelations = false } = args;

    const typesCode = `// ${this.capitalize(entityName)} API Response Types

export interface ${this.capitalize(entityName)} {
${entityFields
  .map(
    (field) =>
      `  ${field.name}${field.optional ? "?" : ""}: ${field.type};${
        field.description ? ` // ${field.description}` : ""
      }`
  )
  .join("\n")}
}

export interface ${this.capitalize(entityName)}ListResponse {
  success: boolean;
  data: ${this.capitalize(entityName)}[];
  pagination: PaginationInfo;
  filters?: Record<string, any>;
  sort?: SortInfo;
  message?: string;
}

export interface ${this.capitalize(entityName)}DetailResponse {
  success: boolean;
  data: ${this.capitalize(entityName)};
  message?: string;
}

export interface ${this.capitalize(entityName)}CreateRequest {
${entityFields
  .filter((field) => !field.name.includes("id") && !field.name.includes("At"))
  .map((field) => `  ${field.name}${field.optional ? "?" : ""}: ${field.type};`)
  .join("\n")}
}

export interface ${this.capitalize(entityName)}UpdateRequest {
  id: string;
${entityFields
  .filter((field) => !field.name.includes("id") && !field.name.includes("At"))
  .map((field) => `  ${field.name}?: ${field.type};`)
  .join("\n")}
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface SortInfo {
  column: string;
  direction: "asc" | "desc";
}

export interface ApiError {
  success: false;
  error: string;
  code?: string;
  details?: Record<string, any>;
}

// Query Parameters
export interface ${this.capitalize(entityName)}QueryParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  search?: string;
${entityFields
  .filter(
    (field) =>
      field.type === "string" ||
      field.type === "number" ||
      field.type === "boolean"
  )
  .map((field) => `  ${field.name}?: ${field.type};`)
  .join("\n")}
}

// API Client Types
export interface ${this.capitalize(entityName)}ApiClient {
  getList(params?: ${this.capitalize(
    entityName
  )}QueryParams): Promise<${this.capitalize(entityName)}ListResponse>;
  getById(id: string): Promise<${this.capitalize(entityName)}DetailResponse>;
  create(data: ${this.capitalize(
    entityName
  )}CreateRequest): Promise<${this.capitalize(entityName)}DetailResponse>;
  update(data: ${this.capitalize(
    entityName
  )}UpdateRequest): Promise<${this.capitalize(entityName)}DetailResponse>;
  delete(id: string): Promise<{ success: boolean; message?: string }>;
}

${
  includeRelations
    ? `
// Relations (if applicable)
export interface ${this.capitalize(
        entityName
      )}WithRelations extends ${this.capitalize(entityName)} {
  // Add related entities here
  // Example:
  // author?: User;
  // category?: Category;
  // tags?: Tag[];
}

export interface ${this.capitalize(entityName)}RelationsResponse {
  success: boolean;
  data: ${this.capitalize(entityName)}WithRelations;
  message?: string;
}
`
    : ""
}`;

    return {
      content: [
        {
          type: "text",
          text: `# TypeScript Types for ${this.capitalize(entityName)} API

\`\`\`typescript
${typesCode}
\`\`\`

## Usage Example

\`\`\`typescript
import { ${this.capitalize(entityName)}ListResponse, ${this.capitalize(
            entityName
          )}QueryParams } from './types';

// API call
const fetchData = async (params: ${this.capitalize(
            entityName
          )}QueryParams): Promise<${this.capitalize(
            entityName
          )}ListResponse> => {
  const response = await fetch(\`/api/${entityName}?\${new URLSearchParams(params as any)}\`);
  return response.json();
};

// Component usage
const [data, setData] = useState<${this.capitalize(entityName)}[]>([]);
const [pagination, setPagination] = useState<PaginationInfo>({
  page: 1,
  limit: 10,
  total: 0,
  totalPages: 0,
  hasNext: false,
  hasPrev: false
});
\`\`\`
`,
        },
      ],
    };
  }

  private async generateApiEndpointCode(args: {
    entityName: string;
    framework: string;
    database: string;
    features?: string[];
    authRequired?: boolean;
  }): Promise<CallToolResult> {
    const {
      entityName,
      framework,
      database,
      features = [],
      authRequired = false,
    } = args;

    let endpointCode = "";

    switch (framework) {
      case "nextjs":
        endpointCode = this.generateNextJSEndpoint(
          entityName,
          database,
          features,
          authRequired
        );
        break;
      case "express":
        endpointCode = this.generateExpressEndpoint(
          entityName,
          database,
          features,
          authRequired
        );
        break;
      default:
        endpointCode = this.generateNextJSEndpoint(
          entityName,
          database,
          features,
          authRequired
        );
    }

    return {
      content: [
        {
          type: "text",
          text: `# ${framework.toUpperCase()} API Endpoint for ${this.capitalize(
            entityName
          )}

\`\`\`typescript
${endpointCode}
\`\`\`

## Features Included

${features.map((feature) => `- ✅ ${feature}`).join("\n")}
${authRequired ? "- ✅ Authentication required" : "- ❌ No authentication"}

## Usage

### GET Request
\`\`\`
GET /api/${entityName}?page=1&limit=10&sortBy=createdAt&sortOrder=desc
\`\`\`

### Response
\`\`\`json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 42,
    "totalPages": 5,
    "hasNext": true,
    "hasPrev": false
  }
}
\`\`\`
`,
        },
      ],
    };
  }

  private async validateDataTableResponse(args: {
    response: any;
    expectedSchema?: any;
  }): Promise<CallToolResult> {
    const { response, expectedSchema } = args;

    const validationResults = [];
    const recommendations = [];

    // Check required fields
    if (!response.hasOwnProperty("success")) {
      validationResults.push("❌ Missing required field: 'success'");
      recommendations.push(
        "Add 'success' boolean field to indicate request status"
      );
    }

    if (!response.hasOwnProperty("data")) {
      validationResults.push("❌ Missing required field: 'data'");
      recommendations.push("Add 'data' array field containing the table items");
    } else if (!Array.isArray(response.data)) {
      validationResults.push("❌ 'data' field must be an array");
      recommendations.push(
        "Ensure 'data' field is always an array, even if empty"
      );
    }

    if (!response.hasOwnProperty("pagination")) {
      validationResults.push("❌ Missing required field: 'pagination'");
      recommendations.push(
        "Add pagination object with page, limit, total, totalPages, hasNext, hasPrev"
      );
    } else {
      const requiredPaginationFields = [
        "page",
        "limit",
        "total",
        "totalPages",
        "hasNext",
        "hasPrev",
      ];
      const missingPaginationFields = requiredPaginationFields.filter(
        (field) => !response.pagination.hasOwnProperty(field)
      );

      if (missingPaginationFields.length > 0) {
        validationResults.push(
          `❌ Missing pagination fields: ${missingPaginationFields.join(", ")}`
        );
        recommendations.push(
          `Add missing pagination fields: ${missingPaginationFields.join(", ")}`
        );
      }
    }

    // Check optional but recommended fields
    if (!response.hasOwnProperty("message") && response.success) {
      recommendations.push(
        "Consider adding a 'message' field for user feedback"
      );
    }

    if (!response.hasOwnProperty("error") && !response.success) {
      validationResults.push("❌ Missing 'error' field for failed response");
      recommendations.push("Add 'error' field when success is false");
    }

    // Check data consistency
    if (response.data && Array.isArray(response.data) && response.pagination) {
      const actualDataCount = response.data.length;
      const expectedCount = Math.min(
        response.pagination.limit,
        response.pagination.total
      );

      if (actualDataCount > response.pagination.limit) {
        validationResults.push(
          `❌ Data count (${actualDataCount}) exceeds pagination limit (${response.pagination.limit})`
        );
      }
    }

    const isValid =
      validationResults.filter((result) => result.includes("❌")).length === 0;

    return {
      content: [
        {
          type: "text",
          text: `# DataTable Response Validation

## Validation Results

${isValid ? "✅ **Response is valid!**" : "❌ **Response has issues**"}

### Issues Found
${
  validationResults.length > 0
    ? validationResults.join("\n")
    : "✅ No issues found"
}

### Recommendations
${
  recommendations.length > 0
    ? recommendations.map((rec) => `💡 ${rec}`).join("\n")
    : "✅ No recommendations"
}

## Corrected Response Structure

\`\`\`json
{
  "success": true,
  "data": [
    // Your data items here
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 42,
    "totalPages": 5,
    "hasNext": true,
    "hasPrev": false
  },
  "filters": {
    // Applied filters
  },
  "sort": {
    "column": "createdAt",
    "direction": "desc"
  },
  "message": "Data retrieved successfully"
}
\`\`\`

## Error Response Structure

\`\`\`json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE",
  "details": {
    // Error details
  }
}
\`\`\`
`,
        },
      ],
    };
  }

  // Helper methods
  private getExampleValue(type: string, key: string): any {
    switch (type) {
      case "number":
        return key.includes("id") ? 1 : 42;
      case "boolean":
        return true;
      case "date":
        return "2024-01-01T00:00:00Z";
      case "enum":
        return "active";
      case "image":
        return "https://example.com/image.jpg";
      case "link":
        return "https://example.com";
      default:
        return key.includes("name") ? "Example Name" : `Example ${key}`;
    }
  }

  private getTypeScriptType(type: string): string {
    switch (type) {
      case "number":
        return "number";
      case "boolean":
        return "boolean";
      case "date":
        return "string | Date";
      default:
        return "string";
    }
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private generateNextJSEndpoint(
    entityName: string,
    database: string,
    features: string[],
    authRequired: boolean
  ): string {
    const hasSearch = features.includes("search");
    const hasPagination = features.includes("pagination");
    const hasSorting = features.includes("sorting");
    const hasFiltering = features.includes("filtering");

    return `import { NextRequest } from 'next/server';
${database === "prisma" ? "import { prisma } from '@/lib/prisma';" : ""}
import { successResponse, errorResponse, withErrorHandling } from '@/lib/api-response';
${authRequired ? "import { verifyAuth } from '@/lib/auth';" : ""}

export async function GET(request: NextRequest) {
  return withErrorHandling(async () => {
    ${
      authRequired
        ? `
    // Verify authentication
    const user = await verifyAuth(request);
    if (!user) {
      return errorResponse("Authentication required", 401);
    }
    `
        : ""
    }

    const { searchParams } = new URL(request.url);
    
    // Parse query parameters
    const page = parseInt(searchParams.get('page') || '1');
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    ${
      hasSorting
        ? `
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') === 'desc' ? 'desc' : 'asc';
    `
        : ""
    }
    ${
      hasSearch
        ? `
    const search = searchParams.get('search');
    `
        : ""
    }

    // Build where clause
    const where: any = {};
    
    ${
      hasSearch
        ? `
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        // Add other searchable fields
      ];
    }
    `
        : ""
    }

    ${
      hasFiltering
        ? `
    // Add filters
    const status = searchParams.get('status');
    if (status && status !== 'all') {
      where.status = status;
    }

    const categoryId = searchParams.get('categoryId');
    if (categoryId) {
      where.categoryId = categoryId;
    }
    `
        : ""
    }

    try {
      ${
        hasPagination
          ? `
      // Get total count
      const total = await prisma.${entityName}.count({ where });
      const totalPages = Math.ceil(total / limit);
      const skip = (page - 1) * limit;
      `
          : ""
      }

      // Fetch data
      const data = await prisma.${entityName}.findMany({
        where,
        ${
          hasPagination
            ? `
        skip,
        take: limit,
        `
            : ""
        }
        ${
          hasSorting
            ? `
        orderBy: {
          [sortBy]: sortOrder
        },
        `
            : ""
        }
        include: {
          // Add relations here
          // author: {
          //   select: { id: true, name: true, avatar: true }
          // },
          // category: true,
        }
      });

      return successResponse({
        data,
        ${
          hasPagination
            ? `
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNext: page < totalPages,
          hasPrev: page > 1
        },
        `
            : ""
        }
        ${
          hasFiltering
            ? `
        filters: {
          status,
          categoryId,
          ${hasSearch ? "search," : ""}
        },
        `
            : ""
        }
        ${
          hasSorting
            ? `
        sort: {
          column: sortBy,
          direction: sortOrder
        }
        `
            : ""
        }
      }, \`\${entityName} retrieved successfully\`);

    } catch (error) {
      console.error('Database error:', error);
      return errorResponse('Failed to fetch ${entityName}', 500);
    }
  });
}`;
  }

  private generateExpressEndpoint(
    entityName: string,
    database: string,
    features: string[],
    authRequired: boolean
  ): string {
    return `import express from 'express';
${authRequired ? "import { authenticateToken } from '../middleware/auth';" : ""}
${
  database === "mongoose"
    ? "import { " +
      this.capitalize(entityName) +
      " } from '../models/" +
      this.capitalize(entityName) +
      "';"
    : ""
}

const router = express.Router();

// GET /${entityName}
router.get('/${entityName}'${
      authRequired ? ", authenticateToken" : ""
    }, async (req, res) => {
  try {
    const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'asc', search } = req.query;
    
    const pageNum = parseInt(page as string);
    const limitNum = Math.min(parseInt(limit as string), 100);
    const skip = (pageNum - 1) * limitNum;

    // Build query
    const query: any = {};
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    // Get total count
    const total = await ${this.capitalize(entityName)}.countDocuments(query);
    const totalPages = Math.ceil(total / limitNum);

    // Fetch data
    const data = await ${this.capitalize(entityName)}
      .find(query)
      .sort({ [sortBy as string]: sortOrder === 'desc' ? -1 : 1 })
      .skip(skip)
      .limit(limitNum)
      .populate('author', 'name avatar')
      .populate('category');

    res.json({
      success: true,
      data,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages,
        hasNext: pageNum < totalPages,
        hasPrev: pageNum > 1
      },
      message: '${this.capitalize(entityName)} retrieved successfully'
    });

  } catch (error) {
    console.error('Error fetching ${entityName}:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch ${entityName}'
    });
  }
});

export default router;`;
  }
}
