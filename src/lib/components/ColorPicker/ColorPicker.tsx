import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';

export interface ColorPickerProps {
    value?: string;
    onChange?: (color: string) => void;
    disabled?: boolean;
    className?: string;
    placeholder?: string;
    presetColors?: string[];
    showPresets?: boolean;
    size?: 'sm' | 'md' | 'lg';
    // Internationalization props
    labels?: {
        customColor?: string;
        presetColors?: string;
        invalidHexMessage?: string;
        selectColor?: string;
        cancel?: string;
        select?: string;
    };
}

const DEFAULT_PRESET_COLORS = [
    '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e',
    '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1',
    '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e', '#64748b',
    '#6b7280', '#374151', '#111827', '#000000', '#ffffff', '#fbbf24'
];

export const ColorPicker: React.FC<ColorPickerProps> = ({
    value = '#3b82f6',
    onChange,
    disabled = false,
    className = '',
    placeholder = 'Select color',
    presetColors = DEFAULT_PRESET_COLORS,
    showPresets = true,
    size = 'md',
    labels = {},
}) => {
    // Default labels with English text
    const defaultLabels = {
        customColor: 'Custom Color',
        presetColors: 'Preset Colors',
        invalidHexMessage: 'Please enter a valid hex color (e.g., #FF0000)',
        selectColor: 'Select color',
        cancel: 'Cancel',
        select: 'Select',
    };

    // Merge default labels with provided labels
    const currentLabels = { ...defaultLabels, ...labels };
    const [isOpen, setIsOpen] = useState(false);
    const [customColor, setCustomColor] = useState(value);
    const [dropdownPosition, setDropdownPosition] = useState<'bottom' | 'top'>('bottom');
    const pickerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const sizeClasses = {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12'
    };

    const buttonSizeClasses = {
        sm: 'text-xs px-2 py-1',
        md: 'text-sm px-3 py-1.5',
        lg: 'text-base px-4 py-2'
    };

    useEffect(() => {
        setCustomColor(value);
    }, [value]);

    useEffect(() => {
        const calculatePosition = () => {
            if (buttonRef.current && isOpen) {
                const buttonRect = buttonRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const dropdownHeight = 400; // Approximate height of dropdown

                if (buttonRect.bottom + dropdownHeight > windowHeight) {
                    setDropdownPosition('top');
                } else {
                    setDropdownPosition('bottom');
                }
            }
        };

        if (isOpen) {
            calculatePosition();
            window.addEventListener('scroll', calculatePosition);
            window.addEventListener('resize', calculatePosition);
        }

        return () => {
            window.removeEventListener('scroll', calculatePosition);
            window.removeEventListener('resize', calculatePosition);
        };
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleColorChange = (color: string) => {
        setCustomColor(color);
        onChange?.(color);
    };

    const handlePresetColorClick = (color: string) => {
        handleColorChange(color);
        setIsOpen(false);
    };

    const handleCustomColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const color = event.target.value;
        handleColorChange(color);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const color = event.target.value;
        if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
            handleColorChange(color);
        }
        setCustomColor(color);
    };

    const isValidHex = (color: string) => {
        return /^#[0-9A-Fa-f]{6}$/.test(color);
    };

    return (
        <div className={cn('relative inline-block', className)} ref={pickerRef}>
            <button
                ref={buttonRef}
                type="button"
                className={cn(
                    'border-2 border-gray-300 rounded-lg cursor-pointer transition-all duration-200',
                    'hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    sizeClasses[size],
                    disabled && 'pointer-events-none'
                )}
                style={{ backgroundColor: value }}
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
                aria-label={placeholder}
            >
                <span className="sr-only">{placeholder}</span>
            </button>

            {isOpen && (
                <div
                    className={cn(
                        'absolute z-[9999] p-4 bg-white border border-gray-200 rounded-lg shadow-xl min-w-[280px] max-w-sm',
                        dropdownPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
                    )}
                >
                    <div className="space-y-4">
                        {/* Custom Color Input */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                {currentLabels.customColor}
                            </label>
                            <div className="flex items-center space-x-2">
                                <input
                                    ref={inputRef}
                                    type="color"
                                    value={customColor}
                                    onChange={handleCustomColorChange}
                                    className="w-12 h-8 border border-gray-300 rounded cursor-pointer"
                                />
                                <input
                                    type="text"
                                    value={customColor}
                                    onChange={handleInputChange}
                                    className={cn(
                                        'flex-1 px-3 py-1.5 border border-gray-300 rounded-md',
                                        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                                        'font-mono text-sm',
                                        !isValidHex(customColor) && 'border-red-300 bg-red-50'
                                    )}
                                    placeholder="#000000"
                                />
                            </div>
                            {!isValidHex(customColor) && customColor && (
                                <p className="text-xs text-red-600">
                                    {currentLabels.invalidHexMessage}
                                </p>
                            )}
                        </div>

                        {/* Preset Colors */}
                        {showPresets && (
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    {currentLabels.presetColors}
                                </label>
                                <div className="grid grid-cols-6 gap-2">
                                    {presetColors.map((color) => (
                                        <button
                                            key={color}
                                            type="button"
                                            className={cn(
                                                'w-8 h-8 rounded-md border-2 transition-all duration-200',
                                                'hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500',
                                                value === color ? 'border-gray-800 ring-2 ring-blue-500' : 'border-gray-300'
                                            )}
                                            style={{ backgroundColor: color }}
                                            onClick={() => handlePresetColorClick(color)}
                                            aria-label={`${currentLabels.selectColor} ${color}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex justify-end space-x-2 pt-2 border-t border-gray-200">
                            <button
                                type="button"
                                className={cn(
                                    'border border-gray-300 rounded-md hover:bg-gray-50',
                                    'focus:outline-none focus:ring-2 focus:ring-blue-500',
                                    buttonSizeClasses[size]
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {currentLabels.cancel}
                            </button>
                            <button
                                type="button"
                                className={cn(
                                    'bg-blue-600 text-white rounded-md hover:bg-blue-700',
                                    'focus:outline-none focus:ring-2 focus:ring-blue-500',
                                    'disabled:opacity-50 disabled:cursor-not-allowed',
                                    buttonSizeClasses[size]
                                )}
                                onClick={() => {
                                    if (isValidHex(customColor)) {
                                        handleColorChange(customColor);
                                        setIsOpen(false);
                                    }
                                }}
                                disabled={!isValidHex(customColor)}
                            >
                                {currentLabels.select}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

ColorPicker.displayName = 'ColorPicker';
