import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react';

export interface CheckboxProps {
    /**
     * The label for the checkbox
     */
    label?: React.ReactNode;

    /**
     * Whether the checkbox is checked
     */
    checked?: boolean;

    /**
     * Default checked state (uncontrolled)
     */
    defaultChecked?: boolean;

    /**
     * Called when the checked state changes
     */
    onChange?: (checked: boolean) => void;

    /**
     * Whether the checkbox is in an indeterminate state
     */
    indeterminate?: boolean;

    /**
     * Whether the checkbox is disabled
     */
    disabled?: boolean;

    /**
     * The checkbox color
     * @default 'primary'
     */
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

    /**
     * The size of the checkbox
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * The value of the checkbox
     */
    value?: string;

    /**
     * The name of the checkbox
     */
    name?: string;

    /**
     * ID for the checkbox input
     */
    id?: string;

    /**
     * Whether to render the label on the left side of the checkbox
     * @default false
     */
    labelLeft?: boolean;

    /**
     * Helper text to display below the checkbox
     */
    helperText?: string;

    /**
     * Error message to display when invalid
     */
    errorMessage?: string;

    /**
     * Whether the checkbox is invalid
     * @default false
     */
    isInvalid?: boolean;

    /**
     * Whether the checkbox is required
     * @default false
     */
    required?: boolean;
}

export interface CheckboxRef {
    focus: () => void;
    blur: () => void;
    click: () => void;
    indeterminate: (value: boolean) => void;
}

const Checkbox = forwardRef<CheckboxRef, CheckboxProps>(({
    label,
    checked,
    defaultChecked = false,
    onChange,
    indeterminate = false,
    disabled = false,
    color = 'primary',
    size = 'md',
    className = '',
    value,
    name,
    id,
    labelLeft = false,
    helperText,
    errorMessage,
    isInvalid = false,
    required = false,
    ...rest
}, ref) => {
    // State for uncontrolled component
    const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked);
    const inputRef = useRef<HTMLInputElement>(null);

    // Track if we're in controlled or uncontrolled mode
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;

    // Expose methods via ref
    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus(),
        blur: () => inputRef.current?.blur(),
        click: () => inputRef.current?.click(),
        indeterminate: (value: boolean) => {
            if (inputRef.current) {
                inputRef.current.indeterminate = value;
            }
        }
    }));

    // Set initial indeterminate state
    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    // Handle change events
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = event.target.checked;

        if (!isControlled) {
            setInternalChecked(newChecked);
        }

        onChange?.(newChecked);
    };

    // Size classes
    const sizeClasses = {
        sm: {
            checkbox: 'h-3 w-3',
            wrapper: 'text-sm',
        },
        md: {
            checkbox: 'h-4 w-4',
            wrapper: 'text-base',
        },
        lg: {
            checkbox: 'h-5 w-5',
            wrapper: 'text-lg',
        },
    };

    // Color classes
    const colorClasses = {
        primary: 'text-blue-600 focus:ring-blue-500',
        secondary: 'text-purple-600 focus:ring-purple-500',
        success: 'text-green-500 focus:ring-green-500',
        danger: 'text-red-500 focus:ring-red-500',
        warning: 'text-yellow-500 focus:ring-yellow-500',
        info: 'text-cyan-500 focus:ring-cyan-500',
    };

    // Generate unique ID if not provided
    const checkboxId = id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;

    // Build class names
    const checkboxClasses = `
    ${sizeClasses[size].checkbox}
    ${colorClasses[color]}
    rounded
    border-gray-300
    ${isInvalid ? 'border-red-500 focus:ring-red-500' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    focus:ring-1
  `;

    const wrapperClasses = `
    inline-flex
    items-center
    ${sizeClasses[size].wrapper}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

    // Render checkbox with or without label
    const renderCheckbox = () => (
        <input
            ref={inputRef}
            type="checkbox"
            id={checkboxId}
            name={name}
            value={value}
            checked={isChecked}
            onChange={handleChange}
            disabled={disabled}
            className={checkboxClasses}
            aria-invalid={isInvalid}
            aria-describedby={
                errorMessage ? `${checkboxId}-error` :
                    helperText ? `${checkboxId}-helper` :
                        undefined
            }
            required={required}
            {...rest}
        />
    );

    return (
        <div className="flex flex-col">
            <label htmlFor={checkboxId} className={wrapperClasses}>
                {labelLeft && label && <span className="mr-2">{label}</span>}
                {renderCheckbox()}
                {!labelLeft && label && <span className="ml-2">{label}</span>}
            </label>

            {helperText && !errorMessage && (
                <p id={`${checkboxId}-helper`} className="mt-1 text-xs text-gray-500">
                    {helperText}
                </p>
            )}

            {isInvalid && errorMessage && (
                <p id={`${checkboxId}-error`} className="mt-1 text-xs text-red-500">
                    {errorMessage}
                </p>
            )}
        </div>
    );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
