import React from "react";
import { FiCheck, FiZap, FiShield } from "react-icons/fi";

export const metadata = {
  title: "Subscription & Plans | Trabino Company Portal",
  description: "Manage your company subscription plan, candidate unlocks, and billing history.",
};

const plans = [
  {
    name: "Starter",
    price: "€99",
    period: "/month",
    description: "Great for small teams hiring occasionally.",
    features: [
      "Up to 3 Active Job Postings",
      "25 Candidate Matches / month",
      "Basic Applicant Tracking",
      "Email Support",
    ],
    current: false,
  },
  {
    name: "Pro Agency",
    price: "€249",
    period: "/month",
    description: "Best for growing businesses with regular hiring needs.",
    features: [
      "Unlimited Active Job Postings",
      "Unlimited AI Candidate Matches",
      "Direct Messaging & Video Invites",
      "Custom Candidate Assessments",
      "Dedicated Account Manager",
    ],
    current: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored hiring suite for high-volume staffing firms.",
    features: [
      "Custom ATS Integrations",
      "Multi-branch access & Team Roles",
      "AI Resume Parsing Pipeline",
      "24/7 SLA Priority Support",
    ],
    current: false,
  },
];

export default function SubscriptionPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          Company Subscription
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
          Manage your plan, billing invoices, and talent unlock credits.
        </p>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`p-6 rounded-2xl flex flex-col justify-between transition-all ${
              plan.current
                ? "bg-white dark:bg-[#151B2B] border-2 border-blue-600 shadow-lg relative"
                : "bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-xs"
            }`}
          >
            {plan.current && (
              <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider">
                Current Plan
              </span>
            )}

            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 min-h-[32px]">
                {plan.description}
              </p>

              <div className="my-5 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-xs text-gray-400">{plan.period}</span>
              </div>

              <ul className="space-y-3 text-xs text-gray-600 dark:text-gray-300">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800">
              <button
                type="button"
                className={`w-full py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                  plan.current
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
                }`}
              >
                {plan.current ? "Active Plan" : "Upgrade Plan"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
