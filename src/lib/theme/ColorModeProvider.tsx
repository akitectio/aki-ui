import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export type ColorMode = 'light' | 'dark';

interface ColorModeContextType {
    /**
     * Current color mode ('light' or 'dark')
     */
    colorMode: ColorMode;

    /**
     * Function to set the color mode directly
     */
    setColorMode: (mode: ColorMode) => void;

    /**
     * Function to toggle between light and dark modes
     */
    toggleColorMode: () => void;
}

/**
 * Context for managing color mode in @akitectio/aki-ui
 */
export const ColorModeContext = createContext<ColorModeContextType>({
    colorMode: 'light',
    setColorMode: () => { },
    toggleColorMode: () => { },
});

/**
 * Hook to access the current color mode and related functions
 * @returns Object containing colorMode, setColorMode, and toggleColorMode
 * @example
 * ```tsx
 * const { colorMode, toggleColorMode } = useColorMode();
 * return (
 *   <Button onClick={toggleColorMode}>
 *     {colorMode === 'light' ? '🌙' : '☀️'}
 *   </Button>
 * );
 * ```
 */
export const useColorMode = () => useContext(ColorModeContext);

export interface ColorModeProviderProps {
    /**
     * Initial color mode (defaults to system preference or 'light')
     */
    initialColorMode?: ColorMode;

    /**
     * Whether to store the color mode preference in localStorage
     */
    storageKey?: string;

    /**
     * Children to be rendered within the color mode context
     */
    children: ReactNode;
}

/**
 * Provider component for @akitectio/aki-ui color mode
 * 
 * @example
 * ```tsx
 * <ColorModeProvider initialColorMode="dark" storageKey="my-app-color-mode">
 *   <App />
 * </ColorModeProvider>
 * ```
 */
export const ColorModeProvider = ({
    initialColorMode,
    storageKey = 'aki-ui-color-mode',
    children,
}: ColorModeProviderProps) => {
    // Initialize state with provided value or default to 'light'
    const [colorMode, setColorMode] = useState<ColorMode>(initialColorMode || 'light');

    // Effect to load saved preference or detect system preference on mount
    useEffect(() => {
        // Try to get from localStorage first
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem(storageKey);

            if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
                setColorMode(savedMode);
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                // If no saved preference, check system preference
                setColorMode('dark');
            }
        }
    }, [storageKey]);

    // Effect to apply class to document and save preference when colorMode changes
    useEffect(() => {
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            if (colorMode === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }

            // Save preference
            localStorage.setItem(storageKey, colorMode);
        }
    }, [colorMode, storageKey]);

    // Function to toggle color mode
    const toggleColorMode = () => {
        setColorMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
    };

    return (
        <ColorModeContext.Provider value={{ colorMode, setColorMode, toggleColorMode }}>
            {children}
        </ColorModeContext.Provider>
    );
};
