import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

export type PopoverPlacement =
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end';

export type PopoverTrigger = 'click' | 'hover' | 'focus' | 'manual';

export interface PopoverProps {
    /**
     * The content of the popover
     */
    content: React.ReactNode;

    /**
     * The element that triggers the popover
     */
    children: React.ReactNode;

    /**
     * The placement of the popover relative to the trigger element
     * @default 'bottom'
     */
    placement?: PopoverPlacement;

    /**
     * How the popover is triggered
     * @default 'click'
     */
    trigger?: PopoverTrigger;

    /**
     * Whether the popover is open or not (controlled)
     */
    isOpen?: boolean;

    /**
     * Default open state (uncontrolled)
     * @default false
     */
    defaultOpen?: boolean;

    /**
     * Called when the popover open state changes
     */
    onOpenChange?: (isOpen: boolean) => void;

    /**
     * Offset from the trigger element in pixels
     * @default 8
     */
    offset?: number;

    /**
     * Delay in ms before showing the popover (hover trigger only)
     * @default 0
     */
    showDelay?: number;

    /**
     * Delay in ms before hiding the popover (hover trigger only)
     * @default 0
     */
    hideDelay?: number;

    /**
     * Whether to close the popover when clicking outside
     * @default true
     */
    closeOnOutsideClick?: boolean;

    /**
     * Whether to close when the escape key is pressed
     * @default true
     */
    closeOnEsc?: boolean;

    /**
     * Additional CSS classes for the popover
     */
    className?: string;

    /**
     * Whether to show an arrow pointing to the trigger element
     * @default false
     */
    hasArrow?: boolean;

    /**
     * z-index of the popover
     * @default 1000
     */
    zIndex?: number;

    /**
     * Maximum width of the popover
     * @default '20rem'
     */
    maxWidth?: string | number;

    /**
     * Whether to allow the popover to flip its placement when it would overflow the viewport
     * @default true
     */
    flip?: boolean;

    /**
     * Whether to prevent the popover from being clipped by scrolling containers
     * @default true
     */
    preventOverflow?: boolean;

    /**
     * ID for the popover
     */
    id?: string;
}

export interface PopoverRef {
    /**
     * Open the popover
     */
    open: () => void;

    /**
     * Close the popover
     */
    close: () => void;

    /**
     * Toggle the popover open/closed state
     */
    toggle: () => void;
}

