import React, { forwardRef, useState, useImperativeHandle, useRef } from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * Input variant
     * @default 'outline'
     */
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';

    /**
     * Size of the input
     * @default 'md'
     */
    size?: 'xs' | 'sm' | 'md' | 'lg';

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
     * Label for the input
     */
    label?: string;

    /**
     * An icon to display before the input text
     */
    leftIcon?: React.ReactNode;

    /**
     * An icon to display after the input text
     */
    rightIcon?: React.ReactNode;

    /**
     * An element to display before the input
     */
    leftAddon?: React.ReactNode;

    /**
     * An element to display after the input
     */
    rightAddon?: React.ReactNode;

    /**
     * If true, the input will expand to fill its container
     * @default false
     */
    fullWidth?: boolean;

    /**
     * Additional CSS classes for the input wrapper
     */
    wrapperClassName?: string;
}

export interface InputRef {
    focus: () => void;
    blur: () => void;
    clear: () => void;
    select: () => void;
    value: string;
}

const Input = forwardRef<InputRef, InputProps>(({
    variant = 'outline',
    size = 'md',
    isInvalid = false,
    isDisabled = false,
    isReadOnly = false,
    errorMessage,
    helperText,
    label,
    leftIcon,
    rightIcon,
    leftAddon,
    rightAddon,
    fullWidth = false,
    className = '',
    wrapperClassName = '',
    value,
    defaultValue,
    onChange,
    type = 'text',
    ...rest
}, ref) => {
    const [inputValue, setInputValue] = useState(defaultValue || '');
    const inputRef = useRef<HTMLInputElement>(null);

    // Track if we're in controlled or uncontrolled mode
    const isControlled = value !== undefined;

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

    // Size classes
    const sizeClasses = {
        xs: 'py-1 px-2 text-xs',
        sm: 'py-1.5 px-3 text-sm',
        md: 'py-2 px-4 text-base',
        lg: 'py-2.5 px-5 text-lg',
    };

    // Variant classes
    const getVariantClasses = () => {
        if (isInvalid) {
            switch (variant) {
                case 'outline':
                    return 'border border-red-500 focus:ring-red-500 focus:border-red-500';
                case 'filled':
                    return 'bg-red-50 border-none focus:bg-red-50';
                case 'flushed':
                    return 'border-b border-red-500 rounded-none px-0 focus:border-red-500';
                case 'unstyled':
                    return 'border-none focus:ring-0';
            }
        }

        switch (variant) {
            case 'outline':
                return 'border border-gray-300 focus:ring-blue-500 focus:border-blue-500';
            case 'filled':
                return 'bg-gray-100 border-none focus:bg-white';
            case 'flushed':
                return 'border-b border-gray-300 rounded-none px-0 focus:border-blue-500';
            case 'unstyled':
                return 'border-none focus:ring-0';
            default:
                return 'border border-gray-300 focus:ring-blue-500 focus:border-blue-500';
        }
    };

    // Generate the input classes based on the props
    const inputClasses = [
        'block',
        variant !== 'unstyled' ? 'rounded' : '',
        'focus:outline-none',
        'focus:ring-1',
        variant !== 'unstyled' ? sizeClasses[size] : '',
        getVariantClasses(),
        isDisabled ? 'opacity-60 cursor-not-allowed bg-gray-50' : '',
        fullWidth ? 'w-full' : 'w-auto',
        leftIcon ? 'pl-10' : '',
        rightIcon ? 'pr-10' : '',
        className
    ].filter(Boolean).join(' ');

    // Structure of the input with possible addon/icon wrappers
    return (
        <div className={`${fullWidth ? 'w-full' : 'w-auto'} ${wrapperClassName}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}

            <div className="relative">
                {leftAddon && (
                    <div className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                        {leftAddon}
                    </div>
                )}

                <div className={`relative flex-grow ${leftAddon ? 'rounded-l-none' : ''} ${rightAddon ? 'rounded-r-none' : ''}`}>
                    {leftIcon && (
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                            {leftIcon}
                        </div>
                    )}

                    <input
                        ref={inputRef}
                        type={type}
                        className={inputClasses}
                        value={isControlled ? value : inputValue}
                        onChange={handleChange}
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

                    {rightIcon && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                            {rightIcon}
                        </div>
                    )}
                </div>

                {rightAddon && (
                    <div className="inline-flex items-center px-3 rounded-r border border-l-0 border-gray-300 bg-gray-50 text-gray-500">
                        {rightAddon}
                    </div>
                )}
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

Input.displayName = 'Input';

export default Input;
