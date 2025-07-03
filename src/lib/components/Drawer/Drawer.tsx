import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';

export interface DrawerProps {
    /**
     * Whether the drawer is open
     */
    isOpen?: boolean;

    /**
     * Called when the drawer should close
     */
    onClose?: () => void;

    /**
     * The placement of the drawer
     * @default 'right'
     */
    placement?: 'left' | 'right' | 'top' | 'bottom';

    /**
     * The size of the drawer
     * @default 'md'
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

    /**
     * The title of the drawer
     */
    title?: React.ReactNode;

    /**
     * The content of the drawer
     */
    children: React.ReactNode;

    /**
     * The footer content of the drawer
     */
    footer?: React.ReactNode;

    /**
     * Whether to show the close button
     * @default true
     */
    closeButton?: boolean;

    /**
     * Whether to close the drawer when clicking outside
     * @default true
     */
    closeOnOverlayClick?: boolean;

    /**
     * Whether to close the drawer when pressing the escape key
     * @default true
     */
    closeOnEsc?: boolean;

    /**
     * Whether to disable scrolling of the background content when the drawer is open
     * @default true
     */
    lockScroll?: boolean;

    /**
     * Whether to show an overlay behind the drawer
     * @default true
     */
    hasOverlay?: boolean;

    /**
     * The z-index of the drawer
     * @default 1000
     */
    zIndex?: number;

    /**
     * Additional CSS classes for the drawer
     */
    className?: string;

    /**
     * Additional CSS classes for the drawer overlay
     */
    overlayClassName?: string;

    /**
     * Whether the drawer should be closed after a delay (in ms)
     */
    autoClose?: number;

    /**
     * The id of the drawer
     */
    id?: string;

    /**
     * Additional props for the drawer
     */
    [key: string]: any;
}

export interface DrawerRef {
    /**
     * Open the drawer
     */
    open: () => void;

    /**
     * Close the drawer
     */
    close: () => void;

    /**
     * Toggle the drawer open/closed state
     */
    toggle: () => void;
}

export interface DrawerHeaderProps {
    /**
     * The title of the drawer
     */
    title?: React.ReactNode;

    /**
     * Whether to show the close button
     */
    closeButton?: boolean;

    /**
     * Called when the close button is clicked
     */
    onClose?: () => void;

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * ID for the title element
     */
    id?: string;
}

export interface DrawerBodyProps {
    /**
     * The content of the drawer body
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes
     */
    className?: string;
}

export interface DrawerFooterProps {
    /**
     * The content of the drawer footer
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes
     */
    className?: string;
}

