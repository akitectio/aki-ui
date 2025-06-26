import React, { useState } from 'react';

export interface TabProps {
    /**
     * The tab's label
     */
    label: React.ReactNode;

    /**
     * The tab's content
     */
    children: React.ReactNode;

    /**
     * Whether the tab is disabled
     * @default false
     */
    disabled?: boolean;

    /**
     * Custom icon to display before the label
     */
    icon?: React.ReactNode;

    /**
     * Additional CSS class for the tab
     */
    className?: string;

    /**
     * ID for the tab
     */
    id?: string;
}

export interface TabsProps {
    /**
     * The tabs to be rendered
     */
    children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];

    /**
     * The index of the initially active tab
     * @default 0
     */
    defaultIndex?: number;

    /**
     * Called when the active tab changes
     */
    onChange?: (index: number) => void;

    /**
     * The currently active tab index (controlled)
     */
    activeIndex?: number;

    /**
     * The visual variant of the tabs
     * @default 'line'
     */
    variant?: 'line' | 'enclosed' | 'soft-rounded' | 'solid-rounded' | 'unstyled';

    /**
     * The alignment of the tabs within their container
     * @default 'start'
     */
    align?: 'start' | 'center' | 'end';

    /**
     * The size of the tabs
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';

    /**
     * Whether the tabs should take the full width of their container
     * @default false
     */
    fullWidth?: boolean;

    /**
     * Whether to show the tab content with a fade in animation
     * @default true
     */
    animate?: boolean;

    /**
     * Whether to lazy load tab content (only render when tab is active)
     * @default true
     */
    lazyLoad?: boolean;

    /**
     * Additional CSS class for the tabs container
     */
    className?: string;

    /**
     * Additional CSS class for the tab panels
     */
    tabPanelClassName?: string;
}

export const Tab: React.FC<TabProps> = ({ children }) => {
    return <>{children}</>;
};

const Tabs: React.FC<TabsProps> = ({
    children,
    defaultIndex = 0,
    onChange,
    activeIndex: controlledIndex,
    variant = 'line',
    align = 'start',
    size = 'md',
    fullWidth = false,
    animate = true,
    lazyLoad = true,
    className = '',
    tabPanelClassName = '',
}) => {
    // Internal state for uncontrolled component
    const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

    // Check if component is controlled
    const isControlled = controlledIndex !== undefined;
    const currentIndex = isControlled ? controlledIndex : selectedIndex;

    // Cast children to array
    const tabChildren = React.Children.toArray(children) as React.ReactElement<TabProps>[];

    // Handle tab click
    const handleTabClick = (index: number) => {
        if (!isControlled) {
            setSelectedIndex(index);
        }
        if (onChange) {
            onChange(index);
        }
    };

    // Tab sizes
    const sizeClasses = {
        sm: 'text-xs py-1 px-2',
        md: 'text-sm py-2 px-4',
        lg: 'text-base py-3 px-6',
    };

    // Tab variant styles
    const getVariantClasses = (isActive: boolean, isDisabled: boolean) => {
        if (isDisabled) {
            return 'cursor-not-allowed opacity-50';
        }

        switch (variant) {
            case 'line':
                return `border-b-2 ${isActive
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
                    }`;
            case 'enclosed':
                return `border-b ${isActive
                    ? 'border-x border-t rounded-t-md border-b-transparent bg-white text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                    }`;
            case 'soft-rounded':
                return `rounded-full ${isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                    }`;
            case 'solid-rounded':
                return `rounded-full ${isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                    }`;
            case 'unstyled':
                return `${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-800'}`;
            default:
                return '';
        }
    };

    // Alignment classes
    const alignClasses = {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
    };

    // Width classes
    const widthClasses = fullWidth ? 'w-full justify-between' : '';

    return (
        <div className={`tabs ${className}`}>
            {/* Tab list */}
            <div className={`flex border-b ${alignClasses[align]} ${widthClasses}`}>
                {tabChildren.map((child, index) => {
                    const isActive = index === currentIndex;
                    const isDisabled = child.props.disabled || false;

                    return (
                        <button
                            key={`tab-${index}`}
                            id={child.props.id || `tab-${index}`}
                            className={`
                                ${sizeClasses[size]}
                                ${getVariantClasses(isActive, isDisabled)}
                                flex items-center focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50
                                transition-all duration-200
                                ${fullWidth ? 'flex-1' : ''}
                                ${child.props.className || ''}
                            `}
                            onClick={() => !isDisabled && handleTabClick(index)}
                            role="tab"
                            aria-selected={isActive}
                            aria-disabled={isDisabled}
                            aria-controls={`tabpanel-${index}`}
                            tabIndex={isActive ? 0 : -1}
                            type="button"
                        >
                            {child.props.icon && (
                                <span className="mr-2">{child.props.icon}</span>
                            )}
                            {child.props.label}
                        </button>
                    );
                })}
            </div>

            {/* Tab panels */}
            <div className="tab-content mt-4">
                {tabChildren.map((child, index) => {
                    const isActive = index === currentIndex;

                    // If lazy loading is enabled, only render active tab
                    if (lazyLoad && !isActive) {
                        return null;
                    }

                    return (
                        <div
                            key={`tabpanel-${index}`}
                            id={`tabpanel-${index}`}
                            role="tabpanel"
                            aria-labelledby={`tab-${index}`}
                            className={`
                                ${!isActive && 'hidden'}
                                ${animate && isActive ? 'animate-fade-in' : ''}
                                ${tabPanelClassName}
                            `}
                        >
                            {child.props.children}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

Tab.displayName = 'Tab';
Tabs.displayName = 'Tabs';

export default Tabs;
