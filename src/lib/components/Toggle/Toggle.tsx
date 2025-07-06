import React from 'react';
import { cn } from '../../utils';

export interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    pressed?: boolean;
    onPressedChange?: (pressed: boolean) => void;
    variant?: 'default' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
    ({
        pressed = false,
        onPressedChange,
        variant = 'default',
        size = 'md',
        className,
        onClick,
        children,
        disabled,
        ...props
    }, ref) => {
        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            if (!disabled) {
                onPressedChange?.(!pressed);
                onClick?.(event);
            }
        };

        const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

        const sizeClasses = {
            sm: 'h-8 px-2',
            md: 'h-9 px-3',
            lg: 'h-10 px-4'
        };

        const variantClasses = {
            default: pressed
                ? 'bg-accent text-accent-foreground'
                : 'bg-transparent',
            outline: pressed
                ? 'bg-accent text-accent-foreground border border-input'
                : 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground'
        };

        return (
            <button
                ref={ref}
                type="button"
                role="button"
                aria-pressed={pressed}
                className={cn(
                    baseClasses,
                    sizeClasses[size],
                    variantClasses[variant],
                    className
                )}
                onClick={handleClick}
                disabled={disabled}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Toggle.displayName = 'Toggle';
