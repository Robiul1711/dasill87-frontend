"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  FiArrowLeft,
  FiArrowRight,
  FiEdit3,
  FiDownloadCloud,
  FiCalendar,
  FiArrowUpRight,
} from "react-icons/fi";

export default function DocumentsReadyPage() {
  const router = useRouter();

  const handleDownloadCv = () => {
    toast.success("Downloading your finalized CV...");
    setTimeout(() => {
      window.print();
    }, 400);
  };

  const handleDownloadCoverLetter = () => {
    toast.success("Downloading your finalized Cover Letter...");
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 py-2 sm:py-4 animate-in fade-in duration-300">
      {/* Top Navigation Row: Back Arrow */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => router.push("/dashboard/cover-letter")}
          aria-label="Back to Cover Letter"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-[#151B2B] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-2xs hover:scale-105 transition-all cursor-pointer"
        >
          <FiArrowLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Main Header */}
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] dark:text-white tracking-tight">
          Your Documents are ready!
        </h1>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">
          Early applicants get noticed. Don&apos;t delay.
        </p>
      </div>

      {/* Primary Card Container */}
      <div className="bg-white dark:bg-[#151B2B] rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-100 dark:border-gray-800/80 shadow-sm transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* ================= LEFT: CV Document Card ================= */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Realistic CV Mini Thumbnail */}
            <div className="relative w-44 sm:w-48 h-60 sm:h-64 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 shrink-0 bg-white group hover:shadow-xl transition-all">
              <div className="relative w-full h-full">
                <Image
                  src="/templates/template_watercolor.jpg"
                  alt="CV Preview"
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 176px, 192px"
                  priority
                />
              </div>
            </div>

            {/* Document Info & Action Buttons */}
            <div className="space-y-4 text-center sm:text-left flex-1 min-w-0">
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-[#1E293B] dark:text-white truncate">
                  Mohima-Haque-OneDoc-CV
                </h3>
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <FiCalendar className="w-3.5 h-3.5 text-gray-400" />
                  <span>Created on 01.01.26</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => router.push("/dashboard/cv-document")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111625] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold shadow-2xs hover:scale-105 transition-all cursor-pointer"
                >
                  <FiEdit3 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                  <FiArrowRight className="w-3 h-3 text-gray-400" />
                </button>

                <button
                  type="button"
                  onClick={handleDownloadCv}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111625] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold shadow-2xs hover:scale-105 transition-all cursor-pointer"
                >
                  <FiDownloadCloud className="w-3.5 h-3.5" />
                  <span>Download</span>
                  <FiArrowRight className="w-3 h-3 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: Cover Letter Document Card ================= */}
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:border-l lg:border-gray-100 lg:dark:border-gray-800 lg:pl-10">
            {/* Realistic Cover Letter Mini Thumbnail */}
            <div className="relative w-44 sm:w-48 h-60 sm:h-64 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 shrink-0 bg-white group hover:shadow-xl transition-all">
              {/* Render an authentic A4 cover letter card */}
              <div className="w-full h-full p-3.5 bg-white flex flex-col justify-between text-gray-900 select-none group-hover:scale-105 transition-transform duration-300">
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b pb-1.5 border-gray-200">
                    <div>
                      <div className="text-[9px] font-black tracking-tight text-[#0052FF]">
                        Mike Smith
                      </div>
                      <div className="text-[6px] text-gray-500 uppercase tracking-wider font-semibold">
                        Mobile Developer
                      </div>
                    </div>
                    <div className="text-[5px] text-right text-gray-400 leading-tight">
                      <div>email@freepik.com</div>
                      <div>+08 123 456 789</div>
                    </div>
                  </div>

                  <div className="text-[6px] text-gray-600 space-y-0.5">
                    <p className="font-bold text-[7px] text-gray-800">To: Business Company</p>
                    <p className="font-semibold text-gray-700">Dear Manager,</p>
                    <p className="text-[5.5px] leading-relaxed text-gray-500 line-clamp-6">
                      A constellation consists of visible stars that form a perceived pattern. Their purpose was to tell stories of celestial bodies and their impact on navigation. In the modern era, precision and clarity guide our decisions in high-performance digital environments...
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[6px] font-medium text-gray-500">Regards, Mike</span>
                  <div className="w-8 h-2.5 border-b border-gray-600" />
                </div>
              </div>
            </div>

            {/* Document Info & Action Buttons */}
            <div className="space-y-4 text-center sm:text-left flex-1 min-w-0">
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-[#1E293B] dark:text-white truncate">
                  Mohima-Haque-OneDoc-CV
                </h3>
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <FiCalendar className="w-3.5 h-3.5 text-gray-400" />
                  <span>Created on 01.01.26</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => router.push("/dashboard/cover-letter")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111625] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold shadow-2xs hover:scale-105 transition-all cursor-pointer"
                >
                  <FiEdit3 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                  <FiArrowRight className="w-3 h-3 text-gray-400" />
                </button>

                <button
                  type="button"
                  onClick={handleDownloadCoverLetter}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111625] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold shadow-2xs hover:scale-105 transition-all cursor-pointer"
                >
                  <FiDownloadCloud className="w-3.5 h-3.5" />
                  <span>Download</span>
                  <FiArrowRight className="w-3 h-3 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Navigation Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <button
          type="button"
          onClick={() => router.push("/dashboard/matches")}
          className="px-6 sm:px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#151B2B] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold transition-all shadow-xs hover:scale-105 cursor-pointer"
        >
          Back to Match details
        </button>

        <button
          type="button"
          onClick={() => router.push("/dashboard/matches?action=apply")}
          className="inline-flex items-center gap-2 px-7 sm:px-9 py-3 rounded-full bg-[#2A344A] hover:bg-[#1f2638] text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:scale-105 cursor-pointer"
        >
          <span>Go to job listing &amp; Apply</span>
          <FiArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
