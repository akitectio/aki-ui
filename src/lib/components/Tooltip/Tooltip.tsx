import React, { useState, useRef, useEffect } from 'react';

export interface TooltipProps {
    /**
     * The content to display in the tooltip
     */
    content: React.ReactNode;

    /**
     * The element that triggers the tooltip
     */
    children: React.ReactElement;

    /**
     * The position of the tooltip relative to the trigger
     * @default 'top'
     */
    position?: 'top' | 'right' | 'bottom' | 'left';

    /**
     * The delay before showing the tooltip (in ms)
     * @default 0
     */
    delay?: number;

    /**
     * Whether the tooltip should be shown
     * @default false
     */
    visible?: boolean;

    /**
     * Control whether the tooltip is shown based on events
     * @default 'hover'
     */
    trigger?: 'hover' | 'click' | 'focus' | 'manual';

    /**
     * The background color of the tooltip
     * @default 'dark'
     */
    theme?: 'dark' | 'light';

    /**
     * Additional CSS classes for the tooltip
     */
    className?: string;

    /**
     * The maximum width of the tooltip
     * @default '200px'
     */
    maxWidth?: string;

    /**
     * The arrow size
     * @default 6
     */
    arrowSize?: number;
}

const Tooltip: React.FC<TooltipProps> = ({
    content,
    children,
    position = 'top',
    delay = 0,
    visible,
    trigger = 'hover',
    theme = 'dark',
    className = '',
    maxWidth = '200px',
    arrowSize = 6
}) => {
    const [isVisible, setIsVisible] = useState(visible || false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const tooltipRef = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLElement | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Determine if tooltip display is controlled externally
    const isControlled = visible !== undefined;

    const showTooltip = () => {
        if (isControlled) return;

        if (delay) {
            timeoutRef.current = setTimeout(() => {
                setIsVisible(true);
            }, delay);
        } else {
            setIsVisible(true);
        }
    };

    const hideTooltip = () => {
        if (isControlled) return;

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsVisible(false);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isControlled) {
            setIsVisible(!!visible);
        }
    }, [visible, isControlled]);

    useEffect(() => {
        if (isVisible && targetRef.current) {
            // Use requestAnimationFrame to ensure DOM is updated
            requestAnimationFrame(() => {
                updateTooltipPosition();
            });
        }
    }, [isVisible, position]);

    useEffect(() => {
        const handleResize = () => {
            if (isVisible) {
                updateTooltipPosition();
            }
        };

        const handleScroll = () => {
            if (isVisible) {
                updateTooltipPosition();
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll, true);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll, true);
        };
    }, [isVisible]);

    const updateTooltipPosition = () => {
        if (!targetRef.current || !tooltipRef.current) return;

        const targetRect = targetRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let top = 0;
        let left = 0;

        const scrollY = window.scrollY || window.pageYOffset;
        const scrollX = window.scrollX || window.pageXOffset;
        const offset = arrowSize + 4; // Small additional offset

        switch (position) {
            case 'top':
                top = targetRect.top + scrollY - tooltipRect.height - offset;
                left = targetRect.left + scrollX + (targetRect.width - tooltipRect.width) / 2;
                break;
            case 'right':
                top = targetRect.top + scrollY + (targetRect.height - tooltipRect.height) / 2;
                left = targetRect.right + scrollX + offset;
                break;
            case 'bottom':
                top = targetRect.bottom + scrollY + offset;
                left = targetRect.left + scrollX + (targetRect.width - tooltipRect.width) / 2;
                break;
            case 'left':
                top = targetRect.top + scrollY + (targetRect.height - tooltipRect.height) / 2;
                left = targetRect.left + scrollX - tooltipRect.width - offset;
                break;
        }

        // Prevent tooltip from going outside viewport
        const padding = 8;
        left = Math.max(padding, Math.min(left, viewportWidth - tooltipRect.width - padding));
        top = Math.max(padding, Math.min(top, viewportHeight + scrollY - tooltipRect.height - padding));

        setCoords({ top, left });
    };

    const getEventProps = () => {
        if (trigger === 'hover') {
            return {
                onMouseEnter: showTooltip,
                onMouseLeave: hideTooltip,
            };
        }

        if (trigger === 'click') {
            return {
                onClick: isVisible ? hideTooltip : showTooltip,
            };
        }

        if (trigger === 'focus') {
            return {
                onFocus: showTooltip,
                onBlur: hideTooltip,
            };
        }

        return {};
    };

    const themeClasses = {
        dark: 'bg-gray-800 text-white',
        light: 'bg-white text-gray-800 border border-gray-200 shadow-lg',
    };

    const getArrowClasses = () => {
        const baseClasses = 'absolute';
        const arrowColor = theme === 'dark' ? 'border-gray-800' : 'border-white';

        switch (position) {
            case 'top':
                return `${baseClasses} bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full border-l-transparent border-r-transparent border-t-4 ${arrowColor} border-b-0`;
            case 'right':
                return `${baseClasses} left-0 top-1/2 transform -translate-x-full -translate-y-1/2 border-t-transparent border-b-transparent border-r-4 ${arrowColor} border-l-0`;
            case 'bottom':
                return `${baseClasses} top-0 left-1/2 transform -translate-x-1/2 -translate-y-full border-l-transparent border-r-transparent border-b-4 ${arrowColor} border-t-0`;
            case 'left':
                return `${baseClasses} right-0 top-1/2 transform translate-x-full -translate-y-1/2 border-t-transparent border-b-transparent border-l-4 ${arrowColor} border-r-0`;
            default:
                return baseClasses;
        }
    };

    // Clone the child element to add our event handlers
    const childElement = React.cloneElement(children, {
        ...getEventProps(),
        ref: (node: any) => {
            targetRef.current = node;

            // Preserve the original ref if it exists
            const originalRef = (children as any).ref;
            if (typeof originalRef === 'function') {
                originalRef(node);
            } else if (originalRef !== null && originalRef !== undefined) {
                originalRef.current = node;
            }
        },
    } as any);

    return (
        <>
            {childElement}

            {isVisible && (
                <div
                    ref={tooltipRef}
                    className={`fixed z-[9999] py-2 px-3 text-sm rounded-md shadow-lg ${themeClasses[theme]} ${className}`}
                    style={{
                        top: `${coords.top}px`,
                        left: `${coords.left}px`,
                        maxWidth
                    }}
                >
                    {content}
                    <div className={getArrowClasses()} />
                </div>
            )}
        </>
    );
};

export default Tooltip;
