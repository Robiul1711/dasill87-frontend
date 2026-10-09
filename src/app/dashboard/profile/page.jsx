"use client";

import React, { useState } from "react";
import StepsNav from "@/components/dashboard/StepsNav";
import PersonalInfoForm from "@/components/dashboard/forms/PersonalInfoForm";
import SkillLanguagesTab from "@/components/dashboard/forms/SkillLanguagesTab";
import ExperienceEducationTab from "@/components/dashboard/forms/ExperienceEducationTab";
import DocumentsSettingsTab from "@/components/dashboard/forms/DocumentsSettingsTab";
import HobbiesTab from "@/components/dashboard/forms/HobbiesTab";
import EditPersonalInfoModal from "@/components/dashboard/modals/EditPersonalInfoModal";

export default function ProfilePage() {
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

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleUpdateUserInfo = (newInfo) => {
    setUserInfo((prev) => ({ ...prev, ...newInfo }));
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
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

          {activeTab === "experience-education" && <ExperienceEducationTab />}

          {activeTab === "documents-settings" && <DocumentsSettingsTab />}

          {activeTab === "hobbies" && <HobbiesTab />}
        </div>
      </div>

      {/* Edit Personal Info Modal */}
      <EditPersonalInfoModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        userInfo={userInfo}
        onUpdateUserInfo={handleUpdateUserInfo}
      />
    </div>
  );
}
