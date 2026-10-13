"use client";

import React, { useState } from "react";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiTrash2,
  FiEdit2,
} from "react-icons/fi";
import { LuDices, LuSparkles } from "react-icons/lu";
import toast from "react-hot-toast";

const expDescriptionSample =
  "A dedicated professional with a robust foundation in analytical thinking and business informatics, I excel at transforming intricate datasets into meaningful, strategy-driven insights. Passionate about digital innovation, I bring hands-on expertise in data analysis, reporting, and the development of impactful solutions. My collaborative spirit enables me to build bridges across teams, driving the adoption of cutting-edge tools and empowering data-driven decision-making. Energized by dynamic environments, I am committed to streamlining processes, fostering innovation, and delivering measurable contributions within the ever-evolving digital realm.";

export default function ExperiencePanel({ cvData, setCvData, onBack }) {
  const [isAdding, setIsAdding] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    position: "",
    company: "",
    location: "",
    type: "On-site",
    startDate: "",
    endDate: "",
    current: false,
    description: expDescriptionSample,
  });

  const handleRefine = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setFormData((prev) => ({
        ...prev,
        description: `${prev.description.trim()} Collaborated closely with product managers and engineers to exceed organizational KPIs.`,
      }));
      toast.success("Description refined with AI!");
    }, 500);
  };

  const handleRegenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setFormData((prev) => ({
        ...prev,
        description:
          "Orchestrated cross-functional product design sprints, conducted end-to-end user research, and architected scalable UI components that elevated overall platform usability score by 35%.",
      }));
      toast.success("New description generated with AI!");
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.position.trim() || !formData.company.trim()) {
      toast.error("Please fill in Job Position and Company name.");
      return;
    }

    const newExperience = {
      id: `exp-${Date.now()}`,
      position: formData.position,
      company: formData.company,
      location: formData.location || "Switzerland",
      type: formData.type,
      startDate: formData.startDate || "01/2022",
      endDate: formData.current ? "Present" : formData.endDate || "Present",
      current: formData.current,
      description: formData.description,
    };

    setCvData((prev) => ({
      ...prev,
      experiences: [newExperience, ...(prev.experiences || [])],
    }));

    toast.success("Experience added successfully!");
    setIsAdding(false);
    // Reset form
    setFormData({
      position: "",
      company: "",
      location: "",
      type: "On-site",
      startDate: "",
      endDate: "",
      current: false,
      description: expDescriptionSample,
    });
  };

  const handleDelete = (id) => {
    setCvData((prev) => ({
      ...prev,
      experiences: (prev.experiences || []).filter((item) => item.id !== id),
    }));
    toast.success("Experience removed.");
  };

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-300">
      {/* Back button */}
      <div className="pb-2">
        <button
          type="button"
          onClick={() => {
            if (isAdding) setIsAdding(false);
            else onBack();
          }}
          className="inline-flex items-center gap-2 text-base font-bold text-[#1E293B] dark:text-white hover:text-brand-blue dark:hover:text-blue-400 transition-colors cursor-pointer group"
        >
          <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Experience</span>
        </button>
      </div>

      {/* ===================================================================== */}
      {/* 1. LIST VIEW (Screenshot 9) */}
      {/* ===================================================================== */}
      {!isAdding ? (
        <div className="space-y-4">
          {/* Top Add Experience Bar */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-xs flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
              Work Experience ({(cvData.experiences || []).length})
            </span>
            <button
              type="button"
              onClick={() => setIsAdding(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2A344A] hover:bg-[#1f2638] text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:scale-105 cursor-pointer"
            >
              <span>Add Experience</span>
              <FiArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Experience Items List */}
          <div className="space-y-3">
            {(cvData.experiences || []).map((exp) => (
              <div
                key={exp.id}
                className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-2xs space-y-2 hover:border-gray-200 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                      {exp.position}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {exp.company} • {exp.location} ({exp.type || "On-site"})
                    </p>
                    <p className="text-[11px] text-gray-400 font-mono mt-0.5">
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDelete(exp.id)}
                    className="p-2 text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 rounded-lg transition-colors cursor-pointer"
                    title="Remove experience"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* ===================================================================== */
        /* 2. FORM VIEW (Screenshot 10) */
        /* ===================================================================== */
        <form
          onSubmit={handleSubmit}
          className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-xs space-y-5"
        >
          {/* Description Textarea */}
          <div className="space-y-2">
            <textarea
              rows={8}
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, description: e.target.value }))
              }
              placeholder="Describe your responsibilities, key achievements, and tools used..."
              className="w-full p-4 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all leading-relaxed resize-none"
            />
            <div className="flex justify-between items-center text-[11px] text-gray-400">
              <span>{formData.description.length}/1000</span>
            </div>

            {/* AI Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-1">
              <button
                type="button"
                disabled={isGenerating}
                onClick={handleRefine}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#151B2B] hover:bg-gray-50 text-gray-800 dark:text-gray-200 text-xs font-semibold transition-all shadow-2xs hover:scale-105 cursor-pointer disabled:opacity-50"
              >
                <span>{isGenerating ? "Refining..." : "Refine Text"}</span>
                <div className="flex items-center justify-center w-4.5 h-4.5 rounded-full bg-[#1E293B] text-white text-[9px]">
                  <LuSparkles className="w-2.5 h-2.5" />
                </div>
              </button>

              <button
                type="button"
                disabled={isGenerating}
                onClick={handleRegenerate}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#151B2B] hover:bg-gray-50 text-gray-800 dark:text-gray-200 text-xs font-semibold transition-all shadow-2xs hover:scale-105 cursor-pointer disabled:opacity-50"
              >
                <span>{isGenerating ? "Generating..." : "Regenerate Text"}</span>
                <div className="flex items-center justify-center w-4.5 h-4.5 rounded-full bg-[#1E293B] text-white text-[9px]">
                  <LuDices className="w-2.5 h-2.5" />
                </div>
              </button>
            </div>
          </div>

          {/* Job Position & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                Job Position *
              </label>
              <input
                type="text"
                required
                value={formData.position}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, position: e.target.value }))
                }
                placeholder="What was your title and position"
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] text-gray-900 dark:text-white focus:outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                Company *
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, company: e.target.value }))
                }
                placeholder="Company's name"
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] text-gray-900 dark:text-white focus:outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
              />
            </div>
          </div>

          {/* Location */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              Location *
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, location: e.target.value }))
              }
              placeholder="e.g Switzerland"
              className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] text-gray-900 dark:text-white focus:outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
            />
          </div>

          {/* Work Mode: Hybrid | Remote | On-site */}
          <div className="grid grid-cols-3 gap-3">
            {["Hybrid", "Remote", "On-site"].map((m) => {
              const isSelected = formData.type === m;
              return (
                <button
                  key={m}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, type: m }))
                  }
                  className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-medium flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    isSelected
                      ? "border-brand-blue bg-blue-50/50 dark:bg-blue-950/30 text-brand-blue dark:text-blue-400 font-semibold shadow-2xs"
                      : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300"
                  }`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full border flex items-center justify-center ${
                      isSelected
                        ? "border-brand-blue bg-brand-blue"
                        : "border-gray-400 bg-transparent"
                    }`}
                  />
                  <span>{m}</span>
                </button>
              );
            })}
          </div>

          {/* Dates: Start date & End date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                Start date
              </label>
              <input
                type="text"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, startDate: e.target.value }))
                }
                placeholder="mm/yyyy"
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] text-gray-900 dark:text-white focus:outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                End date
              </label>
              <input
                type="text"
                disabled={formData.current}
                value={formData.current ? "Present" : formData.endDate}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, endDate: e.target.value }))
                }
                placeholder="mm/yyyy"
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] text-gray-900 dark:text-white focus:outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all disabled:opacity-50"
              />
            </div>
          </div>

          {/* Current Role Checkbox */}
          <div
            onClick={() =>
              setFormData((prev) => ({ ...prev, current: !prev.current }))
            }
            className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-[#FAFAFC] dark:bg-[#101522] cursor-pointer hover:border-gray-300 transition-colors"
          >
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                formData.current
                  ? "border-brand-blue bg-brand-blue"
                  : "border-gray-400 bg-white"
              }`}
            >
              {formData.current && (
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              )}
            </div>
            <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">
              I am currently working in this role
            </span>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end pt-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2A344A] hover:bg-[#1f2638] text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:scale-105 cursor-pointer"
            >
              <span>Add Experience</span>
              <FiArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
