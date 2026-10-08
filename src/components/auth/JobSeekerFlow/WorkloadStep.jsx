"use client";
import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import ProgressBar from "./ProgressBar";

const WorkloadStep = ({
  initialWorkload = "Fulltime - 100%",
  initialPartTimePercent = "50%",
  onContinue,
  onBack,
}) => {
  const [selectedType, setSelectedType] = useState(
    initialWorkload.startsWith("Part-time") ? "Part-time" : initialWorkload
  );
  const [partTimePercent, setPartTimePercent] = useState(
    initialPartTimePercent || "50%"
  );

  const options = [
    { id: "fulltime", label: "Fulltime - 100%" },
    { id: "parttime", label: "Part-time" },
    { id: "discuss", label: "Yes, I'm open to discuss" },
  ];

  const handleSave = (e) => {
    e.preventDefault();
    const finalWorkload =
      selectedType === "Part-time"
        ? `Part-time (${partTimePercent})`
        : selectedType;
    onContinue({
      workloadType: selectedType,
      partTimePercent: selectedType === "Part-time" ? partTimePercent : null,
      finalWorkload,
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-8">
      {/* Progress Bar */}
      <ProgressBar percent={98} />

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
            Specify your workload:
          </h1>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          {options.map((opt) => {
            const isSelected = selectedType === opt.label;
            const isPartTime = opt.label === "Part-time";

            return (
              <div
                key={opt.id}
                onClick={() => setSelectedType(opt.label)}
                className={`w-full p-4 lg:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-center select-none ${
                  isSelected
                    ? "border-[#22C55E] bg-emerald-50/20 ring-1 ring-[#22C55E]/30"
                    : "border-slate-200 bg-[#F8FAFC] hover:bg-slate-100/80"
                }`}
              >
                <div className="flex items-center gap-4">
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

                {/* Nested input for Part-time */}
                {isPartTime && isSelected && (
                  <div
                    className="mt-3.5 pt-2 pl-9 pr-2 animate-fade-in"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <label className="block text-xs lg:text-sm text-slate-500 mb-1.5">
                      Insert the workload %
                    </label>
                    <input
                      type="text"
                      value={partTimePercent}
                      onChange={(e) => setPartTimePercent(e.target.value)}
                      placeholder="e.g. 50%"
                      className="w-full h-11 lg:h-12 px-4 rounded-xl bg-white border border-slate-200 text-sm lg:text-base text-[#1E293B] focus:outline-hidden focus:border-[#29324B]"
                    />
                  </div>
                )}
              </div>
            );
          })}

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

export default WorkloadStep;
