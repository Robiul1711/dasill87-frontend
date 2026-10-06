"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import AuthHeader from "../JobSeekerFlow/AuthHeader";
import OtpModal from "../JobSeekerFlow/OtpModal";
import AccountTypeStep from "./AccountTypeStep";
import CompanyCreateAccountStep from "./CompanyCreateAccountStep";
import EmailVerifiedModal from "./EmailVerifiedModal";
import CompanyProfileStep from "./CompanyProfileStep";
import CompanyPreferencesStep from "./CompanyPreferencesStep";
import CompanyPlanStep from "./CompanyPlanStep";
import CompanySuccessModal from "./CompanySuccessModal";

export const COMPANY_STEPS = {
  ACCOUNT_TYPE: "ACCOUNT_TYPE",
  CREATE_ACCOUNT: "CREATE_ACCOUNT",
  COMPANY_PROFILE: "COMPANY_PROFILE",
  COMPANY_PREFERENCES: "COMPANY_PREFERENCES",
  COMPANY_PLAN: "COMPANY_PLAN",
};

const CompanyRegisterFlow = () => {
  const [currentStep, setCurrentStep] = useState(COMPANY_STEPS.ACCOUNT_TYPE);
  const [accountType, setAccountType] = useState("standard");
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [isEmailVerifiedOpen, setIsEmailVerifiedOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    accountType: "standard",
    account: {
      companyName: "Softvence Agency",
      email: "demo@gmail.com",
      password: "",
      confirmPassword: "",
    },
    profile: {
      logo: null,
      banner: null,
      companyName: "Softvence Agency",
      details: "",
      address: "",
      country: "",
      phoneCountryCode: "+001",
      phone: "",
      contactEmail: "demo@gmail.com",
      employeeRange: "",
      website: "",
    },
    preferences: {
      industries: ["Technology"],
      jobCategories: [],
      skills: ["Problem Solving"],
      regions: [],
    },
    plan: "pro",
  });

  // Step 1: Account Type Selected
  const handleAccountTypeContinue = (selectedType) => {
    setAccountType(selectedType);
    setFormData((prev) => ({ ...prev, accountType: selectedType }));
    setCurrentStep(COMPANY_STEPS.CREATE_ACCOUNT);
  };

  // Step 2: Account Created -> Open OTP
  const handleCreateAccountSubmit = (accountData) => {
    setFormData((prev) => ({
      ...prev,
      account: accountData,
      profile: {
        ...prev.profile,
        companyName: accountData.companyName,
        contactEmail: accountData.email,
      },
    }));
    setIsOtpOpen(true);
  };

  // Step 3: OTP Verified -> Show Email Verified Modal
  const handleOtpVerifySuccess = () => {
    setIsOtpOpen(false);
    setIsEmailVerifiedOpen(true);
  };

  // Step 4: Email Verified Modal Continue -> Go to Profile Step
  const handleEmailVerifiedContinue = () => {
    setIsEmailVerifiedOpen(false);
    setCurrentStep(COMPANY_STEPS.COMPANY_PROFILE);
  };

  // Step 5: Profile Submitted -> Go to Preferences
  const handleProfileContinue = (profileData) => {
    setFormData((prev) => ({ ...prev, profile: profileData }));
    setCurrentStep(COMPANY_STEPS.COMPANY_PREFERENCES);
  };

  // Step 6: Preferences Submitted -> Go to Plan
  const handlePreferencesContinue = (preferencesData) => {
    setFormData((prev) => ({ ...prev, preferences: preferencesData }));
    setCurrentStep(COMPANY_STEPS.COMPANY_PLAN);
  };

  // Step 7: Plan Selected / Skipped -> Show Success Modal
  const handlePlanContinue = (planId) => {
    setFormData((prev) => ({ ...prev, plan: planId }));
    setIsSuccessOpen(true);
  };

  const handlePlanSkip = () => {
    setIsSuccessOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <AuthHeader userName={formData.account.companyName} />

      {/* Main Flow Content */}
      <main className="flex-1 flex flex-col justify-center py-4 sm:py-6">
        {currentStep === COMPANY_STEPS.ACCOUNT_TYPE && (
          <AccountTypeStep
            initialType={accountType}
            onContinue={handleAccountTypeContinue}
          />
        )}

        {currentStep === COMPANY_STEPS.CREATE_ACCOUNT && (
          <CompanyCreateAccountStep
            accountType={accountType}
            initialData={formData.account}
            onBack={() => setCurrentStep(COMPANY_STEPS.ACCOUNT_TYPE)}
            onSubmitSuccess={handleCreateAccountSubmit}
          />
        )}

        {currentStep === COMPANY_STEPS.COMPANY_PROFILE && (
          <CompanyProfileStep
            initialData={{
              ...formData.profile,
              companyName: formData.account.companyName || formData.profile.companyName,
              contactEmail: formData.account.email || formData.profile.contactEmail,
            }}
            onBack={() => setCurrentStep(COMPANY_STEPS.CREATE_ACCOUNT)}
            onContinue={handleProfileContinue}
          />
        )}

        {currentStep === COMPANY_STEPS.COMPANY_PREFERENCES && (
          <CompanyPreferencesStep
            initialData={formData.preferences}
            onBack={() => setCurrentStep(COMPANY_STEPS.COMPANY_PROFILE)}
            onContinue={handlePreferencesContinue}
          />
        )}

        {currentStep === COMPANY_STEPS.COMPANY_PLAN && (
          <CompanyPlanStep
            onContinue={handlePlanContinue}
            onSkip={handlePlanSkip}
          />
        )}
      </main>

      {/* OTP Verification Modal */}
      <OtpModal
        isOpen={isOtpOpen}
        onClose={() => setIsOtpOpen(false)}
        onVerifySuccess={handleOtpVerifySuccess}
        email={formData.account.email}
      />

      {/* Email Verified Confirmation Modal */}
      <EmailVerifiedModal
        isOpen={isEmailVerifiedOpen}
        onClose={() => setIsEmailVerifiedOpen(false)}
        onContinue={handleEmailVerifiedContinue}
      />

      {/* Final Registration Complete Modal */}
      <CompanySuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
      />

      <footer className="py-2" />
    </div>
  );
};

export default CompanyRegisterFlow;
