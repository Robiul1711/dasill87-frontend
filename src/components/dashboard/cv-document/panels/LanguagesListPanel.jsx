"use client";

import React, { useState } from "react";
import {
  FiArrowLeft,
  FiSearch,
  FiChevronDown,
  FiTrash2,
  FiArrowUpRight,
} from "react-icons/fi";
import toast from "react-hot-toast";

const proficiencyLevels = [
  "A1 - Beginner",
  "A2 - Elementary",
  "B1 - Intermediate",
  "B2 - Upper Intermediate",
  "C1 - Advanced",
  "C2 - Proficient",
  "Mother Tongue",
];

const suggestedLanguages = [
  "French",
  "German",
  "Italian",
  "Spanish",
  "Dutch",
  "Mexican",
];

export default function LanguagesListPanel({ cvData, setCvData, onBack }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdownId, setActiveDropdownId] = useState(null);

  const handleAddLanguage = (langName) => {
    if (!langName.trim()) return;
    const exists = (cvData.languages || []).some(
      (l) => l.name.toLowerCase() === langName.toLowerCase()
    );
    if (exists) {
      toast.error(`${langName} is already added.`);
      return;
    }

    const newLang = {
      id: `lang-${Date.now()}`,
      name: langName.trim(),
      level: "B2",
    };

    setCvData((prev) => ({
      ...prev,
      languages: [...(prev.languages || []), newLang],
    }));

    setSearchQuery("");
    toast.success(`${langName} added!`);
  };

  const handleRemoveLanguage = (id) => {
    setCvData((prev) => ({
      ...prev,
      languages: (prev.languages || []).filter((l) => l.id !== id),
    }));
  };

  const handleSetLevel = (id, levelCode) => {
    setCvData((prev) => ({
      ...prev,
      languages: (prev.languages || []).map((l) =>
        l.id === id ? { ...l, level: levelCode } : l
      ),
    }));
    setActiveDropdownId(null);
  };

  const handleSave = () => {
    toast.success("Languages saved!");
    onBack();
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
          <span>Languages</span>
        </button>
      </div>

      {/* Main Container Card */}
      <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-xs space-y-6">
        {/* Search for Language */}
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddLanguage(searchQuery);
              }
            }}
            placeholder="Search for Language"
            className="w-full h-12 pl-11 pr-4 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
          />
        </div>

        {/* Suggested Chips */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            Suggested
          </label>
          <div className="flex flex-wrap gap-2">
            {suggestedLanguages.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => handleAddLanguage(lang)}
                className="px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium hover:bg-brand-blue hover:text-white dark:hover:bg-blue-600 transition-colors cursor-pointer"
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Languages List */}
        <div className="space-y-3 pt-2">
          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block">
            Select your language proficiency for your chosen languages
          </label>

          <div className="space-y-2.5">
            {(cvData.languages || []).map((lang) => {
              const isOpen = activeDropdownId === lang.id;
              return (
                <div
                  key={lang.id}
                  className="relative flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522]"
                >
                  <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {lang.name}
                  </span>

                  <div className="flex items-center gap-3">
                    {/* Level Selector Dropdown */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveDropdownId(isOpen ? null : lang.id)
                        }
                        className="px-3 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800 text-brand-blue dark:text-blue-400 text-xs font-semibold flex items-center gap-1.5 cursor-pointer hover:bg-blue-100 transition-colors"
                      >
                        <span>Level : {lang.level || "C1"}</span>
                        <FiChevronDown
                          className={`w-3.5 h-3.5 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="absolute right-0 top-full mt-1.5 w-52 rounded-xl bg-white dark:bg-[#1A2234] border border-gray-200 dark:border-gray-700 shadow-xl z-30 py-1 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                          {proficiencyLevels.map((lvl) => {
                            const code = lvl.split(" - ")[0];
                            return (
                              <button
                                key={lvl}
                                type="button"
                                onClick={() => handleSetLevel(lang.id, code)}
                                className="w-full px-3.5 py-2 text-left text-xs hover:bg-gray-50 dark:hover:bg-[#151B2B] text-gray-700 dark:text-gray-200 flex items-center justify-between cursor-pointer"
                              >
                                <span>{lvl}</span>
                                {lang.level === code && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Trash Delete Icon */}
                    <button
                      type="button"
                      onClick={() => handleRemoveLanguage(lang.id)}
                      className="p-1.5 text-rose-500 hover:text-rose-700 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg transition-colors cursor-pointer"
                      title="Remove language"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Save Button */}
        <div className="flex items-center justify-end pt-4">
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#2A344A] hover:bg-[#1f2638] text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:scale-105 cursor-pointer"
          >
            <span>Save</span>
            <FiArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