const Popover = forwardRef<PopoverRef, PopoverProps>(({
    content,
    children,
    placement = 'bottom',
    trigger = 'click',
    isOpen: controlledIsOpen,
    defaultOpen = false,
    onOpenChange,
    offset = 8,
    showDelay = 0,
    hideDelay = 0,
    closeOnOutsideClick = true,
    closeOnEsc = true,
    className = '',
    hasArrow = false,
    zIndex = 1000,
    maxWidth = '20rem',
    flip = true,
    preventOverflow = true,
    id,
}, ref) => {
    // State for internal open/close status
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
    const triggerRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Track if we're in controlled or uncontrolled mode
    const isControlled = controlledIsOpen !== undefined;
    const isVisible = isControlled ? controlledIsOpen : isOpen;

    // Calculate position for the popover
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [arrowPosition, setArrowPosition] = useState({ top: 0, left: 0 });

    // Generate unique ID if not provided
    const popoverId = id || `popover-${Math.random().toString(36).substring(2, 9)}`;

    // Expose methods via ref
    useImperativeHandle(ref, () => ({
        open: () => handleOpen(),
        close: () => handleClose(),
        toggle: () => handleToggle(),
    }));

    // Function to handle opening the popover
    const handleOpen = () => {
        if (!isControlled) {
            setIsOpen(true);
        }
        onOpenChange?.(true);
    };

    // Function to handle closing the popover
    const handleClose = () => {
        if (!isControlled) {
            setIsOpen(false);
        }
        onOpenChange?.(false);
    };

    // Function to toggle the popover
    const handleToggle = () => {
        if (isControlled) {
            onOpenChange?.(!controlledIsOpen);
        } else {
            setIsOpen((prev) => {
                onOpenChange?.(!prev);
                return !prev;
            });
        }
    };

    // Clear any pending timeouts
    const clearTimeouts = () => {
        if (showTimeoutRef.current) {
            clearTimeout(showTimeoutRef.current);
            showTimeoutRef.current = null;
        }
        if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
            hideTimeoutRef.current = null;
        }
    };

    // Handle delayed show
    const handleDelayedShow = () => {
        clearTimeouts();
        if (showDelay) {
            showTimeoutRef.current = setTimeout(handleOpen, showDelay);
        } else {
            handleOpen();
        }
    };

    // Handle delayed hide
    const handleDelayedHide = () => {
        clearTimeouts();
        if (hideDelay) {
            hideTimeoutRef.current = setTimeout(handleClose, hideDelay);
        } else {
            handleClose();
        }
    };

    // Handle click events for the trigger
    const handleClick = () => {
        if (trigger === 'click' || trigger === 'manual') {
            handleToggle();
        }
    };

    // Handle mouse enter events for the trigger
    const handleMouseEnter = () => {
        if (trigger === 'hover') {
            handleDelayedShow();
        }
    };

    // Handle mouse leave events for the trigger
    const handleMouseLeave = () => {
        if (trigger === 'hover') {
            handleDelayedHide();
        }
    };

    // Handle focus events for the trigger
    const handleFocus = () => {
        if (trigger === 'focus') {
            handleOpen();
        }
    };

    // Handle blur events for the trigger
    const handleBlur = () => {
        if (trigger === 'focus') {
            handleClose();
        }
    };

    // Handle outside clicks
    useEffect(() => {
        if (!isVisible || !closeOnOutsideClick) return;

        const handleOutsideClick = (event: MouseEvent) => {
            if (
                popoverRef.current &&
                triggerRef.current &&
                !popoverRef.current.contains(event.target as Node) &&
                !triggerRef.current.contains(event.target as Node)
            ) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isVisible, closeOnOutsideClick]);

    // Handle escape key
    useEffect(() => {
        if (!isVisible || !closeOnEsc) return;

        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isVisible, closeOnEsc]);

    // Clean up timeouts on unmount
    useEffect(() => {
        return () => {
            clearTimeouts();
        };
    }, []);

    // Calculate positions when the popover opens or the trigger element moves
    useEffect(() => {
        if (!isVisible || !triggerRef.current) return;

        const updatePosition = () => {
            const triggerRect = triggerRef.current?.getBoundingClientRect();
            const popoverRect = popoverRef.current?.getBoundingClientRect();

            if (!triggerRect || !popoverRect) return;

            let top = 0;
            let left = 0;
            let arrowTop = 0;
            let arrowLeft = 0;

            // Calculate position based on placement
            switch (placement) {
                case 'top':
                    top = triggerRect.top - popoverRect.height - offset;
                    left = triggerRect.left + (triggerRect.width / 2) - (popoverRect.width / 2);
                    arrowTop = popoverRect.height;
                    arrowLeft = popoverRect.width / 2;
                    break;
                case 'top-start':
                    top = triggerRect.top - popoverRect.height - offset;
                    left = triggerRect.left;
                    arrowTop = popoverRect.height;
                    arrowLeft = Math.min(triggerRect.width / 2, 20);
                    break;
                case 'top-end':
                    top = triggerRect.top - popoverRect.height - offset;
                    left = triggerRect.right - popoverRect.width;
                    arrowTop = popoverRect.height;
                    arrowLeft = popoverRect.width - Math.min(triggerRect.width / 2, 20);
                    break;
                case 'bottom':
                    top = triggerRect.bottom + offset;
                    left = triggerRect.left + (triggerRect.width / 2) - (popoverRect.width / 2);
                    arrowTop = -8;
                    arrowLeft = popoverRect.width / 2;
                    break;
                case 'bottom-start':
                    top = triggerRect.bottom + offset;
                    left = triggerRect.left;
                    arrowTop = -8;
                    arrowLeft = Math.min(triggerRect.width / 2, 20);
                    break;
                case 'bottom-end':
                    top = triggerRect.bottom + offset;
                    left = triggerRect.right - popoverRect.width;
                    arrowTop = -8;
                    arrowLeft = popoverRect.width - Math.min(triggerRect.width / 2, 20);
                    break;
                case 'left':
                    top = triggerRect.top + (triggerRect.height / 2) - (popoverRect.height / 2);
                    left = triggerRect.left - popoverRect.width - offset;
                    arrowTop = popoverRect.height / 2;
                    arrowLeft = popoverRect.width;
                    break;
                case 'left-start':
                    top = triggerRect.top;
                    left = triggerRect.left - popoverRect.width - offset;
                    arrowTop = Math.min(triggerRect.height / 2, 20);
                    arrowLeft = popoverRect.width;
                    break;
                case 'left-end':
                    top = triggerRect.bottom - popoverRect.height;
                    left = triggerRect.left - popoverRect.width - offset;
                    arrowTop = popoverRect.height - Math.min(triggerRect.height / 2, 20);
                    arrowLeft = popoverRect.width;
                    break;
                case 'right':
                    top = triggerRect.top + (triggerRect.height / 2) - (popoverRect.height / 2);
                    left = triggerRect.right + offset;
                    arrowTop = popoverRect.height / 2;
                    arrowLeft = -8;
                    break;
                case 'right-start':
                    top = triggerRect.top;
                    left = triggerRect.right + offset;
                    arrowTop = Math.min(triggerRect.height / 2, 20);
                    arrowLeft = -8;
                    break;
                case 'right-end':
                    top = triggerRect.bottom - popoverRect.height;
                    left = triggerRect.right + offset;
                    arrowTop = popoverRect.height - Math.min(triggerRect.height / 2, 20);
                    arrowLeft = -8;
                    break;
            }

            // Flip if necessary to prevent overflow
            if (flip) {
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;

                // Flip horizontally if needed
                if (left < 0) {
                    if (placement.startsWith('left')) {
                        // Flip from left to right
                        left = triggerRect.right + offset;
                        arrowLeft = -8;
                    } else {
                        // Just adjust to fit in viewport
                        left = 8;
                    }
                } else if (left + popoverRect.width > viewportWidth) {
                    if (placement.startsWith('right')) {
                        // Flip from right to left
                        left = triggerRect.left - popoverRect.width - offset;
                        arrowLeft = popoverRect.width;
                    } else {
                        // Just adjust to fit in viewport
                        left = viewportWidth - popoverRect.width - 8;
                    }
                }

                // Flip vertically if needed
                if (top < 0) {
                    if (placement.startsWith('top')) {
                        // Flip from top to bottom
                        top = triggerRect.bottom + offset;
                        arrowTop = -8;
                    } else {
                        // Just adjust to fit in viewport
                        top = 8;
                    }
                } else if (top + popoverRect.height > viewportHeight) {
                    if (placement.startsWith('bottom')) {
                        // Flip from bottom to top
                        top = triggerRect.top - popoverRect.height - offset;
                        arrowTop = popoverRect.height;
                    } else {
                        // Just adjust to fit in viewport
                        top = viewportHeight - popoverRect.height - 8;
                    }
                }
            }

            // Prevent overflow if needed
            if (preventOverflow) {
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;

                // Adjust horizontal position
                if (left < 8) {
                    left = 8;
                } else if (left + popoverRect.width > viewportWidth - 8) {
                    left = viewportWidth - popoverRect.width - 8;
                }

                // Adjust vertical position
                if (top < 8) {
                    top = 8;
                } else if (top + popoverRect.height > viewportHeight - 8) {
                    top = viewportHeight - popoverRect.height - 8;
                }
            }

            // Apply scroll position
            top += window.scrollY;
            left += window.scrollX;

            setPosition({ top, left });
            setArrowPosition({ top: arrowTop, left: arrowLeft });
        };

        // Update position immediately
        updatePosition();

        // Update position on resize and scroll
        window.addEventListener('resize', updatePosition);
        window.addEventListener('scroll', updatePosition);

        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition);
        };
    }, [isVisible, placement, offset, flip, preventOverflow]);

    // Set aria attributes on the trigger element
    const triggerProps = {
        ref: triggerRef,
        onClick: trigger === 'click' || trigger === 'manual' ? handleClick : undefined,
        onMouseEnter: trigger === 'hover' ? handleMouseEnter : undefined,
        onMouseLeave: trigger === 'hover' ? handleMouseLeave : undefined,
        onFocus: trigger === 'focus' ? handleFocus : undefined,
        onBlur: trigger === 'focus' ? handleBlur : undefined,
        'aria-describedby': isVisible ? popoverId : undefined,
    };

    // Prepare CSS for arrow based on placement
    const getArrowStyle = (): React.CSSProperties => {
        // Base style
        const style: React.CSSProperties = {
            position: 'absolute',
            width: '8px',
            height: '8px',
            transform: 'rotate(45deg)',
            backgroundColor: 'white',
            top: `${arrowPosition.top}px`,
            left: `${arrowPosition.left}px`,
        };

        // Add border based on placement
        if (placement.startsWith('top')) {
            style.borderRight = '1px solid rgba(0, 0, 0, 0.1)';
            style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
        } else if (placement.startsWith('bottom')) {
            style.borderLeft = '1px solid rgba(0, 0, 0, 0.1)';
            style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
        } else if (placement.startsWith('left')) {
            style.borderRight = '1px solid rgba(0, 0, 0, 0.1)';
            style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
        } else if (placement.startsWith('right')) {
            style.borderLeft = '1px solid rgba(0, 0, 0, 0.1)';
            style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
        }

        return style;
    };

    // Don't render the popover if it's not open
    const renderPopover = () => {
        if (!isVisible) return null;

        return createPortal(
            <div
                ref={popoverRef}
                id={popoverId}
                role="tooltip"
                className={`
                    popover-content
                    bg-white
                    shadow-lg
                    rounded-md
                    border
                    border-gray-200
                    p-3
                    ${className}
                `}
                style={{
                    position: 'absolute',
                    top: `${position.top}px`,
                    left: `${position.left}px`,
                    zIndex,
                    maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
                }}
            >
                {content}
                {hasArrow && <div style={getArrowStyle()} />}
            </div>,
            document.body
        );
    };

    return (
        <>
            {/* Trigger element */}
            <div className="popover-trigger inline-block" {...triggerProps}>
                {children}
            </div>

            {/* Popover content */}
            {renderPopover()}
        </>
    );
});

Popover.displayName = 'Popover';

export default Popover;
