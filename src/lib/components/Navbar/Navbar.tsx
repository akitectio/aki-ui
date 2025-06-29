import React, { useState } from 'react';

type NavbarVariant = 'primary' | 'secondary' | 'light' | 'dark' | 'transparent';
type NavbarPosition = 'static' | 'fixed-top' | 'fixed-bottom' | 'sticky-top';

export interface NavbarBrandProps {
    /**
     * Brand content (logo, text, or custom element)
     */
    children?: React.ReactNode;
    /**
     * URL to navigate to when brand is clicked
     */
    href?: string;
    /**
     * Custom click handler for brand
     */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => void;
}

export interface NavbarItemProps {
    /**
     * Item content
     */
    children: React.ReactNode;
    /**
     * URL to navigate to
     */
    href?: string;
    /**
     * Whether the item is active/current
     */
    active?: boolean;
    /**
     * Whether the item is disabled
     */
    disabled?: boolean;
    /**
     * Custom click handler
     */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

export interface NavbarCollapseProps {
    /**
     * Collapse content
     */
    children: React.ReactNode;
    /**
     * Whether the collapse is open
     */
    isOpen: boolean;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * The visual style variant of the navbar
     * @default 'light'
     */
    variant?: NavbarVariant;

    /**
     * The positioning of the navbar
     * @default 'static'
     */
    position?: NavbarPosition;

    /**
     * Whether the navbar should expand on larger screens
     * @default true
     */
    expand?: boolean | 'sm' | 'md' | 'lg' | 'xl';

    /**
     * Whether to include a toggle button for mobile
     * @default true
     */
    toggleable?: boolean;

    /**
     * Custom toggle button content
     */
    toggleContent?: React.ReactNode;

    /**
     * Callback when toggle button is clicked
     */
    onToggle?: () => void;

    /**
     * Navbar content
     */
    children: React.ReactNode;
}

const NavbarBrand: React.FC<NavbarBrandProps> = ({ 
    children, 
    href, 
    onClick,
    ...props 
}) => {
    const className = "navbar-brand flex items-center text-lg sm:text-xl font-semibold text-inherit no-underline hover:text-inherit transition-colors duration-200 truncate max-w-[60%] sm:max-w-none";
    
    if (href) {
        return (
            <a 
                href={href} 
                className={className}
                onClick={onClick}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <div 
            className={className}
            onClick={onClick}
            {...props}
        >
            {children}
        </div>
    );
};

const NavbarItem: React.FC<NavbarItemProps> = ({ 
    children, 
    href, 
    active = false, 
    disabled = false,
    onClick,
    ...props 
}) => {
    const baseClassName = "navbar-item block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 md:inline-block md:w-auto md:px-3 md:py-2 md:rounded-md";
    const activeClassName = active 
        ? "text-blue-600 bg-blue-50 md:bg-blue-100 border-l-4 border-blue-600 md:border-l-0 md:border-none" 
        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 md:hover:bg-blue-50 hover:border-l-4 hover:border-blue-300 md:hover:border-l-0 md:hover:border-none";
    const disabledClassName = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
    const className = `${baseClassName} ${activeClassName} ${disabledClassName}`;

    if (href && !disabled) {
        return (
            <a 
                href={href} 
                className={`${className} no-underline`}
                onClick={onClick}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button 
            className={className}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

const NavbarCollapse: React.FC<NavbarCollapseProps> = ({ 
    children, 
    isOpen 
}) => {
    return (
        <div className={`navbar-collapse ${isOpen ? 'block' : 'hidden'} md:block md:ml-auto`}>
            <div className="flex flex-col md:flex-row md:space-x-1 space-y-1 md:space-y-0">
                {children}
            </div>
        </div>
    );
};

const Navbar: React.FC<NavbarProps> & {
    Brand: typeof NavbarBrand;
    Item: typeof NavbarItem;
    Collapse: typeof NavbarCollapse;
} = ({ 
    variant = 'light',
    position = 'static',
    expand = true,
    toggleable = true,
    toggleContent,
    onToggle,
    children,
    className = '',
    ...props 
}) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
        onToggle?.();
    };

    const getVariantClasses = () => {
        switch (variant) {
            case 'primary':
                return 'bg-blue-600 text-white border-blue-600 shadow-sm';
            case 'secondary':
                return 'bg-gray-600 text-white border-gray-600 shadow-sm';
            case 'dark':
                return 'bg-gray-900 text-white border-gray-900 shadow-sm';
            case 'transparent':
                return 'bg-transparent text-gray-900 border-transparent backdrop-blur-sm';
            case 'light':
            default:
                return 'bg-white text-gray-900 border-gray-200 shadow-sm';
        }
    };

    const getPositionClasses = () => {
        switch (position) {
            case 'fixed-top':
                return 'fixed top-0 left-0 right-0 z-50';
            case 'fixed-bottom':
                return 'fixed bottom-0 left-0 right-0 z-50';
            case 'sticky-top':
                return 'sticky top-0 z-50';
            case 'static':
            default:
                return 'relative';
        }
    };

    const getExpandClasses = () => {
        if (expand === true) return 'md:flex';
        if (expand === false) return '';
        return `${expand}:flex`;
    };

    const baseClassName = "navbar border-b";
    const variantClasses = getVariantClasses();
    const positionClasses = getPositionClasses();
    const expandClasses = getExpandClasses();
    const finalClassName = `${baseClassName} ${variantClasses} ${positionClasses} ${expandClasses} ${className}`.trim();

    const defaultToggleContent = (
        <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
            />
        </svg>
    );

    return (
        <nav className={finalClassName} {...props}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16">
                    {/* Brand and toggle button wrapper */}
                    <div className="flex items-center flex-shrink-0">
                        {React.Children.map(children, (child) => {
                            if (React.isValidElement(child) && child.type === NavbarBrand) {
                                return child;
                            }
                            return null;
                        })}
                    </div>

                    {/* Toggle button for mobile */}
                    {toggleable && (
                        <button
                            type="button"
                            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-current hover:text-opacity-80 hover:bg-black hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-current transition-all duration-200 active:scale-95"
                            onClick={handleToggle}
                            aria-expanded={!isCollapsed}
                            aria-label="Toggle navigation menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            <div className={`transition-transform duration-300 ${!isCollapsed ? 'rotate-90' : ''}`}>
                                {toggleContent || defaultToggleContent}
                            </div>
                        </button>
                    )}

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center md:ml-auto md:space-x-1">
                        {React.Children.map(children, (child) => {
                            if (React.isValidElement(child) && child.type !== NavbarBrand) {
                                return child;
                            }
                            return null;
                        })}
                    </div>
                </div>

                {/* Mobile menu */}
                {toggleable && (
                    <div 
                        className={`md:hidden transition-all duration-300 ease-in-out ${
                            !isCollapsed 
                                ? 'max-h-screen opacity-100 visible' 
                                : 'max-h-0 opacity-0 invisible overflow-hidden'
                        }`}
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-current border-opacity-20 mt-2">
                            {React.Children.map(children, (child) => {
                                if (React.isValidElement(child) && child.type !== NavbarBrand) {
                                    return child;
                                }
                                return null;
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

// Attach sub-components
Navbar.Brand = NavbarBrand;
Navbar.Item = NavbarItem;
Navbar.Collapse = NavbarCollapse;

export default Navbar;
