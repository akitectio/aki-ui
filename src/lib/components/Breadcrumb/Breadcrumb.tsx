import React from 'react';

export interface BreadcrumbProps {
    /**
     * The breadcrumb items
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the breadcrumb
     */
    className?: string;

    /**
     * The separator between breadcrumb items
     * @default '/'
     */
    separator?: React.ReactNode;

    /**
     * The maximum number of items to show. If exceeded, will collapse the middle items
     * @default undefined
     */
    maxItems?: number;

    /**
     * Render breadcrumbs without background
     * @default false
     */
    transparent?: boolean;
}

export interface BreadcrumbItemProps {
    /**
     * The content of the breadcrumb item
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the breadcrumb item
     */
    className?: string;

    /**
     * The URL for the breadcrumb item link
     */
    href?: string;

    /**
     * Whether the breadcrumb item is active
     * @default false
     */
    active?: boolean;

    /**
     * Icon to display before the breadcrumb text
     */
    icon?: React.ReactNode;

    /**
     * Whether to truncate the breadcrumb text if it's too long
     * @default false
     */
    truncate?: boolean;

    /**
     * Callback for when the breadcrumb item is clicked
     */
    onClick?: (event: React.MouseEvent) => void;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
    children,
    className = '',
    href,
    active = false,
    icon,
    truncate = false,
    onClick,
}) => {
    const classes = `
    ${active
            ? 'text-gray-800 dark:text-gray-200 font-semibold pointer-events-none'
            : 'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors'}
    ${truncate ? 'truncate max-w-[150px]' : ''}
    inline-flex items-center
    ${className}
  `;

    const content = (
        <>
            {icon && <span className="mr-1.5">{icon}</span>}
            {children}
        </>
    );

    if (active) {
        return (
            <span className={classes} aria-current="page">
                {content}
            </span>
        );
    }

    if (href) {
        return (
            <a href={href} className={classes} onClick={onClick}>
                {content}
            </a>
        );
    }

    return (
        <span className={classes} onClick={onClick} role={onClick ? 'button' : undefined}>
            {content}
        </span>
    );
};

const Breadcrumb: React.FC<BreadcrumbProps> & {
    Item: typeof BreadcrumbItem;
} = ({
    children,
    className = '',
    separator = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    ),
    maxItems,
    transparent = false,
}) => {
        let items = React.Children.toArray(children);

        // Handle max items with collapse in the middle
        if (maxItems && items.length > maxItems) {
            const start = Math.ceil(maxItems / 2);
            const end = items.length - Math.floor(maxItems / 2);

            const visibleItems = [
                ...items.slice(0, start),
                <BreadcrumbItem key="ellipsis">...</BreadcrumbItem>,
                ...items.slice(end)
            ];

            items = visibleItems;
        }

        return (
            <nav
                className={`${transparent ? '' : 'p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-sm font-medium'} ${className}`}
                aria-label="Breadcrumb"
            >
                <ol className="flex flex-wrap items-center">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center">
                            {item}
                            {index < items.length - 1 && (
                                <span className="mx-2 text-gray-400 dark:text-gray-500 flex items-center">{separator}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        );
    };

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
