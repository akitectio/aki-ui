// HTMX Web Components Adapter for Aki UI
import React from 'react';
import { createRoot } from 'react-dom/client';

/**
 * Converts Aki UI React components to Web Components for HTMX usage
 */
export class AkiWebComponentWrapper extends HTMLElement {
  protected root: any;
  protected component: React.ComponentType<any>;
  protected props: Record<string, any> = {};

  constructor(component: React.ComponentType<any>) {
    super();
    this.component = component;
    this.attachShadow({ mode: 'open' });
  }

  static observedAttributes = ['data-props'];

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    if (name === 'data-props' && newValue) {
      try {
        this.props = JSON.parse(newValue);
        this.render();
      } catch (e) {
        console.warn('Invalid props JSON:', newValue);
      }
    }
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
    }
  }

  protected render() {
    if (!this.shadowRoot) return;
    
    // Include Aki UI styles
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '/node_modules/@akitectio/aki-ui/dist/styles.css';
    
    const container = document.createElement('div');
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(container);

    // Extract props from attributes
    const attributes = this.getAttributeNames().reduce((acc, name) => {
      if (!name.startsWith('data-')) return acc;
      const propName = name.replace('data-', '').replace(/-(.)/g, (_, char) => char.toUpperCase());
      acc[propName] = this.getAttribute(name);
      return acc;
    }, {} as Record<string, any>);

    const finalProps = {
      ...this.props,
      ...attributes,
      children: this.textContent || undefined
    };

    this.root = createRoot(container);
    this.root.render(React.createElement(this.component, finalProps));
  }
}

/**
 * Register Aki UI component as Web Component for HTMX
 */
export function registerAkiComponent(
  tagName: string, 
  component: React.ComponentType<any>
) {
  const WebComponent = class extends AkiWebComponentWrapper {
    constructor() {
      super(component);
    }
  };
  
  if (!customElements.get(tagName)) {
    customElements.define(tagName, WebComponent);
  }
}

/**
 * API interface for AkiUI HTMX integration
 */
interface AkiUIAPI {
  render(component: React.ComponentType<any>, props?: Record<string, any>, container?: HTMLElement | string): any;
  createWebComponent(component: React.ComponentType<any>, tagName?: string): typeof HTMLElement;
  registerComponent(name: string, component: React.ComponentType<any>): typeof HTMLElement;
}

/**
 * Simple function-based API for easy React-like usage in HTMX projects
 */
export const AkiUI: AkiUIAPI = {
  /**
   * Render a component directly to a DOM element (React-like API)
   */
  render(component: React.ComponentType<any>, props: Record<string, any> = {}, container: HTMLElement | string) {
    const targetElement = typeof container === 'string' 
      ? document.querySelector(container) 
      : container;
    
    if (!targetElement) {
      console.warn('Container element not found:', container);
      return null;
    }

    const root = createRoot(targetElement);
    root.render(React.createElement(component, props));
    return root;
  },

  /**
   * Create a Web Component from any React component (for HTML usage)
   */
  createWebComponent(component: React.ComponentType<any>, tagName?: string) {
    const WebComponent = class extends AkiWebComponentWrapper {
      constructor() {
        super(component);
      }
    };
    
    if (tagName && !customElements.get(tagName)) {
      customElements.define(tagName, WebComponent);
    }
    
    return WebComponent;
  },

  /**
   * Quick component registration for common use cases
   */
  registerComponent(name: string, component: React.ComponentType<any>) {
    const tagName = `aki-${name.toLowerCase()}`;
    return this.createWebComponent(component, tagName);
  }
};

/**
 * HTMX-specific utilities
 */
export const htmxUtils = {
  /**
   * Initialize HTMX event handling for Aki UI components
   */
  initEventHandling() {
    // Listen for HTMX events and update components accordingly
    document.addEventListener('htmx:afterSwap', (event: any) => {
      // Re-render any Aki UI components in the swapped content
      const akiComponents = event.detail.target.querySelectorAll('[class*="aki-"]');
      akiComponents.forEach((element: HTMLElement) => {
        if (element.shadowRoot) {
          // Trigger re-render
          element.dispatchEvent(new CustomEvent('aki:refresh'));
        }
      });
    });

    // Auto-initialize components after DOM mutations
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            // Auto-register any aki-* elements
            if (element.tagName?.toLowerCase().startsWith('aki-')) {
              element.dispatchEvent(new CustomEvent('aki:init'));
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  },

  /**
   * Helper to update component props via HTMX
   */
  updateProps(selector: string, newProps: Record<string, any>) {
    const element = document.querySelector(selector) as any;
    if (element && element.setAttribute) {
      element.setAttribute('data-props', JSON.stringify(newProps));
    }
  },

  /**
   * Batch render multiple components (useful for HTMX responses)
   */
  renderBatch(components: Array<{
    component: React.ComponentType<any>,
    props: Record<string, any>,
    selector: string
  }>) {
    components.forEach(({ component, props, selector }) => {
      AkiUI.render(component, props, selector);
    });
  }
};