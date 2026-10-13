"use client";

import React, { useState } from "react";
import { FiArrowLeft, FiChevronDown, FiCheck } from "react-icons/fi";
import toast from "react-hot-toast";

const availableLanguages = [
  { id: "en", name: "English", flag: "🇺🇸" },
  { id: "de", name: "German", flag: "🇩🇪" },
  { id: "fr", name: "French", flag: "🇫🇷" },
  { id: "es", name: "Spanish", flag: "🇪🇸" },
  { id: "it", name: "Italian", flag: "🇮🇹" },
  { id: "nl", name: "Dutch", flag: "🇳🇱" },
];

export default function CoverLetterLanguagePanel({
  clData,
  setClData,
  onBack,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const currentLang =
    availableLanguages.find((l) => l.name === clData.language) ||
    availableLanguages[0];

  const handleSelect = (lang) => {
    setClData((prev) => ({
      ...prev,
      language: lang.name,
    }));
    setDropdownOpen(false);
    toast.success(`Cover Letter language set to ${lang.name}!`);
  };

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-300">
      {/* Back button */}
      <div className="pb-2">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-base font-bold text-[#1E293B] dark:text-white hover:text-brand-blue dark:hover:text-blue-400 transition-colors cursor-pointer group"
        >
          <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Change Cover Letter Language</span>
        </button>
      </div>

      {/* Language Selector Card */}
      <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-xs space-y-4">
        <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block">
          Change Cover Letter Language
        </label>

        {/* Dropdown Box */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] flex items-center justify-between text-xs sm:text-sm text-gray-900 dark:text-white hover:border-brand-blue transition-colors cursor-pointer shadow-2xs"
          >
            <div className="flex items-center gap-3">
              <span className="text-base">{currentLang.flag}</span>
              <span className="font-medium">{currentLang.name}</span>
            </div>
            <FiChevronDown
              className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 rounded-xl bg-white dark:bg-[#1A2234] border border-gray-200 dark:border-gray-700 shadow-xl z-30 overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-150">
              {availableLanguages.map((lang) => {
                const isSelected = lang.name === currentLang.name;
                return (
                  <button
                    key={lang.id}
                    type="button"
                    onClick={() => handleSelect(lang)}
                    className="w-full px-4 py-2.5 text-left text-xs sm:text-sm flex items-center justify-between hover:bg-gray-50 dark:hover:bg-[#151B2B] text-gray-800 dark:text-gray-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </div>
                    {isSelected && (
                      <FiCheck className="w-4 h-4 text-brand-blue" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
