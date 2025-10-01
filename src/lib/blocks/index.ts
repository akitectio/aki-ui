// Block components index
export { DashboardBlock } from './DashboardBlock';
export { StatsBlock } from './StatsBlock';
export { TableBlock } from './TableBlock';
export { HeroBlock } from './HeroBlock';
export { FormBlock } from './FormBlock';

// Block types for MCP tools
export type BlockType = 
  | 'dashboard'
  | 'stats' 
  | 'table'
  | 'hero'
  | 'form'
  | 'cards'
  | 'sidebar-nav'
  | 'pricing'
  | 'testimonials'
  | 'contact';