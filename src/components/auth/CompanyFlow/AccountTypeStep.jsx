"use client";
import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiOutlineUsers } from "react-icons/hi2";

const AccountTypeStep = ({ onContinue, initialType = "standard" }) => {
  const [selectedType, setSelectedType] = useState(initialType);

  const types = [
    {
      id: "standard",
      title: "Standard company",
      subtitle:
        "Standard company account for direct hiring and workforce management.",
      icon: (
        <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-2xl bg-[#F1F5F9] flex items-center justify-center text-[#1E293B]">
          <HiOutlineBuildingOffice2 className="w-6 h-6" />
        </div>
      ),
      features: [
        "Post job openings",
        "AI-powered candidate matching",
        "Direct application management",
      ],
    },
    {
      id: "agency",
      title: "Temporary Agency",
      subtitle:
        "Agency account with advanced worker management and placement features.",
      icon: (
        <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-2xl bg-[#F1F5F9] flex items-center justify-center text-[#1E293B]">
          <HiOutlineUsers className="w-6 h-6" />
        </div>
      ),
      features: [
        "Manage worker roster",
        "Create custom job offers",
        "Assignment tracking",
      ],
    },
  ];

  const handleContinue = () => {
    onContinue(selectedType);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 sm:py-10">
      {/* Title & Subtitle */}
      <div className="text-center mb-8 lg:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B] mb-2.5 tracking-tight">
          Choose Your Account Type
        </h1>
        <p className="text-sm lg:text-base text-slate-500">
          Select the option that best describes your organization
        </p>
      </div>

      {/* 2 Account Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
        {types.map((type) => {
          const isSelected = selectedType === type.id;
          return (
            <div
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`p-6 lg:p-8 rounded-3xl border transition-all duration-200 cursor-pointer flex flex-col justify-between select-none ${
                isSelected
                  ? "border-[#29324B] bg-white ring-2 ring-[#29324B]/15 shadow-md"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs"
              }`}
            >
              <div>
                <div className="mb-5">{type.icon}</div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#1E293B] mb-2">
                  {type.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-slate-500 leading-relaxed mb-6">
                  {type.subtitle}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {type.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm lg:text-base text-slate-600 font-medium"
                    >
                      <FiCheck className="w-4 h-4 lg:w-5 lg:h-5 text-slate-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Continue Button */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleContinue}
          className="px-12 py-3 lg:px-14 lg:py-3.5 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-sm lg:text-base font-semibold text-white transition-all shadow-md active:scale-95 cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AccountTypeStep;
