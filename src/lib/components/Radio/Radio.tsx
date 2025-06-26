import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react';

export interface RadioProps {
    /**
     * The label for the radio button
     */
    label?: React.ReactNode;

    /**
     * Whether the radio button is checked
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
     * Whether the radio button is disabled
     */
    disabled?: boolean;

    /**
     * The radio button color
     * @default 'primary'
     */
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

    /**
     * The size of the radio button
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * The value of the radio button
     */
    value?: string;

    /**
     * The name of the radio button (essential for grouping)
     */
    name?: string;

    /**
     * ID for the radio input
     */
    id?: string;

    /**
     * Whether to render the label on the left side of the radio button
     * @default false
     */
    labelLeft?: boolean;

    /**
     * Helper text to display below the radio button
     */
    helperText?: string;

    /**
     * Error message to display when invalid
     */
    errorMessage?: string;

    /**
     * Whether the radio button is invalid
     * @default false
     */
    isInvalid?: boolean;

    /**
     * Whether the radio button is required
     * @default false
     */
    required?: boolean;
}

export interface RadioRef {
    focus: () => void;
    blur: () => void;
    click: () => void;
}

export interface RadioGroupProps {
    /**
     * Radio group children
     */
    children: React.ReactNode;

    /**
     * The name attribute to be applied to all radios in this group
     */
    name: string;

    /**
     * The currently selected value for the radio group
     */
    value?: string;

    /**
     * Default value (uncontrolled)
     */
    defaultValue?: string;

    /**
     * The callback invoked when the selected radio changes
     */
    onChange?: (value: string) => void;

    /**
     * Direction to lay out the radio buttons
     * @default 'vertical'
     */
    direction?: 'horizontal' | 'vertical';

    /**
     * The spacing between radio buttons
     * @default 'md'
     */
    spacing?: 'sm' | 'md' | 'lg';

    /**
     * Whether the radio group is disabled
     * @default false
     */
    disabled?: boolean;

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * Label for the entire radio group
     */
    label?: React.ReactNode;

    /**
     * Helper text for the entire radio group
     */
    helperText?: string;

    /**
     * Error message for the entire radio group
     */
    errorMessage?: string;

    /**
     * Whether the radio group is invalid
     * @default false
     */
    isInvalid?: boolean;

    /**
     * Whether the radio group is required
     * @default false
     */
    required?: boolean;
}

// Radio button component
const Radio = forwardRef<RadioRef, RadioProps>(({
    label,
    checked,
    defaultChecked = false,
    onChange,
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
    }));

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
            radio: 'h-3 w-3',
            wrapper: 'text-sm',
        },
        md: {
            radio: 'h-4 w-4',
            wrapper: 'text-base',
        },
        lg: {
            radio: 'h-5 w-5',
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
    const radioId = id || `radio-${Math.random().toString(36).substring(2, 9)}`;

    // Build class names
    const radioClasses = `
    ${sizeClasses[size].radio}
    ${colorClasses[color]}
    rounded-full
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

    // Render radio button with or without label
    const renderRadio = () => (
        <input
            ref={inputRef}
            type="radio"
            id={radioId}
            name={name}
            value={value}
            checked={isChecked}
            onChange={handleChange}
            disabled={disabled}
            className={radioClasses}
            aria-invalid={isInvalid}
            aria-describedby={
                errorMessage ? `${radioId}-error` :
                    helperText ? `${radioId}-helper` :
                        undefined
            }
            required={required}
            {...rest}
        />
    );

    return (
        <div className="flex flex-col">
            <label htmlFor={radioId} className={wrapperClasses}>
                {labelLeft && label && <span className="mr-2">{label}</span>}
                {renderRadio()}
                {!labelLeft && label && <span className="ml-2">{label}</span>}
            </label>

            {helperText && !errorMessage && (
                <p id={`${radioId}-helper`} className="mt-1 text-xs text-gray-500">
                    {helperText}
                </p>
            )}

            {isInvalid && errorMessage && (
                <p id={`${radioId}-error`} className="mt-1 text-xs text-red-500">
                    {errorMessage}
                </p>
            )}
        </div>
    );
});

// Radio group component (to manage a group of radio buttons)
export const RadioGroup: React.FC<RadioGroupProps> = ({
    children,
    name,
    value,
    defaultValue,
    onChange,
    direction = 'vertical',
    spacing = 'md',
    disabled = false,
    className = '',
    label,
    helperText,
    errorMessage,
    isInvalid = false,
    required = false,
}) => {
    // State for uncontrolled component
    const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);

    // Track if we're in controlled or uncontrolled mode
    const isControlled = value !== undefined;
    const selectedValue = isControlled ? value : internalValue;

    // Handle change events directly from RadioGroup
    // This handleChange is not used directly in the component
    // but is here for completeness in the RadioGroup props interface

    // Spacing classes
    const spacingClasses = {
        sm: direction === 'horizontal' ? 'space-x-2' : 'space-y-1',
        md: direction === 'horizontal' ? 'space-x-4' : 'space-y-2',
        lg: direction === 'horizontal' ? 'space-x-6' : 'space-y-3',
    };

    // Clone children to pass down required props
    const modifiedChildren = React.Children.map(children, (child) => {
        if (!React.isValidElement<RadioProps>(child)) return child;

        return React.cloneElement(child, {
            name,
            checked: child.props.value === selectedValue,
            onChange: (checked: boolean) => {
                if (checked) {
                    if (isControlled) {
                        onChange?.(child.props.value || '');
                    } else {
                        setInternalValue(child.props.value);
                        onChange?.(child.props.value || '');
                    }
                }
            },
            disabled: disabled || child.props.disabled,
            isInvalid: isInvalid || child.props.isInvalid,
        } as Partial<RadioProps>);
    });

    // Generate a unique ID for the group
    const groupId = `radio-group-${Math.random().toString(36).substring(2, 9)}`;

    return (
        <div className={`radio-group ${className}`} role="radiogroup" aria-labelledby={label ? `${groupId}-label` : undefined}>
            {label && (
                <div id={`${groupId}-label`} className="mb-2 font-medium">
                    {label} {required && <span className="text-red-500">*</span>}
                </div>
            )}

            <div className={`flex ${direction === 'horizontal' ? 'flex-row' : 'flex-col'} ${spacingClasses[spacing]}`}>
                {modifiedChildren}
            </div>

            {helperText && !errorMessage && (
                <p id={`${groupId}-helper`} className="mt-1 text-xs text-gray-500">
                    {helperText}
                </p>
            )}

            {isInvalid && errorMessage && (
                <p id={`${groupId}-error`} className="mt-1 text-xs text-red-500">
                    {errorMessage}
                </p>
            )}
        </div>
    );
};

Radio.displayName = 'Radio';
RadioGroup.displayName = 'RadioGroup';

export default Radio;
