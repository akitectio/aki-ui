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
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Tabs,
    Tab,
    Divider,
    Separator,

    // New Components
    Progress,
    Textarea,
    Toggle,
    Dialog,
    Calendar,
    Command,
    Table,

    // Navigation
    Breadcrumb,
    Navbar,
    VerticalNavbar,

    // Data Display
    DataTable,
    Badge,
    Avatar,
    Spinner,
    Skeleton,
    SkeletonContainer,
    Chip,

    // Form Controls
    Button,
    ButtonGroup,
    Input,
    Select,
    AsyncSelect,
    Checkbox,
    Radio,
    RadioGroup,
    Switch,
    Slider,

    // Input Groups
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    FloatingLabel,

    // Layout
    Grid,
    GridItem,
    SimpleGrid,
    Stack,
    HStack,
    VStack,
    Spacer,

    // Form Layout & Validation
    FormLayout,
    FormRow,
    FormColumn,
    FormSection,
    ValidationMessage,
    FormControl,

    // Interactive
    Dropdown,
    Accordion,
    Popover,
    Tooltip,
    Pagination,

    // Feedback
    Alert,
    ToastProvider,
    ToastContainer,

    // Typography
    Typography,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Body,
    SmallText,
    Caption,
    Subtitle,
    Overline,
    Link,
    Code,
    Pre,
    Blockquote,
    Label,
    ErrorText,
    HelperText,

    // Utilities
    breakpoints,
    useBreakpoint,
    useMediaQuery,
    getResponsiveClasses,
    isBreakpoint,
    Show,
    useScreenSize,

    // Hooks
    useToast,
    useToastAPI
} from '@akitectio/aki-ui';
