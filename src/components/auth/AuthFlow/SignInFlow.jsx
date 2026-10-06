"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import AuthHeader from "../JobSeekerFlow/AuthHeader";
import RegisterMethodSelect from "../JobSeekerFlow/RegisterMethodSelect";
import OtpModal from "../JobSeekerFlow/OtpModal";
import EmailSignInForm from "./EmailSignInForm";
import ResetPasswordForm from "./ResetPasswordForm";

export const SIGNIN_STEPS = {
  METHOD_SELECT: "METHOD_SELECT",
  EMAIL_SIGNIN: "EMAIL_SIGNIN",
  RESET_PASSWORD: "RESET_PASSWORD",
};

const SignInFlow = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(SIGNIN_STEPS.METHOD_SELECT);
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("demo@gmail.com");

  const handleSignInSuccess = (data) => {
    toast.success("Signed in successfully!");
    router.push("/dashboard");
  };

  const handleForgotPassword = () => {
    setIsOtpOpen(true);
  };

  const handleOtpVerifySuccess = () => {
    setIsOtpOpen(false);
    toast.success("OTP verified! Please set your new password.");
    setCurrentStep(SIGNIN_STEPS.RESET_PASSWORD);
  };

  const handlePasswordChangeSuccess = (data) => {
    toast.success("Password updated successfully! Please sign in.");
    setCurrentStep(SIGNIN_STEPS.EMAIL_SIGNIN);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <AuthHeader />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center py-4 sm:py-6">
        {currentStep === SIGNIN_STEPS.METHOD_SELECT && (
          <RegisterMethodSelect
            mode="signin"
            onSelectEmail={() => setCurrentStep(SIGNIN_STEPS.EMAIL_SIGNIN)}
            onToggleMode={() => router.push("/auth/register")}
          />
        )}

        {currentStep === SIGNIN_STEPS.EMAIL_SIGNIN && (
          <EmailSignInForm
            onBack={() => setCurrentStep(SIGNIN_STEPS.METHOD_SELECT)}
            onForgotPassword={handleForgotPassword}
            onSignInSuccess={handleSignInSuccess}
          />
        )}

        {currentStep === SIGNIN_STEPS.RESET_PASSWORD && (
          <ResetPasswordForm
            onBack={() => setCurrentStep(SIGNIN_STEPS.EMAIL_SIGNIN)}
            onPasswordChangeSuccess={handlePasswordChangeSuccess}
          />
        )}
      </main>

      {/* OTP Modal for Forgot Password flow */}
      <OtpModal
        isOpen={isOtpOpen}
        onClose={() => setIsOtpOpen(false)}
        onVerifySuccess={handleOtpVerifySuccess}
        email={userEmail}
      />

      <footer className="py-2" />
    </div>
  );
};

export default SignInFlow;
