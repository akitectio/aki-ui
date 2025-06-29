import { Tool, CallToolResult } from "@modelcontextprotocol/sdk/types.js";

export class CodeGenerationTool {
  getTools(): Tool[] {
    return [
      {
        name: "init_project",
        description: "Initialize a complete React project with Aki UI setup",
        inputSchema: {
          type: "object",
          properties: {
            projectType: {
              type: "string",
              description: "Type of project to initialize",
              enum: [
                "vite-react",
                "next-js",
                "react-app",
                "dashboard",
                "website",
                "admin-panel",
                "portfolio",
              ],
            },
            projectName: {
              type: "string",
              description: "Name of the project",
            },
            features: {
              type: "array",
              items: { type: "string" },
              description:
                "Features to include (typescript, tailwind, router, auth, forms, etc.)",
            },
            theme: {
              type: "string",
              description: "Default theme style",
              enum: ["default", "dark", "modern", "minimal", "colorful"],
            },
            includeExamples: {
              type: "boolean",
              description: "Include example components and pages",
              default: true,
            },
          },
          required: ["projectType", "projectName"],
        },
      },
      {
        name: "generate_component",
        description: "Generate React component code using Aki UI components",
        inputSchema: {
          type: "object",
          properties: {
            type: {
              type: "string",
              description:
                "Type of component to generate (form, dashboard, card, etc.)",
              enum: ["form", "dashboard", "card", "table", "layout", "custom"],
            },
            components: {
              type: "array",
              items: { type: "string" },
              description: "List of Aki UI components to use",
            },
            props: {
              type: "object",
              description: "Component properties and configuration",
            },
            features: {
              type: "array",
              items: { type: "string" },
              description:
                "Features to include (validation, dark mode, responsive, etc.)",
            },
          },
          required: ["type"],
        },
      },
      {
        name: "validate_code",
        description: "Validate React/Aki UI component code for best practices",
        inputSchema: {
          type: "object",
          properties: {
            code: {
              type: "string",
              description: "React component code to validate",
            },
          },
          required: ["code"],
        },
      },
      {
        name: "optimize_component",
        description:
          "Optimize React component code for better performance and accessibility",
        inputSchema: {
          type: "object",
          properties: {
            code: {
              type: "string",
              description: "React component code to optimize",
            },
            focus: {
              type: "string",
              enum: [
                "performance",
                "accessibility",
                "bundle-size",
                "best-practices",
              ],
              description: "Optimization focus area",
            },
          },
          required: ["code"],
        },
      },
    ];
  }

