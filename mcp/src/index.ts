#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
  CallToolResult,
  GetPromptRequestSchema,
  ListPromptsRequestSchema,
  PromptMessage,
  ReadResourceRequestSchema,
  ListResourcesRequestSchema,
  Resource,
} from "@modelcontextprotocol/sdk/types.js";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageJson = JSON.parse(
  readFileSync(join(__dirname, "../package.json"), "utf-8")
);
const version = packageJson.version;

import { ComponentDiscoveryTool } from "./tools/component-discovery.js";
import { CodeGenerationTool } from "./tools/code-generation.js";
import { DocumentationTool } from "./tools/documentation.js";
import { ThemeManagementTool } from "./tools/theme-management.js";
import {
  OptimizationTool,
  OptimizeComponentRequest,
} from "./tools/optimization.js";
import { ValidationTool, ValidateCodeRequest } from "./tools/validation.js";
import { FormTools } from "./tools/form-tools.js";
import { LayoutTools } from "./tools/layout-tools.js";
import { TestingTools } from "./tools/testing-tools.js";

class AkiUIServer {
  private server: Server;
  private componentDiscovery: ComponentDiscoveryTool;
  private codeGeneration: CodeGenerationTool;
  private documentation: DocumentationTool;
  private themeManagement: ThemeManagementTool;
  private optimization: OptimizationTool;
  private validation: ValidationTool;
  private formTools: FormTools;
  private layoutTools: LayoutTools;
  private testingTools: TestingTools;

  constructor() {
    this.server = new Server(
      {
        name: "aki-ui-mcp-server",
        version: version,
        description:
          "Model Context Protocol server for Aki UI component library",
      },
      {
        capabilities: {
          tools: {},
          prompts: {},
          resources: {},
        },
      }
    );

    this.componentDiscovery = new ComponentDiscoveryTool();
    this.codeGeneration = new CodeGenerationTool();
    this.documentation = new DocumentationTool();
    this.themeManagement = new ThemeManagementTool();
    this.optimization = new OptimizationTool();
    this.validation = new ValidationTool();
    this.formTools = new FormTools();
    this.layoutTools = new LayoutTools();
    this.testingTools = new TestingTools();

    this.setupHandlers();
  }

