"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import AuthHeader from "./AuthHeader";
import RegisterMethodSelect from "./RegisterMethodSelect";
import EmailRegisterForm from "./EmailRegisterForm";
import OtpModal from "./OtpModal";
import WelcomeGetStarted from "./WelcomeGetStarted";
import ReferralCodeStep from "./ReferralCodeStep";
import ProfileMethodStep from "./ProfileMethodStep";
import PersonalInfoStep from "./PersonalInfoStep";
import WorkExperienceStep from "./WorkExperienceStep";
import EducationStep from "./EducationStep";
import SkillSetStep from "./SkillSetStep";
import WorkModelStep from "./WorkModelStep";
import SalaryExpectationStep from "./SalaryExpectationStep";
import RelocationStep from "./RelocationStep";
import WorkloadStep from "./WorkloadStep";
import SuccessModal from "./SuccessModal";

export const FLOW_STEPS = {
  REGISTER_METHOD: "REGISTER_METHOD",
  REGISTER_EMAIL: "REGISTER_EMAIL",
  WELCOME: "WELCOME",
  REFERRAL_CODE: "REFERRAL_CODE",
  PROFILE_METHOD: "PROFILE_METHOD",
  PERSONAL_INFO: "PERSONAL_INFO",
  WORK_EXPERIENCE: "WORK_EXPERIENCE",
  EDUCATION: "EDUCATION",
  SKILLS: "SKILLS",
  WORK_MODEL: "WORK_MODEL",
  SALARY: "SALARY",
  RELOCATION: "RELOCATION",
  WORKLOAD: "WORKLOAD",
};

