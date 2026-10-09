"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoCloseCircle } from "react-icons/io5";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";

export default function AddJobModal({
  isOpen,
  onClose,
  onSaveJob,
  editingJob = null,
}) {
  const [workplaceType, setWorkplaceType] = useState("On-site");
  const [isCurrentRole, setIsCurrentRole] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      position: "",
      company: "",
      location: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    },
  });

  useEffect(() => {
    if (editingJob) {
      reset({
        position: editingJob.position || "",
        company: editingJob.company || "",
        location: editingJob.location || "",
        responsibilities: editingJob.responsibilities || "",
        startDate: editingJob.startDate || "",
        endDate: editingJob.endDate || "",
      });
      setWorkplaceType(editingJob.workplaceType || "On-site");
      setIsCurrentRole(editingJob.isCurrentRole || false);
    } else {
      reset({
        position: "",
        company: "",
        location: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      });
      setWorkplaceType("On-site");
      setIsCurrentRole(false);
    }
  }, [editingJob, reset, isOpen]);

  if (!isOpen) return null;

  const onSubmit = (data) => {
    const jobData = {
      id: editingJob ? editingJob.id : Date.now(),
      position: data.position,
      company: data.company,
      location: data.location,
      workplaceType,
      responsibilities: data.responsibilities,
      startDate: data.startDate,
      endDate: isCurrentRole ? "Present" : data.endDate,
      isCurrentRole,
    };

    if (onSaveJob) {
      onSaveJob(jobData);
    }
    toast.success(editingJob ? "Job updated successfully!" : "Job added successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 dark:bg-[#151B2B] shadow-2xl border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        {/* Red Close (X) Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute right-5 top-5 text-rose-500 hover:text-rose-600 dark:text-rose-400 cursor-pointer transition-transform hover:scale-110"
        >
          <IoCloseCircle className="w-7 h-7" />
        </button>

        {/* Modal Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          {editingJob ? "Edit Job" : "Add Job"}
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
          {/* Job Position & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Job Position <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                {...register("position", { required: "Job position is required" })}
                placeholder="What was your title and position"
                className={`w-full h-11 px-4 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border ${
                  errors.position
                    ? "border-rose-500"
                    : "border-gray-200 dark:border-gray-800 focus:border-brand-blue"
                } text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden transition-all`}
              />
              {errors.position && (
                <p className="mt-1 text-xs text-rose-500">{errors.position.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Company <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                {...register("company", { required: "Company name is required" })}
                placeholder="Company's name"
                className={`w-full h-11 px-4 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border ${
                  errors.company
                    ? "border-rose-500"
                    : "border-gray-200 dark:border-gray-800 focus:border-brand-blue"
                } text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden transition-all`}
              />
              {errors.company && (
                <p className="mt-1 text-xs text-rose-500">{errors.company.message}</p>
              )}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Location <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              {...register("location", { required: "Location is required" })}
              placeholder="e.g Switzerland"
              className={`w-full h-11 px-4 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border ${
                errors.location
                  ? "border-rose-500"
                  : "border-gray-200 dark:border-gray-800 focus:border-brand-blue"
              } text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden transition-all`}
            />
            {errors.location && (
              <p className="mt-1 text-xs text-rose-500">{errors.location.message}</p>
            )}
          </div>

          {/* Workplace Type (Hybrid, Remote, On-site) */}
          <div className="grid grid-cols-3 gap-3">
            {["Hybrid", "Remote", "On-site"].map((type) => {
              const isSelected = workplaceType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setWorkplaceType(type)}
                  className={`flex items-center justify-center gap-2.5 h-12 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "border-brand-blue bg-brand-blue/5 text-primary dark:text-white"
                      : "border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111625] text-gray-600 dark:text-gray-300 hover:border-gray-300"
                  }`}
                >
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                      isSelected
                        ? "border-brand-blue bg-brand-blue"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  >
                    {isSelected && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </span>
                  <span>{type}</span>
                </button>
              );
            })}
          </div>

          {/* Task and Responsibilities */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Task and Responsibilities
            </label>
            <textarea
              rows={3}
              {...register("responsibilities")}
              placeholder="Add your main tasks and............."
              className="w-full p-4 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden focus:border-brand-blue transition-all"
            />
          </div>

          {/* Start date & End date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Start date
              </label>
              <div className="relative">
                <input
                  type="text"
                  {...register("startDate")}
                  placeholder="mm/yyyy"
                  className="w-full h-11 px-4 pr-10 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden focus:border-brand-blue transition-all"
                />
                <FiCalendar className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                End date
              </label>
              <div className="relative">
                <input
                  type="text"
                  disabled={isCurrentRole}
                  {...register("endDate")}
                  placeholder={isCurrentRole ? "Present" : "mm/yyyy"}
                  className={`w-full h-11 px-4 pr-10 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden focus:border-brand-blue transition-all ${
                    isCurrentRole ? "opacity-50 cursor-not-allowed bg-gray-50" : ""
                  }`}
                />
                <FiCalendar className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Checkbox: I am currently working in this role */}
          <div
            onClick={() => setIsCurrentRole(!isCurrentRole)}
            className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-[#FAFAFC] dark:bg-[#111625] cursor-pointer hover:border-gray-300 transition-colors"
          >
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                isCurrentRole
                  ? "border-brand-blue bg-brand-blue"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            >
              {isCurrentRole && (
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              )}
            </span>
            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium select-none">
              I am currently working in this role
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white dark:bg-brand-blue dark:hover:bg-brand-blue-hover text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer disabled:opacity-50"
            >
              <span>Save</span>
              <FiArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
