"use client";

import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoCloseCircle, IoCloudUploadOutline } from "react-icons/io5";
import { FiArrowUpRight, FiUser } from "react-icons/fi";
import Image from "next/image";

export default function EditPersonalInfoModal({ isOpen, onClose, userInfo, onUpdateUserInfo }) {
  const [photoPreview, setPhotoPreview] = useState(userInfo?.photo || null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: userInfo?.firstName || "Hande",
      lastName: userInfo?.lastName || "Ercel",
      position: userInfo?.position || "UI/UX Designer",
    },
  });

  if (!isOpen) return null;

  const handlePhotoSelect = (file) => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoPreview(url);
    }
  };

  const onSubmit = (data) => {
    const updated = {
      ...userInfo,
      firstName: data.firstName,
      lastName: data.lastName,
      name: `${data.firstName} ${data.lastName}`,
      position: data.position,
      photo: photoPreview,
    };
    if (onUpdateUserInfo) {
      onUpdateUserInfo(updated);
    }
    toast.success("Profile updated successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 dark:bg-[#151B2B] shadow-2xl border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        {/* Red Close (X) Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute right-5 top-5 text-rose-500 hover:text-rose-600 dark:text-rose-400 cursor-pointer transition-transform hover:scale-110"
        >
          <IoCloseCircle className="w-7 h-7" />
        </button>

        {/* Modal Title */}
        <h3 className="text-center text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-6">
          Edit Personal Info
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Upload Photo Dropzone */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Upload Photo
            </label>
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                if (e.dataTransfer.files?.[0]) {
                  handlePhotoSelect(e.dataTransfer.files[0]);
                }
              }}
              onClick={() => fileInputRef.current?.click()}
              className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed py-8 px-4 text-center cursor-pointer transition-all ${
                dragOver
                  ? "border-brand-blue bg-brand-blue/5 dark:bg-blue-950/30"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-[#FAFAFC] dark:bg-[#111625]"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files?.[0]) handlePhotoSelect(e.target.files[0]);
                }}
                className="hidden"
              />

              {photoPreview ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-brand-blue">
                    <Image
                      src={photoPreview}
                      alt="Preview"
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                      unoptimized
                    />
                  </div>
                  <p className="text-xs font-semibold text-brand-blue dark:text-blue-400">
                    Change photo
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue dark:bg-blue-950/60 dark:text-blue-400 mb-2">
                    <IoCloudUploadOutline className="w-5 h-5" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Upload Photo
                  </p>
                </>
              )}
            </div>
          </div>

          {/* First Name & Last Name Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                First Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
                <input
                  type="text"
                  {...register("firstName", { required: "First name is required" })}
                  placeholder="Select / Hande"
                  className={`w-full h-11 pl-10 pr-4 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border ${
                    errors.firstName
                      ? "border-rose-500"
                      : "border-gray-200 dark:border-gray-800 focus:border-brand-blue"
                  } text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden transition-all`}
                />
              </div>
              {errors.firstName && (
                <p className="mt-1 text-xs text-rose-500">{errors.firstName.message}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Last Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
                <input
                  type="text"
                  {...register("lastName", { required: "Last name is required" })}
                  placeholder="Select / Ercel"
                  className={`w-full h-11 pl-10 pr-4 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border ${
                    errors.lastName
                      ? "border-rose-500"
                      : "border-gray-200 dark:border-gray-800 focus:border-brand-blue"
                  } text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden transition-all`}
                />
              </div>
              {errors.lastName && (
                <p className="mt-1 text-xs text-rose-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Position */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Position
            </label>
            <input
              type="text"
              {...register("position")}
              placeholder="Enter position"
              className="w-full h-11 px-4 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden focus:border-brand-blue transition-all"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4">
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
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white dark:bg-brand-blue dark:hover:bg-brand-blue-hover text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
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
