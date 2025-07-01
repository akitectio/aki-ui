import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

export type ToastPosition =
    | 'top'
    | 'top-right'
    | 'top-left'
    | 'bottom'
    | 'bottom-right'
    | 'bottom-left';

export type ToastVariant =
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'default';

export interface ToastProps {
    /**
     * Unique ID for the toast
     */
    id: string;

    /**
     * The message to display
     */
    message: React.ReactNode;

    /**
     * Title of the toast
     */
    title?: React.ReactNode;

    /**
     * Variant/type of the toast
     * @default 'default'
     */
    variant?: ToastVariant;

    /**
     * Auto close duration in milliseconds (0 to disable)
     * @default 5000
     */
    duration?: number;

    /**
     * Custom icon
     */
    icon?: React.ReactNode;

    /**
     * Whether the toast can be dismissed
     * @default true
     */
    dismissible?: boolean;

    /**
     * Whether to show a progress bar
     * @default true
     */
    showProgress?: boolean;

    /**
     * Called when the toast is closed
     */
    onClose?: (id: string) => void;

    /**
     * Called when the toast is clicked
     */
    onClick?: (id: string) => void;

    /**
     * Pause timer on hover
     * @default true
     */
    pauseOnHover?: boolean;

    /**
     * Additional CSS classes
     */
    className?: string;
}

export interface ToastContainerProps {
    /**
     * Position of the toast container
     * @default 'top-right'
     */
    position?: ToastPosition;

    /**
     * Limit the number of toasts shown at once
     * @default 10
     */
    limit?: number;

    /**
     * Gap between toasts
     * @default 'md'
     */
    gap?: 'sm' | 'md' | 'lg';

    /**
     * Additional CSS classes
     */
    className?: string;
}

// Context for the toast system
export interface ToastContextValue {
    show: (options: Omit<ToastProps, 'id'>) => string;
    update: (id: string, options: Partial<Omit<ToastProps, 'id'>>) => void;
    dismiss: (id: string) => void;
    dismissAll: () => void;
}

export const ToastContext = React.createContext<ToastContextValue | undefined>(undefined);

// Hook for using the toast context
export const useToast = (): ToastContextValue => {
    const context = React.useContext(ToastContext);

    // If no context, check the environment
    if (!context) {
        // Always return a no-op implementation instead of throwing errors
        // This makes the hook more resilient and SSR-safe
        if (typeof window === 'undefined') {
            // Return a no-op implementation for SSR
            return {
                show: () => '',
                update: () => { },
                dismiss: () => { },
                dismissAll: () => { },
            };
        } else {
            // On the client, return a fallback that logs a warning instead of throwing
            console.warn('useToast: ToastProvider not found. Toast functionality will be disabled. Please wrap your app with ToastProvider.');
            return {
                show: () => '',
                update: () => { },
                dismiss: () => { },
                dismissAll: () => { },
            };
        }
    }
    return context;
};

