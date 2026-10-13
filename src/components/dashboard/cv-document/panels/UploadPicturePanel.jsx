"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FiArrowLeft, FiUpload, FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";

export default function UploadPicturePanel({ cvData, setCvData, onBack }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Please upload an image file (PNG, JPG, WEBP)");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const resultUrl = event.target?.result;
        if (resultUrl) {
          setCvData((prev) => ({
            ...prev,
            personal: {
              ...prev.personal,
              avatarUrl: resultUrl,
            },
          }));
          toast.success("Picture updated successfully!");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setCvData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
      },
    }));
    toast.success("Picture reset to default.");
  };

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-300">
      {/* Back button */}
      <div className="pb-2">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-base font-bold text-[#1E293B] dark:text-white hover:text-brand-blue dark:hover:text-blue-400 transition-colors cursor-pointer group"
        >
          <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Upload Picture</span>
        </button>
      </div>

      {/* Upload Container */}
      <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-xs space-y-4">
        <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block">
          Upload Picture
        </label>

        {/* Dashed Dropzone */}
        <div
          onClick={() => fileInputRef.current?.click()}
          className="w-full min-h-52 sm:min-h-60 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-brand-blue dark:hover:border-blue-500 bg-[#FAFAFC] dark:bg-[#101522] flex flex-col items-center justify-center p-6 text-center cursor-pointer transition-all group"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          <div className="w-12 h-12 rounded-full bg-white dark:bg-[#151B2B] shadow-2xs flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-brand-blue group-hover:scale-110 transition-all mb-3 border border-gray-100 dark:border-gray-800">
            <FiUpload className="w-5 h-5" />
          </div>

          <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200">
            Upload Picture
          </p>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">
            Drag & drop or click to browse (PNG, JPG up to 5MB)
          </p>
        </div>

        {/* Current Picture Preview with reset option */}
        {cvData.personal?.avatarUrl && (
          <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-[#101522] border border-gray-200/80 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xs">
                <Image
                  src={cvData.personal.avatarUrl}
                  alt="Current Avatar"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                  Current Photo
                </p>
                <p className="text-[10px] text-gray-400">Live preview updated</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleRemove}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-rose-600 hover:text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg transition-colors cursor-pointer"
            >
              <FiTrash2 className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
