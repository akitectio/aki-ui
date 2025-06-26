import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps {
    /**
     * Whether the modal is currently open
     */
    isOpen: boolean;

    /**
     * Callback function called when the modal should close
     */
    onClose: () => void;

    /**
     * The content of the modal
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the modal
     */
    className?: string;

    /**
     * The size of the modal
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';

    /**
     * Whether the modal should close when the escape key is pressed
     * @default true
     */
    closeOnEsc?: boolean;

    /**
     * Whether the modal should close when clicking the overlay
     * @default true
     */
    closeOnOverlayClick?: boolean;

    /**
     * Whether the modal is centered vertically
     * @default true
     */
    centered?: boolean;

    /**
     * Whether the modal has a close button in the top right corner
     * @default true
     */
    hasCloseButton?: boolean;

    /**
     * Whether to show a scrollbar when content overflows
     * @default true
     */
    scrollable?: boolean;

    /**
     * Whether the modal should have a backdrop
     * @default true
     */
    backdrop?: boolean | 'static';

    /**
     * Animation duration in milliseconds
     * @default 300
     */
    animationDuration?: number;
}

export interface ModalHeaderProps {
    /**
     * The content of the modal header
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the modal header
     */
    className?: string;

    /**
     * Callback function called when the close button is clicked
     */
    onClose?: () => void;

    /**
     * Whether the modal header has a close button
     * @default true
     */
    hasCloseButton?: boolean;
}

export interface ModalBodyProps {
    /**
     * The content of the modal body
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the modal body
     */
    className?: string;
}

export interface ModalFooterProps {
    /**
     * The content of the modal footer
     */
    children: React.ReactNode;

    /**
     * Additional CSS classes to apply to the modal footer
     */
    className?: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({
    children,
    className = '',
    onClose,
    hasCloseButton = true,
}) => {
    return (
        <div className={`
      px-6 py-4 border-b border-gray-200 dark:border-gray-700
      flex items-center justify-between
      ${className}
    `}>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {children}
            </h3>
            {hasCloseButton && (
                <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-200 rounded-lg p-1.5 ml-auto inline-flex items-center"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </button>
            )}
        </div>
    );
};

const ModalBody: React.FC<ModalBodyProps> = ({
    children,
    className = '',
}) => {
    return (
        <div className={`p-6 ${className}`}>
            {children}
        </div>
    );
};

const ModalFooter: React.FC<ModalFooterProps> = ({
    children,
    className = '',
}) => {
    return (
        <div className={`
      px-6 py-4 border-t border-gray-200 dark:border-gray-700
      flex flex-wrap justify-end gap-2
      ${className}
    `}>
            {children}
        </div>
    );
};

const Modal: React.FC<ModalProps> & {
    Header: typeof ModalHeader;
    Body: typeof ModalBody;
    Footer: typeof ModalFooter;
} = ({
    isOpen,
    onClose,
    children,
    className = '',
    size = 'md',
    closeOnEsc = true,
    closeOnOverlayClick = true,
    centered = true,
    hasCloseButton = true,
    scrollable = true,
    backdrop = true,
    animationDuration = 300,
}) => {
        const [isAnimating, setIsAnimating] = useState(false);
        const [isVisible, setIsVisible] = useState(false);
        const overlayRef = useRef<HTMLDivElement>(null);
        const modalRef = useRef<HTMLDivElement>(null);

        // Handle animation timing
        useEffect(() => {
            if (isOpen) {
                setIsAnimating(true);
                setIsVisible(true);
            } else {
                setIsAnimating(true);
                setTimeout(() => {
                    setIsVisible(false);
                    setIsAnimating(false);
                }, animationDuration);
            }
        }, [isOpen, animationDuration]);

        // Handle ESC key press
        useEffect(() => {
            const handleKeyDown = (event: KeyboardEvent) => {
                if (closeOnEsc && event.key === 'Escape' && isOpen) {
                    onClose();
                }
            };

            if (isOpen) {
                document.addEventListener('keydown', handleKeyDown);
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }

            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = ''; // Restore scrolling
            };
        }, [isOpen, closeOnEsc, onClose]);

        // Handle overlay click
        const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
            if (
                closeOnOverlayClick &&
                backdrop !== 'static' &&
                e.target === overlayRef.current
            ) {
                onClose();
            }
        };

        // Size classes
        const sizeClasses = {
            sm: 'max-w-sm',
            md: 'max-w-md',
            lg: 'max-w-lg',
            xl: 'max-w-xl',
            full: 'max-w-full mx-4',
        };

        // Animation classes
        const animationStyles = {
            overlay: {
                transition: `opacity ${animationDuration}ms ease-in-out`,
                opacity: isOpen ? 1 : 0,
            },
            modal: {
                transition: `transform ${animationDuration}ms ease-in-out, opacity ${animationDuration}ms ease-in-out`,
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(-10px)',
            },
        };

        // Create child props with access to onClose
        const childrenWithProps = React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                if (child.type === ModalHeader) {
                    return React.cloneElement(child, {
                        onClose: onClose,
                        hasCloseButton,
                    } as Partial<ModalHeaderProps>);
                }
                return child;
            }
            return child;
        });

        if (!isVisible && !isAnimating) {
            return null;
        }

        return createPortal(
            <div
                ref={overlayRef}
                className={`
        fixed inset-0 z-50 flex ${centered ? 'items-center' : 'items-start pt-16'} justify-center
        ${backdrop ? 'bg-black bg-opacity-50 dark:bg-opacity-70' : ''}
      `}
                onClick={handleOverlayClick}
                aria-modal="true"
                role="dialog"
                style={animationStyles.overlay}
            >
                <div
                    ref={modalRef}
                    className={`
          relative bg-white dark:bg-gray-800 rounded-lg shadow-xl
          ${sizeClasses[size]}
          w-full mx-4
          ${scrollable ? 'max-h-[calc(100vh-2rem)] overflow-hidden flex flex-col' : ''}
          ${className}
        `}
                    style={animationStyles.modal}
                >
                    {scrollable ? (
                        <>
                            {childrenWithProps[0]} {/* Header */}
                            <div className="overflow-y-auto flex-1">
                                {childrenWithProps.slice(1, -1)} {/* Body */}
                            </div>
                            {childrenWithProps[childrenWithProps.length - 1]} {/* Footer */}
                        </>
                    ) : (
                        childrenWithProps
                    )}
                </div>
            </div>,
            document.body
        );
    };

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