  private setupHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          ...this.componentDiscovery.getTools(),
          ...this.codeGeneration.getTools(),
          ...this.documentation.getTools(),
          ...this.themeManagement.getTools(),
          this.optimization,
          this.validation,
          ...this.formTools.getTools(),
          ...this.layoutTools.getTools(),
          ...this.testingTools.getTools(),
        ],
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case "search_components":
            return await this.componentDiscovery.searchComponents(args);
          case "get_component_details":
            return await this.componentDiscovery.getComponentDetails(args);
          case "list_all_components":
            return await this.componentDiscovery.listAllComponents();

          case "init_project":
            return await this.codeGeneration.initProject(args);
          case "generate_component":
            return await this.codeGeneration.generateComponent(args);
          case "validate_code":
            if (!args || typeof args !== "object" || !("code" in args)) {
              throw new Error("Missing 'code' argument for validate_code");
            }
            return await this.validation.call(
              args as unknown as ValidateCodeRequest
            );
          case "optimize_component":
            if (!args || typeof args !== "object" || !("code" in args)) {
              throw new Error("Missing 'code' argument for optimize_component");
            }
            return await this.optimization.call(
              args as unknown as OptimizeComponentRequest
            );

          case "search_docs":
            return await this.documentation.searchDocs(args);
          case "get_examples":
            return await this.documentation.getExamples(args);
          case "get_best_practices":
            return await this.documentation.getBestPractices(args);

          case "get_theme":
            return await this.themeManagement.getTheme();
          case "generate_theme":
            return await this.themeManagement.generateTheme(args);
          case "apply_theme_vars":
            return await this.themeManagement.applyThemeVars(args);

          // Form Tools
          case "generate_form":
            return await this.formTools.generateForm(args);
          case "validate_form_schema":
            return await this.formTools.validateFormSchema(args);
          case "suggest_form_fields":
            return await this.formTools.getFormFieldSuggestions(args);
          case "optimize_form_layout":
            return await this.formTools.generateForm(args); // Same as generate_form for now

          // Layout Tools
          case "generate_layout":
            return await this.layoutTools.generateLayout(args);
          case "calculate_grid":
            return await this.layoutTools.calculateGrid(args);
          case "check_responsive":
            return await this.layoutTools.validateResponsiveDesign(args);
          case "suggest_layout_patterns":
            return await this.layoutTools.generateLayout(args); // Same as generate_layout for now

          // Testing Tools
          case "generate_tests":
            return await this.testingTools.generateTests(args);
          case "audit_accessibility":
            return await this.testingTools.generateAccessibilityAudit(args);
          case "benchmark_performance":
            return await this.testingTools.generatePerformanceBenchmark(args);
          case "setup_visual_testing":
            return await this.testingTools.generateTests(args); // Same as generate_tests for now

          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error executing tool ${name}: ${
                error instanceof Error ? error.message : "Unknown error"
              }`,
            },
          ],
          isError: true,
        };
      }
    });

    // List available prompts
    this.server.setRequestHandler(ListPromptsRequestSchema, async () => {
      return {
        prompts: [
          {
            name: "generate_dashboard",
            description: "Generate a complete dashboard with Aki UI components",
            arguments: [
              {
                name: "type",
                description: "Type of dashboard (admin, analytics, etc.)",
                required: true,
              },
              {
                name: "features",
                description:
                  "Features to include (charts, tables, cards, etc.)",
                required: false,
              },
            ],
          },
          {
            name: "create_form",
            description: "Generate a form with validation using Aki UI",
            arguments: [
              {
                name: "fields",
                description: "Form fields specification",
                required: true,
              },
              {
                name: "validation",
                description: "Validation rules",
                required: false,
              },
            ],
          },
          {
            name: "init_project",
            description:
              "Initialize a complete React project with Aki UI setup",
            arguments: [
              {
                name: "projectType",
                description:
                  "Type of project (vite-react, next-js, react-app, dashboard, website)",
                required: true,
              },
              {
                name: "features",
                description:
                  "Features to include (typescript, tailwind, router, auth, forms, etc.)",
                required: false,
              },
              {
                name: "theme",
                description:
                  "Theme style to use (default, dark, modern, minimal, colorful)",
                required: false,
              },
            ],
          },
        ],
      };
    });

    // Handle prompt requests
    this.server.setRequestHandler(GetPromptRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      switch (name) {
        case "generate_dashboard":
          return {
            messages: [
              {
                role: "user",
                content: {
                  type: "text",
                  text: this.generateDashboardPrompt(args),
                },
              },
            ],
          };

        case "create_form":
          return {
            messages: [
              {
                role: "user",
                content: {
                  type: "text",
                  text: this.generateFormPrompt(args),
                },
              },
            ],
          };

        case "init_project":
          return {
            messages: [
              {
                role: "user",
                content: {
                  type: "text",
                  text: this.generateInitProjectPrompt(args),
                },
              },
            ],
          };

        default:
          throw new Error(`Unknown prompt: ${name}`);
      }
    });

    // List available resources
    this.server.setRequestHandler(ListResourcesRequestSchema, async () => {
      return {
        resources: [
          {
            uri: "aki-ui://components/list",
            name: "Component List",
            description: "Complete list of all Aki UI components",
            mimeType: "application/json",
          },
          {
            uri: "aki-ui://docs/llms.txt",
            name: "LLMs Documentation",
            description: "AI-optimized documentation",
            mimeType: "text/plain",
          },
          {
            uri: "aki-ui://theme/default",
            name: "Default Theme",
            description: "Default theme configuration",
            mimeType: "application/json",
          },
        ],
      };
    });

    // Handle resource requests
    this.server.setRequestHandler(
      ReadResourceRequestSchema,
      async (request) => {
        const { uri } = request.params;

        switch (uri) {
          case "aki-ui://components/list":
            return {
              contents: [
                {
                  uri,
                  mimeType: "application/json",
                  text: JSON.stringify(
                    await this.componentDiscovery.getAllComponentsData(),
                    null,
                    2
                  ),
                },
              ],
            };

          case "aki-ui://docs/llms.txt":
            return {
              contents: [
                {
                  uri,
                  mimeType: "text/plain",
                  text: await this.documentation.getLLMsContent(),
                },
              ],
            };

          case "aki-ui://theme/default":
            return {
              contents: [
                {
                  uri,
                  mimeType: "application/json",
                  text: JSON.stringify(
                    await this.themeManagement.getDefaultTheme(),
                    null,
                    2
                  ),
                },
              ],
            };

          default:
            throw new Error(`Unknown resource: ${uri}`);
        }
      }
    );
  }

  private generateDashboardPrompt(args: any): string {
    const type = args?.type || "admin";
    const features = args?.features || "charts, tables, cards, navigation";

    return `Create a ${type} dashboard using Aki UI components with the following features: ${features}.

