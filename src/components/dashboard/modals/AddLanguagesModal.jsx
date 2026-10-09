"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoCloseCircle } from "react-icons/io5";
import { FiSearch, FiArrowUpRight, FiTrash2, FiChevronDown } from "react-icons/fi";

const suggestedLanguages = [
  "English",
  "French",
  "German",
  "Italian",
  "Spanish",
  "Dutch",
  "Mexican",
];

const proficiencyLevels = [
  { key: "A1", label: "A1 - Beginner" },
  { key: "A2", label: "A2 - Elementary" },
  { key: "B1", label: "B1 - Intermediate" },
  { key: "B2", label: "B2 - Upper Intermediate" },
  { key: "C1", label: "C1 - Advanced" },
  { key: "C2", label: "C2 - Proficient" },
  { key: "Native", label: "Mother Tongue" },
];

export default function AddLanguagesModal({
  isOpen,
  onClose,
  currentLanguages = [],
  onSaveLanguages,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState(
    currentLanguages.length > 0
      ? currentLanguages
      : [{ name: "English", level: "C1" }]
  );

  if (!isOpen) return null;

  const filteredSuggested = suggestedLanguages.filter((l) =>
    l.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectLanguage = (langName) => {
    if (selectedLanguages.some((l) => l.name === langName)) {
      toast.error(`${langName} is already added`);
      return;
    }
    setSelectedLanguages([...selectedLanguages, { name: langName, level: "C1" }]);
  };

  const handleLevelChange = (langName, newLevel) => {
    setSelectedLanguages(
      selectedLanguages.map((l) =>
        l.name === langName ? { ...l, level: newLevel } : l
      )
    );
  };

  const handleRemoveLanguage = (langName) => {
    setSelectedLanguages(selectedLanguages.filter((l) => l.name !== langName));
  };

  const handleSave = () => {
    if (onSaveLanguages) {
      onSaveLanguages(selectedLanguages);
    }
    toast.success("Languages updated successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 dark:bg-[#151B2B] shadow-2xl border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-200">
        {/* Red Close (X) Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute right-5 top-5 text-rose-500 hover:text-rose-600 dark:text-rose-400 cursor-pointer transition-transform hover:scale-110"
        >
          <IoCloseCircle className="w-7 h-7" />
        </button>

        {/* Modal Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Add Languages
        </h3>

        {/* Search Bar */}
        <div className="relative mb-5">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && searchQuery.trim()) {
                e.preventDefault();
                handleSelectLanguage(searchQuery.trim());
                setSearchQuery("");
              }
            }}
            placeholder="Search for Language"
            className="w-full h-12 pl-11 pr-4 text-xs sm:text-sm rounded-xl bg-[#FAFAFC] dark:bg-[#111625] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden focus:border-brand-blue transition-all"
          />
        </div>

        {/* Suggested Languages */}
        <div className="mb-6">
          <span className="block text-xs font-semibold text-secondary dark:text-gray-400 mb-2.5">
            Suggested
          </span>
          <div className="flex flex-wrap gap-2">
            {filteredSuggested.map((lang) => {
              const isAdded = selectedLanguages.some((l) => l.name === lang);
              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => !isAdded && handleSelectLanguage(lang)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isAdded
                      ? "bg-brand-blue/15 text-brand-blue border border-brand-blue/30 cursor-default opacity-80"
                      : "bg-[#F4F5F7] dark:bg-[#111625] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                  }`}
                >
                  {lang}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Languages Box */}
        <div className="mb-6">
          {selectedLanguages.length === 0 ? (
            <div className="flex min-h-35 items-center justify-center rounded-2xl border border-gray-200 dark:border-gray-800 bg-[#FAFAFC] dark:bg-[#111625] p-6 text-center">
              <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500">
                No language skills are selected
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <span className="block text-xs font-medium text-secondary dark:text-gray-400">
                Select your language proficiency for your chosen languages
              </span>

              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {selectedLanguages.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-xl border border-gray-200/90 dark:border-gray-800 bg-white dark:bg-[#111625] px-4 py-3 shadow-2xs"
                  >
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </span>

                    <div className="flex items-center gap-3">
                      {/* Proficiency Level Dropdown */}
                      <div className="relative">
                        <select
                          value={item.level}
                          onChange={(e) =>
                            handleLevelChange(item.name, e.target.value)
                          }
                          className="h-8 pl-3 pr-8 rounded-full bg-[#F4F5F7] dark:bg-[#1C2438] text-xs font-semibold text-gray-700 dark:text-gray-200 border-0 focus:outline-hidden focus:ring-1 focus:ring-brand-blue appearance-none cursor-pointer"
                        >
                          {proficiencyLevels.map((lvl) => (
                            <option
                              key={lvl.key}
                              value={lvl.key}
                              className="dark:bg-[#151B2B]"
                            >
                              Level : {lvl.key} ({lvl.label})
                            </option>
                          ))}
                        </select>
                        <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                      </div>

                      {/* Delete Icon */}
                      <button
                        type="button"
                        onClick={() => handleRemoveLanguage(item.name)}
                        className="text-rose-500 hover:text-rose-600 dark:text-rose-400 p-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 cursor-pointer transition-colors"
                        title="Remove Language"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white dark:bg-brand-blue dark:hover:bg-brand-blue-hover text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
          >
            <span>Save</span>
            <FiArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
