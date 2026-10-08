"use client";
import React from "react";
import { FiCheck, FiChevronRight } from "react-icons/fi";

const STEPS = [
  { id: 1, stepNumber: "01", label: "Account" },
  { id: 2, stepNumber: "02", label: "Profile" },
  { id: 3, stepNumber: "04", label: "Preferences" },
  { id: 4, stepNumber: "05", label: "Plan" },
];

const CompanyStepper = ({ currentStepIndex = 1 }) => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 mb-8 lg:mb-10">
      <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
        {STEPS.map((step, idx) => {
          const isCompleted = currentStepIndex > step.id;
          const isActive = currentStepIndex === step.id;

          return (
            <React.Fragment key={step.id}>
              <div className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-xs lg:text-sm font-semibold transition-all ${
                    isCompleted
                      ? "bg-[#29324B] text-white"
                      : isActive
                      ? "bg-[#29324B] text-white shadow-xs"
                      : "border border-slate-300 bg-white text-slate-400"
                  }`}
                >
                  {isCompleted ? (
                    <FiCheck className="w-3.5 h-3.5 lg:w-4 lg:h-4 stroke-[3]" />
                  ) : (
                    step.stepNumber
                  )}
                </div>
                <span
                  className={`text-xs lg:text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-[#1E293B]"
                      : isCompleted
                      ? "text-slate-700"
                      : "text-slate-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {idx < STEPS.length - 1 && (
                <FiChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyStepper;
