"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoCloseCircle } from "react-icons/io5";
import { FiArrowUpRight, FiStar, FiTrendingUp, FiTarget, FiInfo } from "react-icons/fi";

export default function CompatibilityScoreModal({
  isOpen,
  onClose,
  initialScore = 60,
  onSaveScore,
}) {
  const [score, setScore] = useState(initialScore);

  if (!isOpen) return null;

  // Determine mode based on score
  let modeInfo = {
    label: "Broad Search",
    icon: FiStar,
    badgeBg: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400",
    activeCard: 1,
  };

  if (score >= 75) {
    modeInfo = {
      label: "Only top matches",
      icon: FiTarget,
      badgeBg: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400",
      activeCard: 3,
    };
  } else if (score >= 45) {
    modeInfo = {
      label: "Balanced search",
      icon: FiTrendingUp,
      badgeBg: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400",
      activeCard: 2,
    };
  }

  const ModeIcon = modeInfo.icon;

  const handleSave = () => {
    if (onSaveScore) {
      onSaveScore(score);
    }
    toast.success(`Match compatibility level set to ${score}%!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 dark:bg-[#151B2B] shadow-2xl border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        {/* Red Close (X) Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute right-5 top-5 text-rose-500 hover:text-rose-600 dark:text-rose-400 cursor-pointer transition-transform hover:scale-110"
        >
          <IoCloseCircle className="w-7 h-7" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-3 mb-6">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-emerald-500 text-emerald-500 mt-0.5">
            <div className="h-3.5 w-3.5 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
              Set the minimum Match Compatibility level.
            </h3>
            <p className="text-xs sm:text-sm text-secondary dark:text-gray-400 mt-0.5">
              Select a minimum match percentage to refine your job recommendations.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-5 space-y-6">
          {/* Mode Indicator & Percentage Badge */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4F5F7] dark:bg-[#111625] text-gray-700 dark:text-gray-300">
                <ModeIcon className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                {modeInfo.label}
              </span>
            </div>
            <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 text-xs font-bold">
              {score}%
            </span>
          </div>

          {/* Interactive Range Slider */}
          <div>
            <input
              type="range"
              min="20"
              max="95"
              step="5"
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
              className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-xs text-secondary dark:text-gray-400 mt-2 font-medium">
              <span>Broad Search</span>
              <span>Only top matches</span>
            </div>
          </div>

          {/* Preview of match quality */}
          <div>
            <h4 className="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Preview of match quality
            </h4>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {/* Card 1: 35% */}
              <div
                onClick={() => setScore(35)}
                className={`relative p-3 sm:p-4 rounded-2xl border cursor-pointer transition-all ${
                  modeInfo.activeCard === 1
                    ? "border-rose-400 bg-rose-50/20 dark:bg-rose-950/10 shadow-xs"
                    : "border-gray-200/80 dark:border-gray-800 bg-white dark:bg-[#111625]"
                }`}
              >
                {modeInfo.activeCard === 1 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-white text-[10px]">
                    ●
                  </span>
                )}
                <span
                  className={`inline-block text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full mb-3 ${
                    modeInfo.activeCard === 1
                      ? "bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400"
                      : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                  }`}
                >
                  Compatibility 35%
                </span>
                <div className="space-y-1.5 opacity-60">
                  <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full w-4/5" />
                  <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full w-full" />
                  <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4" />
                </div>
              </div>

              {/* Card 2: 70% */}
              <div
                onClick={() => setScore(60)}
                className={`relative p-3 sm:p-4 rounded-2xl border cursor-pointer transition-all ${
                  modeInfo.activeCard === 2
                    ? "border-amber-400 bg-amber-50/20 dark:bg-amber-950/10 shadow-xs"
                    : "border-gray-200/80 dark:border-gray-800 bg-white dark:bg-[#111625]"
                }`}
              >
                {modeInfo.activeCard === 2 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-white text-[10px]">
                    ●
                  </span>
                )}
                <span
                  className={`inline-block text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full mb-3 ${
                    modeInfo.activeCard === 2
                      ? "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400"
                      : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                  }`}
                >
                  Compatibility 70%
                </span>
                <div className="space-y-1.5 opacity-60">
                  <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full w-4/5" />
                  <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full w-full" />
                  <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4" />
                </div>
              </div>

              {/* Card 3: 90% */}
              <div
                onClick={() => setScore(90)}
                className={`relative p-3 sm:p-4 rounded-2xl border cursor-pointer transition-all ${
                  modeInfo.activeCard === 3
                    ? "border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/10 shadow-xs"
                    : "border-gray-200/80 dark:border-gray-800 bg-white dark:bg-[#111625]"
                }`}
              >
                {modeInfo.activeCard === 3 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white text-[10px]">
                    ●
                  </span>
                )}
                <span
                  className={`inline-block text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full mb-3 ${
                    modeInfo.activeCard === 3
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400"
                      : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                  }`}
                >
                  Compatibility 90%
                </span>
                <div className="space-y-1.5 opacity-60">
                  <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full w-4/5" />
                  <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full w-full" />
                  <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4" />
                </div>
              </div>
            </div>
          </div>

          {/* Info Alert Box */}
          <div className="p-3.5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 flex items-start gap-3">
            <FiInfo className="w-5 h-5 text-brand-blue dark:text-blue-400 shrink-0 mt-0.5" />
            <p className="text-xs text-brand-blue dark:text-blue-300 leading-relaxed">
              You&apos;ll see more jobs, but with lower match relevance. Don&apos;t be alarmed if you see some suggestions that are way out there!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white dark:bg-brand-blue dark:hover:bg-brand-blue-hover text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
            >
              <span>Save changes</span>
              <FiArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