// DrawerHeader component
export const DrawerHeader: React.FC<DrawerHeaderProps> = ({
    title,
    closeButton = true,
    onClose,
    className = '',
}) => {
    return (
        <div className={`
            px-6 py-4
            border-b border-gray-200
            flex items-center justify-between
            ${className}
        `}>
            <h2 className="text-lg font-medium text-gray-900">
                {title}
            </h2>
            {closeButton && (
                <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={onClose}
                    aria-label="Close drawer"
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
        </div>
    );
};

// DrawerBody component
export const DrawerBody: React.FC<DrawerBodyProps> = ({
    children,
    className = '',
}) => {
    return (
        <div className={`
            flex-1 px-6 py-4
            overflow-y-auto
            ${className}
        `}>
            {children}
        </div>
    );
};

// DrawerFooter component
export const DrawerFooter: React.FC<DrawerFooterProps> = ({
    children,
    className = '',
}) => {
    return (
        <div className={`
            px-6 py-4
            border-t border-gray-200
            ${className}
        `}>
            {children}
        </div>
    );
};

// Drawer component
const Drawer = forwardRef<DrawerRef, DrawerProps>(({
    isOpen = false,
    onClose,
    placement = 'right',
    size = 'md',
    title,
    children,
    footer,
    closeButton = true,
    closeOnOverlayClick = true,
    closeOnEsc = true,
    lockScroll = true,
    hasOverlay = true,
    zIndex = 1000,
    className = '',
    overlayClassName = '',
    autoClose,
    id,
    ...rest
}, ref) => {
    // State for internal open/close status
    const [isVisible, setIsVisible] = useState<boolean>(isOpen);
    const drawerRef = useRef<HTMLDivElement>(null);

    // Update internal state when prop changes
    useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);

    // Handle auto close
    useEffect(() => {
        if (isVisible && autoClose) {
            const timer = setTimeout(() => {
                handleClose();
            }, autoClose);

            return () => clearTimeout(timer);
        }
    }, [isVisible, autoClose]);

    // Handle ESC key press
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (closeOnEsc && event.key === 'Escape' && isVisible) {
                handleClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [closeOnEsc, isVisible]);

    // Handle body scroll lock
    useEffect(() => {
        if (lockScroll) {
            if (isVisible) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isVisible, lockScroll]);

    // Expose methods via ref
    useImperativeHandle(ref, () => ({
        open: () => setIsVisible(true),
        close: () => handleClose(),
        toggle: () => setIsVisible(prev => !prev),
    }));

    const handleClose = () => {
        setIsVisible(false);
        onClose?.();
    };

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (closeOnOverlayClick && event.target === event.currentTarget) {
            handleClose();
        }
    };

    // Size classes
    const sizeClasses: Record<string, Record<string, string>> = {
        xs: {
            left: 'w-64',
            right: 'w-64',
            top: 'h-32',
            bottom: 'h-32',
        },
        sm: {
            left: 'w-80',
            right: 'w-80',
            top: 'h-48',
            bottom: 'h-48',
        },
        md: {
            left: 'w-96',
            right: 'w-96',
            top: 'h-64',
            bottom: 'h-64',
        },
        lg: {
            left: 'w-1/3',
            right: 'w-1/3',
            top: 'h-96',
            bottom: 'h-96',
        },
        xl: {
            left: 'w-1/2',
            right: 'w-1/2',
            top: 'h-1/2',
            bottom: 'h-1/2',
        },
        full: {
            left: 'w-full',
            right: 'w-full',
            top: 'h-full',
            bottom: 'h-full',
        },
    };

    // Placement classes
    const placementClasses: Record<string, string> = {
        left: isVisible ? 'translate-x-0' : '-translate-x-full',
        right: isVisible ? 'translate-x-0' : 'translate-x-full',
        top: isVisible ? 'translate-y-0' : '-translate-y-full',
        bottom: isVisible ? 'translate-y-0' : 'translate-y-full',
    };

    const placementStyles: Record<string, React.CSSProperties> = {
        left: { left: 0, top: 0, bottom: 0 },
        right: { right: 0, top: 0, bottom: 0 },
        top: { top: 0, left: 0, right: 0 },
        bottom: { bottom: 0, left: 0, right: 0 },
    };

    // Drawer class names
    const drawerClasses = `
        fixed
        ${sizeClasses[size] && placement ? sizeClasses[size][placement] : ''}
        bg-white
        shadow-xl
        flex
        flex-col
        transform
        transition-transform
        duration-300
        ease-in-out
        ${placement && placementClasses[placement] ? placementClasses[placement] : ''}
        ${className}
    `;

    // Overlay class names
    const overlayClasses = `
        fixed
        inset-0
        bg-black
        bg-opacity-50
        transition-opacity
        duration-300
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        ${overlayClassName}
    `;

    // Generate unique ID if not provided
    const drawerId = id || `drawer-${Math.random().toString(36).substring(2, 9)}`;

    // Don't render if it's not open and not transitioning
    if (!isVisible && !isOpen) {
        return null;
    }

    return (
        <div
            className="drawer-container"
            style={{ position: 'fixed', inset: 0, zIndex, display: isVisible ? 'block' : 'none' }}
            aria-hidden={!isVisible}
        >
            {/* Overlay */}
            {hasOverlay && (
                <div
                    className={overlayClasses}
                    onClick={handleOverlayClick}
                    aria-hidden="true"
                />
            )}

            {/* Drawer */}
            <div
                ref={drawerRef}
                id={drawerId}
                className={drawerClasses}
                style={placementStyles[placement || 'right']}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? `${drawerId}-title` : undefined}
                {...rest}
            >
                {/* Drawer Header */}
                {(title || closeButton) && (
                    <DrawerHeader
                        title={title}
                        closeButton={closeButton}
                        onClose={handleClose}
                        id={title ? `${drawerId}-title` : undefined}
                    />
                )}

                {/* Drawer Body */}
                <DrawerBody>
                    {children}
                </DrawerBody>

                {/* Drawer Footer */}
                {footer && (
                    <DrawerFooter>
                        {footer}
                    </DrawerFooter>
                )}
            </div>
        </div>
    );
});

Drawer.displayName = 'Drawer';
DrawerHeader.displayName = 'DrawerHeader';
DrawerBody.displayName = 'DrawerBody';
DrawerFooter.displayName = 'DrawerFooter';

export default Drawer;
