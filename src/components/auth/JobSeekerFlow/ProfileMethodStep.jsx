"use client";
import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";

const ProfileMethodStep = ({ onSelectMethod, onBack }) => {
  const [selected, setSelected] = useState(null);

  const methods = [
    {
      id: "linkedin",
      title: "Use your LinkedIn profile",
      desc: "Insert your LinkedIn link to automatically fill in your details. Quick and easy.",
      icon: (
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#0A66C2] flex items-center justify-center text-white text-lg lg:text-xl">
          <FaLinkedinIn className="w-5 h-5 lg:w-6 lg:h-6" />
        </div>
      ),
    },
    {
      id: "resume",
      title: "Upload your resume",
      desc: "Import your data instantly from your resume file. Supports PDF and DOC formats.",
      icon: (
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#7C3AED] flex items-center justify-center text-white text-lg lg:text-xl">
          <IoDocumentTextOutline className="w-5 h-5 lg:w-6 lg:h-6" />
        </div>
      ),
    },
    {
      id: "manual",
      title: "Enter information manually",
      desc: "Enter your details in just a few steps to complete your profile and start matching.",
      icon: (
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#2563EB] flex items-center justify-center text-white text-lg lg:text-xl">
          <HiOutlineDocumentText className="w-5 h-5 lg:w-6 lg:h-6" />
        </div>
      ),
    },
  ];

  const handleSelect = (methodId) => {
    setSelected(methodId);
    if (onSelectMethod) {
      onSelectMethod(methodId);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 sm:py-10">
      {/* Heading */}
      <div className="text-center sm:text-left mb-8 lg:mb-10 max-w-3xl mx-auto">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E293B] leading-snug tracking-tight">
          Upload your CV, link your LinkedIn profile or fill in the information
          manually - Trabino will take care of the rest.
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
        {methods.map((method) => (
          <div
            key={method.id}
            onClick={() => handleSelect(method.id)}
            className={`p-6 lg:p-8 rounded-3xl border bg-[#F8FAFC] hover:bg-white transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-2xs hover:shadow-md group ${
              selected === method.id
                ? "border-[#2563EB] ring-2 ring-[#2563EB]/20 bg-white"
                : "border-slate-200/80 hover:border-slate-300"
            }`}
          >
            <div>
              <div className="mb-6">{method.icon}</div>
              <h3 className="text-lg lg:text-xl font-bold text-[#1E293B] mb-2.5 group-hover:text-[#2563EB] transition-colors">
                {method.title}
              </h3>
              <p className="text-sm lg:text-base text-slate-500 leading-relaxed">
                {method.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Back button */}
      <div className="max-w-5xl mx-auto">
        <button
          type="button"
          onClick={onBack}
          className="px-8 py-2.5 lg:px-10 lg:py-3 rounded-full border border-slate-300 hover:bg-slate-100 text-sm lg:text-base font-medium text-slate-700 transition-colors cursor-pointer"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ProfileMethodStep;
