"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  FiBookmark,
  FiArrowUpRight,
  FiChevronDown,
  FiChevronUp,
  FiCheck,
  FiX,
  FiSliders,
  FiInfo,
} from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import {
  SalaryIcon,
  JobTypeIcon,
  LocationIcon,
  VacanciesIcon,
  IndustryIcon,
  DeadlineIcon,
} from "@/components/icons/DashboardIcons";
import AcceptFeedbackModal from "@/components/dashboard/modals/AcceptFeedbackModal";
import RejectFeedbackModal from "@/components/dashboard/modals/RejectFeedbackModal";
import CompatibilityScoreModal from "@/components/dashboard/modals/CompatibilityScoreModal";
import DeleteJobModal from "@/components/dashboard/modals/DeleteJobModal";
import CreateDocumentModal from "@/components/dashboard/modals/CreateDocumentModal";

// Initial Jobs Dataset
const initialJobs = [
  {
    id: "job-1",
    title: "Software Engineer",
    company: "ABCD Company",
    logoType: "clover",
    level: "Beginner",
    score: 95,
    salary: "20000-30000 $",
    jobType: "Full Time",
    location: "USA",
    vacancies: "10",
    industry: "Software Farm",
    deadline: "01/02/2026",
    postedAgo: "1 week ago",
    status: "pending", // 'pending' (all matches), 'accepted', 'rejected'
    bookmarked: false,
    summary:
      "This job is searching for a motivated Intern in R&D Software Development (100%, all genders) for a 6-month contract at METTLER TOLEDO. The role involves contributing to the development of an internal C/C++ desktop tool for digital signal processing, including planning, implementing a client tool, creating a robust API, developing a modular software architecture, defining software tests, and managing complex R&D requirements. Candidates should be currently enrolled in a relevant bachelor's or master's program.",
    benefits:
      "At METTLER TOLEDO, our mission is to empower industries worldwide with precision instruments and services that drive progress toward a better and more #sustainable future. Our teams operate at the forefront of #innovation, delivering cutting-edge instruments to a diverse range of industries, from #LifeSciences and #pharmaceuticals to #manufacturing and #logistics. With a rich legacy spanning several decades, METTLER TOLEDO (NYSE: MTD) has a global presence in 40 countries, serves more than 140 countries, and employs 17,300 ambitious minds.",
    tools: [
      { name: "Canva", level: "Proficient" },
      { name: "Figma", level: "Proficient" },
    ],
    knowledge: [
      { name: "Project Management", level: "Proficient" },
      { name: "Project Management", level: "Proficient" },
      { name: "Project Management", level: "Proficient" },
      { name: "Project Management", level: "Proficient" },
      { name: "Project Management", level: "Proficient" },
      { name: "Project Management", level: "Proficient" },
    ],
    coreTasks: [
      { name: "Data Analysis", level: "Proficient" },
      { name: "Data Analysis", level: "Proficient" },
      { name: "Data Analysis", level: "Proficient" },
      { name: "Data Analysis", level: "Proficient" },
      { name: "Data Analysis", level: "Proficient" },
      { name: "Data Analysis", level: "Proficient" },
    ],
    softSkills: [
      { name: "Data Analysis", level: "Proficient" },
      { name: "Data Analysis", level: "Proficient" },
      { name: "Data Analysis", level: "Proficient" },
      { name: "Data Analysis", level: "Proficient" },
      { name: "Data Analysis", level: "Proficient" },
    ],
    languages: ["German"],
    breakdown: {
      overall: 94,
      score: 91,
      salary: 100,
      location: 62,
      workload: 100,
    },
  },
  {
    id: "job-2",
    title: "Software Engineer",
    company: "ABCD Company",
    logoType: "bonton",
    level: "Intermediate",
    score: 95,
    salary: "20000-32000 $",
    jobType: "Full Time",
    location: "USA",
    vacancies: "5",
    industry: "Software Farm",
    deadline: "15/02/2026",
    postedAgo: "1 week ago",
    status: "pending",
    bookmarked: false,
    summary:
      "Join our fast-paced core engineering team designing high-throughput cloud distributed microservices. You will work closely with product management and platform architecture leads to deliver resilient client-facing features.",
    benefits:
      "Full health coverage, 401(k) matching up to 6%, flexible remote/hybrid working schedule, and comprehensive annual educational stipend.",
    tools: [
      { name: "React", level: "Proficient" },
      { name: "Node.js", level: "Proficient" },
    ],
    knowledge: [
      { name: "System Architecture", level: "Proficient" },
      { name: "Cloud Services", level: "Proficient" },
    ],
    coreTasks: [
      { name: "Backend Development", level: "Proficient" },
      { name: "API Design", level: "Proficient" },
    ],
    softSkills: [
      { name: "Problem Solving", level: "Proficient" },
      { name: "Team Collaboration", level: "Proficient" },
    ],
    languages: ["English", "German"],
    breakdown: {
      overall: 92,
      score: 90,
      salary: 95,
      location: 80,
      workload: 100,
    },
  },
  {
    id: "job-3",
    title: "Software Engineer",
    company: "ABCD Company",
    logoType: "volkswagen",
    level: "Beginner",
    score: 95,
    salary: "20000 $",
    jobType: "Full Time",
    location: "USA",
    vacancies: "8",
    industry: "Automotive Tech",
    deadline: "28/02/2026",
    postedAgo: "1 week ago",
    status: "pending",
    bookmarked: true,
    summary:
      "Help build embedded digital instrument toolings and connected vehicle telemetry dashboard suites. Looking for energetic software apprentices with enthusiasm for modern technologies.",
    benefits:
      "Company vehicle discount, on-site gym and wellness facilities, relocation assistance, and pension plan.",
    tools: [
      { name: "C++", level: "Proficient" },
      { name: "Python", level: "Proficient" },
    ],
    knowledge: [
      { name: "Embedded Systems", level: "Proficient" },
      { name: "CAN Bus", level: "Proficient" },
    ],
    coreTasks: [
      { name: "Firmware Integration", level: "Proficient" },
      { name: "Unit Testing", level: "Proficient" },
    ],
    softSkills: [
      { name: "Analytical Thinking", level: "Proficient" },
      { name: "Agile Mindset", level: "Proficient" },
    ],
    languages: ["English"],
    breakdown: {
      overall: 90,
      score: 88,
      salary: 90,
      location: 75,
      workload: 95,
    },
  },
  {
    id: "job-4",
    title: "Software Engineer",
    company: "ABCD Company",
    logoType: "leaf",
    level: "Beginner",
    score: 95,
    salary: "20000 $",
    jobType: "Full Time",
    location: "USA",
    vacancies: "3",
    industry: "Software Farm",
    deadline: "05/03/2026",
    postedAgo: "1 week ago",
    status: "pending",
    bookmarked: false,
    summary:
      "Seeking a software developer passionate about clean UI/UX, responsive layouts, and robust frontend performance tuning for international web applications.",
    benefits:
      "Competitive compensation package, quarterly performance bonuses, flexible working hours, and state-of-the-art workstation setup.",
    tools: [
      { name: "JavaScript", level: "Proficient" },
      { name: "Tailwind CSS", level: "Proficient" },
    ],
    knowledge: [
      { name: "Web Security", level: "Proficient" },
      { name: "SEO Principles", level: "Proficient" },
    ],
    coreTasks: [
      { name: "Frontend Development", level: "Proficient" },
      { name: "Code Review", level: "Proficient" },
    ],
    softSkills: [
      { name: "Communication", level: "Proficient" },
      { name: "Attention to Detail", level: "Proficient" },
    ],
    languages: ["German", "French"],
    breakdown: {
      overall: 89,
      score: 87,
      salary: 85,
      location: 90,
      workload: 90,
    },
  },
];

