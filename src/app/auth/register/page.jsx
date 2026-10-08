import React from "react";
import JobSeekerRegisterFlow from "@/components/auth/JobSeekerFlow/JobSeekerRegisterFlow";

export const metadata = {
  title: "Job Seeker Registration | Trabino",
  description: "Join Trabino and create your job seeker profile today.",
};

const RegisterPage = () => {
  return <JobSeekerRegisterFlow />;
};

export default RegisterPage;