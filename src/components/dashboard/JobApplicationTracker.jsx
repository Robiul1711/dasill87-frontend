"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  FiBookmark,
  FiMapPin,
  FiCalendar,
  FiChevronDown,
  FiCheck,
  FiArrowUpRight,
} from "react-icons/fi";
import ApplySuccessfulModal from "@/components/dashboard/modals/ApplySuccessfulModal";

// Initial Jobs for the Tracker
const defaultTrackerJobs = [
  {
    id: "track-1",
    company: "Softvency Company",
    title: "Software Engineer",
    logoType: "bonton",
    location: "New York, USA",
    addedDate: "01.07.26",
    score: 95,
    status: "pending", // 'pending', 'applied', 'interviewing', 'offer'
    bookmarked: false,
  },
  {
    id: "track-2",
    company: "Softvency Company",
    title: "Software Engineer",
    logoType: "bonton",
    location: "New York, USA",
    addedDate: "01.07.26",
    score: 95,
    status: "pending",
    bookmarked: true,
  },
  {
    id: "track-3",
    company: "Tesla Motors",
    title: "Frontend Architect",
    logoType: "clover",
    location: "Austin, TX, USA",
    addedDate: "02.07.26",
    score: 98,
    status: "pending",
    bookmarked: false,
  },
];

