import { LayoutTools } from './dist/tools/layout-tools.js';

async function testLayoutTools() {
  console.log('🧪 Testing Layout Tools...\n');
  
  const layoutTools = new LayoutTools();
  
  try {
    // Test 1: Get tools
    console.log('1️⃣ Testing getTools...');
    const tools = layoutTools.getTools();
    console.log('✅ getTools - Success');
    console.log(`🔧 Found ${tools.length} tools:`);
    tools.forEach(tool => {
      console.log(`   - ${tool.name}: ${tool.description.substring(0, 80)}...`);
    });
    console.log();
    
    // Test 2: Generate dashboard block
    console.log('2️⃣ Testing generateLayout with dashboard block...');
    const dashboardResult = await layoutTools.generateLayout({
      type: 'block',
      blockType: 'dashboard',
      responsive: true,
      features: ['sidebar', 'navigation']
    });
    console.log('✅ generateLayout (dashboard) - Success');
    console.log(`📝 Output length: ${dashboardResult.content[0].text.length} characters`);
    console.log();
    
    // Test 3: Generate stats block
    console.log('3️⃣ Testing generateLayout with stats block...');
    const statsResult = await layoutTools.generateLayout({
      type: 'block',
      blockType: 'stats',
      responsive: true,
      features: ['custom-stats']
    });
    console.log('✅ generateLayout (stats) - Success');
    console.log(`📝 Output length: ${statsResult.content[0].text.length} characters`);
    console.log();
    
    // Test 4: Generate hero block
    console.log('4️⃣ Testing generateLayout with hero block...');
    const heroResult = await layoutTools.generateLayout({
      type: 'block',
      blockType: 'hero',
      responsive: true,
      features: ['custom-buttons', 'large']
    });
    console.log('✅ generateLayout (hero) - Success');
    console.log(`📝 Output length: ${heroResult.content[0].text.length} characters`);
    console.log();
    
    // Test 5: Generate form block
    console.log('5️⃣ Testing generateLayout with form block...');
    const formResult = await layoutTools.generateLayout({
      type: 'block',
      blockType: 'form',
      responsive: true,
      features: ['validation', 'double']
    });
    console.log('✅ generateLayout (form) - Success');
    console.log(`📝 Output length: ${formResult.content[0].text.length} characters`);
    console.log();
    
    // Test 6: Grid calculator
    console.log('6️⃣ Testing grid calculator...');
    const gridResult = await layoutTools.calculateGrid({
      columns: 4,
      rows: 3,
      gap: '1rem',
      areas: ['header', 'main', 'sidebar', 'footer']
    });
    console.log('✅ calculateGrid - Success');
    console.log(`📝 Output length: ${gridResult.content[0].text.length} characters`);
    console.log();
    
    // Test 7: Responsive design check
    console.log('7️⃣ Testing responsive design validation...');
    const responsiveCode = `
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="text-sm md:text-base lg:text-lg">Content</div>
      </div>
    `;
    const responsiveResult = await layoutTools.validateResponsiveDesign({
      code: responsiveCode
    });
    console.log('✅ validateResponsiveDesign - Success');
    console.log(`📝 Output length: ${responsiveResult.content[0].text.length} characters`);
    console.log();
    
    console.log('🎉 Layout Tools test completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run the test
testLayoutTools();