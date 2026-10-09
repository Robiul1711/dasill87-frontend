"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoCloseCircle } from "react-icons/io5";
import { FiSearch, FiArrowUpRight, FiCheck } from "react-icons/fi";

const defaultSuggestedSkills = [
  "Project Management",
  "Team Leadership",
  "Figma",
  "UI/UX Design",
  "Wireframing",
  "Data Analysis",
  "User Research",
  "Design Systems",
  "Canva",
  "Prototyping",
];

export default function AddSkillsModal({ isOpen, onClose, onAddSkills, targetCategory = "Knowledge" }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  if (!isOpen) return null;

  const filteredSuggested = defaultSuggestedSkills.filter((s) =>
    s.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleAddNewFromSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (!selectedSkills.includes(searchQuery.trim())) {
      setSelectedSkills([...selectedSkills, searchQuery.trim()]);
    }
    setSearchQuery("");
  };

  const handleSave = () => {
    if (selectedSkills.length === 0) {
      toast.error("Please select at least one skill");
      return;
    }
    if (onAddSkills) {
      onAddSkills(selectedSkills, targetCategory);
    }
    toast.success(`Added ${selectedSkills.length} skill(s) successfully!`);
    setSelectedSkills([]);
    setSearchQuery("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 dark:bg-[#151B2B] shadow-2xl border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-200">
        {/* Red Close (X) Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute right-5 top-5 text-rose-500 hover:text-rose-600 dark:text-rose-400 cursor-pointer transition-transform hover:scale-110"
        >
          <IoCloseCircle className="w-7 h-7" />
        </button>

        {/* Modal Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
          Add skills to your profile
        </h3>
        <p className="text-xs sm:text-sm text-secondary dark:text-gray-400 mb-6">
          Search or select a suggested skill and save them to your profile
        </p>

        {/* Search Bar */}
        <form onSubmit={handleAddNewFromSearch} className="relative mb-6">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for skills..."
            className="w-full h-12 pl-11 pr-4 text-xs sm:text-sm rounded-xl bg-[#FAFAFC] dark:bg-[#111625] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden focus:border-brand-blue focus:bg-white dark:focus:bg-[#151B2B] transition-all"
          />
        </form>

        {/* Suggested Skills */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Suggested skills
          </h4>
          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-1">
            {filteredSuggested.map((skill) => {
              const isSelected = selectedSkills.includes(skill);
              return (
                <button
                  key={skill}
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? "bg-brand-blue text-white shadow-xs"
                      : "bg-[#F4F5F7] dark:bg-[#111625] text-gray-700 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-800"
                  }`}
                >
                  {isSelected && <FiCheck className="w-3.5 h-3.5" />}
                  <span>{skill}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected skills count or preview */}
        {selectedSkills.length > 0 && (
          <div className="mb-6 p-3 rounded-xl bg-brand-blue/5 dark:bg-blue-950/30 border border-brand-blue/20 flex items-center justify-between">
            <span className="text-xs font-semibold text-brand-blue dark:text-blue-400">
              {selectedSkills.length} skill(s) selected
            </span>
            <button
              type="button"
              onClick={() => setSelectedSkills([])}
              className="text-xs text-secondary hover:text-rose-500 cursor-pointer"
            >
              Clear all
            </button>
          </div>
        )}

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
