// HTMX Components Registry for Aki UI
import { 
  Button, 
  Card, 
  Input, 
  Badge, 
  Alert,
  Avatar,
  Breadcrumb
} from '../../components';
import { registerAkiComponent } from './index';

/**
 * Pre-configured Aki UI components for HTMX usage
 */
export function registerAllAkiComponents() {
  // Register common Aki UI components as Web Components
  registerAkiComponent('aki-button', Button);
  registerAkiComponent('aki-card', Card);
  registerAkiComponent('aki-input', Input);
  registerAkiComponent('aki-badge', Badge);
  registerAkiComponent('aki-alert', Alert);
  registerAkiComponent('aki-avatar', Avatar);
  registerAkiComponent('aki-breadcrumb', Breadcrumb);
}

/**
 * Quick setup function for HTMX projects
 */
export function setupAkiUIForHTMX() {
  // Register all components
  registerAllAkiComponents();
  
  // Initialize HTMX event handling
  if (typeof window !== 'undefined') {
    import('./index').then(({ htmxUtils }) => {
      htmxUtils.initEventHandling();
    });
  }

  console.log('🚀 Aki UI components registered for HTMX usage');
}

// Auto-setup when script is loaded
if (typeof window !== 'undefined' && document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupAkiUIForHTMX);
} else if (typeof window !== 'undefined') {
  setupAkiUIForHTMX();
}