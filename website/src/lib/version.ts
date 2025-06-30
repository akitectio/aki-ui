// Import version from the main package.json
const packageVersion = process.env.NEXT_PUBLIC_VERSION || "0.1.19";

export const getVersion = () => {
  return packageVersion;
};

export const getVersionBadge = () => {
  return `v${packageVersion}`;
};
