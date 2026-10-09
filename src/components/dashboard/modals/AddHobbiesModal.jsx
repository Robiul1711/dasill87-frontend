"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoCloseCircle } from "react-icons/io5";
import { FiSearch, FiArrowUpRight, FiPlus, FiX } from "react-icons/fi";

const suggestedHobbies = [
  "Photography",
  "Digital Illustration",
  "Reading",
  "Traveling",
  "Chess",
  "Hiking",
  "Cooking",
  "Gaming",
  "Music & Guitar",
  "Open Source",
];

export default function AddHobbiesModal({
  isOpen,
  onClose,
  currentHobbies = [],
  onSaveHobbies,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedHobbies, setSelectedHobbies] = useState(currentHobbies);

  if (!isOpen) return null;

  const handleAddHobby = (hobbyName) => {
    if (selectedHobbies.length >= 5) {
      toast.error("You can add up to 5 hobbies maximum");
      return;
    }
    if (selectedHobbies.includes(hobbyName)) {
      toast.error("Hobby already added");
      return;
    }
    setSelectedHobbies([...selectedHobbies, hobbyName]);
  };

  const handleRemoveHobby = (hobbyName) => {
    setSelectedHobbies(selectedHobbies.filter((h) => h !== hobbyName));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    handleAddHobby(searchQuery.trim());
    setSearchQuery("");
  };

  const handleSave = () => {
    if (onSaveHobbies) {
      onSaveHobbies(selectedHobbies);
    }
    toast.success("Hobbies saved successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 dark:bg-[#151B2B] shadow-2xl border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-200">
        {/* Red Close (X) Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute right-5 top-5 text-rose-500 hover:text-rose-600 dark:text-rose-400 cursor-pointer transition-transform hover:scale-110"
        >
          <IoCloseCircle className="w-7 h-7" />
        </button>

        {/* Modal Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Add Hobbies
        </h3>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="relative mb-5">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search...."
            className="w-full h-12 pl-11 pr-4 text-xs sm:text-sm rounded-xl bg-[#FAFAFC] dark:bg-[#111625] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden focus:border-brand-blue transition-all"
          />
        </form>

        {/* Selected Hobbies Container */}
        <div className="mb-5">
          {selectedHobbies.length === 0 ? (
            <div className="flex min-h-35 items-center justify-center rounded-2xl border border-gray-200/90 dark:border-gray-800 bg-[#FAFAFC] dark:bg-[#111625] p-6 text-center">
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                No hobbies inserted
              </p>
            </div>
          ) : (
            <div className="min-h-25 p-4 rounded-2xl border border-gray-200/90 dark:border-gray-800 bg-[#FAFAFC] dark:bg-[#111625]">
              <div className="flex justify-between items-center mb-2.5">
                <span className="text-xs font-semibold text-secondary dark:text-gray-400">
                  Added Hobbies ({selectedHobbies.length}/5)
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedHobbies([])}
                  className="text-xs text-rose-500 hover:underline cursor-pointer"
                >
                  Clear
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedHobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue dark:bg-blue-950/60 dark:text-blue-400 text-xs font-medium border border-brand-blue/20"
                  >
                    <span>{hobby}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveHobby(hobby)}
                      className="hover:text-rose-500 cursor-pointer"
                    >
                      <FiX className="w-3.5 h-3.5" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Suggested Hobbies Suggestions */}
        <div className="mb-6">
          <span className="block text-xs font-semibold text-secondary dark:text-gray-400 mb-2">
            Suggested
          </span>
          <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto">
            {suggestedHobbies.map((h) => {
              const isAdded = selectedHobbies.includes(h);
              return (
                <button
                  key={h}
                  type="button"
                  onClick={() => !isAdded && handleAddHobby(h)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    isAdded
                      ? "bg-brand-blue text-white opacity-80"
                      : "bg-[#F4F5F7] dark:bg-[#111625] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                  }`}
                >
                  {isAdded ? "✓ " : "+ "}
                  {h}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white dark:bg-brand-blue dark:hover:bg-brand-blue-hover text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
          >
            <span>Save</span>
            <FiArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
