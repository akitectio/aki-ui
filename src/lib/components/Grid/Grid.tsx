import React, { forwardRef } from 'react';
import { type Breakpoint } from '../Breakpoints';

export interface GridProps {
    /**
     * Children elements
     */
    children: React.ReactNode;

    /**
     * Number of columns for different breakpoints
     */
    cols?: number | Partial<Record<Breakpoint | 'base', number>>;

    /**
     * Gap between grid items
     */
    gap?: number | string | Partial<Record<Breakpoint | 'base', number | string>>;

    /**
     * Number of rows (auto by default)
     */
    rows?: number | Partial<Record<Breakpoint | 'base', number>>;

    /**
     * Grid auto flow
     */
    flow?: 'row' | 'col' | 'row-dense' | 'col-dense';

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * HTML element to render
     */
    as?: React.ElementType;
}

export interface GridItemProps {
    /**
     * Children elements
     */
    children: React.ReactNode;

    /**
     * Column span
     */
    colSpan?: number | Partial<Record<Breakpoint | 'base', number>>;

    /**
     * Row span
     */
    rowSpan?: number | Partial<Record<Breakpoint | 'base', number>>;

    /**
     * Column start position
     */
    colStart?: number | Partial<Record<Breakpoint | 'base', number>>;

    /**
     * Column end position
     */
    colEnd?: number | Partial<Record<Breakpoint | 'base', number>>;

    /**
     * Row start position
     */
    rowStart?: number | Partial<Record<Breakpoint | 'base', number>>;

    /**
     * Row end position
     */
    rowEnd?: number | Partial<Record<Breakpoint | 'base', number>>;

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * HTML element to render
     */
    as?: React.ElementType;
}

/**
 * Helper function to convert responsive values to CSS classes
 * Fixed version that properly generates Tailwind CSS classes
 */
const getResponsiveGridClasses = (
    prefix: string,
    value: number | string | Partial<Record<Breakpoint | 'base', number | string>> | undefined
): string => {
    if (!value) return '';

    if (typeof value === 'number' || typeof value === 'string') {
        return `${prefix}-${value}`;
    }

    const classes: string[] = [];

    // Add base class (no prefix)
    if (value.base !== undefined) {
        classes.push(`${prefix}-${value.base}`);
    }

    // Add responsive classes with breakpoint prefixes
    Object.entries(value).forEach(([breakpoint, val]) => {
        if (breakpoint !== 'base' && val !== undefined) {
            classes.push(`${breakpoint}:${prefix}-${val}`);
        }
    });

    return classes.join(' ');
};

/**
 * Grid - A responsive grid layout component
 */
const Grid = forwardRef<HTMLElement, GridProps>(({
    children,
    cols = 12,
    gap = 4,
    rows,
    flow = 'row',
    className = '',
    as: Component = 'div',
    ...rest
}, ref) => {
    // Generate grid classes
    const colsClasses = getResponsiveGridClasses('grid-cols', cols);
    const gapClasses = getResponsiveGridClasses('gap', gap);
    const rowsClasses = getResponsiveGridClasses('grid-rows', rows);

    const flowClass = flow ? `grid-flow-${flow}` : '';

    const gridClasses = [
        'grid',
        colsClasses,
        gapClasses,
        rowsClasses,
        flowClass,
        className
    ].filter(Boolean).join(' ');

    return (
        <Component
            ref={ref as any}
            className={gridClasses}
            {...rest}
        >
            {children}
        </Component>
    );
});

Grid.displayName = 'Grid';

/**
 * GridItem - A grid item component with responsive positioning
 */
export const GridItem = forwardRef<HTMLElement, GridItemProps>(({
    children,
    colSpan,
    rowSpan,
    colStart,
    colEnd,
    rowStart,
    rowEnd,
    className = '',
    as: Component = 'div',
    ...rest
}, ref) => {
    const colSpanClasses = getResponsiveGridClasses('col-span', colSpan);
    const rowSpanClasses = getResponsiveGridClasses('row-span', rowSpan);
    const colStartClasses = getResponsiveGridClasses('col-start', colStart);
    const colEndClasses = getResponsiveGridClasses('col-end', colEnd);
    const rowStartClasses = getResponsiveGridClasses('row-start', rowStart);
    const rowEndClasses = getResponsiveGridClasses('row-end', rowEnd);

    const itemClasses = [
        colSpanClasses,
        rowSpanClasses,
        colStartClasses,
        colEndClasses,
        rowStartClasses,
        rowEndClasses,
        className
    ].filter(Boolean).join(' ');

    return (
        <Component
            ref={ref as any}
            className={itemClasses}
            {...rest}
        >
            {children}
        </Component>
    );
});

GridItem.displayName = 'GridItem';

/**
 * SimpleGrid - A simplified grid with equal-width columns
 */
export interface SimpleGridProps {
    /**
     * Children elements
     */
    children: React.ReactNode;

    /**
     * Number of columns for different breakpoints
     */
    columns?: number | Partial<Record<Breakpoint | 'base', number>>;

    /**
     * Gap between grid items
     */
    spacing?: number | string;

    /**
     * Minimum width for grid items
     */
    minChildWidth?: string;

    /**
     * Additional CSS classes
     */
    className?: string;
}

export const SimpleGrid = forwardRef<HTMLDivElement, SimpleGridProps>(({
    children,
    columns = 1,
    spacing = 4,
    minChildWidth,
    className = '',
    ...rest
}, ref) => {
    const gapClass = `gap-${spacing}`;

    let gridClasses = 'grid ';

    if (minChildWidth) {
        // Use auto-fit with minmax for responsive columns
        gridClasses += `grid-cols-[repeat(auto-fit,minmax(${minChildWidth},1fr))]`;
    } else {
        // Use responsive columns
        gridClasses += getResponsiveGridClasses('grid-cols', columns);
    }

    const finalClasses = [
        gridClasses,
        gapClass,
        className
    ].filter(Boolean).join(' ');

    return (
        <div ref={ref} className={finalClasses} {...rest}>
            {children}
        </div>
    );
});

SimpleGrid.displayName = 'SimpleGrid';

export default Grid;
