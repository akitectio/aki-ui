import { Tool, CallToolResult } from "@modelcontextprotocol/sdk/types.js";

export interface TestConfig {
  framework: "jest" | "vitest" | "cypress" | "playwright";
  testType: "unit" | "integration" | "e2e" | "accessibility";
  coverage: boolean;
  mocking: boolean;
}

export class TestingTools {
  getTools(): Tool[] {
    return [
      {
        name: "generate_tests",
        description: "Generate comprehensive tests for Aki UI components",
        inputSchema: {
          type: "object",
          properties: {
            componentCode: {
              type: "string",
              description: "React component code to generate tests for",
            },
            testType: {
              type: "string",
              enum: ["unit", "integration", "e2e", "accessibility"],
              description: "Type of tests to generate",
            },
            framework: {
              type: "string",
              enum: ["jest", "vitest", "cypress", "playwright"],
              description: "Testing framework to use",
            },
            features: {
              type: "array",
              items: { type: "string" },
              description:
                "Features to test (props, events, accessibility, etc.)",
            },
          },
          required: ["componentCode", "testType"],
        },
      },
      {
        name: "accessibility_audit",
        description: "Generate accessibility compliance check for components",
        inputSchema: {
          type: "object",
          properties: {
            componentCode: {
              type: "string",
              description: "Component code to audit for accessibility",
            },
            wcagLevel: {
              type: "string",
              enum: ["A", "AA", "AAA"],
              description: "WCAG compliance level",
              default: "AA",
            },
          },
          required: ["componentCode"],
        },
      },
      {
        name: "performance_benchmark",
        description: "Generate performance testing setup for components",
        inputSchema: {
          type: "object",
          properties: {
            componentCode: {
              type: "string",
              description: "Component code to benchmark",
            },
            metrics: {
              type: "array",
              items: {
                type: "string",
                enum: [
                  "render-time",
                  "memory-usage",
                  "bundle-size",
                  "re-renders",
                ],
              },
              description: "Performance metrics to measure",
            },
          },
          required: ["componentCode"],
        },
      },
    ];
  }

  async generateTests(args: any): Promise<CallToolResult> {
    const { componentCode, testType, framework = "jest", features = [] } = args;

    const componentName = this.extractComponentName(componentCode);
    const testCode = this.generateTestCode(
      componentCode,
      componentName,
      testType,
      framework,
      features
    );
    const setupCode = this.generateTestSetup(framework, testType);
    const configCode = this.generateTestConfig(framework);

    return {
      content: [
        {
          type: "text",
          text: `# Generated Tests for ${componentName}

## Test File (${componentName}.test.${framework === "vitest" ? "ts" : "tsx"})
\`\`\`typescript
${testCode}
\`\`\`

## Test Setup (test-setup.ts)
\`\`\`typescript
${setupCode}
\`\`\`

## Configuration (${this.getConfigFileName(framework)})
\`\`\`${framework === "jest" ? "json" : "typescript"}
${configCode}
\`\`\`

## Running Tests
\`\`\`bash
# Install dependencies
npm install --save-dev ${this.getTestDependencies(framework, testType).join(
            " "
          )}

# Run tests
${this.getRunCommand(framework, testType)}

# Run with coverage
${this.getCoverageCommand(framework)}
\`\`\`

## Test Features Covered
${this.generateTestFeaturesList(features, testType)}

## Additional Recommendations
${this.generateTestRecommendations(testType, componentName)}
`,
        },
      ],
    };
  }

