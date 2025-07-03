#!/usr/bin/env node

/**
 * Test script to verify MCP component discovery functionality
 */

import { ComponentDiscoveryTool } from "./dist/tools/component-discovery.js";

async function testComponentDiscovery() {
    console.log("🧪 Testing MCP Component Discovery...");

    const discovery = new ComponentDiscoveryTool();

    try {
        // Test 1: List all components
        console.log("\n📋 Test 1: Listing all components");
        const allComponentsResult = await discovery.listAllComponents();
        console.log(`Result type: ${allComponentsResult.isError ? 'Error' : 'Success'}`);

        if (!allComponentsResult.isError && allComponentsResult.content) {
            const content = Array.isArray(allComponentsResult.content)
                ? allComponentsResult.content[0]
                : allComponentsResult.content;

            if (content.type === 'text') {
                console.log("✅ Components loaded successfully");
                const textContent = content.text;
                // Count components by looking for "**" markers
                const componentCount = (textContent.match(/\*\*\w+\*\*/g) || []).length;
                console.log(`Found ${componentCount} components in response`);
            }
        } else {
            console.log("❌ No components found or error occurred");
            console.log("Error:", allComponentsResult.content);
            return false;
        }

        // Test 2: Search components
        console.log("\n🔍 Test 2: Searching for 'button' components");
        const searchResult = await discovery.searchComponents({ query: "button" });
        console.log(`Search result type: ${searchResult.isError ? 'Error' : 'Success'}`);

        // Test 3: Get specific component details
        console.log("\n📖 Test 3: Getting Button component details");
        const buttonDetails = await discovery.getComponentDetails({ name: "Button" });
        console.log(`Button details result type: ${buttonDetails.isError ? 'Error' : 'Success'}`);

        // Test 4: Get all components data
        console.log("\n💡 Test 4: Getting all components data");
        const allData = await discovery.getAllComponentsData();
        console.log(`All data type: ${typeof allData}, length: ${allData?.length || 'N/A'}`);

        if (allData && allData.length > 0) {
            console.log(`✅ Found ${allData.length} components in getAllComponentsData`);
            const firstComponent = allData[0];
            console.log(`   First component: ${firstComponent.name} (${firstComponent.category})`);
        } else {
            console.log("⚠️ No data found in getAllComponentsData");
        }

        console.log("\n✅ All tests completed successfully!");
        return true;

    } catch (error) {
        console.error("❌ Test failed:", error);
        return false;
    }
}

// Run tests
testComponentDiscovery().then(success => {
    process.exit(success ? 0 : 1);
});
