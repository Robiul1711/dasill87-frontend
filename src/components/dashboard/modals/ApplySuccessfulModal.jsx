"use client";

import React from "react";
import { FiCheck, FiArrowUpRight, FiX } from "react-icons/fi";

export default function ApplySuccessfulModal({
  isOpen,
  onClose,
  onGoToJobMatching,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white dark:bg-[#151B2B] rounded-3xl p-8 sm:p-12 text-center shadow-2xl border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <FiX className="w-5 h-5" />
        </button>

        {/* Green Badge with Sparkles */}
        <div className="relative inline-flex items-center justify-center mx-auto my-2">
          {/* Top-left sparkle */}
          <div className="absolute -top-3 -left-3 text-emerald-500 animate-pulse">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
          {/* Top-right sparkle */}
          <div className="absolute -top-2.5 -right-2 text-emerald-400 scale-75">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
          {/* Bottom-right sparkle */}
          <div className="absolute -bottom-2 -right-4 text-emerald-500 scale-90 animate-pulse">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
          {/* Bottom-left sparkle */}
          <div className="absolute -bottom-1 -left-2 text-emerald-400 scale-60">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>

          {/* Core Green Checkmark Circle */}
          <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#22C55E] text-white flex items-center justify-center shadow-lg shadow-emerald-500/25 ring-8 ring-emerald-500/10">
            <FiCheck className="w-9 h-9 sm:w-10 sm:h-10 stroke-[3.2]" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] dark:text-white mt-6 tracking-tight">
          Apply Successful
        </h3>

        {/* Subtitle / Description */}
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed max-w-sm mx-auto font-medium">
          At this stage, the job has been moved to your Applied Jobs list, and you will be notified once the interview process begins.
        </p>

        {/* Action Button */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={onGoToJobMatching}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2A344A] hover:bg-[#1f2638] text-white text-sm font-semibold transition-all shadow-md hover:scale-105 cursor-pointer"
          >
            <span>Go to Job Matching</span>
            <FiArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
