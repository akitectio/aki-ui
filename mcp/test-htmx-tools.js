#!/usr/bin/env node

// Test script for HTMX integration tools
import { HTMXIntegrationTool } from './dist/tools/htmx-integration.js';

const htmxTool = new HTMXIntegrationTool();

async function testHTMXTools() {
    console.log('🧪 Testing HTMX Integration Tools...\n');

    // Test 1: Generate HTMX Adapter
    console.log('1️⃣ Testing generateAdapter...');
    try {
        const result1 = await htmxTool.generateAdapter({
            components: ['Button', 'Card'],
            outputFormat: 'both',
            includeStyles: true,
            minified: false
        });
        console.log('✅ generateAdapter - Success');
        console.log(`📝 Output length: ${result1.content[0].text.length} characters\n`);
    } catch (error) {
        console.log('❌ generateAdapter - Failed:', error.message);
    }

    // Test 2: Generate Integration Guide  
    console.log('2️⃣ Testing generateIntegration...');
    try {
        const result2 = await htmxTool.generateIntegration({
            projectType: 'django',
            components: ['Button', 'DataTable'],
            useCase: 'dashboard',
            includeExamples: true
        });
        console.log('✅ generateIntegration - Success');
        console.log(`📝 Output length: ${result2.content[0].text.length} characters\n`);
    } catch (error) {
        console.log('❌ generateIntegration - Failed:', error.message);
    }

    // Test 3: Generate Examples
    console.log('3️⃣ Testing generateExamples...');
    try {
        const result3 = await htmxTool.generateExamples({
            component: 'Button',
            scenario: 'dynamic-updates',
            backend: 'json'
        });
        console.log('✅ generateExamples - Success');
        console.log(`📝 Output length: ${result3.content[0].text.length} characters\n`);
    } catch (error) {
        console.log('❌ generateExamples - Failed:', error.message);
    }

    // Test 4: Optimize Bundle
    console.log('4️⃣ Testing optimizeBundle...');
    try {
        const result4 = await htmxTool.optimizeBundle({
            components: ['Button', 'Card', 'Input'],
            target: 'modern',
            treeshake: true,
            externalize: ['react']
        });
        console.log('✅ optimizeBundle - Success');
        console.log(`📝 Output length: ${result4.content[0].text.length} characters\n`);
    } catch (error) {
        console.log('❌ optimizeBundle - Failed:', error.message);
    }

    // Test 5: Get Tools List
    console.log('5️⃣ Testing getTools...');
    try {
        const tools = htmxTool.getTools();
        console.log(`✅ getTools - Success`);
        console.log(`🔧 Found ${tools.length} tools:`);
        tools.forEach(tool => {
            console.log(`   - ${tool.name}: ${tool.description}`);
        });
    } catch (error) {
        console.log('❌ getTools - Failed:', error.message);
    }

    console.log('\n🎉 HTMX Integration Tools test completed!');
}

testHTMXTools().catch(console.error);