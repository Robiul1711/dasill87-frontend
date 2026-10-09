"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { FiArrowUpRight } from "react-icons/fi";
import { DocumentsSettingsIcon } from "@/components/icons/DashboardIcons";

// Flag SVGs
const GermanFlag = () => (
  <svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-md overflow-hidden shadow-2xs shrink-0">
    <rect width="36" height="8.66" fill="#111827" />
    <rect y="8.66" width="36" height="8.66" fill="#EF4444" />
    <rect y="17.33" width="36" height="8.66" fill="#FBBF24" />
  </svg>
);

const EnglishFlag = () => (
  <svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-md overflow-hidden shadow-2xs shrink-0 border border-gray-100">
    <rect width="36" height="26" fill="white" />
    <rect x="15" width="6" height="26" fill="#EF4444" />
    <rect y="10" width="36" height="6" fill="#EF4444" />
  </svg>
);

const documentLanguages = [
  {
    id: "german",
    name: "German",
    flag: GermanFlag,
  },
  {
    id: "english",
    name: "English",
    flag: EnglishFlag,
  },
];

export default function DocumentsSettingsTab() {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const handleSave = () => {
    toast.success("Document language preference saved successfully!");
  };

  return (
    <div className="rounded-2xl bg-white p-5 sm:p-7 border border-gray-100 shadow-xs dark:bg-[#151B2B] dark:border-gray-800/80 transition-all duration-200">
      {/* Top Header */}
      <div className="flex items-center gap-3.5 pb-6 border-b border-gray-100 dark:border-gray-800">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-blue-950/60 dark:text-blue-400">
          <DocumentsSettingsIcon className="h-5 w-5" color="#0000F6" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
            Documents settings
          </h3>
          <p className="text-xs sm:text-[13px] text-secondary dark:text-gray-400">
            Adjust your document settings. They directly influence how your documents are generated and presented.
          </p>
        </div>
      </div>

      <div className="pt-6 space-y-6">
        {/* Language Selection Section */}
        <div>
          <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-1">
            Language
          </h4>
          <p className="text-xs text-secondary dark:text-gray-400 mb-4">
            Once selected, every document you create will be generated in this language.
          </p>

          <div className="space-y-3">
            {documentLanguages.map((item) => {
              const isSelected = selectedLanguage === item.id;
              const Flag = item.flag;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedLanguage(item.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "border-brand-blue bg-brand-blue/5 dark:bg-blue-950/20 shadow-2xs"
                      : "border-gray-200/90 dark:border-gray-800 bg-white dark:bg-[#111625] hover:border-gray-300 dark:hover:border-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <Flag />
                    <span className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                      {item.name}
                    </span>
                  </div>

                  {/* Radio Indicator */}
                  <div className="flex items-center">
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${
                        isSelected
                          ? "border-brand-blue bg-brand-blue"
                          : "border-gray-300 dark:border-gray-600 bg-transparent"
                      }`}
                    >
                      {isSelected && (
                        <div className="h-2 w-2 rounded-full bg-white" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-4">
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary hover:bg-primary/90 text-white dark:bg-brand-blue dark:hover:bg-brand-blue-hover text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Save</span>
            <FiArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
