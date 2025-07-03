import { Tool, CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export interface AutoDiscoveredComponent {
  name: string;
  description: string;
  category: string;
  hasTypes: boolean;
  exportType: "default" | "named" | "both";
  subComponents?: string[];
}

export class ComponentAutoDiscovery {
  private componentsIndexPath: string;
  private cachedComponents: AutoDiscoveredComponent[] | null = null;
  private lastModified: number = 0;

  constructor() {
    // Path to the main Aki UI components index file
    // This path works from the MCP dist folder to the main Aki UI src
    this.componentsIndexPath = join(
      __dirname,
      "../../../src/lib/components/index.ts"
    );
  }

  /**
   * Parse the components index.ts file to automatically discover all components
   */
  private parseComponentsFile(): AutoDiscoveredComponent[] {
    try {
      const content = readFileSync(this.componentsIndexPath, "utf-8");
      const lines = content.split("\n");
      const components: AutoDiscoveredComponent[] = [];

      let currentComponent: Partial<AutoDiscoveredComponent> | null = null;
      let inCommentBlock = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Detect component comment blocks
        if (line.startsWith("/**")) {
          inCommentBlock = true;
          currentComponent = {
            hasTypes: false,
            exportType: "default",
            subComponents: [],
          };
          continue;
        }

        // Parse component description from comment
        if (inCommentBlock && line.startsWith("*") && !line.startsWith("*/")) {
          const commentText = line.replace(/^\*\s?/, "").trim();
          if (commentText && !currentComponent?.description) {
            // First line after component name is the description
            const parts = commentText.split(" - ");
            if (parts.length >= 2) {
              currentComponent!.name = parts[0];
              currentComponent!.description = parts[1];
              currentComponent!.category = this.categorizeComponent(
                parts[0],
                parts[1]
              );
            }
          }
        }

        // End of comment block
        if (line.startsWith("*/")) {
          inCommentBlock = false;
          continue;
        }

        // Parse export statements
        if (line.startsWith("export {") && currentComponent?.name) {
          // Check for default export
          if (line.includes("default as")) {
            const match = line.match(/default as (\w+)/);
            if (match) {
              currentComponent.name = match[1];
              currentComponent.exportType = "default";
            }
          }

          // Check for sub-components (like ModalHeader, ModalBody, etc.)
          const subComponentMatch = line.match(
            /(\w+Header|\w+Body|\w+Footer|\w+Item|\w+Toggle|\w+Menu)/g
          );
          if (subComponentMatch) {
            currentComponent.subComponents = subComponentMatch;
            currentComponent.exportType = "both";
          }

          // Check for named exports
          if (line.includes(",") && !line.includes("default")) {
            currentComponent.exportType = "named";
          }
        }

        // Parse type exports
        if (line.startsWith("export type") && currentComponent?.name) {
          currentComponent.hasTypes = true;
        }

        // Add component when we hit the next comment or export
        if (
          currentComponent?.name &&
          currentComponent?.description &&
          (line.startsWith("/**") || i === lines.length - 1)
        ) {
          components.push(currentComponent as AutoDiscoveredComponent);
          currentComponent = null;
        }
      }

      return components;
    } catch (error) {
      console.error("Error parsing components file:", error);
      return [];
    }
  }

  /**
   * Categorize component based on name and description
   */
  private categorizeComponent(name: string, description: string): string {
    const namelower = name.toLowerCase();
    const descLower = description.toLowerCase();

    // Layout components
    if (
      namelower.includes("grid") ||
      namelower.includes("stack") ||
      namelower.includes("layout") ||
      namelower.includes("container") ||
      descLower.includes("layout") ||
      descLower.includes("container")
    ) {
      return "Layout";
    }

    // Navigation components
    if (
      namelower.includes("nav") ||
      namelower.includes("breadcrumb") ||
      namelower.includes("pagination") ||
      namelower.includes("tabs") ||
      descLower.includes("navigation") ||
      descLower.includes("menu")
    ) {
      return "Navigation";
    }

    // Form/Data Entry components
    if (
      namelower.includes("input") ||
      namelower.includes("select") ||
      namelower.includes("checkbox") ||
      namelower.includes("radio") ||
      namelower.includes("switch") ||
      namelower.includes("slider") ||
      namelower.includes("form") ||
      descLower.includes("form") ||
      descLower.includes("input") ||
      descLower.includes("selection")
    ) {
      return "Data Entry";
    }

    // Feedback components
    if (
      namelower.includes("alert") ||
      namelower.includes("toast") ||
      namelower.includes("modal") ||
      namelower.includes("drawer") ||
      namelower.includes("popover") ||
      namelower.includes("tooltip") ||
      namelower.includes("spinner") ||
      namelower.includes("skeleton") ||
      descLower.includes("notification") ||
      descLower.includes("loading") ||
      descLower.includes("feedback") ||
      descLower.includes("dialog")
    ) {
      return "Feedback";
    }

    // Interactive components
    if (
      namelower.includes("button") ||
      namelower.includes("dropdown") ||
      namelower.includes("chatbot") ||
      descLower.includes("interactive") ||
      descLower.includes("click") ||
      descLower.includes("trigger")
    ) {
      return "Interactive";
    }

    // Data Display components (default)
    return "Data Display";
  }

  /**
   * Get all components with auto-refresh capability
   */
  async getComponents(): Promise<AutoDiscoveredComponent[]> {
    try {
      const stats = readFileSync(this.componentsIndexPath, "utf-8");
      const currentModified = Date.now(); // Simple timestamp

      // Check if we need to refresh the cache
      if (
        !this.cachedComponents ||
        currentModified > this.lastModified + 5000
      ) {
        // 5 second cache
        this.cachedComponents = this.parseComponentsFile();
        this.lastModified = currentModified;
      }

      return this.cachedComponents;
    } catch (error) {
      console.error("Error getting components:", error);
      return [];
    }
  }

  /**
   * Get component by name
   */
  async getComponent(name: string): Promise<AutoDiscoveredComponent | null> {
    const components = await this.getComponents();
    return (
      components.find(
        (comp) => comp.name.toLowerCase() === name.toLowerCase()
      ) || null
    );
  }

  /**
   * Search components
   */
  async searchComponents(
    query: string,
    category?: string
  ): Promise<AutoDiscoveredComponent[]> {
    const components = await this.getComponents();
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

    return filtered;
  }

  /**
   * Get components grouped by category
   */
  async getComponentsByCategory(): Promise<
    Record<string, AutoDiscoveredComponent[]>
  > {
    const components = await this.getComponents();
    return components.reduce((acc, comp) => {
      if (!acc[comp.category]) acc[comp.category] = [];
      acc[comp.category].push(comp);
      return acc;
    }, {} as Record<string, AutoDiscoveredComponent[]>);
  }

  /**
   * Generate comprehensive component documentation
   */
  async generateComponentDocs(name: string): Promise<string> {
    const component = await this.getComponent(name);
    if (!component) {
      return `Component "${name}" not found.`;
    }

    let docs = `# ${component.name} Component

**Category:** ${component.category}
**Description:** ${component.description}
**Export Type:** ${component.exportType}
**Has TypeScript Types:** ${component.hasTypes ? "Yes" : "No"}

## Usage

\`\`\`tsx
import { ${component.name}${
      component.hasTypes ? `, ${component.name}Props` : ""
    } } from '@akitectio/aki-ui';

function MyComponent() {
  return (
    <${component.name}>
      {/* Component content */}
    </${component.name}>
  );
}
\`\`\`
`;

    if (component.subComponents && component.subComponents.length > 0) {
      docs += `
## Sub-components

This component includes the following sub-components:
${component.subComponents.map((sub) => `- ${sub}`).join("\n")}

### Usage with Sub-components

\`\`\`tsx
import { ${component.name}, ${component.subComponents.join(
        ", "
      )} } from '@akitectio/aki-ui';

function MyComponent() {
  return (
    <${component.name}>
      ${component.subComponents
        .map(
          (sub) => `<${sub}>${sub.replace(component.name, "")} content</${sub}>`
        )
        .join("\n      ")}
    </${component.name}>
  );
}
\`\`\`
`;
    }

    // Add common patterns based on category
    docs += this.generateCategorySpecificDocs(component);

    return docs;
  }

  /**
   * Generate category-specific documentation patterns
   */
  private generateCategorySpecificDocs(
    component: AutoDiscoveredComponent
  ): string {
    switch (component.category) {
      case "Data Entry":
        return `
## Common Patterns

### Form Integration
\`\`\`tsx
<FormControl label="${component.name} Field">
  <${component.name} 
    value={value}
    onChange={setValue}
    placeholder="Enter value..."
  />
</FormControl>
\`\`\`

### Validation
\`\`\`tsx
<${component.name} 
  value={value}
  onChange={setValue}
  error={!!error}
  helperText={error}
/>
\`\`\`
`;

      case "Feedback":
        return `
## Common Patterns

### Controlled Usage
\`\`\`tsx
<${component.name} 
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
>
  Content here
</${component.name}>
\`\`\`
`;

      case "Layout":
        return `
## Common Patterns

### Responsive Design
\`\`\`tsx
<${component.name} 
  cols={{ base: 1, md: 2, lg: 3 }}
  gap={4}
>
  {items.map(item => (
    <div key={item.id}>{item.content}</div>
  ))}
</${component.name}>
\`\`\`
`;

      default:
        return `
## Common Patterns

### Basic Usage
\`\`\`tsx
<${component.name}>
  Content
</${component.name}>
\`\`\`
`;
    }
  }
}
