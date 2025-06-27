import React, { forwardRef, cloneElement, Children, isValidElement } from 'react';

export interface InputGroupProps {
    /**
     * The size of the input group
     * @default 'md'
     */
    size?: 'xs' | 'sm' | 'md' | 'lg';

    /**
     * Children elements (Input, InputLeftAddon, InputRightAddon, InputLeftElement, InputRightElement)
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes for the input group wrapper
     */
    className?: string;

    /**
     * If true, the input group will expand to fill its container
     * @default false
     */
    fullWidth?: boolean;
}

export interface InputAddonProps {
    /**
     * Content of the addon
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes
     */
    className?: string;
}

export interface InputElementProps {
    /**
     * Content of the element (usually an icon)
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * If true, the element will have pointer events
     * @default false
     */
    pointerEvents?: boolean;
}

/**
 * InputLeftAddon - An addon that appears on the left side of the input
 */
export const InputLeftAddon = forwardRef<HTMLDivElement, InputAddonProps>(({
    children,
    className = '',
    ...rest
}, ref) => {
    const addonClasses = [
        'inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md',
        className
    ].filter(Boolean).join(' ');

    return (
        <div ref={ref} className={addonClasses} {...rest}>
            {children}
        </div>
    );
});

InputLeftAddon.displayName = 'InputLeftAddon';

/**
 * InputRightAddon - An addon that appears on the right side of the input
 */
export const InputRightAddon = forwardRef<HTMLDivElement, InputAddonProps>(({
    children,
    className = '',
    ...rest
}, ref) => {
    const addonClasses = [
        'inline-flex items-center px-3 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-r-md',
        className
    ].filter(Boolean).join(' ');

    return (
        <div ref={ref} className={addonClasses} {...rest}>
            {children}
        </div>
    );
});

InputRightAddon.displayName = 'InputRightAddon';

/**
 * InputLeftElement - An element that appears inside the left side of the input
 */
export const InputLeftElement = forwardRef<HTMLDivElement, InputElementProps>(({
    children,
    className = '',
    pointerEvents = false,
    ...rest
}, ref) => {
    const elementClasses = [
        'absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400',
        pointerEvents ? 'cursor-pointer' : 'pointer-events-none',
        className
    ].filter(Boolean).join(' ');

    return (
        <div ref={ref} className={elementClasses} {...rest}>
            {children}
        </div>
    );
});

InputLeftElement.displayName = 'InputLeftElement';

/**
 * InputRightElement - An element that appears inside the right side of the input
 */
export const InputRightElement = forwardRef<HTMLDivElement, InputElementProps>(({
    children,
    className = '',
    pointerEvents = false,
    ...rest
}, ref) => {
    const elementClasses = [
        'absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400',
        pointerEvents ? 'cursor-pointer' : 'pointer-events-none',
        className
    ].filter(Boolean).join(' ');

    return (
        <div ref={ref} className={elementClasses} {...rest}>
            {children}
        </div>
    );
});

InputRightElement.displayName = 'InputRightElement';

/**
 * InputGroup - A container for grouping input elements with addons
 */
const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(({
    size = 'md',
    children,
    className = '',
    fullWidth = false,
    ...rest
}, ref) => {
    const groupClasses = [
        'relative flex',
        fullWidth ? 'w-full' : 'w-auto',
        className
    ].filter(Boolean).join(' ');

    // Size classes for padding adjustments when elements are present
    const sizeClasses = {
        xs: { left: 'pl-8', right: 'pr-8' },
        sm: { left: 'pl-9', right: 'pr-9' },
        md: { left: 'pl-10', right: 'pr-10' },
        lg: { left: 'pl-12', right: 'pr-12' },
    };

    // Check what elements we have to adjust input styling
    const childArray = Children.toArray(children);
    const hasLeftAddon = childArray.some(child =>
        isValidElement(child) && child.type === InputLeftAddon
    );
    const hasRightAddon = childArray.some(child =>
        isValidElement(child) && child.type === InputRightAddon
    );
    const hasLeftElement = childArray.some(child =>
        isValidElement(child) && child.type === InputLeftElement
    );
    const hasRightElement = childArray.some(child =>
        isValidElement(child) && child.type === InputRightElement
    );

    // Clone children and add appropriate classes to input
    const enhancedChildren = Children.map(children, (child) => {
        if (!isValidElement(child)) return child;

        // If it's an input element, add appropriate classes
        if (child.type === 'input' || (child.type && typeof child.type !== 'string')) {
            const currentProps = child.props || {};
            const inputProps = { ...currentProps } as Record<string, any>;
            let additionalClasses = '';

            // Add rounded corners adjustments for addons
            if (hasLeftAddon) additionalClasses += ' rounded-l-none';
            if (hasRightAddon) additionalClasses += ' rounded-r-none';

            // Add padding adjustments for elements
            if (hasLeftElement) additionalClasses += ` ${sizeClasses[size].left}`;
            if (hasRightElement) additionalClasses += ` ${sizeClasses[size].right}`;

            if (additionalClasses) {
                inputProps.className = [inputProps.className, additionalClasses]
                    .filter(Boolean).join(' ');
            }

            return cloneElement(child, inputProps);
        }

        return child;
    });

    return (
        <div ref={ref} className={groupClasses} {...rest}>
            {enhancedChildren}
        </div>
    );
});

InputGroup.displayName = 'InputGroup';

export default InputGroup;
