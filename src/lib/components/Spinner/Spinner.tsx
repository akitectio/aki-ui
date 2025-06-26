import React from 'react';

export interface SpinnerProps {
    /**
     * The size of the spinner
     * @default 'md'
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

    /**
     * The color of the spinner
     * @default 'primary'
     */
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * The thickness of the spinner
     * @default 'normal'
     */
    thickness?: 'thin' | 'normal' | 'thick';

    /**
     * The speed of the spinner animation
     * @default 'normal'
     */
    speed?: 'slow' | 'normal' | 'fast';

    /**
     * Label for accessibility
     * @default 'Loading...'
     */
    label?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
    size = 'md',
    color = 'primary',
    className = '',
    thickness = 'normal',
    speed = 'normal',
    label = 'Loading...'
}) => {
    // Size classes
    const sizeClasses = {
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
        xl: 'h-12 w-12'
    };

    // Color classes
    const colorClasses = {
        primary: 'text-blue-600',
        secondary: 'text-purple-600',
        success: 'text-green-500',
        danger: 'text-red-500',
        warning: 'text-yellow-500',
        info: 'text-cyan-500',
        light: 'text-gray-300',
        dark: 'text-gray-800'
    };

    // Thickness classes
    // const thicknessClasses = {
    //     thin: 'border',
    //     normal: 'border-2',
    //     thick: 'border-4'
    // };

    // Speed classes
    const speedClasses = {
        slow: 'animate-spin-slow',
        normal: 'animate-spin',
        fast: 'animate-spin-fast'
    };

    return (
        <div
            role="status"
            className={`inline-block ${className}`}
            aria-label={label}
        >
            <svg
                className={`
          ${sizeClasses[size]}
          ${colorClasses[color]}
          ${speedClasses[speed]}
          rounded-full
        `}
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={thickness === 'thin' ? 2 : thickness === 'normal' ? 3 : 4}
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
            </svg>
            <span className="sr-only">{label}</span>
        </div>
    );
};

Spinner.displayName = 'Spinner';

export default Spinner;
