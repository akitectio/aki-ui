// Simple API for HTMX integration - no setup required
import { AkiUI, htmxUtils } from './index';
import { 
  Button, 
  Card, 
  Input, 
  Badge, 
  Alert,
  Avatar,
  Breadcrumb,
  DataTable,
  Modal,
  Dropdown
} from '../../components';

/**
 * Pre-built functions for common Aki UI components
 * Can be used directly in HTMX projects without setup
 */
export const aki = {
  // Direct rendering functions (React-like API)
  renderButton: (props: any, container: string | HTMLElement) => 
    AkiUI.render(Button, props, container),
  
  renderCard: (props: any, container: string | HTMLElement) => 
    AkiUI.render(Card, props, container),
  
  renderInput: (props: any, container: string | HTMLElement) => 
    AkiUI.render(Input, props, container),
  
  renderBadge: (props: any, container: string | HTMLElement) => 
    AkiUI.render(Badge, props, container),
  
  renderAlert: (props: any, container: string | HTMLElement) => 
    AkiUI.render(Alert, props, container),
  
  renderAvatar: (props: any, container: string | HTMLElement) => 
    AkiUI.render(Avatar, props, container),
  
  renderBreadcrumb: (props: any, container: string | HTMLElement) => 
    AkiUI.render(Breadcrumb, props, container),
  
  renderDataTable: (props: any, container: string | HTMLElement) => 
    AkiUI.render(DataTable, props, container),
  
  renderModal: (props: any, container: string | HTMLElement) => 
    AkiUI.render(Modal, props, container),
  
  renderDropdown: (props: any, container: string | HTMLElement) => 
    AkiUI.render(Dropdown, props, container),

  // Batch rendering for HTMX responses
  renderMultiple: htmxUtils.renderBatch,

  // Props updates
  updateProps: htmxUtils.updateProps,

  // Auto-setup for HTMX projects
  init() {
    // Register all components as web components
    AkiUI.registerComponent('button', Button);
    AkiUI.registerComponent('card', Card);
    AkiUI.registerComponent('input', Input);
    AkiUI.registerComponent('badge', Badge);
    AkiUI.registerComponent('alert', Alert);
    AkiUI.registerComponent('avatar', Avatar);
    AkiUI.registerComponent('breadcrumb', Breadcrumb);
    AkiUI.registerComponent('datatable', DataTable);
    AkiUI.registerComponent('modal', Modal);
    AkiUI.registerComponent('dropdown', Dropdown);

    // Initialize HTMX integration
    htmxUtils.initEventHandling();

    console.log('✨ Aki UI initialized for HTMX usage');
    return this;
  }
};

// Auto-initialize when script loads
if (typeof window !== 'undefined') {
  // Make aki available globally
  (window as any).aki = aki;
  
  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => aki.init());
  } else {
    aki.init();
  }
}

export default aki;