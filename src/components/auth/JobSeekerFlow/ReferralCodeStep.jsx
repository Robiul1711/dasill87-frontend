"use client";
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const ReferralCodeStep = ({ initialData = {}, onContinue, onSkip }) => {
  const [hasCode, setHasCode] = useState(
    initialData.hasReferralCode ?? true
  );
  const [referralCode, setReferralCode] = useState(
    initialData.referralCode || ""
  );

  const handleContinue = (e) => {
    e.preventDefault();
    onContinue({
      hasReferralCode: hasCode,
      referralCode: hasCode ? referralCode : "",
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4 sm:py-8">
      {/* Progress Bar (Step 1) */}
      <ProgressBar percent={10} />

      <div className="max-w-xl mx-auto">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E293B] mb-6 lg:mb-8 tracking-tight">
          Do you have a referral code?
        </h1>

        <form onSubmit={handleContinue} className="space-y-4 lg:space-y-5">
          {/* Option: Yes */}
          <div
            onClick={() => setHasCode(true)}
            className={`w-full p-4 lg:p-5 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
              hasCode
                ? "border-[#22C55E] bg-emerald-50/30 ring-1 ring-[#22C55E]/20"
                : "border-slate-200 bg-[#F8FAFC] hover:bg-slate-100/80"
            }`}
          >
            <div
              className={`w-5 h-5 lg:w-6 lg:h-6 rounded-full border flex items-center justify-center transition-colors ${
                hasCode
                  ? "border-[#22C55E] bg-white"
                  : "border-slate-400 bg-white"
              }`}
            >
              {hasCode && (
                <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#22C55E]" />
              )}
            </div>
            <span className="text-sm lg:text-base font-medium text-[#1E293B]">
              Yes, I have a code.
            </span>
          </div>

          {/* Option: No */}
          <div
            onClick={() => setHasCode(false)}
            className={`w-full p-4 lg:p-5 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
              !hasCode
                ? "border-[#22C55E] bg-emerald-50/30 ring-1 ring-[#22C55E]/20"
                : "border-slate-200 bg-[#F8FAFC] hover:bg-slate-100/80"
            }`}
          >
            <div
              className={`w-5 h-5 lg:w-6 lg:h-6 rounded-full border flex items-center justify-center transition-colors ${
                !hasCode
                  ? "border-[#22C55E] bg-white"
                  : "border-slate-400 bg-white"
              }`}
            >
              {!hasCode && (
                <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#22C55E]" />
              )}
            </div>
            <span className="text-sm lg:text-base font-medium text-[#1E293B]">
              No, I don&apos;t have a code.
            </span>
          </div>

          {/* Input field if Yes is selected */}
          {hasCode && (
            <div className="pt-2 animate-fade-in">
              <label className="block text-xs lg:text-sm font-medium text-slate-600 mb-1.5">
                Referral code
              </label>
              <input
                type="text"
                placeholder="code here"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                className="w-full h-12 lg:h-13 px-4 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:outline-hidden focus:border-[#29324B] text-sm lg:text-base text-[#1E293B] placeholder:text-slate-400"
              />
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-4 pt-6 lg:pt-8">
            <button
              type="button"
              onClick={onSkip}
              className="px-8 py-2.5 lg:px-10 lg:py-3 rounded-full border border-slate-300 hover:bg-slate-100 text-sm lg:text-base font-medium text-slate-700 transition-colors cursor-pointer"
            >
              Skip
            </button>
            <button
              type="submit"
              className="px-8 py-2.5 lg:px-10 lg:py-3 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-sm lg:text-base font-semibold text-white transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferralCodeStep;
