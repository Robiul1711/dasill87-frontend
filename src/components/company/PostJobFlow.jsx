"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  FiChevronRight,
  FiPlus,
  FiX,
  FiBriefcase,
  FiMapPin,
  FiCalendar,
  FiDollarSign,
  FiUsers,
  FiCheck,
  FiGlobe,
  FiTool,
} from "react-icons/fi";
import {
  HiOutlineBookOpen,
  HiOutlineClipboardList,
  HiOutlineLightBulb,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";

export default function PostJobFlow() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1); // 1: Job Type, 2: Job Details, 3: Review & Publish

  // Form State
  const [formData, setFormData] = useState({
    jobType: "Permanent", // 'Permanent', 'Mini Job', 'Temporary'
    jobTitle: "Software Engineer",
    location: "USA",
    workplaceType: "Remote", // 'Hybrid', 'Remote', 'On-site'
    salaryRange: "20000-30000 $",
    vacancy: "10",
    deadline: "2026-02-01",
    industry: "Software Farm",
    companyName: "ABCD Company",
    jobDescription:
      "This job is searching for a motivated Intern in R&D Software Development (100%, all genders) for a 6-month contract at METTLER TOLEDO. The role involves contributing to the development of an internal C/C++ desktop tool for digital signal processing, including planning, implementing a client tool, creating a robust API, developing a modular software architecture, defining software tests, and managing complex R&D requirements. Candidates should be currently enrolled in a relevant bachelor's or master's program, possess knowledge of C/C++ programming, and have experience with software design and tools like Visual Studio and Git. The position offers practical experience, training opportunities, flexible working hours, and additional benefits. Interested applicants should apply via the company's job portal.",
    benefits:
      "At METTLER TOLEDO, our mission is to empower industries worldwide with precision instruments and services that drive progress toward a better and more #sustainable future. Our teams operate at the forefront of #innovation, delivering cutting-edge instruments to a diverse range of industries, from #LifeSciences and #pharmaceuticals to #manufacturing and #logistics. With a rich legacy spanning several decades, METTLER TOLEDO (NYSE: MTD) has a global presence in 40 countries, serves more than 140 countries, and employs 17,300 ambitious minds. Our valued global team contributes to our success in pushing the boundaries of what's possible in the fields of biomedical sciences, food & beverage, retail, chemical analysis, industrial sectors, transport & logistics, and academia. Through our comprehensive portfolio of solutions and services, we enable businesses to achieve new levels of accuracy, efficiency, and quality. METTLER TOLEDO products cater to the unique needs of various applications, including laboratory weighing, liquid handling, industrial weighing, chemical analysis, and product inspection, while upholding our GreenMT commitment to sustainable practices. Be at the forefront of precision and excellence and follow us for more information about live events, hiring opportunities, industry latest trends, best practices, and more. Become a member of our global team at METTLER TOLEDO https://jobs.mt.com Benefit from informational videos on our YouTube channel: https://www.youtube.com/@mettler-toledo",

    // Skills & Requirements list
    requiredSkills: [
      { id: 1, name: "Canva", level: "Proficient" },
      { id: 2, name: "Figma", level: "Proficient" },
    ],
    knowledge: [
      { id: 1, name: "Project Management", level: "Proficient" },
      { id: 2, name: "Project Management", level: "Proficient" },
      { id: 3, name: "Project Management", level: "Proficient" },
      { id: 4, name: "Project Management", level: "Proficient" },
      { id: 5, name: "Project Management", level: "Proficient" },
      { id: 6, name: "Project Management", level: "Proficient" },
      { id: 7, name: "Project Management", level: "Proficient" },
    ],
    coreTasks: [
      { id: 1, name: "Data Analysis", level: "Proficient" },
      { id: 2, name: "Data Analysis", level: "Proficient" },
      { id: 3, name: "Data Analysis", level: "Proficient" },
      { id: 4, name: "Data Analysis", level: "Proficient" },
      { id: 5, name: "Data Analysis", level: "Proficient" },
      { id: 6, name: "Data Analysis", level: "Proficient" },
    ],
    softSkills: [
      { id: 1, name: "Data Analysis", level: "Proficient" },
      { id: 2, name: "Data Analysis", level: "Proficient" },
      { id: 3, name: "Data Analysis", level: "Proficient" },
      { id: 4, name: "Data Analysis", level: "Proficient" },
      { id: 5, name: "Data Analysis", level: "Proficient" },
    ],
    languages: ["German"],
  });

  // Inputs for adding new items
  const [newSkill, setNewSkill] = useState({ name: "", level: "Proficient" });
  const [newKnowledge, setNewKnowledge] = useState({
    name: "",
    level: "Proficient",
  });
  const [newCoreTask, setNewCoreTask] = useState({
    name: "",
    level: "Proficient",
  });
  const [newSoftSkill, setNewSoftSkill] = useState({
    name: "",
    level: "Proficient",
  });

  // Add handlers
  const handleAddSkill = () => {
    if (!newSkill.name.trim()) return;
    setFormData((prev) => ({
      ...prev,
      requiredSkills: [
        ...prev.requiredSkills,
        { id: Date.now(), name: newSkill.name.trim(), level: newSkill.level },
      ],
    }));
    setNewSkill({ name: "", level: "Proficient" });
  };

  const handleRemoveSkill = (id) => {
    setFormData((prev) => ({
      ...prev,
      requiredSkills: prev.requiredSkills.filter((item) => item.id !== id),
    }));
  };

  const handleAddKnowledge = () => {
    if (!newKnowledge.name.trim()) return;
    setFormData((prev) => ({
      ...prev,
      knowledge: [
        ...prev.knowledge,
        {
          id: Date.now(),
          name: newKnowledge.name.trim(),
          level: newKnowledge.level,
        },
      ],
    }));
    setNewKnowledge({ name: "", level: "Proficient" });
  };

  const handleRemoveKnowledge = (id) => {
    setFormData((prev) => ({
      ...prev,
      knowledge: prev.knowledge.filter((item) => item.id !== id),
    }));
  };

  const handleAddCoreTask = () => {
    if (!newCoreTask.name.trim()) return;
    setFormData((prev) => ({
      ...prev,
      coreTasks: [
        ...prev.coreTasks,
        {
          id: Date.now(),
          name: newCoreTask.name.trim(),
          level: newCoreTask.level,
        },
      ],
    }));
    setNewCoreTask({ name: "", level: "Proficient" });
  };

  const handleRemoveCoreTask = (id) => {
    setFormData((prev) => ({
      ...prev,
      coreTasks: prev.coreTasks.filter((item) => item.id !== id),
    }));
  };

  const handleAddSoftSkill = () => {
    if (!newSoftSkill.name.trim()) return;
    setFormData((prev) => ({
      ...prev,
      softSkills: [
        ...prev.softSkills,
        {
          id: Date.now(),
          name: newSoftSkill.name.trim(),
          level: newSoftSkill.level,
        },
      ],
    }));
    setNewSoftSkill({ name: "", level: "Proficient" });
  };

  const handleRemoveSoftSkill = (id) => {
    setFormData((prev) => ({
      ...prev,
      softSkills: prev.softSkills.filter((item) => item.id !== id),
    }));
  };

  // Publish Job Handler
  const handlePublishJob = () => {
    toast.success("Job published successfully!");
    router.push("/company/matches");
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8 animate-in fade-in duration-300 pb-12">
      {/* 1. Header with Title & Subtitle */}
      <div className="text-center space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] dark:text-white tracking-tight">
          Post a New Job
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400">
          Find the perfect candidate for your position
        </p>
      </div>

      {/* 2. Top Stepper Indicator (Matching Screenshots) */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
        {/* Step 1: Job Type */}
        <div className="flex items-center gap-2">
          <span
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              currentStep > 1
                ? "bg-[#22C55E] text-white"
                : currentStep === 1
                ? "bg-blue-600 text-white"
                : "border border-gray-300 text-gray-400 dark:border-gray-700"
            }`}
          >
            {currentStep > 1 ? "01" : "01"}
          </span>
          <span
            className={`text-xs sm:text-sm font-semibold transition-colors ${
              currentStep > 1
                ? "text-[#22C55E]"
                : currentStep === 1
                ? "text-blue-600"
                : "text-gray-400 dark:text-gray-500"
            }`}
          >
            Job Type
          </span>
        </div>

        <FiChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600" />

        {/* Step 2: Job Details */}
        <div className="flex items-center gap-2">
          <span
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              currentStep > 2
                ? "bg-[#22C55E] text-white"
                : currentStep === 2
                ? "bg-blue-600 text-white"
                : "border border-gray-300 text-gray-400 dark:border-gray-700"
            }`}
          >
            02
          </span>
          <span
            className={`text-xs sm:text-sm font-semibold transition-colors ${
              currentStep > 2
                ? "text-[#22C55E]"
                : currentStep === 2
                ? "text-blue-600"
                : "text-gray-400 dark:text-gray-500"
            }`}
          >
            Job Details
          </span>
        </div>

        <FiChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600" />

        {/* Step 3: Review & Publish */}
        <div className="flex items-center gap-2">
          <span
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              currentStep === 3
                ? "bg-blue-600 text-white"
                : "border border-gray-300 text-gray-400 dark:border-gray-700"
            }`}
          >
            03
          </span>
          <span
            className={`text-xs sm:text-sm font-semibold transition-colors ${
              currentStep === 3
                ? "text-blue-600"
                : "text-gray-400 dark:text-gray-500"
            }`}
          >
            Review & Publish
          </span>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* STEP 1: SELECT JOB TYPE                              */}
      {/* ---------------------------------------------------- */}
      {currentStep === 1 && (
        <div className="bg-white dark:bg-[#151B2B] rounded-3xl p-6 sm:p-10 border border-gray-100 dark:border-gray-800 shadow-xs space-y-6 animate-in fade-in">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
            Select Job Type
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Permanent */}
            <div
              onClick={() =>
                setFormData((prev) => ({ ...prev, jobType: "Permanent" }))
              }
              className={`p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center cursor-pointer transition-all duration-200 border-2 ${
                formData.jobType === "Permanent"
                  ? "border-blue-600 bg-white dark:bg-[#1A2234] shadow-sm relative ring-2 ring-blue-600/10"
                  : "border-gray-100 dark:border-gray-800 bg-white dark:bg-[#151B2B] hover:border-gray-200 dark:hover:border-gray-700"
              }`}
            >
              {/* Illustration Icon */}
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8"
                    y="14"
                    width="32"
                    height="24"
                    rx="4"
                    fill="#2563EB"
                  />
                  <rect
                    x="6"
                    y="18"
                    width="36"
                    height="22"
                    rx="3"
                    fill="#1D4ED8"
                  />
                  <path
                    d="M18 14V11C18 9.34315 19.3431 8 21 8H27C28.6569 8 30 9.34315 30 11V14"
                    stroke="#F97316"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <rect
                    x="21"
                    y="24"
                    width="6"
                    height="5"
                    rx="1.5"
                    fill="#FDE047"
                  />
                </svg>
              </div>

              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                Permanent
              </h3>
              <p className="text-xs text-gray-400 dark:text-gray-400 mt-1">
                Full-time long-term position
              </p>

              {formData.jobType === "Permanent" && (
                <div className="mt-4 w-3.5 h-3.5 rounded-full border-2 border-blue-600 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                </div>
              )}
            </div>

            {/* Card 2: Mini Job */}
            <div
              onClick={() =>
                setFormData((prev) => ({ ...prev, jobType: "Mini Job" }))
              }
              className={`p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center cursor-pointer transition-all duration-200 border-2 ${
                formData.jobType === "Mini Job"
                  ? "border-blue-600 bg-white dark:bg-[#1A2234] shadow-sm relative ring-2 ring-blue-600/10"
                  : "border-gray-100 dark:border-gray-800 bg-white dark:bg-[#151B2B] hover:border-gray-200 dark:hover:border-gray-700"
              }`}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 10H34M14 38H34"
                    stroke="#D97706"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 10C16 20 22 24 24 24C26 24 32 20 32 10H16Z"
                    fill="#FDE68A"
                    stroke="#D97706"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M16 38C16 28 22 24 24 24C26 24 32 28 32 38H16Z"
                    fill="#F59E0B"
                    stroke="#D97706"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>

              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                Mini Job
              </h3>
              <p className="text-xs text-gray-400 dark:text-gray-400 mt-1">
                Part-time position (450€ basis)
              </p>

              {formData.jobType === "Mini Job" && (
                <div className="mt-4 w-3.5 h-3.5 rounded-full border-2 border-blue-600 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                </div>
              )}
            </div>

            {/* Card 3: Temporary */}
            <div
              onClick={() =>
                setFormData((prev) => ({ ...prev, jobType: "Temporary" }))
              }
              className={`p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center cursor-pointer transition-all duration-200 border-2 ${
                formData.jobType === "Temporary"
                  ? "border-blue-600 bg-white dark:bg-[#1A2234] shadow-sm relative ring-2 ring-blue-600/10"
                  : "border-gray-100 dark:border-gray-800 bg-white dark:bg-[#151B2B] hover:border-gray-200 dark:hover:border-gray-700"
              }`}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="16"
                    y="12"
                    width="16"
                    height="14"
                    rx="3"
                    fill="#3B82F6"
                  />
                  <rect
                    x="14"
                    y="24"
                    width="20"
                    height="5"
                    rx="2"
                    fill="#1D4ED8"
                  />
                  <path
                    d="M24 29V36M18 38L30 38"
                    stroke="#475569"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <circle cx="16" cy="39" r="2" fill="#F87171" />
                  <circle cx="32" cy="39" r="2" fill="#F87171" />
                </svg>
              </div>

              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                Temporary
              </h3>
              <p className="text-xs text-gray-400 dark:text-gray-400 mt-1">
                Fixed-term contract position
              </p>

              {formData.jobType === "Temporary" && (
                <div className="mt-4 w-3.5 h-3.5 rounded-full border-2 border-blue-600 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                </div>
              )}
            </div>
          </div>

          {/* Action button to proceed */}
          <div className="pt-6 flex justify-end">
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="px-8 py-3 rounded-xl bg-[#222B45] hover:bg-[#1A2238] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Continue to Job Details</span>
              <FiChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* STEP 2: JOB DETAILS                                  */}
      {/* ---------------------------------------------------- */}
      {currentStep === 2 && (
        <div className="bg-white dark:bg-[#151B2B] rounded-3xl p-6 sm:p-10 border border-gray-100 dark:border-gray-800 shadow-xs space-y-7 animate-in fade-in">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
            Job Details
          </h2>

          <div className="space-y-5">
            {/* Row 1: Job Title & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  value={formData.jobTitle}
                  onChange={(e) =>
                    setFormData({ ...formData, jobTitle: e.target.value })
                  }
                  placeholder="e.g., Senior Frontend Developer"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  placeholder="e.g., Berlin, Germany"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>

            {/* Row 2: Type (Hybrid, Remote, On-site) & Salary Range */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Type
                </label>
                <div className="flex items-center gap-6 py-2.5 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234]">
                  {["Hybrid", "Remote", "On-site"].map((t) => (
                    <label
                      key={t}
                      className="flex items-center gap-2 cursor-pointer text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      <input
                        type="radio"
                        name="workplaceType"
                        checked={formData.workplaceType === t}
                        onChange={() =>
                          setFormData({ ...formData, workplaceType: t })
                        }
                        className="w-3.5 h-3.5 text-blue-600 focus:ring-blue-500"
                      />
                      <span>{t}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Salary Range
                </label>
                <input
                  type="text"
                  value={formData.salaryRange}
                  onChange={(e) =>
                    setFormData({ ...formData, salaryRange: e.target.value })
                  }
                  placeholder="e.g., €60,000 - €80,000"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>

            {/* Row 3: Vacancy & Deadline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Vacancy
                </label>
                <input
                  type="text"
                  value={formData.vacancy}
                  onChange={(e) =>
                    setFormData({ ...formData, vacancy: e.target.value })
                  }
                  placeholder="e.g., 10"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Deadline
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.deadline}
                    onChange={(e) =>
                      setFormData({ ...formData, deadline: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Row 4: Job Description * */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Job Description *
              </label>
              <textarea
                rows={4}
                value={formData.jobDescription}
                onChange={(e) =>
                  setFormData({ ...formData, jobDescription: e.target.value })
                }
                placeholder="Describe the role, responsibilities, and what you're looking for..."
                className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 leading-relaxed"
              />
            </div>

            {/* Row 5: Benefits & Highlights */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Benefits & Highlights
              </label>
              <textarea
                rows={4}
                value={formData.benefits}
                onChange={(e) =>
                  setFormData({ ...formData, benefits: e.target.value })
                }
                placeholder="e.g., Remote work, flexible hours, health insurance, team events..."
                className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 leading-relaxed"
              />
            </div>

            {/* ------------------------------------------------ */}
            {/* SKILLS & REQUIREMENTS SUBSECTIONS                */}
            {/* ------------------------------------------------ */}

            {/* 1. Required Skills* */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FiTool className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                    Required Skills*
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="p-1 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-600 transition-colors cursor-pointer"
                >
                  <FiPlus className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={newSkill.name}
                  onChange={(e) =>
                    setNewSkill({ ...newSkill, name: e.target.value })
                  }
                  onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
                  placeholder="e.g., Figma"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20"
                />
                <select
                  value={newSkill.level}
                  onChange={(e) =>
                    setNewSkill({ ...newSkill, level: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-700 dark:text-gray-200 focus:outline-hidden"
                >
                  <option value="Proficient">Select Level (Proficient)</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>

              {/* Added Skills Chips */}
              {formData.requiredSkills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.requiredSkills.map((item) => (
                    <span
                      key={item.id}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                      <span>
                        {item.name} • {item.level}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(item.id)}
                        className="hover:text-red-500"
                      >
                        <FiX className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Required Knowledge */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <HiOutlineBookOpen className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                    Required Knowledge
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleAddKnowledge}
                  className="p-1 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-600 transition-colors cursor-pointer"
                >
                  <FiPlus className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={newKnowledge.name}
                  onChange={(e) =>
                    setNewKnowledge({ ...newKnowledge, name: e.target.value })
                  }
                  onKeyDown={(e) => e.key === "Enter" && handleAddKnowledge()}
                  placeholder="Project Management"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20"
                />
                <select
                  value={newKnowledge.level}
                  onChange={(e) =>
                    setNewKnowledge({ ...newKnowledge, level: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-700 dark:text-gray-200 focus:outline-hidden"
                >
                  <option value="Proficient">Select Level (Proficient)</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>

              {formData.knowledge.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.knowledge.map((item) => (
                    <span
                      key={item.id}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                      <span>
                        {item.name} • {item.level}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveKnowledge(item.id)}
                        className="hover:text-red-500"
                      >
                        <FiX className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Required Core tasks & Duties */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <HiOutlineClipboardList className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                    Required Core tasks & Duties
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleAddCoreTask}
                  className="p-1 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-600 transition-colors cursor-pointer"
                >
                  <FiPlus className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={newCoreTask.name}
                  onChange={(e) =>
                    setNewCoreTask({ ...newCoreTask, name: e.target.value })
                  }
                  onKeyDown={(e) => e.key === "Enter" && handleAddCoreTask()}
                  placeholder="Project Management"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20"
                />
                <select
                  value={newCoreTask.level}
                  onChange={(e) =>
                    setNewCoreTask({ ...newCoreTask, level: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-700 dark:text-gray-200 focus:outline-hidden"
                >
                  <option value="Proficient">Select Level (Proficient)</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>

              {formData.coreTasks.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.coreTasks.map((item) => (
                    <span
                      key={item.id}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                      <span>
                        {item.name} • {item.level}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveCoreTask(item.id)}
                        className="hover:text-red-500"
                      >
                        <FiX className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Required Soft skills */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <HiOutlineLightBulb className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                    Required Soft skills
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleAddSoftSkill}
                  className="p-1 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-600 transition-colors cursor-pointer"
                >
                  <FiPlus className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={newSoftSkill.name}
                  onChange={(e) =>
                    setNewSoftSkill({ ...newSoftSkill, name: e.target.value })
                  }
                  onKeyDown={(e) => e.key === "Enter" && handleAddSoftSkill()}
                  placeholder="Project Management"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20"
                />
                <select
                  value={newSoftSkill.level}
                  onChange={(e) =>
                    setNewSoftSkill({ ...newSoftSkill, level: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-700 dark:text-gray-200 focus:outline-hidden"
                >
                  <option value="Proficient">Select Level (Proficient)</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>

              {formData.softSkills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.softSkills.map((item) => (
                    <span
                      key={item.id}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                      <span>
                        {item.name} • {item.level}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveSoftSkill(item.id)}
                        className="hover:text-red-500"
                      >
                        <FiX className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Navigation Buttons */}
          <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="px-8 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Back
            </button>

            <button
              type="button"
              onClick={() => setCurrentStep(3)}
              className="px-8 py-3 rounded-xl bg-[#222B45] hover:bg-[#1A2238] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
            >
              Continue to Review
            </button>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* STEP 3: REVIEW & PUBLISH                             */}
      {/* ---------------------------------------------------- */}
      {currentStep === 3 && (
        <div className="bg-white dark:bg-[#151B2B] rounded-3xl p-6 sm:p-10 border border-gray-100 dark:border-gray-800 shadow-xs space-y-8 animate-in fade-in">
          {/* Top Company Header Card */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              {/* Colorful 4-quadrant company logo (as in screenshot 3) */}
              <div className="w-12 h-12 rounded-2xl bg-linear-to-tr from-emerald-400 via-teal-400 to-green-500 flex items-center justify-center shadow-xs">
                <div className="grid grid-cols-2 gap-1 w-6 h-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/90" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/90" />
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  {formData.companyName}
                </h3>
                <p className="text-xs text-gray-400 dark:text-gray-400 mt-0.5">
                  {formData.jobTitle}
                </p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50">
              {formData.jobType}
            </span>
          </div>

          {/* Quick Info Grid (6 items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 rounded-2xl bg-gray-50/60 dark:bg-[#1A2234]/50 border border-gray-100 dark:border-gray-800">
            {/* 1. Salary */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#151B2B] text-gray-600 dark:text-gray-300 flex items-center justify-center shadow-2xs border border-gray-100 dark:border-gray-800">
                <FiDollarSign className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <span className="text-[11px] text-gray-400 block leading-tight">
                  Salary
                </span>
                <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                  {formData.salaryRange}
                </span>
              </div>
            </div>

            {/* 2. Job Type */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#151B2B] text-gray-600 dark:text-gray-300 flex items-center justify-center shadow-2xs border border-gray-100 dark:border-gray-800">
                <FiBriefcase className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <span className="text-[11px] text-gray-400 block leading-tight">
                  Job Type
                </span>
                <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                  {formData.jobType === "Permanent"
                    ? "Full Time"
                    : formData.jobType}
                </span>
              </div>
            </div>

            {/* 3. Location */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#151B2B] text-gray-600 dark:text-gray-300 flex items-center justify-center shadow-2xs border border-gray-100 dark:border-gray-800">
                <FiMapPin className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <span className="text-[11px] text-gray-400 block leading-tight">
                  Location
                </span>
                <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                  {formData.location}
                </span>
              </div>
            </div>

            {/* 4. Vacancies */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#151B2B] text-gray-600 dark:text-gray-300 flex items-center justify-center shadow-2xs border border-gray-100 dark:border-gray-800">
                <FiUsers className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <span className="text-[11px] text-gray-400 block leading-tight">
                  Vacancies
                </span>
                <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                  {formData.vacancy}
                </span>
              </div>
            </div>

            {/* 5. Industry */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#151B2B] text-gray-600 dark:text-gray-300 flex items-center justify-center shadow-2xs border border-gray-100 dark:border-gray-800">
                <HiOutlineOfficeBuilding className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <span className="text-[11px] text-gray-400 block leading-tight">
                  Industry
                </span>
                <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                  {formData.industry}
                </span>
              </div>
            </div>

            {/* 6. Deadline */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#151B2B] text-gray-600 dark:text-gray-300 flex items-center justify-center shadow-2xs border border-gray-100 dark:border-gray-800">
                <FiCalendar className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <span className="text-[11px] text-gray-400 block leading-tight">
                  Deadline
                </span>
                <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                  {formData.deadline}
                </span>
              </div>
            </div>
          </div>

          {/* Job Summary Section */}
          <div className="space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
              Job Summary
            </h4>
            <p className="text-xs sm:text-[13px] leading-relaxed text-gray-600 dark:text-gray-300">
              {formData.jobDescription}
            </p>
          </div>

          {/* Benefits & Highlights Section */}
          <div className="space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
              Benefits & Highlights
            </h4>
            <p className="text-xs sm:text-[13px] leading-relaxed text-gray-600 dark:text-gray-300">
              {formData.benefits}
            </p>
          </div>

          {/* Required Skill */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2">
              <FiTool className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                Required Skill
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {formData.requiredSkills.map((item) => (
                <span
                  key={item.id}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-[#1A2234] text-gray-700 dark:text-gray-300"
                >
                  {item.name} • {item.level}
                </span>
              ))}
            </div>
          </div>

          {/* Knowledge */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2">
              <HiOutlineBookOpen className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                Knowledge
              </h4>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-400">
              Topics and technical understanding expected for your role.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {formData.knowledge.map((item) => (
                <span
                  key={item.id}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-[#1A2234] text-gray-700 dark:text-gray-300"
                >
                  <span>
                    {item.name} • {item.level}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveKnowledge(item.id)}
                    className="hover:text-red-500"
                  >
                    <FiX className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Core tasks & Duties */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2">
              <HiOutlineClipboardList className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                Core tasks & Duties
              </h4>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-400">
              Main activities and responsibilities you&apos;ll handle.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {formData.coreTasks.map((item) => (
                <span
                  key={item.id}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-[#1A2234] text-gray-700 dark:text-gray-300"
                >
                  <span>
                    {item.name} • {item.level}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveCoreTask(item.id)}
                    className="hover:text-red-500"
                  >
                    <FiX className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2">
              <HiOutlineLightBulb className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                Soft skills
              </h4>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-400">
              Personal traits and cognitive skills to succeed in your role.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {formData.softSkills.map((item) => (
                <span
                  key={item.id}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-[#1A2234] text-gray-700 dark:text-gray-300"
                >
                  <span>
                    {item.name} • {item.level}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveSoftSkill(item.id)}
                    className="hover:text-red-500"
                  >
                    <FiX className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2">
              <FiGlobe className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                Languages
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.languages.map((lang, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-[#1A2234] text-gray-700 dark:text-gray-300"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="px-8 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Back to Edit
            </button>

            <button
              type="button"
              onClick={handlePublishJob}
              className="px-8 py-3 rounded-xl bg-[#222B45] hover:bg-[#1A2238] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
            >
              Publish Job & View Matches
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
