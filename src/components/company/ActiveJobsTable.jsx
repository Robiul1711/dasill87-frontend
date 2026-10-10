"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiMoreHorizontal,
  FiPlus,
  FiCode,
  FiBriefcase,
} from "react-icons/fi";

const initialJobs = [
  {
    id: 1,
    title: "Programmer",
    location: "Vienna/Lower Austria",
    messages: 7,
    interested: 4,
    status: "Active",
  },
  {
    id: 2,
    title: "Programmer",
    location: "Vienna/Lower Austria",
    messages: 7,
    interested: 4,
    status: "Active",
  },
  {
    id: 3,
    title: "Programmer",
    location: "Vienna/Lower Austria",
    messages: 7,
    interested: 4,
    status: "Active",
  },
  {
    id: 4,
    title: "Programmer",
    location: "Vienna/Lower Austria",
    messages: 7,
    interested: 4,
    status: "Pause",
  },
];

export default function ActiveJobsTable() {
  const [activeMenuId, setActiveMenuId] = useState(null);

  return (
    <div className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-2xs">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-1">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              Your Active Jobs
            </h2>
            <p className="text-xs text-gray-400 dark:text-gray-400 mt-0.5">
              Job Title
            </p>
          </div>

          <Link
            href="/company/job-listings"
            className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1.5 transition-colors group"
          >
            <span>View all jobs</span>
            <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Jobs Table Container */}
        <div className="mt-4 overflow-x-auto no-scrollbar">
          <table className="w-full min-w-[540px] text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800/80 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                <th className="pb-3 pr-4 font-medium">Job Title</th>
                <th className="pb-3 px-4 text-center font-medium">Messages</th>
                <th className="pb-3 px-4 text-center font-medium">Interested</th>
                <th className="pb-3 px-4 text-center font-medium">Status</th>
                <th className="pb-3 pl-4 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
              {initialJobs.map((job) => {
                const isActive = job.status === "Active";

                return (
                  <tr
                    key={job.id}
                    className="group hover:bg-gray-50/60 dark:hover:bg-[#1A2234]/40 transition-colors"
                  >
                    {/* Job Title & Icon */}
                    <td className="py-3.5 pr-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 shrink-0 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-2xs">
                          <FiCode className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-tight">
                            {job.title}
                          </h4>
                          <span className="text-[11px] text-gray-400 dark:text-gray-400">
                            {job.location}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Messages */}
                    <td className="py-3.5 px-4 text-center text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {job.messages}
                    </td>

                    {/* Interested */}
                    <td className="py-3.5 px-4 text-center text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {job.interested}
                    </td>

                    {/* Status Badge */}
                    <td className="py-3.5 px-4 text-center">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                          isActive
                            ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400"
                            : "bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isActive ? "bg-emerald-500" : "bg-amber-500"
                          }`}
                        />
                        <span>{job.status}</span>
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 pl-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href="/company/matches"
                          className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300 text-xs font-medium transition-colors cursor-pointer"
                        >
                          View Matches
                        </Link>

                        <div className="relative">
                          <button
                            type="button"
                            onClick={() =>
                              setActiveMenuId(
                                activeMenuId === job.id ? null : job.id
                              )
                            }
                            aria-label="More actions"
                            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 dark:hover:text-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                          >
                            <FiMoreHorizontal className="w-4 h-4" />
                          </button>

                          {activeMenuId === job.id && (
                            <div className="absolute right-0 top-full mt-1 w-36 bg-white dark:bg-[#1A2234] border border-gray-100 dark:border-gray-700 rounded-xl shadow-xl py-1 z-20 text-xs">
                              <Link
                                href="/company/job-listings"
                                className="block px-3 py-1.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                              >
                                Edit Job
                              </Link>
                              <button
                                type="button"
                                onClick={() => setActiveMenuId(null)}
                                className="w-full text-left px-3 py-1.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                              >
                                {isActive ? "Pause Job" : "Resume Job"}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* + New Job poster button */}
      <div className="mt-5 pt-2">
        <Link
          href="/company/post-job"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-50/70 hover:bg-blue-100/70 text-blue-600 dark:bg-blue-950/40 dark:hover:bg-blue-900/60 dark:text-blue-400 font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-2xs"
        >
          <FiPlus className="w-4 h-4 stroke-[2.5]" />
          <span>New Job poster</span>
        </Link>
      </div>
    </div>
  );
}
