import React, { forwardRef } from 'react';
import { getResponsiveClasses, type Breakpoint } from '../Breakpoints';

export interface StackProps {
    /**
     * Children elements
     */
    children: React.ReactNode;

    /**
     * Direction of the stack
     * @default 'vertical'
     */
    direction?: 'vertical' | 'horizontal' | Partial<Record<Breakpoint | 'base', 'vertical' | 'horizontal'>>;

    /**
     * Spacing between stack items
     * @default 4
     */
    spacing?: number | string | Partial<Record<Breakpoint | 'base', number | string>>;

    /**
     * Alignment of items along the cross axis
     */
    align?: 'start' | 'center' | 'end' | 'stretch' | Partial<Record<Breakpoint | 'base', 'start' | 'center' | 'end' | 'stretch'>>;

    /**
     * Justification of items along the main axis
     */
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' | Partial<Record<Breakpoint | 'base', 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'>>;

    /**
     * Whether items should wrap
     */
    wrap?: boolean | Partial<Record<Breakpoint | 'base', boolean>>;

    /**
     * Whether to reverse the order of items
     */
    reverse?: boolean;

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * HTML element to render
     */
    as?: React.ElementType;

    /**
     * Whether the stack should fill available space
     */
    fill?: boolean;
}

export interface HStackProps extends Omit<StackProps, 'direction'> {
    /**
     * Force horizontal direction (cannot be overridden)
     */
    direction?: never;
}

export interface VStackProps extends Omit<StackProps, 'direction'> {
    /**
     * Force vertical direction (cannot be overridden)
     */
    direction?: never;
}

/**
 * Helper function to convert responsive values to CSS classes
 */
const getResponsiveStackClasses = (
    prefix: string,
    value: string | boolean | Partial<Record<Breakpoint | 'base', string | boolean>> | undefined,
    transform?: (val: string | boolean) => string
): string => {
    if (value === undefined) return '';

    if (typeof value === 'string' || typeof value === 'boolean') {
        const finalValue = transform ? transform(value) : String(value);
        return `${prefix}-${finalValue}`;
    }

    const responsiveValues: Partial<Record<Breakpoint | 'base', string>> = {};
    Object.entries(value).forEach(([breakpoint, val]) => {
        if (val !== undefined) {
            const finalValue = transform ? transform(val) : String(val);
            responsiveValues[breakpoint as Breakpoint | 'base'] = `${prefix}-${finalValue}`;
        }
    });

    return getResponsiveClasses(responsiveValues);
};

/**
 * Stack - A layout component for organizing items in a single dimension
 */
const Stack = forwardRef<HTMLElement, StackProps>(({
    children,
    direction = 'vertical',
    spacing = 4,
    align,
    justify,
    wrap,
    reverse = false,
    className = '',
    as: Component = 'div',
    fill = false,
    ...rest
}, ref) => {
    // Base flex classes
    let baseClasses = 'flex';

    // Direction classes
    const getDirectionClasses = () => {
        if (typeof direction === 'string') {
            const isVertical = direction === 'vertical';
            let classes = isVertical ? 'flex-col' : 'flex-row';
            if (reverse) {
                classes += isVertical ? '-reverse' : '-reverse';
            }
            return classes;
        }

        // Responsive direction
        const responsiveValues: Partial<Record<Breakpoint | 'base', string>> = {};
        Object.entries(direction).forEach(([breakpoint, dir]) => {
            if (dir) {
                const isVertical = dir === 'vertical';
                let dirClass = isVertical ? 'flex-col' : 'flex-row';
                if (reverse) {
                    dirClass += isVertical ? '-reverse' : '-reverse';
                }
                responsiveValues[breakpoint as Breakpoint | 'base'] = dirClass;
            }
        });

        return getResponsiveClasses(responsiveValues);
    };

    // Spacing classes
    const getSpacingClasses = () => {
        if (typeof spacing === 'number' || typeof spacing === 'string') {
            // Default vertical direction uses space-y, horizontal uses space-x
            const isVertical = typeof direction === 'string' ?
                direction === 'vertical' :
                (direction.base === 'vertical' || !direction.base);

            return isVertical ? `space-y-${spacing}` : `space-x-${spacing}`;
        }

        // For responsive spacing, we'll use gap instead
        const responsiveValues: Partial<Record<Breakpoint | 'base', string>> = {};
        Object.entries(spacing).forEach(([breakpoint, val]) => {
            if (val !== undefined) {
                responsiveValues[breakpoint as Breakpoint | 'base'] = `gap-${val}`;
            }
        });

        return getResponsiveClasses(responsiveValues);
    };

    // Alignment classes
    const alignClasses = getResponsiveStackClasses('items', align);

    // Justify classes  
    const justifyClasses = getResponsiveStackClasses('justify', justify);

    // Wrap classes
    const wrapClasses = getResponsiveStackClasses('flex', wrap, (val) => val ? 'wrap' : 'nowrap');

    // Fill classes
    const fillClasses = fill ? 'w-full h-full' : '';

    const stackClasses = [
        baseClasses,
        getDirectionClasses(),
        getSpacingClasses(),
        alignClasses,
        justifyClasses,
        wrapClasses,
        fillClasses,
        className
    ].filter(Boolean).join(' ');

    return (
        <Component
            ref={ref as any}
            className={stackClasses}
            {...rest}
        >
            {children}
        </Component>
    );
});

Stack.displayName = 'Stack';

/**
 * HStack - Horizontal stack component
 */
export const HStack = forwardRef<HTMLElement, HStackProps>(({
    spacing = 4,
    align = 'center',
    ...rest
}, ref) => {
    return (
        <Stack
            ref={ref}
            direction="horizontal"
            spacing={spacing}
            align={align}
            {...rest}
        />
    );
});

HStack.displayName = 'HStack';

/**
 * VStack - Vertical stack component
 */
export const VStack = forwardRef<HTMLElement, VStackProps>(({
    spacing = 4,
    align = 'stretch',
    ...rest
}, ref) => {
    return (
        <Stack
            ref={ref}
            direction="vertical"
            spacing={spacing}
            align={align}
            {...rest}
        />
    );
});

VStack.displayName = 'VStack';

/**
 * Spacer - A flexible space component for stacks
 */
export const Spacer: React.FC<{ className?: string }> = ({ className = '' }) => {
    return <div className={`flex-1 ${className}`} />;
};

Spacer.displayName = 'Spacer';

export default Stack;
