'use client';

// This file imports components from Aki UI and re-exports them with the 'use client' directive
// to make them work properly in Next.js App Router

// Import directly from the main package (which should work since we have the library built)
export {
    // Layout & Display
    Card,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Drawer,
    Tabs,
    Tab,
    Divider,

    // Data Display
    DataTable,
    Badge,
    Avatar,
    Spinner,

    // Form Controls
    Button,
    Input,
    Select,
    Checkbox,
    Switch,
    Slider,

    // Input Groups
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    FloatingLabel,

    // Feedback
    Alert,
    ToastProvider,

    // Hooks
    useToast
} from '@akitectio/aki-ui';
