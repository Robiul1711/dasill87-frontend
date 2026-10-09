"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoCloseCircle } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

const rejectOptions = [
  { id: "skills_mismatch", label: "Skills/experience mismatch", icon: "🧠" },
  { id: "salary_low", label: "Salary too low", icon: "💰", defaultSelected: true },
  { id: "wrong_industry", label: "Wrong industry", icon: "🧭" },
  { id: "too_junior", label: "Too junior", icon: "🪜" },
  { id: "too_senior", label: "Too senior", icon: "🏔️" },
  { id: "location_mismatch", label: "Location mismatch", icon: "🌍", defaultSelected: true },
  { id: "bad_timing", label: "Bad timing", icon: "🗓️" },
  { id: "culture_mismatch", label: "Culture mismatch", icon: "🧑‍🤝‍🧑" },
];

export default function RejectFeedbackModal({
  isOpen,
  onClose,
  jobTitle = "Software Engineer",
  onConfirmReject,
}) {
  const [selected, setSelected] = useState(["salary_low", "location_mismatch"]);

  if (!isOpen) return null;

  const toggleOption = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleContinue = () => {
    if (onConfirmReject) {
      onConfirmReject(selected);
    }
    toast.success(`Job rejected. Matching criteria updated!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-5 sm:p-8 dark:bg-[#151B2B] shadow-2xl border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-200">
        {/* Red Close (X) Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute right-5 top-5 text-rose-500 hover:text-rose-600 dark:text-rose-400 cursor-pointer transition-transform hover:scale-110"
        >
          <IoCloseCircle className="w-7 h-7" />
        </button>

        {/* Header */}
        <div className="text-center max-w-md mx-auto mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Improve my matches
          </h3>
          <p className="text-xs sm:text-sm text-secondary dark:text-gray-400 leading-relaxed">
            Your feedback makes recommendations better.
            <br />
            Why isn&apos;t this a fit? Choose all that apply.
          </p>
        </div>

        {/* Options List Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 py-4 mb-6">
          {rejectOptions.map((opt) => {
            const isSelected = selected.includes(opt.id);
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => toggleOption(opt.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "border-2 border-orange-500 bg-orange-50/20 dark:bg-orange-950/20 text-gray-900 dark:text-white shadow-2xs"
                    : "border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111625] text-gray-700 dark:text-gray-300 hover:border-gray-300"
                }`}
              >
                <span>{opt.icon}</span>
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
          <button
            type="button"
            onClick={onClose}
            className="text-xs sm:text-sm font-semibold text-secondary hover:text-gray-900 dark:text-gray-400 dark:hover:text-white cursor-pointer px-2 py-1"
          >
            Skip
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Back
            </button>

            <button
              type="button"
              onClick={handleContinue}
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#2A334B] hover:bg-[#1f2638] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
            >
              <span>Continue</span>
              <FiArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
