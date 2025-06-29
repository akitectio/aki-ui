import { Tool, CallToolResult } from "@modelcontextprotocol/sdk/types.js";

/**
 * Aki UI Theme Management System
 *
 * Aki UI provides a comprehensive theming system with the following providers:
 *
 * 1. **AkiUIProvider** - Main provider (recommended)
 *    Combines ThemeProvider, ColorModeProvider, and DirectionProvider
 *
 *    Usage:
 *    ```tsx
 *    import { AkiUIProvider } from '@akitectio/aki-ui';
 *
 *    const customTheme = {
 *      colors: {
 *        primary: 'emerald-600',
 *        secondary: 'gray-600',
 *      }
 *    };
 *
 *    <AkiUIProvider
 *      theme={customTheme}
 *      initialColorMode="dark"
 *      initialDirection="ltr"
 *    >
 *      <App />
 *    </AkiUIProvider>
 *    ```
 *
 * 2. **ThemeProvider** - Core theme provider
 *    ```tsx
 *    import { ThemeProvider } from '@akitectio/aki-ui';
 *
 *    <ThemeProvider theme={customTheme}>
 *      <App />
 *    </ThemeProvider>
 *    ```
 *
 * 3. **ColorModeProvider** - Light/Dark mode management
 *    ```tsx
 *    import { ColorModeProvider } from '@akitectio/aki-ui';
 *
 *    <ColorModeProvider initialColorMode="dark">
 *      <App />
 *    </ColorModeProvider>
 *    ```
 *
 * 4. **DirectionProvider** - RTL/LTR text direction
 *    ```tsx
 *    import { DirectionProvider } from '@akitectio/aki-ui';
 *
 *    <DirectionProvider initialDirection="rtl">
 *      <App />
 *    </DirectionProvider>
 *    ```
 *
 * Available Hooks:
 * - **useTheme()** - Access current theme configuration
 * - **useColorMode()** - Manage light/dark mode
 * - **useDirection()** - Manage text direction (LTR/RTL)
 *
 * Theme Structure follows TypeScript interface:
 * ```typescript
 * interface Theme {
 *   colors: {
 *     primary: string;
 *     secondary: string;
 *     accent: string;
 *     success: string;
 *     warning: string;
 *     error: string;
 *     info: string;
 *   };
 *   radius: { sm: string; md: string; lg: string; xl: string; "2xl": string; full: string; };
 *   shadows: { sm: string; md: string; lg: string; xl: string; "2xl": string; none: string; };
 *   fontSizes: { xs: string; sm: string; md: string; lg: string; xl: string; "2xl": string; "3xl": string; "4xl": string; };
 *   spacing: { xs: string; sm: string; md: string; lg: string; xl: string; "2xl": string; "3xl": string; "4xl": string; };
 *   transitions: { fast: string; normal: string; slow: string; };
 *   fontFamily: { base: string; heading: string; mono: string; };
 * }
 * ```
 */

interface ThemeConfig {
  colors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
    success?: string;
    warning?: string;
    error?: string;
    info?: string;
  };
  radius?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    "2xl"?: string;
    full?: string;
  };
  shadows?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    "2xl"?: string;
    none?: string;
  };
  fontSizes?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    "2xl"?: string;
    "3xl"?: string;
    "4xl"?: string;
  };
  spacing?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    "2xl"?: string;
    "3xl"?: string;
    "4xl"?: string;
  };
  transitions?: {
    fast?: string;
    normal?: string;
    slow?: string;
  };
  fontFamily?: {
    base?: string;
    heading?: string;
    mono?: string;
  };
}

export class ThemeManagementTool {
  getTools(): Tool[] {
    return [
      {
        name: "get_theme",
        description: "Get current theme configuration",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "generate_theme",
        description: "Generate a custom theme configuration",
        inputSchema: {
          type: "object",
          properties: {
            style: {
              type: "string",
              enum: [
                "modern",
                "classic",
                "minimal",
                "colorful",
                "dark",
                "custom",
              ],
              description: "Theme style preset",
            },
            primaryColor: {
              type: "string",
              description: "Primary brand color (hex, rgb, or color name)",
            },
            preferences: {
              type: "object",
              properties: {
                roundedCorners: { type: "boolean" },
                boldText: { type: "boolean" },
                largeSpacing: { type: "boolean" },
              },
              description: "Theme preferences",
            },
          },
          required: ["style"],
        },
      },
      {
        name: "apply_theme_vars",
        description: "Generate CSS custom properties for theme variables",
        inputSchema: {
          type: "object",
          properties: {
            config: {
              type: "object",
              description: "Theme configuration object",
            },
            format: {
              type: "string",
              enum: ["css", "tailwind", "json"],
              description: "Output format for theme variables",
            },
          },
          required: ["config"],
        },
      },
    ];
  }

