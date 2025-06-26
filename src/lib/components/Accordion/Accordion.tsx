import React, { createContext, useContext, useState } from 'react';

interface AccordionContextType {
    activeItems: string[];
    toggleItem: (id: string) => void;
    allowMultiple: boolean;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export interface AccordionProps {
    /**
     * The content of the accordion
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the accordion
     */
    className?: string;

    /**
     * Allow multiple items to be expanded at once
     * @default false
     */
    allowMultiple?: boolean;

    /**
     * Default expanded item ids
     */
    defaultExpandedItems?: string[];

    /**
     * Flush style (without borders)
     * @default false
     */
    flush?: boolean;

    /**
     * Always keep at least one item expanded
     * @default false
     */
    alwaysOpen?: boolean;
}

export interface AccordionItemProps {
    /**
     * The content of the accordion item
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the accordion item
     */
    className?: string;

    /**
     * Unique identifier for the accordion item
     */
    id: string;

    /**
     * Whether the accordion item is disabled
     * @default false
     */
    disabled?: boolean;
}

export interface AccordionHeaderProps {
    /**
     * The content of the accordion header
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the accordion header
     */
    className?: string;
}

export interface AccordionBodyProps {
    /**
     * The content of the accordion body
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the accordion body
     */
    className?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
    children,
    className = '',
    id,
    disabled = false
}) => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error('AccordionItem must be used within an Accordion');
    }

    const isExpanded = context.activeItems.includes(id);

    return (
        <div
            className={`border border-gray-300 dark:border-gray-700 ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}
            data-expanded={isExpanded}
        >
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, {
                        isExpanded,
                        onClick: disabled ? undefined : () => context.toggleItem(id),
                        disabled
                    });
                }
                return child;
            })}
        </div>
    );
};

const AccordionHeader: React.FC<AccordionHeaderProps & {
    isExpanded?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}> = ({
    children,
    className = '',
    isExpanded = false,
    onClick,
    disabled = false
}) => {
        return (
            <button
                className={`w-full text-left p-4 font-medium flex justify-between items-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className}`}
                onClick={onClick}
                disabled={disabled}
                aria-expanded={isExpanded}
            >
                {children}
                <svg
                    className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'transform rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        );
    };

const AccordionBody: React.FC<AccordionBodyProps & {
    isExpanded?: boolean;
}> = ({
    children,
    className = '',
    isExpanded = false
}) => {
        return (
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className={`p-4 ${className}`}>
                    {children}
                </div>
            </div>
        );
    };

const Accordion: React.FC<AccordionProps> & {
    Item: typeof AccordionItem;
    Header: typeof AccordionHeader;
    Body: typeof AccordionBody;
} = ({
    children,
    className = '',
    allowMultiple = false,
    defaultExpandedItems = [],
    flush = false,
    alwaysOpen = false
}) => {
        const [activeItems, setActiveItems] = useState<string[]>(defaultExpandedItems);

        const toggleItem = (id: string) => {
            setActiveItems(prevActiveItems => {
                if (prevActiveItems.includes(id)) {
                    // If alwaysOpen is true and there's only one item active, don't close it
                    if (alwaysOpen && prevActiveItems.length === 1) {
                        return prevActiveItems;
                    }
                    return prevActiveItems.filter(itemId => itemId !== id);
                } else {
                    if (allowMultiple) {
                        return [...prevActiveItems, id];
                    }
                    return [id];
                }
            });
        };

        return (
            <AccordionContext.Provider value={{ activeItems, toggleItem, allowMultiple }}>
                <div className={`${flush ? '' : 'rounded-md overflow-hidden'} ${className}`}>
                    {children}
                </div>
            </AccordionContext.Provider>
        );
    };

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;
