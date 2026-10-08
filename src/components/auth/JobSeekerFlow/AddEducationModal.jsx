"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { FiSearch, FiCalendar } from "react-icons/fi";

const AddEducationModal = ({
  isOpen,
  onClose,
  onSaveEducation,
  initialEdu = null,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialEdu || {
      degree: "",
      institution: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      isCurrent: false,
    },
  });

  const isCurrent = watch("isCurrent");

  const onSubmit = (data) => {
    onSaveEducation({
      id: initialEdu?.id || Date.now().toString(),
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
          {initialEdu ? "Edit Education" : "Add Education"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Degree or Training */}
          <div>
            <label className="block text-xs font-medium text-[#1E293B] mb-1.5">
              Degree or training <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="What certification or training have you completed?"
                {...register("degree", {
                  required: "Degree or training is required",
                })}
                className="w-full h-11 px-4 pr-10 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm text-[#1E293B] focus:outline-hidden focus:border-[#29324B] placeholder:text-slate-400"
              />
              <FiSearch className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
            </div>
            {errors.degree && (
              <p className="text-xs text-red-500 mt-1">
                {errors.degree.message}
              </p>
            )}
          </div>

          {/* Educational Institution */}
          <div>
            <label className="block text-xs font-medium text-[#1E293B] mb-1.5">
              Educational Institution <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="What education center did you obtain this from?"
              {...register("institution", {
                required: "Educational institution is required",
              })}
              className="w-full h-11 px-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm text-[#1E293B] focus:outline-hidden focus:border-[#29324B] placeholder:text-slate-400"
            />
            {errors.institution && (
              <p className="text-xs text-red-500 mt-1">
                {errors.institution.message}
              </p>
            )}
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

          {/* Currently studying checkbox */}
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
              I am currently in education
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

export default AddEducationModal;
