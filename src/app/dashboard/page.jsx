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

export default function DashboardPage() {
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

          {activeTab === "skills-languages" && (
            <SkillLanguagesTab />
          )}

          {activeTab === "experience-education" && (
            <ExperienceEducationTab />
          )}

          {activeTab === "documents-settings" && (
            <DocumentsSettingsTab />
          )}

          {activeTab === "hobbies" && (
            <HobbiesTab />
          )}
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
  );
}
