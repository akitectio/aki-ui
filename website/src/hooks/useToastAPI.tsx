'use client'

import { useToast } from '@/components/ToastProvider'

// Export a hook for using toasts in client components
export function useToastAPI() {
    const toast = useToast()

    return {
        show: toast.show,
        success: (message: React.ReactNode, options?: any) =>
            toast.show({ message, variant: 'success', ...options }),
        error: (message: React.ReactNode, options?: any) =>
            toast.show({ message, variant: 'error', ...options }),
        warning: (message: React.ReactNode, options?: any) =>
            toast.show({ message, variant: 'warning', ...options }),
        info: (message: React.ReactNode, options?: any) =>
            toast.show({ message, variant: 'info', ...options }),
        update: toast.update,
        dismiss: toast.dismiss,
        dismissAll: toast.dismissAll,
    }
}

export default useToastAPI
