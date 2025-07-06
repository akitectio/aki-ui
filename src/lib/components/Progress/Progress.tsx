import React from 'react';
import { cn } from '../../utils';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: number;
    max?: number;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'success' | 'warning' | 'danger';
    showValue?: boolean;
    className?: string;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
    ({
        value = 0,
        max = 100,
        size = 'md',
        variant = 'default',
        showValue = false,
        className,
        ...props
    }, ref) => {
        const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

        const sizeClasses = {
            sm: 'h-2',
            md: 'h-3',
            lg: 'h-4'
        };

        const variantClasses = {
            default: 'bg-primary',
            success: 'bg-green-600',
            warning: 'bg-yellow-500',
            danger: 'bg-red-600'
        };

        return (
            <div className={cn('space-y-2', className)} {...props}>
                {showValue && (
                    <div className="flex justify-between text-sm">
                        <span>{value}</span>
                        <span>{max}</span>
                    </div>
                )}
                <div
                    ref={ref}
                    className={cn(
                        'relative w-full overflow-hidden rounded-full bg-secondary',
                        sizeClasses[size]
                    )}
                >
                    <div
                        className={cn(
                            'h-full transition-all duration-300 ease-in-out',
                            variantClasses[variant]
                        )}
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>
        );
    }
);

Progress.displayName = 'Progress';
