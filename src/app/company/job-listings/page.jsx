import React from "react";
import JobListingsView from "@/components/company/JobListingsView";

export const metadata = {
  title: "Job Listings | Trabino Company Portal",
  description: "Manage, edit, and track your active, paused, and closed job listings.",
};

export default function JobListingsPage() {
  return <JobListingsView />;
}
