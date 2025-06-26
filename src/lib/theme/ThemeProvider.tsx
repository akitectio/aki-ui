import type { ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';
import { defaultTheme } from './defaultTheme';
import type { Theme } from './types';
import { mergeTheme } from './utils';

export interface ThemeProviderProps {
    /**
     * Theme object to override default theme values
     */
    theme?: Partial<Theme>;

    /**
     * Children to be rendered within the theme context
     */
    children: ReactNode;
}

/**
 * Provider component for @akitectio/aki-ui theming
 * 
 * @example
 * ```tsx
 * const customTheme = {
 *   colors: {
 *     primary: 'emerald-600',
 *     secondary: 'slate-700',
 *   }
 * };
 * 
 * <ThemeProvider theme={customTheme}>
 *   <App />
 * </ThemeProvider>
 * ```
 */
export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
    // Merge the provided theme with the default theme
    const mergedTheme = theme ? mergeTheme(defaultTheme, theme) : defaultTheme;

    return (
        <ThemeContext.Provider value={mergedTheme}>
            {children}
        </ThemeContext.Provider>
    );
};
