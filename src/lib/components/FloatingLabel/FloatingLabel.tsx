import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react';

export interface FloatingLabelProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * The floating label text
     */
    label: string;

    /**
     * Input variant
     * @default 'outline'
     */
    variant?: 'outline' | 'filled' | 'standard';

    /**
     * Size of the input
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';

    /**
     * Whether the input is invalid
     */
    isInvalid?: boolean;

    /**
     * Whether the input is disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the input is read-only
     */
    isReadOnly?: boolean;

    /**
     * Error message to display
     */
    errorMessage?: string;

    /**
     * Helper text to display below the input
     */
    helperText?: string;

    /**
     * If true, the input will expand to fill its container
     * @default false
     */
    fullWidth?: boolean;

    /**
     * Additional CSS classes for the input wrapper
     */
    wrapperClassName?: string;

    /**
     * Color scheme for the floating label
     * @default 'blue'
     */
    colorScheme?: 'blue' | 'green' | 'red' | 'purple' | 'gray';
}

export interface FloatingLabelRef {
    focus: () => void;
    blur: () => void;
    clear: () => void;
    select: () => void;
    value: string;
}

const FloatingLabel = forwardRef<FloatingLabelRef, FloatingLabelProps>(({
    label,
    variant = 'outline',
    size = 'md',
    isInvalid = false,
    isDisabled = false,
    isReadOnly = false,
    errorMessage,
    helperText,
    fullWidth = false,
    className = '',
    wrapperClassName = '',
    colorScheme = 'blue',
    value,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    type = 'text',
    ...rest
}, ref) => {
    const [inputValue, setInputValue] = useState(defaultValue || '');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Track if we're in controlled or uncontrolled mode
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : inputValue;

    // Determine if label should be floating
    const shouldFloat = isFocused || !!currentValue || !!rest.placeholder;

    // Expose methods and properties via ref
    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus(),
        blur: () => inputRef.current?.blur(),
        clear: () => {
            if (isControlled) {
                onChange?.({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
            } else {
                setInputValue('');
            }
        },
        select: () => inputRef.current?.select(),
        get value() {
            return inputRef.current?.value || '';
        }
    }));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) {
            setInputValue(e.target.value);
        }
        onChange?.(e);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        onBlur?.(e);
    };

    // Size classes
    const sizeClasses = {
        sm: {
            input: 'py-2 px-3 text-sm',
            label: 'text-sm',
            labelFloat: 'text-xs'
        },
        md: {
            input: 'py-3 px-3 text-base',
            label: 'text-base',
            labelFloat: 'text-sm'
        },
        lg: {
            input: 'py-4 px-4 text-lg',
            label: 'text-lg',
            labelFloat: 'text-base'
        },
    };

    // Color scheme classes
    const colorSchemes = {
        blue: {
            focus: 'border-blue-500 focus:ring-blue-500',
            label: 'text-blue-600'
        },
        green: {
            focus: 'border-green-500 focus:ring-green-500',
            label: 'text-green-600'
        },
        red: {
            focus: 'border-red-500 focus:ring-red-500',
            label: 'text-red-600'
        },
        purple: {
            focus: 'border-purple-500 focus:ring-purple-500',
            label: 'text-purple-600'
        },
        gray: {
            focus: 'border-gray-500 focus:ring-gray-500',
            label: 'text-gray-600'
        }
    };

    // Variant classes
    const getVariantClasses = () => {
        const colorConfig = colorSchemes[colorScheme];

        if (isInvalid) {
            switch (variant) {
                case 'outline':
                    return 'border border-red-500 focus:ring-red-500 focus:border-red-500 bg-white';
                case 'filled':
                    return 'border-0 border-b-2 border-red-500 bg-gray-100 focus:bg-white rounded-t-md';
                case 'standard':
                    return 'border-0 border-b-2 border-red-500 bg-transparent rounded-none px-0';
            }
        }

        switch (variant) {
            case 'outline':
                return `border border-gray-300 ${colorConfig.focus} bg-white focus:ring-1 rounded-md`;
            case 'filled':
                return `border-0 border-b-2 border-gray-300 ${colorConfig.focus} bg-gray-100 focus:bg-white rounded-t-md`;
            case 'standard':
                return `border-0 border-b-2 border-gray-300 ${colorConfig.focus} bg-transparent rounded-none px-0`;
            default:
                return `border border-gray-300 ${colorConfig.focus} bg-white focus:ring-1 rounded-md`;
        }
    };

    // Label positioning classes
    const getLabelClasses = () => {
        const baseClasses = 'absolute left-3 transition-all duration-200 ease-in-out pointer-events-none';
        const colorConfig = colorSchemes[colorScheme];

        if (variant === 'standard') {
            if (shouldFloat) {
                return `${baseClasses} -top-2 left-0 ${sizeClasses[size].labelFloat} ${isFocused ? colorConfig.label : 'text-gray-500'}`;
            } else {
                return `${baseClasses} top-3 ${sizeClasses[size].label} text-gray-500`;
            }
        }

        if (shouldFloat) {
            return `${baseClasses} -top-2 ${sizeClasses[size].labelFloat} ${isFocused ? colorConfig.label : 'text-gray-500'} bg-white px-1`;
        } else {
            return `${baseClasses} top-3 ${sizeClasses[size].label} text-gray-500`;
        }
    };

    // Generate the input classes
    const inputClasses = [
        'block w-full focus:outline-none transition-colors',
        sizeClasses[size].input,
        getVariantClasses(),
        isDisabled ? 'opacity-60 cursor-not-allowed bg-gray-50' : '',
        fullWidth ? 'w-full' : 'w-auto',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={`${fullWidth ? 'w-full' : 'w-auto'} ${wrapperClassName}`}>
            <div className="relative">
                <input
                    ref={inputRef}
                    type={type}
                    className={inputClasses}
                    value={currentValue}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={isDisabled}
                    readOnly={isReadOnly}
                    aria-invalid={isInvalid}
                    aria-describedby={
                        errorMessage ? `${rest.id}-error` :
                            helperText ? `${rest.id}-helper` :
                                undefined
                    }
                    {...rest}
                />

                <label className={getLabelClasses()}>
                    {label}
                </label>
            </div>

            {helperText && !errorMessage && (
                <p id={`${rest.id}-helper`} className="mt-1 text-xs text-gray-500">
                    {helperText}
                </p>
            )}

            {isInvalid && errorMessage && (
                <p id={`${rest.id}-error`} className="mt-1 text-xs text-red-500">
                    {errorMessage}
                </p>
            )}
        </div>
    );
});

FloatingLabel.displayName = 'FloatingLabel';

export default FloatingLabel;
