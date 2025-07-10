// Add this file to your project to resolve any TypeScript import issues
// File: aki-ui.d.ts

declare module "@akitectio/aki-ui";

declare module "@akitectio/aki-ui/css";

declare module "@akitectio/aki-ui/style.css";

declare module "@akitectio/aki-ui/dist/index.css";

// Universal framework support - no adapters needed!
// All components work directly from main import

// Optional: Angular Elements support (if using React wrapper in Angular)
declare namespace JSX {
  interface IntrinsicElements {
    "aki-badge": any;
    "aki-button": any;
    "aki-card": any;
    "aki-input": any;
    "aki-select": any;
    "aki-checkbox": any;
    "aki-modal": any;
    "aki-toast": any;
  }
}
