import { Tool, CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import {
  ComponentMetadataSync,
  ComponentMetadata,
} from "./component-metadata-sync.js";

export interface AkiUIComponent {
  name: string;
  category:
    | "Layout"
    | "Data Entry"
    | "Data Display"
    | "Feedback"
    | "Navigation"
    | "Interactive";
  description: string;
  props: ComponentProp[];
  examples: string[];
  accessibility: string[];
  variants?: string[];
}

export interface ComponentProp {
  name: string;
  type: string;
  required: boolean;
  description: string;
  defaultValue?: string;
}

export class ComponentDiscoveryTool {
  private metadataSync: ComponentMetadataSync;
  private cachedComponents: ComponentMetadata[] | null = null;

  constructor() {
    this.metadataSync = new ComponentMetadataSync();
    // Try to load existing metadata on startup
    this.loadComponents();
  }

  /**
   * Load components from metadata file
   */
  private loadComponents(): ComponentMetadata[] {
    if (!this.cachedComponents) {
      this.cachedComponents = this.metadataSync.loadMetadata();
    }
    return this.cachedComponents;
  }

  /**
   * Convert metadata to AkiUIComponent format
   */
  private convertToAkiUIComponent(metadata: ComponentMetadata): AkiUIComponent {
    return {
      name: metadata.name,
      category: metadata.category as any,
      description: metadata.description,
      props: metadata.props || [],
      examples: metadata.examples || [],
      accessibility: metadata.accessibility || [],
      variants: metadata.variants,
    };
  }

  getTools(): Tool[] {
    return [
      {
        name: "search_components",
        description:
          "Search for Aki UI components by name, category, or description (Auto-synced from source)",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description:
                "Search query (component name, category, or keywords)",
            },
            category: {
              type: "string",
              enum: [
                "Layout",
                "Data Entry",
                "Data Display",
                "Feedback",
                "Navigation",
                "Interactive",
              ],
              description: "Filter by component category",
            },
          },
          required: ["query"],
        },
      },
      {
        name: "get_component_details",
        description:
          "Get detailed information about a specific component (Auto-synced from source)",
        inputSchema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Component name (e.g., Button, Card, Input)",
            },
          },
          required: ["name"],
        },
      },
      {
        name: "list_all_components",
        description:
          "List all available Aki UI components with brief descriptions (Auto-synced from source)",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
    ];
  }

  async searchComponents(args: any): Promise<CallToolResult> {
    try {
      const { query, category } = args;
      const components = this.loadComponents();

      let filtered = components;

      if (category) {
        filtered = filtered.filter((comp) => comp.category === category);
      }

      if (query) {
        const searchTerm = query.toLowerCase();
        filtered = filtered.filter(
          (comp) =>
            comp.name.toLowerCase().includes(searchTerm) ||
            comp.description.toLowerCase().includes(searchTerm) ||
            comp.category.toLowerCase().includes(searchTerm)
        );
      }

      const results = filtered.map((comp) => ({
        name: comp.name,
        category: comp.category,
        description: comp.description,
        variants: comp.variants,
        hasTypes: comp.hasTypes,
        exportType: comp.exportType,
        subComponents: comp.subComponents,
      }));

      return {
        content: [
          {
            type: "text",
            text: `Found ${
              results.length
            } components (Auto-synced from Aki UI source):\n\n${results
              .map(
                (comp) =>
                  `**${comp.name}** (${comp.category}) - Export: ${
                    comp.exportType
                  }\n${comp.description}${
                    comp.variants
                      ? `\nVariants: ${comp.variants.join(", ")}`
                      : ""
                  }${
                    comp.subComponents && comp.subComponents.length > 0
                      ? `\nSub-components: ${comp.subComponents.join(", ")}`
                      : ""
                  }${comp.hasTypes ? "\n✅ TypeScript types available" : ""}`
              )
              .join("\n\n")}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error searching components: ${
              error instanceof Error ? error.message : "Unknown error"
            }`,
          },
        ],
        isError: true,
      };
    }
  }

  async getComponentDetails(args: any): Promise<CallToolResult> {
    try {
      const { name } = args;
      const components = this.loadComponents();

      const metadata = components.find(
        (comp) => comp.name.toLowerCase() === name.toLowerCase()
      );

      if (!metadata) {
        return {
          content: [
            {
              type: "text",
              text: `Component "${name}" not found. Available components: ${components
                .map((c) => c.name)
                .join(", ")}`,
            },
          ],
          isError: true,
        };
      }

      const component = this.convertToAkiUIComponent(metadata);

      const propsTable = component.props
        .map(
          (prop) =>
            `| ${prop.name} | \`${prop.type}\` | ${
              prop.required ? "Yes" : "No"
            } | ${prop.defaultValue || "-"} | ${prop.description} |`
        )
        .join("\n");

      const examples = component.examples
        .map((example) => `\`\`\`tsx\n${example}\n\`\`\``)
        .join("\n\n");

      return {
        content: [
          {
            type: "text",
            text: `# ${component.name} Component (Auto-synced)

**Category:** ${component.category}
**Description:** ${component.description}
**Export Type:** ${metadata.exportType}
**TypeScript Support:** ${metadata.hasTypes ? "✅ Yes" : "❌ No"}

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
${propsTable}

## Examples

${examples}

## Accessibility Features
${component.accessibility.map((feature) => `- ${feature}`).join("\n")}

${
  component.variants
    ? `\n## Available Variants\n${component.variants
        .map((variant) => `- ${variant}`)
        .join("\n")}`
    : ""
}

${
  metadata.subComponents && metadata.subComponents.length > 0
    ? `\n## Sub-components\n${metadata.subComponents
        .map((sub) => `- ${sub}`)
        .join("\n")}`
    : ""
}

---
*This component information is automatically synced from the Aki UI source code.*`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error getting component details: ${
              error instanceof Error ? error.message : "Unknown error"
            }`,
          },
        ],
        isError: true,
      };
    }
  }

  async listAllComponents(): Promise<CallToolResult> {
    try {
      const components = this.loadComponents();

      const categorized = components.reduce((acc, comp) => {
        if (!acc[comp.category]) acc[comp.category] = [];
        acc[comp.category].push(comp);
        return acc;
      }, {} as Record<string, ComponentMetadata[]>);

      const componentList = components
        .map(
          (comp) =>
            `- **${comp.name}** (${comp.category}): ${comp.description}${
              comp.hasTypes ? " ✅" : ""
            }${
              comp.subComponents && comp.subComponents.length > 0
                ? ` [+${comp.subComponents.length} sub-components]`
                : ""
            }`
        )
        .join("\n");

      const categoryList = Object.entries(categorized)
        .map(
          ([category, categoryComponents]) =>
            `**${category} (${
              categoryComponents.length
            }):** ${categoryComponents.map((c) => c.name).join(", ")}`
        )
        .join("\n");

      return {
        content: [
          {
            type: "text",
            text: `# Aki UI Components (${components.length} total) - Auto-synced from source

✅ = TypeScript types available
[+N] = Has sub-components

## By Category
${categoryList}

## Complete List
${componentList}

---
*This list is automatically synchronized from the Aki UI source code.*`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error listing components: ${
              error instanceof Error ? error.message : "Unknown error"
            }`,
          },
        ],
        isError: true,
      };
    }
  }

  async getAllComponentsData() {
    try {
      const components = this.loadComponents();
      return components.map((comp) => this.convertToAkiUIComponent(comp));
    } catch (error) {
      console.error("Error getting all components data:", error);
      return [];
    }
  }
}
