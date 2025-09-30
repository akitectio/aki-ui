# Aki UI HTMX Adapter

Easy integration of Aki UI components into HTMX/vanilla HTML projects.

## Quick Start

### Option 1: Using Script Tag (Recommended for HTMX)

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@akitectio/aki-ui/dist/styles.css">
    <script src="https://cdn.jsdelivr.net/npm/@akitectio/aki-ui/dist/htmx-adapter.js"></script>
</head>
<body>
    <!-- Use Web Components directly -->
    <aki-button data-variant="primary">Click me</aki-button>
    <aki-card data-title="Hello World">Card content</aki-card>
    
    <!-- Or render programmatically -->
    <div id="my-component"></div>
    
    <script>
        // Render using React-like API
        aki.renderButton({ 
            variant: 'primary', 
            onClick: () => alert('Clicked!') 
        }, '#my-component');
        
        // Update props dynamically (perfect for HTMX responses)
        aki.updateProps('aki-button', { 
            variant: 'secondary', 
            children: 'Updated!' 
        });
    </script>
</body>
</html>
```

### Option 2: Using ES Modules

```javascript
import aki from '@akitectio/aki-ui/adapters/htmx/simple';

// Initialize (if not auto-initialized)
aki.init();

// Render components
aki.renderButton({ variant: 'primary' }, '#button-container');
aki.renderCard({ title: 'My Card' }, '#card-container');

// Batch rendering (useful for HTMX responses)
aki.renderMultiple([
    { component: Button, props: { variant: 'primary' }, selector: '#btn1' },
    { component: Card, props: { title: 'Card 1' }, selector: '#card1' }
]);
```

## HTMX Integration Examples

### 1. Dynamic Component Updates

```html
<!-- HTMX triggers component updates -->
<div hx-get="/api/button-state" 
     hx-trigger="click" 
     hx-target="#dynamic-button">
    <aki-button id="dynamic-button" data-variant="primary">
        Load State
    </aki-button>
</div>

<!-- Server response updates the button -->
<script>
// In HTMX response
aki.updateProps('#dynamic-button', {
    variant: 'success',
    children: 'Loaded!',
    disabled: false
});
</script>
```

### 2. Form Integration

```html
<form hx-post="/api/submit" hx-target="#result">
    <aki-input data-placeholder="Enter name" name="name"></aki-input>
    <aki-button type="submit" data-variant="primary">Submit</aki-button>
</form>

<div id="result"></div>

<script>
// Handle form success in HTMX response
document.addEventListener('htmx:afterRequest', (event) => {
    if (event.detail.xhr.status === 200) {
        aki.renderAlert({
            type: 'success',
            children: 'Form submitted successfully!'
        }, '#result');
    }
});
</script>
```

### 3. DataTable with HTMX

```html
<div id="data-table" 
     hx-get="/api/table-data" 
     hx-trigger="load">
    Loading...
</div>

<script>
// Server returns JSON data, render with Aki UI
document.addEventListener('htmx:afterRequest', (event) => {
    const data = JSON.parse(event.detail.xhr.response);
    
    aki.renderDataTable({
        data: data.rows,
        columns: data.columns,
        pagination: true,
        sorting: true
    }, '#data-table');
});
</script>
```

## Available Components

All Aki UI components are available:

- `aki.renderButton()` / `<aki-button>`
- `aki.renderCard()` / `<aki-card>`
- `aki.renderInput()` / `<aki-input>`
- `aki.renderBadge()` / `<aki-badge>`
- `aki.renderAlert()` / `<aki-alert>`
- `aki.renderAvatar()` / `<aki-avatar>`
- `aki.renderBreadcrumb()` / `<aki-breadcrumb>`
- `aki.renderDataTable()` / `<aki-datatable>`
- `aki.renderModal()` / `<aki-modal>`
- `aki.renderDropdown()` / `<aki-dropdown>`

## API Reference

### `aki.renderComponent(props, container)`

Renders a component to a DOM element.

```javascript
aki.renderButton({
    variant: 'primary',
    size: 'lg',
    onClick: () => console.log('clicked')
}, '#my-container');
```

### `aki.updateProps(selector, newProps)`

Updates component props dynamically.

```javascript
aki.updateProps('#my-button', {
    variant: 'success',
    children: 'Updated!'
});
```

### `aki.renderMultiple(components)`

Batch render multiple components.

```javascript
aki.renderMultiple([
    { component: Button, props: { variant: 'primary' }, selector: '#btn1' },
    { component: Alert, props: { type: 'success' }, selector: '#alert1' }
]);
```

## Advanced Usage

### Custom Component Registration

```javascript
import { AkiUI } from '@akitectio/aki-ui/adapters/htmx';
import { MyCustomComponent } from './MyComponent';

// Register as web component
AkiUI.registerComponent('custom', MyCustomComponent);

// Now use in HTML
// <aki-custom data-prop1="value1"></aki-custom>
```

### Event Handling

```javascript
// Listen for component events
document.addEventListener('aki:init', (event) => {
    console.log('Component initialized:', event.target);
});

document.addEventListener('aki:refresh', (event) => {
    console.log('Component refreshed:', event.target);
});
```

## Build Your Own Bundle

```bash
# Build standalone bundle
cd src/lib/adapters/htmx
npx vite build --config vite.config.ts

# Output: dist/aki-ui-htmx.js (ready for CDN)
```

## Browser Support

- Modern browsers with Web Components support
- Polyfill available for older browsers
- Works with HTMX 1.8+ and 2.0+
