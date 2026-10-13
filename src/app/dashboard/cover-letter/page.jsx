"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import CoverLetterPreview from "@/components/dashboard/cover-letter/CoverLetterPreview";
import CoverLetterOverviewPanel from "@/components/dashboard/cover-letter/panels/CoverLetterOverviewPanel";
import EditCoverLetterMenuPanel from "@/components/dashboard/cover-letter/panels/EditCoverLetterMenuPanel";
import CoverLetterNamePositionPanel from "@/components/dashboard/cover-letter/panels/CoverLetterNamePositionPanel";
import CoverLetterContactDetailsPanel from "@/components/dashboard/cover-letter/panels/CoverLetterContactDetailsPanel";
import CoverLetterLanguagePanel from "@/components/dashboard/cover-letter/panels/CoverLetterLanguagePanel";
import CoverLetterRefineTextPanel from "@/components/dashboard/cover-letter/panels/CoverLetterRefineTextPanel";
import ChooseCoverLetterTemplateModal from "@/components/dashboard/cover-letter/modals/ChooseCoverLetterTemplateModal";
import { defaultCoverLetterData } from "@/components/dashboard/cv-document/mockData";

export default function CoverLetterPage() {
  const router = useRouter();
  const [clData, setClData] = useState(defaultCoverLetterData);
  const [selectedTemplate, setSelectedTemplate] = useState("classic-blue");
  const [currentView, setCurrentView] = useState("overview");
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState("preview");

  const handleBackToCv = () => {
    router.push("/dashboard/cv-document");
  };

  const handleDownload = () => {
    toast.success("Preparing your high-resolution Cover Letter PDF...");
    setTimeout(() => {
      window.print();
    }, 500);
  };

  const handleProceed = () => {
    router.push("/dashboard/documents-ready");
  };

  const handleSelectTemplate = (tplId) => {
    setSelectedTemplate(tplId);
    toast.success("Cover letter template changed!");
  };

  return (
    <div className="w-full space-y-2">
      {/* Mobile Tab Switcher */}
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
            Preview Letter
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

      {/* Main Split Layout: Left Preview, Right Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-10 items-start pt-2">
        {/* =================================================================== */}
        {/* LEFT COLUMN: COVER LETTER PREVIEW */}
        {/* =================================================================== */}
        <div
          className={`lg:col-span-6 xl:col-span-6 w-full ${
            mobileTab === "preview" ? "block" : "hidden lg:block"
          }`}
        >
          <div className="sticky top-24">
            <CoverLetterPreview
              clData={clData}
              selectedTemplate={selectedTemplate}
            />
          </div>
        </div>

        {/* =================================================================== */}
        {/* RIGHT COLUMN: DYNAMIC EDITING PANELS */}
        {/* =================================================================== */}
        <div
          className={`lg:col-span-6 xl:col-span-6 w-full ${
            mobileTab === "editor" ? "block" : "hidden lg:block"
          }`}
        >
          {/* 1. Overview Panel */}
          {currentView === "overview" && (
            <CoverLetterOverviewPanel
              onNavigate={(view) => setCurrentView(view)}
              onOpenTemplates={() => setIsTemplateModalOpen(true)}
              onDownload={handleDownload}
              onBackToCv={handleBackToCv}
              onProceed={handleProceed}
            />
          )}

          {/* 2. Edit Menu Panel */}
          {currentView === "edit-menu" && (
            <EditCoverLetterMenuPanel
              onBack={() => setCurrentView("overview")}
              onNavigate={(view) => setCurrentView(view)}
            />
          )}

          {/* 3. Name & Position */}
          {currentView === "edit-name" && (
            <CoverLetterNamePositionPanel
              clData={clData}
              setClData={setClData}
              onBack={() => setCurrentView("edit-menu")}
            />
          )}

          {/* 4. Contact Details */}
          {currentView === "edit-contact" && (
            <CoverLetterContactDetailsPanel
              clData={clData}
              setClData={setClData}
              onBack={() => setCurrentView("edit-menu")}
            />
          )}

          {/* 5. Change Cover Letter Language */}
          {currentView === "edit-language" && (
            <CoverLetterLanguagePanel
              clData={clData}
              setClData={setClData}
              onBack={() => setCurrentView("edit-menu")}
            />
          )}

          {/* 6. Refine Text With AI */}
          {currentView === "edit-refine" && (
            <CoverLetterRefineTextPanel
              clData={clData}
              setClData={setClData}
              onBack={() => setCurrentView("edit-menu")}
            />
          )}
        </div>
      </div>

      {/* Choose Cover Letter Template Modal */}
      <ChooseCoverLetterTemplateModal
        isOpen={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
        currentTemplateId={selectedTemplate}
        onSelectTemplate={handleSelectTemplate}
      />
    </div>
  );
}
