import { Tool, CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import {
  ComponentAutoDiscovery,
  AutoDiscoveredComponent,
} from "./component-auto-discovery.js";

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
  private autoDiscovery: ComponentAutoDiscovery;
  private enhancedComponents: Map<string, AkiUIComponent> = new Map();

  constructor() {
    this.autoDiscovery = new ComponentAutoDiscovery();
    this.initializeEnhancedComponents();
  }

  /**
   * Initialize enhanced component data for components that need more detailed information
   */
  private initializeEnhancedComponents() {
    // Enhanced data for frequently used components with detailed props and examples
    const enhancedData: AkiUIComponent[] = [
      {
        name: "Button",
        category: "Interactive",
        description:
          "A versatile button component with multiple variants and states",
        props: [
          {
            name: "variant",
            type: "primary | secondary | success | warning | error",
            required: false,
            description: "Button style variant",
            defaultValue: "primary",
          },
          {
            name: "size",
            type: "xs | sm | md | lg | xl",
            required: false,
            description: "Button size",
            defaultValue: "md",
          },
          {
            name: "disabled",
            type: "boolean",
            required: false,
            description: "Whether button is disabled",
            defaultValue: "false",
          },
          {
            name: "loading",
            type: "boolean",
            required: false,
            description: "Show loading state",
            defaultValue: "false",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: true,
            description: "Button content",
          },
        ],
        examples: [
          '<Button variant="primary">Primary Button</Button>',
          '<Button variant="secondary" size="sm">Small Secondary</Button>',
          "<Button loading disabled>Loading Button</Button>",
        ],
        accessibility: [
          "Proper ARIA attributes",
          "Keyboard navigation support",
          "Focus management",
        ],
        variants: ["primary", "secondary", "success", "warning", "error"],
      },
      {
        name: "Input",
        category: "Data Entry",
        description: "Text input component with validation and various types",
        props: [
          {
            name: "type",
            type: "text | email | password | number | tel | url",
            required: false,
            description: "Input type",
            defaultValue: "text",
          },
          {
            name: "placeholder",
            type: "string",
            required: false,
            description: "Placeholder text",
          },
          {
            name: "value",
            type: "string",
            required: false,
            description: "Input value",
          },
          {
            name: "onChange",
            type: "(value: string) => void",
            required: false,
            description: "Change handler",
          },
          {
            name: "disabled",
            type: "boolean",
            required: false,
            description: "Whether input is disabled",
          },
          {
            name: "error",
            type: "boolean",
            required: false,
            description: "Error state",
          },
        ],
        examples: [
          '<Input placeholder="Enter your name" />',
          '<Input type="email" value={email} onChange={setEmail} />',
          '<Input error placeholder="Invalid input" />',
        ],
        accessibility: [
          "Proper labeling",
          "Error announcements",
          "Keyboard navigation",
        ],
      },
    ];

    // Store enhanced data in map for quick lookup
    enhancedData.forEach((comp) => {
      this.enhancedComponents.set(comp.name.toLowerCase(), comp);
    });
  }

  /**
   * Convert auto-discovered component to AkiUIComponent format
   */
  private async convertToAkiUIComponent(
    autoComp: AutoDiscoveredComponent
  ): Promise<AkiUIComponent> {
    // Check if we have enhanced data for this component
    const enhanced = this.enhancedComponents.get(autoComp.name.toLowerCase());
    if (enhanced) {
      return enhanced;
    }

    // Generate basic component info from auto-discovery
    return {
      name: autoComp.name,
      category: autoComp.category as any,
      description: autoComp.description,
      props: this.generateBasicProps(autoComp),
      examples: this.generateBasicExamples(autoComp),
      accessibility: this.generateBasicAccessibility(autoComp),
    };
  }

  /**
   * Generate basic props for components without enhanced data
   */
  private generateBasicProps(comp: AutoDiscoveredComponent): ComponentProp[] {
    const basicProps: ComponentProp[] = [
      {
        name: "className",
        type: "string",
        required: false,
        description: "Additional CSS classes",
      },
      {
        name: "children",
        type: "React.ReactNode",
        required: false,
        description: "Component content",
      },
    ];

    // Add category-specific props
    if (comp.category === "Data Entry") {
      basicProps.push(
        {
          name: "value",
          type: "string",
          required: false,
          description: "Component value",
        },
        {
          name: "onChange",
          type: "(value: any) => void",
          required: false,
          description: "Change handler",
        },
        {
          name: "disabled",
          type: "boolean",
          required: false,
          description: "Disabled state",
        }
      );
    }

    if (comp.category === "Feedback") {
      basicProps.push(
        {
          name: "isOpen",
          type: "boolean",
          required: false,
          description: "Visibility state",
        },
        {
          name: "onClose",
          type: "() => void",
          required: false,
          description: "Close handler",
        }
      );
    }

    return basicProps;
  }

  /**
   * Generate basic examples for components
   */
  private generateBasicExamples(comp: AutoDiscoveredComponent): string[] {
    const examples = [`<${comp.name}>Content</${comp.name}>`];

    if (comp.subComponents && comp.subComponents.length > 0) {
      const subComponentExample = `<${comp.name}>
  ${comp.subComponents
    .map((sub) => `<${sub}>${sub.replace(comp.name, "")} content</${sub}>`)
    .join("\n  ")}
</${comp.name}>`;
      examples.push(subComponentExample);
    }

    return examples;
  }

  /**
   * Generate basic accessibility features
   */
  private generateBasicAccessibility(comp: AutoDiscoveredComponent): string[] {
    const accessibility = [
      "Semantic HTML structure",
      "Keyboard navigation support",
    ];

    if (comp.category === "Data Entry") {
      accessibility.push("Proper labeling", "Form validation support");
    }

    if (comp.category === "Feedback") {
      accessibility.push("ARIA live regions", "Focus management");
    }

    if (comp.category === "Navigation") {
      accessibility.push("ARIA navigation landmarks", "Screen reader support");
    }

    return accessibility;
  }

  getTools(): Tool[] {
    return [
      {
        name: "search_components",
        description:
          "Search for Aki UI components by name, category, or description (Auto-updated from source)",
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
          "Get detailed information about a specific component (Auto-updated from source)",
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
          "List all available Aki UI components with brief descriptions (Auto-updated from source)",
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

      const autoComponents = await this.autoDiscovery.searchComponents(
        query,
        category
      );
      const results = await Promise.all(
        autoComponents.map(async (comp) => {
          const converted = await this.convertToAkiUIComponent(comp);
          return {
            name: converted.name,
            category: converted.category,
            description: converted.description,
            variants: converted.variants,
            hasTypes: comp.hasTypes,
            exportType: comp.exportType,
            subComponents: comp.subComponents,
          };
        })
      );

      return {
        content: [
          {
            type: "text",
            text: `Found ${
              results.length
            } components (Auto-discovered from source):\n\n${results
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

      const autoComp = await this.autoDiscovery.getComponent(name);
      if (!autoComp) {
        const allComponents = await this.autoDiscovery.getComponents();
        return {
          content: [
            {
              type: "text",
              text: `Component "${name}" not found. Available components: ${allComponents
                .map((c) => c.name)
                .join(", ")}`,
            },
          ],
          isError: true,
        };
      }

      const component = await this.convertToAkiUIComponent(autoComp);

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

      // Use auto-generated docs if available
      const autoGenDocs = await this.autoDiscovery.generateComponentDocs(name);

      return {
        content: [
          {
            type: "text",
            text: `# ${component.name} Component (Auto-discovered)

**Category:** ${component.category}
**Description:** ${component.description}
**Export Type:** ${autoComp.exportType}
**TypeScript Support:** ${autoComp.hasTypes ? "✅ Yes" : "❌ No"}

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
  autoComp.subComponents && autoComp.subComponents.length > 0
    ? `\n## Sub-components\n${autoComp.subComponents
        .map((sub) => `- ${sub}`)
        .join("\n")}`
    : ""
}

---

## Auto-Generated Documentation

${autoGenDocs}`,
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
      const autoComponents = await this.autoDiscovery.getComponents();
      const categorized = await this.autoDiscovery.getComponentsByCategory();

      const componentList = autoComponents
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
          ([category, components]) =>
            `**${category} (${components.length}):** ${components
              .map((c) => c.name)
              .join(", ")}`
        )
        .join("\n");

      return {
        content: [
          {
            type: "text",
            text: `# Aki UI Components (${autoComponents.length} total) - Auto-discovered from source

✅ = TypeScript types available
[+N] = Has sub-components

## By Category
${categoryList}

## Complete List
${componentList}

---
*This list is automatically generated from the Aki UI source code and updates in real-time.*`,
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
      const autoComponents = await this.autoDiscovery.getComponents();
      return await Promise.all(
        autoComponents.map(
          async (comp) => await this.convertToAkiUIComponent(comp)
        )
      );
    } catch (error) {
      console.error("Error getting all components data:", error);
      return [];
    }
  }
}
