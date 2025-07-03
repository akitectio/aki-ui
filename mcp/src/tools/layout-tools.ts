import { Tool, CallToolResult } from "@modelcontextprotocol/sdk/types.js";

export interface LayoutConfig {
  type: "grid" | "flexbox" | "dashboard" | "sidebar" | "hero" | "content";
  responsive: boolean;
  breakpoints?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  spacing?: string;
  alignment?: "start" | "center" | "end" | "stretch";
}

export class LayoutTools {
  getTools(): Tool[] {
    return [
      {
        name: "generate_layout",
        description: "Generate layout structure using Aki UI components",
        inputSchema: {
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: [
                "grid",
                "flexbox",
                "dashboard",
                "sidebar",
                "hero",
                "content",
                "admin",
                "landing",
              ],
              description: "Type of layout to generate",
            },
            sections: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  content: { type: "string" },
                  width: { type: "string" },
                  height: { type: "string" },
                },
              },
              description: "Layout sections and their properties",
            },
            responsive: {
              type: "boolean",
              description: "Make layout responsive",
              default: true,
            },
            features: {
              type: "array",
              items: { type: "string" },
              description:
                "Features to include (navigation, footer, sidebar, etc.)",
            },
          },
          required: ["type"],
        },
      },
      {
        name: "responsive_design_check",
        description: "Validate responsive design implementation",
        inputSchema: {
          type: "object",
          properties: {
            code: {
              type: "string",
              description: "Layout code to validate for responsive design",
            },
          },
          required: ["code"],
        },
      },
      {
        name: "grid_calculator",
        description: "Calculate CSS Grid configurations for complex layouts",
        inputSchema: {
          type: "object",
          properties: {
            columns: {
              type: "number",
              description: "Number of columns",
            },
            rows: {
              type: "number",
              description: "Number of rows",
            },
            gap: {
              type: "string",
              description: "Gap between grid items",
            },
            areas: {
              type: "array",
              items: { type: "string" },
              description: "Named grid areas",
            },
          },
          required: ["columns"],
        },
      },
    ];
  }

  async generateLayout(args: any): Promise<CallToolResult> {
    const { type, sections = [], responsive = true, features = [] } = args;

    const layoutCode = this.generateLayoutCode(
      type,
      sections,
      responsive,
      features
    );
    const cssCode = this.generateLayoutCSS(type, responsive);
    const responsiveBreakpoints = responsive
      ? this.generateResponsiveBreakpoints(type)
      : "";

    return {
      content: [
        {
          type: "text",
          text: `# ${type.charAt(0).toUpperCase() + type.slice(1)} Layout

## Layout Component
\`\`\`tsx
${layoutCode}
\`\`\`

## CSS/Tailwind Classes
\`\`\`css
${cssCode}
\`\`\`

${
  responsive
    ? `## Responsive Breakpoints
\`\`\`css
${responsiveBreakpoints}
\`\`\``
    : ""
}

## Features Included
${this.generateLayoutFeatures(features, responsive)}

## Usage Example
\`\`\`tsx
function App() {
  return (
    <div className="min-h-screen">
      <${type.charAt(0).toUpperCase() + type.slice(1)}Layout />
    </div>
  );
}
\`\`\`

## Customization Tips
${this.generateCustomizationTips(type)}
`,
        },
      ],
    };
  }

  async validateResponsiveDesign(args: any): Promise<CallToolResult> {
    const { code } = args;

    const issues: string[] = [];
    const suggestions: string[] = [];
    const goodPractices: string[] = [];

    // Check for responsive classes
    const hasResponsiveClasses = /\b(sm:|md:|lg:|xl:|2xl:)/.test(code);
    if (!hasResponsiveClasses) {
      issues.push(
        "No responsive classes found - consider adding breakpoint-specific styles"
      );
    }

    // Check for fixed widths
    const hasFixedWidths = /w-\[\d+px\]|width:\s*\d+px/.test(code);
    if (hasFixedWidths) {
      issues.push(
        "Fixed pixel widths detected - use relative units for better responsiveness"
      );
    }

    // Check for responsive grid/flexbox
    const hasResponsiveGrid =
      /grid-cols-\d+.*(?:sm:|md:|lg:)grid-cols-\d+/.test(code);
    const hasResponsiveFlex = /flex-col.*(?:sm:|md:|lg:)flex-row/.test(code);

    if (hasResponsiveGrid || hasResponsiveFlex) {
      goodPractices.push("Good use of responsive grid/flexbox classes");
    }

    // Check for mobile-first approach
    const mobileFirstPattern =
      /(?:^|\s)(?!(?:sm:|md:|lg:|xl:|2xl:))\w+(?:\s|$)/;
    if (mobileFirstPattern.test(code)) {
      goodPractices.push("Mobile-first approach detected");
    }

    // Check for overflow handling
    const hasOverflowHandling =
      /overflow-(?:hidden|auto|scroll|x-auto|y-auto)/.test(code);
    if (!hasOverflowHandling) {
      suggestions.push("Consider adding overflow handling for smaller screens");
    }

    // Check for text responsiveness
    const hasResponsiveText =
      /text-(?:xs|sm|base|lg|xl).*(?:sm:|md:|lg:)text-/.test(code);
    if (!hasResponsiveText) {
      suggestions.push("Consider making text sizes responsive");
    }

    return {
      content: [
        {
          type: "text",
          text: `# Responsive Design Validation

## Status: ${
            issues.length === 0
              ? "✅ Good"
              : issues.length <= 2
              ? "⚠️ Needs Improvement"
              : "❌ Poor"
          }

${
  issues.length > 0
    ? `## Issues Found (${issues.length})
${issues.map((issue) => `- ❌ ${issue}`).join("\n")}`
    : ""
}

${
  suggestions.length > 0
    ? `## Suggestions (${suggestions.length})
${suggestions.map((suggestion) => `- 💡 ${suggestion}`).join("\n")}`
    : ""
}

${
  goodPractices.length > 0
    ? `## Good Practices Found (${goodPractices.length})
${goodPractices.map((practice) => `- ✅ ${practice}`).join("\n")}`
    : ""
}

## Responsive Design Checklist
- [ ] Mobile-first approach
- [ ] Breakpoint-specific styles (sm:, md:, lg:, xl:)
- [ ] Flexible grid systems
- [ ] Responsive typography
- [ ] Proper overflow handling
- [ ] Touch-friendly interactive elements
- [ ] Optimized images for different screen sizes

## Recommended Breakpoints
\`\`\`css
/* Aki UI / Tailwind breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
\`\`\`
`,
        },
      ],
    };
  }

  async calculateGrid(args: any): Promise<CallToolResult> {
    const { columns, rows = "auto", gap = "1rem", areas = [] } = args;

    const gridConfig = this.generateGridConfiguration(
      columns,
      rows,
      gap,
      areas
    );
    const gridAreas =
      areas.length > 0 ? this.generateGridAreas(areas, columns, rows) : "";
    const gridExamples = this.generateGridExamples(columns, rows, gap);

    return {
      content: [
        {
          type: "text",
          text: `# CSS Grid Configuration

## Grid Container
\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: ${gridConfig.columns};
  ${typeof rows === "number" ? `grid-template-rows: ${gridConfig.rows};` : ""}
  gap: ${gap};
  ${areas.length > 0 ? `grid-template-areas: ${gridConfig.areas};` : ""}
}
\`\`\`

## Tailwind CSS Classes
\`\`\`html
<div class="${gridConfig.tailwindClasses}">
  <!-- Grid items -->
</div>
\`\`\`

${
  areas.length > 0
    ? `## Named Grid Areas
\`\`\`css
${gridAreas}
\`\`\``
    : ""
}

## React Component Example
\`\`\`tsx
import { Grid } from '@akitectio/aki-ui';

function GridLayout() {
  return (
    <Grid 
      cols={{ base: 1, md: ${Math.min(columns, 2)}, lg: ${columns} }}
      gap="${gap}"
      className="min-h-screen"
    >
      ${Array.from(
        { length: columns },
        (_, i) => `<div className="bg-gray-100 p-4 rounded">
        Item ${i + 1}
      </div>`
      ).join("\n      ")}
    </Grid>
  );
}
\`\`\`

## Grid Examples
${gridExamples}

## Advanced Grid Techniques
${this.generateAdvancedGridTips(columns, areas)}
`,
        },
      ],
    };
  }

  private generateLayoutCode(
    type: string,
    sections: any[],
    responsive: boolean,
    features: string[]
  ): string {
    const hasNavigation = features.includes("navigation");
    const hasFooter = features.includes("footer");
    const hasSidebar = features.includes("sidebar");

    switch (type) {
      case "dashboard":
        return this.generateDashboardLayout(
          responsive,
          hasSidebar,
          hasNavigation
        );

      case "sidebar":
        return this.generateSidebarLayout(responsive, sections);

      case "hero":
        return this.generateHeroLayout(responsive, sections);

      case "grid":
        return this.generateGridLayout(responsive, sections);

      case "landing":
        return this.generateLandingLayout(responsive, hasNavigation, hasFooter);

      default:
        return this.generateFlexboxLayout(responsive, sections);
    }
  }

  private generateDashboardLayout(
    responsive: boolean,
    hasSidebar: boolean,
    hasNavigation: boolean
  ): string {
    return `import React from 'react';
import { Grid, Card, Navbar${
      hasSidebar ? ", VerticalNavbar" : ""
    } } from '@akitectio/aki-ui';

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      ${
        hasNavigation
          ? `<Navbar>
        <Navbar.Brand>Dashboard</Navbar.Brand>
        <Navbar.Item href="/dashboard">Home</Navbar.Item>
        <Navbar.Item href="/analytics">Analytics</Navbar.Item>
        <Navbar.Item href="/settings">Settings</Navbar.Item>
      </Navbar>`
          : ""
      }
      
      <div className="${hasNavigation ? "pt-16 " : ""}${
      hasSidebar ? "flex" : ""
    }">
        ${
          hasSidebar
            ? `<VerticalNavbar
          items={[
            { id: 'overview', label: 'Overview', href: '/dashboard' },
            { id: 'analytics', label: 'Analytics', href: '/analytics' },
            { id: 'reports', label: 'Reports', href: '/reports' },
            { id: 'settings', label: 'Settings', href: '/settings' }
          ]}
          className="w-64 h-screen sticky top-0"
        />`
            : ""
        }
        
        <main className="${hasSidebar ? "flex-1 " : ""}p-6">
          <Grid 
            cols={{ base: 1, md: 2, lg: 3, xl: 4 }} 
            gap="6"
            className="mb-8"
          >
            <Card>
              <Card.Header>
                <h3 className="text-lg font-semibold">Total Users</h3>
              </Card.Header>
              <Card.Body>
                <p className="text-3xl font-bold text-blue-600">12,345</p>
                <p className="text-sm text-gray-500">+12% from last month</p>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Header>
                <h3 className="text-lg font-semibold">Revenue</h3>
              </Card.Header>
              <Card.Body>
                <p className="text-3xl font-bold text-green-600">$54,321</p>
                <p className="text-sm text-gray-500">+8% from last month</p>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Header>
                <h3 className="text-lg font-semibold">Orders</h3>
              </Card.Header>
              <Card.Body>
                <p className="text-3xl font-bold text-purple-600">1,234</p>
                <p className="text-sm text-gray-500">+15% from last month</p>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Header>
                <h3 className="text-lg font-semibold">Growth</h3>
              </Card.Header>
              <Card.Body>
                <p className="text-3xl font-bold text-orange-600">23%</p>
                <p className="text-sm text-gray-500">+3% from last month</p>
              </Card.Body>
            </Card>
          </Grid>
          
          <Grid cols={{ base: 1, lg: 2 }} gap="6">
            <Card>
              <Card.Header>
                <h3 className="text-lg font-semibold">Recent Activity</h3>
              </Card.Header>
              <Card.Body>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm">U</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">New user registered</p>
                      <p className="text-xs text-gray-500">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">$</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Payment received</p>
                      <p className="text-xs text-gray-500">5 minutes ago</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Header>
                <h3 className="text-lg font-semibold">Quick Actions</h3>
              </Card.Header>
              <Card.Body>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-center transition-colors">
                    <div className="text-blue-600 font-medium">Add User</div>
                  </button>
                  <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-center transition-colors">
                    <div className="text-green-600 font-medium">Create Report</div>
                  </button>
                  <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-center transition-colors">
                    <div className="text-purple-600 font-medium">Send Email</div>
                  </button>
                  <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg text-center transition-colors">
                    <div className="text-orange-600 font-medium">View Analytics</div>
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Grid>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;`;
  }

  private generateSidebarLayout(responsive: boolean, sections: any[]): string {
    return `import React, { useState } from 'react';
import { VerticalNavbar, Button } from '@akitectio/aki-ui';

function SidebarLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <VerticalNavbar
        collapsed={collapsed}
        items={[
          { id: 'home', label: 'Home', icon: '🏠', href: '/' },
          { id: 'about', label: 'About', icon: 'ℹ️', href: '/about' },
          { id: 'services', label: 'Services', icon: '⚙️', href: '/services' },
          { id: 'contact', label: 'Contact', icon: '📞', href: '/contact' }
        ]}
        className={${
          responsive
            ? '`transition-all duration-300 ${collapsed ? "w-16" : "w-64"}`'
            : '"w-64"'
        }}
      />
      
      <main className="flex-1 p-6">
        <div className="mb-6">
          <Button 
            onClick={() => setCollapsed(!collapsed)}
            variant="secondary"
            size="sm"
          >
            ${responsive ? '${collapsed ? "→" : "←"}' : "Toggle"}
          </Button>
        </div>
        
        <div className="space-y-6">
          <section>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Main Content</h1>
            <p className="text-gray-600 text-lg">
              This is the main content area. The sidebar provides navigation 
              while this area displays the page content.
            </p>
          </section>
          
          <section className="grid gap-6 ${
            responsive
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-3"
          }">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-gray-900 mb-2">Feature 1</h3>
              <p className="text-gray-600">Description of feature 1</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-gray-900 mb-2">Feature 2</h3>
              <p className="text-gray-600">Description of feature 2</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-gray-900 mb-2">Feature 3</h3>
              <p className="text-gray-600">Description of feature 3</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SidebarLayout;`;
  }

  private generateHeroLayout(responsive: boolean, sections: any[]): string {
    return `import React from 'react';
import { Button, Grid } from '@akitectio/aki-ui';

function HeroLayout() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 py-20 ${
          responsive ? "lg:py-32" : "py-32"
        }">
          <div className="${
            responsive
              ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              : "flex items-center justify-between"
          }">
            <div className="${
              responsive ? "text-center lg:text-left" : "max-w-2xl"
            }">
              <h1 className="${
                responsive ? "text-4xl md:text-5xl lg:text-6xl" : "text-6xl"
              } font-bold leading-tight mb-6">
                Build Amazing 
                <span className="text-yellow-300"> Digital Products</span>
              </h1>
              <p className="${
                responsive ? "text-lg md:text-xl" : "text-xl"
              } mb-8 opacity-90">
                Create beautiful, responsive web applications with our modern 
                component library. Fast, accessible, and developer-friendly.
              </p>
              <div className="${
                responsive
                  ? "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  : "flex gap-4"
              }">
                <Button size="lg" variant="secondary">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  View Demo
                </Button>
              </div>
            </div>
            ${
              responsive
                ? `<div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="bg-white rounded-lg p-6 shadow-2xl">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-32 bg-gray-100 rounded"></div>
                    <div className="flex gap-2">
                      <div className="h-8 bg-blue-200 rounded flex-1"></div>
                      <div className="h-8 bg-gray-200 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`
                : ""
            }
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="${
              responsive ? "text-3xl md:text-4xl" : "text-4xl"
            } font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="${
              responsive ? "text-lg md:text-xl" : "text-xl"
            } text-gray-600 max-w-3xl mx-auto">
              Everything you need to build modern web applications
            </p>
          </div>
          
          <Grid cols={{ base: 1, md: 2, lg: 3 }} gap="8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Optimized for performance with modern build tools and best practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 text-2xl">♿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessible</h3>
              <p className="text-gray-600">
                Built with accessibility in mind, following WCAG guidelines.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600 text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customizable</h3>
              <p className="text-gray-600">
                Easily customize themes, colors, and styles to match your brand.
              </p>
            </div>
          </Grid>
        </div>
      </section>
    </div>
  );
}

