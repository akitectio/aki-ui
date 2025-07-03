import { Tool, CallToolResult } from "@modelcontextprotocol/sdk/types.js";

export interface FormField {
  name: string;
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "select"
    | "checkbox"
    | "radio"
    | "textarea";
  label: string;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    min?: number;
    max?: number;
    custom?: string;
  };
}

export interface FormSchema {
  fields: FormField[];
  submitText?: string;
  resetText?: string;
  layout?: "single" | "double" | "grid";
  validation?: "live" | "onSubmit" | "onBlur";
}

export class FormTools {
  getTools(): Tool[] {
    return [
      {
        name: "generate_form",
        description:
          "Generate a comprehensive form with validation using Aki UI components",
        inputSchema: {
          type: "object",
          properties: {
            schema: {
              type: "object",
              description: "Form schema with fields and validation rules",
              properties: {
                fields: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      name: { type: "string" },
                      type: {
                        type: "string",
                        enum: [
                          "text",
                          "email",
                          "password",
                          "number",
                          "select",
                          "checkbox",
                          "radio",
                          "textarea",
                        ],
                      },
                      label: { type: "string" },
                      required: { type: "boolean" },
                      placeholder: { type: "string" },
                      options: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            value: { type: "string" },
                            label: { type: "string" },
                          },
                        },
                      },
                    },
                  },
                },
                layout: { type: "string", enum: ["single", "double", "grid"] },
                validation: {
                  type: "string",
                  enum: ["live", "onSubmit", "onBlur"],
                },
              },
            },
            features: {
              type: "array",
              items: { type: "string" },
              description:
                "Features to include (typescript, validation, loading-states, etc.)",
            },
          },
          required: ["schema"],
        },
      },
      {
        name: "validate_form_schema",
        description: "Validate form schema and suggest improvements",
        inputSchema: {
          type: "object",
          properties: {
            schema: {
              type: "object",
              description: "Form schema to validate",
            },
          },
          required: ["schema"],
        },
      },
      {
        name: "form_field_suggestions",
        description: "Get smart field suggestions based on form purpose",
        inputSchema: {
          type: "object",
          properties: {
            purpose: {
              type: "string",
              description:
                "Form purpose (registration, contact, checkout, profile, etc.)",
              enum: [
                "registration",
                "login",
                "contact",
                "checkout",
                "profile",
                "survey",
                "feedback",
                "search",
                "newsletter",
              ],
            },
            industry: {
              type: "string",
              description: "Industry context for specialized fields",
              enum: [
                "ecommerce",
                "healthcare",
                "finance",
                "education",
                "real-estate",
                "general",
              ],
            },
          },
          required: ["purpose"],
        },
      },
    ];
  }

  async generateForm(args: any): Promise<CallToolResult> {
    const { schema, features = [] } = args;
    const {
      fields,
      layout = "single",
      validation = "onSubmit",
      submitText = "Submit",
      resetText = "Reset",
    } = schema;

    const hasTypeScript = features.includes("typescript");
    const hasValidation = features.includes("validation");
    const hasLoadingStates = features.includes("loading-states");

    const formCode = this.generateFormComponent(
      fields,
      layout,
      validation,
      hasTypeScript,
      hasValidation,
      hasLoadingStates,
      submitText,
      resetText
    );
    const validationCode = hasValidation
      ? this.generateValidationLogic(fields, hasTypeScript)
      : "";
    const typeDefinitions = hasTypeScript
      ? this.generateTypeDefinitions(fields)
      : "";

    return {
      content: [
        {
          type: "text",
          text: `# Generated Form Component

## Form Component
\`\`\`${hasTypeScript ? "tsx" : "jsx"}
${formCode}
\`\`\`

${
  hasValidation
    ? `## Validation Schema
\`\`\`${hasTypeScript ? "typescript" : "javascript"}
${validationCode}
\`\`\``
    : ""
}

${
  hasTypeScript
    ? `## Type Definitions
\`\`\`typescript
${typeDefinitions}
\`\`\``
    : ""
}

## Features Included
${this.generateFeaturesList(features, hasValidation, hasLoadingStates)}

## Usage Example
\`\`\`${hasTypeScript ? "tsx" : "jsx"}
function App() {
  return (
    <div className="max-w-md mx-auto p-6">
      <MyForm />
    </div>
  );
}
\`\`\`
`,
        },
      ],
    };
  }

  async validateFormSchema(args: any): Promise<CallToolResult> {
    const { schema } = args;
    const errors: string[] = [];
    const warnings: string[] = [];
    const suggestions: string[] = [];

    // Validate schema structure
    if (!schema.fields || !Array.isArray(schema.fields)) {
      errors.push("Schema must include a 'fields' array");
    }

    if (schema.fields) {
      // Validate individual fields
      schema.fields.forEach((field: any, index: number) => {
        if (!field.name) {
          errors.push(`Field ${index + 1}: Missing required 'name' property`);
        }
        if (!field.type) {
          errors.push(`Field ${index + 1}: Missing required 'type' property`);
        }
        if (!field.label) {
          warnings.push(
            `Field ${index + 1}: Missing 'label' for better accessibility`
          );
        }

        // Type-specific validations
        if (
          field.type === "select" &&
          (!field.options || field.options.length === 0)
        ) {
          errors.push(
            `Field ${index + 1}: Select field requires 'options' array`
          );
        }
        if (field.type === "email" && !field.validation?.pattern) {
          suggestions.push(
            `Field ${index + 1}: Consider adding email validation pattern`
          );
        }
        if (
          field.type === "password" &&
          (!field.validation?.minLength || field.validation.minLength < 8)
        ) {
          warnings.push(
            `Field ${index + 1}: Password should have minimum 8 characters`
          );
        }
      });

      // Form-level suggestions
      const hasPasswordField = schema.fields.some(
        (f: any) => f.type === "password"
      );
      const hasConfirmPassword = schema.fields.some((f: any) =>
        f.name.includes("confirm")
      );

      if (hasPasswordField && !hasConfirmPassword) {
        suggestions.push(
          "Consider adding password confirmation field for better UX"
        );
      }

      const requiredFields = schema.fields.filter((f: any) => f.required);
      if (requiredFields.length === 0) {
        warnings.push(
          "No required fields found - consider marking essential fields as required"
        );
      }
    }

    return {
      content: [
        {
          type: "text",
          text: `# Form Schema Validation Results

## Status: ${errors.length === 0 ? "✅ Valid" : "❌ Invalid"}

${
  errors.length > 0
    ? `## Errors (${errors.length})
${errors.map((error) => `- ❌ ${error}`).join("\n")}`
    : ""
}

${
  warnings.length > 0
    ? `## Warnings (${warnings.length})
${warnings.map((warning) => `- ⚠️ ${warning}`).join("\n")}`
    : ""
}

${
  suggestions.length > 0
    ? `## Suggestions (${suggestions.length})
${suggestions.map((suggestion) => `- 💡 ${suggestion}`).join("\n")}`
    : ""
}

## Summary
- Total fields: ${schema.fields?.length || 0}
- Required fields: ${schema.fields?.filter((f: any) => f.required).length || 0}
- Layout: ${schema.layout || "single"}
- Validation: ${schema.validation || "onSubmit"}
`,
        },
      ],
    };
  }

  async getFormFieldSuggestions(args: any): Promise<CallToolResult> {
    const { purpose, industry = "general" } = args;

    const suggestions = this.getFieldSuggestionsForPurpose(purpose, industry);

    return {
      content: [
        {
          type: "text",
          text: `# Form Field Suggestions for ${
            purpose.charAt(0).toUpperCase() + purpose.slice(1)
          } Form

## Recommended Fields
${suggestions.essential
  .map(
    (field: any) => `### ${field.label}
- **Type:** ${field.type}
- **Required:** ${field.required ? "Yes" : "No"}
- **Validation:** ${field.validation || "None"}
- **Purpose:** ${field.purpose}
`
  )
  .join("\n")}

## Optional Fields
${suggestions.optional
  .map(
    (field: any) => `### ${field.label}
- **Type:** ${field.type}
- **Purpose:** ${field.purpose}
`
  )
  .join("\n")}

## Industry-Specific Fields (${industry})
${
  suggestions.industrySpecific
    ?.map(
      (field: any) => `### ${field.label}
- **Type:** ${field.type}
- **Purpose:** ${field.purpose}
`
    )
    .join("\n") || "No industry-specific fields for this category"
}

## Generated Schema
\`\`\`json
{
  "fields": [
${suggestions.essential
  .concat(suggestions.optional)
  .map(
    (field: any) => `    {
      "name": "${field.name}",
      "type": "${field.type}",
      "label": "${field.label}",
      "required": ${field.required || false},
      "placeholder": "${field.placeholder || ""}"${
      field.options
        ? `,
      "options": ${JSON.stringify(field.options)}`
        : ""
    }
    }`
  )
  .join(",\n")}
  ],
  "layout": "${suggestions.recommendedLayout}",
  "validation": "onSubmit"
}
\`\`\`
`,
        },
      ],
    };
  }

  private generateFormComponent(
    fields: FormField[],
    layout: string,
    validation: string,
    hasTypeScript: boolean,
    hasValidation: boolean,
    hasLoadingStates: boolean,
    submitText: string,
    resetText: string
  ): string {
    const imports = [
      "import React, { useState } from 'react';",
      "import { FormControl, Input, Select, Checkbox, Radio, Button, Alert, FormLayout } from '@akitectio/aki-ui';",
    ];

    if (hasValidation) {
      imports.push("import { z } from 'zod';");
    }

    const stateType = hasTypeScript ? `: FormData` : "";
    const initialState = fields.reduce((acc, field) => {
      acc[field.name] = field.type === "checkbox" ? false : "";
      return acc;
    }, {} as any);

    const formFields = fields
      .map((field) => this.generateFieldComponent(field))
      .join("\n    ");

    return `${imports.join("\n")}

${hasTypeScript ? this.generateTypeDefinitions(fields) : ""}

function MyForm() {
  const [formData, setFormData] = useState${stateType}(${JSON.stringify(
      initialState,
      null,
      2
    )});
  const [errors, setErrors] = useState<Record<string, string>>({});
  ${
    hasLoadingStates ? "const [isLoading, setIsLoading] = useState(false);" : ""
  }

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    ${validation === "live" ? "validateField(name, value);" : ""}
  };

  ${hasValidation ? this.generateValidationFunction(fields, validation) : ""}

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    ${
      hasValidation
        ? `
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }`
        : ""
    }
    
    ${hasLoadingStates ? "setIsLoading(true);" : ""}
    
    try {
      // Handle form submission
      console.log('Form data:', formData);
      ${hasLoadingStates ? "setIsLoading(false);" : ""}
    } catch (error) {
      console.error('Form submission error:', error);
      ${hasLoadingStates ? "setIsLoading(false);" : ""}
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      ${
        layout === "double" || layout === "grid"
          ? `<FormLayout columns={${layout === "grid" ? "3" : "2"}}>`
          : ""
      }
        ${formFields}
      ${layout === "double" || layout === "grid" ? "</FormLayout>" : ""}
      
      <div className="flex gap-4">
        <Button 
          type="submit" 
          variant="primary"
          ${hasLoadingStates ? "loading={isLoading}" : ""}
        >
          ${submitText}
        </Button>
        <Button 
          type="button" 
          variant="secondary"
          onClick={() => setFormData(${JSON.stringify(initialState)})}
        >
          ${resetText}
        </Button>
      </div>
    </form>
  );
}

export default MyForm;`;
  }

  private generateFieldComponent(field: FormField): string {
    const errorProp = `error={errors.${field.name}}`;

    switch (field.type) {
      case "select":
        return `<FormControl label="${field.label}" required={${
          field.required
        }} ${errorProp}>
        <Select
          options={${JSON.stringify(field.options || [])}}
          value={formData.${field.name}}
          onChange={(value) => handleInputChange('${field.name}', value)}
          placeholder="${
            field.placeholder || `Select ${field.label.toLowerCase()}`
          }"
        />
      </FormControl>`;

      case "checkbox":
        return `<Checkbox
        checked={formData.${field.name}}
        onChange={(checked) => handleInputChange('${field.name}', checked)}
      >
        ${field.label}
      </Checkbox>`;

      case "textarea":
        return `<FormControl label="${field.label}" required={${
          field.required
        }} ${errorProp}>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          value={formData.${field.name}}
          onChange={(e) => handleInputChange('${field.name}', e.target.value)}
          placeholder="${field.placeholder || ""}"
        />
      </FormControl>`;

      default:
        return `<FormControl label="${field.label}" required={${
          field.required
        }} ${errorProp}>
        <Input
          type="${field.type}"
          value={formData.${field.name}}
          onChange={(e) => handleInputChange('${field.name}', e.target.value)}
          placeholder="${field.placeholder || ""}"
        />
      </FormControl>`;
    }
  }

  private generateValidationFunction(
    fields: FormField[],
    validation: string
  ): string {
    const validationRules = fields
      .map((field) => {
        const rules = [];

        if (field.required) {
          rules.push(
            `if (!formData.${field.name}) newErrors.${field.name} = '${field.label} is required';`
          );
        }

        if (field.type === "email") {
          rules.push(
            `if (formData.${field.name} && !/\\S+@\\S+\\.\\S+/.test(formData.${field.name})) newErrors.${field.name} = 'Invalid email format';`
          );
        }

        if (field.validation?.minLength) {
          rules.push(
            `if (formData.${field.name} && formData.${field.name}.length < ${field.validation.minLength}) newErrors.${field.name} = 'Minimum ${field.validation.minLength} characters required';`
          );
        }

        return rules.join("\n    ");
      })
      .filter(Boolean)
      .join("\n    ");

    return `
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    ${validationRules}
    
    return newErrors;
  };

  ${
    validation === "live"
      ? `
  const validateField = (name: string, value: any) => {
    const fieldErrors = { ...errors };
    
    // Field-specific validation logic here
    
    setErrors(fieldErrors);
  };`
      : ""
  }`;
  }

  private generateValidationLogic(
    fields: FormField[],
    hasTypeScript: boolean
  ): string {
    return `// Validation schema using Zod (optional)
const formSchema = z.object({
${fields
  .map((field) => {
    let zodType = "z.string()";

    if (field.type === "email") {
      zodType = 'z.string().email("Invalid email format")';
    } else if (field.type === "number") {
      zodType = "z.number()";
    } else if (field.type === "checkbox") {
      zodType = "z.boolean()";
    }

    if (field.required && field.type !== "checkbox") {
      zodType += '.min(1, "This field is required")';
    }

    if (field.validation?.minLength) {
      zodType += `.min(${field.validation.minLength}, "Minimum ${field.validation.minLength} characters required")`;
    }

    if (field.validation?.maxLength) {
      zodType += `.max(${field.validation.maxLength}, "Maximum ${field.validation.maxLength} characters allowed")`;
    }

    return `  ${field.name}: ${zodType}`;
  })
  .join(",\n")}
});`;
  }

  private generateTypeDefinitions(fields: FormField[]): string {
    const fieldTypes = fields
      .map((field) => {
        const type = field.type === "checkbox" ? "boolean" : "string";
        return `  ${field.name}: ${type};`;
      })
      .join("\n");

    return `interface FormData {
${fieldTypes}
}
`;
  }

  private generateFeaturesList(
    features: string[],
    hasValidation: boolean,
    hasLoadingStates: boolean
  ): string {
    const includedFeatures = [
      "✅ Responsive form layout",
      "✅ Accessible form controls",
      "✅ Proper form state management",
    ];

    if (hasValidation) {
      includedFeatures.push("✅ Form validation with error messages");
    }

    if (hasLoadingStates) {
      includedFeatures.push("✅ Loading states for submission");
    }

    if (features.includes("typescript")) {
      includedFeatures.push("✅ TypeScript support with type definitions");
    }

    return includedFeatures.join("\n");
  }

  private getFieldSuggestionsForPurpose(purpose: string, industry: string) {
    const suggestions: any = {
      essential: [],
      optional: [],
      industrySpecific: [],
      recommendedLayout: "single",
    };

    switch (purpose) {
      case "registration":
        suggestions.essential = [
          {
            name: "firstName",
            type: "text",
            label: "First Name",
            required: true,
            placeholder: "Enter your first name",
            purpose: "User identification",
          },
          {
            name: "lastName",
            type: "text",
            label: "Last Name",
            required: true,
            placeholder: "Enter your last name",
            purpose: "User identification",
          },
          {
            name: "email",
            type: "email",
            label: "Email Address",
            required: true,
            placeholder: "Enter your email",
            validation: "Email format",
            purpose: "Account login and communication",
          },
          {
            name: "password",
            type: "password",
            label: "Password",
            required: true,
            validation: "Minimum 8 characters",
            purpose: "Account security",
          },
          {
            name: "confirmPassword",
            type: "password",
            label: "Confirm Password",
            required: true,
            purpose: "Password verification",
          },
        ];
        suggestions.optional = [
          {
            name: "phone",
            type: "text",
            label: "Phone Number",
            purpose: "Contact and verification",
          },
          {
            name: "dateOfBirth",
            type: "date",
            label: "Date of Birth",
            purpose: "Age verification",
          },
          {
            name: "terms",
            type: "checkbox",
            label: "I agree to the Terms of Service",
            purpose: "Legal compliance",
          },
        ];
        suggestions.recommendedLayout = "double";
        break;

      case "login":
        suggestions.essential = [
          {
            name: "email",
            type: "email",
            label: "Email Address",
            required: true,
            placeholder: "Enter your email",
            purpose: "User identification",
          },
          {
            name: "password",
            type: "password",
            label: "Password",
            required: true,
            placeholder: "Enter your password",
            purpose: "Authentication",
          },
        ];
        suggestions.optional = [
          {
            name: "rememberMe",
            type: "checkbox",
            label: "Remember me",
            purpose: "Persistent login",
          },
        ];
        break;

      case "contact":
        suggestions.essential = [
          {
            name: "name",
            type: "text",
            label: "Full Name",
            required: true,
            placeholder: "Enter your name",
            purpose: "Identification",
          },
          {
            name: "email",
            type: "email",
            label: "Email Address",
            required: true,
            placeholder: "Enter your email",
            purpose: "Response contact",
          },
          {
            name: "subject",
            type: "text",
            label: "Subject",
            required: true,
            placeholder: "What is this about?",
            purpose: "Message categorization",
          },
          {
            name: "message",
            type: "textarea",
            label: "Message",
            required: true,
            placeholder: "Enter your message",
            purpose: "Main communication",
          },
        ];
        suggestions.optional = [
          {
            name: "phone",
            type: "text",
            label: "Phone Number",
            purpose: "Alternative contact method",
          },
          {
            name: "company",
            type: "text",
            label: "Company",
            purpose: "Business context",
          },
          {
            name: "priority",
            type: "select",
            label: "Priority",
            options: [
              { value: "low", label: "Low" },
              { value: "medium", label: "Medium" },
              { value: "high", label: "High" },
            ],
            purpose: "Request prioritization",
          },
        ];
        break;

      case "checkout":
        suggestions.essential = [
          {
            name: "firstName",
            type: "text",
            label: "First Name",
            required: true,
            purpose: "Billing information",
          },
          {
            name: "lastName",
            type: "text",
            label: "Last Name",
            required: true,
            purpose: "Billing information",
          },
          {
            name: "email",
            type: "email",
            label: "Email Address",
            required: true,
            purpose: "Order confirmation",
          },
          {
            name: "address",
            type: "text",
            label: "Street Address",
            required: true,
            purpose: "Shipping location",
          },
          {
            name: "city",
            type: "text",
            label: "City",
            required: true,
            purpose: "Shipping location",
          },
          {
            name: "zipCode",
            type: "text",
            label: "ZIP Code",
            required: true,
            purpose: "Shipping location",
          },
          {
            name: "country",
            type: "select",
            label: "Country",
            required: true,
            purpose: "Shipping location",
          },
        ];
        suggestions.optional = [
          {
            name: "phone",
            type: "text",
            label: "Phone Number",
            purpose: "Delivery contact",
          },
          {
            name: "company",
            type: "text",
            label: "Company",
            purpose: "Business orders",
          },
          {
            name: "specialInstructions",
            type: "textarea",
            label: "Special Instructions",
            purpose: "Delivery notes",
          },
        ];
        suggestions.recommendedLayout = "grid";
        break;

      default:
        suggestions.essential = [
          {
            name: "name",
            type: "text",
            label: "Name",
            required: true,
            purpose: "User identification",
          },
          {
            name: "email",
            type: "email",
            label: "Email",
            required: true,
            purpose: "Contact information",
          },
        ];
    }

    // Add industry-specific fields
    if (industry === "healthcare") {
      suggestions.industrySpecific = [
        {
          name: "dateOfBirth",
          type: "date",
          label: "Date of Birth",
          purpose: "Medical records",
        },
        {
          name: "insurance",
          type: "text",
          label: "Insurance Provider",
          purpose: "Billing information",
        },
        {
          name: "emergencyContact",
          type: "text",
          label: "Emergency Contact",
          purpose: "Safety requirement",
        },
      ];
    } else if (industry === "finance") {
      suggestions.industrySpecific = [
        {
          name: "ssn",
          type: "text",
          label: "Social Security Number",
          purpose: "Identity verification",
        },
        {
          name: "income",
          type: "number",
          label: "Annual Income",
          purpose: "Credit assessment",
        },
        {
          name: "employmentStatus",
          type: "select",
          label: "Employment Status",
          options: [
            { value: "employed", label: "Employed" },
            { value: "self-employed", label: "Self-employed" },
            { value: "unemployed", label: "Unemployed" },
          ],
          purpose: "Financial assessment",
        },
      ];
    }

    return suggestions;
  }
}
