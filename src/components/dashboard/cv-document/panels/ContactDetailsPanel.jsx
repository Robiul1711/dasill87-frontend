"use client";

import React, { useState } from "react";
import { FiArrowLeft, FiChevronDown } from "react-icons/fi";

const countryOptions = [
  { code: "+1", flag: "🇺🇸", country: "United States" },
  { code: "+44", flag: "🇬🇧", country: "United Kingdom" },
  { code: "+49", flag: "🇩🇪", country: "Germany" },
  { code: "+41", flag: "🇨🇭", country: "Switzerland" },
  { code: "+33", flag: "🇫🇷", country: "France" },
  { code: "+880", flag: "🇧🇩", country: "Bangladesh" },
  { code: "+91", flag: "🇮🇳", country: "India" },
];

export default function ContactDetailsPanel({ cvData, setCvData, onBack }) {
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);

  const handleChange = (field, value) => {
    setCvData((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
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
          <span>Contact Details</span>
        </button>
      </div>

      {/* Form Fields Card */}
      <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-xs space-y-5">
        {/* Email */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            value={cvData.contact?.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="e.g. andrewsmith@gmail.com"
            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] text-gray-900 dark:text-white focus:outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
          />
        </div>

        {/* Location */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            Location
          </label>
          <input
            type="text"
            value={cvData.contact?.location || ""}
            onChange={(e) => handleChange("location", e.target.value)}
            placeholder="e.g. Swindon, England, United Kingdom"
            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] text-gray-900 dark:text-white focus:outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
          />
        </div>

        {/* Phone Number with Country Flag Selector */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            Phone Number
          </label>
          <div className="relative flex items-center">
            {/* Country flag trigger */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCountryDropdownOpen((prev) => !prev)}
                className="h-10.5 px-3 flex items-center gap-1.5 rounded-l-xl border border-r-0 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#151B2B] text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <span>{selectedCountry.flag}</span>
                <FiChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {countryDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 rounded-xl bg-white dark:bg-[#1E2638] border border-gray-200 dark:border-gray-700 shadow-xl z-20 overflow-hidden py-1">
                  {countryOptions.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => {
                        setSelectedCountry(country);
                        setCountryDropdownOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left text-xs flex items-center justify-between hover:bg-gray-100 dark:hover:bg-[#151B2B] text-gray-700 dark:text-gray-200 cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <span>{country.flag}</span>
                        <span>{country.country}</span>
                      </span>
                      <span className="text-gray-400 font-mono text-[11px]">
                        {country.code}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Phone Input */}
            <input
              type="tel"
              value={cvData.contact?.phone || ""}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+001 0184201 7593"
              className="flex-1 px-4 py-2.5 text-xs sm:text-sm rounded-r-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] text-gray-900 dark:text-white focus:outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
            />
          </div>
        </div>

        {/* Portfolio */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            Portfolio
          </label>
          <input
            type="text"
            value={cvData.contact?.portfolio || ""}
            onChange={(e) => handleChange("portfolio", e.target.value)}
            placeholder="Add a link to your portfolio, Github.."
            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] text-gray-900 dark:text-white focus:outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
          />
        </div>
      </div>
    </div>
  );
}
