"use client";

import React from "react";
import { FiBriefcase, FiUsers, FiThumbsUp, FiEye, FiArrowUp } from "react-icons/fi";

const stats = [
  {
    id: "active-jobs",
    title: "Active Jobs",
    value: "12",
    trend: "20% vs last month",
    icon: FiBriefcase,
    iconBg: "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400",
  },
  {
    id: "total-matches",
    title: "Total Matches",
    value: "48",
    trend: "18% vs last month",
    icon: FiUsers,
    iconBg: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400",
  },
  {
    id: "interested-candidates",
    title: "Interested Candidates",
    value: "23",
    trend: "18% vs last month",
    icon: FiThumbsUp,
    iconBg: "bg-sky-50 text-sky-600 dark:bg-sky-950/60 dark:text-sky-400",
  },
  {
    id: "profile-views",
    title: "Profile Views",
    value: "156",
    trend: "18% vs last month",
    icon: FiEye,
    iconBg: "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/60 dark:text-cyan-400",
  },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            className="flex items-center gap-4.5 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800/80 shadow-2xs hover:shadow-sm transition-all duration-200"
          >
            {/* Circular Icon Container */}
            <div
              className={`w-13 h-13 shrink-0 rounded-full flex items-center justify-center text-xl ${stat.iconBg}`}
            >
              <Icon className="w-6 h-6 stroke-[2]" />
            </div>

            {/* Numbers & Trend */}
            <div className="flex flex-col min-w-0">
              <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-[13px] font-medium text-gray-500 dark:text-gray-400 mt-0.5 truncate">
                {stat.title}
              </span>
              <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-emerald-500 mt-1">
                <FiArrowUp className="w-3 h-3 stroke-[3]" />
                <span>{stat.trend}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
