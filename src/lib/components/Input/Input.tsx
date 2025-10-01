import React, { forwardRef, useState, useImperativeHandle, useRef } from 'react';
import { useDebouncedCallback } from '../../utils/debounce';

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
     * Enable debounce functionality
     */
    debounce?: boolean;

    /**
     * Debounce delay in milliseconds
     * @default 300
     */
    debounceDelay?: number;

    /**
     * Callback function for debounced value changes
     */
    onDebouncedChange?: (value: string) => void;

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
    debounce = false,
    debounceDelay = 300,
    onDebouncedChange,
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

    // Create debounced callback for onDebouncedChange
    const debouncedCallback = useDebouncedCallback((value: string) => {
        if (onDebouncedChange) {
            onDebouncedChange(value);
        }
    }, debounceDelay);

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
        const newValue = e.target.value;

        if (!isControlled) {
            setInputValue(newValue);
        }

        // Call immediate onChange if provided
        onChange?.(e);

        // Call debounced callback if debounce is enabled
        if (debounce && onDebouncedChange) {
            debouncedCallback(newValue);
        }
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

    // Affix wrapper classes for when we have prefix/suffix  
    const affixWrapperClasses = [
        'relative inline-flex items-center w-full',
        variant !== 'unstyled' ? 'rounded border' : '',
        'focus-within:outline-none focus-within:ring-1',
        getVariantClasses(),
        isDisabled ? 'opacity-60 cursor-not-allowed bg-gray-50' : '',
        fullWidth ? 'w-full' : 'w-auto',
    ].filter(Boolean).join(' ');

    // Input classes when inside affix wrapper
    const affixInputClasses = [
        'flex-1 border-none bg-transparent focus:outline-none focus:ring-0',
        variant !== 'unstyled' ? sizeClasses[size] : '',
        'px-0', // No padding, affix wrapper handles spacing
    ].filter(Boolean).join(' ');

    // Regular input classes (no affix)
    const inputClasses = [
        'block',
        variant !== 'unstyled' ? 'rounded' : '',
        'focus:outline-none',
        'focus:ring-1',
        variant !== 'unstyled' ? sizeClasses[size] : '',
        getVariantClasses(),
        isDisabled ? 'opacity-60 cursor-not-allowed bg-gray-50' : '',
        fullWidth ? 'w-full' : 'w-auto',
        className
    ].filter(Boolean).join(' ');

    // If we have prefix/suffix icons, use affix wrapper pattern
    if (leftIcon || rightIcon) {
        return (
            <div className={`${fullWidth ? 'w-full' : 'w-auto'} ${wrapperClassName}`}>
                {label && (
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {label}
                    </label>
                )}

                <div className={affixWrapperClasses}>
                    {leftAddon && (
                        <div className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                            {leftAddon}
                        </div>
                    )}

                    {leftIcon && (
                        <div className="flex items-center justify-center px-3 text-gray-400">
                            {leftIcon}
                        </div>
                    )}

                    <input
                        ref={inputRef}
                        type={type}
                        className={affixInputClasses}
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
                        <div className="flex items-center justify-center px-3">
                            {rightIcon}
                        </div>
                    )}

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
    }

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

                {(leftIcon || rightIcon) ? (
                    <div className={affixWrapperClasses}>
                        {leftIcon && (
                            <span className="flex items-center text-gray-400 px-3">
                                {leftIcon}
                            </span>
                        )}
                        <input
                            ref={inputRef}
                            type={type}
                            className={affixInputClasses}
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
                            <span className="flex items-center text-gray-400 px-3">
                                {rightIcon}
                            </span>
                        )}
                    </div>
                ) : (
                    <div className={`${leftAddon ? 'rounded-l-none' : ''} ${rightAddon ? 'rounded-r-none' : ''}`}>
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
                    </div>
                )}

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
