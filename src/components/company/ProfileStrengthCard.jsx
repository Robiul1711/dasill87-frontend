"use client";

import React from "react";
import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";

const checklist = [
  { id: 1, text: "Company info", completed: true, points: null },
  { id: 2, text: "Header/Bio added", completed: true, points: null },
  { id: 3, text: "Photo added", completed: true, points: null },
  { id: 4, text: "Added benefits", completed: false, points: "+20 Pts" },
  { id: 5, text: "Video added", completed: false, points: "+15 Pts" },
  { id: 6, text: "Working model specified", completed: true, points: null },
];

export default function ProfileStrengthCard() {
  const percentage = 94;
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-2xs">
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
            Company Profile Strength
          </h2>
          <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-400 text-right shrink-0">
            +22 points to unlock new features
          </span>
        </div>

        {/* Circular Progress & Checklist Grid */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          {/* Circular SVG Progress Ring */}
          <div className="relative shrink-0 flex items-center justify-center">
            <svg
              className="w-34 h-34 transform -rotate-90"
              viewBox="0 0 130 130"
            >
              {/* Background Track */}
              <circle
                cx="65"
                cy="65"
                r={radius}
                className="stroke-gray-100 dark:stroke-gray-800"
                strokeWidth="11"
                fill="transparent"
              />
              {/* Progress Stroke */}
              <circle
                cx="65"
                cy="65"
                r={radius}
                className="stroke-blue-600 transition-all duration-1000 ease-out"
                strokeWidth="11"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            {/* Centered Percentage Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                {percentage}%
              </span>
            </div>
          </div>

          {/* Checklist */}
          <div className="flex-1 w-full space-y-2.5">
            {checklist.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between text-xs sm:text-[13px] text-gray-700 dark:text-gray-300"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {item.completed ? (
                    <div className="w-4.5 h-4.5 rounded-full bg-emerald-50 text-emerald-500 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <FiCheck className="w-3 h-3 stroke-[3]" />
                    </div>
                  ) : (
                    <div className="w-4.5 h-4.5 rounded-full border-2 border-gray-300 dark:border-gray-600 shrink-0" />
                  )}
                  <span
                    className={`truncate ${
                      item.completed
                        ? "font-medium text-gray-800 dark:text-gray-200"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {item.text}
                  </span>
                </div>

                {item.points && (
                  <span className="shrink-0 px-2 py-0.5 rounded-md text-[10px] font-bold text-blue-600 bg-blue-50 dark:bg-blue-950/60 dark:text-blue-400">
                    {item.points}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Improve profiles button */}
      <div className="mt-6 pt-2">
        <Link
          href="/company/settings"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-50/70 hover:bg-blue-100/70 text-blue-600 dark:bg-blue-950/40 dark:hover:bg-blue-900/60 dark:text-blue-400 font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-2xs group"
        >
          <span>Improve profiles</span>
          <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
