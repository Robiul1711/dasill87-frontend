"use client";

import React, { useState } from "react";
import VerifyBadgeCard from "@/components/dashboard/VerifyBadgeCard";
import TopProfileCard from "@/components/dashboard/TopProfileCard";
import StepsNav from "@/components/dashboard/StepsNav";
import PersonalInfoForm from "@/components/dashboard/forms/PersonalInfoForm";
import SkillLanguagesTab from "@/components/dashboard/forms/SkillLanguagesTab";
import ExperienceEducationTab from "@/components/dashboard/forms/ExperienceEducationTab";
import DocumentsSettingsTab from "@/components/dashboard/forms/DocumentsSettingsTab";
import HobbiesTab from "@/components/dashboard/forms/HobbiesTab";
import UploadCVModal from "@/components/dashboard/modals/UploadCVModal";
import EditPersonalInfoModal from "@/components/dashboard/modals/EditPersonalInfoModal";
import CompleteProfileModal from "@/components/dashboard/modals/CompleteProfileModal";
import JobApplicationTracker from "@/components/dashboard/JobApplicationTracker";
import { FiColumns, FiUserCheck } from "react-icons/fi";

export default function DashboardPage() {
  const [dashboardView, setDashboardView] = useState("tracker"); // 'tracker' | 'onboarding'
  const [activeTab, setActiveTab] = useState("personal-info");

  // User Profile State
  const [userInfo, setUserInfo] = useState({
    firstName: "Hande",
    lastName: "Ercel",
    name: "Hande Ercel",
    position: "UI/UX Designer",
    email: "johndoe@gmail.com",
    phoneNumber: "555-0199",
    gender: "",
    location: "123 Main St, City, State, ZIP",
    citizenship: "",
    workPermit: "",
    salary: "1,000",
    website: "http://johndow.io",
    photo: null,
  });

  // Modal States
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);

  const handleUpdateUserInfo = (newInfo) => {
    setUserInfo((prev) => ({ ...prev, ...newInfo }));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top View Mode Switcher */}
      <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800/80">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          {dashboardView === "tracker" ? "Application Tracker" : "Profile Setup & Onboarding"}
        </h2>

        {/* View Segmented Control */}
        <div className="inline-flex items-center p-1 rounded-2xl bg-gray-100 dark:bg-[#151B2B] border border-gray-200 dark:border-gray-800 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setDashboardView("tracker")}
            className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-xl transition-all cursor-pointer ${
              dashboardView === "tracker"
                ? "bg-white dark:bg-[#1E2638] text-brand-blue dark:text-blue-400 shadow-2xs font-bold"
                : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <FiColumns className="w-3.5 h-3.5" />
            <span>Job Tracker</span>
          </button>

          <button
            type="button"
            onClick={() => setDashboardView("onboarding")}
            className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-xl transition-all cursor-pointer ${
              dashboardView === "onboarding"
                ? "bg-white dark:bg-[#1E2638] text-brand-blue dark:text-blue-400 shadow-2xs font-bold"
                : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <FiUserCheck className="w-3.5 h-3.5" />
            <span>Profile Setup</span>
          </button>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 1. KANBAN APPLICATION TRACKER (DEFAULT VIEW AS IN FIGMA SCREENSHOT) */}
      {/* =================================================================== */}
      {dashboardView === "tracker" && <JobApplicationTracker />}

      {/* =================================================================== */}
      {/* 2. PROFILE SETUP / ONBOARDING VIEW */}
      {/* =================================================================== */}
      {dashboardView === "onboarding" && (
        <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
          {/* Top Section: Verify Badge Card & Top Profile Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            <VerifyBadgeCard
              percentage={47}
              onOpenCompleteModal={() => setIsCompleteModalOpen(true)}
            />
            <TopProfileCard
              onOpenUploadModal={() => setIsUploadModalOpen(true)}
            />
          </div>

          {/* Steps Tab Navigation */}
          <div className="space-y-4 sm:space-y-6">
            <StepsNav
              activeTab={activeTab}
              onSelectTab={(tabId) => setActiveTab(tabId)}
            />

            {/* Tab Content Panels */}
            <div className="transition-all duration-200">
              {activeTab === "personal-info" && (
                <PersonalInfoForm
                  userInfo={userInfo}
                  onUpdateUserInfo={handleUpdateUserInfo}
                  onOpenEditModal={() => setIsEditModalOpen(true)}
                />
              )}

              {activeTab === "skills-languages" && <SkillLanguagesTab />}

              {activeTab === "experience-education" && (
                <ExperienceEducationTab />
              )}

              {activeTab === "documents-settings" && (
                <DocumentsSettingsTab />
              )}

              {activeTab === "hobbies" && <HobbiesTab />}
            </div>
          </div>

          {/* Modals */}
          <UploadCVModal
            isOpen={isUploadModalOpen}
            onClose={() => setIsUploadModalOpen(false)}
          />

          <EditPersonalInfoModal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            userInfo={userInfo}
            onUpdateUserInfo={handleUpdateUserInfo}
          />

          <CompleteProfileModal
            isOpen={isCompleteModalOpen}
            onClose={() => setIsCompleteModalOpen(false)}
            onCompleteNow={() => {
              setActiveTab("personal-info");
            }}
          />
        </div>
      )}
    </div>
  );
}
