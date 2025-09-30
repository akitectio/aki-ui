# Aki UI MCP Server - HTMX Integration

Enhanced Model Context Protocol server for Aki UI with HTMX integration capabilities.

## New HTMX Tools

The MCP server now includes specialized tools for HTMX integration:

### 🔧 Available HTMX Tools

#### `mcp_aki-ui_generate_htmx_adapter`
Generate HTMX adapter code for Aki UI components with web components and function API.

**Parameters:**
- `components` (optional): Array of component names to include
- `outputFormat`: "web-components", "function-api", or "both" 
- `includeStyles` (default: true): Include CSS styles
- `minified` (default: false): Generate minified output

**Example:**
```json
{
  "components": ["Button", "Card", "Input"],
  "outputFormat": "both",
  "includeStyles": true,
  "minified": false
}
```

#### `mcp_aki-ui_generate_htmx_integration`
Generate complete HTMX integration guide for specific project types.

**Parameters:**
- `projectType`: "vanilla", "django", "rails", "php", or "asp.net"
- `components` (required): Array of components to integrate
- `useCase`: "form", "table", "modal", "navigation", or "dashboard"
- `includeExamples` (default: true): Include usage examples

**Example:**
```json
{
  "projectType": "django",
  "components": ["Button", "Card", "DataTable"],
  "useCase": "dashboard",
  "includeExamples": true
}
```

#### `mcp_aki-ui_generate_htmx_examples`
Generate specific HTMX examples for components with different scenarios.

**Parameters:**
- `component` (required): Aki UI component name
- `scenario`: "basic", "form-handling", "dynamic-updates", "ajax-loading", or "real-time"
- `backend` (default: "json"): "json", "html-fragments", or "mixed"

**Example:**
```json
{
  "component": "DataTable",
  "scenario": "dynamic-updates",
  "backend": "json"
}
```

#### `mcp_aki-ui_optimize_htmx_bundle`
Generate optimized bundle configuration for HTMX projects.

**Parameters:**
- `components` (required): Array of components to include in bundle
- `target` (default: "modern"): "modern", "legacy", or "universal"
- `treeshake` (default: true): Enable tree shaking
- `externalize` (optional): Array of dependencies to externalize

**Example:**
```json
{
  "components": ["Button", "Card", "Input", "DataTable"],
  "target": "modern",
  "treeshake": true,
  "externalize": ["react", "react-dom"]
}
```

## Usage Examples

### Claude Desktop Configuration

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "aki-ui": {
      "command": "npx",
      "args": ["@akitectio/aki-ui-mcp-server"],
      "env": {}
    }
  }
}
```

### Example Prompts

1. **Generate HTMX Adapter:**
   ```
   Generate an HTMX adapter for Button and Card components with both web components and function API
   ```

2. **Django Integration:**
   ```
   Create a Django integration guide for using Aki UI DataTable and Form components in a dashboard
   ```

3. **Dynamic Examples:**
   ```
   Show me HTMX examples for Button component with real-time updates using JSON responses
   ```

4. **Bundle Optimization:**
   ```
   Optimize bundle for Button, Card, Input, and DataTable components targeting modern browsers with tree shaking
   ```

### Generated Output Examples

The tools generate complete integration code including:

- ✅ Web Components definitions
- ✅ Function-based APIs 
- ✅ HTMX event handling
- ✅ Framework-specific integration guides
- ✅ Build configurations
- ✅ Performance optimizations
- ✅ Usage examples and best practices

## Features

### 🎯 **Zero-Setup Integration**
- Drop-in script tags for quick integration
- Auto-registration of Web Components
- HTMX event handling out of the box

### 🔧 **Framework Support**
- Vanilla HTML/JavaScript
- Django + HTMX
- Ruby on Rails + HTMX  
- PHP + HTMX
- ASP.NET + HTMX

### ⚡ **Performance Optimized**
- Tree shaking configurations
- Bundle size optimization
- Modern/legacy browser targets
- CDN-ready builds

### 🎨 **Developer Experience**
- React-like function APIs
- Comprehensive documentation
- Complete code examples
- Error handling patterns

## Project Structure

```
mcp/
├── src/
│   ├── tools/
│   │   ├── htmx-integration.ts    # New HTMX tools
│   │   ├── component-discovery.ts
│   │   ├── code-generation.ts
│   │   └── ...
│   └── index.ts                   # Updated main server
└── package.json
```

## Integration with Existing Tools

The HTMX tools work alongside existing Aki UI MCP tools:

- **Component Discovery** → Find available components for HTMX
- **Code Generation** → Generate React components for HTMX wrapping  
- **Theme Management** → Apply themes to HTMX components
- **Validation** → Validate HTMX integration code
- **Testing** → Test HTMX components

## Build and Deploy

```bash
# Development
npm run dev

# Build
npm run build

# Publish
npm run prepublishOnly
```

## Contributing

1. Add new HTMX integration patterns to `htmx-integration.ts`
2. Update tool schemas and validation
3. Add comprehensive examples and documentation
4. Test with various HTMX scenarios

---

**Enhanced by HTMX Integration Tools** 🚀