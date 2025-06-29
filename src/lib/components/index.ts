/**
 * @akitectio/aki-ui components
 * A collection of React components for building user interfaces
 */

/**
 * Accordion - A collapsible content component for organizing information in limited space
 */
export { default as Accordion } from "./Accordion";
export type {
  AccordionProps,
  AccordionItemProps,
  AccordionHeaderProps,
  AccordionBodyProps,
} from "./Accordion";

/**
 * Alert - A component for displaying important messages or notifications
 */
export { default as Alert } from "./Alert";
export type { AlertProps } from "./Alert";

/**
 * Avatar - A component for displaying user profile images or initials
 */
export { default as Avatar } from "./Avatar";
export type { AvatarProps } from "./Avatar";

/**
 * Badge - A small count or status descriptor for UI elements
 */
export { default as Badge } from "./Badge";
export type { BadgeProps } from "./Badge";

/**
 * Breadcrumb - A navigation component showing the path to the current page
 */
export { default as Breadcrumb } from "./Breadcrumb";
export type { BreadcrumbProps, BreadcrumbItemProps } from "./Breadcrumb";

/**
 * Button - An interactive element that triggers an action or event
 */
export { default as Button } from "./Button";
export type { ButtonProps } from "./Button";

/**
 * ButtonGroup - A container for grouping related buttons
 */
export { default as ButtonGroup } from "./ButtonGroup";
export type { ButtonGroupProps } from "./ButtonGroup";

/**
 * Card - A flexible container for displaying content in a structured format
 */
export { default as Card } from "./Card";
export type { CardProps } from "./Card";

/**
 * Chatbot - A simple rule-based AI chatbot component
 */
export { default as Chatbot } from "./Chatbot";
export type { ChatbotProps, ChatMessage, ChatbotRule } from "./Chatbot";

/**
 * Dropdown - A toggleable menu for displaying a list of options
 */
export { default as Dropdown } from "./Dropdown";
export type {
  DropdownProps,
  DropdownToggleProps,
  DropdownMenuProps,
  DropdownItemProps,
} from "./Dropdown";

/**
 * FormControl - A component for creating accessible form inputs
 */
export { default as FormControl } from "./FormControl";
export type { FormControlProps } from "./FormControl";

/**
 * Modal - A dialog box/popup window that displays content over the current page
 */
export { default as Modal } from "./Modal";
export type {
  ModalProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
} from "./Modal";

/**
 * Navbar - A navigation component for website/app header with brand, links, and mobile toggle
 */
export { default as Navbar } from "./Navbar";
export type {
  NavbarProps,
  NavbarBrandProps,
  NavbarItemProps,
  NavbarCollapseProps,
} from "./Navbar";

/**
 * VerticalNavbar - A vertical sidebar navigation component for dashboards and admin panels
 */
export { default as VerticalNavbar } from "./VerticalNavbar";
export type {
  VerticalNavbarProps,
  VerticalNavbarHeaderProps,
  VerticalNavbarItemProps,
  VerticalNavbarGroupProps,
  VerticalNavbarFooterProps,
} from "./VerticalNavbar";

/**
 * Pagination - A component for navigating through multiple pages of content
 */
export { default as Pagination } from "./Pagination";
export type { PaginationProps } from "./Pagination";

/**
 * Switch - A toggle component for binary choices
 */
export { default as Switch } from "./Switch";
export type { SwitchProps } from "./Switch";

/**
 * Tooltip - A component for displaying additional information on hover
 */
export { default as Tooltip } from "./Tooltip";
export type { TooltipProps } from "./Tooltip";

/**
 * Slider - A component for selecting a value from a range
 */
export { default as Slider } from "./Slider";
export type { SliderProps } from "./Slider";

/**
 * Input - A component for text input with various states and appearances
 */
export { default as Input } from "./Input";
export type { InputProps, InputRef } from "./Input";

/**
 * InputGroup - A container for grouping input elements with addons and icons
 */
export {
  default as InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
} from "./InputGroup";
export type {
  InputGroupProps,
  InputAddonProps,
  InputElementProps,
} from "./InputGroup";

/**
 * FloatingLabel - An input component with floating label animation
 */
export { default as FloatingLabel } from "./FloatingLabel";
export type { FloatingLabelProps, FloatingLabelRef } from "./FloatingLabel";

/**
 * Breakpoints - Responsive breakpoint utilities and hooks
 */
