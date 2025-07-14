import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from '../lib/components/ColorPicker/ColorPicker';
import { useState } from 'react';

/**
 * ColorPicker cho phép người dùng chọn màu sắc với các tùy chọn:
 * - Màu có sẵn (preset colors)
 * - Màu tùy chỉnh với color picker hoặc nhập mã hex
 * - Kích thước khác nhau
 * - Hỗ trợ disabled state
 */

const meta: Meta<typeof ColorPicker> = {
    title: 'Data Entry/ColorPicker',
    component: ColorPicker,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Component cho phép chọn màu sắc với preset colors và custom color picker.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: 'color',
            description: 'Màu hiện tại được chọn (hex format)',
        },
        onChange: {
            action: 'onChange',
            description: 'Callback được gọi khi màu thay đổi',
        },
        disabled: {
            control: 'boolean',
            description: 'Vô hiệu hóa color picker',
        },
        placeholder: {
            control: 'text',
            description: 'Text hiển thị khi hover hoặc screen reader',
        },
        showPresets: {
            control: 'boolean',
            description: 'Hiển thị màu có sẵn',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Kích thước của color picker button',
        },
    },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

/**
 * Story với state để demo onChange
 */
const ColorPickerWithState = (args: any) => {
    const [color, setColor] = useState(args.value || '#3b82f6');

    return (
        <div className="space-y-4">
            <ColorPicker
                {...args}
                value={color}
                onChange={setColor}
            />
            <div className="text-sm text-gray-600">
                Màu đã chọn: <span className="font-mono">{color}</span>
            </div>
        </div>
    );
};

/**
 * Cách sử dụng cơ bản với màu có sẵn
 */
export const Default: Story = {
    render: ColorPickerWithState,
    args: {
        value: '#3b82f6',
        placeholder: 'Chọn màu',
    },
};

/**
 * Các kích thước khác nhau
 */
export const Sizes: Story = {
    render: () => (
        <div className="flex items-center space-x-4">
            <div className="text-center">
                <ColorPickerWithState value="#ef4444" size="sm" />
                <div className="text-xs text-gray-500 mt-2">Small</div>
            </div>
            <div className="text-center">
                <ColorPickerWithState value="#22c55e" size="md" />
                <div className="text-xs text-gray-500 mt-2">Medium</div>
            </div>
            <div className="text-center">
                <ColorPickerWithState value="#8b5cf6" size="lg" />
                <div className="text-xs text-gray-500 mt-2">Large</div>
            </div>
        </div>
    ),
};

/**
 * Màu có sẵn tùy chỉnh
 */
export const CustomPresets: Story = {
    render: ColorPickerWithState,
    args: {
        value: '#ff6b6b',
        presetColors: [
            '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7',
            '#dda0dd', '#ffb3ba', '#ffdfba', '#ffffba', '#baffc9',
            '#bae1ff', '#c9baff', '#ffcccb', '#f0e68c', '#e6e6fa'
        ],
    },
};

/**
 * Không hiển thị màu có sẵn
 */
export const NoPresets: Story = {
    render: ColorPickerWithState,
    args: {
        value: '#2563eb',
        showPresets: false,
        placeholder: 'Chọn màu tùy chỉnh',
    },
};

/**
 * Trạng thái disabled
 */
export const Disabled: Story = {
    render: () => (
        <div className="space-y-4">
            <ColorPicker
                value="#6b7280"
                disabled
                placeholder="Không thể chọn màu"
            />
            <div className="text-sm text-gray-500">
                ColorPicker bị vô hiệu hóa
            </div>
        </div>
    ),
};

/**
 * Nhiều ColorPicker cùng lúc
 */
export const Multiple: Story = {
    render: () => {
        const [primaryColor, setPrimaryColor] = useState('#3b82f6');
        const [secondaryColor, setSecondaryColor] = useState('#10b981');
        const [accentColor, setAccentColor] = useState('#f59e0b');

        return (
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Màu chính
                        </label>
                        <ColorPicker
                            value={primaryColor}
                            onChange={setPrimaryColor}
                            placeholder="Chọn màu chính"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Màu phụ
                        </label>
                        <ColorPicker
                            value={secondaryColor}
                            onChange={setSecondaryColor}
                            placeholder="Chọn màu phụ"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Màu nhấn
                        </label>
                        <ColorPicker
                            value={accentColor}
                            onChange={setAccentColor}
                            placeholder="Chọn màu nhấn"
                        />
                    </div>
                </div>

                <div className="p-4 rounded-lg border-2 space-y-2" style={{ borderColor: primaryColor }}>
                    <h3 className="font-semibold" style={{ color: primaryColor }}>
                        Preview Theme Colors
                    </h3>
                    <div className="flex space-x-2">
                        <div
                            className="w-8 h-8 rounded"
                            style={{ backgroundColor: primaryColor }}
                            title={`Primary: ${primaryColor}`}
                        />
                        <div
                            className="w-8 h-8 rounded"
                            style={{ backgroundColor: secondaryColor }}
                            title={`Secondary: ${secondaryColor}`}
                        />
                        <div
                            className="w-8 h-8 rounded"
                            style={{ backgroundColor: accentColor }}
                            title={`Accent: ${accentColor}`}
                        />
                    </div>
                </div>
            </div>
        );
    },
};
