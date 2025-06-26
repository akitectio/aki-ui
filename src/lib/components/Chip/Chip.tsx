import React from 'react';

export interface ChipProps {
    /**
     * Content of the chip
     */
    label: React.ReactNode;

    /**
     * Icon displayed at the start of the chip
     */
    startIcon?: React.ReactNode;

    /**
     * Icon displayed at the end of the chip
     */
    endIcon?: React.ReactNode;

    /**
     * Called when the chip is clicked
     */
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;

    /**
     * Called when the delete icon is clicked
     */
    onDelete?: (event: React.MouseEvent) => void;

    /**
     * Variant of the chip
     * @default 'solid'
     */
    variant?: 'solid' | 'outlined' | 'soft';

    /**
     * Size of the chip
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';

    /**
     * Color of the chip
     * @default 'default'
     */
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

    /**
     * Whether the chip is disabled
     * @default false
     */
    disabled?: boolean;

    /**
     * Whether the chip is clickable
     * @default false
     */
    clickable?: boolean;

    /**
     * Whether the chip is deletable
     * @default false
     */
    deletable?: boolean;

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * Custom icon for the delete button
     */
    deleteIcon?: React.ReactNode;

    /**
     * Tooltip text for delete icon
     */
    deleteTooltip?: string;

    /**
     * Whether the chip has a circular shape
     * @default true
     */
    rounded?: boolean;

    /**
     * Custom avatar component to display at the start
     */
    avatar?: React.ReactNode;
}

const Chip: React.FC<ChipProps> = ({
    label,
    startIcon,
    endIcon,
    onClick,
    onDelete,
    variant = 'solid',
    size = 'md',
    color = 'default',
    disabled = false,
    clickable = false,
    deletable = false,
    className = '',
    deleteIcon,
    deleteTooltip,
    rounded = true,
    avatar,
}) => {
    // Size classes
    const sizeClasses = {
        sm: 'text-xs py-0.5 px-2',
        md: 'text-sm py-1 px-2.5',
        lg: 'text-base py-1.5 px-3',
    };

    // Icon size classes
    const iconSizeClasses = {
        sm: 'w-3 h-3',
        md: 'w-4 h-4',
        lg: 'w-5 h-5',
    };

    // Delete icon size classes
    const deleteIconSizeClasses = {
        sm: 'w-3 h-3',
        md: 'w-4 h-4',
        lg: 'w-5 h-5',
    };

    // Avatar size classes
    const avatarSizeClasses = {
        sm: 'w-4 h-4 -ml-1 mr-1',
        md: 'w-6 h-6 -ml-1.5 mr-1',
        lg: 'w-7 h-7 -ml-2 mr-1.5',
    };

    // Color classes based on variant
    const getColorClasses = () => {
        switch (variant) {
            case 'outlined':
                return {
                    default: 'border border-gray-300 text-gray-700 bg-transparent hover:bg-gray-100',
                    primary: 'border border-blue-500 text-blue-700 bg-transparent hover:bg-blue-50',
                    secondary: 'border border-purple-500 text-purple-700 bg-transparent hover:bg-purple-50',
                    success: 'border border-green-500 text-green-700 bg-transparent hover:bg-green-50',
                    warning: 'border border-yellow-500 text-yellow-700 bg-transparent hover:bg-yellow-50',
                    danger: 'border border-red-500 text-red-700 bg-transparent hover:bg-red-50',
                    info: 'border border-cyan-500 text-cyan-700 bg-transparent hover:bg-cyan-50',
                }[color];
            case 'soft':
                return {
                    default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
                    primary: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
                    secondary: 'bg-purple-100 text-purple-800 hover:bg-purple-200',
                    success: 'bg-green-100 text-green-800 hover:bg-green-200',
                    warning: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
                    danger: 'bg-red-100 text-red-800 hover:bg-red-200',
                    info: 'bg-cyan-100 text-cyan-800 hover:bg-cyan-200',
                }[color];
            default: // solid
                return {
                    default: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
                    primary: 'bg-blue-500 text-white hover:bg-blue-600',
                    secondary: 'bg-purple-500 text-white hover:bg-purple-600',
                    success: 'bg-green-500 text-white hover:bg-green-600',
                    warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
                    danger: 'bg-red-500 text-white hover:bg-red-600',
                    info: 'bg-cyan-500 text-white hover:bg-cyan-600',
                }[color];
        }
    };

    // Handle click event
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!disabled && clickable && onClick) {
            onClick(event);
        }
    };

    // Handle delete event
    const handleDelete = (event: React.MouseEvent) => {
        event.stopPropagation();
        if (!disabled && onDelete) {
            onDelete(event);
        }
    };

    // Default delete icon if not provided
    const defaultDeleteIcon = (
        <svg
            className={deleteIconSizeClasses[size]}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    );

    return (
        <div
            className={`
        inline-flex items-center
        ${sizeClasses[size]}
        ${rounded ? 'rounded-full' : 'rounded'}
        ${getColorClasses()}
        ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
        ${clickable && !disabled ? 'cursor-pointer' : ''}
        ${className}
      `}
            onClick={handleClick}
            role={clickable ? 'button' : undefined}
            tabIndex={clickable && !disabled ? 0 : undefined}
            aria-disabled={disabled}
        >
            {avatar && (
                <div className={avatarSizeClasses[size]}>
                    {avatar}
                </div>
            )}

            {startIcon && !avatar && (
                <span className={`${iconSizeClasses[size]} mr-1 flex-shrink-0`}>
                    {startIcon}
                </span>
            )}

            <span className="truncate">{label}</span>

            {endIcon && !deletable && (
                <span className={`${iconSizeClasses[size]} ml-1 flex-shrink-0`}>
                    {endIcon}
                </span>
            )}

            {deletable && (
                <button
                    onClick={handleDelete}
                    disabled={disabled}
                    className={`
            ml-1 flex-shrink-0
            opacity-75 hover:opacity-100
            focus:outline-none
          `}
                    aria-label={deleteTooltip || "Remove"}
                    title={deleteTooltip}
                    type="button"
                >
                    {deleteIcon || defaultDeleteIcon}
                </button>
            )}
        </div>
    );
};

export default Chip;
