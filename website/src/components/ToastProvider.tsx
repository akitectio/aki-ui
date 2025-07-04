'use client'

import React from 'react'
import { createPortal } from 'react-dom'

interface ToastProviderProps {
    children: React.ReactNode
    position?: 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left'
    limit?: number
    gap?: 'sm' | 'md' | 'lg'
    className?: string
}

// Create a context for toast functionality
const ToastContext = React.createContext<{
    show: (options: any) => string;
    update: (id: string, options: any) => void;
    dismiss: (id: string) => void;
    dismissAll: () => void;
}>({
    show: () => '',
    update: () => { },
    dismiss: () => { },
    dismissAll: () => { },
});

// Hook to use toast functionality
export const useToast = () => React.useContext(ToastContext);

export function ToastProvider({
    children,
    position = 'top-right',
    limit = 10,
    gap = 'md',
    className = ''
}: ToastProviderProps) {
    // Create a container for the toasts in the client component
    const [toasts, setToasts] = React.useState<any[]>([]);
    const [container, setContainer] = React.useState<HTMLElement | null>(null);
    const [isMounted, setIsMounted] = React.useState(false);

    // Ensure we're mounted on the client before rendering
    React.useEffect(() => {
        setIsMounted(true);

        // Create container element
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
            // Safer cleanup - check if container exists and is child of body before removing
            const containerToRemove = document.getElementById('aki-toast-container');
            if (containerToRemove && containerToRemove.childElementCount === 0) {
                if (document.body.contains(containerToRemove)) {
                    try {
                        document.body.removeChild(containerToRemove);
                    } catch (error) {
                        // Silently handle case where container was already removed
                        console.debug('Toast container already removed:', error);
                    }
                }
            }
        };
    }, []);

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
    const handleToastClose = React.useCallback((id: string) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, []);

    // Context value
    const contextValue = React.useMemo(() => {
        return {
            show: (options: any) => {
                const id = `toast-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
                const newToast = {
                    ...options,
                    id,
                    onClose: (toastId: string) => {
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
            update: (id: string, options: any) => {
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
            {isMounted && container && document.body.contains(container) && createPortal(
                <div
                    className={`
                        fixed p-4 z-50 flex flex-col items-end
                        ${getPositionClasses()}
                        ${getGapClasses()}
                        ${className}
                    `}
                    aria-live="polite"
                >
                    {toasts.map((toast) => {
                        // Determine toast variant classes
                        let variantClasses = 'bg-white dark:bg-gray-800 border-l-4 border-blue-500';

                        if (toast.variant === 'success') {
                            variantClasses = 'bg-white dark:bg-gray-800 border-l-4 border-green-500';
                        } else if (toast.variant === 'error') {
                            variantClasses = 'bg-white dark:bg-gray-800 border-l-4 border-red-500';
                        } else if (toast.variant === 'warning') {
                            variantClasses = 'bg-white dark:bg-gray-800 border-l-4 border-yellow-500';
                        } else if (toast.variant === 'info') {
                            variantClasses = 'bg-white dark:bg-gray-800 border-l-4 border-blue-500';
                        }

                        return (
                            <div
                                key={toast.id}
                                className={`shadow-lg rounded-lg p-4 mb-3 w-full max-w-md ${variantClasses}`}
                                role="alert"
                            >
                                <div className="flex items-start">
                                    <div className="flex-grow">
                                        {toast.title && (
                                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                                {toast.title}
                                            </h3>
                                        )}
                                        <div className="text-gray-700 dark:text-gray-300">
                                            {toast.message}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleToastClose(toast.id)}
                                        className="ml-4 text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                        aria-label="Close"
                                    >
                                        ×
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>,
                container
            )}
        </ToastContext.Provider>
    );
}
