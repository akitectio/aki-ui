# ColorPicker Component

Một component React cho phép người dùng chọn màu sắc với giao diện thân thiện và nhiều tùy chọn linh hoạt.

## Features

- ✅ **Preset Colors**: Màu có sẵn để chọn nhanh
- ✅ **Custom Color**: Chọn màu tùy chỉnh với color picker hoặc nhập mã hex
- ✅ **Multiple Sizes**: Hỗ trợ 3 kích thước (sm, md, lg)
- ✅ **Validation**: Kiểm tra mã hex hợp lệ
- ✅ **Accessible**: Hỗ trợ keyboard navigation và screen reader
- ✅ **Responsive**: Giao diện thích ứng với các thiết bị khác nhau
- ✅ **TypeScript**: Hỗ trợ đầy đủ TypeScript

## Installation

```bash
npm install @akitectio/aki-ui
```

## Basic Usage

```tsx
import { ColorPicker } from "@akitectio/aki-ui";
import { useState } from "react";

function MyComponent() {
  const [color, setColor] = useState("#3b82f6");

  return (
    <ColorPicker value={color} onChange={setColor} placeholder="Chọn màu" />
  );
}
```

## Props

| Prop           | Type                      | Default                 | Description               |
| -------------- | ------------------------- | ----------------------- | ------------------------- |
| `value`        | `string`                  | `'#3b82f6'`             | Màu hiện tại (hex format) |
| `onChange`     | `(color: string) => void` | -                       | Callback khi màu thay đổi |
| `disabled`     | `boolean`                 | `false`                 | Vô hiệu hóa component     |
| `className`    | `string`                  | `''`                    | CSS class tùy chỉnh       |
| `placeholder`  | `string`                  | `'Chọn màu'`            | Placeholder text          |
| `presetColors` | `string[]`                | `DEFAULT_PRESET_COLORS` | Danh sách màu có sẵn      |
| `showPresets`  | `boolean`                 | `true`                  | Hiển thị màu có sẵn       |
| `size`         | `'sm' \| 'md' \| 'lg'`    | `'md'`                  | Kích thước component      |

## Examples

### Basic Example

```tsx
<ColorPicker
  value="#ef4444"
  onChange={(color) => console.log(color)}
  placeholder="Chọn màu sản phẩm"
/>
```

### Different Sizes

```tsx
<div className="flex space-x-4">
  <ColorPicker size="sm" value="#ef4444" onChange={setColor} />
  <ColorPicker size="md" value="#22c55e" onChange={setColor} />
  <ColorPicker size="lg" value="#8b5cf6" onChange={setColor} />
</div>
```

### Custom Preset Colors

```tsx
<ColorPicker
  value="#ff6b6b"
  onChange={setColor}
  presetColors={["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7"]}
/>
```

### Without Preset Colors

```tsx
<ColorPicker
  value="#2563eb"
  onChange={setColor}
  showPresets={false}
  placeholder="Chọn màu tùy chỉnh"
/>
```

### Disabled State

```tsx
<ColorPicker
  value="#6b7280"
  onChange={setColor}
  disabled
  placeholder="Không thể chọn màu"
/>
```

### Form Integration

```tsx
import { useState } from "react";
import { ColorPicker, Input, Button } from "@akitectio/aki-ui";

function CategoryForm() {
  const [formData, setFormData] = useState({
    name: "",
    color: "#3b82f6",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Tên danh mục</label>
        <Input
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          placeholder="Nhập tên danh mục"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Màu danh mục</label>
        <ColorPicker
          value={formData.color}
          onChange={(color) =>
            setFormData((prev) => ({
              ...prev,
              color,
            }))
          }
          placeholder="Chọn màu cho danh mục"
        />
      </div>

      <Button type="submit">Lưu danh mục</Button>
    </form>
  );
}
```

## Default Preset Colors

Component đi kèm với bộ màu có sẵn được thiết kế sẵn:

```tsx
const DEFAULT_PRESET_COLORS = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#10b981",
  "#14b8a6",
  "#06b6d4",
  "#0ea5e9",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
  "#64748b",
  "#6b7280",
  "#374151",
  "#111827",
  "#000000",
  "#ffffff",
  "#fbbf24",
];
```

## Styling

Component sử dụng Tailwind CSS và có thể tùy chỉnh thông qua `className`:

```tsx
<ColorPicker value="#3b82f6" onChange={setColor} className="my-custom-class" />
```

## Accessibility

- ✅ Hỗ trợ keyboard navigation (Tab, Enter, Escape)
- ✅ ARIA labels và descriptions
- ✅ Screen reader friendly
- ✅ Focus management tự động
- ✅ Color contrast tuân thủ WCAG

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## License

MIT License - see LICENSE file for details.
