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
        if (isControlled) {
            setIsVisible(visible);
        }
    }, [visible, isControlled]);

    useEffect(() => {
        if (isVisible) {
            updateTooltipPosition();
        }
    }, [isVisible, position]);

    useEffect(() => {
        const handleResize = () => {
            if (isVisible) {
                updateTooltipPosition();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isVisible]);

    const updateTooltipPosition = () => {
        if (!targetRef.current || !tooltipRef.current) return;

        const targetRect = targetRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();

        let top = 0;
        let left = 0;

        const scrollY = window.scrollY || window.pageYOffset;
        const scrollX = window.scrollX || window.pageXOffset;

        switch (position) {
            case 'top':
                top = targetRect.top + scrollY - tooltipRect.height - arrowSize;
                left = targetRect.left + scrollX + (targetRect.width - tooltipRect.width) / 2;
                break;
            case 'right':
                top = targetRect.top + scrollY + (targetRect.height - tooltipRect.height) / 2;
                left = targetRect.right + scrollX + arrowSize;
                break;
            case 'bottom':
                top = targetRect.bottom + scrollY + arrowSize;
                left = targetRect.left + scrollX + (targetRect.width - tooltipRect.width) / 2;
                break;
            case 'left':
                top = targetRect.top + scrollY + (targetRect.height - tooltipRect.height) / 2;
                left = targetRect.left + scrollX - tooltipRect.width - arrowSize;
                break;
        }

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

    const arrowPosition = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
    };

    const themeClasses = {
        dark: 'bg-gray-800 text-white',
        light: 'bg-white text-gray-800 border border-gray-200',
    };

    // Clone the child element to add our event handlers
    const childElement = React.cloneElement(children, {
        ref: (node: HTMLElement | null) => {
            targetRef.current = node;

            // Preserve the original ref if it exists
            const { ref } = children as any;
            if (typeof ref === 'function') {
                ref(node);
            } else if (ref !== null && ref !== undefined) {
                ref.current = node;
            }
        },
        ...getEventProps(),
    });

    return (
        <>
            {childElement}

            {isVisible && (
                <div
                    ref={tooltipRef}
                    className={`fixed z-50 py-1 px-2 text-sm rounded shadow-md ${themeClasses[theme]} ${className}`}
                    style={{
                        top: `${coords.top}px`,
                        left: `${coords.left}px`,
                        maxWidth
                    }}
                >
                    {content}
                    <div
                        className={`absolute w-0 h-0`}
                        style={{
                            [`border-${arrowPosition[position]}-width`]: `${arrowSize}px`,
                            [`border-${arrowPosition[position]}-style`]: 'solid',
                            [`border-${arrowPosition[position]}-color`]: theme === 'dark' ? '#1f2937' : '#fff',
                            borderWidth: arrowSize,
                            borderColor: 'transparent',
                            [`${arrowPosition[position]}`]: `-${arrowSize * 2}px`,
                            left: position === 'top' || position === 'bottom' ? '50%' : undefined,
                            top: position === 'left' || position === 'right' ? '50%' : undefined,
                            transform:
                                (position === 'top' || position === 'bottom') ? 'translateX(-50%)' :
                                    (position === 'left' || position === 'right') ? 'translateY(-50%)' :
                                        undefined
                        }}
                    />
                </div>
            )}
        </>
    );
};

export default Tooltip;
