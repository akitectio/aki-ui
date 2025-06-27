import React, { forwardRef } from 'react';

export interface FormLayoutProps {
    /**
     * Children elements (form controls, inputs, etc.)
     */
    children: React.ReactNode;

    /**
     * Layout direction
     * @default 'vertical'
     */
    direction?: 'vertical' | 'horizontal';

    /**
     * Spacing between form elements
     * @default 'md'
     */
    spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

    /**
     * Maximum width of the form
     */
    maxWidth?: string | number;

    /**
     * Whether the form should be centered
     * @default false
     */
    centered?: boolean;

    /**
     * Additional CSS classes
     */
    className?: string;
}

export interface FormRowProps {
    /**
     * Children elements
     */
    children: React.ReactNode;

    /**
     * Number of columns in the row
     * @default 'auto'
     */
    columns?: 1 | 2 | 3 | 4 | 'auto';

    /**
     * Gap between columns
     * @default 'md'
     */
    gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

    /**
     * Additional CSS classes
     */
    className?: string;
}

export interface FormColumnProps {
    /**
     * Children elements
     */
    children: React.ReactNode;

    /**
     * Column span (1-12)
     */
    span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

    /**
     * Additional CSS classes
     */
    className?: string;
}

export interface FormSectionProps {
    /**
     * Section title
     */
    title?: string;

    /**
     * Section description
     */
    description?: string;

    /**
     * Children elements
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * FormLayout - Main container for organizing form elements
 */
const FormLayout = forwardRef<HTMLDivElement, FormLayoutProps>(({
    children,
    direction = 'vertical',
    spacing = 'md',
    maxWidth,
    centered = false,
    className = '',
    ...rest
}, ref) => {
    // Spacing classes
    const spacingClasses = {
        xs: 'space-y-2',
        sm: 'space-y-3',
        md: 'space-y-4',
        lg: 'space-y-6',
        xl: 'space-y-8',
    };

    const horizontalSpacingClasses = {
        xs: 'space-x-2',
        sm: 'space-x-3',
        md: 'space-x-4',
        lg: 'space-x-6',
        xl: 'space-x-8',
    };

    // Base classes
    const baseClasses = direction === 'vertical'
        ? ['flex flex-col', spacingClasses[spacing]]
        : ['flex flex-row items-end', horizontalSpacingClasses[spacing]];

    // Container classes
    const containerClasses = [
        ...baseClasses,
        centered ? 'mx-auto' : '',
        className
    ].filter(Boolean).join(' ');

    // Style object for max width
    const style = maxWidth ? { maxWidth } : undefined;

    return (
        <div
            ref={ref}
            className={containerClasses}
            style={style}
            {...rest}
        >
            {children}
        </div>
    );
});

FormLayout.displayName = 'FormLayout';

/**
 * FormRow - Container for organizing form elements horizontally
 */
export const FormRow = forwardRef<HTMLDivElement, FormRowProps>(({
    children,
    columns = 'auto',
    gap = 'md',
    className = '',
    ...rest
}, ref) => {
    // Gap classes
    const gapClasses = {
        xs: 'gap-2',
        sm: 'gap-3',
        md: 'gap-4',
        lg: 'gap-6',
        xl: 'gap-8',
    };

    // Grid classes based on columns
    const getGridClasses = () => {
        if (columns === 'auto') {
            return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-auto';
        }
        return `grid grid-cols-${columns}`;
    };

    const rowClasses = [
        getGridClasses(),
        gapClasses[gap],
        className
    ].filter(Boolean).join(' ');

    return (
        <div ref={ref} className={rowClasses} {...rest}>
            {children}
        </div>
    );
});

FormRow.displayName = 'FormRow';

/**
 * FormColumn - Container for form elements within a row
 */
export const FormColumn = forwardRef<HTMLDivElement, FormColumnProps>(({
    children,
    span,
    className = '',
    ...rest
}, ref) => {
    const spanClass = span ? `col-span-${span}` : '';

    const columnClasses = [
        spanClass,
        className
    ].filter(Boolean).join(' ');

    return (
        <div ref={ref} className={columnClasses} {...rest}>
            {children}
        </div>
    );
});

FormColumn.displayName = 'FormColumn';

/**
 * FormSection - Container for grouping related form elements
 */
export const FormSection = forwardRef<HTMLDivElement, FormSectionProps>(({
    title,
    description,
    children,
    className = '',
    ...rest
}, ref) => {
    const sectionClasses = [
        'space-y-4',
        className
    ].filter(Boolean).join(' ');

    return (
        <div ref={ref} className={sectionClasses} {...rest}>
            {(title || description) && (
                <div className="space-y-1">
                    {title && (
                        <h3 className="text-lg font-medium text-gray-900">
                            {title}
                        </h3>
                    )}
                    {description && (
                        <p className="text-sm text-gray-600">
                            {description}
                        </p>
                    )}
                </div>
            )}
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
});

FormSection.displayName = 'FormSection';

export default FormLayout;
