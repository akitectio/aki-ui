import { Tool, CallToolResult } from "@modelcontextprotocol/sdk/types.js";

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
  private components: AkiUIComponent[] = [
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
      name: "Card",
      category: "Layout",
      description:
        "A flexible container component with header, body, and footer sections",
      props: [
        {
          name: "className",
          type: "string",
          required: false,
          description: "Additional CSS classes",
        },
        {
          name: "children",
          type: "React.ReactNode",
          required: true,
          description: "Card content",
        },
      ],
      examples: [
        "<Card><Card.Header><h3>Title</h3></Card.Header><Card.Body>Content</Card.Body></Card>",
        '<Card className="shadow-lg"><Card.Body>Simple card</Card.Body></Card>',
      ],
      accessibility: ["Semantic HTML structure", "Screen reader friendly"],
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
    {
      name: "DataTable",
      category: "Data Display",
      description:
        "Advanced data table with sorting, filtering, and pagination",
      props: [
        {
          name: "data",
          type: "any[]",
          required: true,
          description: "Table data array",
        },
        {
          name: "columns",
          type: "Column[]",
          required: true,
          description: "Column definitions",
        },
        {
          name: "searchable",
          type: "boolean",
          required: false,
          description: "Enable search",
          defaultValue: "false",
        },
        {
          name: "sortable",
          type: "boolean",
          required: false,
          description: "Enable sorting",
          defaultValue: "false",
        },
        {
          name: "pagination",
          type: "boolean",
          required: false,
          description: "Enable pagination",
          defaultValue: "false",
        },
      ],
      examples: [
        "<DataTable data={users} columns={userColumns} searchable sortable pagination />",
        "<DataTable data={products} columns={productColumns} />",
      ],
      accessibility: [
        "Table semantics",
        "Screen reader support",
        "Keyboard navigation",
      ],
    },
    {
      name: "Grid",
      category: "Layout",
      description: "Responsive grid layout component",
      props: [
        {
          name: "cols",
          type: "number | ResponsiveValue",
          required: false,
          description: "Number of columns",
          defaultValue: "1",
        },
        {
          name: "gap",
          type: "number",
          required: false,
          description: "Grid gap",
          defaultValue: "4",
        },
        {
          name: "children",
          type: "React.ReactNode",
          required: true,
          description: "Grid items",
        },
      ],
      examples: [
        "<Grid cols={{ base: 1, md: 2, lg: 3 }} gap={4}>...</Grid>",
        "<Grid cols={4}>...</Grid>",
      ],
      accessibility: ["Semantic layout structure"],
    },
    {
      name: "Alert",
      category: "Feedback",
      description: "Alert component for displaying important messages",
      props: [
        {
          name: "variant",
          type: "info | success | warning | error",
          required: false,
          description: "Alert type",
          defaultValue: "info",
        },
        {
          name: "children",
          type: "React.ReactNode",
          required: true,
          description: "Alert content",
        },
      ],
      examples: [
        '<Alert variant="success">Operation completed successfully</Alert>',
        '<Alert variant="error">An error occurred</Alert>',
      ],
      accessibility: ["ARIA roles", "Screen reader announcements"],
      variants: ["info", "success", "warning", "error"],
    },
    {
      name: "Badge",
      category: "Data Display",
      description: "Small status indicator component",
      props: [
        {
          name: "variant",
          type: "primary | secondary | success | warning | error",
          required: false,
          description: "Badge style",
          defaultValue: "primary",
        },
        {
          name: "children",
          type: "React.ReactNode",
          required: true,
          description: "Badge content",
        },
      ],
      examples: [
        '<Badge variant="success">Active</Badge>',
        '<Badge variant="warning">Pending</Badge>',
      ],
      accessibility: ["Semantic meaning"],
      variants: ["primary", "secondary", "success", "warning", "error"],
    },
    {
      name: "Chatbot",
      category: "Interactive",
      description: "AI chatbot interface with customizable rules and responses",
      props: [
        {
          name: "rules",
          type: "ChatbotRule[]",
          required: false,
          description: "Chatbot conversation rules",
        },
        {
          name: "greeting",
          type: "string",
          required: false,
          description: "Initial greeting message",
        },
        {
          name: "title",
          type: "string",
          required: false,
          description: "Chat window title",
          defaultValue: "AI Assistant",
        },
        {
          name: "minimized",
          type: "boolean",
          required: false,
          description: "Start minimized",
          defaultValue: "false",
        },
      ],
      examples: [
        '<Chatbot greeting="Hello! How can I help?" title="Support Bot" />',
        "<Chatbot rules={customRules} minimized />",
      ],
      accessibility: [
        "Keyboard navigation",
        "Screen reader support",
        "Focus management",
      ],
    },
  ];

  getTools(): Tool[] {
    return [
      {
        name: "search_components",
        description:
          "Search for Aki UI components by name, category, or description",
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
        description: "Get detailed information about a specific component",
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
          "List all available Aki UI components with brief descriptions",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
    ];
  }

  async searchComponents(args: any): Promise<CallToolResult> {
    const { query, category } = args;

    let filteredComponents = this.components;

    if (category) {
      filteredComponents = filteredComponents.filter(
        (comp) => comp.category === category
      );
    }

    if (query) {
      const searchTerm = query.toLowerCase();
      filteredComponents = filteredComponents.filter(
        (comp) =>
          comp.name.toLowerCase().includes(searchTerm) ||
          comp.description.toLowerCase().includes(searchTerm) ||
          comp.category.toLowerCase().includes(searchTerm)
      );
    }

    const results = filteredComponents.map((comp) => ({
      name: comp.name,
      category: comp.category,
      description: comp.description,
      variants: comp.variants,
    }));

    return {
      content: [
        {
          type: "text",
          text: `Found ${results.length} components:\n\n${results
            .map(
              (comp) =>
                `**${comp.name}** (${comp.category})\n${comp.description}${
                  comp.variants ? `\nVariants: ${comp.variants.join(", ")}` : ""
                }`
            )
            .join("\n\n")}`,
        },
      ],
    };
  }

  async getComponentDetails(args: any): Promise<CallToolResult> {
    const { name } = args;

    const component = this.components.find(
      (comp) => comp.name.toLowerCase() === name.toLowerCase()
    );

    if (!component) {
      return {
        content: [
          {
            type: "text",
            text: `Component "${name}" not found. Available components: ${this.components
              .map((c) => c.name)
              .join(", ")}`,
          },
        ],
        isError: true,
      };
    }

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
          text: `# ${component.name} Component

**Category:** ${component.category}
**Description:** ${component.description}

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
}`,
        },
      ],
    };
  }

  async listAllComponents(): Promise<CallToolResult> {
    const componentList = this.components
      .map(
        (comp) => `- **${comp.name}** (${comp.category}): ${comp.description}`
      )
      .join("\n");

    const categorized = this.components.reduce((acc, comp) => {
      if (!acc[comp.category]) acc[comp.category] = [];
      acc[comp.category].push(comp.name);
      return acc;
    }, {} as Record<string, string[]>);

    const categoryList = Object.entries(categorized)
      .map(
        ([category, components]) => `**${category}:** ${components.join(", ")}`
      )
      .join("\n");

    return {
      content: [
        {
          type: "text",
          text: `# Aki UI Components (${this.components.length} total)

## By Category
${categoryList}

## Complete List
${componentList}`,
        },
      ],
    };
  }

  async getAllComponentsData() {
    return this.components;
  }
}
