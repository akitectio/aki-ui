import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export interface ComponentMetadata {
  name: string;
  description: string;
  category: string;
  hasTypes: boolean;
  exportType: "default" | "named" | "both";
  subComponents?: string[];
  props?: ComponentProp[];
  examples?: string[];
  accessibility?: string[];
  variants?: string[];
}

export interface ComponentProp {
  name: string;
  type: string;
  required: boolean;
  description: string;
  defaultValue?: string;
}

/**
 * Script to sync component metadata from Aki UI source to MCP server
 * This should be run during build process or when components change
 */
export class ComponentMetadataSync {
  private akiUIIndexPath: string;
  private mcpMetadataPath: string;

  constructor() {
    // Path to Aki UI components (during development/build)
    this.akiUIIndexPath = join(
      __dirname,
      "../../../src/lib/components/index.ts"
    );
    // Path to store metadata in MCP
    this.mcpMetadataPath = join(__dirname, "component-metadata.json");
  }

  /**
   * Parse Aki UI components and generate metadata
   */
  parseAkiUIComponents(): ComponentMetadata[] {
    try {
      const content = readFileSync(this.akiUIIndexPath, "utf-8");
      const lines = content.split("\n");
      const components: ComponentMetadata[] = [];

      let currentComponent: Partial<ComponentMetadata> | null = null;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Detect component description pattern: "ComponentName - Description"
        if (line.match(/^\* \w+ - /)) {
          // Extract component name and description from comment
          const match = line.match(/^\* (\w+) - (.+)$/);
          if (match) {
            // Finalize previous component if exists
            if (currentComponent?.name && currentComponent?.description) {
              this.enhanceComponentMetadata(
                currentComponent as ComponentMetadata
              );
              components.push(currentComponent as ComponentMetadata);
            }

            // Start new component
            currentComponent = {
              name: match[1],
              description: match[2],
              category: this.categorizeComponent(match[1], match[2]),
              hasTypes: false,
              exportType: "default",
              subComponents: [],
              props: [],
              examples: [],
              accessibility: [],
            };
          }
        }

        // Parse export statements when we have a current component
        if (currentComponent?.name && line.startsWith("export {")) {
          // Check for default export
          if (
            line.includes("default as") &&
            line.includes(currentComponent.name)
          ) {
            currentComponent.exportType = "default";
          }

          // Check for sub-components
          const subComponentMatch = line.match(
            /(\w+Header|\w+Body|\w+Footer|\w+Item|\w+Toggle|\w+Menu|\w+Brand|\w+Collapse|\w+Group|\w+Section|\w+Row|\w+Column|\w+Left|\w+Right|\w+Element|\w+Addon)/g
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
        if (
          currentComponent?.name &&
          line.startsWith("export type") &&
          line.includes(currentComponent.name)
        ) {
          currentComponent.hasTypes = true;
        }
      }

      // Add the last component if exists
      if (currentComponent?.name && currentComponent?.description) {
        this.enhanceComponentMetadata(currentComponent as ComponentMetadata);
        components.push(currentComponent as ComponentMetadata);
      }

      return components;
    } catch (error) {
      console.error("Error parsing Aki UI components:", error);
      return [];
    }
  }

  /**
   * Categorize component based on name and description
   */
  private categorizeComponent(name: string, description: string): string {
    const nameLower = name.toLowerCase();
    const descLower = description.toLowerCase();

    // Layout components
    if (
      nameLower.includes("grid") ||
      nameLower.includes("stack") ||
      nameLower.includes("layout") ||
      nameLower.includes("container") ||
      nameLower.includes("breakpoint") ||
      nameLower.includes("spacer") ||
      descLower.includes("layout") ||
      descLower.includes("container") ||
      descLower.includes("responsive") ||
      descLower.includes("grid")
    ) {
      return "Layout";
    }

    // Navigation components
    if (
      nameLower.includes("nav") ||
      nameLower.includes("breadcrumb") ||
      nameLower.includes("pagination") ||
      nameLower.includes("tabs") ||
      descLower.includes("navigation") ||
      descLower.includes("menu") ||
      descLower.includes("breadcrumb") ||
      descLower.includes("tab")
    ) {
      return "Navigation";
    }

    // Form/Data Entry components
    if (
      nameLower.includes("input") ||
      nameLower.includes("select") ||
      nameLower.includes("checkbox") ||
      nameLower.includes("radio") ||
      nameLower.includes("switch") ||
      nameLower.includes("slider") ||
      nameLower.includes("form") ||
      nameLower.includes("floating") ||
      descLower.includes("form") ||
      descLower.includes("input") ||
      descLower.includes("selection") ||
      descLower.includes("toggle") ||
      descLower.includes("validation")
    ) {
      return "Data Entry";
    }

    // Feedback components
    if (
      nameLower.includes("alert") ||
      nameLower.includes("toast") ||
      nameLower.includes("modal") ||
      nameLower.includes("drawer") ||
      nameLower.includes("popover") ||
      nameLower.includes("tooltip") ||
      nameLower.includes("spinner") ||
      nameLower.includes("skeleton") ||
      descLower.includes("notification") ||
      descLower.includes("loading") ||
      descLower.includes("feedback") ||
      descLower.includes("dialog") ||
      descLower.includes("popup") ||
      descLower.includes("overlay")
    ) {
      return "Feedback";
    }

    // Interactive components
    if (
      nameLower.includes("button") ||
      nameLower.includes("dropdown") ||
      nameLower.includes("chatbot") ||
      descLower.includes("interactive") ||
      descLower.includes("click") ||
      descLower.includes("trigger") ||
      descLower.includes("action") ||
      descLower.includes("button")
    ) {
      return "Interactive";
    }

    // Data Display components (default)
    return "Data Display";
  }

  /**
   * Enhance component metadata with category-specific information
   */
  private enhanceComponentMetadata(component: ComponentMetadata): void {
    // Add basic props that most components have
    component.props = component.props || [];
    component.props.push(
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
      }
    );

    // Add category-specific props and examples
    switch (component.category) {
      case "Data Entry":
        component.props.push(
          {
            name: "value",
            type: "any",
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
            defaultValue: "false",
          }
        );
        component.examples = [
          `<${component.name} value={value} onChange={setValue} />`,
          `<${component.name} placeholder="Enter value..." disabled />`,
        ];
        component.accessibility = [
          "Proper labeling",
          "Keyboard navigation",
          "Form validation support",
          "Screen reader support",
        ];
        break;

      case "Feedback":
        component.props.push(
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
        component.examples = [
          `<${component.name} isOpen={isOpen} onClose={onClose}>Content</${component.name}>`,
        ];
        component.accessibility = [
          "ARIA live regions",
          "Focus management",
          "Escape key support",
          "Screen reader announcements",
        ];
        break;

      case "Interactive":
        component.props.push(
          {
            name: "onClick",
            type: "() => void",
            required: false,
            description: "Click handler",
          },
          {
            name: "disabled",
            type: "boolean",
            required: false,
            description: "Disabled state",
            defaultValue: "false",
          }
        );
        component.examples = [
          `<${component.name} onClick={handleClick}>Click me</${component.name}>`,
        ];
        component.accessibility = [
          "Keyboard navigation",
          "Focus indicators",
          "ARIA button semantics",
          "Screen reader support",
        ];
        break;

      case "Layout":
        component.examples = [
          `<${component.name}>\n  <div>Content 1</div>\n  <div>Content 2</div>\n</${component.name}>`,
        ];
        component.accessibility = [
          "Semantic structure",
          "Logical reading order",
          "Responsive design",
        ];
        break;

      case "Navigation":
        component.examples = [
          `<${component.name}>\n  <${component.name}Item>Home</${component.name}Item>\n  <${component.name}Item>About</${component.name}Item>\n</${component.name}>`,
        ];
        component.accessibility = [
          "ARIA navigation landmarks",
          "Keyboard navigation",
          "Screen reader support",
          "Focus management",
        ];
        break;

      default: // Data Display
        component.examples = [
          `<${component.name}>Display content</${component.name}>`,
        ];
        component.accessibility = [
          "Semantic HTML",
          "Screen reader friendly",
          "Proper contrast ratios",
        ];
        break;
    }
  }

  /**
   * Sync metadata from Aki UI to MCP
   */
  syncMetadata(): {
    success: boolean;
    componentCount: number;
    metadataPath: string;
    newComponents: string[];
    updatedComponents: string[];
    error?: string;
  } {
    try {
      // Load existing metadata to compare
      const existingComponents = this.loadMetadata();
      const existingNames = new Set(existingComponents.map((c) => c.name));

      // Parse current components
      const currentComponents = this.parseAkiUIComponents();
      const currentNames = new Set(currentComponents.map((c) => c.name));

      // Find new and updated components
      const newComponents = currentComponents
        .filter((c) => !existingNames.has(c.name))
        .map((c) => c.name);

      const updatedComponents = currentComponents
        .filter((c) => existingNames.has(c.name))
        .map((c) => c.name);

      // Write metadata
      this.writeMetadata(currentComponents);

      return {
        success: true,
        componentCount: currentComponents.length,
        metadataPath: this.mcpMetadataPath,
        newComponents,
        updatedComponents,
      };
    } catch (error) {
      return {
        success: false,
        componentCount: 0,
        metadataPath: this.mcpMetadataPath,
        newComponents: [],
        updatedComponents: [],
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  /**
   * Load metadata from JSON file
   */
  loadMetadata(): ComponentMetadata[] {
    // Try multiple paths for metadata file
    const possiblePaths = [
      this.mcpMetadataPath, // dist/tools/component-metadata.json
      join(__dirname, "../../src/tools/component-metadata.json"), // src/tools/component-metadata.json
      join(__dirname, "component-metadata.json"), // same directory
    ];

    for (const path of possiblePaths) {
      try {
        const content = readFileSync(path, "utf-8");
        const data = JSON.parse(content);
        console.log(`📖 Loaded metadata from: ${path}`);
        return data.components || [];
      } catch (error) {
        // Continue to next path
      }
    }

    console.warn(
      "⚠️ No metadata file found in any location, returning empty array"
    );
    console.warn(`Searched paths: ${possiblePaths.join(", ")}`);
    return [];
  }

  /**
   * Write metadata to JSON file
   */
  private writeMetadata(components: ComponentMetadata[]): void {
    const metadataContent = JSON.stringify(
      {
        lastUpdated: new Date().toISOString(),
        version: "auto-generated",
        components: components,
      },
      null,
      2
    );

    // Write to dist directory (for development and runtime)
    writeFileSync(this.mcpMetadataPath, metadataContent);

    // Also write to src directory so it's available during development
    const srcMetadataPath = join(
      __dirname,
      "../../src/tools/component-metadata.json"
    );
    writeFileSync(srcMetadataPath, metadataContent);

    console.log(
      `✅ Synced ${components.length} components to ${this.mcpMetadataPath}`
    );
    console.log(`✅ Also copied to src: ${srcMetadataPath}`);

    // Log summary
    const categories = components.reduce((acc, comp) => {
      acc[comp.category] = (acc[comp.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    console.log("📊 Component breakdown:");
    Object.entries(categories).forEach(([category, count]) => {
      console.log(`   ${category}: ${count} components`);
    });
  }
}

// Export for use in build scripts
if (import.meta.url === `file://${process.argv[1]}`) {
  const sync = new ComponentMetadataSync();
  sync.syncMetadata();
}
