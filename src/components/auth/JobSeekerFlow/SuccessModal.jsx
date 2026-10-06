"use client";
import React from "react";
import { IoClose } from "react-icons/io5";
import { FiCheck } from "react-icons/fi";
import { useRouter } from "next/navigation";

const SuccessModal = ({ isOpen, onClose, onGoToDashboard }) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handleDashboardClick = () => {
    if (onGoToDashboard) {
      onGoToDashboard();
    } else {
      router.push("/dashboard");
    }
  };

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

          {/* Sparkles decorations */}
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

        {/* Title & Description */}
        <div className="mt-4 mb-8 space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
            Awesome, you can set up your profile
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
            The first step is done, to access the full range of what Trabino has
            to offer and start matching you with the best roles, we need more
            details. Upload your CV, connect your LinkedIn profile or edit your
            profile to completion.
          </p>
        </div>

        {/* Go to Dashboard button */}
        <div>
          <button
            type="button"
            onClick={handleDashboardClick}
            className="px-10 py-3 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-white text-sm font-semibold transition-all shadow-md active:scale-95 cursor-pointer"
          >
            Go to trabino dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
