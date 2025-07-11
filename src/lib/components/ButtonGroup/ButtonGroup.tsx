import React from 'react';

export interface ButtonGroupProps {
    /**
     * The buttons to group together
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the button group
     */
    className?: string;

    /**
     * Whether the buttons should be stacked vertically
     * @default false
     */
    vertical?: boolean;

    /**
     * The size of all buttons in the group
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';

    /**
     * Whether to display buttons with equal width
     * @default false
     */
    equalWidth?: boolean;

    /**
     * Aria label for the button group
     */
    ariaLabel?: string;
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(({
    children,
    className = '',
    vertical = false,
    size = 'md',
    equalWidth = false,
    ariaLabel = 'Button group',
}, ref) => {
    // Clone children to pass size prop to Button components
    const enhancedChildren = React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
            return child;
        }

        // Type casting to avoid TypeScript errors
        const childProps = child.props as any;

        return React.cloneElement(child, {
            ...childProps,
            size: size || childProps.size,
            className: `${childProps.className || ''} ${equalWidth ? 'flex-1' : ''}`
        });
    });

    return (
        <div
            className={`
        inline-flex 
        ${vertical ? 'flex-col' : 'flex-row rtl:flex-row-reverse'} 
        rounded-md overflow-hidden 
        ${className}
      `}
            role="group"
            aria-label={ariaLabel}
            ref={ref}
        >
            {enhancedChildren}
        </div>
    );
});

export default ButtonGroup;
