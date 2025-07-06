import React from 'react';
import { cn } from '../../utils';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    decorative?: boolean;
    className?: string;
}

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
    ({ orientation = 'horizontal', decorative = false, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                role={decorative ? 'none' : 'separator'}
                aria-orientation={orientation}
                className={cn(
                    'shrink-0 bg-border',
                    orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
                    className
                )}
                {...props}
            />
        );
    }
);

Separator.displayName = 'Separator';