  async getTheme(): Promise<CallToolResult> {
    const defaultTheme = await this.getDefaultTheme();

    return {
      content: [
        {
          type: "text",
          text: `Current Aki UI Theme Configuration:\n\n\`\`\`json\n${JSON.stringify(
            defaultTheme,
            null,
            2
          )}\n\`\`\``,
        },
      ],
    };
  }

  async generateTheme(args: any): Promise<CallToolResult> {
    const { style, primaryColor, preferences = {} } = args;

    const generatedTheme = this.createThemeConfig(
      style,
      primaryColor,
      preferences
    );
    const cssVariables = this.generateCSSVariables(generatedTheme);
    const tailwindConfig = this.generateTailwindConfig(generatedTheme);

    return {
      content: [
        {
          type: "text",
          text: `Generated ${style} theme:\n\n## Theme Configuration\n\`\`\`json\n${JSON.stringify(
            generatedTheme,
            null,
            2
          )}\n\`\`\`\n\n## CSS Variables\n\`\`\`css\n${cssVariables}\n\`\`\`\n\n## Tailwind Config\n\`\`\`javascript\n${tailwindConfig}\n\`\`\``,
        },
      ],
    };
  }

  async applyThemeVars(args: any): Promise<CallToolResult> {
    const { config, format = "css" } = args;

    let output = "";

    switch (format) {
      case "css":
        output = this.generateCSSVariables(config);
        break;
      case "tailwind":
        output = this.generateTailwindConfig(config);
        break;
      case "json":
        output = JSON.stringify(config, null, 2);
        break;
      default:
        output = "Unsupported format. Use: css, tailwind, or json";
    }

    return {
      content: [
        {
          type: "text",
          text: `Theme variables in ${format} format:\n\n\`\`\`${
            format === "json"
              ? "json"
              : format === "tailwind"
              ? "javascript"
              : "css"
          }\n${output}\n\`\`\``,
        },
      ],
    };
  }

