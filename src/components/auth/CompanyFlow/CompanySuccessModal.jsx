"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FiCheck, FiPlus } from "react-icons/fi";

const CompanySuccessModal = ({
  isOpen,
  onClose,
  onPostJob,
  onGoToDashboard,
}) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handleDashboard = () => {
    if (onGoToDashboard) {
      onGoToDashboard();
    } else {
      router.push("/company/dashboard");
    }
  };

  const handlePostJob = () => {
    if (onPostJob) {
      onPostJob();
    } else {
      router.push("/company/post-job");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100 text-center">
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

        {/* Title & Subtitle */}
        <div className="mt-4 mb-8 space-y-3">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E293B] tracking-tight">
            Your registration has been successfully completed!
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-500 leading-relaxed max-w-md mx-auto">
            Your company profile is ready. You can now post jobs and view
            AI-matched candidates.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            type="button"
            onClick={handlePostJob}
            className="px-6 py-3 rounded-full border border-slate-300 hover:bg-slate-100 text-sm lg:text-base font-semibold text-slate-700 flex items-center gap-2 transition-colors cursor-pointer"
          >
            <span>Post a Job</span>
            <div className="w-4 h-4 rounded border border-slate-400 flex items-center justify-center text-[10px]">
              <FiPlus />
            </div>
          </button>
          <button
            type="button"
            onClick={handleDashboard}
            className="px-8 py-3 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-white text-sm lg:text-base font-semibold transition-all shadow-md active:scale-95 cursor-pointer"
          >
            Go to dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanySuccessModal;
