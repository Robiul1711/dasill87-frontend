"use client";
import React from "react";
import { IoClose } from "react-icons/io5";
import { FiCheck } from "react-icons/fi";

const EmailVerifiedModal = ({ isOpen, onClose, onContinue }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100 text-center">
        {/* Red close button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 w-7 h-7 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-xs hover:bg-[#DC2626] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <IoClose className="w-5 h-5" />
        </button>

        {/* Green sparkling checkmark */}
        <div className="relative inline-flex items-center justify-center my-4">
          <div className="w-20 h-20 rounded-full bg-[#22C55E] flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <FiCheck className="w-10 h-10 text-white stroke-[3]" />
          </div>

          <span className="absolute -top-1 -left-2 text-emerald-400 text-lg animate-pulse">
            ✦
          </span>
          <span className="absolute top-1 -right-2 text-emerald-500 text-sm">
            ✦
          </span>
          <span className="absolute -bottom-1 -right-3 text-emerald-400 text-xl animate-bounce">
            ✦
          </span>
          <span className="absolute -bottom-2 -left-1 text-emerald-500 text-xs">
            ✦
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E293B] mt-4 mb-8">
          Your email has been verified completed!
        </h2>

        {/* Continue Button */}
        <div>
          <button
            type="button"
            onClick={onContinue}
            className="px-12 py-3 lg:px-14 lg:py-3.5 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-white text-sm lg:text-base font-semibold transition-all shadow-md active:scale-95 cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerifiedModal;
