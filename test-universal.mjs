// Simple test script to verify universal imports work
import { Button, Card, Badge } from './dist/aki-ui.es.js';

console.log('✅ Universal imports working!');
console.log('Button:', typeof Button);
console.log('Card:', typeof Card);  
console.log('Badge:', typeof Badge);

// Test framework detection
import { getFrameworkInfo } from './dist/aki-ui.es.js';
const frameworkInfo = getFrameworkInfo();
console.log('Framework info:', frameworkInfo);
