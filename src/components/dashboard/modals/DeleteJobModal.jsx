"use client";

import React from "react";
import toast from "react-hot-toast";
import { IoCloseCircle, IoTrashOutline } from "react-icons/io5";

export default function DeleteJobModal({
  isOpen,
  onClose,
  jobTitle = "Software Engineer",
  companyName = "ABCD Company",
  onConfirmDelete,
}) {
  if (!isOpen) return null;

  const handleDelete = () => {
    if (onConfirmDelete) {
      onConfirmDelete();
    }
    toast.success(`${jobTitle} at ${companyName} has been deleted.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-8 dark:bg-[#151B2B] shadow-2xl border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-200 text-center">
        {/* Red Close (X) Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute right-5 top-5 text-rose-500 hover:text-rose-600 dark:text-rose-400 cursor-pointer transition-transform hover:scale-110"
        >
          <IoCloseCircle className="w-7 h-7" />
        </button>

        {/* Center Trash Icon */}
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 dark:bg-rose-950/30 text-rose-500 dark:text-rose-400">
          <IoTrashOutline className="w-9 h-9" />
        </div>

        {/* Content */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Are you sure you want to delete this job?
        </h3>
        <p className="text-xs sm:text-sm text-secondary dark:text-gray-400 mb-8">
          Your notes and artifacts will be lost.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 px-6 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className="flex-1 py-3 px-6 rounded-full bg-[#2A334B] hover:bg-[#1f2638] text-white text-sm font-semibold transition-all shadow-md cursor-pointer"
          >
            Delete this job
          </button>
        </div>
      </div>
    </div>
  );
}
