"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMessageSquare, FiMapPin, FiEye } from "react-icons/fi";

const initialApplications = [
  {
    id: 1,
    name: "Cristoph Johnson",
    role: "Senior Developer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    badgeType: "match",
    badgeLabel: "It's a Match!",
    appliedFor: "Senior Frontend Developer",
    appliedTime: "2 hours ago",
    skills: ["React", "Node.js", "TypeScript"],
    location: "Berlin, Germany",
    score: "95%",
    tabCategory: "It's a Match!",
    isNew: true,
  },
  {
    id: 2,
    name: "Emma Schmidt",
    role: "UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    badgeType: "interested",
    badgeLabel: "Interested",
    appliedFor: "UX/UI Designer",
    appliedTime: "7 hours ago",
    skills: ["Figma", "UX", "TypeScript"],
    location: "Munich, Germany",
    score: "95%",
    tabCategory: "Interested",
    isNew: false,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Senior Developer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    badgeType: "match",
    badgeLabel: "It's a Match!",
    appliedFor: "Senior Frontend Developer",
    appliedTime: "10 hours ago",
    skills: ["Agile", "Strategy", "Leadership"],
    location: "Frankfurt, Germany",
    score: "95%",
    tabCategory: "It's a Match!",
    isNew: false,
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Product Manager",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    badgeType: "match",
    badgeLabel: "It's a Match!",
    appliedFor: "Product Manager",
    appliedTime: "1 day ago",
    skills: ["Product Strategy", "Agile", "Roadmap"],
    location: "Hamburg, Germany",
    score: "94%",
    tabCategory: "It's a Match!",
    isNew: false,
  },
  {
    id: 5,
    name: "Alexandre Moreau",
    role: "Frontend Developer",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    badgeType: "interested",
    badgeLabel: "Interested",
    appliedFor: "Programmer",
    appliedTime: "2 days ago",
    skills: ["React", "Next.js", "Tailwind CSS"],
    location: "Vienna, Austria",
    score: "92%",
    tabCategory: "Interested",
    isNew: false,
  },
];

export default function ApplicationsView() {
  const [activeTab, setActiveTab] = useState("All Applications");

  const filteredApps = initialApplications.filter((app) => {
    if (activeTab === "All Applications") return true;
    if (activeTab === "It's a Match!") return app.badgeType === "match";
    if (activeTab === "Interested") return app.badgeType === "interested";
    if (activeTab === "New") return app.isNew;
    return true;
  });

  return (
    <div className="space-y-6 w-full animate-in fade-in duration-300 pb-16">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
          Applications
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 mt-1">
          View and manage candidate applications and matches
        </p>
      </div>

      {/* 4 Stats Cards (Matching Screenshot 3) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Total Applications */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-2xs">
          <span className="text-xs text-gray-400 block font-medium">
            Total Applications
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-1 block">
            05
          </span>
        </div>

        {/* Matches */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-2xs">
          <span className="text-xs text-gray-400 block font-medium">
            Matches
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-emerald-500 mt-1 block">
            12
          </span>
        </div>

        {/* Interested */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-2xs">
          <span className="text-xs text-gray-400 block font-medium">
            Interested
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 mt-1 block">
            12
          </span>
        </div>

        {/* New */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-2xs">
          <span className="text-xs text-gray-400 block font-medium">
            New
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-orange-500 mt-1 block">
            01
          </span>
        </div>
      </div>

      {/* Tabs Filter Bar (Matching Screenshot 3) */}
      <div className="flex items-center gap-6 sm:gap-8 border-b border-gray-200/80 dark:border-gray-800 text-xs sm:text-sm font-semibold overflow-x-auto no-scrollbar">
        {/* All Applications */}
        <button
          type="button"
          onClick={() => setActiveTab("All Applications")}
          className={`pb-3 relative flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 ${
            activeTab === "All Applications"
              ? "text-blue-600 dark:text-blue-400 font-bold"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          }`}
        >
          <span>All Applications</span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          {activeTab === "All Applications" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
          )}
        </button>

        {/* It's a Match! */}
        <button
          type="button"
          onClick={() => setActiveTab("It's a Match!")}
          className={`pb-3 relative flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 ${
            activeTab === "It's a Match!"
              ? "text-blue-600 dark:text-blue-400 font-bold"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          }`}
        >
          <span>It&apos;s a Match!</span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          {activeTab === "It's a Match!" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
          )}
        </button>

        {/* Interested */}
        <button
          type="button"
          onClick={() => setActiveTab("Interested")}
          className={`pb-3 relative flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 ${
            activeTab === "Interested"
              ? "text-blue-600 dark:text-blue-400 font-bold"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          }`}
        >
          <span>Interested</span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          {activeTab === "Interested" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
          )}
        </button>

        {/* New */}
        <button
          type="button"
          onClick={() => setActiveTab("New")}
          className={`pb-3 relative flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 ${
            activeTab === "New"
              ? "text-blue-600 dark:text-blue-400 font-bold"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          }`}
        >
          <span>New</span>
          {activeTab === "New" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
          )}
        </button>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApps.map((app) => (
          <div
            key={app.id}
            className="bg-white dark:bg-[#151B2B] rounded-2xl p-5 sm:p-6 border border-gray-100 dark:border-gray-800 shadow-2xs hover:shadow-xs transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-5"
          >
            {/* Left Candidate Info */}
            <div className="flex items-start gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-gray-100 dark:ring-gray-700 bg-gray-100">
                <Image
                  src={app.avatar}
                  alt={app.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>

              <div className="space-y-1.5">
                {/* Name & Badge */}
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-tight">
                    {app.name}
                  </h3>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      app.badgeType === "match"
                        ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400"
                        : "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400"
                    }`}
                  >
                    {app.badgeLabel}
                  </span>
                </div>

                {/* Role */}
                <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                  {app.role}
                </p>

                {/* Applied For & Time */}
                <p className="text-xs text-gray-400 dark:text-gray-400">
                  Applied for: {app.appliedFor} • {app.appliedTime}
                </p>

                {/* Skills tags */}
                <div className="flex items-center gap-1.5 pt-1 flex-wrap">
                  {app.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 pt-1">
                  <FiMapPin className="w-3.5 h-3.5 text-gray-400" />
                  <span>{app.location}</span>
                </div>
              </div>
            </div>

            {/* Right Action & Score Area */}
            <div className="flex items-center gap-4 sm:gap-6 shrink-0 self-end lg:self-center">
              {/* Chat Button */}
              <Link
                href="/company/messages"
                className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 dark:bg-[#1E2638] dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center transition-colors cursor-pointer border border-gray-100 dark:border-gray-700"
                title="Message Candidate"
              >
                <FiMessageSquare className="w-4.5 h-4.5" />
              </Link>

              {/* Match Score Indicator (Matching Screenshot 3) */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/60 dark:bg-emerald-950/30">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-emerald-500 flex items-center justify-center text-[8px] font-bold text-emerald-600">
                    ✓
                  </span>
                  <span className="text-xs font-bold text-gray-900 dark:text-white">
                    Score {app.score}
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 mt-0.5">Match</span>
              </div>

              {/* View Job Details Button */}
              <Link
                href="/company/job-listings"
                className="px-5 py-2.5 rounded-xl bg-[#1E2538] hover:bg-[#151a29] text-white dark:bg-white dark:text-[#111827] dark:hover:bg-gray-100 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-2xs cursor-pointer whitespace-nowrap"
              >
                View Job Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