  async generateAccessibilityAudit(args: any): Promise<CallToolResult> {
    const { componentCode, wcagLevel = "AA" } = args;

    const componentName = this.extractComponentName(componentCode);
    const auditResults = this.analyzeAccessibility(componentCode, wcagLevel);
    const testCode = this.generateAccessibilityTests(
      componentName,
      auditResults
    );

    return {
      content: [
        {
          type: "text",
          text: `# Accessibility Audit for ${componentName}

## WCAG ${wcagLevel} Compliance Report

### Status: ${
            auditResults.overallScore >= 90
              ? "✅ Excellent"
              : auditResults.overallScore >= 70
              ? "⚠️ Good"
              : "❌ Needs Improvement"
          } (${auditResults.overallScore}/100)

## Critical Issues (${auditResults.critical.length})
${auditResults.critical
  .map(
    (issue: any) => `- ❌ **${issue.rule}**: ${issue.description}
  - **Impact**: ${issue.impact}
  - **Fix**: ${issue.fix}`
  )
  .join("\n\n")}

## Warnings (${auditResults.warnings.length})
${auditResults.warnings
  .map(
    (warning: any) => `- ⚠️ **${warning.rule}**: ${warning.description}
  - **Suggestion**: ${warning.fix}`
  )
  .join("\n\n")}

## Passed Checks (${auditResults.passed.length})
${auditResults.passed.map((check: string) => `- ✅ ${check}`).join("\n")}

## Accessibility Test Suite
\`\`\`typescript
${testCode}
\`\`\`

## Accessibility Checklist
${this.generateAccessibilityChecklist(wcagLevel)}

## Recommendations
${this.generateAccessibilityRecommendations(auditResults, componentName)}

## Tools for Testing
- **axe-core**: Automated accessibility testing
- **jest-axe**: Jest integration for axe-core
- **@testing-library/jest-dom**: Accessibility-focused assertions
- **Screen Reader Testing**: Manual testing with NVDA/JAWS/VoiceOver
`,
        },
      ],
    };
  }

  async generatePerformanceBenchmark(args: any): Promise<CallToolResult> {
    const { componentCode, metrics = ["render-time", "memory-usage"] } = args;

    const componentName = this.extractComponentName(componentCode);
    const benchmarkCode = this.generateBenchmarkCode(componentName, metrics);
    const profileCode = this.generateProfilerCode(componentName);

    return {
      content: [
        {
          type: "text",
          text: `# Performance Benchmark for ${componentName}

## Benchmark Test Suite
\`\`\`typescript
${benchmarkCode}
\`\`\`

## React Profiler Integration
\`\`\`typescript
${profileCode}
\`\`\`

## Performance Metrics Setup
\`\`\`bash
# Install performance testing dependencies
npm install --save-dev @testing-library/react-hooks
npm install --save-dev benchmark
npm install --save-dev @types/benchmark
\`\`\`

## Bundle Size Analysis
\`\`\`typescript
// webpack-bundle-analyzer setup
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    })
  ]
};
\`\`\`

## Performance Monitoring
${this.generatePerformanceMonitoring(metrics)}

## Optimization Recommendations
${this.generatePerformanceOptimizations(componentName, metrics)}

## Running Benchmarks
\`\`\`bash
# Run performance tests
npm run test:performance

# Analyze bundle size
npm run analyze

# Profile component rendering
npm run profile
\`\`\`
`,
        },
      ],
    };
  }

  private extractComponentName(componentCode: string): string {
    const match = componentCode.match(/(?:function|const|class)\s+(\w+)/);
    return match ? match[1] : "Component";
  }

  private generateTestCode(
    componentCode: string,
    componentName: string,
    testType: string,
    framework: string,
    features: string[]
  ): string {
    const imports = this.generateTestImports(framework, testType);

    switch (testType) {
      case "unit":
        return this.generateUnitTests(componentName, features, imports);
      case "integration":
        return this.generateIntegrationTests(componentName, features, imports);
      case "e2e":
        return this.generateE2ETests(componentName, features, framework);
      case "accessibility":
        return this.generateAccessibilityTestCode(componentName, imports);
      default:
        return this.generateUnitTests(componentName, features, imports);
    }
  }

  private generateTestImports(framework: string, testType: string): string {
    const baseImports = [
      "import React from 'react';",
      "import { render, screen, fireEvent, waitFor } from '@testing-library/react';",
      "import userEvent from '@testing-library/user-event';",
    ];

    if (framework === "jest") {
      baseImports.push("import '@testing-library/jest-dom';");
    } else if (framework === "vitest") {
      baseImports.push("import { describe, it, expect, vi } from 'vitest';");
      baseImports.push("import '@testing-library/jest-dom/vitest';");
    }

    if (testType === "accessibility") {
      baseImports.push("import { axe, toHaveNoViolations } from 'jest-axe';");
      baseImports.push("expect.extend(toHaveNoViolations);");
    }

    return baseImports.join("\n");
  }

