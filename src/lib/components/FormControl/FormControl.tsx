import React, { forwardRef } from 'react';

type FormControlSize = 'sm' | 'md' | 'lg';
type FormControlVariant = 'outline' | 'filled' | 'unstyled';
type FormControlValidationState = 'valid' | 'invalid' | 'warning' | undefined;

export interface FormControlProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * The size of the form control
     * @default 'md'
     */
    size?: FormControlSize;

    /**
     * The visual style variant of the form control
     * @default 'outline'
     */
    variant?: FormControlVariant;

    /**
     * Validation state of the form control
     */
    validationState?: FormControlValidationState;

    /**
     * Makes the form control take the full width of its container
     * @default true
     */
    fullWidth?: boolean;

    /**
     * Additional CSS classes to apply to the form control
     */
    className?: string;

    /**
     * Icon to display at the start of the form control
     */
    startAdornment?: React.ReactNode;

    /**
     * Icon to display at the end of the form control
     */
    endAdornment?: React.ReactNode;

    /**
     * Label for the form control
     */
    label?: string;

    /**
     * Helper text to display below the form control
     */
    helperText?: string;

    /**
     * Error message to display when validationState is 'invalid'
     */
    errorText?: string;

    /**
     * ID for the form control
     */
    id?: string;
}

/**
 * Form control component for user input
 */
const FormControl = forwardRef<HTMLInputElement, FormControlProps>(({
    size = 'md',
    variant = 'outline',
    validationState,
    fullWidth = true,
    className = '',
    startAdornment,
    endAdornment,
    label,
    helperText,
    errorText,
    id,
    disabled,
    readOnly,
    ...props
}, ref) => {
    // Generate a unique ID if not provided
    const inputId = id || `form-control-${Math.random().toString(36).substr(2, 9)}`;

    // Base classes
    const baseClasses = 'block w-full focus:outline-none transition-colors';

    // Size classes
    const sizeClasses = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-2 text-sm',
        lg: 'px-4 py-3 text-base'
    };

    // Variant classes
    const variantClasses = {
        outline: 'border rounded-md bg-white',
        filled: 'border-0 bg-gray-100 rounded-md focus:bg-white',
        unstyled: 'border-0 bg-transparent p-0'
    };

    // Validation state classes
    const validationClasses = {
        valid: 'border-green-500 focus:border-green-500 focus:ring focus:ring-green-200',
        invalid: 'border-red-500 focus:border-red-500 focus:ring focus:ring-red-200',
        warning: 'border-yellow-500 focus:border-yellow-500 focus:ring focus:ring-yellow-200',
        undefined: 'border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200'
    };

    // State classes
    const stateClasses = disabled
        ? 'opacity-60 cursor-not-allowed bg-gray-100'
        : readOnly
            ? 'cursor-default'
            : 'cursor-text';

    // Width classes
    const widthClasses = fullWidth ? 'w-full' : '';

    // Adornment classes
    const hasStartAdornment = !!startAdornment;
    const hasEndAdornment = !!endAdornment;
    const adornmentClasses = {
        withStartAdornment: hasStartAdornment ? 'pl-10' : '',
        withEndAdornment: hasEndAdornment ? 'pr-10' : ''
    };

    // Combine all input classes
    const inputClasses = [
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        validationClasses[validationState || 'undefined'],
        stateClasses,
        widthClasses,
        adornmentClasses.withStartAdornment,
        adornmentClasses.withEndAdornment,
        className
    ].join(' ');

    // Label classes
    const labelClasses = [
        'block text-sm font-medium text-gray-700 mb-1',
        disabled ? 'opacity-60' : ''
    ].join(' ');

    // Helper text classes
    const helperTextClasses = [
        'mt-1 text-xs',
        validationState === 'invalid' ? 'text-red-600' : 'text-gray-500'
    ].join(' ');

    return (
        <div className={fullWidth ? 'w-full' : ''}>
            {label && (
                <label htmlFor={inputId} className={labelClasses}>
                    {label}
                </label>
            )}

            <div className="relative">
                {startAdornment && (
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        {startAdornment}
                    </div>
                )}

                <input
                    ref={ref}
                    id={inputId}
                    className={inputClasses}
                    disabled={disabled}
                    readOnly={readOnly}
                    aria-invalid={validationState === 'invalid'}
                    {...props}
                />

                {endAdornment && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        {endAdornment}
                    </div>
                )}
            </div>

            {(helperText || (validationState === 'invalid' && errorText)) && (
                <p className={helperTextClasses}>
                    {validationState === 'invalid' && errorText ? errorText : helperText}
                </p>
            )}
        </div>
    );
});

FormControl.displayName = 'FormControl';

export default FormControl;
