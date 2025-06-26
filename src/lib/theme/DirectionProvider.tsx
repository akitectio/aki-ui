import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export type Direction = 'ltr' | 'rtl';

interface DirectionContextType {
    /**
     * Current text direction ('ltr' or 'rtl')
     */
    direction: Direction;

    /**
     * Function to set the direction directly
     */
    setDirection: (dir: Direction) => void;

    /**
     * Function to toggle between LTR and RTL directions
     */
    toggleDirection: () => void;
}

/**
 * Context for managing text direction in @akitectio/aki-ui
 */
export const DirectionContext = createContext<DirectionContextType>({
    direction: 'ltr',
    setDirection: () => { },
    toggleDirection: () => { },
});

/**
 * Hook to access the current text direction and related functions
 * @returns Object containing direction, setDirection, and toggleDirection
 * @example
 * ```tsx
 * const { direction, toggleDirection } = useDirection();
 * return (
 *   <Button onClick={toggleDirection}>
 *     {direction === 'ltr' ? 'Switch to RTL' : 'Switch to LTR'}
 *   </Button>
 * );
 * ```
 */
export const useDirection = () => useContext(DirectionContext);

export interface DirectionProviderProps {
    /**
     * Initial text direction (defaults to 'ltr')
     */
    initialDirection?: Direction;

    /**
     * Whether to store the direction preference in localStorage
     */
    storageKey?: string;

    /**
     * Children to be rendered within the direction context
     */
    children: ReactNode;
}

/**
 * Provider component for @akitectio/aki-ui text direction
 * 
 * @example
 * ```tsx
 * <DirectionProvider initialDirection="rtl" storageKey="my-app-direction">
 *   <App />
 * </DirectionProvider>
 * ```
 */
export const DirectionProvider = ({
    initialDirection = 'ltr',
    storageKey = 'aki-ui-direction',
    children,
}: DirectionProviderProps) => {
    // Initialize state with provided value or default to 'ltr'
    const [direction, setDirection] = useState<Direction>(initialDirection);

    // Effect to load saved preference on mount
    useEffect(() => {
        // Try to get from localStorage first
        if (typeof window !== 'undefined') {
            const savedDirection = localStorage.getItem(storageKey);

            if (savedDirection && (savedDirection === 'ltr' || savedDirection === 'rtl')) {
                setDirection(savedDirection as Direction);
            }
        }
    }, [storageKey]);

    // Effect to apply direction attribute to document and save preference when direction changes
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('dir', direction);

            // Save preference
            if (typeof window !== 'undefined') {
                localStorage.setItem(storageKey, direction);
            }
        }
    }, [direction, storageKey]);

    // Function to toggle direction
    const toggleDirection = () => {
        setDirection(prevDir => prevDir === 'ltr' ? 'rtl' : 'ltr');
    };

    return (
        <DirectionContext.Provider value={{ direction, setDirection, toggleDirection }}>
            {children}
        </DirectionContext.Provider>
    );
};
