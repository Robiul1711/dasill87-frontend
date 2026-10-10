"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiPlus,
  FiMapPin,
  FiUsers,
  FiEye,
  FiCheckCircle,
  FiMoreVertical,
  FiEdit,
  FiPauseCircle,
  FiXCircle,
} from "react-icons/fi";

const initialJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    type: "Permanent",
    status: "Active",
    location: "Berlin",
    postedTime: "Posted 2 days ago",
    matches: 15,
    views: 124,
    applications: 8,
  },
  {
    id: 2,
    title: "UX/UI Designer",
    type: "Permanent",
    status: "Active",
    location: "Berlin",
    postedTime: "Posted 2 days ago",
    matches: 15,
    views: 124,
    applications: 8,
  },
  {
    id: 3,
    title: "Marketing Manager",
    type: "Permanent",
    status: "Active",
    location: "Berlin",
    postedTime: "Posted 2 days ago",
    matches: 15,
    views: 124,
    applications: 8,
  },
  {
    id: 4,
    title: "Backend Engineer",
    type: "Permanent",
    status: "Paused",
    location: "Munich",
    postedTime: "Posted 1 week ago",
    matches: 9,
    views: 87,
    applications: 4,
  },
  {
    id: 5,
    title: "Product Analyst",
    type: "Temporary",
    status: "Closed",
    location: "Hamburg",
    postedTime: "Posted 3 weeks ago",
    matches: 12,
    views: 210,
    applications: 19,
  },
];

export default function JobListingsView() {
  const [activeTab, setActiveTab] = useState("Active"); // 'Active', 'Paused', 'Closed'
  const [openMenuId, setOpenMenuId] = useState(null);
  const [jobs, setJobs] = useState(initialJobs);

  const activeCount = jobs.filter((j) => j.status === "Active").length;
  const pausedCount = jobs.filter((j) => j.status === "Paused").length;
  const closedCount = jobs.filter((j) => j.status === "Closed").length;

  const filteredJobs = jobs.filter((job) => job.status === activeTab);

  const handleStatusChange = (id, newStatus) => {
    setJobs((prev) =>
      prev.map((job) => (job.id === id ? { ...job, status: newStatus } : job))
    );
    setOpenMenuId(null);
  };

  return (
    <div className="space-y-6 w-full animate-in fade-in duration-300 pb-16">
      {/* Header & Post New Job Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
            Job Listings
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 mt-1">
            Manage all your job postings
          </p>
        </div>

        <Link
          href="/company/post-job"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E2538] hover:bg-[#151a29] text-white dark:bg-white dark:text-[#111827] dark:hover:bg-gray-100 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm w-fit"
        >
          <span>Post New Job</span>
          <span className="w-5 h-5 rounded-full bg-white/20 dark:bg-black/20 flex items-center justify-center">
            <FiPlus className="w-3.5 h-3.5 stroke-[2.5]" />
          </span>
        </Link>
      </div>

      {/* Filter Tabs Capsule */}
      <div className="bg-gray-100/80 dark:bg-[#151B2B] p-1 rounded-full flex gap-1 w-fit border border-gray-200/60 dark:border-gray-800">
        <button
          type="button"
          onClick={() => setActiveTab("Active")}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            activeTab === "Active"
              ? "bg-white dark:bg-[#1E2638] text-gray-900 dark:text-white shadow-2xs"
              : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          }`}
        >
          Active ({activeCount})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("Paused")}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            activeTab === "Paused"
              ? "bg-white dark:bg-[#1E2638] text-gray-900 dark:text-white shadow-2xs"
              : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          }`}
        >
          Paused ({pausedCount})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("Closed")}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            activeTab === "Closed"
              ? "bg-white dark:bg-[#1E2638] text-gray-900 dark:text-white shadow-2xs"
              : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          }`}
        >
          Closed ({closedCount})
        </button>
      </div>

      {/* Job Cards List */}
      <div className="space-y-4">
        {filteredJobs.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-[#151B2B] rounded-2xl border border-gray-100 dark:border-gray-800">
            <p className="text-sm text-gray-500">No {activeTab.toLowerCase()} jobs found.</p>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white dark:bg-[#151B2B] rounded-2xl p-5 sm:p-6 border border-gray-100 dark:border-gray-800 shadow-2xs hover:shadow-xs transition-all flex flex-col md:flex-row md:items-center justify-between gap-5"
            >
              {/* Left Info Area */}
              <div className="space-y-3">
                {/* Title and Badges */}
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                    {job.title}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40">
                    {job.type}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      job.status === "Active"
                        ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400"
                        : job.status === "Paused"
                        ? "bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400"
                        : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                    }`}
                  >
                    {job.status}
                  </span>
                </div>

                {/* Location & Time Posted */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-400">
                  <FiMapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>
                    {job.location} • {job.postedTime}
                  </span>
                </div>

                {/* Metrics Pill Badges */}
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap pt-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 dark:bg-[#1E2638] text-xs font-medium text-gray-600 dark:text-gray-300 border border-gray-100/80 dark:border-gray-800">
                    <FiUsers className="w-3.5 h-3.5 text-gray-400" />
                    <span>{job.matches} matches</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 dark:bg-[#1E2638] text-xs font-medium text-gray-600 dark:text-gray-300 border border-gray-100/80 dark:border-gray-800">
                    <FiEye className="w-3.5 h-3.5 text-gray-400" />
                    <span>{job.views} views</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 dark:bg-[#1E2638] text-xs font-medium text-gray-600 dark:text-gray-300 border border-gray-100/80 dark:border-gray-800">
                    <FiCheckCircle className="w-3.5 h-3.5 text-gray-400" />
                    <span>{job.applications} applications</span>
                  </div>
                </div>
              </div>

              {/* Right Action Buttons */}
              <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                <Link
                  href="/company/matches"
                  className="px-5 py-2.5 rounded-xl bg-[#1E2538] hover:bg-[#151a29] text-white dark:bg-white dark:text-[#111827] dark:hover:bg-gray-100 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-2xs cursor-pointer"
                >
                  View Matches
                </Link>

                {/* Three Dots Menu Button */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMenuId(openMenuId === job.id ? null : job.id)
                    }
                    className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors cursor-pointer"
                  >
                    <FiMoreVertical className="w-4 h-4" />
                  </button>

                  {/* Dropdown Menu (Matching screenshot annotation) */}
                  {openMenuId === job.id && (
                    <div className="absolute right-0 top-full mt-1.5 w-44 rounded-2xl bg-[#1C202B] text-white p-2 shadow-2xl border border-gray-700/60 z-30 animate-in fade-in slide-in-from-top-1 text-xs">
                      <div className="px-3 py-1 text-[10px] font-semibold text-amber-400 uppercase tracking-wider border-b border-gray-700/60 mb-1">
                        Content
                      </div>
                      <Link
                        href="/company/post-job"
                        onClick={() => setOpenMenuId(null)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-gray-200 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                        <span>Edit Job</span>
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          handleStatusChange(
                            job.id,
                            job.status === "Active" ? "Paused" : "Active"
                          )
                        }
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-gray-200 hover:bg-white/10 hover:text-white transition-colors text-left"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>{job.status === "Active" ? "Pause Job" : "Resume Job"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleStatusChange(job.id, "Closed")}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-red-400 hover:bg-white/10 transition-colors text-left"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <span>Close Job</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