export default function JobApplicationTracker() {
  const router = useRouter();
  const [jobs, setJobs] = useState(defaultTrackerJobs);
  const [sortBy, setSortBy] = useState("Date Added");
  const [filterBy, setFilterBy] = useState("All");
  const [matchScoreFilter, setMatchScoreFilter] = useState("90%+");
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applyingJobId, setApplyingJobId] = useState(null);

  // Toggle bookmark on job card
  const handleToggleBookmark = (jobId) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === jobId ? { ...job, bookmarked: !job.bookmarked } : job
      )
    );
    toast.success("Bookmark updated!");
  };

  // Trigger Apply action -> opens ApplySuccessfulModal
  const handleApplyClick = (jobId) => {
    setApplyingJobId(jobId);
    setIsApplyModalOpen(true);
  };

  // Confirm Apply in modal
  const handleConfirmApply = () => {
    if (applyingJobId) {
      setJobs((prev) =>
        prev.map((job) =>
          job.id === applyingJobId ? { ...job, status: "applied" } : job
        )
      );
    }
    setIsApplyModalOpen(false);
    toast.success("Job moved to Applied for Position!");
  };

  // Helper logo renderer
  const renderLogo = (logoType) => {
    if (logoType === "bonton") {
      return (
        <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center p-1.5 shrink-0 border border-amber-200/60 dark:border-amber-800">
          <span className="font-serif italic font-black text-amber-900 dark:text-amber-200 text-xs">
            bon ton
          </span>
        </div>
      );
    }
    return (
      <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center p-1.5 shrink-0 border border-emerald-200/60 dark:border-emerald-800">
        <svg viewBox="0 0 40 40" className="w-6 h-6 fill-emerald-500">
          <path d="M20 10 C20 4, 14 4, 14 10 C14 16, 20 20, 20 20 C20 20, 26 16, 26 10 C26 4, 20 4, 20 10 Z" />
          <path d="M10 20 C4 20, 4 14, 10 14 C16 14, 20 20, 20 20 C20 20, 16 26, 10 26 C4 26, 4 20, 10 20 Z" />
          <path d="M20 30 C20 36, 26 36, 26 30 C26 24, 20 20, 20 20 C20 20, 14 24, 14 30 C14 36, 20 36, 20 30 Z" />
          <path d="M30 20 C36 20, 36 26, 30 26 C24 26, 20 20, 20 20 C20 20, 24 14, 30 14 C36 14, 36 20, 30 20 Z" />
        </svg>
      </div>
    );
  };

  // Filter jobs by column
  const pendingJobs = jobs.filter((j) => j.status === "pending");
  const appliedJobs = jobs.filter((j) => j.status === "applied");
  const interviewingJobs = jobs.filter((j) => j.status === "interviewing");
  const offerJobs = jobs.filter((j) => j.status === "offer");

  return (
    <div className="space-y-6 animate-in fade-in duration-300 w-full">
      {/* =================================================================== */}
      {/* TOP FILTER BAR: Sort by, Filter, Match Score */}
      {/* =================================================================== */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {/* Sort by dropdown */}
        <div className="relative">
          <button
            type="button"
            className="flex items-center justify-between min-w-36 sm:min-w-44 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-200 dark:border-gray-800 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-gray-300 shadow-2xs cursor-pointer"
          >
            <span>Sort by</span>
            <FiChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Filter dropdown */}
        <div className="relative">
          <button
            type="button"
            className="flex items-center justify-between min-w-36 sm:min-w-44 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-200 dark:border-gray-800 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-gray-300 shadow-2xs cursor-pointer"
          >
            <span>Filter</span>
            <FiChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Match Score dropdown */}
        <div className="relative">
          <button
            type="button"
            className="flex items-center justify-between min-w-36 sm:min-w-44 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-200 dark:border-gray-800 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-gray-300 shadow-2xs cursor-pointer"
          >
            <span>Match Score</span>
            <FiChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 4-COLUMN KANBAN APPLICATION TRACKER PIPELINE */}
      {/* =================================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 items-start">
        {/* ------------------------------------------------------------- */}
        {/* COLUMN 1: Application Pending */}
        {/* ------------------------------------------------------------- */}
        <div className="space-y-4">
          {/* Header Pill */}
          <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#FFEADB] dark:bg-[#FF5D17]/15 border border-[#FFD4BD] dark:border-[#FF5D17]/30 shadow-2xs">
            <span className="font-bold text-sm text-[#FF5D17] dark:text-[#FFA07A]">
              Application Pending
            </span>
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#0052FF] text-white text-[10px] font-bold">
              14
            </span>
          </div>

          {/* Cards List */}
          <div className="space-y-4">
            {pendingJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white dark:bg-[#151B2B] rounded-2xl p-4 sm:p-5 border border-gray-100 dark:border-gray-800 shadow-xs hover:shadow-md transition-all space-y-3.5 group"
              >
                {/* Logo & Bookmark Header */}
                <div className="flex items-start justify-between">
                  {renderLogo(job.logoType)}
                  <button
                    type="button"
                    onClick={() => handleToggleBookmark(job.id)}
                    aria-label="Bookmark Job"
                    className="p-1 text-gray-400 hover:text-brand-blue dark:hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <FiBookmark
                      className={`w-5 h-5 ${
                        job.bookmarked
                          ? "fill-[#2A344A] text-[#2A344A] dark:fill-blue-400 dark:text-blue-400"
                          : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Company & Title */}
                <div className="space-y-0.5">
                  <div className="text-xs font-semibold text-[#0080FF] dark:text-blue-400">
                    {job.company}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                    {job.title}
                  </h4>
                </div>

                {/* Location & Added Date */}
                <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <FiMapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiCalendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>Added {job.addedDate}</span>
                  </div>
                </div>

                {/* Score badge */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  </span>
                  <span>Score {job.score}%</span>
                </div>

                {/* Actions: View Details & Apply */}
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => router.push("/dashboard/matches")}
                    className="flex-1 py-2 px-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111625] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-semibold text-center transition-all cursor-pointer shadow-2xs"
                  >
                    View Details
                  </button>

                  <button
                    type="button"
                    onClick={() => handleApplyClick(job.id)}
                    className="flex-1 py-2 px-3 rounded-full bg-[#2A344A] hover:bg-[#1f2638] text-white text-xs font-semibold text-center transition-all shadow-md hover:scale-105 cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* COLUMN 2: Applied for Position */}
        {/* ------------------------------------------------------------- */}
        <div className="space-y-4">
          {/* Header Pill */}
          <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#DCF3FF] dark:bg-[#0288D1]/15 border border-[#BCE8FF] dark:border-[#0288D1]/30 shadow-2xs">
            <span className="font-bold text-sm text-[#0288D1] dark:text-[#38BDF8]">
              Applied for Position
            </span>
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#0052FF] text-white text-[10px] font-bold">
              14
            </span>
          </div>

          {/* Cards List or Empty State */}
          <div className="space-y-4">
            {appliedJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white dark:bg-[#151B2B] rounded-2xl p-4 sm:p-5 border border-emerald-200/80 dark:border-emerald-800/60 shadow-xs space-y-3.5"
              >
                <div className="flex items-start justify-between">
                  {renderLogo(job.logoType)}
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    <FiCheck className="w-3 h-3" />
                    Applied
                  </span>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-semibold text-[#0080FF]">{job.company}</div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">{job.title}</h4>
                </div>
                <div className="text-xs text-gray-500">
                  <div>{job.location}</div>
                  <div>Applied on {job.addedDate}</div>
                </div>
              </div>
            ))}

            {/* Dashed Placeholder Card */}
            <div className="min-h-72 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-800/80 flex items-center justify-center p-6 text-center bg-gray-50/30 dark:bg-gray-900/10">
              <p className="text-xs text-gray-400 dark:text-gray-500 max-w-xs leading-relaxed">
                Job will be move here once you applied for a position
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* COLUMN 3: Interviewing */}
        {/* ------------------------------------------------------------- */}
        <div className="space-y-4">
          {/* Header Pill */}
          <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#F0EBFF] dark:bg-[#7C3AED]/15 border border-[#E1D4FF] dark:border-[#7C3AED]/30 shadow-2xs">
            <span className="font-bold text-sm text-[#7C3AED] dark:text-[#C084FC]">
              Interviewing
            </span>
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#0052FF] text-white text-[10px] font-bold">
              14
            </span>
          </div>

          {/* Dashed Placeholder Card */}
          <div className="min-h-72 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-800/80 flex items-center justify-center p-6 text-center bg-gray-50/30 dark:bg-gray-900/10">
            <p className="text-xs text-gray-400 dark:text-gray-500 max-w-xs leading-relaxed">
              Job will be move here whenever you get the interview
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* COLUMN 4: Offer received */}
        {/* ------------------------------------------------------------- */}
        <div className="space-y-4">
          {/* Header Pill */}
          <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#E3F9E5] dark:bg-[#16A34A]/15 border border-[#C6F2CB] dark:border-[#16A34A]/30 shadow-2xs">
            <span className="font-bold text-sm text-[#16A34A] dark:text-[#4ADE80]">
              Offer received
            </span>
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#0052FF] text-white text-[10px] font-bold">
              14
            </span>
          </div>

          {/* Dashed Placeholder Card */}
          <div className="min-h-72 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-800/80 flex items-center justify-center p-6 text-center bg-gray-50/30 dark:bg-gray-900/10">
            <p className="text-xs text-gray-400 dark:text-gray-500 max-w-xs leading-relaxed">
              Job will be move here when you get the offer
            </p>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* Apply Successful Modal */}
      {/* =================================================================== */}
      <ApplySuccessfulModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        onGoToJobMatching={handleConfirmApply}
      />
    </div>
  );
}
