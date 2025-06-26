import React, { useState, useEffect, useCallback, forwardRef } from 'react';
import Select from './Select';
import type { SelectOption, SelectProps, SelectRef } from './Select';
import Chip from '../Chip';
import Spinner from '../Spinner';

export interface AsyncSelectProps extends Omit<SelectProps, 'options'> {
    /**
     * Function to load options asynchronously
     */
    loadOptions?: (inputValue: string) => Promise<SelectOption[]>;

    /**
     * Delay in milliseconds before triggering the loadOptions function
     * @default 300
     */
    debounceMs?: number;

    /**
     * Default options to display when the component is first rendered
     */
    defaultOptions?: SelectOption[] | boolean;

    /**
     * Whether to allow creating new options
     * @default false
     */
    creatable?: boolean;

    /**
     * Function to create a new option from input value
     */
    createOption?: (inputValue: string) => SelectOption;

    /**
     * Message to display when creating a new option
     * @default 'Create option "{inputValue}"'
     */
    createOptionMessage?: string;

    /**
     * Whether the async select is currently loading
     */
    isLoading?: boolean;

    /**
     * Text to display when loading options
     * @default 'Loading...'
     */
    loadingMessage?: string;

    /**
     * Cache results to improve performance
     * @default true
     */
    cacheOptions?: boolean;

    /**
     * Initial options to use before any options are loaded
     */
    options?: SelectOption[];
}

/**
 * AsyncSelect component that extends the base Select component with
 * async loading capabilities, similar to Select2
 */
const AsyncSelect = React.forwardRef<SelectRef, AsyncSelectProps>((props, ref) => {
    const {
        loadOptions,
        debounceMs = 300,
        defaultOptions = false,
        creatable = false,
        createOption,
        createOptionMessage = 'Create option "{inputValue}"',
        isLoading: controlledLoading,
        loadingMessage = 'Loading...',
        cacheOptions = true,
        options: initialOptions = [],
        multiple = false,
        ...selectProps
    } = props;

    const [options, setOptions] = useState<SelectOption[]>(
        Array.isArray(defaultOptions) ? defaultOptions : initialOptions
    );
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [optionsCache, setOptionsCache] = useState<Record<string, SelectOption[]>>({});

    // If options is provided directly, use it instead of async loading
    useEffect(() => {
        if (initialOptions?.length > 0) {
            setOptions(initialOptions);
        }
    }, [initialOptions]);

    // Debounced load options function
    const debouncedLoadOptions = useCallback((value: string) => {
        if (!loadOptions) return;

        const trimmedValue = value.trim();

        // Check if we already have cached results
        if (cacheOptions && optionsCache[trimmedValue]) {
            setOptions(optionsCache[trimmedValue]);
            return;
        }

        setIsLoading(true);

        loadOptions(trimmedValue)
            .then((newOptions) => {
                setOptions(newOptions);

                // Cache the results
                if (cacheOptions) {
                    setOptionsCache((prevCache) => ({
                        ...prevCache,
                        [trimmedValue]: newOptions,
                    }));
                }
            })
            .catch((error) => {
                console.error('Error loading options:', error);
                setOptions([]);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [loadOptions, cacheOptions, optionsCache]);

    // Handle input change with debounce
    useEffect(() => {
        if (!inputValue || !loadOptions) return;

        const handler = setTimeout(() => {
            debouncedLoadOptions(inputValue);
        }, debounceMs);

        return () => {
            clearTimeout(handler);
        };
    }, [inputValue, debounceMs, debouncedLoadOptions]);

    // Initial load of options if defaultOptions is true
    useEffect(() => {
        if (defaultOptions === true && loadOptions) {
            debouncedLoadOptions('');
        }
    }, [defaultOptions, loadOptions, debouncedLoadOptions]);

    // Prepare options with creatable option if needed
    const prepareOptions = () => {
        if (!creatable || !inputValue) return options;

        // Check if the input value already exists as an option
        const valueExists = options.some(
            option => option.label.toLowerCase() === inputValue.toLowerCase()
        );

        if (!valueExists) {
            const newOption = createOption
                ? createOption(inputValue)
                : { value: inputValue, label: inputValue };

            return [
                ...options,
                {
                    ...newOption,
                    __isNew__: true,
                    label: createOptionMessage.replace('{inputValue}', inputValue),
                },
            ];
        }

        return options;
    };

    // Final options to display
    const displayOptions = prepareOptions();

    // Loading state is controlled externally or internally
    const showLoading = controlledLoading !== undefined ? controlledLoading : isLoading;

    // Render loading indicator
    const renderLoadingIndicator = () => {
        if (!showLoading) return null;

        return (
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                <Spinner size="sm" />
            </div>
        );
    };

    // Selected values for multiple select
    const selectedValues = Array.isArray(selectProps.value)
        ? selectProps.value
        : Array.isArray(selectProps.defaultValue)
            ? selectProps.defaultValue
            : [];

    return (
        <div className="relative">
            <Select
                {...selectProps}
                ref={ref}
                options={displayOptions}
                searchable={true}
                multiple={multiple}
                onSearchInputChange={setInputValue}
                onChange={(newValue) => {
                    if (selectProps.onChange) {
                        selectProps.onChange(newValue);
                    }
                }}
                noOptionsMessage={showLoading ? loadingMessage : (selectProps.noOptionsMessage || 'No options found')}
            />
            {renderLoadingIndicator()}

            {/* Render selected options as chips for multi-select */}
            {multiple && (
                <div className="flex flex-wrap gap-2 mt-2">
                    {selectedValues.map(value => {
                        const option = options.find(opt => opt.value === value);
                        if (!option) return null;

                        return (
                            <Chip
                                key={option.value.toString()}
                                label={option.label}
                                onDelete={() => {
                                    // Create a new array without the current value
                                    const newValues = selectedValues.filter(v => v !== value);

                                    // Check if we have string or number values and cast appropriately
                                    if (selectProps.onChange) {
                                        if (typeof value === 'string') {
                                            selectProps.onChange(newValues as string[]);
                                        } else {
                                            selectProps.onChange(newValues as number[]);
                                        }
                                    }
                                }}
                                size="sm"
                                variant="solid"
                                color="primary"
                                deletable={true}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
});

AsyncSelect.displayName = 'AsyncSelect';

export default AsyncSelect;
