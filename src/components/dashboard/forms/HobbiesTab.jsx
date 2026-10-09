"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { FiPlus, FiX, FiArrowUpRight } from "react-icons/fi";
import { HobbiesIcon } from "@/components/icons/DashboardIcons";
import AddHobbiesModal from "@/components/dashboard/modals/AddHobbiesModal";

export default function HobbiesTab() {
  const [hobbies, setHobbies] = useState([]);
  const [isHobbiesModalOpen, setIsHobbiesModalOpen] = useState(false);

  const handleRemoveHobby = (hobbyName) => {
    setHobbies(hobbies.filter((h) => h !== hobbyName));
    toast.success("Hobby removed");
  };

  const handleSave = () => {
    toast.success("Hobbies saved successfully!");
  };

  return (
    <div className="rounded-2xl bg-white p-5 sm:p-7 border border-gray-100 shadow-xs dark:bg-[#151B2B] dark:border-gray-800/80 transition-all duration-200">
      {/* Top Header Card */}
      <div className="flex items-center justify-between pb-6 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-blue-950/60 dark:text-blue-400">
            <HobbiesIcon className="h-5 w-5" color="#0000F6" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              Hobbies
            </h3>
            <p className="text-xs sm:text-[13px] text-secondary dark:text-gray-400">
              Add up to 5 hobbies, they&apos;ll appear in your generated documents.
            </p>
          </div>
        </div>

        {/* Top Right Add Button */}
        <button
          type="button"
          onClick={() => setIsHobbiesModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer shrink-0"
        >
          <FiPlus className="w-3.5 h-3.5 text-secondary dark:text-gray-400" />
          <span>Add</span>
        </button>
      </div>

      <div className="pt-6 space-y-6">
        {/* Hobbies Container: Empty or Filled */}
        {hobbies.length === 0 ? (
          <div
            onClick={() => setIsHobbiesModalOpen(true)}
            className="flex min-h-40 items-center justify-center rounded-2xl border border-gray-200/90 dark:border-gray-800 bg-white dark:bg-[#111625] p-8 text-center cursor-pointer hover:border-brand-blue/60 transition-colors"
          >
            <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
              No hobbies inserted, please add
            </p>
          </div>
        ) : (
          <div className="min-h-35 p-6 rounded-2xl border border-gray-200/90 dark:border-gray-800 bg-white dark:bg-[#111625]">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-semibold text-secondary dark:text-gray-400">
                Your Hobbies ({hobbies.length}/5)
              </span>
              <button
                type="button"
                onClick={() => setIsHobbiesModalOpen(true)}
                className="text-xs font-semibold text-brand-blue hover:underline cursor-pointer"
              >
                + Edit / Add More
              </button>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {hobbies.map((hobby) => (
                <span
                  key={hobby}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4F5F7] dark:bg-[#1C2438] text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-2xs"
                >
                  <span>{hobby}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveHobby(hobby)}
                    className="text-gray-400 hover:text-rose-500 cursor-pointer"
                  >
                    <FiX className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Save Button */}
        <div className="flex justify-end pt-4">
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary hover:bg-primary/90 text-white dark:bg-brand-blue dark:hover:bg-brand-blue-hover text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Save</span>
            <FiArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add Hobbies Modal */}
      <AddHobbiesModal
        isOpen={isHobbiesModalOpen}
        onClose={() => setIsHobbiesModalOpen(false)}
        currentHobbies={hobbies}
        onSaveHobbies={(updatedHobbies) => setHobbies(updatedHobbies)}
      />
    </div>
  );
}
