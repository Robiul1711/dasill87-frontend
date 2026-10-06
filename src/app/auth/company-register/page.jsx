import React from "react";
import CompanyRegisterFlow from "@/components/auth/CompanyFlow/CompanyRegisterFlow";

export const metadata = {
  title: "Company Registration | Trabino",
  description: "Create your company account on Trabino to find top talent.",
};

const CompanyRegisterPage = () => {
  return <CompanyRegisterFlow />;
};

export default CompanyRegisterPage;
