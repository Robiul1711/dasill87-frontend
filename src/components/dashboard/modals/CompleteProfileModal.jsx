"use client";

import React from "react";
import { IoCloseCircle } from "react-icons/io5";

export default function CompleteProfileModal({ isOpen, onClose, onCompleteNow }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 dark:bg-[#151B2B] shadow-2xl border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-200 text-center">
        {/* Red Close (X) Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute right-5 top-5 text-rose-500 hover:text-rose-600 dark:text-rose-400 cursor-pointer transition-transform hover:scale-110"
        >
          <IoCloseCircle className="w-7 h-7" />
        </button>

        {/* Sparkling Bubbles Graphic */}
        <div className="mx-auto my-4 flex items-center justify-center">
          <div className="relative flex h-24 w-24 items-center justify-center">
            {/* Pulsing glow ring */}
            <div className="absolute inset-0 rounded-full bg-blue-500/10 dark:bg-blue-500/20 animate-ping opacity-75" />

            {/* Blue dot clusters with stars */}
            <svg
              width="90"
              height="90"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative"
            >
              <circle cx="50" cy="20" r="7" fill="#0000F6" />
              <circle cx="36" cy="28" r="5" fill="#0000F6" />
              <circle cx="64" cy="28" r="4" fill="#0000F6" />
              <circle cx="28" cy="45" r="6" fill="#0000F6" />
              <circle cx="70" cy="45" r="4" fill="#0000F6" />
              <circle cx="38" cy="62" r="5" fill="#0000F6" />
              <circle cx="58" cy="64" r="6" fill="#0000F6" />
              <circle cx="48" cy="72" r="4.5" fill="#0000F6" />
              {/* Sparkles */}
              <path
                d="M74 54L76 48L78 54L84 56L78 58L76 64L74 58L68 56L74 54Z"
                fill="#0000F6"
              />
              <path
                d="M80 72L81 68L82 72L86 73L82 74L81 78L80 74L76 73L80 72Z"
                fill="#0000F6"
              />
            </svg>
          </div>
        </div>

        {/* Modal Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2.5">
          Complete Your Profile
        </h3>

        {/* Subtitle / Description */}
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm mx-auto mb-8">
          Complete your profile so you can receive matches and create documents.
          Without a completed profile, the results may be lower quality.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-7 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Remind Later
          </button>

          <button
            type="button"
            onClick={() => {
              if (onCompleteNow) onCompleteNow();
              onClose();
            }}
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-white dark:bg-brand-blue dark:hover:bg-brand-blue-hover text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
          >
            Complete Profile
          </button>
        </div>
      </div>
    </div>
  );
}
