"use client";
import React, { useState } from "react";
import {
  FiArrowLeft,
  FiPlus,
  FiX,
  FiTool,
  FiBookOpen,
  FiList,
  FiSmile,
  FiGlobe,
} from "react-icons/fi";
import ProgressBar from "./ProgressBar";

const INITIAL_SKILLS = {
  tools: [
    { name: "Canva", level: "Proficient" },
    { name: "Figma", level: "Proficient" },
  ],
  knowledge: [
    { name: "Project Management", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Agile Workflow", level: "Proficient" },
    { name: "Strategic Planning", level: "Proficient" },
  ],
  tasks: [
    { name: "Data Analysis", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "UX Research", level: "Proficient" },
    { name: "Wireframing", level: "Proficient" },
  ],
  softSkills: [
    { name: "Problem Solving", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Effective Communication", level: "Proficient" },
    { name: "Adaptability", level: "Proficient" },
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "German", level: "Intermediate" },
  ],
};

const SkillSetStep = ({
  initialData = INITIAL_SKILLS,
  onContinue,
  onBack,
}) => {
  const [skills, setSkills] = useState(initialData);
  const [activeCategoryModal, setActiveCategoryModal] = useState(null);
  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillLevel, setNewSkillLevel] = useState("Proficient");

  const removeSkill = (category, index) => {
    setSkills((prev) => ({
      ...prev,
      [category]: prev[category].filter((_, idx) => idx !== index),
    }));
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkillName.trim() || !activeCategoryModal) return;

    setSkills((prev) => ({
      ...prev,
      [activeCategoryModal]: [
        ...prev[activeCategoryModal],
        { name: newSkillName.trim(), level: newSkillLevel },
      ],
    }));

    setNewSkillName("");
    setActiveCategoryModal(null);
  };

  const handleConfirm = () => {
    onContinue(skills);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-8">
      {/* Progress Bar */}
      <ProgressBar percent={75} />

      <div className="max-w-xl lg:max-w-2xl mx-auto">
        {/* Header with back */}
        <div className="flex items-center gap-3 mb-6 lg:mb-8">
          <button
            type="button"
            onClick={onBack}
            className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
            aria-label="Go back"
          >
            <FiArrowLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E293B] tracking-tight">
            We&apos;ve prepared your skill set
          </h1>
        </div>

        <div className="space-y-8 divide-y divide-slate-100">
          {/* Section: Tools */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <FiTool className="w-4 h-4 lg:w-5 lg:h-5 text-slate-700" />
              <h2 className="text-base lg:text-lg font-bold text-[#1E293B]">Tools</h2>
            </div>
            <p className="text-xs lg:text-sm text-slate-500 mb-4">
              Equipment or instruction commonly used in your role
            </p>
            <div className="flex flex-wrap gap-2.5">
              {skills.tools.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F1F5F9] text-xs lg:text-sm font-medium text-slate-700 border border-slate-200 shadow-2xs group"
                >
                  <span>{item.name}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">{item.level}</span>
                  <button
                    type="button"
                    onClick={() => removeSkill("tools", idx)}
                    className="ml-0.5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <FiX className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
              <button
                type="button"
                onClick={() => setActiveCategoryModal("tools")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-300 hover:bg-slate-50 text-xs lg:text-sm font-medium text-slate-700 transition-colors cursor-pointer shadow-2xs"
              >
                <span>Add Tools</span>
                <FiPlus className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>
          </div>

          {/* Section: Knowledge */}
          <div className="pt-6 lg:pt-8">
            <div className="flex items-center gap-2 mb-1">
              <FiBookOpen className="w-4 h-4 lg:w-5 lg:h-5 text-slate-700" />
              <h2 className="text-base lg:text-lg font-bold text-[#1E293B]">Knowledge</h2>
            </div>
            <p className="text-xs lg:text-sm text-slate-500 mb-4">
              Topics and technical understanding expected for your role.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {skills.knowledge.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F1F5F9] text-xs lg:text-sm font-medium text-slate-700 border border-slate-200 shadow-2xs group"
                >
                  <span>{item.name}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">{item.level}</span>
                  <button
                    type="button"
                    onClick={() => removeSkill("knowledge", idx)}
                    className="ml-0.5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <FiX className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
              <button
                type="button"
                onClick={() => setActiveCategoryModal("knowledge")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-300 hover:bg-slate-50 text-xs lg:text-sm font-medium text-slate-700 transition-colors cursor-pointer shadow-2xs"
              >
                <span>Add Knowledge</span>
                <FiPlus className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>
          </div>

          {/* Section: Core tasks & Duties */}
          <div className="pt-6 lg:pt-8">
            <div className="flex items-center gap-2 mb-1">
              <FiList className="w-4 h-4 lg:w-5 lg:h-5 text-slate-700" />
              <h2 className="text-base lg:text-lg font-bold text-[#1E293B]">
                Core tasks &amp; Duties
              </h2>
            </div>
            <p className="text-xs lg:text-sm text-slate-500 mb-4">
              Main activities and responsibilities you&apos;ll handle.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {skills.tasks.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F1F5F9] text-xs lg:text-sm font-medium text-slate-700 border border-slate-200 shadow-2xs group"
                >
                  <span>{item.name}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">{item.level}</span>
                  <button
                    type="button"
                    onClick={() => removeSkill("tasks", idx)}
                    className="ml-0.5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <FiX className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
              <button
                type="button"
                onClick={() => setActiveCategoryModal("tasks")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-300 hover:bg-slate-50 text-xs lg:text-sm font-medium text-slate-700 transition-colors cursor-pointer shadow-2xs"
              >
                <span>Add Tasks</span>
                <FiPlus className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>
          </div>

          {/* Section: Soft skills */}
          <div className="pt-6 lg:pt-8">
            <div className="flex items-center gap-2 mb-1">
              <FiSmile className="w-4 h-4 lg:w-5 lg:h-5 text-slate-700" />
              <h2 className="text-base lg:text-lg font-bold text-[#1E293B]">Soft skills</h2>
            </div>
            <p className="text-xs lg:text-sm text-slate-500 mb-4">
              Personal traits and cognitive skills to succeed in your role.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {skills.softSkills.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F1F5F9] text-xs lg:text-sm font-medium text-slate-700 border border-slate-200 shadow-2xs group"
                >
                  <span>{item.name}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">{item.level}</span>
                  <button
                    type="button"
                    onClick={() => removeSkill("softSkills", idx)}
                    className="ml-0.5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <FiX className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
              <button
                type="button"
                onClick={() => setActiveCategoryModal("softSkills")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-300 hover:bg-slate-50 text-xs lg:text-sm font-medium text-slate-700 transition-colors cursor-pointer shadow-2xs"
              >
                <span>Add soft skill</span>
                <FiPlus className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>
          </div>

          {/* Section: Languages */}
          <div className="pt-6 lg:pt-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FiGlobe className="w-4 h-4 lg:w-5 lg:h-5 text-slate-700" />
                <h2 className="text-base lg:text-lg font-bold text-[#1E293B]">Languages</h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveCategoryModal("languages")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-300 hover:bg-slate-50 text-xs lg:text-sm font-medium text-slate-700 transition-colors cursor-pointer shadow-2xs"
              >
                <FiPlus className="w-3.5 h-3.5 text-slate-500" />
                <span>Add</span>
              </button>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {skills.languages.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F1F5F9] text-xs lg:text-sm font-medium text-slate-700 border border-slate-200 shadow-2xs group"
                >
                  <span>{item.name}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">{item.level}</span>
                  <button
                    type="button"
                    onClick={() => removeSkill("languages", idx)}
                    className="ml-0.5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <FiX className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 pt-8 lg:pt-10">
          <button
            type="button"
            onClick={onBack}
            className="px-8 lg:px-10 py-2.5 lg:py-3 rounded-full border border-slate-300 hover:bg-slate-100 text-sm lg:text-base font-medium text-slate-700 transition-colors cursor-pointer"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="px-8 lg:px-10 py-2.5 lg:py-3 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-sm lg:text-base font-semibold text-white transition-all shadow-xs active:scale-95 cursor-pointer"
          >
            Confirm &amp; Continue
          </button>
        </div>
      </div>

      {/* Add Skill Mini Modal */}
      {activeCategoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-slate-100">
            <button
              onClick={() => setActiveCategoryModal(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 cursor-pointer"
            >
              <FiX className="w-4 h-4" />
            </button>

            <h3 className="text-base lg:text-lg font-bold text-[#1E293B] mb-4 capitalize">
              Add to {activeCategoryModal}
            </h3>

            <form onSubmit={handleAddSkill} className="space-y-4">
              <div>
                <label className="block text-xs lg:text-sm font-medium text-slate-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Graphic Design"
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  autoFocus
                  className="w-full h-11 px-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm lg:text-base text-[#1E293B] focus:outline-hidden focus:border-[#29324B]"
                />
              </div>

              <div>
                <label className="block text-xs lg:text-sm font-medium text-slate-600 mb-1">
                  Proficiency Level
                </label>
                <select
                  value={newSkillLevel}
                  onChange={(e) => setNewSkillLevel(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm lg:text-base text-[#1E293B] focus:outline-hidden focus:border-[#29324B]"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                  <option value="Native / Fluent">Native / Fluent</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setActiveCategoryModal(null)}
                  className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-sm font-semibold text-white shadow-2xs cursor-pointer"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillSetStep;
