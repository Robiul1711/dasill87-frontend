"use client";
import React, { useState } from "react";
import { FiChevronDown, FiTrash2 } from "react-icons/fi";
import ProgressBar from "./ProgressBar";

const AVAILABLE_COUNTRIES = [
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "SE", name: "Sweden", flag: "🇸🇪" },
];

const PersonalInfoStep = ({ initialData = {}, onContinue }) => {
  const [gender, setGender] = useState(initialData.gender || "");
  const [location, setLocation] = useState(initialData.location || "");
  const [citizenships, setCitizenships] = useState(
    initialData.citizenships || [{ code: "DE", name: "Germany", flag: "🇩🇪" }]
  );
  const [selectedAddCountry, setSelectedAddCountry] = useState("");

  const handleAddCitizenship = (e) => {
    const code = e.target.value;
    if (!code) return;
    const country = AVAILABLE_COUNTRIES.find((c) => c.code === code);
    if (country && !citizenships.some((c) => c.code === code)) {
      setCitizenships([...citizenships, country]);
    }
    setSelectedAddCountry("");
  };

  const handleRemoveCitizenship = (codeToRemove) => {
    setCitizenships(citizenships.filter((c) => c.code !== codeToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onContinue({
      gender,
      location,
      citizenships,
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-8">
      {/* Progress Bar */}
      <ProgressBar percent={35} />

      <div className="max-w-xl lg:max-w-2xl mx-auto">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E293B] mb-6 lg:mb-8 tracking-tight">
          Personal Information
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
          {/* Gender */}
          <div>
            <label className="block text-sm lg:text-base font-medium text-slate-700 mb-2">
              Gender
            </label>
            <div className="relative">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full h-12 lg:h-13 px-4 pr-10 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm lg:text-base text-[#1E293B] focus:outline-hidden focus:border-[#29324B] appearance-none cursor-pointer"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <FiChevronDown className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm lg:text-base font-medium text-slate-700 mb-2">
              Location
            </label>
            <div className="relative">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="location here"
                className="w-full h-12 lg:h-13 px-4 pr-10 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm lg:text-base text-[#1E293B] focus:outline-hidden focus:border-[#29324B] placeholder:text-slate-400"
              />
              <FiChevronDown className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Citizenship */}
          <div>
            <label className="block text-sm lg:text-base font-medium text-slate-700 mb-2">
              Citizenship
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Added Citizenships */}
              {citizenships.map((c) => (
                <div
                  key={c.code}
                  className="h-12 lg:h-13 px-4 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-between text-sm lg:text-base text-[#1E293B]"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">{c.flag}</span>
                    <span className="text-sm lg:text-base font-medium">{c.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveCitizenship(c.code)}
                    className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                    aria-label={`Remove ${c.name}`}
                  >
                    <FiTrash2 className="w-4 h-4 lg:w-5 lg:h-5" />
                  </button>
                </div>
              ))}

              {/* Add Citizenship Dropdown */}
              <div className="relative">
                <select
                  value={selectedAddCountry}
                  onChange={handleAddCitizenship}
                  className="w-full h-12 lg:h-13 px-4 pr-10 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm lg:text-base text-slate-600 focus:outline-hidden focus:border-[#29324B] appearance-none cursor-pointer"
                >
                  <option value="">Add citizenship</option>
                  {AVAILABLE_COUNTRIES.filter(
                    (c) => !citizenships.some((cit) => cit.code === c.code)
                  ).map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.name}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-end pt-6 lg:pt-8">
            <button
              type="submit"
              className="px-8 py-2.5 lg:px-10 lg:py-3 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-sm lg:text-base font-semibold text-white transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              Save &amp; Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfoStep;
