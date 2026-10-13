"use client";

import React from "react";
import { FiArrowLeft } from "react-icons/fi";

export default function NamePositionPanel({ cvData, setCvData, onBack }) {
  const handleChange = (field, value) => {
    setCvData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value,
      },
    }));
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
          <span>Name & Position</span>
        </button>
      </div>

      {/* Form Fields Card */}
      <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-xs space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              First Name
            </label>
            <input
              type="text"
              value={cvData.personal?.firstName || ""}
              onChange={(e) => handleChange("firstName", e.target.value)}
              placeholder="e.g. Andrew"
              className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] text-gray-900 dark:text-white focus:outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
            />
          </div>

          {/* Last Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              Last Name
            </label>
            <input
              type="text"
              value={cvData.personal?.lastName || ""}
              onChange={(e) => handleChange("lastName", e.target.value)}
              placeholder="e.g. Smith"
              className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] text-gray-900 dark:text-white focus:outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
            />
          </div>
        </div>

        {/* Position */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            Position
          </label>
          <input
            type="text"
            value={cvData.personal?.position || ""}
            onChange={(e) => handleChange("position", e.target.value)}
            placeholder="e.g. UI/UX Designer"
            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] text-gray-900 dark:text-white focus:outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
          />
        </div>
      </div>
    </div>
  );
}
