import React, { useState } from 'react';
import { cn } from '../../utils';

export interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: string;
    onValueChange?: (value: string) => void;
    children: React.ReactNode;
    className?: string;
}

export interface CommandInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export interface CommandListProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export interface CommandGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    heading?: string;
    className?: string;
    children: React.ReactNode;
}

export interface CommandItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    value?: string;
    disabled?: boolean;
    onSelect?: (value: string) => void;
    className?: string;
    children: React.ReactNode;
}

export interface CommandEmptyProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

const CommandContext = React.createContext<{
    search: string;
    setSearch: (search: string) => void;
    value: string;
    onValueChange: (value: string) => void;
}>({
    search: '',
    setSearch: () => { },
    value: '',
    onValueChange: () => { },
});

export const Command: React.FC<CommandProps> & {
    Input: React.FC<CommandInputProps>;
    List: React.FC<CommandListProps>;
    Group: React.FC<CommandGroupProps>;
    Item: React.FC<CommandItemProps>;
    Empty: React.FC<CommandEmptyProps>;
} = ({
    value = '',
    onValueChange = () => { },
    children,
    className,
    ...props
}) => {
        const [search, setSearch] = useState('');

        return (
            <CommandContext.Provider value={{ search, setSearch, value, onValueChange }}>
                <div
                    className={cn(
                        'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
                        className
                    )}
                    {...props}
                >
                    {children}
                </div>
            </CommandContext.Provider>
        );
    };

const CommandInput: React.FC<CommandInputProps> = ({
    className,
    placeholder = 'Type a command or search...',
    ...props
}) => {
    const { search, setSearch } = React.useContext(CommandContext);

    return (
        <div className="flex items-center border-b px-3">
            <svg
                className="mr-2 h-4 w-4 shrink-0 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
                className={cn(
                    'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
                    className
                )}
                placeholder={placeholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                {...props}
            />
        </div>
    );
};

const CommandList: React.FC<CommandListProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div
            className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
            {...props}
        >
            {children}
        </div>
    );
};

const CommandGroup: React.FC<CommandGroupProps> = ({
    heading,
    children,
    className,
    ...props
}) => {
    return (
        <div
            className={cn('overflow-hidden p-1', className)}
            {...props}
        >
            {heading && (
                <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                    {heading}
                </div>
            )}
            {children}
        </div>
    );
};

const CommandItem: React.FC<CommandItemProps> = ({
    value = '',
    disabled = false,
    onSelect,
    children,
    className,
    ...props
}) => {
    const { search, value: selectedValue, onValueChange } = React.useContext(CommandContext);

    const isVisible = !search ||
        value.toLowerCase().includes(search.toLowerCase()) ||
        (typeof children === 'string' && children.toLowerCase().includes(search.toLowerCase()));

    if (!isVisible) return null;

    const handleSelect = () => {
        if (!disabled) {
            onSelect?.(value);
            onValueChange(value);
        }
    };

    return (
        <div
            className={cn(
                'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
                disabled && 'pointer-events-none opacity-50',
                !disabled && 'hover:bg-accent hover:text-accent-foreground',
                selectedValue === value && 'bg-accent text-accent-foreground',
                className
            )}
            onClick={handleSelect}
            {...props}
        >
            {children}
        </div>
    );
};

const CommandEmpty: React.FC<CommandEmptyProps> = ({
    children,
    className,
    ...props
}) => {
    const { search } = React.useContext(CommandContext);

    // Only show empty state when there's a search query
    if (!search) return null;

    return (
        <div
            className={cn('py-6 text-center text-sm text-muted-foreground', className)}
            {...props}
        >
            {children || 'No results found.'}
        </div>
    );
};

// Assign subcomponents
Command.Input = CommandInput;
Command.List = CommandList;
Command.Group = CommandGroup;
Command.Item = CommandItem;
Command.Empty = CommandEmpty;

Command.displayName = 'Command';
