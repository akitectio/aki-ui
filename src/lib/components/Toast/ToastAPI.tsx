import { useToast } from './Toast';
import type { ToastContextValue } from './Toast';

// Create a simple toast API using the context
export const createToastAPI = (context: ToastContextValue) => ({
    show: (options: Parameters<ToastContextValue['show']>[0]) => context.show(options),
    success: (message: React.ReactNode, options?: Omit<Parameters<ToastContextValue['show']>[0], 'message' | 'variant'>) =>
        context.show({ message, variant: 'success', ...options }),
    error: (message: React.ReactNode, options?: Omit<Parameters<ToastContextValue['show']>[0], 'message' | 'variant'>) =>
        context.show({ message, variant: 'error', ...options }),
    warning: (message: React.ReactNode, options?: Omit<Parameters<ToastContextValue['show']>[0], 'message' | 'variant'>) =>
        context.show({ message, variant: 'warning', ...options }),
    info: (message: React.ReactNode, options?: Omit<Parameters<ToastContextValue['show']>[0], 'message' | 'variant'>) =>
        context.show({ message, variant: 'info', ...options }),
    update: (id: string, options: Parameters<ToastContextValue['update']>[1]) =>
        context.update(id, options),
    dismiss: (id: string) => context.dismiss(id),
    dismissAll: () => context.dismissAll(),
});

// Hook to get the toast API
export const useToastAPI = () => {
    const context = useToast();
    return createToastAPI(context);
};

export default useToastAPI;
