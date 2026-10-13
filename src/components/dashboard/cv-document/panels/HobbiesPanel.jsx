"use client";

import React, { useState } from "react";
import { FiArrowLeft, FiPlus, FiX } from "react-icons/fi";
import toast from "react-hot-toast";

export default function HobbiesPanel({ cvData, setCvData, onBack }) {
  const [hobbyInput, setHobbyInput] = useState("");

  const handleAddHobby = (e) => {
    e?.preventDefault();
    if (!hobbyInput.trim()) return;

    const trimmed = hobbyInput.trim();
    if ((cvData.hobbies || []).includes(trimmed)) {
      toast.error(`${trimmed} is already in your hobbies.`);
      return;
    }

    setCvData((prev) => ({
      ...prev,
      hobbies: [...(prev.hobbies || []), trimmed],
    }));

    setHobbyInput("");
    toast.success("Hobby added!");
  };

  const handleRemoveHobby = (hobbyName) => {
    setCvData((prev) => ({
      ...prev,
      hobbies: (prev.hobbies || []).filter((h) => h !== hobbyName),
    }));
  };

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-300">
      {/* Back button */}
      <div className="pb-2">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-base font-bold text-[#1E293B] dark:text-white hover:text-brand-blue dark:hover:text-blue-400 transition-colors cursor-pointer group"
        >
          <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Hobbies</span>
        </button>
      </div>

      {/* Hobbies Card */}
      <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-xs space-y-5">
        {/* Input Bar with inline 'Add +' Button */}
        <form onSubmit={handleAddHobby} className="relative flex items-center">
          <input
            type="text"
            value={hobbyInput}
            onChange={(e) => setHobbyInput(e.target.value)}
            placeholder="Add Hobby"
            className="w-full h-12 pl-4 pr-24 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
          />
          <button
            type="submit"
            className="absolute right-2 px-4 py-2 rounded-lg bg-[#0052FF] hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1 transition-all shadow-xs cursor-pointer hover:scale-105"
          >
            <span>Add</span>
            <FiPlus className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Tag pills list */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-2.5">
            {(cvData.hobbies || []).map((hobby) => (
              <span
                key={hobby}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5E7EB]/70 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium border border-gray-300/40 dark:border-gray-700/60 transition-all hover:bg-gray-200"
              >
                <span>{hobby}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveHobby(hobby)}
                  className="hover:text-rose-600 transition-colors cursor-pointer ml-0.5"
                  aria-label={`Remove ${hobby}`}
                >
                  <FiX className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
