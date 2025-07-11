// Export Typography component
export { default } from "./Typography";
export { Typography } from "./Typography";
export type { TypographyProps } from "./Typography";

// Export pre-configured typography variants
export {
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
} from "./TypographyVariants";
export type { HeadingProps, LinkProps } from "./TypographyVariants";

// Export typography theme utilities
export {
  typographyTheme,
  typographyScale,
  semanticTypography,
  a11yTypography,
  responsiveTypography,
} from "./TypographyTheme";