export default function MatchesPage() {
  const [jobs, setJobs] = useState(initialJobs);
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'accepted', 'rejected'
  const [selectedJobId, setSelectedJobId] = useState("job-1");
  const [viewMode, setViewMode] = useState("matching"); // 'discovery' (Hero landing) | 'matching' (Split pane)

  // Expandable sections in job view
  const [expandedSummary, setExpandedSummary] = useState(false);
  const [expandedBenefits, setExpandedBenefits] = useState(false);

  // Modals state
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false); // 5th modal
  const [isScoreModalOpen, setIsScoreModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isCreateDocModalOpen, setIsCreateDocModalOpen] = useState(false);
  const [activeTargetJobId, setActiveTargetJobId] = useState(null);

  // Current selected job
  const selectedJob = jobs.find((j) => j.id === selectedJobId) || jobs[0];

  // Tab counts
  const allCount = 26; // Display count to match Figma designs
  const acceptedCount = jobs.filter((j) => j.status === "accepted").length || 6;
  const rejectedCount = jobs.filter((j) => j.status === "rejected").length || 6;

  // Filtered jobs for list
  const filteredJobs = jobs.filter((j) => {
    if (activeTab === "all") return true;
    if (activeTab === "accepted") return j.status === "accepted";
    if (activeTab === "rejected") return j.status === "rejected";
    return true;
  });

  // Action Handlers
  const handleOpenAccept = (jobId) => {
    setActiveTargetJobId(jobId || selectedJobId);
    setIsAcceptModalOpen(true);
  };

  const handleOpenReject = (jobId) => {
    setActiveTargetJobId(jobId || selectedJobId);
    setIsRejectModalOpen(true); // Open 5th modal
  };

  const handleOpenDelete = (jobId) => {
    setActiveTargetJobId(jobId || selectedJobId);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmAccept = () => {
    const targetId = activeTargetJobId || selectedJobId;
    setJobs((prev) =>
      prev.map((j) => (j.id === targetId ? { ...j, status: "accepted" } : j))
    );
  };

  const handleConfirmReject = () => {
    const targetId = activeTargetJobId || selectedJobId;
    setJobs((prev) =>
      prev.map((j) => (j.id === targetId ? { ...j, status: "rejected" } : j))
    );
  };

  const handleConfirmDelete = () => {
    const targetId = activeTargetJobId || selectedJobId;
    setJobs((prev) => prev.filter((j) => j.id !== targetId));
    if (selectedJobId === targetId && jobs.length > 1) {
      setSelectedJobId(jobs[0].id);
    }
  };

  const handleMoveToMatch = (jobId) => {
    const targetId = jobId || selectedJobId;
    setJobs((prev) =>
      prev.map((j) => (j.id === targetId ? { ...j, status: "pending" } : j))
    );
    toast.success("Job moved back to matches!");
  };

  const toggleBookmark = (jobId) => {
    setJobs((prev) =>
      prev.map((j) =>
        j.id === jobId ? { ...j, bookmarked: !j.bookmarked } : j
      )
    );
    toast.success(
      selectedJob.bookmarked ? "Removed from bookmarks" : "Job bookmarked!"
    );
  };

  // Helper logo renderer
  const renderCompanyLogo = (type) => {
    switch (type) {
      case "clover":
        return (
          <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center p-1.5 shrink-0 border border-emerald-100 dark:border-emerald-800">
            <svg viewBox="0 0 40 40" className="w-full h-full fill-emerald-500">
              <path d="M20 10 C20 4, 14 4, 14 10 C14 16, 20 20, 20 20 C20 20, 26 16, 26 10 C26 4, 20 4, 20 10 Z" />
              <path d="M10 20 C4 20, 4 14, 10 14 C16 14, 20 20, 20 20 C20 20, 16 26, 10 26 C4 26, 4 20, 10 20 Z" />
              <path d="M20 30 C20 36, 26 36, 26 30 C26 24, 20 20, 20 20 C20 20, 14 24, 14 30 C14 36, 20 36, 20 30 Z" />
              <path d="M30 20 C36 20, 36 26, 30 26 C24 26, 20 20, 20 20 C20 20, 24 14, 30 14 C36 14, 36 20, 30 20 Z" />
            </svg>
          </div>
        );
      case "bonton":
        return (
          <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center p-1.5 shrink-0 border border-amber-100 dark:border-amber-800">
            <span className="font-serif italic font-black text-amber-900 dark:text-amber-200 text-xs">
              bon ton
            </span>
          </div>
        );
      case "volkswagen":
        return (
          <div className="w-11 h-11 rounded-xl bg-blue-900 dark:bg-blue-950 flex items-center justify-center p-1.5 shrink-0 border border-blue-800 text-white font-bold text-xs">
            VW
          </div>
        );
      default:
        return (
          <div className="w-11 h-11 rounded-xl bg-black dark:bg-neutral-900 flex items-center justify-center p-1.5 shrink-0 border border-neutral-800 text-white font-semibold text-xs">
            ⚡
          </div>
        );
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Top Header bar with Trabino Score shortcut */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Matches
          </h2>
          <p className="text-xs sm:text-sm text-secondary dark:text-gray-400">
            Review and match with AI-curated job recommendations.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsScoreModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#151B2B] text-gray-800 dark:text-gray-200 text-xs font-semibold hover:border-brand-blue dark:hover:border-blue-500 transition-colors shadow-2xs cursor-pointer"
          >
            <FiSliders className="w-3.5 h-3.5 text-brand-blue dark:text-blue-400" />
            <span>Adjust Trabino Score</span>
            <FiArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ================= LEFT COLUMN: Tabs + Matching List ================= */}
        <div className="lg:col-span-4 space-y-4">
          <div className="rounded-3xl bg-white p-4 sm:p-5 dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-sm">
            {/* Top Navigation Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#F4F5F7] dark:bg-[#111625] mb-4 text-xs font-semibold">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("all");
                  setViewMode("matching");
                }}
                className={`flex-1 py-2 px-2.5 rounded-xl transition-all text-center cursor-pointer ${
                  activeTab === "all"
                    ? "bg-white dark:bg-[#1F293D] text-emerald-600 dark:text-emerald-400 shadow-xs border border-emerald-500/30"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900"
                }`}
              >
                All Matches ({allCount})
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("accepted");
                  setViewMode("matching");
                }}
                className={`flex-1 py-2 px-2.5 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer ${
                  activeTab === "accepted"
                    ? "bg-white dark:bg-[#1F293D] text-emerald-600 dark:text-emerald-400 shadow-xs border border-emerald-500/30"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900"
                }`}
              >
                <FiCheck className="w-3 h-3 text-emerald-500" />
                <span>Accepted ({acceptedCount})</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("rejected");
                  setViewMode("matching");
                }}
                className={`flex-1 py-2 px-2.5 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer ${
                  activeTab === "rejected"
                    ? "bg-white dark:bg-[#1F293D] text-emerald-600 dark:text-emerald-400 shadow-xs border border-emerald-500/30"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900"
                }`}
              >
                <FiX className="w-3 h-3 text-rose-500" />
                <span>Rejected ({rejectedCount})</span>
              </button>
            </div>

            {/* Orange Informational Banner */}
            <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 mb-4">
              <p className="text-[11px] text-gray-700 dark:text-gray-300 leading-relaxed">
                The jobs you have accepted or declined will appear here for review.
                You can create the documents right away or continue matching.
              </p>
              <button
                type="button"
                onClick={() => setViewMode("matching")}
                className="mt-1.5 text-xs font-bold text-orange-500 hover:text-orange-600 cursor-pointer block"
              >
                Give it a try!
              </button>
            </div>

            {/* List of Job Cards */}
            <div className="space-y-3 max-h-[calc(100vh-320px)] overflow-y-auto pr-1">
              {filteredJobs.length === 0 ? (
                <div className="py-12 text-center text-secondary dark:text-gray-400 text-xs">
                  No {activeTab} jobs yet.
                </div>
              ) : (
                filteredJobs.map((job) => {
                  const isSelected = selectedJob?.id === job.id;
                  return (
                    <div
                      key={job.id}
                      onClick={() => setSelectedJobId(job.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? "border-brand-blue dark:border-blue-500 bg-blue-50/20 dark:bg-blue-950/20 shadow-xs"
                          : "border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111625] hover:border-gray-200 dark:hover:border-gray-700"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          {renderCompanyLogo(job.logoType)}
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-medium text-brand-blue dark:text-blue-400">
                                {job.title}
                              </span>
                              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50/40 dark:bg-emerald-950/40">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                Score {job.score}%
                              </span>
                            </div>

                            <h4 className="text-sm font-bold text-gray-900 dark:text-white mt-1">
                              {job.company}
                            </h4>

                            <div className="flex items-center gap-3 text-[11px] text-secondary dark:text-gray-400 mt-1.5">
                              <span>💵 {job.salary}</span>
                              <span>📍 {job.location}</span>
                              <span>🗓️ {job.postedAgo}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action buttons on card based on Tab */}
                        {activeTab === "all" && (
                          <div className="flex items-center gap-1.5 shrink-0">
                            {/* Quick Accept */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenAccept(job.id);
                              }}
                              className="w-7 h-7 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all cursor-pointer shadow-2xs"
                              title="Accept Job"
                            >
                              <FiCheck className="w-3.5 h-3.5" />
                            </button>

                            {/* Quick Reject (Opens 5th modal) */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenReject(job.id);
                              }}
                              className="w-7 h-7 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-700 text-rose-600 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all cursor-pointer shadow-2xs"
                              title="Reject Job"
                            >
                              <FiX className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}

                        {activeTab === "accepted" && (
                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenReject(job.id);
                              }}
                              className="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center hover:bg-rose-600 transition-all cursor-pointer"
                              title="Move to Reject"
                            >
                              <FiX className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}

                        {activeTab === "rejected" && (
                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleMoveToMatch(job.id);
                              }}
                              className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 transition-all cursor-pointer"
                              title="Move back to match"
                            >
                              <FiCheck className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Pill buttons under accepted/rejected cards */}
                      {activeTab === "accepted" && (
                        <div className="mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedJobId(job.id);
                              setIsCreateDocModalOpen(true);
                            }}
                            className="w-full py-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 text-xs font-semibold transition-colors cursor-pointer text-center"
                          >
                            Create Documents
                          </button>
                        </div>
                      )}

                      {activeTab === "rejected" && (
                        <div className="mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenDelete(job.id);
                            }}
                            className="w-full py-1.5 rounded-full border border-rose-400 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/20 text-xs font-semibold transition-colors cursor-pointer text-center"
                          >
                            Delete this job
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Bottom Discovery Switcher */}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 mt-4 text-center">
              <button
                type="button"
                onClick={() => setViewMode("discovery")}
                className="text-xs font-semibold text-orange-500 hover:text-orange-600 inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Back to discovery</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: Hero Discovery OR Full Job Details ================= */}
        <div className="lg:col-span-8">
          {viewMode === "discovery" ? (
            /* Discovery Hero State (Screen 1) */
            <div className="rounded-3xl bg-white p-8 sm:p-14 dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center justify-center text-center min-h-145 animate-in fade-in duration-200">
              {/* Trabino Logo with Gradient icon */}
              <div className="flex items-center justify-center mb-8">
                <Image
                  src="/logo.png"
                  alt="Trabino Logo"
                  width={160}
                  height={42}
                  className="dark:hidden h-10 w-auto object-contain"
                  priority
                />
                <Image
                  src="/navLogo.png"
                  alt="Trabino Logo"
                  width={160}
                  height={42}
                  className="hidden dark:block h-10 w-auto object-contain"
                  priority
                />
              </div>

              {/* Discovery Main Heading */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F293D] dark:text-white max-w-xl leading-snug mb-4">
                You have <span className="text-brand-blue dark:text-blue-400 font-black">26</span> job opportunities to review from a total of{" "}
                <span className="text-brand-blue dark:text-blue-400 font-black">50</span> in Switzerland
              </h3>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-secondary dark:text-gray-400 max-w-lg leading-relaxed mb-8">
                Match with the jobs you like and reject the ones that don&apos;t align with that you&apos;re looking for. Update your skills and preferences to receive more relevant matches.
              </p>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => setViewMode("matching")}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2A334B] hover:bg-[#1f2638] text-white text-sm font-semibold transition-all shadow-md cursor-pointer hover:scale-105"
              >
                <span>Start Matching</span>
                <FiArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* Full Job Details View (Screen 2, 3, 6, 7) */
            <div className="rounded-3xl bg-white p-6 sm:p-8 dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-sm space-y-6 animate-in fade-in duration-200 relative pb-28">
              {/* Job Top Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-5">
                <div className="flex items-center gap-4">
                  {renderCompanyLogo(selectedJob.logoType)}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {selectedJob.company}
                    </h3>
                    <p className="text-xs text-secondary dark:text-gray-400 font-medium">
                      {selectedJob.title}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Bookmark Button */}
                  <button
                    type="button"
                    onClick={() => toggleBookmark(selectedJob.id)}
                    className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                      selectedJob.bookmarked
                        ? "border-brand-blue bg-blue-50 text-brand-blue dark:bg-blue-950/60 dark:text-blue-400"
                        : "border-gray-200 dark:border-gray-700 text-gray-500 hover:text-gray-900 dark:text-gray-400"
                    }`}
                    title="Bookmark Job"
                  >
                    <FiBookmark className="w-4 h-4" />
                  </button>

                  {/* Level Badge */}
                  <span className="px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300">
                    {selectedJob.level}
                  </span>

                  {/* Compatibility Score Ring Badge (Clickable -> Opens Slider Modal) */}
                  <button
                    type="button"
                    onClick={() => setIsScoreModalOpen(true)}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-bold cursor-pointer hover:scale-105 transition-all"
                  >
                    <span className="w-2.5 h-2.5 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
                    <span>Score {selectedJob.score}%</span>
                  </button>
                </div>
              </div>

              {/* 6 Key Job Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {/* Salary */}
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-[#111625] border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#1A2234] flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-2xs">
                    <SalaryIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <span className="text-[11px] text-secondary dark:text-gray-400 block font-medium">
                      Salary
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                      {selectedJob.salary}
                    </span>
                  </div>
                </div>

                {/* Job Type */}
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-[#111625] border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#1A2234] flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-2xs">
                    <JobTypeIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <span className="text-[11px] text-secondary dark:text-gray-400 block font-medium">
                      Job Type
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                      {selectedJob.jobType}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-[#111625] border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#1A2234] flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-2xs">
                    <LocationIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <span className="text-[11px] text-secondary dark:text-gray-400 block font-medium">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                      {selectedJob.location}
                    </span>
                  </div>
                </div>

                {/* Vacancies */}
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-[#111625] border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#1A2234] flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-2xs">
                    <VacanciesIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <span className="text-[11px] text-secondary dark:text-gray-400 block font-medium">
                      Vacancies
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                      {selectedJob.vacancies}
                    </span>
                  </div>
                </div>

                {/* Industry */}
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-[#111625] border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#1A2234] flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-2xs">
                    <IndustryIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <span className="text-[11px] text-secondary dark:text-gray-400 block font-medium">
                      Industry
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                      {selectedJob.industry}
                    </span>
                  </div>
                </div>

                {/* Deadline */}
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-[#111625] border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#1A2234] flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-2xs">
                    <DeadlineIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <span className="text-[11px] text-secondary dark:text-gray-400 block font-medium">
                      Deadline
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                      {selectedJob.deadline}
                    </span>
                  </div>
                </div>
              </div>

              {/* Job Summary */}
              <div className="space-y-2">
                <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                  Job Summary
                </h4>
                <p
                  className={`text-xs sm:text-sm text-secondary dark:text-gray-300 leading-relaxed ${
                    !expandedSummary ? "line-clamp-3" : ""
                  }`}
                >
                  {selectedJob.summary}
                </p>
                <div className="text-center pt-1">
                  <button
                    type="button"
                    onClick={() => setExpandedSummary(!expandedSummary)}
                    className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"
                  >
                    {expandedSummary ? (
                      <FiChevronUp className="w-4 h-4 mx-auto" />
                    ) : (
                      <FiChevronDown className="w-4 h-4 mx-auto" />
                    )}
                  </button>
                </div>
              </div>

              {/* Benefits & Highlights */}
              <div className="space-y-2">
                <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                  Benefits & Highlights
                </h4>
                <p
                  className={`text-xs sm:text-sm text-secondary dark:text-gray-300 leading-relaxed ${
                    !expandedBenefits ? "line-clamp-3" : ""
                  }`}
                >
                  {selectedJob.benefits}
                </p>
                <div className="text-center pt-1">
                  <button
                    type="button"
                    onClick={() => setExpandedBenefits(!expandedBenefits)}
                    className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"
                  >
                    {expandedBenefits ? (
                      <FiChevronUp className="w-4 h-4 mx-auto" />
                    ) : (
                      <FiChevronDown className="w-4 h-4 mx-auto" />
                    )}
                  </button>
                </div>
              </div>

              {/* Tools Section */}
              <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <span>🛠️</span>
                  <span>Tools</span>
                </h4>
                <p className="text-[11px] text-secondary dark:text-gray-400">
                  Equipment or instruction commonly used in your role
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedJob.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F4F5F7] dark:bg-[#111625] text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-200/60 dark:border-gray-800"
                    >
                      <span>{t.name}</span>
                      <span className="text-gray-400">• {t.level}</span>
                      <FiX className="w-3 h-3 text-gray-400 ml-1 cursor-pointer" />
                    </span>
                  ))}
                </div>
              </div>

              {/* Knowledge Section */}
              <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <span>📖</span>
                  <span>Knowledge</span>
                </h4>
                <p className="text-[11px] text-secondary dark:text-gray-400">
                  Topics and technical understanding expected for your role.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedJob.knowledge.map((k, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F4F5F7] dark:bg-[#111625] text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-200/60 dark:border-gray-800"
                    >
                      <span>{k.name}</span>
                      <span className="text-gray-400">• {k.level}</span>
                      <FiX className="w-3 h-3 text-gray-400 ml-1 cursor-pointer" />
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Tasks & Duties */}
              <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <span>📋</span>
                  <span>Core tasks & Duties</span>
                </h4>
                <p className="text-[11px] text-secondary dark:text-gray-400">
                  Main activities and responsibilities you&apos;ll handle.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedJob.coreTasks.map((task, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F4F5F7] dark:bg-[#111625] text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-200/60 dark:border-gray-800"
                    >
                      <span>{task.name}</span>
                      <span className="text-gray-400">• {task.level}</span>
                      <FiX className="w-3 h-3 text-gray-400 ml-1 cursor-pointer" />
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <span>💡</span>
                  <span>Soft skills</span>
                </h4>
                <p className="text-[11px] text-secondary dark:text-gray-400">
                  Personal traits and cognitive skills to succeed in your role.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedJob.softSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F4F5F7] dark:bg-[#111625] text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-200/60 dark:border-gray-800"
                    >
                      <span>{skill.name}</span>
                      <span className="text-gray-400">• {skill.level}</span>
                      <FiX className="w-3 h-3 text-gray-400 ml-1 cursor-pointer" />
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <span>🌐</span>
                  <span>Languages</span>
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedJob.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-[#F4F5F7] dark:bg-[#111625] text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-200/60 dark:border-gray-800"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* TrabinoScore Match Summary Section */}
              <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                    TrabinoScore match summary
                  </h4>
                  <p className="text-xs text-secondary dark:text-gray-400 mt-0.5">
                    Your compatibility with intern in R&D Software Development at ABCD Company, Inc is {selectedJob.breakdown.overall}%
                  </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 py-2">
                  {/* Big Circular Ring Progress Gauge */}
                  <div className="relative flex items-center justify-center shrink-0">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="52"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-gray-100 dark:text-gray-800"
                        fill="transparent"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="52"
                        stroke="#0000F6"
                        strokeWidth="8"
                        strokeDasharray={2 * Math.PI * 52}
                        strokeDashoffset={
                          2 * Math.PI * 52 * (1 - selectedJob.breakdown.overall / 100)
                        }
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-3xl font-black text-gray-900 dark:text-white">
                        {selectedJob.breakdown.overall}%
                      </span>
                    </div>
                  </div>

                  {/* 4 Score Breakdown Progress Bars */}
                  <div className="flex-1 w-full space-y-3">
                    {/* Score */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold text-gray-700 dark:text-gray-300">
                        <span>Score</span>
                        <span>{selectedJob.breakdown.score}</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full transition-all"
                          style={{ width: `${selectedJob.breakdown.score}%` }}
                        />
                      </div>
                    </div>

                    {/* Expected Salary */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold text-gray-700 dark:text-gray-300">
                        <span>Expected Salary</span>
                        <span>{selectedJob.breakdown.salary}</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full transition-all"
                          style={{ width: `${selectedJob.breakdown.salary}%` }}
                        />
                      </div>
                    </div>

                    {/* Location & workstyle */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold text-gray-700 dark:text-gray-300">
                        <span>Location & workstyle</span>
                        <span>{selectedJob.breakdown.location}</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full transition-all"
                          style={{ width: `${selectedJob.breakdown.location}%` }}
                        />
                      </div>
                    </div>

                    {/* Workload */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold text-gray-700 dark:text-gray-300">
                        <span>Workload</span>
                        <span>{selectedJob.breakdown.workload}</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full transition-all"
                          style={{ width: `${selectedJob.breakdown.workload}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Action Bar depending on Tab View */}
              <div className="sticky bottom-4 z-20 flex items-center justify-center gap-3 pt-4">
                {activeTab === "all" && (
                  <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-white/95 dark:bg-[#151B2B]/95 shadow-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-md">
                    {/* Reject Button -> OPENS 5TH MODAL (RejectFeedbackModal) */}
                    <button
                      type="button"
                      onClick={() => handleOpenReject(selectedJob.id)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-rose-50 hover:border-rose-300 dark:hover:bg-rose-950/20 text-gray-700 dark:text-gray-300 hover:text-rose-600 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                    >
                      <FiX className="w-4 h-4" />
                      <span>Reject</span>
                    </button>

                    {/* Accept Button -> OPENS 4TH MODAL (AcceptFeedbackModal) */}
                    <button
                      type="button"
                      onClick={() => handleOpenAccept(selectedJob.id)}
                      className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#2A334B] hover:bg-[#1f2638] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer hover:scale-105"
                    >
                      <FiCheck className="w-4 h-4" />
                      <span>Accept</span>
                    </button>
                  </div>
                )}

                {activeTab === "accepted" && (
                  <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-white/95 dark:bg-[#151B2B]/95 shadow-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-md">
                    {/* Move to Reject */}
                    <button
                      type="button"
                      onClick={() => handleOpenReject(selectedJob.id)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                    >
                      <FiX className="w-4 h-4" />
                      <span>Move to Reject</span>
                    </button>

                    {/* Create Document */}
                    <button
                      type="button"
                      onClick={() => setIsCreateDocModalOpen(true)}
                      className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#2A334B] hover:bg-[#1f2638] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer hover:scale-105"
                    >
                      <FiCheck className="w-4 h-4" />
                      <span>Create Document</span>
                    </button>
                  </div>
                )}

                {activeTab === "rejected" && (
                  <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-white/95 dark:bg-[#151B2B]/95 shadow-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-md">
                    {/* Delete this job -> OPENS DeleteJobModal */}
                    <button
                      type="button"
                      onClick={() => handleOpenDelete(selectedJob.id)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-rose-400 bg-rose-50/50 dark:bg-rose-950/20 hover:bg-rose-100 text-rose-600 dark:text-rose-400 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                    >
                      <IoTrashOutline className="w-4 h-4" />
                      <span>Delete this job</span>
                    </button>

                    {/* Moved to Match */}
                    <button
                      type="button"
                      onClick={() => handleMoveToMatch(selectedJob.id)}
                      className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#2A334B] hover:bg-[#1f2638] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer hover:scale-105"
                    >
                      <FiCheck className="w-4 h-4" />
                      <span>Moved to Match</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ================= MODALS ================= */}

      {/* 4th Modal: Accept Feedback ("Help us find your best matches.") */}
      <AcceptFeedbackModal
        isOpen={isAcceptModalOpen}
        onClose={() => setIsAcceptModalOpen(false)}
        jobTitle={selectedJob?.title}
        onConfirmAccept={handleConfirmAccept}
      />

      {/* 5th Modal: Reject Feedback ("Improve my matches") */}
      <RejectFeedbackModal
        isOpen={isRejectModalOpen}
        onClose={() => setIsRejectModalOpen(false)}
        jobTitle={selectedJob?.title}
        onConfirmReject={handleConfirmReject}
      />

      {/* Compatibility Score Slider Modal (35%, 60%, 90% Preview) */}
      <CompatibilityScoreModal
        isOpen={isScoreModalOpen}
        onClose={() => setIsScoreModalOpen(false)}
        initialScore={60}
        onSaveScore={(newScore) => {
          setJobs((prev) => prev.map((j) => ({ ...j, score: newScore })));
        }}
      />

      {/* Delete Job Confirmation Modal */}
      <DeleteJobModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        jobTitle={selectedJob?.title}
        companyName={selectedJob?.company}
        onConfirmDelete={handleConfirmDelete}
      />

      {/* Create Document Walkthrough Modal with Loading & 5-Step Slides */}
      <CreateDocumentModal
        isOpen={isCreateDocModalOpen}
        onClose={() => setIsCreateDocModalOpen(false)}
        jobTitle={selectedJob?.title}
      />
    </div>
  );
}