export {
  breakpoints,
  useBreakpoint,
  useMediaQuery,
  getResponsiveClasses,
  isBreakpoint,
  Show,
  useScreenSize,
} from "./Breakpoints";
export type { Breakpoint, ShowProps } from "./Breakpoints";

/**
 * Grid - A responsive grid layout component system
 */
export { default as Grid, GridItem, SimpleGrid } from "./Grid";
export type { GridProps, GridItemProps, SimpleGridProps } from "./Grid";

/**
 * Stack - Layout components for organizing items in single dimension
 */
export { default as Stack, HStack, VStack, Spacer } from "./Stack";
export type { StackProps, HStackProps, VStackProps } from "./Stack";

/**
 * FormLayout - A component for organizing form elements with flexible layouts
 */
export {
  default as FormLayout,
  FormRow,
  FormColumn,
  FormSection,
} from "./FormLayout";
export type {
  FormLayoutProps,
  FormRowProps,
  FormColumnProps,
  FormSectionProps,
} from "./FormLayout";

/**
 * FormValidation - Components for form validation and error messaging
 */
export {
  default as ValidationMessage,
  FieldValidator,
  ValidationRules,
} from "./FormValidation";
export type {
  ValidationMessageProps,
  FieldValidatorProps,
  ValidationRule,
} from "./FormValidation";

/**
 * Checkbox - A component for binary choices
 */
export { default as Checkbox } from "./Checkbox";
export type { CheckboxProps, CheckboxRef } from "./Checkbox";

/**
 * Select - A component for selecting options from a dropdown list
 */
export { default as Select } from "./Select";
export type { SelectProps, SelectRef, SelectOption } from "./Select";

/**
 * AsyncSelect - A select component with async loading and multi-select capabilities
 */
export { default as AsyncSelect } from "./Select/AsyncSelect";
export type { AsyncSelectProps } from "./Select/AsyncSelect";

/**
 * Divider - A component for creating visual separation
 */
export { default as Divider } from "./Divider";
export type { DividerProps } from "./Divider";

/**
 * Chip - A component for displaying compact elements
 */
export { default as Chip } from "./Chip";
export type { ChipProps } from "./Chip";

/**
 * Radio - A component for selecting a single option from a group
 */
export { default as Radio, RadioGroup } from "./Radio";
export type { RadioProps, RadioRef, RadioGroupProps } from "./Radio";

/**
 * Drawer - A sliding panel component that appears from the edge of the screen
 */
export {
  default as Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "./Drawer";
export type {
  DrawerProps,
  DrawerRef,
  DrawerHeaderProps,
  DrawerBodyProps,
  DrawerFooterProps,
} from "./Drawer";

/**
 * Skeleton - A placeholder component for loading states
 */
export { default as Skeleton, SkeletonContainer } from "./Skeleton";
export type { SkeletonProps, SkeletonContainerProps } from "./Skeleton";

/**
 * Popover - A small floating content container triggered by click or hover
 */
export { default as Popover } from "./Popover";
export type {
  PopoverProps,
  PopoverRef,
  PopoverPlacement,
  PopoverTrigger,
} from "./Popover";

/**
 * Spinner - A loading indicator component
 */
export { default as Spinner } from "./Spinner";
export type { SpinnerProps } from "./Spinner";

/**
 * Tabs - A component for displaying tabbed content
 */
export { default as Tabs, Tab } from "./Tabs";
export type { TabsProps, TabProps } from "./Tabs";

/**
 * Toast - A notification component for displaying feedback
 */
export { ToastContainer, ToastProvider, useToast, useToastAPI } from "./Toast";
export type {
  ToastProps,
  ToastContainerProps,
  ToastContextValue,
  ToastPosition,
  ToastVariant,
} from "./Toast";

/**
 * DataTable - A versatile table component with sorting, filtering, and pagination
 */
export { DataTable } from "./DataTable";
export type {
  DataTableProps,
  Column as DataTableColumn,
  Sort as DataTableSort,
  SortDirection as DataTableSortDirection,
  Filter as DataTableFilter,
  PaginationState as DataTablePaginationState,
} from "./DataTable";

/**
 * Typography - A component for rendering text with consistent styling
 */
export {
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
  typographyTheme,
  typographyScale,
  semanticTypography,
  a11yTypography,
  responsiveTypography,
} from "./Typography";
export type {
  TypographyProps,
  HeadingProps,
  LinkTypographyProps,
} from "./Typography";
