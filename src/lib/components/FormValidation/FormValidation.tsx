import React, { forwardRef } from 'react';

export interface ValidationMessageProps {
    /**
     * Validation message text
     */
    message: string;

    /**
     * Type of validation message
     * @default 'error'
     */
    type?: 'error' | 'warning' | 'success' | 'info';

    /**
     * Whether to show an icon
     * @default true
     */
    showIcon?: boolean;

    /**
     * Additional CSS classes
     */
    className?: string;
}

export interface FieldValidatorProps {
    /**
     * Children elements (typically form controls)
     */
    children: React.ReactNode;

    /**
     * Validation rules
     */
    rules?: ValidationRule[];

    /**
     * Current value to validate
     */
    value?: any;

    /**
     * Whether to validate on change
     * @default true
     */
    validateOnChange?: boolean;

    /**
     * Whether to validate on blur
     * @default true
     */
    validateOnBlur?: boolean;

    /**
     * Callback when validation state changes
     */
    onValidationChange?: (isValid: boolean, errors: string[]) => void;

    /**
     * Additional CSS classes
     */
    className?: string;
}

export interface ValidationRule {
    /**
     * Validation function that returns true if valid, or an error message if invalid
     */
    validator: (value: any) => boolean | string;

    /**
     * Error message to show when validation fails
     */
    message?: string;

    /**
     * When to trigger this validation
     * @default 'always'
     */
    trigger?: 'always' | 'submit' | 'blur' | 'change';
}

// Common validation functions
export const ValidationRules = {
    required: (message = 'This field is required'): ValidationRule => ({
        validator: (value) => {
            if (value === null || value === undefined || value === '') {
                return message;
            }
            if (typeof value === 'string' && value.trim() === '') {
                return message;
            }
            return true;
        },
        message,
    }),

    email: (message = 'Please enter a valid email address'): ValidationRule => ({
        validator: (value) => {
            if (!value) return true; // Allow empty unless required
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value) || message;
        },
        message,
    }),

    minLength: (min: number, message?: string): ValidationRule => ({
        validator: (value) => {
            if (!value) return true; // Allow empty unless required
            const msg = message || `Must be at least ${min} characters`;
            return value.length >= min || msg;
        },
        message: message || `Must be at least ${min} characters`,
    }),

    maxLength: (max: number, message?: string): ValidationRule => ({
        validator: (value) => {
            if (!value) return true; // Allow empty unless required
            const msg = message || `Must be no more than ${max} characters`;
            return value.length <= max || msg;
        },
        message: message || `Must be no more than ${max} characters`,
    }),

    pattern: (regex: RegExp, message = 'Invalid format'): ValidationRule => ({
        validator: (value) => {
            if (!value) return true; // Allow empty unless required
            return regex.test(value) || message;
        },
        message,
    }),

    number: (message = 'Must be a valid number'): ValidationRule => ({
        validator: (value) => {
            if (!value) return true; // Allow empty unless required
            return !isNaN(Number(value)) || message;
        },
        message,
    }),

    min: (min: number, message?: string): ValidationRule => ({
        validator: (value) => {
            if (!value) return true; // Allow empty unless required
            const num = Number(value);
            const msg = message || `Must be at least ${min}`;
            return num >= min || msg;
        },
        message: message || `Must be at least ${min}`,
    }),

    max: (max: number, message?: string): ValidationRule => ({
        validator: (value) => {
            if (!value) return true; // Allow empty unless required
            const num = Number(value);
            const msg = message || `Must be no more than ${max}`;
            return num <= max || msg;
        },
        message: message || `Must be no more than ${max}`,
    }),

    custom: (validator: (value: any) => boolean | string, message = 'Invalid value'): ValidationRule => ({
        validator,
        message,
    }),
};

/**
 * ValidationMessage - Component for displaying validation messages
 */
const ValidationMessage = forwardRef<HTMLParagraphElement, ValidationMessageProps>(({
    message,
    type = 'error',
    showIcon = true,
    className = '',
    ...rest
}, ref) => {
    // Type-specific classes
    const typeClasses = {
        error: 'text-red-600',
        warning: 'text-yellow-600',
        success: 'text-green-600',
        info: 'text-blue-600',
    };

    // Icons for each type
    const icons = {
        error: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        warning: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
        ),
        success: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        info: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    };

    const messageClasses = [
        'flex items-start gap-2 text-xs mt-1',
        typeClasses[type],
        className
    ].filter(Boolean).join(' ');

    return (
        <p ref={ref} className={messageClasses} {...rest}>
            {showIcon && (
                <span className="flex-shrink-0 mt-0.5">
                    {icons[type]}
                </span>
            )}
            <span>{message}</span>
        </p>
    );
});

ValidationMessage.displayName = 'ValidationMessage';

/**
 * FieldValidator - Component for validating form fields
 */
export const FieldValidator = forwardRef<HTMLDivElement, FieldValidatorProps>(({
    children,
    rules = [],
    value,
    validateOnChange = true,
    validateOnBlur = true,
    onValidationChange,
    className = '',
    ...rest
}, ref) => {
    const [errors, setErrors] = React.useState<string[]>([]);
    const [touched, setTouched] = React.useState(false);

    // Validate the current value
    const validateValue = React.useCallback((val: any) => {
        const validationErrors: string[] = [];

        rules.forEach(rule => {
            const result = rule.validator(val);
            if (result !== true) {
                validationErrors.push(typeof result === 'string' ? result : rule.message || 'Invalid');
            }
        });

        setErrors(validationErrors);
        onValidationChange?.(validationErrors.length === 0, validationErrors);
        return validationErrors;
    }, [rules, onValidationChange]);

    // Validate when value changes
    React.useEffect(() => {
        if (validateOnChange && touched) {
            validateValue(value);
        }
    }, [value, validateOnChange, touched, validateValue]);

    // Clone children and add validation props
    const enhancedChildren = React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        const currentProps = child.props || {};
        const childProps = { ...currentProps } as Record<string, any>;

        // Add onBlur handler for validation
        if (validateOnBlur) {
            const originalOnBlur = childProps.onBlur;
            childProps.onBlur = (e: any) => {
                setTouched(true);
                validateValue(e.target.value);
                originalOnBlur?.(e);
            };
        }

        // Add onChange handler for validation
        if (validateOnChange) {
            const originalOnChange = childProps.onChange;
            childProps.onChange = (e: any) => {
                if (touched) {
                    validateValue(e.target.value);
                }
                originalOnChange?.(e);
            };
        }

        // Add validation state props
        if (errors.length > 0 && touched) {
            childProps.isInvalid = true;
            childProps.errorMessage = errors[0]; // Show first error
        }

        return React.cloneElement(child, childProps);
    });

    return (
        <div ref={ref} className={className} {...rest}>
            {enhancedChildren}
            {errors.length > 0 && touched && (
                <div className="space-y-1">
                    {errors.map((error, index) => (
                        <ValidationMessage
                            key={index}
                            message={error}
                            type="error"
                        />
                    ))}
                </div>
            )}
        </div>
    );
});

FieldValidator.displayName = 'FieldValidator';

export default ValidationMessage;
