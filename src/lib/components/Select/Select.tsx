import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

export type SelectOption = {
    value: string | number;
    label: string;
    disabled?: boolean;
    [key: string]: any;
};

export interface SelectProps {
    /**
     * Options for the select
     */
    options: SelectOption[];

    /**
     * Currently selected value(s)
     */
    value?: string | string[] | number | number[];

    /**
     * Default value (uncontrolled)
     */
    defaultValue?: string | string[] | number | number[];

    /**
     * Called when selection changes
     */
    onChange?: (value: string | string[] | number | number[]) => void;

    /**
     * Called when search input changes (for use with AsyncSelect)
     */
    onSearchInputChange?: (value: string) => void;

    /**
     * Placeholder text when no option is selected
     */
    placeholder?: string;

    /**
     * Whether multiple options can be selected
     * @default false
     */
    multiple?: boolean;

    /**
     * Whether the select is disabled
     * @default false
     */
    disabled?: boolean;

    /**
     * Whether the select is searchable
     * @default false
     */
    searchable?: boolean;

    /**
     * Whether the select is clearable
     * @default false
     */
    clearable?: boolean;

    /**
     * Whether the select is in error state
     * @default false
     */
    isInvalid?: boolean;

    /**
     * Error message to display
     */
    errorMessage?: string;

    /**
     * Helper text to display
     */
    helperText?: string;

    /**
     * Label for the select
     */
    label?: string;

    /**
     * Size of the select
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';

    /**
     * Variant style of the select
     * @default 'outline'
     */
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';

    /**
     * If true, the input will expand to fill its container
     * @default false
     */
    fullWidth?: boolean;

    /**
     * Custom class name for the select container
     */
    className?: string;

    /**
     * Maximum height of the dropdown menu
     * @default '300px'
     */
    maxMenuHeight?: string;

    /**
     * Whether to close the menu after selecting an option
     * @default true for single select, false for multiple
     */
    closeMenuOnSelect?: boolean;

    /**
     * Text to display when no options match the search
     * @default 'No options found'
     */
    noOptionsMessage?: string;

    /**
     * Custom z-index for the dropdown menu
     * @default 10
     */
    zIndex?: number;
}

export interface SelectRef {
    focus: () => void;
    blur: () => void;
    clear: () => void;
    isOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
}

