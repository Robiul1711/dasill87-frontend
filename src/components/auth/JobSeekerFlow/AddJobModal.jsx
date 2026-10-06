"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { FiSearch, FiCalendar } from "react-icons/fi";

const AddJobModal = ({ isOpen, onClose, onSaveJob, initialJob = null }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialJob || {
      title: "",
      company: "",
      location: "",
      workType: "Hybrid",
      description: "",
      startDate: "",
      endDate: "",
      isCurrent: false,
    },
  });

  const isCurrent = watch("isCurrent");
  const selectedWorkType = watch("workType");

  const onSubmit = (data) => {
    onSaveJob({
      id: initialJob?.id || Date.now().toString(),
      ...data,
      endDate: data.isCurrent ? "Present" : data.endDate,
    });
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 my-8">
        {/* Red close button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 w-7 h-7 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-xs hover:bg-[#DC2626] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <IoClose className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold text-[#1E293B] mb-6">
          {initialJob ? "Edit Job" : "Add Job"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Job Position */}
          <div>
            <label className="block text-xs font-medium text-[#1E293B] mb-1.5">
              Job Position <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Position name"
                {...register("title", {
                  required: "Job position is required",
                })}
                className="w-full h-11 px-4 pr-10 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm text-[#1E293B] focus:outline-hidden focus:border-[#29324B] placeholder:text-slate-400"
              />
              <FiSearch className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
            </div>
            {errors.title && (
              <p className="text-xs text-red-500 mt-1">{errors.title.message}</p>
            )}
          </div>

          {/* Company */}
          <div>
            <label className="block text-xs font-medium text-[#1E293B] mb-1.5">
              Company <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Company name here"
                {...register("company", {
                  required: "Company name is required",
                })}
                className="w-full h-11 px-4 pr-10 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm text-[#1E293B] focus:outline-hidden focus:border-[#29324B] placeholder:text-slate-400"
              />
              <FiSearch className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
            </div>
            {errors.company && (
              <p className="text-xs text-red-500 mt-1">{errors.company.message}</p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1.5">
              Location
            </label>
            <input
              type="text"
              placeholder="job location here"
              {...register("location")}
              className="w-full h-11 px-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm text-[#1E293B] focus:outline-hidden focus:border-[#29324B] placeholder:text-slate-400"
            />
          </div>

          {/* Work type radio options */}
          <div className="h-11 px-4 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center gap-6">
            {["Hybrid", "Remote", "On-site"].map((type) => (
              <label
                key={type}
                className="flex items-center gap-2 cursor-pointer select-none"
              >
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selectedWorkType === type
                      ? "border-[#22C55E] bg-white"
                      : "border-slate-400 bg-white"
                  }`}
                >
                  {selectedWorkType === type && (
                    <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                  )}
                </div>
                <input
                  type="radio"
                  value={type}
                  {...register("workType")}
                  className="hidden"
                />
                <span className="text-xs text-slate-600 font-medium">
                  {type}
                </span>
              </label>
            ))}
          </div>

          {/* Task & Responsibilities */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1.5">
              Task &amp; Responsibilities
            </label>
            <textarea
              rows={4}
              placeholder="Add your main tasks and responsibilities you had in this position. This will make your CV stand out and avoid trabino guessing..."
              {...register("description")}
              className="w-full p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-xs sm:text-sm text-[#1E293B] focus:outline-hidden focus:border-[#29324B] placeholder:text-slate-400 resize-none leading-relaxed"
            />
          </div>

          {/* Start Date and End Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">
                Start date
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="mm/yyyy"
                  {...register("startDate")}
                  className="w-full h-11 px-4 pr-10 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm text-[#1E293B] focus:outline-hidden focus:border-[#29324B] placeholder:text-slate-400"
                />
                <FiCalendar className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">
                End date
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="mm/yyyy"
                  disabled={isCurrent}
                  {...register("endDate")}
                  className={`w-full h-11 px-4 pr-10 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm text-[#1E293B] focus:outline-hidden focus:border-[#29324B] placeholder:text-slate-400 ${
                    isCurrent ? "opacity-40 cursor-not-allowed" : ""
                  }`}
                />
                <FiCalendar className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Currently working checkbox */}
          <div
            onClick={() => setValue("isCurrent", !isCurrent)}
            className="h-11 px-4 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center gap-2.5 cursor-pointer select-none"
          >
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                isCurrent
                  ? "border-[#22C55E] bg-white"
                  : "border-slate-400 bg-white"
              }`}
            >
              {isCurrent && (
                <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
              )}
            </div>
            <span className="text-xs text-slate-600 font-medium">
              I am currently working on this role
            </span>
          </div>

          {/* Save Button */}
          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-12 py-2.5 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-white text-sm font-semibold transition-all shadow-xs cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobModal;
