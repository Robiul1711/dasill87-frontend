"use client";

import React from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiUser,
  FiPhone,
  FiGlobe,
  FiBookOpen,
} from "react-icons/fi";

export default function EditCoverLetterMenuPanel({ onBack, onNavigate }) {
  const generalInfoItems = [
    {
      id: "edit-name",
      title: "Name & Position",
      icon: FiUser,
    },
    {
      id: "edit-contact",
      title: "Contact Details",
      icon: FiPhone,
    },
    {
      id: "edit-language",
      title: "Change Cover Letter Language",
      icon: FiGlobe,
    },
  ];

  const contentItems = [
    {
      id: "edit-refine",
      title: "Refine Text With AI",
      icon: FiBookOpen,
    },
  ];

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-300">
      {/* Header with Back Arrow */}
      <div className="space-y-1.5 pb-2">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#1E293B] dark:text-white hover:text-brand-blue dark:hover:text-blue-400 transition-colors cursor-pointer group"
        >
          <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Edit Cover letter</span>
        </button>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Review or personalize the cover letter. Once you’re happy with it you can proceed and download both documents.
        </p>
      </div>

      {/* Section 1: General Info */}
      <div className="space-y-2.5">
        <h3 className="text-xs sm:text-sm font-bold text-[#1E293B] dark:text-gray-200">
          General Info
        </h3>
        <div className="space-y-2.5">
          {generalInfoItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-2xs hover:border-brand-blue/40 dark:hover:border-blue-500/40 hover:shadow-xs transition-all group cursor-pointer text-left"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex items-center justify-center w-8.5 h-8.5 rounded-full bg-[#2A344A] text-white group-hover:bg-[#0052FF] transition-colors shadow-2xs">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#1E293B] dark:text-white">
                    {item.title}
                  </span>
                </div>
                <FiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Section 2: Cover Letter Content */}
      <div className="space-y-2.5 pt-2">
        <h3 className="text-xs sm:text-sm font-bold text-[#1E293B] dark:text-gray-200">
          Cover Letter Content
        </h3>
        <div className="space-y-2.5">
          {contentItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-2xs hover:border-brand-blue/40 dark:hover:border-blue-500/40 hover:shadow-xs transition-all group cursor-pointer text-left"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex items-center justify-center w-8.5 h-8.5 rounded-full bg-[#2A344A] text-white group-hover:bg-[#0052FF] transition-colors shadow-2xs">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#1E293B] dark:text-white">
                    {item.title}
                  </span>
                </div>
                <FiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
