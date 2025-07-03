# Component Auto-Discovery Workflow

This document explains how the Aki UI MCP server automatically discovers and maintains metadata for all components in the Aki UI library.

## Overview

The MCP server uses an automated system to discover and document all components from the Aki UI library. This ensures that the MCP server always has up-to-date information about available components, even when new components are added to the library.

## How It Works

### 1. Component Metadata Sync

The system works by parsing the main Aki UI components file (`src/lib/components/index.ts`) and extracting metadata for each component:

- **Component name and description** from comments
- **Component category** (Layout, Data Entry, Feedback, etc.)
- **Export type** (default, named, or both)
- **Sub-components** (e.g., ModalHeader, ModalBody)
- **TypeScript types** availability
- **Auto-generated props, examples, and accessibility info**

### 2. Metadata Generation

The sync process creates a JSON file (`component-metadata.json`) containing all component information that the MCP server can read at runtime.

### 3. Automatic Integration

The metadata sync is integrated into the Aki UI build process, so component metadata is automatically updated whenever:

- Aki UI is built (`npm run build`)
- Components are added or modified
- The library is prepared for publishing

## Scripts and Commands

### Manual Sync

```bash
# From Aki UI root directory
npm run mcp:sync-metadata

# Or from MCP directory
cd mcp
npm run build
node sync-metadata.js
```

### Automatic Sync

The sync happens automatically during:

- `npm run build` - Main Aki UI build process
- `npm run prepublishOnly` - Before publishing to npm

## Files and Structure

```
aki-ui/
├── src/lib/components/index.ts          # Source of truth for components
└── mcp/
    ├── src/tools/
    │   ├── component-metadata-sync.ts   # Sync logic
    │   ├── component-discovery.ts       # MCP runtime component access
    │   └── component-metadata.json      # Generated metadata (dev)
    ├── dist/tools/
    │   └── component-metadata.json      # Generated metadata (production)
    └── sync-metadata.js                 # Sync script
```

## Adding New Components

When you add a new component to Aki UI:

1. **Add to `src/lib/components/index.ts`** with proper comment format:

   ```typescript
   /**
    * NewComponent - Description of what the component does
    */
   export { default as NewComponent } from "./NewComponent";
   export type { NewComponentProps } from "./NewComponent";
   ```

2. **Run build or sync**: The component will be automatically discovered and added to MCP metadata:

   ```bash
   npm run build  # or npm run mcp:sync-metadata
   ```

3. **MCP tools updated**: All MCP tools (`search_components`, `get_component_details`, etc.) will immediately have access to the new component.

## Comment Format

The sync process expects this comment format in `index.ts`:

```typescript
/**
 * ComponentName - Brief description of the component's purpose
 */
export { default as ComponentName } from "./ComponentName";
export type { ComponentNameProps } from "./ComponentName";
```

## Component Categories

Components are automatically categorized based on their name and description:

- **Layout**: Grid, Stack, Container, Breakpoints
- **Navigation**: Navbar, Breadcrumb, Pagination, Tabs
- **Data Entry**: Input, Select, Checkbox, Form controls
- **Feedback**: Alert, Modal, Toast, Loading states
- **Interactive**: Button, Dropdown, Chatbot
- **Data Display**: Card, DataTable, Typography (default)

## Troubleshooting

### No components found

- Check that `src/lib/components/index.ts` exists and has the correct comment format
- Ensure the MCP build process completed successfully
- Run `npm run mcp:sync-metadata` manually

### Component not showing in MCP

- Verify the component comment follows the expected format
- Check that the component is properly exported in `index.ts`
- Run the sync process: `npm run mcp:sync-metadata`

### Metadata file missing

- The metadata file is auto-generated and shouldn't be committed to git
- Run `npm run mcp:sync-metadata` to regenerate
- Check that the MCP server has built successfully

## Development vs Production

- **Development**: Metadata is synced during build and stored in both `src/` and `dist/`
- **Production**: MCP server reads from the metadata file included in the package
- **Distribution**: The metadata file is bundled with the MCP server package

This system ensures that MCP and Aki UI can remain as separate packages while keeping component information synchronized automatically.
