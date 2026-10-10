import React from "react";
import CompanySettingsView from "@/components/company/CompanySettingsView";

export const metadata = {
  title: "Settings | Trabino Company Portal",
  description: "Manage company profile, notification preferences, and security settings.",
};

export default function SettingsPage() {
  return <CompanySettingsView />;
}