const JobSeekerRegisterFlow = () => {
  const [currentStep, setCurrentStep] = useState(FLOW_STEPS.REGISTER_METHOD);
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  // Flow State
  const [formData, setFormData] = useState({
    user: {
      firstName: "Adam",
      lastName: "Zampa",
      email: "demo@gmail.com",
      password: "",
      agreeGDPR: true,
    },
    referral: {
      hasReferralCode: true,
      referralCode: "",
    },
    profileMethod: "manual",
    personalInfo: {
      gender: "",
      location: "",
      citizenships: [{ code: "DE", name: "Germany", flag: "🇩🇪" }],
    },
    workExperiences: [
      {
        id: "exp-1",
        title: "UI UX Designer",
        company: "Softvence Agency",
        location: "New York, USA",
        startDate: "Jan 2026",
        endDate: "Present",
        isCurrent: true,
        workType: "Hybrid",
      },
    ],
    educations: [
      {
        id: "edu-1",
        institution: "Graphic Arts Institute",
        degree: "Graphic Design",
        startDate: "Jan 2026",
        endDate: "Present",
        isCurrent: true,
      },
    ],
    skills: {
      tools: [
        { name: "Canva", level: "Proficient" },
        { name: "Figma", level: "Proficient" },
      ],
      knowledge: [
        { name: "Project Management", level: "Proficient" },
        { name: "Team Leadership", level: "Proficient" },
        { name: "Agile Workflow", level: "Proficient" },
        { name: "Strategic Planning", level: "Proficient" },
      ],
      tasks: [
        { name: "Data Analysis", level: "Proficient" },
        { name: "Team Leadership", level: "Proficient" },
        { name: "UX Research", level: "Proficient" },
        { name: "Wireframing", level: "Proficient" },
      ],
      softSkills: [
        { name: "Problem Solving", level: "Proficient" },
        { name: "Team Leadership", level: "Proficient" },
        { name: "Effective Communication", level: "Proficient" },
        { name: "Adaptability", level: "Proficient" },
      ],
      languages: [
        { name: "English", level: "Fluent" },
        { name: "German", level: "Intermediate" },
      ],
    },
    workModel: ["Hybrid", "Remote"],
    salaryExpectation: {
      salary: 50000,
      currency: "$",
    },
    relocation: "Not willing to relocate",
    workload: {
      workloadType: "Fulltime - 100%",
      partTimePercent: null,
      finalWorkload: "Fulltime - 100%",
    },
  });

  // Handlers for Registration
  const handleEmailRegisterSubmit = (userRegistrationData) => {
    setFormData((prev) => ({
      ...prev,
      user: {
        ...prev.user,
        ...userRegistrationData,
      },
    }));
    setIsOtpOpen(true);
  };

  const handleOtpVerifySuccess = () => {
    setIsOtpOpen(false);
    toast.success("Account verified successfully!");
    setCurrentStep(FLOW_STEPS.WELCOME);
  };

  const handleGetStarted = () => {
    setCurrentStep(FLOW_STEPS.REFERRAL_CODE);
  };

  // Step 1: Referral
  const handleReferralContinue = (referralData) => {
    setFormData((prev) => ({ ...prev, referral: referralData }));
    setCurrentStep(FLOW_STEPS.PROFILE_METHOD);
  };

  const handleReferralSkip = () => {
    setCurrentStep(FLOW_STEPS.PROFILE_METHOD);
  };

  // Step 2: Profile Method
  const handleProfileMethodSelect = (method) => {
    setFormData((prev) => ({ ...prev, profileMethod: method }));
    setCurrentStep(FLOW_STEPS.PERSONAL_INFO);
  };

  // Step 3: Personal Info
  const handlePersonalInfoContinue = (personalInfoData) => {
    setFormData((prev) => ({ ...prev, personalInfo: personalInfoData }));
    setCurrentStep(FLOW_STEPS.WORK_EXPERIENCE);
  };

  // Step 4: Work Experience
  const handleWorkExperienceContinue = (experiences) => {
    setFormData((prev) => ({ ...prev, workExperiences: experiences }));
    setCurrentStep(FLOW_STEPS.EDUCATION);
  };

  // Step 5: Education
  const handleEducationContinue = (educations) => {
    setFormData((prev) => ({ ...prev, educations }));
    setCurrentStep(FLOW_STEPS.SKILLS);
  };

  // Step 6: Skills
  const handleSkillsContinue = (skillsData) => {
    setFormData((prev) => ({ ...prev, skills: skillsData }));
    setCurrentStep(FLOW_STEPS.WORK_MODEL);
  };

  // Step 7: Work Model
  const handleWorkModelContinue = (selectedModels) => {
    setFormData((prev) => ({ ...prev, workModel: selectedModels }));
    setCurrentStep(FLOW_STEPS.SALARY);
  };

  // Step 8: Salary
  const handleSalaryContinue = (salaryData) => {
    setFormData((prev) => ({ ...prev, salaryExpectation: salaryData }));
    setCurrentStep(FLOW_STEPS.RELOCATION);
  };

  // Step 9: Relocation
  const handleRelocationContinue = (relocationOption) => {
    setFormData((prev) => ({ ...prev, relocation: relocationOption }));
    setCurrentStep(FLOW_STEPS.WORKLOAD);
  };

  // Step 10: Workload (Final Onboarding Step)
  const handleWorkloadContinue = (workloadData) => {
    setFormData((prev) => ({ ...prev, workload: workloadData }));
    setIsSuccessOpen(true);
  };

  const getFullName = () => {
    const { firstName, lastName } = formData.user;
    if (firstName || lastName) {
      return `${firstName} ${lastName}`.trim();
    }
    return "Adam Zampa";
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <AuthHeader userName={getFullName()} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center py-4 sm:py-6">
        {/* Phase 1: Registration Entry */}
        {currentStep === FLOW_STEPS.REGISTER_METHOD && (
          <RegisterMethodSelect
            mode="register"
            onSelectEmail={() => setCurrentStep(FLOW_STEPS.REGISTER_EMAIL)}
          />
        )}

        {currentStep === FLOW_STEPS.REGISTER_EMAIL && (
          <EmailRegisterForm
            onBack={() => setCurrentStep(FLOW_STEPS.REGISTER_METHOD)}
            onSubmitSuccess={handleEmailRegisterSubmit}
          />
        )}

        {/* Phase 2: Onboarding Flow */}
        {currentStep === FLOW_STEPS.WELCOME && (
          <WelcomeGetStarted
            userName={getFullName()}
            onGetStarted={handleGetStarted}
          />
        )}

        {currentStep === FLOW_STEPS.REFERRAL_CODE && (
          <ReferralCodeStep
            initialData={formData.referral}
            onContinue={handleReferralContinue}
            onSkip={handleReferralSkip}
          />
        )}

        {currentStep === FLOW_STEPS.PROFILE_METHOD && (
          <ProfileMethodStep
            onSelectMethod={handleProfileMethodSelect}
            onBack={() => setCurrentStep(FLOW_STEPS.REFERRAL_CODE)}
          />
        )}

        {currentStep === FLOW_STEPS.PERSONAL_INFO && (
          <PersonalInfoStep
            initialData={formData.personalInfo}
            onContinue={handlePersonalInfoContinue}
          />
        )}

        {currentStep === FLOW_STEPS.WORK_EXPERIENCE && (
          <WorkExperienceStep
            initialExperiences={formData.workExperiences}
            onContinue={handleWorkExperienceContinue}
            onBack={() => setCurrentStep(FLOW_STEPS.PERSONAL_INFO)}
          />
        )}

        {currentStep === FLOW_STEPS.EDUCATION && (
          <EducationStep
            initialEducations={formData.educations}
            onContinue={handleEducationContinue}
            onBack={() => setCurrentStep(FLOW_STEPS.WORK_EXPERIENCE)}
          />
        )}

        {currentStep === FLOW_STEPS.SKILLS && (
          <SkillSetStep
            initialData={formData.skills}
            onContinue={handleSkillsContinue}
            onBack={() => setCurrentStep(FLOW_STEPS.EDUCATION)}
          />
        )}

        {currentStep === FLOW_STEPS.WORK_MODEL && (
          <WorkModelStep
            initialSelected={formData.workModel}
            onContinue={handleWorkModelContinue}
            onBack={() => setCurrentStep(FLOW_STEPS.SKILLS)}
          />
        )}

        {currentStep === FLOW_STEPS.SALARY && (
          <SalaryExpectationStep
            initialSalary={formData.salaryExpectation.salary.toString()}
            initialCurrency={formData.salaryExpectation.currency}
            onContinue={handleSalaryContinue}
            onBack={() => setCurrentStep(FLOW_STEPS.WORK_MODEL)}
          />
        )}

        {currentStep === FLOW_STEPS.RELOCATION && (
          <RelocationStep
            initialRelocation={formData.relocation}
            onContinue={handleRelocationContinue}
            onBack={() => setCurrentStep(FLOW_STEPS.SALARY)}
          />
        )}

        {currentStep === FLOW_STEPS.WORKLOAD && (
          <WorkloadStep
            initialWorkload={formData.workload.workloadType}
            initialPartTimePercent={formData.workload.partTimePercent}
            onContinue={handleWorkloadContinue}
            onBack={() => setCurrentStep(FLOW_STEPS.RELOCATION)}
          />
        )}
      </main>

      {/* OTP Verification Modal */}
      <OtpModal
        isOpen={isOtpOpen}
        onClose={() => setIsOtpOpen(false)}
        onVerifySuccess={handleOtpVerifySuccess}
        email={formData.user.email}
      />

      {/* Final Success Celebration Modal */}
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
      />

      {/* Footer spacer */}
      <footer className="py-2" />
    </div>
  );
};

export default JobSeekerRegisterFlow;
