"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import CvPreview from "@/components/dashboard/cv-document/CvPreview";
import OverviewPanel from "@/components/dashboard/cv-document/panels/OverviewPanel";
import EditMenuPanel from "@/components/dashboard/cv-document/panels/EditMenuPanel";
import NamePositionPanel from "@/components/dashboard/cv-document/panels/NamePositionPanel";
import UploadPicturePanel from "@/components/dashboard/cv-document/panels/UploadPicturePanel";
import ContactDetailsPanel from "@/components/dashboard/cv-document/panels/ContactDetailsPanel";
import LanguagePanel from "@/components/dashboard/cv-document/panels/LanguagePanel";
import BioPanel from "@/components/dashboard/cv-document/panels/BioPanel";
import ExperiencePanel from "@/components/dashboard/cv-document/panels/ExperiencePanel";
import EducationPanel from "@/components/dashboard/cv-document/panels/EducationPanel";
import SkillsPanel from "@/components/dashboard/cv-document/panels/SkillsPanel";
import LanguagesListPanel from "@/components/dashboard/cv-document/panels/LanguagesListPanel";
import HobbiesPanel from "@/components/dashboard/cv-document/panels/HobbiesPanel";
import ChooseTemplateModal from "@/components/dashboard/cv-document/modals/ChooseTemplateModal";
import { defaultCvData } from "@/components/dashboard/cv-document/mockData";

export default function CvDocumentPage() {
  const router = useRouter();
  const [cvData, setCvData] = useState(defaultCvData);
  const [selectedTemplate, setSelectedTemplate] = useState("watercolor");
  const [currentView, setCurrentView] = useState("overview");
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState("preview"); // "preview" | "editor"

  const handleDownloadCv = () => {
    toast.success("Preparing your high-resolution CV PDF...");
    setTimeout(() => {
      window.print();
    }, 500);
  };

  const handleProceedCoverLetter = () => {
    toast.success("Proceeding to Cover Letter...");
    router.push("/dashboard/cover-letter");
  };

  const handleSelectTemplate = (tplId) => {
    setSelectedTemplate(tplId);
    toast.success("Template changed successfully!");
  };

  return (
    <div className="w-full space-y-2">
      {/* Mobile Tab Switcher (Visible on < lg screens only) */}
      <div className="flex lg:hidden items-center justify-end pb-1">
        <div className="flex items-center p-1 rounded-xl bg-gray-100 dark:bg-[#151B2B] border border-gray-200 dark:border-gray-800 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setMobileTab("preview")}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              mobileTab === "preview"
                ? "bg-white dark:bg-[#1E2638] text-brand-blue dark:text-blue-400 shadow-2xs"
                : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Preview CV
          </button>
          <button
            type="button"
            onClick={() => setMobileTab("editor")}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              mobileTab === "editor"
                ? "bg-white dark:bg-[#1E2638] text-brand-blue dark:text-blue-400 shadow-2xs"
                : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Edit Options
          </button>
        </div>
      </div>

      {/* Main Split Layout: Left side CV Template Preview, Right side Edit Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-10 items-start pt-2">
        {/* =================================================================== */}
        {/* LEFT COLUMN: CV TEMPLATE PREVIEW (Width: 6/12 or 7/12) */}
        {/* =================================================================== */}
        <div
          className={`lg:col-span-6 xl:col-span-6 w-full ${
            mobileTab === "preview" ? "block" : "hidden lg:block"
          }`}
        >
          <div className="sticky top-24">
            <CvPreview cvData={cvData} selectedTemplate={selectedTemplate} />
          </div>
        </div>

        {/* =================================================================== */}
        {/* RIGHT COLUMN: DYNAMIC EDITING PANELS (Width: 6/12 or 6/12) */}
        {/* =================================================================== */}
        <div
          className={`lg:col-span-6 xl:col-span-6 w-full ${
            mobileTab === "editor" ? "block" : "hidden lg:block"
          }`}
        >
          {/* 1. Overview Panel */}
          {currentView === "overview" && (
            <OverviewPanel
              onNavigate={(view) => setCurrentView(view)}
              onOpenTemplates={() => setIsTemplateModalOpen(true)}
              onDownloadCv={handleDownloadCv}
              onProceedCoverLetter={handleProceedCoverLetter}
            />
          )}

          {/* 2. Edit Menu Panel (List of General Info & CV Content) */}
          {currentView === "edit-menu" && (
            <EditMenuPanel
              onBack={() => setCurrentView("overview")}
              onNavigate={(view) => setCurrentView(view)}
            />
          )}

          {/* 3. General Info: Name & Position */}
          {currentView === "edit-name" && (
            <NamePositionPanel
              cvData={cvData}
              setCvData={setCvData}
              onBack={() => setCurrentView("edit-menu")}
            />
          )}

          {/* 4. General Info: Upload Picture */}
          {currentView === "edit-picture" && (
            <UploadPicturePanel
              cvData={cvData}
              setCvData={setCvData}
              onBack={() => setCurrentView("edit-menu")}
            />
          )}

          {/* 5. General Info: Contact Details */}
          {currentView === "edit-contact" && (
            <ContactDetailsPanel
              cvData={cvData}
              setCvData={setCvData}
              onBack={() => setCurrentView("edit-menu")}
            />
          )}

          {/* 6. General Info: Change CV Language */}
          {currentView === "edit-language" && (
            <LanguagePanel
              cvData={cvData}
              setCvData={setCvData}
              onBack={() => setCurrentView("edit-menu")}
            />
          )}

          {/* 7. CV Content: Bio */}
          {currentView === "edit-bio" && (
            <BioPanel
              cvData={cvData}
              setCvData={setCvData}
              onBack={() => setCurrentView("edit-menu")}
            />
          )}

          {/* 8. CV Content: Experience */}
          {currentView === "edit-experience" && (
            <ExperiencePanel
              cvData={cvData}
              setCvData={setCvData}
              onBack={() => setCurrentView("edit-menu")}
            />
          )}

          {/* 9. CV Content: Education */}
          {currentView === "edit-education" && (
            <EducationPanel
              cvData={cvData}
              setCvData={setCvData}
              onBack={() => setCurrentView("edit-menu")}
            />
          )}

          {/* 10. CV Content: Skills */}
          {currentView === "edit-skills" && (
            <SkillsPanel
              cvData={cvData}
              setCvData={setCvData}
              onBack={() => setCurrentView("edit-menu")}
            />
          )}

          {/* 11. CV Content: Languages */}
          {currentView === "edit-languages" && (
            <LanguagesListPanel
              cvData={cvData}
              setCvData={setCvData}
              onBack={() => setCurrentView("edit-menu")}
            />
          )}

          {/* 12. CV Content: Hobbies */}
          {currentView === "edit-hobbies" && (
            <HobbiesPanel
              cvData={cvData}
              setCvData={setCvData}
              onBack={() => setCurrentView("edit-menu")}
            />
          )}
        </div>
      </div>

      {/* Choose Template Modal */}
      <ChooseTemplateModal
        isOpen={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
        currentTemplateId={selectedTemplate}
        onSelectTemplate={handleSelectTemplate}
      />
    </div>
  );
}