Please include:
- Responsive layout using Grid component
- Navigation with sidebar or header
- Stats cards showing key metrics
- Data tables for detailed information
- Charts and visualizations if applicable
- Dark mode support
- Proper accessibility attributes

Use these Aki UI components:
- Card, Card.Header, Card.Body
- Grid for responsive layouts
- Button for actions
- DataTable for data display
- Badge for status indicators
- Avatar for user profiles
- Alert for notifications

Example structure:
\`\`\`tsx
import { Card, Grid, Button, DataTable, Badge, Avatar } from '@akitectio/aki-ui';

function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <Grid cols={{ base: 1, md: 2, lg: 4 }} gap={4}>
        {/* Stats cards */}
      </Grid>
      
      <Card>
        <Card.Header>
          <h2>Data Overview</h2>
        </Card.Header>
        <Card.Body>
          <DataTable {...tableProps} />
        </Card.Body>
      </Card>
    </div>
  );
}
\`\`\``;
  }

  private generateFormPrompt(args: any): string {
    const fields = args?.fields || "name, email, password";
    const validation =
      args?.validation || "required fields, email format, password strength";

    return `Create a form using Aki UI FormControl with these fields: ${fields}.

Include validation for: ${validation}

Use these components:
- FormControl for form structure
- Input for text fields
- Select for dropdowns
- Checkbox/Radio for selections
- Button for form submission
- Alert for error messages

Example structure:
\`\`\`tsx
import { FormControl, Input, Button, Alert } from '@akitectio/aki-ui';

function MyForm() {
  return (
    <form className="space-y-4">
      <FormControl label="Name" required error={nameError}>
        <Input value={name} onChange={setName} />
      </FormControl>
      
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
}
\`\`\``;
  }

  private generateInitProjectPrompt(args: any): string {
    const projectType = args?.projectType || "vite-react";
    const features = args?.features || "typescript, tailwind, router";
    const theme = args?.theme || "default";

    return `Initialize a new project with Aki UI for ${projectType} with these features: ${features}.

Use this theme style: ${theme}

Include the following:
- Complete project structure with proper folder organization
- TypeScript configuration
- Tailwind CSS setup with Aki UI theming
- Basic component examples
- Well-structured routing (if router is included)
- Theme provider setup with dark mode support
- Responsive layout configurations
- Proper README with setup instructions

Project setup steps:
1. Initialize the project with correct package manager
2. Install required dependencies 
3. Set up TypeScript configuration
4. Configure Tailwind CSS
5. Create folder structure (components, pages, hooks, utils, etc.)
6. Set up theme provider
7. Create example components using Aki UI
8. Add proper routing (if applicable)
9. Set up build configuration

Example structure for a standard project:
\`\`\`
src/
  components/
    layout/
      Header.tsx
      Footer.tsx
      Sidebar.tsx
    ui/
      Button.tsx (extending Aki UI Button)
      Card.tsx (extending Aki UI Card)
  pages/
    Home.tsx
    About.tsx
  hooks/
    useTheme.ts
  utils/
    api.ts
  App.tsx
  main.tsx
  theme.ts (Aki UI theme configuration)
\`\`\`

Make sure to follow best practices for the chosen project type and include all the requested features.`;
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("Aki UI MCP Server running on stdio");
  }
}

const server = new AkiUIServer();
server.run().catch(console.error);
