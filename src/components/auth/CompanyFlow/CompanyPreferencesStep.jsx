"use client";
import React, { useState } from "react";
import { HiSparkles } from "react-icons/hi2";
import CompanyStepper from "./CompanyStepper";

const INDUSTRIES_LIST = [
  "Technology",
  "Healthcare",
  "Finance",
  "Retail",
  "Manufacturing",
  "Constructions",
  "Hospitality",
  "Education",
  "Transportation",
  "Logistics",
];

const JOB_CATEGORIES_LIST = [
  "Software Development",
  "Sales",
  "Marketing",
  "Customer Service",
  "Operations",
  "Human Resources",
  "Finance & Accounting",
  "Design",
  "Engineering",
  "Administrative",
  "Warehouse",
  "Driver",
];

const SKILLS_LIST = [
  "Communication",
  "Leadership",
  "Problem Solving",
  "Teamwork",
  "Time management",
  "Technical Skills",
  "Customer Services",
  "Project Management",
  "Data Analysis",
  "Sales",
  "Forklift Operation's",
];

const REGIONS_LIST = [
  "North America",
  "Europe",
  "Asia Pacific",
  "Latin America",
  "Middle East",
  "Africa",
  "Local Only",
  "Remote Anywhere",
];

const CompanyPreferencesStep = ({
  initialData = {},
  onBack,
  onContinue,
}) => {
  const [selectedIndustries, setSelectedIndustries] = useState(
    initialData.industries || ["Technology"]
  );
  const [selectedJobCategories, setSelectedJobCategories] = useState(
    initialData.jobCategories || []
  );
  const [selectedSkills, setSelectedSkills] = useState(
    initialData.skills || ["Problem Solving"]
  );
  const [selectedRegions, setSelectedRegions] = useState(
    initialData.regions || []
  );

  const toggleItem = (list, setList, item) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleContinue = (e) => {
    e.preventDefault();
    onContinue({
      industries: selectedIndustries,
      jobCategories: selectedJobCategories,
      skills: selectedSkills,
      regions: selectedRegions,
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-8">
      {/* Stepper (Step 04) */}
      <CompanyStepper currentStepIndex={3} />

      <div className="max-w-2xl mx-auto">
        <div className="mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B] mb-1 tracking-tight">
            Help us match better candidates
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-slate-400">
            This improves AI matching quality for your job postings
          </p>
        </div>

        <form onSubmit={handleContinue} className="space-y-6 lg:space-y-8">
          {/* Industries */}
          <div>
            <label className="block text-sm lg:text-base font-bold text-[#1E293B] mb-3">
              Industries <span className="font-normal text-slate-400 text-xs sm:text-sm">(Select all that apply)</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {INDUSTRIES_LIST.map((ind) => {
                const isSelected = selectedIndustries.includes(ind);
                return (
                  <button
                    key={ind}
                    type="button"
                    onClick={() =>
                      toggleItem(selectedIndustries, setSelectedIndustries, ind)
                    }
                    className={`h-11 lg:h-12 px-3 rounded-xl border text-xs sm:text-sm lg:text-base font-medium transition-all text-center flex items-center justify-center cursor-pointer select-none ${
                      isSelected
                        ? "border-[#22C55E] bg-emerald-50/20 text-[#1E293B] ring-1 ring-[#22C55E]/30"
                        : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    {ind}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Job Categories */}
          <div>
            <label className="block text-sm lg:text-base font-bold text-[#1E293B] mb-3">
              Job Categories <span className="font-normal text-slate-400 text-xs sm:text-sm">(Select all that apply)</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {JOB_CATEGORIES_LIST.map((cat) => {
                const isSelected = selectedJobCategories.includes(cat);
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() =>
                      toggleItem(selectedJobCategories, setSelectedJobCategories, cat)
                    }
                    className={`h-11 lg:h-12 px-3 rounded-xl border text-xs sm:text-sm lg:text-base font-medium transition-all text-center flex items-center justify-center cursor-pointer select-none ${
                      isSelected
                        ? "border-[#22C55E] bg-emerald-50/20 text-[#1E293B] ring-1 ring-[#22C55E]/30"
                        : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skills Frequently Required */}
          <div>
            <label className="block text-sm lg:text-base font-bold text-[#1E293B] mb-3">
              Skills Frequently Required <span className="font-normal text-slate-400 text-xs sm:text-sm">(Select all that apply)</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {SKILLS_LIST.map((skill) => {
                const isSelected = selectedSkills.includes(skill);
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() =>
                      toggleItem(selectedSkills, setSelectedSkills, skill)
                    }
                    className={`h-11 lg:h-12 px-3 rounded-xl border text-xs sm:text-sm lg:text-base font-medium transition-all text-center flex items-center justify-center cursor-pointer select-none ${
                      isSelected
                        ? "border-[#22C55E] bg-emerald-50/20 text-[#1E293B] ring-1 ring-[#22C55E]/30"
                        : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Regions You Hire In */}
          <div>
            <label className="block text-sm lg:text-base font-bold text-[#1E293B] mb-3">
              Regions You Hire In <span className="font-normal text-slate-400 text-xs sm:text-sm">(Select all that apply)</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {REGIONS_LIST.map((reg) => {
                const isSelected = selectedRegions.includes(reg);
                return (
                  <button
                    key={reg}
                    type="button"
                    onClick={() =>
                      toggleItem(selectedRegions, setSelectedRegions, reg)
                    }
                    className={`h-11 lg:h-12 px-3 rounded-xl border text-xs sm:text-sm lg:text-base font-medium transition-all text-center flex items-center justify-center cursor-pointer select-none ${
                      isSelected
                        ? "border-[#22C55E] bg-emerald-50/20 text-[#1E293B] ring-1 ring-[#22C55E]/30"
                        : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    {reg}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Info Banner */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-center gap-3 text-xs sm:text-sm text-indigo-900 leading-relaxed">
            <HiSparkles className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>
              The more information you provide, the better our AI can match
              qualified candidates to your job postings.
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 lg:pt-6">
            <button
              type="button"
              onClick={onBack}
              className="px-8 lg:px-10 py-2.5 lg:py-3 rounded-full border border-slate-300 hover:bg-slate-100 text-sm lg:text-base font-medium text-slate-700 transition-colors cursor-pointer"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-8 lg:px-10 py-2.5 lg:py-3 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-sm lg:text-base font-semibold text-white transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyPreferencesStep;