export default HeroLayout;`;
  }

  private generateGridLayout(responsive: boolean, sections: any[]): string {
    const cols = sections.length || 4;
    return `import React from 'react';
import { Grid, Card } from '@akitectio/aki-ui';

function GridLayout() {
  const items = Array.from({ length: ${cols * 3} }, (_, i) => ({
    id: i + 1,
    title: \`Item \${i + 1}\`,
    description: \`Description for item \${i + 1}\`
  }));

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Grid Layout Example
      </h1>
      
      <Grid 
        cols={{ 
          base: 1, 
          ${responsive ? "sm: 2, md: 3, lg: 4" : `lg: ${Math.min(cols, 4)}`}
        }} 
        gap="6"
      >
        {items.map(item => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <Card.Header>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </Card.Header>
            <Card.Body>
              <p className="text-gray-600">{item.description}</p>
              <div className="mt-4 pt-4 border-t">
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn More →
                </button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Grid>
    </div>
  );
}

export default GridLayout;`;
  }

  private generateLandingLayout(
    responsive: boolean,
    hasNavigation: boolean,
    hasFooter: boolean
  ): string {
    return `import React from 'react';
import { Navbar, Button, Grid, Card } from '@akitectio/aki-ui';

function LandingLayout() {
  return (
    <div className="min-h-screen">
      ${
        hasNavigation
          ? `<Navbar className="bg-white shadow-sm">
        <Navbar.Brand>
          <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
        </Navbar.Brand>
        <div className="hidden md:flex space-x-6">
          <Navbar.Item href="#features">Features</Navbar.Item>
          <Navbar.Item href="#pricing">Pricing</Navbar.Item>
          <Navbar.Item href="#about">About</Navbar.Item>
          <Navbar.Item href="#contact">Contact</Navbar.Item>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">Sign In</Button>
          <Button variant="primary" size="sm">Get Started</Button>
        </div>
      </Navbar>`
          : ""
      }

      <main>
        {/* Hero Section */}
        <section className="${
          hasNavigation ? "pt-20 " : ""
        }py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="${
              responsive ? "text-4xl md:text-6xl" : "text-6xl"
            } font-bold mb-6">
              Welcome to Our Platform
            </h1>
            <p className="${
              responsive ? "text-lg md:text-xl" : "text-xl"
            } mb-8 max-w-3xl mx-auto opacity-90">
              Build amazing products with our comprehensive suite of tools and services.
              Join thousands of developers who trust our platform.
            </p>
            <div className="${
              responsive
                ? "flex flex-col sm:flex-row gap-4 justify-center"
                : "flex gap-4 justify-center"
            }">
              <Button size="lg" variant="secondary">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="${
                responsive ? "text-3xl md:text-4xl" : "text-4xl"
              } font-bold text-gray-900 mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to succeed in one integrated platform
              </p>
            </div>
            
            <Grid cols={{ base: 1, md: 2, lg: 3 }} gap="8">
              <Card className="text-center">
                <Card.Body className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-blue-600 text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Fast Performance</h3>
                  <p className="text-gray-600">
                    Lightning-fast loading times and optimized performance for the best user experience.
                  </p>
                </Card.Body>
              </Card>
              
              <Card className="text-center">
                <Card.Body className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-green-600 text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Secure & Reliable</h3>
                  <p className="text-gray-600">
                    Enterprise-grade security with 99.9% uptime guarantee and regular backups.
                  </p>
                </Card.Body>
              </Card>
              
              <Card className="text-center">
                <Card.Body className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-purple-600 text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Advanced Analytics</h3>
                  <p className="text-gray-600">
                    Comprehensive analytics and reporting tools to track your success and growth.
                  </p>
                </Card.Body>
              </Card>
            </Grid>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="${
              responsive ? "text-3xl md:text-4xl" : "text-4xl"
            } font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and start your journey today.
            </p>
            <Button size="lg" variant="primary">
              Start Your Free Trial
            </Button>
          </div>
        </section>
      </main>

      ${
        hasFooter
          ? `<footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <Grid cols={{ base: 1, md: 2, lg: 4 }} gap="8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="/features" className="text-gray-300 hover:text-white">Features</a></li>
                <li><a href="/pricing" className="text-gray-300 hover:text-white">Pricing</a></li>
                <li><a href="/docs" className="text-gray-300 hover:text-white">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="/help" className="text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="/support" className="text-gray-300 hover:text-white">Support</a></li>
                <li><a href="/status" className="text-gray-300 hover:text-white">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="/cookies" className="text-gray-300 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </Grid>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>`
          : ""
      }
    </div>
  );
}

export default LandingLayout;`;
  }

  private generateFlexboxLayout(responsive: boolean, sections: any[]): string {
    return `import React from 'react';
import { Stack, Card } from '@akitectio/aki-ui';

function FlexboxLayout() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Flexbox Layout Example
      </h1>
      
      {/* Horizontal Stack */}
      <Stack 
        direction="${responsive ? "column md:row" : "row"}" 
        spacing="6" 
        align="stretch"
        className="mb-8"
      >
        <Card className="flex-1">
          <Card.Header>
            <h3 className="text-lg font-semibold">Main Content</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-gray-600">
              This is the main content area that takes up most of the space.
            </p>
          </Card.Body>
        </Card>
        
        <Card className="${responsive ? "md:w-64" : "w-64"}">
          <Card.Header>
            <h3 className="text-lg font-semibold">Sidebar</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-gray-600">
              This is a sidebar with fixed width.
            </p>
          </Card.Body>
        </Card>
      </Stack>
      
      {/* Vertical Stack */}
      <Stack direction="column" spacing="4">
        <Card>
          <Card.Header>
            <h3 className="text-lg font-semibold">Section 1</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-gray-600">Content for section 1</p>
          </Card.Body>
        </Card>
        
        <Card>
          <Card.Header>
            <h3 className="text-lg font-semibold">Section 2</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-gray-600">Content for section 2</p>
          </Card.Body>
        </Card>
        
        <Card>
          <Card.Header>
            <h3 className="text-lg font-semibold">Section 3</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-gray-600">Content for section 3</p>
          </Card.Body>
        </Card>
      </Stack>
    </div>
  );
}

