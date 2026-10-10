import React from "react";
import ApplicationsView from "@/components/company/ApplicationsView";

export const metadata = {
  title: "Candidate Applications | Trabino Company Portal",
  description: "View and manage incoming candidate applications, matches, and interested profiles.",
};

export default function ApplicationsPage() {
  return <ApplicationsView />;
}
