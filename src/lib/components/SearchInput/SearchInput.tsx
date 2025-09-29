import React, { forwardRef } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useDebouncedSearch } from '../../utils/debounce';

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    /** Callback function when search value changes (debounced) */
    onSearch?: (value: string) => void | Promise<any>;
    /** Debounce delay in milliseconds */
    debounceDelay?: number;
    /** Show search icon */
    showSearchIcon?: boolean;
    /** Show clear button when there's text */
    showClearButton?: boolean;
    /** Loading state */
    loading?: boolean;
    /** Custom loading icon */
    loadingIcon?: React.ReactNode;
    /** Clear button icon */
    clearIcon?: React.ReactNode;
    /** Search icon */
    searchIcon?: React.ReactNode;
    /** Container className */
    containerClassName?: string;
    /** Icon container className */
    iconClassName?: string;
}

/**
 * SearchInput component with built-in debounce functionality
 * Automatically debounces search input and provides loading states
 */
export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
    (
        {
            onSearch,
            debounceDelay = 300,
            showSearchIcon = true,
            showClearButton = true,
            loading: externalLoading,
            loadingIcon,
            clearIcon,
            searchIcon,
            containerClassName,
            iconClassName,
            className,
            placeholder = 'Search...',
            defaultValue = '',
            ...props
        },
        ref
    ) => {
        const {
            searchTerm,
            isSearching,
            setSearch,
            clearSearch
        } = useDebouncedSearch(defaultValue as string, onSearch, debounceDelay);

        const isLoading = externalLoading ?? isSearching;

        return (
            <div className={cn('relative', containerClassName)}>
                {/* Search Icon */}
                {showSearchIcon && (
                    <div className={cn(
                        'absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400',
                        iconClassName
                    )}>
                        {isLoading ? (
                            loadingIcon || <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                            searchIcon || <Search className="h-4 w-4" />
                        )}
                    </div>
                )}

                {/* Input */}
                <input
                    ref={ref}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={placeholder}
                    className={cn(
                        // Base styles
                        'w-full px-4 py-2 border border-gray-300 rounded-lg',
                        'focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
                        'outline-none transition-colors',
                        'disabled:bg-gray-50 disabled:text-gray-500',
                        // Padding adjustments for icons
                        showSearchIcon && 'pl-10',
                        (showClearButton && searchTerm) && 'pr-10',
                        className
                    )}
                    {...props}
                />

                {/* Clear Button */}
                {showClearButton && searchTerm && (
                    <button
                        type="button"
                        onClick={clearSearch}
                        className={cn(
                            'absolute right-3 top-1/2 transform -translate-y-1/2',
                            'text-gray-400 hover:text-gray-600 transition-colors',
                            'focus:outline-none focus:text-gray-600',
                            iconClassName
                        )}
                        tabIndex={-1}
                    >
                        {clearIcon || <X className="h-4 w-4" />}
                    </button>
                )}
            </div>
        );
    }
);

SearchInput.displayName = 'SearchInput';

export default SearchInput;