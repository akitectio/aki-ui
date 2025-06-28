import { Tool, CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import fs from "fs/promises";
import path from "path";

export class DocumentationTool {
  getTools(): Tool[] {
    return [
      {
        name: "search_docs",
        description:
          "Search Aki UI documentation for specific topics or components",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description:
                "Search query for documentation (component names, features, concepts)",
            },
            type: {
              type: "string",
              enum: ["component", "guide", "example", "api", "all"],
              description: "Type of documentation to search",
            },
          },
          required: ["query"],
        },
      },
      {
        name: "get_examples",
        description: "Get usage examples for specific Aki UI components",
        inputSchema: {
          type: "object",
          properties: {
            component: {
              type: "string",
              description: "Component name to get examples for",
            },
            complexity: {
              type: "string",
              enum: ["basic", "intermediate", "advanced", "all"],
              description: "Complexity level of examples",
            },
          },
          required: ["component"],
        },
      },
      {
        name: "get_best_practices",
        description: "Get best practices and guidelines for Aki UI usage",
        inputSchema: {
          type: "object",
          properties: {
            topic: {
              type: "string",
              enum: [
                "accessibility",
                "performance",
                "theming",
                "forms",
                "layouts",
                "general",
              ],
              description: "Best practices topic",
            },
          },
          required: ["topic"],
        },
      },
    ];
  }

  async searchDocs(args: any): Promise<CallToolResult> {
    const { query, type = "all" } = args;

    const searchResults = await this.performDocumentationSearch(query, type);

    return {
      content: [
        {
          type: "text",
          text: `Documentation search results for "${query}":\n\n${searchResults}`,
        },
      ],
    };
  }

  async getExamples(args: any): Promise<CallToolResult> {
    const { component, complexity = "all" } = args;

    const examples = this.getComponentExamples(component, complexity);

    return {
      content: [
        {
          type: "text",
          text: `${component} Examples (${complexity}):\n\n${examples}`,
        },
      ],
    };
  }

  async getBestPractices(args: any): Promise<CallToolResult> {
    const { topic } = args;

    const practices = this.getBestPracticesForTopic(topic);

    return {
      content: [
        {
          type: "text",
          text: `Best Practices for ${topic}:\n\n${practices}`,
        },
      ],
    };
  }

  async getLLMsContent(): Promise<string> {
    try {
      // Try to read from the actual llms.txt file
      const llmsPath = path.join(process.cwd(), "..", "public", "llms.txt");
      return await fs.readFile(llmsPath, "utf-8");
    } catch (error) {
      // Fallback content if file doesn't exist
      return this.getFallbackLLMsContent();
    }
  }

  private async performDocumentationSearch(
    query: string,
    type: string
  ): Promise<string> {
    const searchTerm = query.toLowerCase();
    const results: string[] = [];

    // Component documentation
    if (type === "component" || type === "all") {
      const componentDocs = this.getComponentDocumentation();
      const matchingComponents = componentDocs.filter(
        (doc) =>
          doc.name.toLowerCase().includes(searchTerm) ||
          doc.description.toLowerCase().includes(searchTerm) ||
          doc.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
      );

      if (matchingComponents.length > 0) {
        results.push(`## Components (${matchingComponents.length} found)\n`);
        matchingComponents.forEach((comp) => {
          results.push(
            `### ${comp.name}\n${comp.description}\n**Tags:** ${comp.tags.join(
              ", "
            )}\n`
          );
        });
      }
    }

    // Guide documentation
    if (type === "guide" || type === "all") {
      const guides = this.getGuides();
      const matchingGuides = guides.filter(
        (guide) =>
          guide.title.toLowerCase().includes(searchTerm) ||
          guide.content.toLowerCase().includes(searchTerm)
      );

      if (matchingGuides.length > 0) {
        results.push(`## Guides (${matchingGuides.length} found)\n`);
        matchingGuides.forEach((guide) => {
          results.push(`### ${guide.title}\n${guide.summary}\n`);
        });
      }
    }

    // API documentation
    if (type === "api" || type === "all") {
      const apiDocs = this.getAPIDocumentation();
      const matchingAPI = apiDocs.filter(
        (api) =>
          api.name.toLowerCase().includes(searchTerm) ||
          api.description.toLowerCase().includes(searchTerm)
      );

      if (matchingAPI.length > 0) {
        results.push(`## API Reference (${matchingAPI.length} found)\n`);
        matchingAPI.forEach((api) => {
          results.push(`### ${api.name}\n${api.description}\n`);
        });
      }
    }

    return results.length > 0
      ? results.join("\n")
      : `No documentation found for "${query}".`;
  }

  private getComponentExamples(component: string, complexity: string): string {
    const examples = {
      Button: {
        basic: `// Basic Button
<Button variant="primary">Click me</Button>

// Button with different variants
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>`,

        intermediate: `// Button with loading state
<Button loading disabled>Loading...</Button>

// Button with custom styling
<Button 
  variant="primary" 
  size="lg"
  className="shadow-lg hover:shadow-xl"
>
  Custom Button
</Button>`,

        advanced: `// Button with complex interactions
function InteractiveButton() {
  const [loading, setLoading] = useState(false);
  
  const handleClick = async () => {
    setLoading(true);
    try {
      await performAction();
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Button 
      variant="primary"
      loading={loading}
      onClick={handleClick}
      aria-label="Perform action"
    >
      {loading ? 'Processing...' : 'Start Action'}
    </Button>
  );
}`,
      },

      Card: {
        basic: `// Basic Card
<Card>
  <Card.Header>
    <h3>Card Title</h3>
  </Card.Header>
  <Card.Body>
    <p>Card content goes here.</p>
  </Card.Body>
</Card>`,

        intermediate: `// Card with actions
<Card className="max-w-md">
  <Card.Header>
    <div className="flex justify-between items-center">
      <h3>Product Card</h3>
      <Badge variant="success">New</Badge>
    </div>
  </Card.Header>
  <Card.Body>
    <p>Product description...</p>
    <div className="flex gap-2 mt-4">
      <Button variant="primary" size="sm">Buy Now</Button>
      <Button variant="secondary" size="sm">Details</Button>
    </div>
  </Card.Body>
</Card>`,

        advanced: `// Advanced Card with state management
function ProductCard({ product, onAddToCart, onToggleFavorite }) {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite);
  
  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(product.id);
  };
  
  return (
    <Card className="relative group hover:shadow-lg transition-shadow">
      <div className="absolute top-2 right-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={handleFavoriteToggle}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </Button>
      </div>
      
      <Card.Header>
        <h3 className="font-semibold">{product.name}</h3>
        <Badge variant="primary">\${product.price}</Badge>
      </Card.Header>
      
      <Card.Body>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <Button 
          variant="primary" 
          className="w-full"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}`,
      },

      DataTable: {
        basic: `// Basic DataTable
const data = [
  { id: 1, name: 'John', email: 'john@example.com' },
  { id: 2, name: 'Jane', email: 'jane@example.com' }
];

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' }
];

<DataTable data={data} columns={columns} />`,

        intermediate: `// DataTable with search and sorting
<DataTable
  data={users}
  columns={userColumns}
  searchable
  sortable
  pagination
  onRowClick={(row) => console.log('Row clicked:', row)}
/>`,

        advanced: `// Advanced DataTable with custom rendering
function UserManagementTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { 
      key: 'status', 
      label: 'Status',
      render: (value) => (
        <Badge variant={value === 'active' ? 'success' : 'secondary'}>
          {value}
        </Badge>
      )
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <div className="flex gap-2">
          <Button size="sm" onClick={() => editUser(row.id)}>
            Edit
          </Button>
          <Button 
            size="sm" 
            variant="error"
            onClick={() => deleteUser(row.id)}
          >
            Delete
          </Button>
        </div>
      )
    }
  ];
  
  return (
    <Card>
      <Card.Header>
        <h2>User Management</h2>
      </Card.Header>
      <Card.Body>
        {loading ? (
          <div className="flex justify-center p-8">
            <Spinner />
          </div>
        ) : (
          <DataTable
            data={users}
            columns={columns}
            searchable
            sortable
            pagination
            pageSize={10}
          />
        )}
      </Card.Body>
    </Card>
  );
}`,
      },
    };

    const componentExamples = examples[component as keyof typeof examples];
    if (!componentExamples) {
      return `No examples found for component "${component}". Available components: ${Object.keys(
        examples
      ).join(", ")}`;
    }

    if (complexity === "all") {
      return Object.entries(componentExamples)
        .map(
          ([level, code]) =>
            `## ${
              level.charAt(0).toUpperCase() + level.slice(1)
            }\n\`\`\`tsx\n${code}\n\`\`\``
        )
        .join("\n\n");
    }

    const exampleCode =
      componentExamples[complexity as keyof typeof componentExamples];
    return exampleCode
      ? `\`\`\`tsx\n${exampleCode}\n\`\`\``
      : `No ${complexity} examples found for ${component}.`;
  }

  private getBestPracticesForTopic(topic: string): string {
    const practices = {
      accessibility: `# Accessibility Best Practices

## ARIA Attributes
- Always provide \`aria-label\` for buttons without text
- Use \`aria-describedby\` for form inputs with help text
- Add \`role\` attributes for custom components

## Keyboard Navigation
- Ensure all interactive elements are keyboard accessible
- Use proper tab order with \`tabIndex\`
- Handle keyboard events (Enter, Space, Escape)

## Screen Reader Support
- Use semantic HTML elements when possible
- Provide alternative text for images
- Announce dynamic content changes

## Examples
\`\`\`tsx
// Good: Accessible button
<Button aria-label="Close dialog" onClick={handleClose}>
  ×
</Button>

// Good: Form with proper labeling
<FormControl label="Email" required>
  <Input 
    type="email"
    aria-describedby="email-help"
    value={email}
    onChange={setEmail}
  />
  <div id="email-help">We'll never share your email</div>
</FormControl>
\`\`\``,

      performance: `# Performance Best Practices

## Component Optimization
- Use \`React.memo\` for expensive components
- Implement \`useCallback\` for event handlers
- Use \`useMemo\` for expensive calculations

## Bundle Size
- Import only what you need from Aki UI
- Use tree-shaking friendly imports
- Lazy load components when possible

## Rendering Optimization
- Avoid inline objects and functions in JSX
- Use keys properly in lists
- Minimize re-renders with proper state structure

## Examples
\`\`\`tsx
// Good: Memoized component
const ExpensiveComponent = memo(({ data }) => {
  const processedData = useMemo(
    () => expensiveProcessing(data),
    [data]
  );
  
  const handleClick = useCallback(
    (id) => onItemClick(id),
    [onItemClick]
  );
  
  return <div>{/* component JSX */}</div>;
});

// Good: Tree-shaking friendly imports
import Button from '@akitectio/aki-ui/Button';
import Card from '@akitectio/aki-ui/Card';
\`\`\``,

      theming: `# Theming Best Practices

## CSS Custom Properties
- Use CSS variables for consistent theming
- Define color palettes at the root level
- Create semantic color names

## Dark Mode
- Use the built-in color mode system
- Test all components in both modes
- Provide fallbacks for custom colors

## Customization
- Extend the default theme rather than replacing it
- Use Tailwind CSS classes for customization
- Maintain design system consistency

## Examples
\`\`\`tsx
// Good: Theme-aware component
function ThemedComponent() {
  const { colorMode } = useColorMode();
  
  return (
    <Card className={colorMode === 'dark' ? 'bg-gray-800' : 'bg-white'}>
      <Card.Body>
        <p className="text-gray-900 dark:text-gray-100">
          Theme-aware content
        </p>
      </Card.Body>
    </Card>
  );
}

// Good: Custom CSS variables
:root {
  --brand-primary: #3b82f6;
  --brand-secondary: #64748b;
}

.dark {
  --brand-primary: #60a5fa;
  --brand-secondary: #94a3b8;
}
\`\`\``,

      forms: `# Form Best Practices

## Validation
- Validate on both client and server
- Provide clear error messages
- Show validation state immediately

## User Experience
- Use appropriate input types
- Provide helpful placeholder text
- Implement auto-focus and tab order

## Accessibility
- Always use labels with form controls
- Group related fields with fieldsets
- Provide clear instructions

## Examples
\`\`\`tsx
// Good: Complete form implementation
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        return /\\S+@\\S+\\.\\S+/.test(value) ? '' : 'Invalid email';
      case 'name':
        return value.trim() ? '' : 'Name is required';
      default:
        return '';
    }
  };

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl 
        label="Full Name" 
        required 
        error={errors.name}
      >
        <Input
          value={formData.name}
          onChange={(value) => handleChange('name', value)}
          error={!!errors.name}
        />
      </FormControl>
      
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
}
\`\`\``,

      layouts: `# Layout Best Practices

## Responsive Design
- Use the Grid component for responsive layouts
- Design mobile-first
- Test on various screen sizes

## Spacing and Alignment
- Use consistent spacing scales
- Align elements properly
- Create visual hierarchy

## Container Management
- Use proper container components
- Implement max-widths for readability
- Consider content overflow

## Examples
\`\`\`tsx
// Good: Responsive layout
function ResponsiveLayout() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Grid cols={{ base: 1, md: 2, lg: 3 }} gap={6}>
        <Card>
          <Card.Body>Content 1</Card.Body>
        </Card>
        <Card>
          <Card.Body>Content 2</Card.Body>
        </Card>
        <Card>
          <Card.Body>Content 3</Card.Body>
        </Card>
      </Grid>
    </div>
  );
}

// Good: Dashboard layout
function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        {/* Header content */}
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
\`\`\``,

      general: `# General Best Practices

## Code Organization
- Keep components small and focused
- Use TypeScript for better development experience
- Follow consistent naming conventions

## Error Handling
- Implement error boundaries
- Provide fallback UI for errors
- Log errors appropriately

## Testing
- Write unit tests for components
- Test accessibility with screen readers
- Implement integration tests

## Documentation
- Document component APIs
- Provide usage examples
- Keep documentation up to date

## Examples
\`\`\`tsx
// Good: Well-structured component
interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
  onDelete?: (userId: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  onEdit, 
  onDelete 
}) => {
  const handleEdit = useCallback(() => {
    onEdit?.(user);
  }, [user, onEdit]);

  const handleDelete = useCallback(() => {
    onDelete?.(user.id);
  }, [user.id, onDelete]);

  return (
    <Card>
      <Card.Header>
        <h3>{user.name}</h3>
        <Badge variant={user.isActive ? 'success' : 'secondary'}>
          {user.isActive ? 'Active' : 'Inactive'}
        </Badge>
      </Card.Header>
      <Card.Body>
        <p>{user.email}</p>
        <div className="flex gap-2 mt-4">
          {onEdit && (
            <Button size="sm" onClick={handleEdit}>
              Edit
            </Button>
          )}
          {onDelete && (
            <Button size="sm" variant="error" onClick={handleDelete}>
              Delete
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default memo(UserCard);
\`\`\``,
    };

    return (
      practices[topic as keyof typeof practices] ||
      `No best practices found for topic "${topic}".`
    );
  }

  private getComponentDocumentation() {
    return [
      {
        name: "Button",
        description:
          "Interactive button component with multiple variants and states",
        tags: ["interactive", "form", "action", "clickable"],
      },
      {
        name: "Card",
        description: "Flexible container component for organizing content",
        tags: ["layout", "container", "content", "structure"],
      },
      {
        name: "DataTable",
        description:
          "Advanced table component with sorting, filtering, and pagination",
        tags: ["data", "table", "list", "sorting", "pagination"],
      },
      {
        name: "Grid",
        description: "Responsive grid layout system",
        tags: ["layout", "responsive", "grid", "columns"],
      },
      {
        name: "Input",
        description: "Form input component with validation support",
        tags: ["form", "input", "validation", "text"],
      },
    ];
  }

  private getGuides() {
    return [
      {
        title: "Getting Started with Aki UI",
        summary: "Learn how to install and set up Aki UI in your React project",
        content: "installation setup configuration",
      },
      {
        title: "Theming and Customization",
        summary: "Customize Aki UI components to match your design system",
        content: "theme colors dark mode css variables customization",
      },
      {
        title: "Building Forms",
        summary: "Create accessible and validated forms with Aki UI",
        content: "forms validation accessibility inputs",
      },
    ];
  }

  private getAPIDocumentation() {
    return [
      {
        name: "useColorMode",
        description: "Hook for managing dark/light mode state",
      },
      {
        name: "useBreakpoint",
        description: "Hook for responsive design breakpoint detection",
      },
      {
        name: "FormControl",
        description:
          "Wrapper component for form inputs with labels and validation",
      },
    ];
  }

  private getFallbackLLMsContent(): string {
    return `# Aki UI - React Component Library

## Overview
Modern React component library built with TypeScript and Tailwind CSS, designed for building accessible and responsive user interfaces.

## Installation
\`\`\`bash
npm install @akitectio/aki-ui
\`\`\`

## Core Components
- **Button**: Interactive button with variants and states
- **Card**: Flexible container component
- **Input**: Form input with validation
- **DataTable**: Advanced table with sorting and pagination
- **Grid**: Responsive layout system
- **Alert**: Notification and feedback component
- **Badge**: Status indicator component

## Features
- TypeScript support
- Tailwind CSS styling
- Dark mode support
- Accessibility built-in
- Responsive design
- Tree-shakable imports

## AI Integration
- Works with GitHub Copilot, Cursor, Windsurf, Claude Dev
- Complete TypeScript definitions
- Structured documentation for LLM training
- MCP Server for dynamic AI interactions (coming soon)`;
  }
}
