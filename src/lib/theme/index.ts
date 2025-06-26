/**
 * Theme system for @akitectio/aki-ui
 */

// Types
export type {
  Theme,
  ThemeColors,
  ThemeRadius,
  ThemeShadows,
  ThemeFontSizes,
  ThemeSpacing,
  ThemeTransitions,
} from "./types";

// Contexts and hooks
export { ThemeContext, useTheme } from "./ThemeContext";
export {
  ColorModeContext,
  useColorMode,
  type ColorMode,
} from "./ColorModeProvider";
export {
  DirectionContext,
  useDirection,
  type Direction,
} from "./DirectionProvider";

// Providers
export { ThemeProvider } from "./ThemeProvider";
export { ColorModeProvider } from "./ColorModeProvider";
export { DirectionProvider } from "./DirectionProvider";
export { AkiUIProvider } from "./AkiUIProvider";

// Theme objects
export { defaultTheme } from "./defaultTheme";

// Utils
export { mergeTheme } from "./utils";
