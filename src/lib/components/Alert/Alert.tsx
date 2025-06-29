import React, { useState } from 'react';

// You can add imports using aliases
// For example, if you had theme utilities:
// import { useTheme } from '@theme/ThemeContext';

type AlertVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export interface AlertProps {
    /**
     * The content of the alert
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the alert
     */
    className?: string;

    /**
     * The visual style variant of the alert
     * @default 'primary'
     */
    variant?: AlertVariant;

    /**
     * Whether the alert is dismissible
     * @default false
     */
    dismissible?: boolean;

    /**
     * Callback when the alert is dismissed
     */
    onDismiss?: () => void;

    /**
     * Show an icon based on the variant
     * @default false
     */
    showIcon?: boolean;

    /**
     * Custom icon to show in the alert
     */
    icon?: React.ReactNode;

    /**
     * Whether the alert has a border on the left side
     * @default false
     */
    hasBorderLeft?: boolean;
}

const variantStyles: Record<AlertVariant, { bg: string; text: string; border: string; icon: React.ReactElement }> = {
    primary: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-800 dark:text-blue-200',
        border: 'border-blue-500',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
            </svg>
        )
    },
    secondary: {
        bg: 'bg-gray-100 dark:bg-gray-800/60',
        text: 'text-gray-800 dark:text-gray-200',
        border: 'border-gray-500',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
            </svg>
        )
    },
    success: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-800 dark:text-green-200',
        border: 'border-green-500',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
        )
    },
    danger: {
        bg: 'bg-red-100 dark:bg-red-900/30',
        text: 'text-red-800 dark:text-red-200',
        border: 'border-red-500',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
            </svg>
        )
    },
    warning: {
        bg: 'bg-yellow-100 dark:bg-yellow-900/30',
        text: 'text-yellow-800 dark:text-yellow-200',
        border: 'border-yellow-500',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
            </svg>
        )
    },
    info: {
        bg: 'bg-cyan-100 dark:bg-cyan-900/30',
        text: 'text-cyan-800 dark:text-cyan-200',
        border: 'border-cyan-500',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
            </svg>
        )
    },
    light: {
        bg: 'bg-gray-50 dark:bg-gray-700/30',
        text: 'text-gray-800 dark:text-gray-100',
        border: 'border-gray-300',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
            </svg>
        )
    },
    dark: {
        bg: 'bg-gray-800 dark:bg-gray-900',
        text: 'text-gray-100 dark:text-gray-200',
        border: 'border-gray-700',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
            </svg>
        )
    }
};

const Alert: React.FC<AlertProps> = ({
    children,
    className = '',
    variant = 'primary',
    dismissible = false,
    onDismiss,
    showIcon = false,
    icon,
    hasBorderLeft = false
}) => {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) {
        return null;
    }

    const styles = variantStyles[variant] || variantStyles.primary; // Fallback to primary if variant not found

    const handleDismiss = () => {
        setDismissed(true);
        if (onDismiss) {
            onDismiss();
        }
    };

    return (
        <div
            className={`${styles.bg} ${styles.text} p-4 mb-4 rounded-lg ${hasBorderLeft ? `border-l-4 ${styles.border}` : ''} flex items-start ${className}`}
            role="alert"
        >
            {(showIcon || icon) && (
                <div className="flex-shrink-0 mr-3">
                    {icon || styles.icon}
                </div>
            )}
            <div className="flex-1">
                {children}
            </div>
            {dismissible && (
                <button
                    type="button"
                    className={`ml-auto -mx-1.5 -my-1.5 ${styles.bg} ${styles.text} rounded-lg p-1.5 inline-flex h-8 w-8 focus:ring-2 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700`}
                    aria-label="Close"
                    onClick={handleDismiss}
                >
                    <span className="sr-only">Close</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </button>
            )}
        </div>
    );
};

export default Alert;
