"use client";

import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import { IoCloseCircle, IoCloudUploadOutline } from "react-icons/io5";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";

export default function UploadCVModal({ isOpen, onClose }) {
  const [dragOver, setDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleFileDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSave = () => {
    if (!selectedFile) {
      toast.error("Please select a CV file first");
      return;
    }
    toast.success(`CV "${selectedFile.name}" uploaded successfully!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 dark:bg-[#151B2B] shadow-2xl border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-200">
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
          Upload CV
        </h3>

        {/* Drag and Drop Zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleFileDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed py-12 px-6 text-center cursor-pointer transition-all ${
            dragOver
              ? "border-brand-blue bg-brand-blue/5 dark:bg-blue-950/30"
              : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-[#FAFAFC] dark:bg-[#111625]"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileSelect}
            className="hidden"
          />

          {selectedFile ? (
            <div className="flex flex-col items-center gap-2 text-brand-blue dark:text-blue-400">
              <FiFileText className="w-10 h-10" />
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                {selectedFile.name}
              </p>
              <span className="text-xs text-gray-400">
                {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
              </span>
            </div>
          ) : (
            <>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue dark:bg-blue-950/60 dark:text-blue-400 mb-3">
                <IoCloudUploadOutline className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Upload CV
              </p>
              <p className="text-xs text-gray-400 mt-1">
                PDF, DOC, DOCX up to 10MB
              </p>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 mt-8">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white dark:bg-brand-blue dark:hover:bg-brand-blue-hover text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
          >
            <span>Save</span>
            <FiArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
