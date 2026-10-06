"use client";
import React from "react";

const ProgressBar = ({ currentStep = 1, totalSteps = 10, percent = null }) => {
  const calculatedPercent =
    percent !== null
      ? percent
      : Math.min(100, Math.max(5, Math.round((currentStep / totalSteps) * 100)));

  return (
    <div className="w-full max-w-xl mx-auto px-4 mb-6 sm:mb-8">
      <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#22C55E] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${calculatedPercent}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
