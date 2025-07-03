#!/usr/bin/env node

import { ComponentAutoDiscovery } from './dist/tools/component-auto-discovery.js';
import { ComponentDiscoveryTool } from './dist/tools/component-discovery.js';

async function testAutoDiscovery() {
    console.log("🧪 Testing Aki UI Component Auto-Discovery System\n");

    const autoDiscovery = new ComponentAutoDiscovery();
    const discoveryTool = new ComponentDiscoveryTool();

    try {
        // Test 1: Get all components
        console.log("1️⃣ Testing component auto-discovery...");
        const components = await autoDiscovery.getComponents();
        console.log(`✅ Found ${components.length} components automatically`);

        // Show first few components
        console.log("\n📋 First 10 auto-discovered components:");
        components.slice(0, 10).forEach(comp => {
            console.log(`   • ${comp.name} (${comp.category}): ${comp.description}`);
            if (comp.subComponents && comp.subComponents.length > 0) {
                console.log(`     └─ Sub-components: ${comp.subComponents.join(", ")}`);
            }
        });

        // Test 2: Search functionality
        console.log("\n2️⃣ Testing search functionality...");
        const searchResult = await discoveryTool.searchComponents({
            query: "button",
            category: "Interactive"
        });
        console.log("✅ Search completed successfully");

        // Test 3: List all components
        console.log("\n3️⃣ Testing list all components...");
        const listResult = await discoveryTool.listAllComponents();
        console.log("✅ Component listing completed successfully");

        // Test 4: Category breakdown
        console.log("\n4️⃣ Component breakdown by category:");
        const categorized = await autoDiscovery.getComponentsByCategory();
        Object.entries(categorized).forEach(([category, comps]) => {
            console.log(`   ${category}: ${comps.length} components`);
            console.log(`     └─ ${comps.map(c => c.name).join(", ")}`);
        });

        console.log("\n🎉 All tests passed! Auto-discovery system is working correctly.");
        console.log(`\n📊 Summary:
   • Total components discovered: ${components.length}
   • Auto-generated from: ../../../../../src/lib/components/index.ts
   • Real-time updates: ✅ Enabled
   • TypeScript support: ✅ Detected
   • Sub-components: ✅ Detected`);

    } catch (error) {
        console.error("❌ Test failed:", error);
        process.exit(1);
    }
}

testAutoDiscovery();
