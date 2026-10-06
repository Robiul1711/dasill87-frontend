import React from "react";
import SignInFlow from "@/components/auth/AuthFlow/SignInFlow";

export const metadata = {
  title: "Sign In | Trabino",
  description: "Sign in to your Trabino account.",
};

const LoginPage = () => {
  return <SignInFlow />;
};

export default LoginPage;