export default FlexboxLayout;`;
  }

  private generateLayoutCSS(type: string, responsive: boolean): string {
    const baseClasses = {
      dashboard: "min-h-screen bg-gray-50",
      sidebar: "flex min-h-screen",
      hero: "min-h-screen bg-gradient-to-br from-blue-600 to-purple-700",
      grid: "container mx-auto p-6",
      landing: "min-h-screen",
      flexbox: "container mx-auto p-6",
    };

    return baseClasses[type as keyof typeof baseClasses] || baseClasses.flexbox;
  }

  private generateResponsiveBreakpoints(type: string): string {
    return `/* Mobile First Approach */
@media (min-width: 640px) {
  /* Small devices */
  .container { max-width: 640px; }
}

@media (min-width: 768px) {
  /* Medium devices */
  .container { max-width: 768px; }
  .grid-cols-responsive { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  /* Large devices */
  .container { max-width: 1024px; }
  .grid-cols-responsive { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1280px) {
  /* Extra large devices */
  .container { max-width: 1280px; }
  .grid-cols-responsive { grid-template-columns: repeat(4, 1fr); }
}`;
  }

  private generateLayoutFeatures(
    features: string[],
    responsive: boolean
  ): string {
    const includedFeatures = [];

    if (responsive) {
      includedFeatures.push("✅ Responsive design with mobile-first approach");
    }

    if (features.includes("navigation")) {
      includedFeatures.push("✅ Navigation bar with mobile menu");
    }

    if (features.includes("footer")) {
      includedFeatures.push("✅ Footer with organized links");
    }

    if (features.includes("sidebar")) {
      includedFeatures.push("✅ Collapsible sidebar navigation");
    }

    includedFeatures.push("✅ Semantic HTML structure");
    includedFeatures.push("✅ Accessible navigation and content");
    includedFeatures.push("✅ Optimized for performance");

    return includedFeatures.join("\n");
  }

  private generateCustomizationTips(type: string): string {
    const tips = {
      dashboard: [
        "Customize card colors using Aki UI theme variables",
        "Add real data by replacing static content with API calls",
        "Implement dark mode using ColorModeProvider",
        "Add charts and graphs for better data visualization",
      ],
      sidebar: [
        "Customize sidebar width and collapse behavior",
        "Add icons to navigation items",
        "Implement active state indicators",
        "Add user profile section in sidebar",
      ],
      hero: [
        "Replace placeholder content with your actual copy",
        "Customize gradient colors to match your brand",
        "Add animations using CSS transitions or Framer Motion",
        "Optimize images for different screen sizes",
      ],
      grid: [
        "Adjust grid columns based on your content needs",
        "Add filtering and sorting functionality",
        "Implement pagination for large datasets",
        "Add hover effects and animations",
      ],
      landing: [
        "Replace placeholder content with your actual marketing copy",
        "Add your brand colors and logo",
        "Include customer testimonials and social proof",
        "Add contact forms and call-to-action buttons",
      ],
    };

    return (
      tips[type as keyof typeof tips]?.map((tip) => `- ${tip}`).join("\n") ||
      "- Customize colors and spacing to match your brand\n- Add your own content and images\n- Implement interactive features as needed"
    );
  }

  private generateGridConfiguration(
    columns: number,
    rows: any,
    gap: string,
    areas: string[]
  ): any {
    const config = {
      columns: `repeat(${columns}, 1fr)`,
      rows: typeof rows === "number" ? `repeat(${rows}, 1fr)` : "auto",
      areas: areas.length > 0 ? areas.map((area) => `"${area}"`).join(" ") : "",
      tailwindClasses: `grid grid-cols-${Math.min(columns, 12)} gap-${gap
        .replace("rem", "")
        .replace("px", "")}`,
    };

    return config;
  }

  private generateGridAreas(
    areas: string[],
    columns: number,
    rows: any
  ): string {
    return areas
      .map((area, index) => {
        return `.grid-area-${area.toLowerCase().replace(/\s+/g, "-")} {
  grid-area: ${area};
}`;
      })
      .join("\n\n");
  }

  private generateGridExamples(
    columns: number,
    rows: any,
    gap: string
  ): string {
    return `### Common Grid Patterns

**Equal Columns:**
\`\`\`css
grid-template-columns: repeat(${columns}, 1fr);
\`\`\`

**Auto-fit Responsive:**
\`\`\`css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
\`\`\`

**Sidebar Layout:**
\`\`\`css
grid-template-columns: 250px 1fr;
\`\`\`

**Holy Grail Layout:**
\`\`\`css
grid-template-columns: 200px 1fr 200px;
grid-template-rows: auto 1fr auto;
grid-template-areas: 
  "header header header"
  "sidebar main aside"
  "footer footer footer";
\`\`\``;
  }

  private generateAdvancedGridTips(columns: number, areas: string[]): string {
    return `### Advanced Techniques

1. **Responsive Grid:**
   Use CSS Grid with media queries for different breakpoints

2. **Grid Item Placement:**
   Use \`grid-column\` and \`grid-row\` for precise positioning

3. **Overlapping Items:**
   Place items in the same grid cells for layered layouts

4. **Subgrid (Future):**
   Use subgrid for nested grid layouts

5. **Grid Auto-placement:**
   Let CSS Grid automatically place items with \`grid-auto-flow\`

### Performance Tips
- Use \`contain: layout\` for better performance
- Avoid too many grid lines (keep under 1000)
- Use \`grid-template-areas\` for complex layouts
- Consider \`aspect-ratio\` for consistent item heights`;
  }
}
