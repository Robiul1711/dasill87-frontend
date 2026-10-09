"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoCloseCircle } from "react-icons/io5";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";

export default function AddEducationModal({
  isOpen,
  onClose,
  onSaveEducation,
  editingEducation = null,
}) {
  const [isCurrentlyStudying, setIsCurrentlyStudying] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      degree: "",
      institution: "",
      startDate: "",
      endDate: "",
    },
  });

  useEffect(() => {
    if (editingEducation) {
      reset({
        degree: editingEducation.degree || "",
        institution: editingEducation.institution || "",
        startDate: editingEducation.startDate || "",
        endDate: editingEducation.endDate || "",
      });
      setIsCurrentlyStudying(editingEducation.isCurrentlyStudying || false);
    } else {
      reset({
        degree: "",
        institution: "",
        startDate: "",
        endDate: "",
      });
      setIsCurrentlyStudying(false);
    }
  }, [editingEducation, reset, isOpen]);

  if (!isOpen) return null;

  const onSubmit = (data) => {
    const educationData = {
      id: editingEducation ? editingEducation.id : Date.now(),
      degree: data.degree,
      institution: data.institution,
      startDate: data.startDate,
      endDate: isCurrentlyStudying ? "Present" : data.endDate,
      isCurrentlyStudying,
    };

    if (onSaveEducation) {
      onSaveEducation(educationData);
    }
    toast.success(
      editingEducation
        ? "Education updated successfully!"
        : "Education added successfully!"
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 dark:bg-[#151B2B] shadow-2xl border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-200">
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
          {editingEducation ? "Edit Education" : "Add Education"}
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
          {/* Degree & Training */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Degree & Training<span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              {...register("degree", { required: "Degree/Training title is required" })}
              placeholder="eg, Professional UI UX Designer"
              className={`w-full h-11 px-4 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border ${
                errors.degree
                  ? "border-rose-500"
                  : "border-gray-200 dark:border-gray-800 focus:border-brand-blue"
              } text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden transition-all`}
            />
            {errors.degree && (
              <p className="mt-1 text-xs text-rose-500">{errors.degree.message}</p>
            )}
          </div>

          {/* Educational Institution */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Educational Institution <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              {...register("institution", {
                required: "Educational institution is required",
              })}
              placeholder="e.g Creative IT"
              className={`w-full h-11 px-4 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border ${
                errors.institution
                  ? "border-rose-500"
                  : "border-gray-200 dark:border-gray-800 focus:border-brand-blue"
              } text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden transition-all`}
            />
            {errors.institution && (
              <p className="mt-1 text-xs text-rose-500">
                {errors.institution.message}
              </p>
            )}
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
                  disabled={isCurrentlyStudying}
                  {...register("endDate")}
                  placeholder={isCurrentlyStudying ? "Present" : "mm/yyyy"}
                  className={`w-full h-11 px-4 pr-10 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden focus:border-brand-blue transition-all ${
                    isCurrentlyStudying
                      ? "opacity-50 cursor-not-allowed bg-gray-50"
                      : ""
                  }`}
                />
                <FiCalendar className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Checkbox: I am currently Studying */}
          <div
            onClick={() => setIsCurrentlyStudying(!isCurrentlyStudying)}
            className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-[#FAFAFC] dark:bg-[#111625] cursor-pointer hover:border-gray-300 transition-colors"
          >
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                isCurrentlyStudying
                  ? "border-brand-blue bg-brand-blue"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            >
              {isCurrentlyStudying && (
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              )}
            </span>
            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium select-none">
              I am currently Studying
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
