"use client";
import React, { useState } from "react";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import ProgressBar from "./ProgressBar";

const WorkModelStep = ({
  initialSelected = ["Hybrid", "Remote"],
  onContinue,
  onBack,
}) => {
  const [selectedModels, setSelectedModels] = useState(initialSelected);

  const toggleModel = (model) => {
    if (selectedModels.includes(model)) {
      setSelectedModels(selectedModels.filter((m) => m !== model));
    } else {
      setSelectedModels([...selectedModels, model]);
    }
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    onContinue(selectedModels);
  };

  const options = ["Hybrid", "Remote", "On-Site"];

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-8">
      {/* Progress Bar */}
      <ProgressBar percent={85} />

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
            What is your preferred work model?
          </h1>
        </div>

        <form onSubmit={handleConfirm} className="space-y-4">
          {options.map((option) => {
            const isChecked = selectedModels.includes(option);
            return (
              <div
                key={option}
                onClick={() => toggleModel(option)}
                className={`w-full h-14 lg:h-16 px-5 lg:px-6 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 select-none ${
                  isChecked
                    ? "border-[#22C55E] bg-emerald-50/20 ring-1 ring-[#22C55E]/30"
                    : "border-slate-200 bg-[#F8FAFC] hover:bg-slate-100/80"
                }`}
              >
                <div
                  className={`w-5 h-5 lg:w-6 lg:h-6 rounded-md border flex items-center justify-center transition-colors ${
                    isChecked
                      ? "border-[#22C55E] bg-[#22C55E] text-white"
                      : "border-slate-400 bg-white"
                  }`}
                >
                  {isChecked && <FiCheck className="w-3.5 h-3.5 lg:w-4 lg:h-4 stroke-[3]" />}
                </div>
                <span className="text-sm lg:text-base font-medium text-[#1E293B]">
                  {option}
                </span>
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
              Confirm &amp; Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkModelStep;
