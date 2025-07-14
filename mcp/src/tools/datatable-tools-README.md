# DataTable Tools - Aki UI MCP

Công cụ MCP cho việc tạo và quản lý DataTables với Aki UI component library.

## 🚀 Tính năng chính

### 1. Tạo cấu trúc API cho DataTable

- Định nghĩa complete API specification
- Pagination, filtering, sorting, search
- Query parameters documentation
- Response schema chuẩn

### 2. Tạo React DataTable Components

- Full-featured DataTable components
- TypeScript support
- Tích hợp với Aki UI
- Real-time data loading
- Bulk actions, export features

### 3. TypeScript Types Generation

- Complete type definitions
- API client interfaces
- Request/response types
- Query parameter types

### 4. Backend Code Generation

- Next.js API routes
- Express.js endpoints
- Prisma/Mongoose integration
- Authentication middleware

### 5. Response Validation

- Validate API responses
- Standards compliance
- Performance recommendations

## 🛠 Available Tools

| Tool                               | Description                         |
| ---------------------------------- | ----------------------------------- |
| `generate_datatable_api_structure` | Tạo API specification cho DataTable |
| `generate_datatable_component`     | Tạo React DataTable component       |
| `generate_api_response_types`      | Tạo TypeScript types                |
| `generate_api_endpoint_code`       | Tạo backend endpoint code           |
| `validate_datatable_response`      | Validate API response format        |

## 📋 Ví dụ sử dụng

### 1. Tạo API Structure cho Posts

```typescript
mcp_aki -
  ui_generate_datatable_api_structure({
    entityName: "posts",
    columns: [
      { key: "id", title: "ID", type: "number", sortable: false },
      {
        key: "title",
        title: "Title",
        type: "text",
        searchable: true,
        sortable: true,
      },
      { key: "status", title: "Status", type: "enum", filterable: true },
      { key: "author", title: "Author", type: "text", searchable: true },
      { key: "createdAt", title: "Created", type: "date", sortable: true },
      { key: "actions", title: "Actions", type: "action", sortable: false },
    ],
    filters: [
      {
        key: "status",
        type: "select",
        label: "Status",
        options: [
          { value: "published", label: "Published" },
          { value: "draft", label: "Draft" },
          { value: "archived", label: "Archived" },
        ],
      },
      {
        key: "authorId",
        type: "select",
        label: "Author",
        options: [
          { value: "1", label: "John Doe" },
          { value: "2", label: "Jane Smith" },
        ],
      },
      {
        key: "createdAt",
        type: "dateRange",
        label: "Created Date",
      },
    ],
    features: ["search", "bulkActions", "export", "refresh"],
  });
```

### 2. Tạo DataTable Component

```typescript
mcp_aki -
  ui_generate_datatable_component({
    config: {
      columns: [
        { key: "id", title: "ID", type: "number", width: 80 },
        { key: "title", title: "Title", type: "text", searchable: true },
        {
          key: "status",
          title: "Status",
          type: "badge",
          format: {
            enumMapping: {
              published: { label: "Published", color: "green" },
              draft: { label: "Draft", color: "yellow" },
              archived: { label: "Archived", color: "gray" },
            },
          },
        },
        { key: "createdAt", title: "Created", type: "date", sortable: true },
      ],
      filters: [
        { key: "status", type: "select", label: "Status" },
        { key: "search", type: "text", label: "Search" },
      ],
      pagination: {
        defaultLimit: 10,
        limitOptions: [10, 25, 50, 100],
        showSizeChanger: true,
        showQuickJumper: true,
      },
      features: {
        search: true,
        bulkActions: true,
        export: true,
        refresh: true,
        columnToggle: true,
      },
      actions: {
        create: "/admin/posts/create",
        edit: "/admin/posts/edit",
        view: "/admin/posts/view",
        delete: "/admin/posts/delete",
        bulk: [
          {
            key: "publish",
            label: "Publish",
            action: "bulkPublish",
            variant: "primary",
          },
          {
            key: "archive",
            label: "Archive",
            action: "bulkArchive",
            variant: "secondary",
          },
          {
            key: "delete",
            label: "Delete",
            action: "bulkDelete",
            variant: "danger",
          },
        ],
      },
    },
    apiEndpoint: "/api/a/posts",
    features: ["typescript", "toast", "realtime", "caching"],
  });
```

### 3. Tạo TypeScript Types

```typescript
mcp_aki -
  ui_generate_api_response_types({
    entityName: "posts",
    entityFields: [
      { name: "id", type: "string", description: "Unique identifier" },
      { name: "title", type: "string", description: "Post title" },
      {
        name: "content",
        type: "string",
        optional: true,
        description: "Post content",
      },
      {
        name: "status",
        type: "'published' | 'draft' | 'archived'",
        description: "Post status",
      },
      { name: "authorId", type: "string", description: "Author ID" },
      {
        name: "categoryId",
        type: "string",
        optional: true,
        description: "Category ID",
      },
      {
        name: "tags",
        type: "string[]",
        optional: true,
        description: "Post tags",
      },
      { name: "createdAt", type: "Date", description: "Creation date" },
      { name: "updatedAt", type: "Date", description: "Last update date" },
      {
        name: "publishedAt",
        type: "Date",
        optional: true,
        description: "Publication date",
      },
    ],
    includeRelations: true,
  });
```

### 4. Tạo API Endpoint (Next.js + Prisma)

```typescript
mcp_aki -
  ui_generate_api_endpoint_code({
    entityName: "posts",
    framework: "nextjs",
    database: "prisma",
    features: ["pagination", "sorting", "filtering", "search", "relations"],
    authRequired: true,
  });
```

### 5. Validate API Response

```typescript
mcp_aki -
  ui_validate_datatable_response({
    response: {
      success: true,
      data: [
        {
          id: "1",
          title: "Sample Post",
          status: "published",
          author: "John Doe",
          createdAt: "2024-01-01T00:00:00Z",
        },
      ],
      pagination: {
        page: 1,
        limit: 10,
        total: 1,
        totalPages: 1,
        hasNext: false,
        hasPrev: false,
      },
    },
  });
```

## 🎯 Best Practices

### API Response Format

```json
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
  },
  "filters": {
    "status": "published",
    "search": "keyword"
  },
  "sort": {
    "column": "createdAt",
    "direction": "desc"
  },
  "message": "Data retrieved successfully"
}
```

### Error Response Format

```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE",
  "details": {
    "field": "validation error details"
  }
}
```

### Query Parameters

```
GET /api/posts?page=1&limit=10&sortBy=createdAt&sortOrder=desc&search=keyword&status=published
```

## 🔧 Configuration Options

### Column Types

- `text` - Text content
- `number` - Numeric values
- `date` - Date/time values
- `boolean` - Boolean values
- `enum` - Enumerated values with mapping
- `image` - Image URLs with preview
- `link` - Clickable links
- `badge` - Status badges with colors
- `action` - Action buttons

### Filter Types

- `text` - Text input
- `select` - Dropdown selection
- `date` - Date picker
- `number` - Number input
- `boolean` - Checkbox
- `dateRange` - Date range picker

### Features

- `search` - Global search
- `bulkActions` - Bulk operations
- `export` - Data export (CSV, Excel)
- `refresh` - Manual refresh
- `columnToggle` - Show/hide columns
- `realtime` - Real-time updates
- `caching` - Client-side caching

## 📦 Dependencies

```bash
npm install @akitectio/aki-ui
npm install react-hot-toast  # for notifications
npm install date-fns        # for date formatting
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see LICENSE file for details.
