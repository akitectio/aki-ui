import React from 'react';

type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-info'
    | 'outline-light'
    | 'outline-dark';

type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The visual style variant of the button
     * @default 'primary'
     */
    variant?: ButtonVariant;

    /**
     * The size of the button
     * @default 'md'
     */
    size?: ButtonSize;

    /**
     * Makes the button take the full width of its container
     * @default false
     */
    fullWidth?: boolean;

    /**
     * Displays a loading spinner and disables the button
     * @default false
     */
    isLoading?: boolean;

    /**
     * Text to display when button is in loading state
     */
    loadingText?: string;

    /**
     * The element to be used as the button
     * @default 'button'
     */
    as?: React.ElementType;

    /**
     * Additional CSS classes to apply to the button
     */
    className?: string;

    /**
     * Makes the button corners rounded
     * @default false
     */
    rounded?: boolean;

    /**
     * Makes the button have a pill shape (fully rounded corners)
     * @default false
     */
    pill?: boolean;

    /**
     * Icon to display before the button text
     */
    startIcon?: React.ReactNode;

    /**
     * Icon to display after the button text
     */
    endIcon?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    isLoading = false,
    loadingText,
    as: Component = 'button',
    className = '',
    rounded = false,
    pill = false,
    startIcon,
    endIcon,
    disabled,
    children,
    ...props
}) => {
    // Base classes
    const baseClasses = 'inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';

    // Size classes
    const sizeClasses = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base'
    };

    // Variant classes (colors)
    const variantClasses: Record<ButtonVariant, string> = {
        'primary': 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
        'secondary': 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
        'success': 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
        'danger': 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
        'warning': 'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500',
        'info': 'bg-cyan-600 hover:bg-cyan-700 text-white focus:ring-cyan-500',
        'light': 'bg-gray-100 hover:bg-gray-200 text-gray-800 focus:ring-gray-300',
        'dark': 'bg-gray-800 hover:bg-gray-900 text-white focus:ring-gray-700',
        'link': 'bg-transparent text-blue-600 hover:text-blue-800 hover:underline focus:ring-blue-500',
        'outline-primary': 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
        'outline-secondary': 'bg-transparent border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500',
        'outline-success': 'bg-transparent border border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-green-500',
        'outline-danger': 'bg-transparent border border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-500',
        'outline-warning': 'bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-yellow-500',
        'outline-info': 'bg-transparent border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white focus:ring-cyan-500',
        'outline-light': 'bg-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-800 focus:ring-gray-300',
        'outline-dark': 'bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white focus:ring-gray-700'
    };

    // Shape classes
    const shapeClasses = pill ? 'rounded-full' : rounded ? 'rounded-md' : 'rounded-sm';

    // Width classes
    const widthClasses = fullWidth ? 'w-full' : '';

    // Disabled and loading classes
    const stateClasses = (disabled || isLoading)
        ? 'opacity-60 cursor-not-allowed'
        : 'cursor-pointer';

    // Combine all classes
    const buttonClasses = [
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        shapeClasses,
        widthClasses,
        stateClasses,
        className
    ].join(' ');

    return (
        <Component
            className={buttonClasses}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && (
                <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            )}

            {startIcon && !isLoading && (
                <span className="mr-2">{startIcon}</span>
            )}

            {isLoading && loadingText ? loadingText : children}

            {endIcon && !isLoading && (
                <span className="ml-2">{endIcon}</span>
            )}
        </Component>
    );
};

export default Button;