  async getDefaultTheme(): Promise<ThemeConfig> {
    return {
      colors: {
        primary: "blue-600",
        secondary: "gray-500",
        accent: "amber-500",
        success: "green-500",
        warning: "yellow-500",
        error: "red-500",
        info: "sky-500",
      },
      radius: {
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      shadows: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        none: "none",
      },
      fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "4xl": "5rem",
      },
      transitions: {
        fast: "150ms ease-in-out",
        normal: "200ms ease-in-out",
        slow: "300ms ease-in-out",
      },
      fontFamily: {
        base: "ui-sans-serif, system-ui, sans-serif",
        heading: "ui-sans-serif, system-ui, sans-serif",
        mono: "ui-monospace, SFMono-Regular, Consolas, monospace",
      },
    };
  }

  private createThemeConfig(
    style: string,
    primaryColor?: string,
    preferences: any = {}
  ): ThemeConfig {
    const baseTheme: ThemeConfig = {
      colors: {
        primary: primaryColor || this.getStyleDefaults(style).primary,
        secondary: "gray-500",
        accent: "amber-500",
        success: "green-500",
        warning: "yellow-500",
        error: "red-500",
        info: "sky-500",
      },
      fontFamily: {
        base: "ui-sans-serif, system-ui, sans-serif",
        heading: "ui-sans-serif, system-ui, sans-serif",
        mono: "ui-monospace, SFMono-Regular, Consolas, monospace",
      },
      spacing: preferences.largeSpacing
        ? {
            xs: "0.5rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "2rem",
            xl: "3rem",
            "2xl": "4rem",
            "3xl": "5rem",
            "4xl": "6rem",
          }
        : {
            xs: "0.25rem",
            sm: "0.5rem",
            md: "1rem",
            lg: "1.5rem",
            xl: "2rem",
            "2xl": "3rem",
            "3xl": "4rem",
            "4xl": "5rem",
          },
      radius: preferences.roundedCorners
        ? {
            sm: "0.5rem",
            md: "0.75rem",
            lg: "1rem",
            xl: "1.5rem",
            "2xl": "2rem",
            full: "9999px",
          }
        : {
            sm: "0.125rem",
            md: "0.375rem",
            lg: "0.5rem",
            xl: "0.75rem",
            "2xl": "1rem",
            full: "9999px",
          },
      fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
      },
      shadows: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        none: "none",
      },
      transitions: {
        fast: "150ms ease-in-out",
        normal: "200ms ease-in-out",
        slow: "300ms ease-in-out",
      },
    };

    // Apply style-specific modifications
    switch (style) {
      case "modern":
        if (baseTheme.colors) {
          baseTheme.colors.primary = primaryColor || "indigo-600";
          baseTheme.colors.secondary = "purple-600";
        }
        break;

      case "classic":
        if (baseTheme.colors) {
          baseTheme.colors.primary = primaryColor || "gray-800";
          baseTheme.colors.secondary = "gray-600";
        }
        if (baseTheme.fontFamily) {
          baseTheme.fontFamily.base = "Georgia, serif";
          baseTheme.fontFamily.heading = "Georgia, serif";
        }
        break;

      case "minimal":
        if (baseTheme.colors) {
          baseTheme.colors.primary = primaryColor || "slate-900";
          baseTheme.colors.secondary = "slate-600";
        }
        break;

      case "colorful":
        if (baseTheme.colors) {
          baseTheme.colors.primary = primaryColor || "pink-500";
          baseTheme.colors.secondary = "purple-600";
          baseTheme.colors.accent = "orange-500";
          baseTheme.colors.success = "emerald-500";
          baseTheme.colors.warning = "amber-500";
          baseTheme.colors.error = "rose-500";
        }
        break;

      case "dark":
        if (baseTheme.colors) {
          baseTheme.colors.primary = primaryColor || "blue-400";
          baseTheme.colors.secondary = "slate-400";
        }
        break;
    }

    return baseTheme;
  }

  private getStyleDefaults(style: string): { primary: string } {
    const defaults = {
      modern: { primary: "indigo-600" },
      classic: { primary: "gray-800" },
      minimal: { primary: "slate-900" },
      colorful: { primary: "pink-500" },
      dark: { primary: "blue-400" },
      custom: { primary: "blue-600" },
    };

    return defaults[style as keyof typeof defaults] || defaults.custom;
  }

  private generateCSSVariables(config: ThemeConfig): string {
    const variables: string[] = [":root {"];

    // Colors
    if (config.colors) {
      Object.entries(config.colors).forEach(([key, value]) => {
        variables.push(`  --aki-color-${key}: ${value};`);
      });
    }

    // Spacing
    if (config.spacing) {
      Object.entries(config.spacing).forEach(([key, value]) => {
        variables.push(`  --aki-spacing-${key}: ${value};`);
      });
    }

    // Radius
    if (config.radius) {
      Object.entries(config.radius).forEach(([key, value]) => {
        variables.push(`  --aki-radius-${key}: ${value};`);
      });
    }

    // Font sizes
    if (config.fontSizes) {
      Object.entries(config.fontSizes).forEach(([key, value]) => {
        variables.push(`  --aki-fontSize-${key}: ${value};`);
      });
    }

    // Shadows
    if (config.shadows) {
      Object.entries(config.shadows).forEach(([key, value]) => {
        variables.push(`  --aki-shadow-${key}: ${value};`);
      });
    }

    // Transitions
    if (config.transitions) {
      Object.entries(config.transitions).forEach(([key, value]) => {
        variables.push(`  --aki-transition-${key}: ${value};`);
      });
    }

    // Font families
    if (config.fontFamily) {
      Object.entries(config.fontFamily).forEach(([key, value]) => {
        variables.push(`  --aki-font-${key}: ${value};`);
      });
    }

    variables.push("}");

    return variables.join("\n");
  }

  private generateTailwindConfig(config: ThemeConfig): string {
    const tailwindConfig = {
      theme: {
        extend: {
          colors: config.colors,
          fontFamily: config.fontFamily,
          spacing: config.spacing,
          borderRadius: config.radius,
          fontSize: config.fontSizes,
          boxShadow: config.shadows,
          transitionDuration: config.transitions,
        },
      },
    };

    return `// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: ${JSON.stringify(tailwindConfig.theme.extend, null, 6).replace(
      /"/g,
      "'"
    )}
  },
  plugins: []
};`;
  }
}
