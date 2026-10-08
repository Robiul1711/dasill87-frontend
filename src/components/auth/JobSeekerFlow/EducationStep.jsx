"use client";
import React, { useState } from "react";
import { FiArrowLeft, FiPlus, FiMoreVertical, FiEdit2, FiTrash2 } from "react-icons/fi";
import ProgressBar from "./ProgressBar";
import AddEducationModal from "./AddEducationModal";

const EducationStep = ({
  initialEducations = [],
  onContinue,
  onBack,
}) => {
  const [educations, setEducations] = useState(initialEducations);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEdu, setEditingEdu] = useState(null);
  const [activeMenuId, setActiveMenuId] = useState(null);

  const handleOpenAdd = () => {
    setEditingEdu(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (edu) => {
    setEditingEdu(edu);
    setIsModalOpen(true);
    setActiveMenuId(null);
  };

  const handleDelete = (id) => {
    setEducations(educations.filter((e) => e.id !== id));
    setActiveMenuId(null);
  };

  const handleSaveEducation = (eduData) => {
    if (editingEdu) {
      setEducations(
        educations.map((e) => (e.id === eduData.id ? eduData : e))
      );
    } else {
      setEducations([...educations, eduData]);
    }
  };

  const handleSkipNoEducation = () => {
    onContinue([]);
  };

  const handleSaveAndContinue = () => {
    onContinue(educations);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-8">
      {/* Progress Bar */}
      <ProgressBar percent={65} />

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
            Education experience
          </h1>
        </div>

        {/* Education List or Empty */}
        <div className="space-y-4 mb-6 lg:mb-8">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className="p-5 lg:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between transition-all hover:border-slate-300 relative shadow-2xs"
            >
              <div className="flex items-center gap-4 lg:gap-5">
                {/* School Avatar */}
                <div className="w-13 h-13 lg:w-14 lg:h-14 rounded-2xl bg-slate-200/90 text-slate-700 flex flex-col items-center justify-center font-bold text-xs lg:text-sm leading-tight tracking-tighter shrink-0 border border-slate-300">
                  <span>{edu.institution?.slice(0, 3)?.toUpperCase() || "EDU"}</span>
                  <span className="text-[10px] opacity-70">inst</span>
                </div>

                <div>
                  <h3 className="text-base lg:text-lg font-bold text-[#2563EB]">
                    {edu.institution || edu.degree}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-slate-500 mt-0.5">
                    {edu.degree}
                    {edu.startDate
                      ? ` • ${edu.startDate} - ${edu.endDate || "Present"}`
                      : ""}
                  </p>
                </div>
              </div>

              {/* Action kebab menu */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setActiveMenuId(activeMenuId === edu.id ? null : edu.id)
                  }
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer"
                  aria-label="Options"
                >
                  <FiMoreVertical className="w-5 h-5" />
                </button>

                {activeMenuId === edu.id && (
                  <div className="absolute right-0 top-full mt-1 w-36 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-20 animate-fade-in">
                    <button
                      type="button"
                      onClick={() => handleOpenEdit(edu)}
                      className="w-full px-4 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                    >
                      <FiEdit2 className="w-4 h-4" /> Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(edu.id)}
                      className="w-full px-4 py-2 text-left text-sm font-medium text-red-600 hover:bg-red-50 flex items-center gap-2 cursor-pointer"
                    >
                      <FiTrash2 className="w-4 h-4" /> Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Add Education Experience Button */}
          <button
            type="button"
            onClick={handleOpenAdd}
            className="w-full h-13 lg:h-14 px-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 hover:bg-slate-100/80 flex items-center justify-between text-sm lg:text-base font-medium text-slate-700 transition-all cursor-pointer shadow-2xs"
          >
            <span>
              {educations.length > 0
                ? "Add another education experience"
                : "Add an education experience"}
            </span>
            <FiPlus className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 pt-4">
          {educations.length === 0 ? (
            <>
              <button
                type="button"
                onClick={handleSkipNoEducation}
                className="px-6 sm:px-8 lg:px-10 py-2.5 lg:py-3 rounded-full border border-slate-300 hover:bg-slate-100 text-sm lg:text-base font-medium text-slate-700 transition-colors cursor-pointer"
              >
                I don&apos;t have any education
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

      {/* Add / Edit Education Modal */}
      <AddEducationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSaveEducation={handleSaveEducation}
        initialEdu={editingEdu}
      />
    </div>
  );
};

export default EducationStep;
