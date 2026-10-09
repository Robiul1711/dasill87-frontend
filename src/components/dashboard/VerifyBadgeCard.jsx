"use client";

import React from "react";
import { HiCheckCircle } from "react-icons/hi2";
import { FiCheck } from "react-icons/fi";
import { RiShieldCheckFill } from "react-icons/ri";

export default function VerifyBadgeCard({ percentage = 47, onOpenCompleteModal }) {
  // SVG Circular progress calculations
  const size = 110;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-5 sm:p-6 border border-gray-100 shadow-xs dark:bg-[#151B2B] dark:border-gray-800/80 transition-all duration-200">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left Section: Badge Title + Checklist */}
        <div className="flex-1 space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-blue-950/60 dark:text-blue-400">
              <RiShieldCheckFill className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                Earned your verify Badge
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-normal">
                Complete these steps to start receiving matches.
              </p>
            </div>
          </div>

          {/* Checklist */}
          <div className="space-y-2.5 pt-1">
            {/* Step 1 - Completed */}
            <div className="flex items-center justify-between rounded-xl bg-[#F8FAFC] dark:bg-[#111625] px-3.5 py-2.5 border border-gray-100/80 dark:border-gray-800/60">
              <span className="text-xs sm:text-[13px] font-medium text-gray-700 dark:text-gray-300">
                Add your location to your personal information.
              </span>
              <HiCheckCircle className="h-5 w-5 text-emerald-500 shrink-0 ml-2" />
            </div>

            {/* Step 2 - Pending */}
            <div
              onClick={onOpenCompleteModal}
              className="flex items-center justify-between rounded-xl bg-[#F8FAFC] dark:bg-[#111625] px-3.5 py-2.5 border border-gray-100/80 dark:border-gray-800/60 cursor-pointer hover:border-blue-200 dark:hover:border-blue-900 transition-colors"
            >
              <span className="text-xs sm:text-[13px] font-medium text-gray-700 dark:text-gray-300">
                Add your experience and education to your profile
              </span>
              <div className="h-4.5 w-4.5 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center shrink-0 ml-2">
                <FiCheck className="h-2.5 w-2.5 text-gray-400 dark:text-gray-500" />
              </div>
            </div>

            {/* Step 3 - Pending */}
            <div
              onClick={onOpenCompleteModal}
              className="flex items-center justify-between rounded-xl bg-[#F8FAFC] dark:bg-[#111625] px-3.5 py-2.5 border border-gray-100/80 dark:border-gray-800/60 cursor-pointer hover:border-blue-200 dark:hover:border-blue-900 transition-colors"
            >
              <span className="text-xs sm:text-[13px] font-medium text-gray-700 dark:text-gray-300">
                Add a minimum of 5 skills to your profile
              </span>
              <div className="h-4.5 w-4.5 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center shrink-0 ml-2">
                <FiCheck className="h-2.5 w-2.5 text-gray-400 dark:text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Circular Progress Indicator */}
        <div className="flex w-full md:w-auto items-center justify-center pt-2 md:pt-0 pr-0 md:pr-4">
          <div className="relative flex items-center justify-center">
            <svg
              width={size}
              height={size}
              className="transform -rotate-90"
            >
              {/* Background Track Circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                className="text-gray-100 dark:text-gray-800"
                fill="transparent"
              />
              {/* Progress Arc */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#0000F6"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
                fill="transparent"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
                {percentage}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