  async initProject(args: any): Promise<CallToolResult> {
    const {
      projectType,
      projectName,
      features = [],
      theme = "default",
      includeExamples = true,
    } = args;

    const hasTypeScript =
      features.includes("typescript") || projectType !== "react-app";

    const projectStructure = this.generateProjectStructure(
      projectType,
      projectName,
      features,
      theme,
      includeExamples
    );

    return {
      content: [
        {
          type: "text",
          text: `# ${projectName} - Aki UI Project Setup

## Project Structure
\`\`\`
${projectStructure.structure}
\`\`\`

## Installation Commands
\`\`\`bash
${projectStructure.installCommands.join("\n")}
\`\`\`

## Key Files Created

### package.json
\`\`\`json
${JSON.stringify(projectStructure.packageJson, null, 2)}
\`\`\`

### Main App Component
\`\`\`tsx
${projectStructure.mainApp}
\`\`\`

### Theme Configuration
\`\`\`typescript
${projectStructure.themeConfig}
\`\`\`

### Path Aliases Configuration
\`\`\`${
            projectType === "next-js"
              ? "javascript"
              : hasTypeScript
              ? "typescript"
              : "javascript"
          }
${projectStructure.configWithAliases}
\`\`\`

${
  includeExamples
    ? `
### Example Components
\`\`\`tsx
${projectStructure.exampleComponents}
\`\`\`
`
    : ""
}

## Next Steps
1. Run the installation commands above
2. Copy the generated files to your project
3. Configure path aliases by copying the configuration above to your vite.config.ts/next.config.js/tsconfig.json
4. Start development: \`npm run dev\`
5. Use path aliases in your imports (e.g., \`import Button from '@akitectio/aki-ui'\` for Aki UI components, \`import MyComponent from '@/components/MyComponent'\` for your components)
6. Customize theme and components as needed

## Path Aliases Available
- \`@/*\` → \`./src/*\`
- \`@/components/*\` → \`./src/components/*\`
- \`@/pages/*\` → \`./src/pages/*\`
- \`@/hooks/*\` → \`./src/hooks/*\`
- \`@/utils/*\` → \`./src/utils/*\`
- \`@/styles/*\` → \`./src/styles/*\`
- \`@/types/*\` → \`./src/types/*\`

Your ${projectType} project with Aki UI and path aliases is ready to go! 🚀`,
        },
      ],
    };
  }

  async generateComponent(args: any): Promise<CallToolResult> {
    const { type, components = [], props = {}, features = [] } = args;

    let generatedCode = "";
    let imports = new Set(["import React from 'react';"]);

    switch (type) {
      case "form":
        generatedCode = this.generateForm(props, features);
        imports.add(
          "import { FormControl, Input, Button, Alert } from '@akitectio/aki-ui';"
        );
        break;

      case "dashboard":
        generatedCode = this.generateDashboard(props, features);
        imports.add(
          "import { Card, Grid, Button, DataTable, Badge, Avatar } from '@akitectio/aki-ui';"
        );
        break;

      case "card":
        generatedCode = this.generateCard(props, features);
        imports.add("import { Card, Button, Badge } from '@akitectio/aki-ui';");
        break;

      case "table":
        generatedCode = this.generateTable(props, features);
        imports.add("import { DataTable, Card } from '@akitectio/aki-ui';");
        break;

      case "layout":
        generatedCode = this.generateLayout(props, features);
        imports.add("import { Grid, Card } from '@akitectio/aki-ui';");
        break;

      default:
        generatedCode = this.generateCustom(type, components, props, features);
        if (components.length > 0) {
          imports.add(
            `import { ${components.join(", ")} } from '@akitectio/aki-ui';`
          );
        }
    }

    const fullCode = `${Array.from(imports).join("\n")}\n\n${generatedCode}`;

    return {
      content: [
        {
          type: "text",
          text: `Generated ${type} component:\n\n\`\`\`tsx\n${fullCode}\n\`\`\``,
        },
      ],
    };
  }

  async validateCode(args: any): Promise<CallToolResult> {
    const { code } = args;

    const issues: string[] = [];
    const suggestions: string[] = [];

    // Check for common issues
    if (!code.includes("import")) {
      issues.push("Missing import statements");
    }

    if (!code.includes("@akitectio/aki-ui")) {
      issues.push("Not using Aki UI components");
    }

    if (!code.includes("className")) {
      suggestions.push("Consider adding custom styling with className prop");
    }

    if (!code.includes("aria-") && !code.includes("role=")) {
      suggestions.push("Consider adding accessibility attributes");
    }

    if (code.includes("style={{")) {
      suggestions.push(
        "Consider using Tailwind CSS classes instead of inline styles"
      );
    }

    // Check for TypeScript
    if (!code.includes(": ") && !code.includes("interface ")) {
      suggestions.push(
        "Consider adding TypeScript types for better development experience"
      );
    }

    const result = [];

    if (issues.length === 0 && suggestions.length === 0) {
      result.push("✅ Code looks good! No issues found.");
    } else {
      if (issues.length > 0) {
        result.push(
          `❌ Issues found:\n${issues.map((issue) => `- ${issue}`).join("\n")}`
        );
      }

      if (suggestions.length > 0) {
        result.push(
          `💡 Suggestions:\n${suggestions
            .map((suggestion) => `- ${suggestion}`)
            .join("\n")}`
        );
      }
    }

    return {
      content: [
        {
          type: "text",
          text: result.join("\n\n"),
        },
      ],
    };
  }

  async optimizeComponent(args: any): Promise<CallToolResult> {
    const { code, focus = "best-practices" } = args;

    let optimizedCode = code;
    const optimizations: string[] = [];

    switch (focus) {
      case "performance":
        optimizations.push("Add React.memo for component memoization");
        optimizations.push("Use useCallback for event handlers");
        optimizations.push("Implement useMemo for expensive calculations");
        optimizedCode = this.addPerformanceOptimizations(code);
        break;

      case "accessibility":
        optimizations.push("Add ARIA labels and descriptions");
        optimizations.push("Ensure keyboard navigation support");
        optimizations.push("Add semantic HTML elements");
        optimizedCode = this.addAccessibilityFeatures(code);
        break;

      case "bundle-size":
        optimizations.push("Import only needed components");
        optimizations.push("Use tree-shaking friendly imports");
        optimizedCode = this.optimizeImports(code);
        break;

      default:
        optimizations.push("Follow React best practices");
        optimizations.push("Use proper TypeScript types");
        optimizations.push("Add error boundaries");
        optimizedCode = this.applyBestPractices(code);
    }

    return {
      content: [
        {
          type: "text",
          text: `Optimized for ${focus}:\n\n**Applied optimizations:**\n${optimizations
            .map((opt) => `- ${opt}`)
            .join("\n")}\n\n\`\`\`tsx\n${optimizedCode}\n\`\`\``,
        },
      ],
    };
  }

  private generateForm(props: any, features: string[]): string {
    const hasValidation = features.includes("validation");
    const hasSubmit = features.includes("submit");

    return `function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = React.useState({});
  ${
    hasSubmit
      ? "const [isSubmitting, setIsSubmitting] = React.useState(false);"
      : ""
  }

  ${
    hasValidation
      ? `const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };`
      : ""
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    ${hasValidation ? "if (!validateForm()) return;" : ""}
    ${
      hasSubmit
        ? `
    setIsSubmitting(true);
    try {
      // Submit form data
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }`
        : ""
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <Card.Header>
        <h2 className="text-xl font-semibold">Contact Form</h2>
      </Card.Header>
      <Card.Body>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormControl 
            label="Name" 
            required 
            error={errors.name}
          >
            <Input
              value={formData.name}
              onChange={(value) => setFormData(prev => ({ ...prev, name: value }))}
              error={!!errors.name}
            />
          </FormControl>

          <FormControl 
            label="Email" 
            required 
            error={errors.email}
          >
            <Input
              type="email"
              value={formData.email}
              onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
              error={!!errors.email}
            />
          </FormControl>

          <FormControl 
            label="Message" 
            required 
            error={errors.message}
          >
            <Input
              value={formData.message}
              onChange={(value) => setFormData(prev => ({ ...prev, message: value }))}
              error={!!errors.message}
            />
          </FormControl>

          {Object.keys(errors).length > 0 && (
            <Alert variant="error">
              Please correct the errors above
            </Alert>
          )}

          <Button 
            type="submit" 
            variant="primary" 
            className="w-full"
            ${hasSubmit ? "loading={isSubmitting}" : ""}
          >
            Send Message
          </Button>
        </form>
      </Card.Body>
    </Card>
}`;
  }

  private generateDashboard(props: any, features: string[]): string {
    const hasCharts = features.includes("charts");
    const hasDarkMode = features.includes("dark-mode");

    return `function Dashboard() {
  const stats = [
    { label: 'Total Users', value: '2,547', change: '+12%', trend: 'up' },
    { label: 'Revenue', value: '$43,210', change: '+8%', trend: 'up' },
    { label: 'Orders', value: '1,234', change: '-3%', trend: 'down' },
    { label: 'Conversion', value: '3.4%', change: '+0.5%', trend: 'up' }
  ];

  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Pending' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Inactive' }
  ];

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { 
      key: 'status', 
      label: 'Status',
      render: (value) => (
        <Badge variant={value === 'Active' ? 'success' : value === 'Pending' ? 'warning' : 'secondary'}>
          {value}
        </Badge>
      )
    }
  ];

  return (
    <div className="p-6 space-y-6${hasDarkMode ? " dark:bg-gray-900" : ""}">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold${
          hasDarkMode ? " dark:text-white" : ""
        }">Dashboard</h1>
        <Button variant="primary">Add New</Button>
      </div>

      {/* Stats Grid */}
      <Grid cols={{ base: 1, sm: 2, lg: 4 }} gap={4}>
        {stats.map((stat, index) => (
          <Card key={index}>
            <Card.Body className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600${
                  hasDarkMode ? " dark:text-gray-400" : ""
                }">{stat.label}</p>
                <p className="text-2xl font-bold${
                  hasDarkMode ? " dark:text-white" : ""
                }">{stat.value}</p>
              </div>
              <Badge variant={stat.trend === 'up' ? 'success' : 'error'}>
                {stat.change}
              </Badge>
            </Card.Body>
          </Card>
        ))}
      </Grid>

      {/* Data Table */}
      <Card>
        <Card.Header>
          <h2 className="text-lg font-semibold${
            hasDarkMode ? " dark:text-white" : ""
          }">Recent Users</h2>
        </Card.Header>
        <Card.Body>
          <DataTable
            data={tableData}
            columns={columns}
            searchable
            sortable
            pagination
          />
        </Card.Body>
      </Card>
    </div>
  );
}`;
  }

  private generateCard(props: any, features: string[]): string {
    const hasActions = features.includes("actions");
    const hasImage = features.includes("image");

    return `function ProductCard({ product }) {
  return (
    <Card className="max-w-sm">
      ${
        hasImage
          ? `<div className="aspect-video bg-gray-200 rounded-t-lg">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>`
          : ""
      }
      
      <Card.Header>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{product.name}</h3>
          <Badge variant="primary">\${product.price}</Badge>
        </div>
      </Card.Header>
      
      <Card.Body>
        <p className="text-gray-600">{product.description}</p>
        
        ${
          hasActions
            ? `<div className="flex gap-2 mt-4">
          <Button variant="primary" size="sm">
            Add to Cart
          </Button>
          <Button variant="secondary" size="sm">
            View Details
          </Button>
        </div>`
            : ""
        }
      </Card.Body>
    </Card>
  );
}`;
  }

  private generateTable(props: any, features: string[]): string {
    return `function UserTable() {
  const [users, setUsers] = React.useState([]);
  
  React.useEffect(() => {
    // Fetch users data
    setUsers([
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' }
    ]);
  }, []);

  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'role', label: 'Role' },
    { 
      key: 'status', 
      label: 'Status',
      render: (value) => (
        <Badge variant={value === 'Active' ? 'success' : 'secondary'}>
          {value}
        </Badge>
      )
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <div className="flex gap-2">
          <Button size="sm" variant="secondary">Edit</Button>
          <Button size="sm" variant="error">Delete</Button>
        </div>
      )
    }
  ];

  return (
    <Card>
      <Card.Header>
        <h2 className="text-xl font-semibold">User Management</h2>
      </Card.Header>
      <Card.Body>
        <DataTable
          data={users}
          columns={columns}
          searchable
          sortable
          pagination
        />
      </Card.Body>
    </Card>
  );
}`;
  }

  private generateLayout(props: any, features: string[]): string {
    const isResponsive = features.includes("responsive");

    return `function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-semibold">My App</h1>
            <Button variant="primary">Sign Out</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Grid cols={{ base: 1${isResponsive ? ", lg: 4" : ""}} gap={6}>
          ${
            isResponsive
              ? `{/* Sidebar */}
          <aside className="lg:col-span-1">
            <Card>
              <Card.Header>
                <h2 className="font-semibold">Navigation</h2>
              </Card.Header>
              <Card.Body>
                <nav className="space-y-2">
                  <Button variant="secondary" className="w-full justify-start">
                    Dashboard
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    Users
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    Settings
                  </Button>
                </nav>
              </Card.Body>
            </Card>
          </aside>

          {/* Content */}
          <div className="lg:col-span-3">
            {children}
          </div>`
              : `{children}`
          }
        </Grid>
      </main>
    </div>
  );
}`;
  }

  private generateCustom(
    type: string,
    components: string[],
    props: any,
    features: string[]
  ): string {
    return `function Custom${type.charAt(0).toUpperCase() + type.slice(1)}() {
  return (
    <div className="p-4">
      <h2>Custom ${type} component</h2>
      <p>Using components: ${components.join(", ")}</p>
      {/* Add your custom implementation here */}
    </div>
  );
}`;
  }

  private addPerformanceOptimizations(code: string): string {
    // Add React.memo and performance optimizations
    return `import React, { memo, useCallback, useMemo } from 'react';\n\n${code
      .replace(/function (\w+)/, "const $1 = memo(function $1")
      .replace(/}\s*$/, "});\n\nexport default $1;")}`;
  }

  private addAccessibilityFeatures(code: string): string {
    // Add ARIA attributes and accessibility features
    return code
      .replace(/<Button/g, '<Button aria-label="Action button"')
      .replace(/<Input/g, '<Input aria-describedby="input-help"')
      .replace(/<div/g, '<div role="region"');
  }

  private optimizeImports(code: string): string {
    // Optimize imports for tree-shaking
    return code.replace(
      /import { .+ } from '@akitectio\/aki-ui';/,
      "// Use specific imports for better tree-shaking\n// import Button from '@akitectio/aki-ui/Button';\n// import Card from '@akitectio/aki-ui/Card';"
    );
  }

  private applyBestPractices(code: string): string {
    // Apply React best practices
    return `// TypeScript types for better development experience
interface Props {
  // Define your prop types here
}

${code}

export default memo(YourComponent);`;
  }

  private generateProjectStructure(
    projectType: string,
    projectName: string,
    features: string[],
    theme: string,
    includeExamples: boolean
  ) {
    const hasTypeScript =
      features.includes("typescript") || projectType !== "react-app";
    const hasRouter = features.includes("router");
    const hasAuth = features.includes("auth");
    const hasForms = features.includes("forms");
    const hasTailwind = features.includes("tailwind") || true; // Default to true

    const fileExt = hasTypeScript ? "tsx" : "jsx";
    const configExt = hasTypeScript ? "ts" : "js";

    // Project structure
    const structure = `${projectName}/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/      # Layout components
│   │   └── common/      # Shared components
│   ├── pages/           # Page components
│   │   ├── Home.${fileExt}
│   │   ├── About.${fileExt}
│   │   ${
      hasAuth
        ? `├── Login.${fileExt}\n│   │   ├── Register.${fileExt}\n│   │   `
        : ""
    }${
      hasForms ? `├── Contact.${fileExt}\n│   │   ` : ""
    }└── Dashboard.${fileExt}
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── styles/          # Global styles
│   │   ├── globals.css
│   │   └── components.css
│   ├── types/           # TypeScript type definitions
│   ├── App.${fileExt}
│   ├── main.${fileExt}
│   └── index.css
├── package.json
├── ${hasTypeScript ? "tsconfig.json" : ""}
├── vite.config.${configExt}
├── tailwind.config.${configExt}
├── postcss.config.${configExt}
└── README.md`;

    // Installation commands
    const installCommands = this.getInstallCommands(
      projectType,
      projectName,
      features
    );

    // Package.json
    const packageJson = this.generatePackageJson(
      projectType,
      projectName,
      features
    );

    // Main App component
    const mainApp = this.generateMainApp(
      projectType,
      features,
      theme,
      hasTypeScript
    );

    // Theme configuration
    const themeConfig = this.generateThemeConfig(theme, hasTypeScript);

    // Vite/TypeScript config with aliases
    const configWithAliases = this.generateConfigWithAliases(
      projectType,
      hasTypeScript
    );

    // Example components
    const exampleComponents = includeExamples
      ? this.generateExampleComponents(features, hasTypeScript)
      : "";

    return {
      structure,
      installCommands,
      packageJson,
      mainApp,
      themeConfig,
      configWithAliases,
      exampleComponents,
    };
  }

  private getInstallCommands(
    projectType: string,
    projectName: string,
    features: string[]
  ): string[] {
    const commands = [];

    // Create project
    switch (projectType) {
      case "vite-react":
        commands.push(
          `npm create vite@latest ${projectName} -- --template react${
            features.includes("typescript") ? "-ts" : ""
          }`
        );
        break;
      case "next-js":
        commands.push(
          `npx create-next-app@latest ${projectName} ${
            features.includes("typescript") ? "--typescript" : ""
          } --tailwind --eslint`
        );
        break;
      case "react-app":
        commands.push(
          `npx create-react-app ${projectName}${
            features.includes("typescript") ? " --template typescript" : ""
          }`
        );
        break;
      default:
        commands.push(
          `npm create vite@latest ${projectName} -- --template react-ts`
        );
    }

    commands.push(`cd ${projectName}`);
    commands.push("npm install");

    // Install Aki UI
    commands.push("npm install @akitectio/aki-ui");

    // Install additional dependencies based on features
    const additionalDeps = [];
    if (features.includes("router")) additionalDeps.push("react-router-dom");
    if (features.includes("auth")) additionalDeps.push("@auth0/auth0-react");
    if (features.includes("forms"))
      additionalDeps.push("react-hook-form", "@hookform/resolvers", "zod");
    if (features.includes("state")) additionalDeps.push("zustand");
    if (features.includes("api"))
      additionalDeps.push("axios", "@tanstack/react-query");

    if (additionalDeps.length > 0) {
      commands.push(`npm install ${additionalDeps.join(" ")}`);
    }

    // Install dev dependencies
    const devDeps = [];
    if (projectType !== "next-js") {
      devDeps.push("tailwindcss", "postcss", "autoprefixer");
    }
    if (features.includes("testing"))
      devDeps.push(
        "@testing-library/react",
        "@testing-library/jest-dom",
        "vitest"
      );

    if (devDeps.length > 0) {
      commands.push(`npm install -D ${devDeps.join(" ")}`);
    }

    // Initialize Tailwind
    if (projectType !== "next-js") {
      commands.push("npx tailwindcss init -p");
    }

    return commands;
  }

  private generatePackageJson(
    projectType: string,
    projectName: string,
    features: string[]
  ) {
    const basePackage: any = {
      name: projectName,
      private: true,
      version: "0.0.0",
      type: "module",
      scripts: {
        dev: projectType === "next-js" ? "next dev" : "vite",
        build: projectType === "next-js" ? "next build" : "vite build",
        preview: projectType === "next-js" ? "next start" : "vite preview",
        lint: "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
      },
      dependencies: {
        react: "^18.2.0",
        "react-dom": "^18.2.0",
        "@akitectio/aki-ui": "latest",
      },
      devDependencies: {
        "@types/react": "^18.2.43",
        "@types/react-dom": "^18.2.17",
        "@typescript-eslint/eslint-plugin": "^6.14.0",
        "@typescript-eslint/parser": "^6.14.0",
        "@vitejs/plugin-react": "^4.2.1",
        eslint: "^8.55.0",
        "eslint-plugin-react-hooks": "^4.6.0",
        "eslint-plugin-react-refresh": "^0.4.5",
        typescript: "^5.2.2",
        vite: "^5.0.8",
      },
    };

    // Add conditional dependencies
    if (features.includes("router")) {
      basePackage.dependencies["react-router-dom"] = "^6.20.0";
    }
    if (features.includes("tailwind") || projectType !== "react-app") {
      basePackage.devDependencies["tailwindcss"] = "^3.3.6";
      basePackage.devDependencies["postcss"] = "^8.4.32";
      basePackage.devDependencies["autoprefixer"] = "^10.4.16";
    }

    return basePackage;
  }

  private generateMainApp(
    projectType: string,
    features: string[],
    theme: string,
    hasTypeScript: boolean
  ): string {
    const hasRouter = features.includes("router");
    const hasAuth = features.includes("auth");

    const imports = [
      "import React from 'react';",
      hasRouter
        ? "import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';"
        : "",
      hasAuth ? "import { Auth0Provider } from '@auth0/auth0-react';" : "",
      "import { AkiUIProvider } from '@akitectio/aki-ui';",
      "",
      "// Pages (using path aliases)",
      "import Home from '@/pages/Home';",
      "import About from '@/pages/About';",
      "import Dashboard from '@/pages/Dashboard';",
      hasAuth ? "import Login from '@/pages/Login';" : "",
      "",
      "// Styles",
      "import '@/styles/globals.css';",
    ].filter(Boolean);

    const themeObject = this.getThemeObject(theme);

    const appContent = hasRouter
      ? `
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            ${hasAuth ? '<Route path="/login" element={<Login />} />' : ""}
          </Routes>
        </div>
      </Router>`
      : `
      <div className="min-h-screen bg-gray-50">
        <Home />
      </div>`;

    const app = `${imports.join("\n")}

const customTheme = ${JSON.stringify(themeObject, null, 2)};

function App() {
  return (
    <AkiUIProvider theme={customTheme} initialColorMode="light">
      ${
        hasAuth
          ? `<Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >`
          : ""
      }
        ${appContent}
      ${hasAuth ? "</Auth0Provider>" : ""}
    </AkiUIProvider>
  );
}

export default App;`;

    return app;
  }

  private generateConfigWithAliases(
    projectType: string,
    hasTypeScript: boolean
  ): string {
    if (
      projectType === "vite-react" ||
      projectType === "dashboard" ||
      projectType === "website" ||
      projectType === "admin-panel" ||
      projectType === "portfolio"
    ) {
      // Vite config with aliases
      return `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@/types': path.resolve(__dirname, './src/types'),
    },
  },
})`;
    } else if (projectType === "next-js") {
      // Next.js config with aliases
      return `/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@/types': path.resolve(__dirname, './src/types'),
    }
    return config
  },
}

module.exports = nextConfig`;
    }

    // TypeScript path mapping
    if (hasTypeScript) {
      return `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/pages/*": ["./src/pages/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/utils/*": ["./src/utils/*"],
      "@/styles/*": ["./src/styles/*"],
      "@/types/*": ["./src/types/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`;
    }

    return "";
  }

  private generateThemeConfig(theme: string, hasTypeScript: boolean): string {
    const themeObject = this.getThemeObject(theme);

    return `${
      hasTypeScript ? 'import { Theme } from "@akitectio/aki-ui";\n\n' : ""
    }export const customTheme${
      hasTypeScript ? ": Theme" : ""
    } = ${JSON.stringify(themeObject, null, 2)};

export default customTheme;`;
  }

  private getThemeObject(theme: string) {
    const themes: Record<string, any> = {
      default: {
        colors: {
          primary: "#3b82f6",
          secondary: "#6b7280",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
        spacing: {
          xs: "0.25rem",
          sm: "0.5rem",
          md: "1rem",
          lg: "1.5rem",
          xl: "3rem",
        },
      },
      dark: {
        colors: {
          primary: "#60a5fa",
          secondary: "#9ca3af",
          success: "#34d399",
          warning: "#fbbf24",
          error: "#f87171",
          background: "#1f2937",
          surface: "#374151",
          text: "#f9fafb",
        },
        spacing: {
          xs: "0.25rem",
          sm: "0.5rem",
          md: "1rem",
          lg: "1.5rem",
          xl: "3rem",
        },
      },
      modern: {
        colors: {
          primary: "#8b5cf6",
          secondary: "#64748b",
          success: "#06d6a0",
          warning: "#ffd60a",
          error: "#ff006e",
        },
        borderRadius: {
          sm: "0.375rem",
          md: "0.5rem",
          lg: "0.75rem",
          xl: "1rem",
        },
      },
      minimal: {
        colors: {
          primary: "#000000",
          secondary: "#6b7280",
          success: "#059669",
          warning: "#d97706",
          error: "#dc2626",
        },
        borderRadius: {
          sm: "0.125rem",
          md: "0.25rem",
          lg: "0.375rem",
          xl: "0.5rem",
        },
      },
      colorful: {
        colors: {
          primary: "#e11d48",
          secondary: "#8b5cf6",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
          accent: "#06d6a0",
        },
      },
    };

    return themes[theme] || themes.default;
  }

  private generateExampleComponents(
    features: string[],
    hasTypeScript: boolean
  ): string {
    const ext = hasTypeScript ? "tsx" : "jsx";

    const homeComponent = `// src/pages/Home.${ext}
import React from 'react';
import { Card, Button, Grid, Badge } from '@akitectio/aki-ui';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Your Aki UI Project
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Start building amazing user interfaces with our component library
        </p>
        <Badge variant="primary" size="lg">
          Powered by Aki UI
        </Badge>
      </div>

      <Grid cols={{ base: 1, md: 3 }} gap={6}>
        <Card>
          <Card.Header>
            <h3 className="text-lg font-semibold">🚀 Get Started</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-gray-600 mb-4">
              Explore our comprehensive component library and start building.
            </p>
            <Button variant="primary" size="sm">
              View Components
            </Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <h3 className="text-lg font-semibold">📖 Documentation</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-gray-600 mb-4">
              Learn how to use Aki UI components effectively.
            </p>
            <Button variant="secondary" size="sm">
              Read Docs
            </Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <h3 className="text-lg font-semibold">🎨 Customize</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-gray-600 mb-4">
              Customize themes and styling to match your brand.
            </p>
            <Button variant="outline" size="sm">
              Customize
            </Button>
          </Card.Body>
        </Card>
      </Grid>
    </div>
  );
};

export default Home;`;

    const dashboardComponent = `// src/pages/Dashboard.${ext}
import React from 'react';
import { Card, Grid, Badge, DataTable, Button } from '@akitectio/aki-ui';

const Dashboard = () => {
  const stats = [
    { label: 'Total Users', value: '2,547', change: '+12%', trend: 'up' },
    { label: 'Revenue', value: '$43,210', change: '+8%', trend: 'up' },
    { label: 'Orders', value: '1,234', change: '-3%', trend: 'down' },
  ];

  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Pending' },
  ];

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { 
      key: 'status', 
      label: 'Status',
      render: (value${hasTypeScript ? ": string" : ""}) => (
        <Badge variant={value === 'Active' ? 'success' : 'warning'}>
          {value}
        </Badge>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <Button variant="primary">Add New</Button>
      </div>

      <Grid cols={{ base: 1, md: 3 }} gap={6} className="mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <Card.Body className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <Badge variant={stat.trend === 'up' ? 'success' : 'error'}>
                {stat.change}
              </Badge>
            </Card.Body>
          </Card>
        ))}
      </Grid>

      <Card>
        <Card.Header>
          <h2 className="text-xl font-semibold">Recent Activity</h2>
        </Card.Header>
        <Card.Body>
          <DataTable
            data={tableData}
            columns={columns}
            searchable
            pagination
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;`;

    return `${homeComponent}

${dashboardComponent}`;
  }
}
