"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  FiChevronDown,
  FiMapPin,
  FiClock,
  FiBriefcase,
  FiThumbsDown,
  FiThumbsUp,
  FiRotateCcw,
} from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi";

const matchedCandidates = [
  {
    id: 1,
    name: "Cristoph Johnson",
    role: "Senior Full-Stack Developer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    score: "95%",
    topSkills: ["React", "Node.js", "TypeScript"],
    location: "Berlin, Germany",
    availability: "Immediately",
    experience: "7 years",
    education: "M.Sc. Computer Science",
    keySkills: ["React", "Node.js", "TypeScript", "GraphQL", "AWS"],
    languages: ["English (Native)", "German (Fluent)"],
  },
  {
    id: 2,
    name: "Emma Schmidt",
    role: "Senior UX/UI Designer",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    score: "94%",
    topSkills: ["Figma", "Design Systems", "Prototyping"],
    location: "Munich, Germany",
    availability: "In 2 weeks",
    experience: "5 years",
    education: "B.A. Digital Media",
    keySkills: ["Figma", "User Research", "Wireframing", "Tailwind CSS"],
    languages: ["German (Native)", "English (Fluent)"],
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Principal Frontend Architect",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    score: "92%",
    topSkills: ["Next.js", "Performance", "Architecture"],
    location: "Frankfurt, Germany",
    availability: "1 month notice",
    experience: "9 years",
    education: "M.Sc. Software Engineering",
    keySkills: ["Next.js", "Micro-frontends", "CI/CD", "Web Vitals", "TypeScript"],
    languages: ["English (Native)", "German (Intermediate)"],
  },
];

export default function MatchesView() {
  const [selectedJob, setSelectedJob] = useState("Senior Frontend Developer");
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = matchedCandidates.length;
  const currentCandidate = matchedCandidates[currentIndex];
  const remaining = total - (currentIndex + 1);

  const handleAction = (type) => {
    if (type === "like") {
      toast.success(`Liked ${currentCandidate.name}! Added to Shortlist.`);
    } else {
      toast("Skipped candidate.", { icon: "👋" });
    }

    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(total); // All completed
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
  };

  return (
    <div className="space-y-6 w-full animate-in fade-in duration-300 pb-16">
      {/* 1. Job Position Selector */}
      <div className="space-y-2">
        <label className="block text-xs font-bold text-gray-900 dark:text-white">
          Select Job Position
        </label>
        <div className="relative w-full sm:w-80">
          <select
            value={selectedJob}
            onChange={(e) => {
              setSelectedJob(e.target.value);
              setCurrentIndex(0);
            }}
            className="w-full appearance-none px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#151B2B] text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 cursor-pointer pr-10 shadow-2xs"
          >
            <option>Senior Frontend Developer</option>
            <option>UX/UI Designer</option>
            <option>Marketing Manager</option>
          </select>
          <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4" />
        </div>
      </div>

      {/* 2. Main Match Card */}
      {currentIndex < total ? (
        <div className="bg-white dark:bg-[#151B2B] rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xs p-6 sm:p-9 space-y-6 transition-all duration-300">
          {/* Header: Avatar, Name, Role, Score */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 ring-2 ring-gray-100 dark:ring-gray-700 bg-gray-100">
                <Image
                  src={currentCandidate.avatar}
                  alt={currentCandidate.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-tight">
                  {currentCandidate.name}
                </h2>
                <p className="text-xs sm:text-[13px] text-gray-500 dark:text-gray-400 mt-0.5">
                  {currentCandidate.role}
                </p>

                {/* Quick top skills pills */}
                <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                  {currentCandidate.topSkills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Score Ring Badge (Matching Screenshot 2) */}
            <div className="flex items-center gap-2 self-start sm:self-center px-3.5 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/60 dark:bg-emerald-950/30">
              <span className="w-4 h-4 rounded-full border-2 border-emerald-500 flex items-center justify-center text-[9px] font-bold text-emerald-600">
                ✓
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                Score {currentCandidate.score}
              </span>
            </div>
          </div>

          {/* 4 Details Grid (Location, Availability, Experience, Education) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 border-y border-gray-100 dark:border-gray-800/80">
            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 flex items-center justify-center shrink-0">
                <FiMapPin className="w-4 h-4 text-gray-500" />
              </div>
              <div>
                <span className="text-[11px] text-gray-400 block leading-tight">
                  Location
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                  {currentCandidate.location}
                </span>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 flex items-center justify-center shrink-0">
                <FiClock className="w-4 h-4 text-gray-500" />
              </div>
              <div>
                <span className="text-[11px] text-gray-400 block leading-tight">
                  Availability
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                  {currentCandidate.availability}
                </span>
              </div>
            </div>

            {/* Experience */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 flex items-center justify-center shrink-0">
                <FiBriefcase className="w-4 h-4 text-gray-500" />
              </div>
              <div>
                <span className="text-[11px] text-gray-400 block leading-tight">
                  Experience
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                  {currentCandidate.experience}
                </span>
              </div>
            </div>

            {/* Education */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 flex items-center justify-center shrink-0">
                <HiOutlineAcademicCap className="w-4.5 h-4.5 text-gray-500" />
              </div>
              <div>
                <span className="text-[11px] text-gray-400 block leading-tight">
                  Education
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                  {currentCandidate.education}
                </span>
              </div>
            </div>
          </div>

          {/* Key Skills */}
          <div className="space-y-2">
            <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
              Key Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentCandidate.keySkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-2">
            <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
              Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentCandidate.languages.map((lang, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Note Box */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40 text-[11px] sm:text-xs text-purple-700 dark:text-purple-300 leading-relaxed">
            Note: CV details are not displayed as per your preference. Contact candidates directly to request their full CV.
          </div>

          {/* Bottom Like / Dislike Buttons */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <button
              type="button"
              onClick={() => handleAction("dislike")}
              className="py-3 px-4 rounded-2xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FiThumbsDown className="w-4 h-4" />
              <span>Dislike</span>
            </button>

            <button
              type="button"
              onClick={() => handleAction("like")}
              className="py-3 px-4 rounded-2xl bg-[#222B45] hover:bg-[#1A2238] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FiThumbsUp className="w-4 h-4" />
              <span>Like</span>
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-medium">
              <span>Candidate {currentIndex + 1} of {total}</span>
              <span>{remaining} remaining</span>
            </div>

            <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <div
                className="h-full bg-[#222B45] dark:bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
              />
            </div>
          </div>
        </div>
      ) : (
        /* Completed State */
        <div className="bg-white dark:bg-[#151B2B] rounded-3xl border border-gray-100 dark:border-gray-800 p-10 text-center space-y-5">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-500 flex items-center justify-center text-2xl">
            ✓
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            All Matches Reviewed!
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto">
            You&apos;ve reviewed all available candidates for {selectedJob}. Check your Applications to chat with liked candidates.
          </p>

          <div className="flex items-center justify-center gap-4 pt-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-xs font-semibold cursor-pointer"
            >
              <FiRotateCcw className="w-3.5 h-3.5" />
              <span>Review Again</span>
            </button>

            <Link
              href="/company/applications"
              className="px-5 py-2.5 rounded-xl bg-[#222B45] hover:bg-[#1A2238] text-white text-xs font-semibold shadow-xs"
            >
              View Applications →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
