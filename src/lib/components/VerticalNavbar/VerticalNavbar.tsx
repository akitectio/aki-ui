import React, { useState, createContext, useContext, useEffect } from 'react';

type VerticalNavbarVariant = 'primary' | 'secondary' | 'light' | 'dark';
type VerticalNavbarSize = 'sm' | 'md' | 'lg';

interface VerticalNavbarContextValue {
    collapsed: boolean;
    mobileOpen?: boolean;
    closeMobile?: () => void;
}

const VerticalNavbarContext = createContext<VerticalNavbarContextValue>({ collapsed: false });

export interface VerticalNavbarHeaderProps {
    /**
     * Header content (logo, title, or custom element)
     */
    children?: React.ReactNode;
    /**
     * Whether to show a collapse button
     */
    collapsible?: boolean;
}

export interface VerticalNavbarItemProps {
    /**
     * Item content
     */
    children: React.ReactNode;
    /**
     * URL to navigate to
     */
    href?: string;
    /**
     * Icon to display before the text
     */
    icon?: React.ReactNode;
    /**
     * Whether the item is active/current
     */
    active?: boolean;
    /**
     * Whether the item is disabled
     */
    disabled?: boolean;
    /**
     * Badge or count to display
     */
    badge?: React.ReactNode;
    /**
     * Custom click handler
     */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

export interface VerticalNavbarGroupProps {
    /**
     * Group title
     */
    title?: string;
    /**
     * Group content
     */
    children: React.ReactNode;
    /**
     * Whether the group is collapsible
     */
    collapsible?: boolean;
    /**
     * Whether the group is initially collapsed
     */
    defaultCollapsed?: boolean;
    /**
     * Icon for the group
     */
    icon?: React.ReactNode;
}

export interface VerticalNavbarFooterProps {
    /**
     * Footer content
     */
    children: React.ReactNode;
}

export interface VerticalNavbarProps {
    /**
     * Navigation items and groups
     */
    children: React.ReactNode;
    /**
     * Visual variant of the navbar
     */
    variant?: VerticalNavbarVariant;
    /**
     * Size of the navbar
     */
    size?: VerticalNavbarSize;
    /**
     * Whether the navbar is collapsible
     */
    collapsible?: boolean;
    /**
     * Whether the navbar is initially collapsed
     */
    defaultCollapsed?: boolean;
    /**
     * Width of the navbar when expanded
     */
    width?: string;
    /**
     * Width of the navbar when collapsed
     */
    collapsedWidth?: string;
    /**
     * Whether to show overlay on mobile
     */
    overlay?: boolean;
    /**
     * Custom className
     */
    className?: string;
}

const VerticalNavbarHeader: React.FC<VerticalNavbarHeaderProps> = ({
    children,
    collapsible = false
}) => {
    return (
        <div className="px-4 py-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
                {children}
                {collapsible && (
                    <button className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

const VerticalNavbarItem: React.FC<VerticalNavbarItemProps> = ({
    children,
    href,
    icon,
    active = false,
    disabled = false,
    badge,
    onClick
}) => {
    const { collapsed, closeMobile } = useContext(VerticalNavbarContext);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        if (onClick) {
            onClick(event);
        }
        // Close mobile menu when item is clicked
        if (closeMobile) {
            closeMobile();
        }
    };

    const baseClasses = `
        flex items-center justify-between px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 mx-2
        ${disabled
            ? 'text-gray-400 cursor-not-allowed dark:text-gray-600'
            : active
                ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-300'
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
        }
        ${collapsed ? 'justify-center mx-3 px-2' : ''}
    `;

    const content = (
        <>
            <div className="flex items-center min-w-0">
                {icon && (
                    <span className={`w-5 h-5 flex-shrink-0 ${collapsed ? '' : 'mr-3'}`}>
                        {icon}
                    </span>
                )}
                {!collapsed && <span className="truncate">{children}</span>}
            </div>
            {!collapsed && badge && (
                <span className="ml-2 flex-shrink-0">
                    {badge}
                </span>
            )}
        </>
    );

    if (href && !disabled) {
        return (
            <a
                href={href}
                className={baseClasses}
                onClick={handleClick}
                title={collapsed ? children?.toString() : undefined}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            type="button"
            className={baseClasses}
            disabled={disabled}
            onClick={handleClick}
            title={collapsed ? children?.toString() : undefined}
        >
            {content}
        </button>
    );
};

const VerticalNavbarGroup: React.FC<VerticalNavbarGroupProps> = ({
    title,
    children,
    collapsible = false,
    defaultCollapsed = false,
    icon
}) => {
    const [collapsed, setCollapsed] = useState(defaultCollapsed);
    const { collapsed: parentCollapsed } = useContext(VerticalNavbarContext);

    const toggleCollapse = () => {
        if (collapsible) {
            setCollapsed(!collapsed);
        }
    };

    if (parentCollapsed) {
        // When parent sidebar is collapsed, just show the children without group styling
        return (
            <div className="space-y-1">
                {children}
            </div>
        );
    }

    return (
        <div className="mb-4">
            {title && (
                <button
                    type="button"
                    className={`
                        w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider
                        ${collapsible ? 'hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer' : 'cursor-default'}
                        dark:text-gray-400
                    `}
                    onClick={toggleCollapse}
                >
                    <div className="flex items-center">
                        {icon && (
                            <span className="mr-2 w-4 h-4">
                                {icon}
                            </span>
                        )}
                        <span>{title}</span>
                    </div>
                    {collapsible && (
                        <span className="w-4 h-4">
                            {collapsed ? (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            )}
                        </span>
                    )}
                </button>
            )}
            {(!collapsible || !collapsed) && (
                <div className="space-y-1">
                    {children}
                </div>
            )}
        </div>
    );
};

const VerticalNavbarFooter: React.FC<VerticalNavbarFooterProps> = ({
    children
}) => {
    return (
        <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
            {children}
        </div>
    );
};

const VerticalNavbar: React.FC<VerticalNavbarProps> & {
    Header: typeof VerticalNavbarHeader;
    Item: typeof VerticalNavbarItem;
    Group: typeof VerticalNavbarGroup;
    Footer: typeof VerticalNavbarFooter;
} = ({
    children,
    variant = 'light',
    size = 'md',
    collapsible = false,
    defaultCollapsed = false,
    width = '256px',
    collapsedWidth = '64px',
    overlay = false,
    className = ''
}) => {
        const [collapsed, setCollapsed] = useState(defaultCollapsed);
        const [mobileOpen, setMobileOpen] = useState(false);

        const toggleCollapse = () => {
            if (collapsible) {
                setCollapsed(!collapsed);
            }
        };

        const toggleMobile = () => {
            setMobileOpen(!mobileOpen);
        };

        // Close mobile menu on Escape key
        useEffect(() => {
            const handleEscapeKey = (event: KeyboardEvent) => {
                if (event.key === 'Escape' && mobileOpen) {
                    setMobileOpen(false);
                }
            };

            document.addEventListener('keydown', handleEscapeKey);
            return () => {
                document.removeEventListener('keydown', handleEscapeKey);
            };
        }, [mobileOpen]);

        // Close mobile menu on window resize to desktop size
        useEffect(() => {
            const handleResize = () => {
                if (window.innerWidth >= 1024) {
                    setMobileOpen(false);
                }
            };

            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        const variantClasses = {
            primary: 'bg-blue-900 text-white border-blue-800',
            secondary: 'bg-gray-800 text-white border-gray-700',
            light: 'bg-white text-gray-900 border-gray-200 shadow-sm',
            dark: 'bg-gray-900 text-white border-gray-800'
        };

        const sizeClasses = {
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-lg'
        };

        const currentWidth = collapsed ? collapsedWidth : width;

        return (
            <VerticalNavbarContext.Provider value={{ collapsed, mobileOpen, closeMobile: () => setMobileOpen(false) }}>
                {/* Mobile overlay */}
                {overlay && mobileOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                        onClick={toggleMobile}
                    />
                )}

                {/* Mobile toggle button */}
                <button
                    type="button"
                    className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md border border-gray-200 lg:hidden"
                    onClick={toggleMobile}
                >
                    {mobileOpen ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* Sidebar */}
                <div
                    className={`
                    fixed top-0 left-0 h-full z-50 border-r transition-all duration-300 ease-in-out
                    ${variantClasses[variant]}
                    ${sizeClasses[size]}
                    ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                    ${className}
                `}
                    style={{ width: currentWidth }}
                >
                    <div className="flex flex-col h-full overflow-y-auto overflow-x-hidden">
                        {/* Collapse button for desktop */}
                        {collapsible && (
                            <button
                                type="button"
                                className="hidden lg:flex absolute top-4 right-4 p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10 items-center justify-center"
                                onClick={toggleCollapse}
                                title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                            >
                                {collapsed ? (
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                )}
                            </button>
                        )}

                        {/* Content */}
                        <div className="flex-1 py-4">
                            {children}
                        </div>
                    </div>
                </div>

                {/* Spacer for main content */}
                <div
                    className="hidden lg:block transition-all duration-300 ease-in-out"
                    style={{ width: currentWidth }}
                />
            </VerticalNavbarContext.Provider>
        );
    };

VerticalNavbar.Header = VerticalNavbarHeader;
VerticalNavbar.Item = VerticalNavbarItem;
VerticalNavbar.Group = VerticalNavbarGroup;
VerticalNavbar.Footer = VerticalNavbarFooter;

export default VerticalNavbar;
