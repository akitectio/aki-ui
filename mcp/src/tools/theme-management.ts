import { Tool, CallToolResult } from "@modelcontextprotocol/sdk/types.js";

interface ThemeConfig {
  colors?: {
    primary?: string;
    secondary?: string;
    success?: string;
    warning?: string;
    error?: string;
  };
  fontFamily?: {
    sans?: string[];
    serif?: string[];
    mono?: string[];
  };
  spacing?: Record<string, string>;
  borderRadius?: Record<string, string>;
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
        primary: "#3b82f6",
        secondary: "#64748b",
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Monaco", "Consolas", "monospace"],
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
      },
      borderRadius: {
        none: "0",
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    };
  }

  private createThemeConfig(
    style: string,
    primaryColor?: string,
    preferences: any = {}
  ): ThemeConfig {
    const baseTheme = {
      colors: {
        primary: primaryColor || this.getStyleDefaults(style).primary,
        secondary: "#64748b",
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Monaco", "Consolas", "monospace"],
      },
      spacing: preferences.largeSpacing
        ? {
            xs: "0.5rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "2rem",
            xl: "3rem",
            "2xl": "4rem",
          }
        : {
            xs: "0.25rem",
            sm: "0.5rem",
            md: "1rem",
            lg: "1.5rem",
            xl: "2rem",
            "2xl": "3rem",
          },
      borderRadius: preferences.roundedCorners
        ? {
            none: "0",
            sm: "0.5rem",
            md: "0.75rem",
            lg: "1rem",
            xl: "1.5rem",
            full: "9999px",
          }
        : {
            none: "0",
            sm: "0.125rem",
            md: "0.25rem",
            lg: "0.375rem",
            xl: "0.5rem",
            full: "9999px",
          },
    };

    // Apply style-specific modifications
    switch (style) {
      case "modern":
        baseTheme.colors = {
          ...baseTheme.colors,
          primary: primaryColor || "#6366f1",
          secondary: "#8b5cf6",
        };
        break;

      case "classic":
        baseTheme.colors = {
          ...baseTheme.colors,
          primary: primaryColor || "#1f2937",
          secondary: "#374151",
        };
        baseTheme.fontFamily.sans = ["Times New Roman", "serif"];
        break;

      case "minimal":
        baseTheme.colors = {
          ...baseTheme.colors,
          primary: primaryColor || "#000000",
          secondary: "#6b7280",
        };
        break;

      case "colorful":
        baseTheme.colors = {
          ...baseTheme.colors,
          primary: primaryColor || "#ec4899",
          secondary: "#8b5cf6",
          success: "#06d6a0",
          warning: "#ffd60a",
          error: "#f72585",
        };
        break;

      case "dark":
        baseTheme.colors = {
          ...baseTheme.colors,
          primary: primaryColor || "#60a5fa",
          secondary: "#94a3b8",
        };
        break;
    }

    return baseTheme;
  }

  private getStyleDefaults(style: string): { primary: string } {
    const defaults = {
      modern: { primary: "#6366f1" },
      classic: { primary: "#1f2937" },
      minimal: { primary: "#000000" },
      colorful: { primary: "#ec4899" },
      dark: { primary: "#60a5fa" },
      custom: { primary: "#3b82f6" },
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

    // Border radius
    if (config.borderRadius) {
      Object.entries(config.borderRadius).forEach(([key, value]) => {
        variables.push(`  --aki-radius-${key}: ${value};`);
      });
    }

    // Font families
    if (config.fontFamily) {
      Object.entries(config.fontFamily).forEach(([key, value]) => {
        variables.push(
          `  --aki-font-${key}: ${
            Array.isArray(value) ? value.join(", ") : value
          };`
        );
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
          borderRadius: config.borderRadius,
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
