import React from 'react';

type BadgeVariant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'error'  // Add error variant
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';

export interface BadgeProps {
    /**
     * The content of the badge
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the badge
     */
    className?: string;

    /**
     * The visual style variant of the badge
     * @default 'primary'
     */
    variant?: BadgeVariant;

    /**
     * Makes the badge have pill shape (fully rounded corners)
     * @default false
     */
    pill?: boolean;

    /**
     * Whether the badge is visible or not
     * @default true
     */
    visible?: boolean;

    /**
     * The HTML element to render the badge as
     * @default 'span'
     */
    as?: React.ElementType;

    /**
     * Whether the badge has a small size
     * @default false
     */
    small?: boolean;

    /**
     * Adds a dot indicator instead of text content
     * @default false
     */
    dot?: boolean;

    /**
     * Position of the badge when used as an indicator
     * @default undefined
     */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | undefined;

    /**
     * Whether the badge is outlined
     * @default false
     */
    outlined?: boolean;
}

const variantStyles: Record<BadgeVariant, { bg: string; text: string; outlined: string }> = {
    primary: {
        bg: 'bg-primary-500',
        text: 'text-white',
        outlined: 'text-primary-500 border-primary-500'
    },
    secondary: {
        bg: 'bg-secondary-500',
        text: 'text-white',
        outlined: 'text-secondary-500 border-secondary-500'
    },
    success: {
        bg: 'bg-success-500',
        text: 'text-white',
        outlined: 'text-success-500 border-success-500'
    },
    danger: {
        bg: 'bg-red-500',
        text: 'text-white',
        outlined: 'text-red-500 border-red-500'
    },
    error: {
        bg: 'bg-error-500',
        text: 'text-white',
        outlined: 'text-error-500 border-error-500'
    },
    warning: {
        bg: 'bg-warning-500',
        text: 'text-white',
        outlined: 'text-warning-500 border-warning-500'
    },
    info: {
        bg: 'bg-blue-500',
        text: 'text-white',
        outlined: 'text-blue-500 border-blue-500'
    },
    light: {
        bg: 'bg-gray-200',
        text: 'text-gray-800',
        outlined: 'text-gray-800 border-gray-300'
    },
    dark: {
        bg: 'bg-gray-800',
        text: 'text-white',
        outlined: 'text-gray-800 border-gray-800'
    }
};

const Badge = ({
    children,
    className = '',
    variant = 'primary',
    pill = false,
    visible = true,
    as: Component = 'span',
    small = false,
    dot = false,
    position,
    outlined = false
}: BadgeProps) => {
    if (!visible) {
        return null;
    }

    const styles = variantStyles[variant] || variantStyles.primary; // Fallback to primary if variant not found
    const baseClasses = 'inline-flex items-center justify-center font-medium';

    const sizeClasses = small ? 'text-xs px-1.5 py-0.5' : 'text-xs px-2.5 py-0.5';
    const shapeClasses = pill ? 'rounded-full' : 'rounded';

    const variantClasses = outlined
        ? `${styles.outlined} bg-transparent border`
        : `${styles.bg} ${styles.text}`;

    // For dot style badges
    if (dot) {
        return (
            <Component
                className={`${baseClasses} w-2 h-2 p-0 ${variantClasses} rounded-full ${className}`}
            >
                <span className="sr-only">{children}</span>
            </Component>
        );
    }

    // For positioned badges (like notifications)
    if (typeof position !== 'undefined') {
        const positionClasses = {
            'top-right': 'absolute -top-1 -right-1',
            'top-left': 'absolute -top-1 -left-1',
            'bottom-right': 'absolute -bottom-1 -right-1',
            'bottom-left': 'absolute -bottom-1 -left-1'
        };

        return (
            <Component
                className={`${baseClasses} ${sizeClasses} ${shapeClasses} ${variantClasses} ${positionClasses[position]} ${className}`}
            >
                {children}
            </Component>
        );
    }

    // Standard badge
    return (
        <Component
            className={`${baseClasses} ${sizeClasses} ${shapeClasses} ${variantClasses} ${className}`}
        >
            {children}
        </Component>
    );
};

export default Badge;
