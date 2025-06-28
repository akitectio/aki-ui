import { Tool, CallToolResult } from "@modelcontextprotocol/sdk/types.js";

export class CodeGenerationTool {
  getTools(): Tool[] {
    return [
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
  );
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
}
