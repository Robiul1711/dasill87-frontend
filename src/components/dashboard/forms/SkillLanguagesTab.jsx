"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FiPlus,
  FiX,
  FiArrowUpRight,
  FiBookOpen,
  FiGlobe,
  FiTool,
  FiList,
  FiZap,
} from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi2";
import AddSkillsModal from "@/components/dashboard/modals/AddSkillsModal";
import AddLanguagesModal from "@/components/dashboard/modals/AddLanguagesModal";

export default function SkillLanguagesTab() {
  // Skill Categories State
  const [tools, setTools] = useState([
    { name: "Canva", level: "Proficient" },
    { name: "Figma", level: "Proficient" },
  ]);

  const [knowledge, setKnowledge] = useState([
    { name: "Project Management", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
  ]);

  const [coreTasks, setCoreTasks] = useState([
    { name: "Data Analysis", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
  ]);

  const [softSkills, setSoftSkills] = useState([
    { name: "Data Analysis", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
    { name: "Team Leadership", level: "Proficient" },
  ]);

  const [languages, setLanguages] = useState([
    { name: "English", level: "C1" },
  ]);

  // Modal States
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isLanguagesModalOpen, setIsLanguagesModalOpen] = useState(false);
  const [targetCategory, setTargetCategory] = useState("Tools");

  const openSkillsModalFor = (cat) => {
    setTargetCategory(cat);
    setIsSkillsModalOpen(true);
  };

  const handleAddSkills = (newSkillsList, category) => {
    const newItems = newSkillsList.map((s) => ({ name: s, level: "Proficient" }));
    if (category === "Tools") {
      setTools((prev) => [...prev, ...newItems]);
    } else if (category === "Knowledge") {
      setKnowledge((prev) => [...prev, ...newItems]);
    } else if (category === "Core tasks & Duties") {
      setCoreTasks((prev) => [...prev, ...newItems]);
    } else if (category === "Soft skills") {
      setSoftSkills((prev) => [...prev, ...newItems]);
    }
  };

  const removeItem = (list, setList, index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    toast.success("Skills & Languages saved successfully!");
  };

  return (
    <div className="rounded-2xl bg-white p-5 sm:p-7 border border-gray-100 shadow-xs dark:bg-[#151B2B] dark:border-gray-800/80 transition-all duration-200">
      {/* Top Header Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-start gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-blue-950/60 dark:text-blue-400">
            <HiOutlineLightBulb className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              Set your hard skills & languages
            </h3>
            <p className="text-xs sm:text-[13px] text-secondary dark:text-gray-400">
              Set and modify your skills. They will directly impact the quality of the matches that will be proposed to you.
            </p>
          </div>
        </div>

        {/* Top Right Add Skills Button */}
        <button
          type="button"
          onClick={() => openSkillsModalFor("Knowledge")}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer shrink-0"
        >
          <FiPlus className="w-3.5 h-3.5 text-secondary dark:text-gray-400" />
          <span>Add Skills</span>
        </button>
      </div>

      <div className="pt-6 space-y-7">
        {/* 1. Tools */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FiTool className="w-4 h-4 text-primary dark:text-gray-300" />
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">Tools</h4>
          </div>
          <p className="text-xs text-secondary dark:text-gray-400 mb-3">
            Equipment or instruction commonly used in your role
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {tools.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F4F5F7] dark:bg-[#111625] text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-100 dark:border-gray-800"
              >
                <span>{item.name}</span>
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span className="text-secondary dark:text-gray-400">{item.level}</span>
                <button
                  type="button"
                  onClick={() => removeItem(tools, setTools, idx)}
                  className="ml-1 text-gray-400 hover:text-rose-500 cursor-pointer"
                >
                  <FiX className="w-3 h-3" />
                </button>
              </span>
            ))}

            <button
              type="button"
              onClick={() => openSkillsModalFor("Tools")}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-secondary dark:text-gray-400 text-xs font-medium hover:border-brand-blue hover:text-brand-blue transition-colors cursor-pointer"
            >
              <span>Add Tools</span>
              <FiPlus className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800" />

        {/* 2. Knowledge */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FiBookOpen className="w-4 h-4 text-primary dark:text-gray-300" />
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">Knowledge</h4>
          </div>
          <p className="text-xs text-secondary dark:text-gray-400 mb-3">
            Topics and technical understanding expected for your role.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {knowledge.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F4F5F7] dark:bg-[#111625] text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-100 dark:border-gray-800"
              >
                <span>{item.name}</span>
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span className="text-secondary dark:text-gray-400">{item.level}</span>
                <button
                  type="button"
                  onClick={() => removeItem(knowledge, setKnowledge, idx)}
                  className="ml-1 text-gray-400 hover:text-rose-500 cursor-pointer"
                >
                  <FiX className="w-3 h-3" />
                </button>
              </span>
            ))}

            <button
              type="button"
              onClick={() => openSkillsModalFor("Knowledge")}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-secondary dark:text-gray-400 text-xs font-medium hover:border-brand-blue hover:text-brand-blue transition-colors cursor-pointer"
            >
              <span>Add Knowledge</span>
              <FiPlus className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800" />

        {/* 3. Core tasks & Duties */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FiList className="w-4 h-4 text-primary dark:text-gray-300" />
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">Core tasks & Duties</h4>
          </div>
          <p className="text-xs text-secondary dark:text-gray-400 mb-3">
            Main activities and responsibilities you&apos;ll handle.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {coreTasks.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F4F5F7] dark:bg-[#111625] text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-100 dark:border-gray-800"
              >
                <span>{item.name}</span>
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span className="text-secondary dark:text-gray-400">{item.level}</span>
                <button
                  type="button"
                  onClick={() => removeItem(coreTasks, setCoreTasks, idx)}
                  className="ml-1 text-gray-400 hover:text-rose-500 cursor-pointer"
                >
                  <FiX className="w-3 h-3" />
                </button>
              </span>
            ))}

            <button
              type="button"
              onClick={() => openSkillsModalFor("Core tasks & Duties")}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-secondary dark:text-gray-400 text-xs font-medium hover:border-brand-blue hover:text-brand-blue transition-colors cursor-pointer"
            >
              <span>Add Tasks</span>
              <FiPlus className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800" />

        {/* 4. Soft skills */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FiZap className="w-4 h-4 text-primary dark:text-gray-300" />
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">Soft skills</h4>
          </div>
          <p className="text-xs text-secondary dark:text-gray-400 mb-3">
            Personal traits and cognitive skills to succeed in your role.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {softSkills.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F4F5F7] dark:bg-[#111625] text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-100 dark:border-gray-800"
              >
                <span>{item.name}</span>
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span className="text-secondary dark:text-gray-400">{item.level}</span>
                <button
                  type="button"
                  onClick={() => removeItem(softSkills, setSoftSkills, idx)}
                  className="ml-1 text-gray-400 hover:text-rose-500 cursor-pointer"
                >
                  <FiX className="w-3 h-3" />
                </button>
              </span>
            ))}

            <button
              type="button"
              onClick={() => openSkillsModalFor("Soft skills")}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-secondary dark:text-gray-400 text-xs font-medium hover:border-brand-blue hover:text-brand-blue transition-colors cursor-pointer"
            >
              <span>Add soft skill</span>
              <FiPlus className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800" />

        {/* 5. Languages */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <FiGlobe className="w-4 h-4 text-primary dark:text-gray-300" />
              <h4 className="text-sm font-bold text-gray-900 dark:text-white">Languages</h4>
            </div>

            {/* + Add Button */}
            <button
              type="button"
              onClick={() => setIsLanguagesModalOpen(true)}
              className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold transition-colors cursor-pointer"
            >
              <FiPlus className="w-3 h-3" />
              <span>Add</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {languages.length === 0 ? (
              <p className="text-xs text-gray-400">No languages added yet.</p>
            ) : (
              languages.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F5F7] dark:bg-[#111625] text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-100 dark:border-gray-800"
                >
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-gray-400 dark:text-gray-500">•</span>
                  <span className="text-secondary dark:text-gray-400">Level : {item.level}</span>
                  <button
                    type="button"
                    onClick={() => removeItem(languages, setLanguages, idx)}
                    className="ml-1 text-gray-400 hover:text-rose-500 cursor-pointer"
                  >
                    <FiX className="w-3 h-3" />
                  </button>
                </span>
              ))
            )}
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-4">
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary hover:bg-primary/90 text-white dark:bg-brand-blue dark:hover:bg-brand-blue-hover text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Save</span>
            <FiArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modals */}
      <AddSkillsModal
        isOpen={isSkillsModalOpen}
        onClose={() => setIsSkillsModalOpen(false)}
        targetCategory={targetCategory}
        onAddSkills={handleAddSkills}
      />

      <AddLanguagesModal
        isOpen={isLanguagesModalOpen}
        onClose={() => setIsLanguagesModalOpen(false)}
        currentLanguages={languages}
        onSaveLanguages={(updatedLangs) => setLanguages(updatedLangs)}
      />
    </div>
  );
}
