import React, { useState, useRef, useEffect, createContext, useContext } from 'react';

interface DropdownContextType {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
    menuRef: React.RefObject<HTMLDivElement | null>;
    toggleRef: React.RefObject<HTMLButtonElement | null>;
}

const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

export interface DropdownProps {
    /**
     * The content of the dropdown
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the dropdown
     */
    className?: string;

    /**
     * Direction to open the dropdown
     * @default 'down'
     */
    direction?: 'up' | 'down' | 'left' | 'right';

    /**
     * Alignment of the dropdown menu
     * @default 'start'
     */
    align?: 'start' | 'end';

    /**
     * Whether the dropdown should open on hover
     * @default false
     */
    openOnHover?: boolean;

    /**
     * Auto close behavior of the dropdown
     * @default 'true'
     */
    autoClose?: boolean | 'inside' | 'outside';
}

export interface DropdownToggleProps {
    /**
     * The content of the dropdown toggle
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the dropdown toggle
     */
    className?: string;

    /**
     * Whether the toggle should have a split appearance
     * @default false
     */
    split?: boolean;
}

export interface DropdownMenuProps {
    /**
     * The content of the dropdown menu
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the dropdown menu
     */
    className?: string;

    /**
     * Whether the menu should have a dark theme
     * @default false
     */
    dark?: boolean;
}

export interface DropdownItemProps {
    /**
     * The content of the dropdown item
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the dropdown item
     */
    className?: string;

    /**
     * Whether the item is active
     * @default false
     */
    active?: boolean;

    /**
     * Whether the item is disabled
     * @default false
     */
    disabled?: boolean;

    /**
     * Whether the item should display a divider below it
     * @default false
     */
    divider?: boolean;

    /**
     * The URL for the item link
     */
    href?: string;

    /**
     * Callback for when the item is clicked
     */
    onClick?: (event: React.MouseEvent) => void;
}

const DropdownToggle: React.FC<DropdownToggleProps> = ({
    children,
    className = '',
    split = false,
}) => {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error('DropdownToggle must be used within a Dropdown');
    }

    const { isOpen, toggle, toggleRef } = context;

    return (
        <button
            ref={toggleRef}
            className={`
        inline-flex items-center justify-center px-4 py-2 
        text-sm font-medium bg-white dark:bg-gray-800 
        border border-gray-300 dark:border-gray-700 
        rounded-md shadow-sm 
        text-gray-700 dark:text-gray-200 
        hover:bg-gray-50 dark:hover:bg-gray-700 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        ${className}
      `}
            type="button"
            aria-expanded={isOpen}
            onClick={toggle}
        >
            {children}
            {!split && (
                <svg
                    className="w-4 h-4 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            )}
        </button>
    );
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
    children,
    className = '',
    dark = false,
}) => {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error('DropdownMenu must be used within a Dropdown');
    }

    const { isOpen, menuRef } = context;

    if (!isOpen) return null;

    return (
        <div
            ref={menuRef}
            className={`
        absolute z-10 mt-2 rounded-md shadow-lg 
        ${dark ? 'bg-gray-800 dark:bg-gray-900' : 'bg-white dark:bg-gray-800'} 
        border ${dark ? 'border-gray-700' : 'border-gray-200 dark:border-gray-700'} 
        min-w-[10rem] py-1 
        ${className}
      `}
            role="menu"
            aria-orientation="vertical"
        >
            {children}
        </div>
    );
};

const DropdownItem: React.FC<DropdownItemProps> = ({
    children,
    className = '',
    active = false,
    disabled = false,
    divider = false,
    href,
    onClick,
}) => {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error('DropdownItem must be used within a Dropdown');
    }

    const { close } = context;

    const handleClick = (event: React.MouseEvent) => {
        if (disabled) {
            event.preventDefault();
            return;
        }

        if (onClick) {
            onClick(event);
        }

        close();
    };

    const itemClasses = `
    block px-4 py-2 text-sm
    ${active
            ? 'bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-100'
            : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
        }
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${divider ? 'border-b border-gray-200 dark:border-gray-700' : ''}
    ${className}
  `;

    if (href && !disabled) {
        return (
            <a
                href={href}
                className={itemClasses}
                onClick={handleClick}
                role="menuitem"
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={itemClasses}
            onClick={handleClick}
            disabled={disabled}
            role="menuitem"
            type="button"
        >
            {children}
        </button>
    );
};

const Dropdown: React.FC<DropdownProps> & {
    Toggle: typeof DropdownToggle;
    Menu: typeof DropdownMenu;
    Item: typeof DropdownItem;
} = ({
    children,
    className = '',
    direction = 'down',
    align = 'start',
    openOnHover = false,
    autoClose = true,
}) => {
        const [isOpen, setIsOpen] = useState(false);
        const menuRef = useRef<HTMLDivElement>(null);
        const toggleRef = useRef<HTMLButtonElement>(null);
        const containerRef = useRef<HTMLDivElement>(null);

        const toggle = () => setIsOpen(prev => !prev);
        const close = () => setIsOpen(false);

        // Handle click outside to close
        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (!autoClose) return;

                if (autoClose === 'inside' && menuRef.current?.contains(event.target as Node)) {
                    close();
                    return;
                }

                if (autoClose === 'outside' && !menuRef.current?.contains(event.target as Node)) {
                    close();
                    return;
                }

                if (
                    containerRef.current &&
                    !containerRef.current.contains(event.target as Node)
                ) {
                    close();
                }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [autoClose]);

        // Handle hover open/close
        useEffect(() => {
            if (!openOnHover) return;

            const handleMouseEnter = () => setIsOpen(true);
            const handleMouseLeave = () => setIsOpen(false);

            const container = containerRef.current;
            if (container) {
                container.addEventListener('mouseenter', handleMouseEnter);
                container.addEventListener('mouseleave', handleMouseLeave);
            }

            return () => {
                if (container) {
                    container.removeEventListener('mouseenter', handleMouseEnter);
                    container.removeEventListener('mouseleave', handleMouseLeave);
                }
            };
        }, [openOnHover]);

        // Determine menu position classes
        const getPositionClasses = () => {
            switch (direction) {
                case 'up':
                    return 'bottom-full mb-2';
                case 'left':
                    return 'right-full mr-2 top-0';
                case 'right':
                    return 'left-full ml-2 top-0';
                default: // down
                    return 'top-full mt-2';
            }
        };

        const getAlignmentClasses = () => {
            if (direction === 'left' || direction === 'right') return '';
            return align === 'end' ? 'right-0' : 'left-0';
        };

        return (
            <DropdownContext.Provider value={{ isOpen, toggle, close, menuRef, toggleRef }}>
                <div
                    ref={containerRef}
                    className={`relative inline-block text-left ${className}`}
                >
                    {children}
                    <div
                        className={`${getPositionClasses()} ${getAlignmentClasses()}`}
                    >
                        {/* Menu will be rendered by DropdownMenu */}
                    </div>
                </div>
            </DropdownContext.Provider>
        );
    };

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;

export default Dropdown;