// Individual Toast component
const ToastComponent: React.FC<ToastProps> = ({
    id,
    title,
    message,
    variant = 'default',
    duration = 5000,
    icon,
    dismissible = true,
    showProgress = true,
    onClose,
    onClick,
    pauseOnHover = true,
    className = '',
}) => {
    const [progress, setProgress] = useState(100);
    const [isPaused, setIsPaused] = useState(false);
    const [visible, setVisible] = useState(true);

    // Handle close event
    const handleClose = useCallback(() => {
        setVisible(false);
        // Add some delay for animation
        setTimeout(() => {
            if (onClose) {
                onClose(id);
            }
        }, 300);
    }, [id, onClose]);

    // Handle auto close
    useEffect(() => {
        if (duration === 0 || isPaused) return;

        const startTime = Date.now();
        const endTime = startTime + duration;

        const timer = setInterval(() => {
            const now = Date.now();
            const remaining = endTime - now;
            const newProgress = (remaining / duration) * 100;

            if (remaining <= 0) {
                clearInterval(timer);
                handleClose();
            } else {
                setProgress(newProgress);
            }
        }, 10);

        return () => clearInterval(timer);
    }, [duration, handleClose, isPaused]);

    // Handle mouse events for pausing
    const handleMouseEnter = useCallback(() => {
        if (pauseOnHover) {
            setIsPaused(true);
        }
    }, [pauseOnHover]);

    const handleMouseLeave = useCallback(() => {
        if (pauseOnHover) {
            setIsPaused(false);
        }
    }, [pauseOnHover]);

    // Handle click event
    const handleClick = useCallback(() => {
        if (onClick) {
            onClick(id);
        }
    }, [id, onClick]);

    // Variant styles
    const getVariantClasses = () => {
        switch (variant) {
            case 'info':
                return 'bg-blue-50 border-blue-500 text-blue-700';
            case 'success':
                return 'bg-green-50 border-green-500 text-green-700';
            case 'warning':
                return 'bg-yellow-50 border-yellow-500 text-yellow-700';
            case 'error':
                return 'bg-red-50 border-red-500 text-red-700';
            default:
                return 'bg-white border-gray-200 text-gray-700';
        }
    };

    // Progress bar color
    const getProgressColor = () => {
        switch (variant) {
            case 'info':
                return 'bg-blue-500';
            case 'success':
                return 'bg-green-500';
            case 'warning':
                return 'bg-yellow-500';
            case 'error':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    // Default icons based on variant
    const getDefaultIcon = () => {
        if (icon) return icon;

        switch (variant) {
            case 'info':
                return (
                    <svg className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                );
            case 'success':
                return (
                    <svg className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                );
            case 'warning':
                return (
                    <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                );
            case 'error':
                return (
                    <svg className="w-5 h-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div
            className={`
        ${visible ? 'animate-toast-in' : 'animate-toast-out opacity-0 transform translate-x-full'}
        max-w-md w-full shadow-lg rounded-lg border-l-4 overflow-hidden
        ${getVariantClasses()}
        transition-all duration-300 ease-in-out
        ${className}
      `}
            role="alert"
            aria-live="assertive"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <div className="p-4 relative">
                <div className="flex items-start">
                    {(icon || getDefaultIcon()) && (
                        <div className="flex-shrink-0 mr-3">
                            {icon || getDefaultIcon()}
                        </div>
                    )}
                    <div className="flex-1">
                        {title && (
                            <h4 className="text-sm font-medium mb-1">{title}</h4>
                        )}
                        <div className="text-sm">{message}</div>
                    </div>
                    {dismissible && (
                        <button
                            type="button"
                            className="ml-4 text-gray-400 hover:text-gray-600 focus:outline-none"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClose();
                            }}
                            aria-label="Close"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {showProgress && duration > 0 && (
                <div
                    className={`h-1 ${getProgressColor()}`}
                    style={{ width: `${progress}%`, transition: isPaused ? 'none' : 'width 0.1s linear' }}
                />
            )}
        </div>
    );
};

// Toast Container component
export const ToastContainer: React.FC<ToastContainerProps> = ({
    position = 'top-right',
    limit = 10,
    gap = 'md',
    className = '',
}) => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);
    const [container, setContainer] = useState<HTMLElement | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    // Ensure we're mounted on the client before rendering
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Create container element
    useEffect(() => {
        if (!isMounted) return; // Only run on client

        const existingContainer = document.getElementById('aki-toast-container');
        if (existingContainer) {
            setContainer(existingContainer);
        } else {
            const newContainer = document.createElement('div');
            newContainer.id = 'aki-toast-container';
            document.body.appendChild(newContainer);
            setContainer(newContainer);
        }

        return () => {
            const containerToRemove = document.getElementById('aki-toast-container');
            if (containerToRemove && containerToRemove.childElementCount === 0) {
                document.body.removeChild(containerToRemove);
            }
        };
    }, [isMounted]);

    // Position classes
    const getPositionClasses = () => {
        switch (position) {
            case 'top':
                return 'top-0 left-1/2 transform -translate-x-1/2';
            case 'top-right':
                return 'top-0 right-0';
            case 'top-left':
                return 'top-0 left-0';
            case 'bottom':
                return 'bottom-0 left-1/2 transform -translate-x-1/2';
            case 'bottom-right':
                return 'bottom-0 right-0';
            case 'bottom-left':
                return 'bottom-0 left-0';
            default:
                return 'top-0 right-0';
        }
    };

    // Gap classes
    const getGapClasses = () => {
        switch (gap) {
            case 'sm': return 'space-y-2';
            case 'md': return 'space-y-3';
            case 'lg': return 'space-y-4';
            default: return 'space-y-3';
        }
    };

    // Handle toast close
    const handleToastClose = useCallback((id: string) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, []);

    // Context value
    const contextValue = React.useMemo<ToastContextValue>(() => {
        return {
            show: (options) => {
                const id = `toast-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
                const newToast: ToastProps = {
                    ...options,
                    id,
                    onClose: (toastId) => {
                        handleToastClose(toastId);
                        if (options.onClose) {
                            options.onClose(toastId);
                        }
                    },
                };

                setToasts((prevToasts) => {
                    // Respect the limit
                    const updatedToasts = [...prevToasts, newToast];
                    return updatedToasts.slice(-limit);
                });

                return id;
            },
            update: (id, options) => {
                setToasts((prevToasts) =>
                    prevToasts.map((toast) =>
                        toast.id === id ? { ...toast, ...options } : toast
                    )
                );
            },
            dismiss: handleToastClose,
            dismissAll: () => {
                setToasts([]);
            },
        };
    }, [handleToastClose, limit]);

    // If not mounted or no container, don't render
    if (!isMounted || !container) return null;

    return createPortal(
        <ToastContext.Provider value={contextValue}>
            <div
                className={`
          fixed p-4 z-50 flex flex-col items-end
          ${getPositionClasses()}
          ${getGapClasses()}
          ${className}
        `}
                aria-live="polite"
            >
                {toasts.map((toast) => (
                    <ToastComponent key={toast.id} {...toast} />
                ))}
            </div>
        </ToastContext.Provider>,
        container
    );
};

// Toast Provider component that properly provides context
export const ToastProvider: React.FC<ToastContainerProps & { children: React.ReactNode }> = ({
    children,
    position = 'top-right',
    limit = 10,
    gap = 'md',
    className = '',
}) => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);
    const [container, setContainer] = useState<HTMLElement | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    // Ensure we're mounted on the client before rendering
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Create container element
    useEffect(() => {
        if (!isMounted) return; // Only run on client

        const existingContainer = document.getElementById('aki-toast-container');
        if (existingContainer) {
            setContainer(existingContainer);
        } else {
            const newContainer = document.createElement('div');
            newContainer.id = 'aki-toast-container';
            document.body.appendChild(newContainer);
            setContainer(newContainer);
        }

        return () => {
            const containerToRemove = document.getElementById('aki-toast-container');
            if (containerToRemove && containerToRemove.childElementCount === 0) {
                document.body.removeChild(containerToRemove);
            }
        };
    }, [isMounted]);

    // Position classes
    const getPositionClasses = () => {
        switch (position) {
            case 'top':
                return 'top-0 left-1/2 transform -translate-x-1/2';
            case 'top-right':
                return 'top-0 right-0';
            case 'top-left':
                return 'top-0 left-0';
            case 'bottom':
                return 'bottom-0 left-1/2 transform -translate-x-1/2';
            case 'bottom-right':
                return 'bottom-0 right-0';
            case 'bottom-left':
                return 'bottom-0 left-0';
            default:
                return 'top-0 right-0';
        }
    };

    // Gap classes
    const getGapClasses = () => {
        switch (gap) {
            case 'sm': return 'space-y-2';
            case 'md': return 'space-y-3';
            case 'lg': return 'space-y-4';
            default: return 'space-y-3';
        }
    };

    // Handle toast close
    const handleToastClose = useCallback((id: string) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, []);

    // Context value
    const contextValue = React.useMemo<ToastContextValue>(() => {
        return {
            show: (options) => {
                const id = `toast-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
                const newToast: ToastProps = {
                    ...options,
                    id,
                    onClose: (toastId) => {
                        handleToastClose(toastId);
                        if (options.onClose) {
                            options.onClose(toastId);
                        }
                    },
                };

                setToasts((prevToasts) => {
                    // Respect the limit
                    const updatedToasts = [...prevToasts, newToast];
                    return updatedToasts.slice(-limit);
                });

                return id;
            },
            update: (id, options) => {
                setToasts((prevToasts) =>
                    prevToasts.map((toast) =>
                        toast.id === id ? { ...toast, ...options } : toast
                    )
                );
            },
            dismiss: handleToastClose,
            dismissAll: () => {
                setToasts([]);
            },
        };
    }, [handleToastClose, limit]);

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            {isMounted && container && createPortal(
                <div
                    className={`
                        fixed p-4 z-50 flex flex-col items-end
                        ${getPositionClasses()}
                        ${getGapClasses()}
                        ${className}
                    `}
                    aria-live="polite"
                >
                    {toasts.map((toast) => (
                        <ToastComponent key={toast.id} {...toast} />
                    ))}
                </div>,
                container
            )}
        </ToastContext.Provider>
    );
};

// Export the default Toast component and ToastComponent
export default ToastComponent;
