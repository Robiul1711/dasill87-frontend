"use client";
import React, { useState } from "react";
import { FiArrowLeft, FiPlus, FiMoreVertical, FiEdit2, FiTrash2 } from "react-icons/fi";
import ProgressBar from "./ProgressBar";
import AddJobModal from "./AddJobModal";

const WorkExperienceStep = ({
  initialExperiences = [],
  onContinue,
  onBack,
}) => {
  const [experiences, setExperiences] = useState(initialExperiences);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [activeMenuId, setActiveMenuId] = useState(null);

  const handleOpenAdd = () => {
    setEditingJob(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (job) => {
    setEditingJob(job);
    setIsModalOpen(true);
    setActiveMenuId(null);
  };

  const handleDelete = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
    setActiveMenuId(null);
  };

  const handleSaveJob = (jobData) => {
    if (editingJob) {
      setExperiences(
        experiences.map((exp) => (exp.id === jobData.id ? jobData : exp))
      );
    } else {
      setExperiences([...experiences, jobData]);
    }
  };

  const handleSkipNoExperience = () => {
    onContinue([]);
  };

  const handleSaveAndContinue = () => {
    onContinue(experiences);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-8">
      {/* Progress Bar */}
      <ProgressBar percent={50} />

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
            Work experience
          </h1>
        </div>

        {/* Experience List or Empty */}
        <div className="space-y-4 mb-6 lg:mb-8">
          {experiences.map((job) => (
            <div
              key={job.id}
              className="p-5 lg:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between transition-all hover:border-slate-300 relative shadow-2xs"
            >
              <div className="flex items-center gap-4 lg:gap-5">
                {/* Company Logo / Avatar */}
                <div className="w-13 h-13 lg:w-14 lg:h-14 rounded-2xl bg-slate-200/90 text-slate-700 flex flex-col items-center justify-center font-bold text-xs lg:text-sm leading-tight tracking-tighter shrink-0 border border-slate-300">
                  <span>{job.company?.slice(0, 3)?.toUpperCase() || "JOB"}</span>
                  <span className="text-[10px] opacity-70">inc</span>
                </div>

                <div>
                  <h3 className="text-base lg:text-lg font-bold text-[#2563EB]">
                    {job.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-slate-500 mt-0.5">
                    {job.company}
                    {job.location ? ` • ${job.location}` : ""}
                    {job.startDate
                      ? ` • ${job.startDate} - ${job.endDate || "Present"}`
                      : ""}
                  </p>
                </div>
              </div>

              {/* Action kebab menu */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setActiveMenuId(activeMenuId === job.id ? null : job.id)
                  }
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer"
                  aria-label="Options"
                >
                  <FiMoreVertical className="w-5 h-5" />
                </button>

                {activeMenuId === job.id && (
                  <div className="absolute right-0 top-full mt-1 w-36 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-20 animate-fade-in">
                    <button
                      type="button"
                      onClick={() => handleOpenEdit(job)}
                      className="w-full px-4 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                    >
                      <FiEdit2 className="w-4 h-4" /> Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(job.id)}
                      className="w-full px-4 py-2 text-left text-sm font-medium text-red-600 hover:bg-red-50 flex items-center gap-2 cursor-pointer"
                    >
                      <FiTrash2 className="w-4 h-4" /> Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Add Job Experience Button */}
          <button
            type="button"
            onClick={handleOpenAdd}
            className="w-full h-13 lg:h-14 px-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 hover:bg-slate-100/80 flex items-center justify-between text-sm lg:text-base font-medium text-slate-700 transition-all cursor-pointer shadow-2xs"
          >
            <span>
              {experiences.length > 0
                ? "Add another job experience"
                : "Add a job experience"}
            </span>
            <FiPlus className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 pt-4">
          {experiences.length === 0 ? (
            <>
              <button
                type="button"
                onClick={handleSkipNoExperience}
                className="px-6 sm:px-8 lg:px-10 py-2.5 lg:py-3 rounded-full border border-slate-300 hover:bg-slate-100 text-sm lg:text-base font-medium text-slate-700 transition-colors cursor-pointer"
              >
                I don&apos;t have any work experience
              </button>
              <button
                type="button"
                onClick={handleSaveAndContinue}
                className="px-6 sm:px-8 lg:px-10 py-2.5 lg:py-3 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-sm lg:text-base font-semibold text-white transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                Save &amp; Continue
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={onBack}
                className="px-8 lg:px-10 py-2.5 lg:py-3 rounded-full border border-slate-300 hover:bg-slate-100 text-sm lg:text-base font-medium text-slate-700 transition-colors cursor-pointer"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleSaveAndContinue}
                className="px-8 lg:px-10 py-2.5 lg:py-3 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-sm lg:text-base font-semibold text-white transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                Save &amp; Continue
              </button>
            </>
          )}
        </div>
      </div>

      {/* Add / Edit Job Modal */}
      <AddJobModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSaveJob={handleSaveJob}
        initialJob={editingJob}
      />
    </div>
  );
};

export default WorkExperienceStep;
