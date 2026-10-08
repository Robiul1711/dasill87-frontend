"use client";
import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import ProgressBar from "./ProgressBar";

const RelocationStep = ({
  initialRelocation = "Not willing to relocate",
  onContinue,
  onBack,
}) => {
  const [relocation, setRelocation] = useState(initialRelocation);

  const options = [
    { id: "not_willing", label: "Not willing to relocate" },
    { id: "open_to_discuss", label: "Yes, I'm open to discuss" },
  ];

  const handleSave = (e) => {
    e.preventDefault();
    onContinue(relocation);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-8">
      {/* Progress Bar */}
      <ProgressBar percent={95} />

      <div className="max-w-xl lg:max-w-2xl mx-auto">
        {/* Header with back */}
        <div className="flex items-center gap-3 mb-6 lg:mb-8">
          <button
            type="button"
            onClick={onBack}
            className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
            aria-label="Go back"
          >
            <FiArrowLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E293B] tracking-tight">
            Are you open to relocation?
          </h1>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          {options.map((opt) => {
            const isSelected = relocation === opt.label;
            return (
              <div
                key={opt.id}
                onClick={() => setRelocation(opt.label)}
                className={`w-full h-14 lg:h-16 px-5 lg:px-6 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 select-none ${
                  isSelected
                    ? "border-[#22C55E] bg-emerald-50/20 ring-1 ring-[#22C55E]/30"
                    : "border-slate-200 bg-[#F8FAFC] hover:bg-slate-100/80"
                }`}
              >
                <div
                  className={`w-5 h-5 lg:w-6 lg:h-6 rounded-full border flex items-center justify-center transition-colors ${
                    isSelected
                      ? "border-[#22C55E] bg-white"
                      : "border-slate-400 bg-white"
                  }`}
                >
                  {isSelected && (
                    <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#22C55E]" />
                  )}
                </div>
                <span className="text-sm lg:text-base font-medium text-[#1E293B]">
                  {opt.label}
                </span>
              </div>
            );
          })}

          {/* Conditional banner when "Yes, I'm open to discuss" is selected */}
          {relocation === "Yes, I'm open to discuss" && (
            <div className="p-4 rounded-2xl border border-purple-200 bg-purple-50/40 text-purple-700 text-xs lg:text-sm leading-relaxed animate-fade-in">
              Relocation preferences apply only to On-Site or Hybrid jobs. Remote
              jobs are not affected.
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center gap-4 pt-6 lg:pt-8">
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
              Save &amp; Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RelocationStep;