const Select = forwardRef<SelectRef, SelectProps>(({
    options = [],
    value,
    defaultValue,
    onChange,
    onSearchInputChange,
    placeholder = 'Select an option',
    multiple = false,
    disabled = false,
    searchable = false,
    clearable = false,
    isInvalid = false,
    errorMessage,
    helperText,
    label,
    size = 'md',
    variant = 'outline',
    fullWidth = false,
    className = '',
    maxMenuHeight = '300px',
    closeMenuOnSelect,
    noOptionsMessage = 'No options found',
    zIndex = 10
}, ref) => {
    // State for the select
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');
    const [internalValue, setInternalValue] = useState<any>(defaultValue !== undefined ? defaultValue : multiple ? [] : '');

    // Refs for DOM elements
    const selectRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // Check if component is controlled
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    // Close menu on select logic
    const shouldCloseMenuOnSelect = closeMenuOnSelect !== undefined
        ? closeMenuOnSelect
        : !multiple;

    // Expose methods via ref
    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus(),
        blur: () => inputRef.current?.blur(),
        clear: clearSelection,
        isOpen,
        openMenu: () => setIsOpen(true),
        closeMenu: () => setIsOpen(false),
    }));

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Filter options based on search value
    const filteredOptions = searchable && searchValue
        ? options.filter(option =>
            option.label.toLowerCase().includes(searchValue.toLowerCase()))
        : options;

    // Toggle the dropdown
    const toggleDropdown = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
            if (!isOpen && searchable) {
                setTimeout(() => {
                    inputRef.current?.focus();
                }, 0);
            }
        }
    };

    // Clear the selection
    const clearSelection = (e?: React.MouseEvent) => {
        e?.stopPropagation();

        const newValue = multiple ? [] : '';

        if (!isControlled) {
            setInternalValue(newValue);
        }

        if (onChange) {
            onChange(newValue);
        }

        if (searchable) {
            setSearchValue('');
        }
    };

    // Handle option selection
    const handleSelectOption = (option: SelectOption) => {
        if (option.disabled) return;

        let newValue;

        if (multiple) {
            const values = Array.isArray(currentValue) ? currentValue : [];
            const optionValue = option.value;

            if (values.includes(optionValue)) {
                // Remove the value if already selected
                newValue = values.filter(val => val !== optionValue);
            } else {
                // Add the value
                newValue = [...values, optionValue];
            }
        } else {
            newValue = option.value;
        }

        if (!isControlled) {
            setInternalValue(newValue);
        }

        if (onChange) {
            onChange(newValue);
        }

        if (shouldCloseMenuOnSelect) {
            setIsOpen(false);
        }

        if (searchable) {
            setSearchValue('');

            // Keep focus on search input if menu stays open
            if (!shouldCloseMenuOnSelect) {
                setTimeout(() => {
                    inputRef.current?.focus();
                }, 0);
            }
        }
    };

    // Check if an option is selected
    const isOptionSelected = (option: SelectOption): boolean => {
        if (multiple) {
            return Array.isArray(currentValue) && currentValue.includes(option.value);
        }
        return currentValue === option.value;
    };

    // Get display value for the select
    const getDisplayValue = (): string => {
        if (!currentValue || (Array.isArray(currentValue) && currentValue.length === 0)) {
            return placeholder;
        }

        if (multiple && Array.isArray(currentValue)) {
            if (currentValue.length === 0) return placeholder;

            if (currentValue.length === 1) {
                const option = options.find(opt => opt.value === currentValue[0]);
                return option ? option.label : placeholder;
            }

            return `${currentValue.length} selected`;
        }

        const option = options.find(opt => opt.value === currentValue);
        return option ? option.label : placeholder;
    };

    // Handle search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setSearchValue(newValue);
        // If the parent component is AsyncSelect, we need to notify it of the input change
        if (onSearchInputChange) {
            onSearchInputChange(newValue);
        }
    };

    // Handle key events
    const handleKeyDown = (e: React.KeyboardEvent) => {
        switch (e.key) {
            case 'Escape':
                setIsOpen(false);
                break;
            case 'ArrowDown':
                if (!isOpen) {
                    setIsOpen(true);
                }
                break;
            case 'Enter':
                if (!isOpen) {
                    setIsOpen(true);
                }
                break;
        }
    };

    // Size classes for different parts
    const sizeClasses = {
        sm: {
            container: 'text-xs',
            trigger: 'py-1 px-2',
            menu: 'py-1',
            option: 'py-1 px-2',
        },
        md: {
            container: 'text-sm',
            trigger: 'py-2 px-3',
            menu: 'py-1',
            option: 'py-2 px-3',
        },
        lg: {
            container: 'text-base',
            trigger: 'py-2.5 px-4',
            menu: 'py-1.5',
            option: 'py-2.5 px-4',
        },
    };

    // Variant classes
    const getVariantClasses = () => {
        if (isInvalid) {
            switch (variant) {
                case 'outline':
                    return 'border border-red-500';
                case 'filled':
                    return 'bg-red-50 border-none';
                case 'flushed':
                    return 'border-b border-red-500 rounded-none px-0';
                case 'unstyled':
                    return 'border-none shadow-none bg-transparent';
            }
        }

        switch (variant) {
            case 'outline':
                return 'border border-gray-300';
            case 'filled':
                return 'bg-gray-100 border-none';
            case 'flushed':
                return 'border-b border-gray-300 rounded-none px-0';
            case 'unstyled':
                return 'border-none shadow-none bg-transparent';
            default:
                return 'border border-gray-300';
        }
    };

    return (
        <div
            className={`relative ${fullWidth ? 'w-full' : 'w-auto'} ${className}`}
            ref={selectRef}
        >
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}

            <div
                className={`
          relative select-none
          ${sizeClasses[size].container}
          ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
          ${fullWidth ? 'w-full' : 'w-auto'}
        `}
                onClick={toggleDropdown}
                onKeyDown={handleKeyDown}
                tabIndex={disabled ? -1 : 0}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-disabled={disabled}
                role="combobox"
            >
                {/* Select trigger */}
                <div
                    className={`
            flex items-center justify-between
            ${variant !== 'unstyled' ? 'rounded' : ''}
            ${sizeClasses[size].trigger}
            ${getVariantClasses()}
            ${isOpen ? 'ring-1 ring-blue-500' : ''}
          `}
                >
                    <div className="flex-grow truncate">
                        {searchable && isOpen ? (
                            <input
                                ref={inputRef}
                                type="text"
                                className="w-full bg-transparent outline-none border-none p-0"
                                value={searchValue}
                                onChange={handleSearchChange}
                                onClick={e => e.stopPropagation()}
                                placeholder={getDisplayValue()}
                                disabled={disabled}
                            />
                        ) : (
                            <span className={`
                block truncate
                ${!currentValue || (Array.isArray(currentValue) && currentValue.length === 0) ? 'text-gray-400' : ''}
              `}>
                                {getDisplayValue()}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center ml-2">
                        {clearable && currentValue && (!Array.isArray(currentValue) || currentValue.length > 0) && (
                            <button
                                type="button"
                                className="text-gray-400 hover:text-gray-600 mr-1"
                                onClick={clearSelection}
                                aria-label="Clear selection"
                            >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}

                        <svg
                            className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* Dropdown menu */}
                {isOpen && (
                    <div
                        ref={menuRef}
                        className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-10 overflow-hidden"
                        style={{ maxHeight: maxMenuHeight, overflowY: 'auto', zIndex }}
                        role="listbox"
                        aria-multiselectable={multiple}
                    >
                        {filteredOptions.length > 0 ? (
                            <ul className={sizeClasses[size].menu}>
                                {filteredOptions.map((option, index) => (
                                    <li
                                        key={`${option.value}-${index}`}
                                        className={`
                      ${sizeClasses[size].option}
                      ${isOptionSelected(option) ? 'bg-blue-100 text-blue-900' : 'text-gray-800'}
                      ${option.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer'}
                    `}
                                        onClick={() => handleSelectOption(option)}
                                        role="option"
                                        aria-selected={isOptionSelected(option)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="truncate">{option.label}</span>
                                            {multiple && isOptionSelected(option) && (
                                                <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="p-3 text-center text-gray-500">
                                {noOptionsMessage}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {helperText && !errorMessage && (
                <p className="mt-1 text-xs text-gray-500">
                    {helperText}
                </p>
            )}

            {isInvalid && errorMessage && (
                <p className="mt-1 text-xs text-red-500">
                    {errorMessage}
                </p>
            )}
        </div>
    );
});

Select.displayName = 'Select';

export default Select;
