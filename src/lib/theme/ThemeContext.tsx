import { createContext, useContext } from 'react';
import type { Theme } from './types';
import { defaultTheme } from './defaultTheme';

/**
 * React Context for managing theme in @akitectio/aki-ui
 */
export const ThemeContext = createContext<Theme>(defaultTheme);

/**
 * Hook to access the current theme
 * @returns The current theme object
 * @example
 * ```tsx
 * const theme = useTheme();
 * return <div className={`text-${theme.colors.primary}`}>Themed text</div>;
 * ```
 */
export const useTheme = () => useContext(ThemeContext);
