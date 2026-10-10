import React from "react";
import CompanyDashboard from "@/components/company/CompanyDashboard";

export const metadata = {
  title: "Company Dashboard | Trabino",
  description: "Company Dashboard - View active jobs, top candidate matches, and profile strength.",
};

export default function CompanyDashboardPage() {
  return <CompanyDashboard />;
}
