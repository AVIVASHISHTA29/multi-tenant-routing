export type TenantConfig = {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  content: string;
  logoUrl: string;
};

const tenants: Record<string, TenantConfig> = {
  tenant1: {
    name: "Tenant 1",
    primaryColor: "#3B82F6", // blue-500
    secondaryColor: "#EFF6FF", // blue-50
    content: "Welcome to Tenant 1",
    logoUrl: "/tenant1-logo.png",
  },
  tenant2: {
    name: "Tenant 2",
    primaryColor: "#10B981", // green-500
    secondaryColor: "#ECFDF5", // green-50
    content: "Welcome to Tenant 2",
    logoUrl: "/tenant2-logo.png",
  },
  default: {
    name: "Default Tenant",
    primaryColor: "#6B7280", // gray-500
    secondaryColor: "#F9FAFB", // gray-50
    content: "Welcome to our platform",
    logoUrl: "/default-logo.png",
  },
};

export function getTenantConfig(subdomain: string): TenantConfig {
  return tenants[subdomain] || tenants.default;
}
