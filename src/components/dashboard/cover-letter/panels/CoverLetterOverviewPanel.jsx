"use client";

import React from "react";
import { FiCheck, FiArrowRight, FiEdit3, FiDownloadCloud } from "react-icons/fi";
import { RiFileList3Line } from "react-icons/ri";

export default function CoverLetterOverviewPanel({
  onNavigate,
  onOpenTemplates,
  onDownload,
  onBackToCv,
  onProceed,
}) {
  return (
    <div className="w-full space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Top Banner Card */}
      <div className="text-center space-y-3 sm:space-y-4 max-w-lg mx-auto pt-2 sm:pt-4">
        {/* Blue Checkmark Circle */}
        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0052FF] text-white shadow-md mx-auto">
          <FiCheck className="w-5 h-5 stroke-[2.8]" />
        </div>

        {/* Heading & Subtitle */}
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B] dark:text-white">
            Your Cover Letter is ready!
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
            Review or personalize your Cover Letter. Once you’re happy with it you can proceed and download documents.
          </p>
        </div>

        {/* Navigation Action Buttons: Back to CV & Proceed */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={onBackToCv}
            className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#151B2B] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer hover:scale-105"
          >
            Back to CV
          </button>

          <button
            type="button"
            onClick={onProceed}
            className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#2A344A] hover:bg-[#1f2638] text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:scale-105 cursor-pointer"
          >
            <FiArrowRight className="w-4 h-4" />
            <span>Proceed</span>
          </button>
        </div>
      </div>

      {/* Action Options Cards */}
      <div className="space-y-3 max-w-xl mx-auto pt-4">
        {/* 1. Edit Cover Letter */}
        <button
          type="button"
          onClick={() => onNavigate("edit-menu")}
          className="w-full flex items-center justify-between p-4 sm:p-4.5 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-xs hover:border-brand-blue/40 dark:hover:border-blue-500/40 hover:shadow-md transition-all group cursor-pointer text-left"
        >
          <div className="flex items-center gap-3.5">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#2A344A] text-white group-hover:bg-[#0052FF] transition-colors shadow-2xs">
              <FiEdit3 className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-[#1E293B] dark:text-white">
              Edit Cover Letter
            </span>
          </div>
          <FiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
        </button>

        {/* 2. Templates */}
        <button
          type="button"
          onClick={onOpenTemplates}
          className="w-full flex items-center justify-between p-4 sm:p-4.5 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-xs hover:border-brand-blue/40 dark:hover:border-blue-500/40 hover:shadow-md transition-all group cursor-pointer text-left"
        >
          <div className="flex items-center gap-3.5">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#2A344A] text-white group-hover:bg-[#0052FF] transition-colors shadow-2xs">
              <RiFileList3Line className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-[#1E293B] dark:text-white">
              Templates
            </span>
          </div>
          <FiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
        </button>

        {/* 3. Download */}
        <button
          type="button"
          onClick={onDownload}
          className="w-full flex items-center justify-between p-4 sm:p-4.5 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-xs hover:border-brand-blue/40 dark:hover:border-blue-500/40 hover:shadow-md transition-all group cursor-pointer text-left"
        >
          <div className="flex items-center gap-3.5">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#2A344A] text-white group-hover:bg-[#0052FF] transition-colors shadow-2xs">
              <FiDownloadCloud className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-[#1E293B] dark:text-white">
              Download
            </span>
          </div>
          <FiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
        </button>
      </div>
    </div>
  );
}
