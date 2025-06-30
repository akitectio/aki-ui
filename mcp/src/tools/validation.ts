import { Tool, CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
}

export interface ValidationError {
  line: number;
  message: string;
  severity: "error";
  code: string;
}

export interface ValidationWarning {
  line: number;
  message: string;
  severity: "warning";
  code: string;
}

export interface ValidateCodeRequest {
  code: string;
}

export class ValidationTool {
  name = "validate_code";
  description = "Validate React/Aki UI component code for best practices";
  inputSchema = {
    type: "object" as const,
    properties: {
      code: {
        type: "string",
        description: "React component code to validate",
      },
    },
    required: ["code"],
  };

  async call(params: ValidateCodeRequest): Promise<CallToolResult> {
    const { code } = params;

    // This is a simplified implementation that would need to be expanded
    // with actual validation logic using ESLint, TypeScript, etc.
    const errors: ValidationError[] = [];
    const warnings: ValidationWarning[] = [];

    // Split code into lines for line-specific validation
    const lines = code.split("\n");

    // Example validations
    lines.forEach((line, index) => {
      // Check for missing key prop in lists
      if (
        line.includes("map(") &&
        line.includes("<") &&
        !line.includes("key=")
      ) {
        errors.push({
          line: index + 1,
          message: "Missing 'key' prop in list rendering",
          severity: "error",
          code: "react/key",
        });
      }

      // Check for inline styles (which should be avoided)
      if (line.includes("style={{") && !line.includes("dynamic style")) {
        warnings.push({
          line: index + 1,
          message:
            "Inline styles should be avoided; use Tailwind classes or styled components",
          severity: "warning",
          code: "aki/no-inline-styles",
        });
      }

      // Check for hard-coded colors that should use theme variables
      if (line.match(/#[0-9a-fA-F]{3,6}/) && !line.includes("theme")) {
        warnings.push({
          line: index + 1,
          message:
            "Hard-coded colors should use theme variables for consistency",
          severity: "warning",
          code: "aki/use-theme-colors",
        });
      }
    });

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              isValid: errors.length === 0,
              errors,
              warnings,
            },
            null,
            2
          ),
        },
      ],
    };
  }
}