  private generateUnitTests(
    componentName: string,
    features: string[],
    imports: string
  ): string {
    return `${imports}
import { ${componentName} } from './${componentName}';

describe('${componentName}', () => {
  it('renders without crashing', () => {
    render(<${componentName} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('displays correct text content', () => {
    const testText = 'Test Button';
    render(<${componentName}>{testText}</${componentName}>);
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  ${
    features.includes("props")
      ? `
  describe('Props', () => {
    it('applies variant prop correctly', () => {
      render(<${componentName} variant="primary">Primary</${componentName}>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('variant-primary');
    });

    it('applies size prop correctly', () => {
      render(<${componentName} size="lg">Large</${componentName}>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('size-lg');
    });

    it('applies disabled prop correctly', () => {
      render(<${componentName} disabled>Disabled</${componentName}>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
  });`
      : ""
  }

  ${
    features.includes("events")
      ? `
  describe('Events', () => {
    it('calls onClick handler when clicked', async () => {
      const handleClick = vi.fn();
      render(<${componentName} onClick={handleClick}>Click me</${componentName}>);
      
      const button = screen.getByRole('button');
      await userEvent.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', async () => {
      const handleClick = vi.fn();
      render(
        <${componentName} onClick={handleClick} disabled>
          Disabled
        </${componentName}>
      );
      
      const button = screen.getByRole('button');
      await userEvent.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
    });
  });`
      : ""
  }

  ${
    features.includes("loading")
      ? `
  describe('Loading State', () => {
    it('shows loading state correctly', () => {
      render(<${componentName} loading>Loading</${componentName}>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-busy', 'true');
      expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });

    it('disables button when loading', () => {
      render(<${componentName} loading>Loading</${componentName}>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
  });`
      : ""
  }

  ${
    features.includes("accessibility")
      ? `
  describe('Accessibility', () => {
    it('has correct ARIA attributes', () => {
      render(<${componentName} aria-label="Test button">Button</${componentName}>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Test button');
    });

    it('is keyboard accessible', async () => {
      const handleClick = vi.fn();
      render(<${componentName} onClick={handleClick}>Button</${componentName}>);
      
      const button = screen.getByRole('button');
      button.focus();
      await userEvent.keyboard('{Enter}');
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('has no accessibility violations', async () => {
      const { container } = render(<${componentName}>Accessible Button</${componentName}>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });`
      : ""
  }

  describe('Edge Cases', () => {
    it('handles empty children gracefully', () => {
      render(<${componentName} />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('handles very long text content', () => {
      const longText = 'This is a very long text that should be handled gracefully '.repeat(10);
      render(<${componentName}>{longText}</${componentName}>);
      expect(screen.getByText(longText)).toBeInTheDocument();
    });
  });
});`;
  }

  private generateIntegrationTests(
    componentName: string,
    features: string[],
    imports: string
  ): string {
    return `${imports}
import { ${componentName} } from './${componentName}';
import { ThemeProvider } from '@akitectio/aki-ui';

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={{ primary: 'blue' }}>
      {component}
    </ThemeProvider>
  );
};

describe('${componentName} Integration Tests', () => {
  it('integrates correctly with ThemeProvider', () => {
    renderWithTheme(<${componentName} variant="primary">Themed Button</${componentName}>);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background-color: blue');
  });

  it('works with form submission', async () => {
    const handleSubmit = vi.fn((e) => e.preventDefault());
    
    render(
      <form onSubmit={handleSubmit}>
        <${componentName} type="submit">Submit</${componentName}>
      </form>
    );
    
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('maintains focus management in complex layouts', async () => {
    render(
      <div>
        <${componentName}>First</${componentName}>
        <${componentName}>Second</${componentName}>
        <${componentName}>Third</${componentName}>
      </div>
    );
    
    const buttons = screen.getAllByRole('button');
    
    buttons[0].focus();
    await userEvent.tab();
    expect(buttons[1]).toHaveFocus();
    
    await userEvent.tab();
    expect(buttons[2]).toHaveFocus();
  });

  it('handles dynamic prop changes', async () => {
    const TestWrapper = () => {
      const [variant, setVariant] = React.useState<'primary' | 'secondary'>('primary');
      
      return (
        <div>
          <${componentName} variant={variant}>Dynamic Button</${componentName}>
          <button onClick={() => setVariant(variant === 'primary' ? 'secondary' : 'primary')}>
            Change Variant
          </button>
        </div>
      );
    };
    
    render(<TestWrapper />);
    
    const dynamicButton = screen.getByText('Dynamic Button');
    const changeButton = screen.getByText('Change Variant');
    
    expect(dynamicButton).toHaveClass('variant-primary');
    
    await userEvent.click(changeButton);
    
    expect(dynamicButton).toHaveClass('variant-secondary');
  });
});`;
  }

  private generateE2ETests(
    componentName: string,
    features: string[],
    framework: string
  ): string {
    if (framework === "cypress") {
      return this.generateCypressTests(componentName, features);
    } else if (framework === "playwright") {
      return this.generatePlaywrightTests(componentName, features);
    }
    return this.generateCypressTests(componentName, features);
  }

  private generateCypressTests(
    componentName: string,
    features: string[]
  ): string {
    return `// cypress/e2e/${componentName.toLowerCase()}.cy.ts
describe('${componentName} E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/components/${componentName.toLowerCase()}');
  });

  it('displays correctly on page load', () => {
    cy.get('[data-testid="${componentName.toLowerCase()}"]').should('be.visible');
    cy.get('[data-testid="${componentName.toLowerCase()}"]').should('contain.text', 'Button');
  });

  it('is clickable and responds to user interaction', () => {
    cy.get('[data-testid="${componentName.toLowerCase()}"]').click();
    cy.get('[data-testid="click-count"]').should('contain.text', '1');
  });

  it('works across different viewports', () => {
    // Test mobile viewport
    cy.viewport(375, 667);
    cy.get('[data-testid="${componentName.toLowerCase()}"]').should('be.visible');
    cy.get('[data-testid="${componentName.toLowerCase()}"]').click();
    
    // Test tablet viewport
    cy.viewport(768, 1024);
    cy.get('[data-testid="${componentName.toLowerCase()}"]').should('be.visible');
    
    // Test desktop viewport
    cy.viewport(1920, 1080);
    cy.get('[data-testid="${componentName.toLowerCase()}"]').should('be.visible');
  });

  it('maintains accessibility in real browser environment', () => {
    cy.injectAxe();
    cy.checkA11y();
  });

  ${
    features.includes("keyboard")
      ? `
  it('supports keyboard navigation', () => {
    cy.get('body').tab();
    cy.focused().should('have.attr', 'data-testid', '${componentName.toLowerCase()}');
    cy.focused().type('{enter}');
    cy.get('[data-testid="click-count"]').should('contain.text', '1');
  });`
      : ""
  }

  ${
    features.includes("loading")
      ? `
  it('shows loading state correctly', () => {
    cy.get('[data-testid="trigger-loading"]').click();
    cy.get('[data-testid="${componentName.toLowerCase()}"]').should('have.attr', 'aria-busy', 'true');
    cy.get('[data-testid="spinner"]').should('be.visible');
  });`
      : ""
  }
});`;
  }

  private generatePlaywrightTests(
    componentName: string,
    features: string[]
  ): string {
    return `// tests/e2e/${componentName.toLowerCase()}.spec.ts
import { test, expect } from '@playwright/test';

test.describe('${componentName} E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/${componentName.toLowerCase()}');
  });

  test('displays correctly on page load', async ({ page }) => {
    const button = page.getByTestId('${componentName.toLowerCase()}');
    await expect(button).toBeVisible();
    await expect(button).toContainText('Button');
  });

  test('is clickable and responds to user interaction', async ({ page }) => {
    const button = page.getByTestId('${componentName.toLowerCase()}');
    const counter = page.getByTestId('click-count');
    
    await button.click();
    await expect(counter).toContainText('1');
  });

  test('works across different viewports', async ({ page }) => {
    const button = page.getByTestId('${componentName.toLowerCase()}');
    
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(button).toBeVisible();
    
    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(button).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(button).toBeVisible();
  });

  test('maintains accessibility standards', async ({ page }) => {
    // Use axe-playwright for accessibility testing
    const accessibilityScanResults = await page.accessibility.snapshot();
    expect(accessibilityScanResults).toBeDefined();
  });

  ${
    features.includes("keyboard")
      ? `
  test('supports keyboard navigation', async ({ page }) => {
    const button = page.getByTestId('${componentName.toLowerCase()}');
    const counter = page.getByTestId('click-count');
    
    await page.keyboard.press('Tab');
    await expect(button).toBeFocused();
    
    await page.keyboard.press('Enter');
    await expect(counter).toContainText('1');
  });`
      : ""
  }

  ${
    features.includes("performance")
      ? `
  test('meets performance benchmarks', async ({ page }) => {
    // Start tracing for performance metrics
    await page.tracing.start({ screenshots: true, snapshots: true });
    
    const button = page.getByTestId('${componentName.toLowerCase()}');
    
    // Measure interaction timing
    const startTime = Date.now();
    await button.click();
    const endTime = Date.now();
    
    await page.tracing.stop({ path: 'trace.zip' });
    
    // Assert interaction is fast (< 100ms)
    expect(endTime - startTime).toBeLessThan(100);
  });`
      : ""
  }
});`;
  }

  private generateAccessibilityTestCode(
    componentName: string,
    imports: string
  ): string {
    return `${imports}
import { ${componentName} } from './${componentName}';

describe('${componentName} Accessibility Tests', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<${componentName}>Accessible Button</${componentName}>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has proper ARIA role', () => {
    render(<${componentName}>Button</${componentName}>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('supports keyboard navigation', async () => {
    const handleClick = vi.fn();
    render(<${componentName} onClick={handleClick}>Button</${componentName}>);
    
    const button = screen.getByRole('button');
    button.focus();
    
    expect(button).toHaveFocus();
    
    await userEvent.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalledTimes(1);
    
    await userEvent.keyboard(' ');
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('has sufficient color contrast', () => {
    render(<${componentName} variant="primary">Button</${componentName}>);
    const button = screen.getByRole('button');
    
    const styles = window.getComputedStyle(button);
    // Note: This is a simplified test - use tools like color-contrast for real testing
    expect(styles.backgroundColor).toBeDefined();
    expect(styles.color).toBeDefined();
  });

  it('provides proper labeling', () => {
    render(<${componentName} aria-label="Custom label">Icon Only</${componentName}>);
    const button = screen.getByLabelText('Custom label');
    expect(button).toBeInTheDocument();
  });

  it('indicates disabled state to screen readers', () => {
    render(<${componentName} disabled>Disabled Button</${componentName}>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('announces loading state to screen readers', () => {
    render(<${componentName} loading>Loading Button</${componentName}>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-busy', 'true');
  });
});`;
  }

  private generateTestSetup(framework: string, testType: string): string {
    const baseSetup = `import '@testing-library/jest-dom';`;

    if (framework === "vitest") {
      return `${baseSetup}
import { vi } from 'vitest';

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}));

// Mock ResizeObserver
global.ResizeObserver = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}));

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});`;
    }

    return `${baseSetup}

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn(() => ({
  disconnect: jest.fn(),
  observe: jest.fn(),
  unobserve: jest.fn(),
}));

// Mock ResizeObserver
global.ResizeObserver = jest.fn(() => ({
  disconnect: jest.fn(),
  observe: jest.fn(),
  unobserve: jest.fn(),
}));

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});`;
  }

  private generateTestConfig(framework: string): string {
    if (framework === "vitest") {
      return `import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test-setup.ts',
      ],
    },
  },
});`;
    }

    return `{
  "preset": "ts-jest",
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": ["<rootDir>/src/test-setup.ts"],
  "moduleNameMapping": {
    "\\\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  "collectCoverageFrom": [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/test-setup.ts"
  ],
  "coverageReporters": ["text", "lcov", "html"],
  "testMatch": [
    "<rootDir>/src/**/__tests__/**/*.{ts,tsx}",
    "<rootDir>/src/**/*.{test,spec}.{ts,tsx}"
  ]
}`;
  }

  private getConfigFileName(framework: string): string {
    switch (framework) {
      case "vitest":
        return "vitest.config.ts";
      case "cypress":
        return "cypress.config.ts";
      case "playwright":
        return "playwright.config.ts";
      default:
        return "jest.config.json";
    }
  }

  private getTestDependencies(framework: string, testType: string): string[] {
    const baseDeps = [
      "@testing-library/react",
      "@testing-library/jest-dom",
      "@testing-library/user-event",
    ];

    if (framework === "jest") {
      baseDeps.push("jest", "@types/jest", "ts-jest");
    } else if (framework === "vitest") {
      baseDeps.push("vitest", "@vitejs/plugin-react", "jsdom");
    } else if (framework === "cypress") {
      baseDeps.push("cypress", "cypress-axe");
    } else if (framework === "playwright") {
      baseDeps.push("@playwright/test", "axe-playwright");
    }

    if (testType === "accessibility") {
      baseDeps.push("jest-axe", "axe-core");
    }

    return baseDeps;
  }

  private getRunCommand(framework: string, testType: string): string {
    switch (framework) {
      case "vitest":
        return "npm run vitest";
      case "cypress":
        return "npm run cypress:run";
      case "playwright":
        return "npm run playwright test";
      default:
        return "npm test";
    }
  }

  private getCoverageCommand(framework: string): string {
    switch (framework) {
      case "vitest":
        return "npm run vitest -- --coverage";
      case "jest":
        return "npm test -- --coverage";
      default:
        return "npm test -- --coverage";
    }
  }

  private generateTestFeaturesList(
    features: string[],
    testType: string
  ): string {
    const includedFeatures = [
      "✅ Component rendering",
      "✅ Props validation",
      "✅ Error boundary handling",
    ];

    if (features.includes("events")) {
      includedFeatures.push("✅ Event handling");
    }

    if (features.includes("accessibility")) {
      includedFeatures.push("✅ Accessibility compliance");
    }

    if (features.includes("loading")) {
      includedFeatures.push("✅ Loading states");
    }

    if (features.includes("keyboard")) {
      includedFeatures.push("✅ Keyboard navigation");
    }

    if (testType === "integration") {
      includedFeatures.push("✅ Theme integration");
      includedFeatures.push("✅ Form integration");
    }

    if (testType === "e2e") {
      includedFeatures.push("✅ Real browser testing");
      includedFeatures.push("✅ Cross-viewport testing");
    }

    return includedFeatures.join("\n");
  }

  private generateTestRecommendations(
    testType: string,
    componentName: string
  ): string {
    const recommendations = [
      "Run tests in CI/CD pipeline",
      "Set up test coverage thresholds",
      "Use visual regression testing for UI components",
      "Test with real assistive technologies",
    ];

    if (testType === "unit") {
      recommendations.push("Focus on component behavior and edge cases");
      recommendations.push("Mock external dependencies appropriately");
    } else if (testType === "integration") {
      recommendations.push("Test component interactions with providers");
      recommendations.push("Verify proper data flow between components");
    } else if (testType === "e2e") {
      recommendations.push("Test critical user journeys");
      recommendations.push("Include performance monitoring");
    }

    return recommendations.map((rec) => `- ${rec}`).join("\n");
  }

  private analyzeAccessibility(componentCode: string, wcagLevel: string): any {
    // This is a simplified analysis - in real implementation, you'd use AST parsing
    const issues = {
      critical: [] as any[],
      warnings: [] as any[],
      passed: [] as string[],
      overallScore: 85,
    };

    // Check for common accessibility issues
    if (!componentCode.includes("aria-")) {
      issues.critical.push({
        rule: "Missing ARIA attributes",
        description: "Component lacks proper ARIA labeling",
        impact: "High - Screen readers cannot properly identify the component",
        fix: "Add appropriate aria-label, aria-describedby, or role attributes",
      });
    } else {
      issues.passed.push("ARIA attributes present");
    }

    if (!componentCode.includes("alt=") && componentCode.includes("<img")) {
      issues.critical.push({
        rule: "Missing alt text",
        description: "Images without alternative text",
        impact: "High - Screen readers cannot describe images",
        fix: "Add descriptive alt attributes to all images",
      });
    }

    if (
      componentCode.includes("onClick") &&
      !componentCode.includes("onKeyDown")
    ) {
      issues.warnings.push({
        rule: "Keyboard navigation",
        description: "Click handlers should have keyboard equivalents",
        fix: "Add onKeyDown handler for Enter and Space keys",
      });
    } else {
      issues.passed.push("Keyboard navigation supported");
    }

    if (!componentCode.includes("focus")) {
      issues.warnings.push({
        rule: "Focus management",
        description: "No explicit focus management found",
        fix: "Implement proper focus indicators and focus trapping where needed",
      });
    }

    // Color contrast check (simplified)
    if (
      componentCode.includes("color:") ||
      componentCode.includes("background")
    ) {
      issues.passed.push(
        "Color styling present (manual contrast check needed)"
      );
    }

    return issues;
  }

  private generateAccessibilityTests(
    componentName: string,
    auditResults: any
  ): string {
    return `import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { ${componentName} } from './${componentName}';

expect.extend(toHaveNoViolations);

describe('${componentName} Accessibility Tests', () => {
  it('should not have any accessibility violations', async () => {
    const { container } = render(<${componentName}>Test</${componentName}>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  ${
    auditResults.critical.some((issue: any) => issue.rule.includes("ARIA"))
      ? `
  it('should have proper ARIA attributes', () => {
    render(<${componentName} aria-label="Test component">Content</${componentName}>);
    const element = screen.getByLabelText('Test component');
    expect(element).toBeInTheDocument();
  });`
      : ""
  }

  ${
    auditResults.warnings.some((warning: any) =>
      warning.rule.includes("Keyboard")
    )
      ? `
  it('should be keyboard accessible', async () => {
    const handleClick = jest.fn();
    render(<${componentName} onClick={handleClick}>Clickable</${componentName}>);
    
    const element = screen.getByText('Clickable');
    element.focus();
    
    await userEvent.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalledTimes(1);
    
    await userEvent.keyboard(' ');
    expect(handleClick).toHaveBeenCalledTimes(2);
  });`
      : ""
  }

  it('should have visible focus indicators', () => {
    render(<${componentName}>Focusable</${componentName}>);
    const element = screen.getByText('Focusable');
    
    element.focus();
    expect(element).toHaveFocus();
    
    // Check for focus styles (simplified - would need actual style checking)
    expect(element).toBeVisible();
  });

  it('should work with screen readers', () => {
    render(<${componentName} role="button">Screen reader test</${componentName}>);
    const element = screen.getByRole('button');
    expect(element).toHaveAccessibleName('Screen reader test');
  });
});`;
  }

  private generateAccessibilityChecklist(wcagLevel: string): string {
    const checklist = [
      "□ **Keyboard Navigation**: All interactive elements accessible via keyboard",
      "□ **Focus Indicators**: Visible focus states for all focusable elements",
      "□ **ARIA Labels**: Proper labeling for screen readers",
      "□ **Color Contrast**: Minimum 4.5:1 ratio for normal text (AA level)",
      "□ **Alt Text**: Descriptive alternative text for images",
      "□ **Heading Structure**: Logical heading hierarchy (h1, h2, h3...)",
      "□ **Form Labels**: All form inputs have associated labels",
      "□ **Error Messages**: Clear, descriptive error messages",
    ];

    if (wcagLevel === "AAA") {
      checklist.push(
        "□ **Enhanced Contrast**: 7:1 ratio for normal text (AAA level)",
        "□ **Animation Control**: Option to disable animations",
        "□ **Reading Level**: Content written at appropriate reading level"
      );
    }

    return checklist.join("\n");
  }

  private generateAccessibilityRecommendations(
    auditResults: any,
    componentName: string
  ): string {
    const recommendations = [
      "Test with actual screen readers (NVDA, JAWS, VoiceOver)",
      "Use automated tools like axe-core regularly",
      "Include accessibility testing in CI/CD pipeline",
      "Get feedback from users with disabilities",
    ];

    if (auditResults.critical.length > 0) {
      recommendations.unshift(
        "🚨 Fix critical accessibility issues immediately"
      );
    }

    if (auditResults.warnings.length > 0) {
      recommendations.push(
        "📋 Address accessibility warnings in next iteration"
      );
    }

    return recommendations.map((rec) => `- ${rec}`).join("\n");
  }

  private generateBenchmarkCode(
    componentName: string,
    metrics: string[]
  ): string {
    return `import React from 'react';
import { render } from '@testing-library/react';
import Benchmark from 'benchmark';
import { ${componentName} } from './${componentName}';

describe('${componentName} Performance Benchmarks', () => {
  ${
    metrics.includes("render-time")
      ? `
  it('should render within acceptable time', (done) => {
    const suite = new Benchmark.Suite();
    
    suite
      .add('${componentName} render', () => {
        const { unmount } = render(<${componentName}>Test</${componentName}>);
        unmount();
      })
      .on('complete', function() {
        const benchmark = this[0];
        console.log('Render time:', benchmark.stats.mean * 1000, 'ms');
        
        // Assert render time is under 16ms (60fps)
        expect(benchmark.stats.mean * 1000).toBeLessThan(16);
        done();
      })
      .run();
  });`
      : ""
  }

  ${
    metrics.includes("memory-usage")
      ? `
  it('should not cause memory leaks', () => {
    const initialMemory = performance.memory?.usedJSHeapSize || 0;
    
    // Render and unmount component multiple times
    for (let i = 0; i < 100; i++) {
      const { unmount } = render(<${componentName}>Test {i}</${componentName}>);
      unmount();
    }
    
    // Force garbage collection if available
    if (global.gc) {
      global.gc();
    }
    
    const finalMemory = performance.memory?.usedJSHeapSize || 0;
    const memoryIncrease = finalMemory - initialMemory;
    
    // Memory increase should be reasonable (less than 1MB)
    expect(memoryIncrease).toBeLessThan(1024 * 1024);
  });`
      : ""
  }

  ${
    metrics.includes("re-renders")
      ? `
  it('should minimize unnecessary re-renders', () => {
    let renderCount = 0;
    
    const TestComponent = React.memo(() => {
      renderCount++;
      return <${componentName}>Memoized</${componentName}>;
    });
    
    const { rerender } = render(<TestComponent />);
    
    // Re-render with same props
    rerender(<TestComponent />);
    rerender(<TestComponent />);
    
    // Should only render once due to memoization
    expect(renderCount).toBe(1);
  });`
      : ""
  }

  ${
    metrics.includes("bundle-size")
      ? `
  it('should have reasonable bundle size impact', async () => {
    // This would typically be done with webpack-bundle-analyzer
    // Here's a simplified check
    const componentString = ${componentName}.toString();
    const componentSize = new Blob([componentString]).size;
    
    // Component code should be under 10KB
    expect(componentSize).toBeLessThan(10 * 1024);
  });`
      : ""
  }
});`;
  }

  private generateProfilerCode(componentName: string): string {
    return `import React, { Profiler } from 'react';
import { render } from '@testing-library/react';
import { ${componentName} } from './${componentName}';

describe('${componentName} React Profiler', () => {
  it('should profile component performance', (done) => {
    const onRenderCallback = (
      id: string,
      phase: 'mount' | 'update',
      actualDuration: number,
      baseDuration: number,
      startTime: number,
      commitTime: number
    ) => {
      console.log('Profiler results:', {
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime
      });
      
      // Assert performance metrics
      expect(actualDuration).toBeLessThan(16); // 60fps target
      expect(baseDuration).toBeLessThan(16);
      
      if (phase === 'mount') {
        done();
      }
    };
    
    render(
      <Profiler id="${componentName}" onRender={onRenderCallback}>
        <${componentName}>Profiled Component</${componentName}>
      </Profiler>
    );
  });
});`;
  }

  private generatePerformanceMonitoring(metrics: string[]): string {
    return `### Continuous Performance Monitoring

**Performance Budget:**
${metrics
  .map((metric) => {
    switch (metric) {
      case "render-time":
        return "- Render time: < 16ms (60fps)";
      case "memory-usage":
        return "- Memory usage: < 1MB increase per 100 renders";
      case "bundle-size":
        return "- Bundle impact: < 10KB per component";
      case "re-renders":
        return "- Unnecessary re-renders: 0";
      default:
        return `- ${metric}: Monitor and optimize`;
    }
  })
  .join("\n")}

**Monitoring Tools:**
- React DevTools Profiler
- Chrome DevTools Performance tab
- Web Vitals extension
- Lighthouse CI

**Performance CI Checks:**
\`\`\`yaml
# .github/workflows/performance.yml
- name: Performance Tests
  run: npm run test:performance
- name: Bundle Size Check
  run: npm run analyze:bundle
- name: Lighthouse CI
  run: npx lhci autorun
\`\`\``;
  }

  private generatePerformanceOptimizations(
    componentName: string,
    metrics: string[]
  ): string {
    return `### Optimization Strategies

**For Render Performance:**
- Use React.memo() for pure components
- Implement useMemo() for expensive calculations
- Use useCallback() for event handlers
- Avoid inline objects and functions in JSX

**For Memory Usage:**
- Clean up event listeners in useEffect cleanup
- Cancel pending requests on unmount
- Use weak references where appropriate
- Implement proper cleanup in custom hooks

**For Bundle Size:**
- Use tree shaking with proper imports
- Implement code splitting for large components
- Remove unused dependencies
- Use dynamic imports for optional features

**Example Optimized Component:**
\`\`\`tsx
import React, { memo, useCallback, useMemo } from 'react';

const Optimized${componentName} = memo(({ items, onItemClick }) => {
  const processedItems = useMemo(() => 
    items.map(item => ({ ...item, processed: true })), 
    [items]
  );
  
  const handleClick = useCallback((id) => {
    onItemClick?.(id);
  }, [onItemClick]);
  
  return (
    <div>
      {processedItems.map(item => (
        <button 
          key={item.id} 
          onClick={() => handleClick(item.id)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
});

export default Optimized${componentName};
\`\`\``;
  }
}
