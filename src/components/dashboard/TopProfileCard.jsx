"use client";

import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoSyncOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

export default function TopProfileCard({ onOpenUploadModal }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-5 sm:p-6 border border-gray-100 shadow-xs dark:bg-[#151B2B] dark:border-gray-800/80 flex flex-col justify-between transition-all duration-200">
      <div>
        {/* Title */}
        <div className="flex items-center gap-2.5 mb-3">
          <IoSyncOutline className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
            Top profile
          </h2>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">
          Adding your CV or syncing LinkedIn helps fill in your profile details
          automatically. Once you&apos;ve done that or updated your profile manually,
          this message will go away. Please take a moment to review your
          information for completeness.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-5 sm:pt-6">
        {/* Upload CV Button */}
        <button
          onClick={onOpenUploadModal}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#1E2538] hover:bg-[#151a29] text-white dark:bg-white dark:text-[#111827] dark:hover:bg-gray-100 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm cursor-pointer group"
        >
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 dark:bg-black/10 group-hover:translate-x-0.5 transition-transform">
            <HiOutlineArrowNarrowRight className="w-3.5 h-3.5" />
          </span>
          <span>Upload CV</span>
        </button>

        {/* Connect with LinkedIn Button */}
        <button
          onClick={() => {
            window.open("https://www.linkedin.com", "_blank");
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
        >
          <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />
          <span>Connect with Linkedin</span>
        </button>
      </div>
    </div>
  );
}
