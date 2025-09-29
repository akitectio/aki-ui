import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Debounce utility function
 * @param func - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

/**
 * Custom hook for debouncing a value
 * @param value - Value to debounce
 * @param delay - Delay in milliseconds (default: 300)
 * @returns Debounced value
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Custom hook for debounced callback
 * @param callback - Callback function to debounce
 * @param delay - Delay in milliseconds (default: 300)
 * @returns Debounced callback function
 */
export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 300
): (...args: Parameters<T>) => void {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedCallback;
}

/**
 * Custom hook for search with debounce functionality
 * @param initialValue - Initial search value
 * @param onSearch - Search callback function
 * @param delay - Debounce delay in milliseconds (default: 300)
 * @returns Object with search utilities
 */
export function useDebouncedSearch(
  initialValue: string = "",
  onSearch?: (value: string) => void | Promise<any>,
  delay: number = 300
) {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, delay);

  // Execute search when debounced value changes
  useEffect(() => {
    if (debouncedSearchTerm !== initialValue || debouncedSearchTerm !== "") {
      setIsSearching(true);

      if (onSearch) {
        try {
          const result = onSearch(debouncedSearchTerm);

          // Handle promise if onSearch returns one
          if (result && typeof result.then === "function") {
            result.finally(() => setIsSearching(false));
          } else {
            // If not a promise, set loading to false after a short delay
            setTimeout(() => setIsSearching(false), 100);
          }
        } catch (error) {
          setIsSearching(false);
        }
      } else {
        setIsSearching(false);
      }
    }
  }, [debouncedSearchTerm, initialValue, onSearch]);

  const clearSearch = useCallback(() => {
    setSearchTerm("");
    if (onSearch) {
      onSearch("");
    }
  }, [onSearch]);

  const setSearch = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  return {
    searchTerm,
    debouncedSearchTerm,
    isSearching,
    setSearch,
    clearSearch,
    setIsSearching,
  };
}

/**
 * Debounce configuration interface
 */
export interface DebounceConfig {
  delay?: number;
  leading?: boolean;
  trailing?: boolean;
}

/**
 * Advanced debounce function with leading and trailing options
 * @param func - Function to debounce
 * @param config - Debounce configuration
 * @returns Debounced function
 */
export function advancedDebounce<T extends (...args: any[]) => any>(
  func: T,
  config: DebounceConfig = {}
): (...args: Parameters<T>) => void {
  const { delay = 300, leading = false, trailing = true } = config;

  let timeoutId: NodeJS.Timeout | null = null;
  let lastCallTime = 0;
  let lastArgs: Parameters<T>;

  return (...args: Parameters<T>) => {
    lastArgs = args;
    const currentTime = Date.now();

    const shouldCallLeading =
      leading && (!timeoutId || currentTime - lastCallTime >= delay);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (shouldCallLeading) {
      lastCallTime = currentTime;
      func(...args);
    }

    if (trailing) {
      timeoutId = setTimeout(() => {
        if (currentTime !== lastCallTime) {
          lastCallTime = Date.now();
          func(...lastArgs);
        }
        timeoutId = null;
      }, delay);
    }
  };
}

export default {
  debounce,
  useDebounce,
  useDebouncedCallback,
  useDebouncedSearch,
  advancedDebounce,
};
