import React from 'react';
import { cn } from '../../utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: 'outline' | 'filled' | 'unstyled';
    size?: 'sm' | 'md' | 'lg';
    resize?: 'none' | 'vertical' | 'horizontal' | 'both';
    error?: boolean;
    className?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({
        variant = 'outline',
        size = 'md',
        resize = 'vertical',
        error = false,
        className,
        disabled,
        ...props
    }, ref) => {
        const baseClasses = 'flex w-full rounded-md border transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

        const sizeClasses = {
            sm: 'min-h-[60px] px-3 py-2 text-sm',
            md: 'min-h-[80px] px-3 py-2 text-sm',
            lg: 'min-h-[100px] px-4 py-3 text-base'
        };

        const variantClasses = {
            outline: error
                ? 'border-destructive bg-background focus-visible:ring-destructive'
                : 'border-input bg-background',
            filled: error
                ? 'border-transparent bg-muted focus-visible:bg-background focus-visible:ring-destructive'
                : 'border-transparent bg-muted focus-visible:bg-background',
            unstyled: 'border-none bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0'
        };

        const resizeClasses = {
            none: 'resize-none',
            vertical: 'resize-y',
            horizontal: 'resize-x',
            both: 'resize'
        };

        return (
            <textarea
                ref={ref}
                className={cn(
                    baseClasses,
                    sizeClasses[size],
                    variantClasses[variant],
                    resizeClasses[resize],
                    className
                )}
                disabled={disabled}
                {...props}
            />
        );
    }
);

Textarea.displayName = 'Textarea';
