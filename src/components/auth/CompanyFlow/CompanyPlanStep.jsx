"use client";
import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import CompanyStepper from "./CompanyStepper";

const PLANS = [
  {
    id: "free",
    name: "Free",
    subtitle: "Perfect for trying out the platform",
    price: "$0 USD",
    period: "per month",
    features: [
      "1 Job post per month",
      "Basic Candidate Matching",
      "Standard Support",
      "30-day Post Duration",
      "Standard job visibility",
    ],
  },
  {
    id: "pro",
    name: "Pro Plan",
    subtitle: "For growing companies",
    price: "$49 USD",
    period: "per month",
    isPopular: true,
    features: [
      "10 Active Job posts",
      "AI Candidate Matching",
      "Advanced Analytics",
      "Priority Support",
      "Team Collaboration",
    ],
  },
  {
    id: "business",
    name: "Business / Agency",
    subtitle: "For large organizations",
    price: "$149 USD",
    period: "per month",
    features: [
      "Unlimited Job Posts",
      "Premium AI Matching",
      "Dedicated Support",
      "Maximum job Visibility",
      "Advanced analytics",
      "Team collaborations",
      "Custom Brandings",
    ],
  },
];

const CompanyPlanStep = ({ onContinue, onSkip }) => {
  const [selectedPlan, setSelectedPlan] = useState("pro");

  const handleContinue = () => {
    onContinue(selectedPlan);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4 sm:py-8">
      {/* Stepper (Step 05) */}
      <CompanyStepper currentStepIndex={4} />

      {/* Heading */}
      <div className="text-center mb-8 lg:mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B] mb-2 tracking-tight">
          Choose Your Plan
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-slate-400">
          You can upgrade or downgrade anytime
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8 items-stretch">
        {PLANS.map((plan) => {
          const isSelected = selectedPlan === plan.id;
          return (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative rounded-3xl p-6 lg:p-8 border transition-all duration-200 cursor-pointer flex flex-col justify-between select-none ${
                isSelected
                  ? "border-[#29324B] bg-white ring-2 ring-[#29324B]/20 shadow-lg"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#29324B] text-white text-[11px] lg:text-xs font-semibold px-4 py-1 rounded-full shadow-xs">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-lg lg:text-xl font-bold text-[#1E293B] mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs lg:text-sm text-slate-400 mb-6">
                  {plan.subtitle}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B]">
                    {plan.price}
                  </span>
                  <span className="text-xs lg:text-sm text-slate-400 ml-1.5">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3.5 pt-4 border-t border-slate-100">
                  {plan.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 font-medium"
                    >
                      <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                        <FiCheck className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info Banner */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-center gap-3 text-xs sm:text-sm text-indigo-900 leading-relaxed">
          <HiSparkles className="w-5 h-5 text-indigo-600 shrink-0" />
          <span>
            You can post 1 job for free. Upgrade anytime to unlock more features.
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <button
          type="button"
          onClick={onSkip}
          className="px-8 lg:px-10 py-2.5 lg:py-3 rounded-full border border-slate-300 hover:bg-slate-100 text-sm lg:text-base font-medium text-slate-700 transition-colors cursor-pointer"
        >
          Skip for now
        </button>
        <button
          type="button"
          onClick={handleContinue}
          className="px-8 lg:px-12 py-2.5 lg:py-3 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-sm lg:text-base font-semibold text-white transition-all shadow-md active:scale-95 cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CompanyPlanStep;
