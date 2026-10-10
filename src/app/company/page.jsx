import React from "react";
import CompanyDashboard from "@/components/company/CompanyDashboard";

export const metadata = {
  title: "Company Dashboard | Trabino",
  description: "Manage your company job postings, matched candidates, and applications.",
};

export default function CompanyRootPage() {
  return <CompanyDashboard />;
}
