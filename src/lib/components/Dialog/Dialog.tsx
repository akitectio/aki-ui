import React, { useEffect } from 'react';
import { cn } from '../../utils';

export interface DialogProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
}

export interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    className?: string;
    children: React.ReactNode;
}

export interface DialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    className?: string;
    children: React.ReactNode;
}

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export interface DialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
    asChild?: boolean;
}

const DialogContext = React.createContext<{
    open: boolean;
    onOpenChange: (open: boolean) => void;
}>({
    open: false,
    onOpenChange: () => { },
});

export const Dialog: React.FC<DialogProps> & {
    Trigger: React.FC<DialogTriggerProps>;
    Content: React.FC<DialogContentProps>;
    Header: React.FC<DialogHeaderProps>;
    Title: React.FC<DialogTitleProps>;
    Description: React.FC<DialogDescriptionProps>;
    Footer: React.FC<DialogFooterProps>;
} = ({ open = false, onOpenChange = () => { }, children }) => {
    return (
        <DialogContext.Provider value={{ open, onOpenChange }}>
            {children}
        </DialogContext.Provider>
    );
};

const DialogTrigger: React.FC<DialogTriggerProps> = ({
    children,
    className,
    asChild = false,
    onClick,
    ...props
}) => {
    const { onOpenChange } = React.useContext(DialogContext);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onOpenChange(true);
        onClick?.(event);
    };

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
            onClick: handleClick,
        } as any);
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className={className}
            {...props}
        >
            {children}
        </button>
    );
};

const DialogContent: React.FC<DialogContentProps> = ({
    children,
    className,
    ...props
}) => {
    const { open, onOpenChange } = React.useContext(DialogContext);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onOpenChange(false);
            }
        };

        if (open) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [open, onOpenChange]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50"
                onClick={() => onOpenChange(false)}
            />

            {/* Dialog */}
            <div
                className={cn(
                    'relative z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200 animate-in fade-in-0 zoom-in-95 sm:rounded-lg',
                    className
                )}
                role="dialog"
                aria-modal="true"
                {...props}
            >
                {children}

                {/* Close button */}
                <button
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
                    onClick={() => onOpenChange(false)}
                >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="sr-only">Close</span>
                </button>
            </div>
        </div>
    );
};

const DialogHeader: React.FC<DialogHeaderProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div
            className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
            {...props}
        >
            {children}
        </div>
    );
};

const DialogTitle: React.FC<DialogTitleProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <h3
            className={cn('text-lg font-semibold leading-none tracking-tight', className)}
            {...props}
        >
            {children}
        </h3>
    );
};

const DialogDescription: React.FC<DialogDescriptionProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <p
            className={cn('text-sm text-muted-foreground', className)}
            {...props}
        >
            {children}
        </p>
    );
};

const DialogFooter: React.FC<DialogFooterProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div
            className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
            {...props}
        >
            {children}
        </div>
    );
};

// Assign subcomponents
Dialog.Trigger = DialogTrigger;
Dialog.Content = DialogContent;
Dialog.Header = DialogHeader;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Footer = DialogFooter;

Dialog.displayName = 'Dialog';
