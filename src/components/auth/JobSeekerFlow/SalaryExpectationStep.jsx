"use client";
import React, { useState } from "react";
import { FiArrowLeft, FiChevronDown } from "react-icons/fi";
import ProgressBar from "./ProgressBar";

const SalaryExpectationStep = ({
  initialSalary = "50000",
  initialCurrency = "$",
  onContinue,
  onBack,
}) => {
  const [salary, setSalary] = useState(initialSalary);
  const [currency, setCurrency] = useState(initialCurrency);

  const handleSalaryChange = (e) => {
    // Keep numbers only
    const val = e.target.value.replace(/\D/g, "");
    setSalary(val);
  };

  const formatNumber = (numStr) => {
    if (!numStr) return "";
    return Number(numStr).toLocaleString();
  };

  const handleSave = (e) => {
    e.preventDefault();
    onContinue({
      salary: salary ? Number(salary) : 0,
      currency,
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-8">
      {/* Progress Bar */}
      <ProgressBar percent={90} />

      <div className="max-w-xl lg:max-w-2xl mx-auto">
        {/* Header with back */}
        <div className="flex items-center gap-3 mb-6 lg:mb-8">
          <button
            type="button"
            onClick={onBack}
            className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
            aria-label="Go back"
          >
            <FiArrowLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E293B] tracking-tight">
            Set your minimum annual salary expectation.
          </h1>
        </div>

        <form onSubmit={handleSave} className="space-y-4 lg:space-y-5">
          <div>
            <label className="block text-sm lg:text-base font-medium text-slate-700 mb-2">
              Minimum annual gross salary
            </label>
            <div className="relative flex items-center">
              <div className="w-full relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base lg:text-lg font-medium text-slate-500">
                  {currency}
                </span>
                <input
                  type="text"
                  placeholder="50,000"
                  value={formatNumber(salary)}
                  onChange={handleSalaryChange}
                  className="w-full h-13 lg:h-14 pl-10 pr-24 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-base lg:text-lg font-medium text-[#1E293B] focus:outline-hidden focus:border-[#29324B]"
                />
              </div>

              {/* Currency Selector */}
              <div className="absolute right-4 flex items-center">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="h-9 px-2 pr-6 rounded-lg bg-transparent text-sm lg:text-base font-semibold text-slate-700 focus:outline-hidden appearance-none cursor-pointer"
                >
                  <option value="$">$ USD</option>
                  <option value="CHF">CHF</option>
                  <option value="€">€ EUR</option>
                  <option value="£">£ GBP</option>
                </select>
                <FiChevronDown className="w-4 h-4 text-slate-400 -ml-4 pointer-events-none" />
              </div>
            </div>

            <p className="text-xs lg:text-sm text-slate-400 mt-2.5 leading-relaxed">
              This minimum salary will heavily impact the positions we match
              with you. You can adjust this setting anytime in your job
              preferences settings.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-4 pt-6 lg:pt-8">
            <button
              type="button"
              onClick={onBack}
              className="px-8 lg:px-10 py-2.5 lg:py-3 rounded-full border border-slate-300 hover:bg-slate-100 text-sm lg:text-base font-medium text-slate-700 transition-colors cursor-pointer"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-8 lg:px-10 py-2.5 lg:py-3 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-sm lg:text-base font-semibold text-white transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              Save &amp; Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SalaryExpectationStep;
