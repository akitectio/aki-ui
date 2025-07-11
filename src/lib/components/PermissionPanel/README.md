# PermissionPanel Component

A flexible multi-level permission management panel with collapsible nested categories and individual permission checkboxes.

## Features

- ✅ Multi-level nested categories (tree structure)
- ✅ Collapsible permission categories
- ✅ Individual permission checkboxes
- ✅ Color-coded category and permission badges
- ✅ Expand/Collapse all functionality
- ✅ Read-only mode support
- ✅ Customizable styling with variants
- ✅ TypeScript support

## Basic Usage

```tsx
import { PermissionPanel } from "@akitectio/aki-ui";

const categories = [
  {
    id: "cms",
    name: "CMS",
    variant: "secondary",
    subcategories: [
      {
        id: "media",
        name: "Media",
        variant: "primary",
        subcategories: [
          {
            id: "file",
            name: "File",
            variant: "warning",
            permissions: [
              {
                id: "create",
                name: "Create",
                granted: true,
                variant: "success",
              },
              { id: "edit", name: "Edit", granted: true, variant: "warning" },
              {
                id: "delete",
                name: "Delete",
                granted: false,
                variant: "danger",
              },
            ],
          },
        ],
      },
      {
        id: "pages",
        name: "Pages",
        variant: "primary",
        permissions: [
          { id: "create", name: "Create", granted: true, variant: "success" },
          { id: "edit", name: "Edit", granted: true, variant: "warning" },
          { id: "delete", name: "Delete", granted: false, variant: "danger" },
        ],
      },
    ],
  },
];

function App() {
  const handlePermissionChange = (
    categoryId: string,
    permissionId: string,
    granted: boolean
  ) => {
    console.log(
      `Permission ${permissionId} in category ${categoryId} is now ${
        granted ? "checked" : "unchecked"
      }`
    );
  };

  return (
    <PermissionPanel
      categories={categories}
      onPermissionChange={handlePermissionChange}
      showAllPermissions={true}
      showCollapseToggle={true}
    />
  );
}
```

## Props

### PermissionPanelProps

| Prop                 | Type                                                                   | Default | Description                                              |
| -------------------- | ---------------------------------------------------------------------- | ------- | -------------------------------------------------------- |
| `categories`         | `PermissionCategory[]`                                                 | -       | Array of permission categories                           |
| `onPermissionChange` | `(categoryId: string, permissionId: string, granted: boolean) => void` | -       | Callback when a permission checkbox is toggled           |
| `showAllPermissions` | `boolean`                                                              | `true`  | Whether to show the "All Permissions" link               |
| `showCollapseToggle` | `boolean`                                                              | `true`  | Whether to show the "Collapse all" / "Expand all" toggle |
| `className`          | `string`                                                               | `''`    | Additional CSS classes                                   |
| `readOnly`           | `boolean`                                                              | `false` | Whether the panel is read-only                           |

### PermissionCategory

| Prop              | Type                                                                       | Default       | Description                                           |
| ----------------- | -------------------------------------------------------------------------- | ------------- | ----------------------------------------------------- |
| `id`              | `string`                                                                   | -             | Unique identifier for the category                    |
| `name`            | `string`                                                                   | -             | Display name for the category                         |
| `variant`         | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'secondary'` | Color variant for the category badge                  |
| `permissions`     | `Permission[]`                                                             | `undefined`   | List of permissions in this category (for leaf nodes) |
| `subcategories`   | `PermissionCategory[]`                                                     | `undefined`   | Nested subcategories (for tree structure)             |
| `defaultExpanded` | `boolean`                                                                  | `false`       | Whether the category is expanded by default           |

### Permission

| Prop      | Type                                                                       | Default     | Description                            |
| --------- | -------------------------------------------------------------------------- | ----------- | -------------------------------------- |
| `id`      | `string`                                                                   | -           | Unique identifier for the permission   |
| `name`    | `string`                                                                   | -           | Display name for the permission        |
| `granted` | `boolean`                                                                  | -           | Whether this permission is granted     |
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'primary'` | Color variant for the permission badge |

## Examples

### Nested Structure (Like CMS Example)

```tsx
const nestedCategories = [
  {
    id: "cms",
    name: "CMS",
    variant: "secondary",
    subcategories: [
      {
        id: "media",
        name: "Media",
        variant: "primary",
        subcategories: [
          {
            id: "file",
            name: "File",
            variant: "warning",
            permissions: [
              {
                id: "create",
                name: "Create",
                granted: true,
                variant: "success",
              },
              { id: "edit", name: "Edit", granted: true, variant: "warning" },
              { id: "trash", name: "Trash", granted: false, variant: "danger" },
              {
                id: "delete",
                name: "Delete",
                granted: false,
                variant: "danger",
              },
            ],
          },
          {
            id: "folder",
            name: "Folder",
            variant: "warning",
            permissions: [
              {
                id: "create",
                name: "Create",
                granted: true,
                variant: "success",
              },
              { id: "edit", name: "Edit", granted: true, variant: "warning" },
              {
                id: "delete",
                name: "Delete",
                granted: false,
                variant: "danger",
              },
            ],
          },
        ],
      },
      {
        id: "blog",
        name: "Blog",
        variant: "primary",
        subcategories: [
          {
            id: "posts",
            name: "Posts",
            variant: "info",
            permissions: [
              {
                id: "create",
                name: "Create",
                granted: true,
                variant: "success",
              },
              { id: "edit", name: "Edit", granted: true, variant: "warning" },
              {
                id: "delete",
                name: "Delete",
                granted: false,
                variant: "danger",
              },
            ],
          },
          {
            id: "categories",
            name: "Categories",
            variant: "warning",
            permissions: [
              {
                id: "create",
                name: "Create",
                granted: true,
                variant: "success",
              },
              { id: "edit", name: "Edit", granted: true, variant: "warning" },
              {
                id: "delete",
                name: "Delete",
                granted: false,
                variant: "danger",
              },
            ],
          },
        ],
      },
    ],
  },
];
```

### Read-only Mode

```tsx
<PermissionPanel
  categories={categories}
  readOnly={true}
  showAllPermissions={false}
  showCollapseToggle={false}
/>
```

### With Default Expanded Categories

```tsx
const categoriesWithExpanded = categories.map((cat) => ({
  ...cat,
  defaultExpanded: true,
}));

<PermissionPanel
  categories={categoriesWithExpanded}
  onPermissionChange={handlePermissionChange}
/>;
```

## Styling

The component uses Tailwind CSS classes and can be customized using the `className` prop or by overriding the default styles.

### Color Variants

#### Category Variants

- `primary`: Blue theme
- `secondary`: Gray theme (default)
- `success`: Green theme
- `warning`: Yellow theme
- `danger`: Red theme
- `info`: Cyan theme

#### Permission Variants

- `primary`: Blue theme (default)
- `secondary`: Gray theme
- `success`: Green theme
- `warning`: Yellow theme
- `danger`: Red theme
- `info`: Cyan theme
