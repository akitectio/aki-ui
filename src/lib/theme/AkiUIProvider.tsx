import type { ReactNode } from 'react';
import { ThemeProvider as BaseThemeProvider } from './ThemeProvider';
import { ColorModeProvider, type ColorMode } from './ColorModeProvider';
import { DirectionProvider, type Direction } from './DirectionProvider';
import type { Theme } from './types';

export interface AkiUIProviderProps {
    /**
     * Theme object to override default theme values
     */
    theme?: Partial<Theme>;

    /**
     * Initial color mode (defaults to system preference or 'light')
     */
    initialColorMode?: ColorMode;

    /**
     * Whether to store the color mode preference in localStorage
     */
    colorModeStorageKey?: string;

    /**
     * Initial text direction (defaults to 'ltr')
     */
    initialDirection?: Direction;

    /**
     * Whether to store the direction preference in localStorage
     */
    directionStorageKey?: string;

    /**
     * Children to be rendered within the theme context
     */
    children: ReactNode;
}

/**
 * Combined provider for @akitectio/aki-ui theming, color modes, and text direction
 * 
 * @example
 * ```tsx
 * const customTheme = {
 *   colors: {
 *     primary: 'emerald-600',
 *   }
 * };
 * 
 * <AkiUIProvider 
 *   theme={customTheme} 
 *   initialColorMode="dark"
 *   initialDirection="rtl"
 * >
 *   <App />
 * </AkiUIProvider>
 * ```
 */
export const AkiUIProvider = ({
    theme,
    initialColorMode,
    colorModeStorageKey,
    initialDirection,
    directionStorageKey,
    children,
}: AkiUIProviderProps) => {
    return (
        <DirectionProvider
            initialDirection={initialDirection}
            storageKey={directionStorageKey}
        >
            <ColorModeProvider
                initialColorMode={initialColorMode}
                storageKey={colorModeStorageKey}
            >
                <BaseThemeProvider theme={theme}>
                    {children}
                </BaseThemeProvider>
            </ColorModeProvider>
        </DirectionProvider>
    );
};
