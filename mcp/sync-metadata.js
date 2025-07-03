#!/usr/bin/env node

/**
 * Script to sync component metadata from Aki UI source to MCP server
 * This should be run during build process or when components change
 */

import { ComponentMetadataSync } from "./dist/tools/component-metadata-sync.js";

console.log("🔄 Syncing Aki UI component metadata...");

try {
    const sync = new ComponentMetadataSync();
    const result = sync.syncMetadata();

    if (result.success) {
        console.log(`✅ Successfully synced ${result.componentCount} components`);
        console.log(`📁 Metadata saved to: ${result.metadataPath}`);

        if (result.newComponents.length > 0) {
            console.log(`🆕 New components found: ${result.newComponents.join(", ")}`);
        }

        if (result.updatedComponents.length > 0) {
            console.log(`🔄 Updated components: ${result.updatedComponents.join(", ")}`);
        }
    } else {
        console.error("❌ Failed to sync metadata:", result.error);
        process.exit(1);
    }
} catch (error) {
    console.error("❌ Error syncing metadata:", error);
    process.exit(1);
}
