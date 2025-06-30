// Auto-generated version info
// This file is automatically updated when package.json version changes
import packageJson from "../../package.json";

export const VERSION = packageJson.version;
export const PACKAGE_NAME = packageJson.name;
export const DESCRIPTION = packageJson.description;

export const getVersion = () => {
  return VERSION;
};

export const getVersionBadge = () => {
  return `v${VERSION}`;
};
