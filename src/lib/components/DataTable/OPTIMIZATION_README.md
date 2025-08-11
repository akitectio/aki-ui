# DataTable Optimization - Client-Side Only

## Những thay đổi đã thực hiện

### ❌ Đã loại bỏ:

1. **Server-side fetching logic**:

   - `onFetch` prop
   - `serverData` state
   - `fetchTimeoutRef`
   - Auto API calling `useEffect`
   - `isServerMode` prop
   - `onManualFetch` prop
   - `totalCount` prop (server-side)

2. **Server-side dependencies**:
   - Debounced API calls
   - Server data caching
   - Server-side pagination logic
   - Server-side filtering/sorting

### ✅ Giữ lại và tối ưu:

1. **Client-side processing**:

   - Pure client-side filtering
   - Pure client-side sorting
   - Pure client-side pagination
   - Local data management

2. **Core features**:

   - Row selection
   - Column sorting
   - Inline filtering
   - Pagination
   - Virtualization
   - Column resizing
   - Custom cell rendering

3. **Performance optimizations**:
   - `useMemo` for expensive calculations
   - `useCallback` for event handlers
   - Debounced filter inputs
   - Virtualized rendering for large datasets

## Cách sử dụng mới

### Trước (với server-side):

```typescript
// ❌ Cũ - tự động call API
<DataTable
  data={[]} // Empty vì data từ server
  columns={columns}
  onFetch={async ({ paginationState, filters, sorts }) => {
    const response = await api.getUsers({
      page: paginationState.pageIndex,
      limit: paginationState.pageSize,
      filters,
      sorts,
    });
    return {
      data: response.data,
      totalCount: response.totalCount,
    };
  }}
  totalCount={serverTotalCount}
/>
```

### Sau (client-side only):

```typescript
// ✅ Mới - data được manage bởi parent component
const [users, setUsers] = useState<User[]>([]);

// Parent component tự quản lý API calls
useEffect(() => {
  const loadUsers = async () => {
    const response = await api.getUsers();
    setUsers(response.data);
  };
  loadUsers();
}, []);

<DataTable
  data={users} // Full data array
  columns={columns}
  enablePagination={true}
  showFilters={true}
  sortable={true}
/>;
```

## Lợi ích

### 🚀 Performance:

- Loại bỏ unnecessary API calls
- Không có debouncing delays
- Faster filtering/sorting (client-side)
- Better user experience

### 🎯 Control:

- Parent component full control over data
- Flexible data fetching strategies
- Custom caching logic
- Better error handling

### 🔧 Maintainability:

- Simpler component logic
- Less complex state management
- Easier to test
- Clear separation of concerns

### 📱 Flexibility:

- Works with any data source
- Custom data transformation
- Offline capability
- Better for mobile

## Migration Guide

### Bước 1: Remove server props

```typescript
// Xóa các props này:
-onFetch - totalCount - isServerMode - onManualFetch;
```

### Bước 2: Manage data trong parent

```typescript
const MyComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await api.getData();
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataTable
      data={data}
      columns={columns}
      loading={loading}
      // ... other props
    />
  );
};
```

### Bước 3: Handle filtering/sorting externally (nếu cần)

```typescript
// Nếu bạn muốn server-side filtering/sorting
const [filters, setFilters] = useState([]);
const [sorts, setSorts] = useState([]);

useEffect(() => {
  fetchData({ filters, sorts });
}, [filters, sorts]);

<DataTable
  data={data}
  columns={columns}
  onFilterChange={setFilters}
  onSortChange={setSorts}
  // DataTable sẽ callback nhưng không tự fetch
/>;
```

## Examples

Xem `DataTableExample.tsx` để có example đầy đủ về cách sử dụng DataTable mới.

## Breaking Changes

⚠️ **Warning**: Đây là breaking change. Các component sử dụng `onFetch` prop sẽ cần được update.

### Migration checklist:

- [ ] Remove `onFetch` prop usage
- [ ] Remove `totalCount` prop nếu dùng cho server-side
- [ ] Move data fetching logic to parent component
- [ ] Update state management
- [ ] Test all functionality works correctly
