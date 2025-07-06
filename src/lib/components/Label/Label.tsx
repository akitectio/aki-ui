import React from 'react';
import { cn } from '../../utils';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
    required?: boolean;
    disabled?: boolean;
    className?: string;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({ children, required = false, disabled = false, className, ...props }, ref) => {
        return (
            <label
                ref={ref}
                className={cn(
                    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                    disabled && 'cursor-not-allowed opacity-70 text-muted-foreground',
                    className
                )}
                {...props}
            >
                {children}
                {required && (
                    <span className="text-destructive ml-1" aria-label="required">
                        *
                    </span>
                )}
            </label>
        );
    }
);

Label.displayName = 'Label';
