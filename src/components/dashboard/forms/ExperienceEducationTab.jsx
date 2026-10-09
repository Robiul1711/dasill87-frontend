"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FiPlus,
  FiArrowUpRight,
  FiEdit3,
  FiTrash2,
  FiBriefcase,
} from "react-icons/fi";
import { ExperienceEducationIcon } from "@/components/icons/DashboardIcons";
import AddJobModal from "@/components/dashboard/modals/AddJobModal";
import AddEducationModal from "@/components/dashboard/modals/AddEducationModal";

export default function ExperienceEducationTab() {
  // Experiences State (Default with sample item matching Screenshot 4)
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      position: "Designer UI/UX",
      company: "ABCD Company",
      location: "Switzerland",
      workplaceType: "On-site",
      startDate: "Jan 2025",
      endDate: "Present",
      isCurrentRole: true,
      responsibilities: "",
    },
  ]);

  // Educations State (Default with sample item matching Screenshot 4)
  const [educations, setEducations] = useState([
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "ABCD",
      startDate: "Jan 2019",
      endDate: "Jan 2024",
      isCurrentlyStudying: false,
    },
  ]);

  // Modal States
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [editingEducation, setEditingEducation] = useState(null);

  // Job Handlers
  const handleOpenAddJob = () => {
    setEditingJob(null);
    setIsJobModalOpen(true);
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setIsJobModalOpen(true);
  };

  const handleDeleteJob = (id) => {
    setExperiences(experiences.filter((job) => job.id !== id));
    toast.success("Job removed");
  };

  const handleSaveJob = (jobData) => {
    if (editingJob) {
      setExperiences(
        experiences.map((j) => (j.id === jobData.id ? jobData : j))
      );
    } else {
      setExperiences([...experiences, jobData]);
    }
  };

  // Education Handlers
  const handleOpenAddEducation = () => {
    setEditingEducation(null);
    setIsEducationModalOpen(true);
  };

  const handleEditEducation = (edu) => {
    setEditingEducation(edu);
    setIsEducationModalOpen(true);
  };

  const handleDeleteEducation = (id) => {
    setEducations(educations.filter((edu) => edu.id !== id));
    toast.success("Education removed");
  };

  const handleSaveEducation = (eduData) => {
    if (editingEducation) {
      setEducations(
        educations.map((e) => (e.id === eduData.id ? eduData : e))
      );
    } else {
      setEducations([...educations, eduData]);
    }
  };

  const handleSave = () => {
    toast.success("Experience & Education saved successfully!");
  };

  return (
    <div className="rounded-2xl bg-white p-5 sm:p-7 border border-gray-100 shadow-xs dark:bg-[#151B2B] dark:border-gray-800/80 transition-all duration-200">
      {/* Top Header Card */}
      <div className="flex items-center gap-3.5 pb-6 border-b border-gray-100 dark:border-gray-800">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-blue-950/60 dark:text-blue-400">
          <ExperienceEducationIcon className="h-5 w-5" color="#0000F6" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
            Experience & Education
          </h3>
          <p className="text-xs sm:text-[13px] text-secondary dark:text-gray-400">
            Professional Experience with Educational Background
          </p>
        </div>
      </div>

      <div className="pt-6 space-y-8">
        {/* 1. Work Experience Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
              Work Experience
            </h4>
            <button
              type="button"
              onClick={handleOpenAddJob}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold transition-colors cursor-pointer"
            >
              <FiPlus className="w-3.5 h-3.5 text-secondary dark:text-gray-400" />
              <span>Add</span>
            </button>
          </div>

          {/* List or Empty State */}
          {experiences.length === 0 ? (
            <div className="space-y-3">
              <div
                onClick={handleOpenAddJob}
                className="flex min-h-22.5 items-center justify-center rounded-2xl border border-gray-200/90 dark:border-gray-800 bg-white dark:bg-[#111625] p-6 text-center cursor-pointer hover:border-brand-blue/60 transition-colors"
              >
                <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                  No experience inserted, please add
                </p>
              </div>

              <div className="flex justify-end">
                <span className="inline-block text-xs font-medium text-brand-blue bg-brand-blue/10 dark:bg-blue-950/40 dark:text-blue-400 px-4 py-1.5 rounded-xl">
                  Please add your experience to complete your profile
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {experiences.map((job) => (
                <div
                  key={job.id}
                  className="flex items-center justify-between rounded-2xl border border-gray-200/90 dark:border-gray-800 bg-white dark:bg-[#111625] p-4 sm:p-5 shadow-2xs hover:border-gray-300 dark:hover:border-gray-700 transition-all"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4F5F7] dark:bg-[#1C2438] text-gray-600 dark:text-gray-300">
                      <FiBriefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                        {job.position}
                      </h5>
                      <p className="text-xs text-secondary dark:text-gray-400 mt-0.5">
                        {job.company} • {job.startDate} - {job.endDate}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => handleEditJob(job)}
                      className="p-1.5 text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 rounded-lg cursor-pointer transition-colors"
                      title="Edit Experience"
                    >
                      <FiEdit3 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteJob(job.id)}
                      className="p-1.5 text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg cursor-pointer transition-colors"
                      title="Delete Experience"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2. Education Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
              Education
            </h4>
            <button
              type="button"
              onClick={handleOpenAddEducation}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold transition-colors cursor-pointer"
            >
              <FiPlus className="w-3.5 h-3.5 text-secondary dark:text-gray-400" />
              <span>Add</span>
            </button>
          </div>

          {/* List or Empty State */}
          {educations.length === 0 ? (
            <div className="space-y-3">
              <div
                onClick={handleOpenAddEducation}
                className="flex min-h-22.5 items-center justify-center rounded-2xl border border-gray-200/90 dark:border-gray-800 bg-white dark:bg-[#111625] p-6 text-center cursor-pointer hover:border-brand-blue/60 transition-colors"
              >
                <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                  No experience inserted, please add
                </p>
              </div>

              <div className="flex justify-end">
                <span className="inline-block text-xs font-medium text-brand-blue bg-brand-blue/10 dark:bg-blue-950/40 dark:text-blue-400 px-4 py-1.5 rounded-xl">
                  Please add your education to complete your profile
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {educations.map((edu) => (
                <div
                  key={edu.id}
                  className="flex items-center justify-between rounded-2xl border border-gray-200/90 dark:border-gray-800 bg-white dark:bg-[#111625] p-4 sm:p-5 shadow-2xs hover:border-gray-300 dark:hover:border-gray-700 transition-all"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4F5F7] dark:bg-[#1C2438] text-gray-600 dark:text-gray-300">
                      <FiBriefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h5>
                      <p className="text-xs text-secondary dark:text-gray-400 mt-0.5">
                        {edu.institution} • {edu.startDate} - {edu.endDate}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => handleEditEducation(edu)}
                      className="p-1.5 text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 rounded-lg cursor-pointer transition-colors"
                      title="Edit Education"
                    >
                      <FiEdit3 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteEducation(edu.id)}
                      className="p-1.5 text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg cursor-pointer transition-colors"
                      title="Delete Education"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
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
      <AddJobModal
        isOpen={isJobModalOpen}
        onClose={() => setIsJobModalOpen(false)}
        editingJob={editingJob}
        onSaveJob={handleSaveJob}
      />

      <AddEducationModal
        isOpen={isEducationModalOpen}
        onClose={() => setIsEducationModalOpen(false)}
        editingEducation={editingEducation}
        onSaveEducation={handleSaveEducation}
      />
    </div>
  );
}
