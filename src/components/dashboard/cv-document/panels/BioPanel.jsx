"use client";

import React, { useState } from "react";
import { FiArrowLeft, FiRefreshCw } from "react-icons/fi";
import { LuDices, LuSparkles } from "react-icons/lu";
import toast from "react-hot-toast";

const bioSamples = [
  "A dedicated digital professional with a robust foundation in analytical thinking and business informatics, I excel at transforming intricate datasets into meaningful, strategy-driven insights. Passionate about digital innovation, I bring hands-on expertise in data analysis, reporting, and the development of impactful solutions. My collaborative spirit enables me to build bridges across teams, driving the adoption of cutting-edge tools and empowering data-driven decision-making. Energized by dynamic environments, I am committed to streamlining processes, fostering innovation, and delivering measurable contributions within the ever-evolving digital realm.",
  "Results-oriented UI/UX and Product Designer with 6+ years of experience delivering intuitive enterprise platforms and customer-centric mobile applications. Adept at translating ambiguous business objectives into cohesive design systems, seamless user flows, and high-impact digital experiences. Passionate about user empathy, data-informed iterations, and mentoring agile design squads.",
  "Innovative problem solver with a deep passion for digital product strategy, interface engineering, and usability research. Proven track record in orchestrating multi-platform design architectures that boost engagement and reduce customer drop-offs. Thrive in fast-paced collaborative ecosystems where technological creativity meets measurable business value.",
];

export default function BioPanel({ cvData, setCvData, onBack }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const currentBio = cvData.bio || "";
  const maxLength = 1000;

  const handleChange = (e) => {
    const val = e.target.value;
    if (val.length <= maxLength) {
      setCvData((prev) => ({
        ...prev,
        bio: val,
      }));
    }
  };

  const handleRefine = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      // Polish current text
      const refined =
        currentBio.trim().length > 0
          ? `${currentBio.trim()} Known for continuous learning, cross-functional leadership, and an unwavering commitment to design excellence.`
          : bioSamples[0];
      setCvData((prev) => ({
        ...prev,
        bio: refined.slice(0, maxLength),
      }));
      toast.success("Bio refined with AI!");
    }, 600);
  };

  const handleRegenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      const randomBio =
        bioSamples[Math.floor(Math.random() * bioSamples.length)];
      setCvData((prev) => ({
        ...prev,
        bio: randomBio,
      }));
      toast.success("New Bio generated with AI!");
    }, 600);
  };

  const isEmpty = currentBio.trim().length === 0;

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
          <span>Bio</span>
        </button>
      </div>

      {/* Bio Textarea Card */}
      <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-xs space-y-4">
        {/* Textarea */}
        <div className="space-y-2">
          <textarea
            rows={10}
            value={currentBio}
            onChange={handleChange}
            placeholder="Write your professional bio or use AI to generate one..."
            className="w-full p-4 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all leading-relaxed resize-none"
          />

          {/* Character Counter */}
          <div className="flex justify-between items-center text-[11px] text-gray-400 font-medium">
            <span>{currentBio.length}/1000</span>
          </div>
        </div>

        {/* AI Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          {isEmpty ? (
            /* If no text written: Option is "Generate Text" */
            <button
              type="button"
              disabled={isGenerating}
              onClick={handleRegenerate}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#151B2B] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:scale-105 cursor-pointer disabled:opacity-50"
            >
              <span>{isGenerating ? "Generating..." : "Generate Text"}</span>
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1E293B] text-white text-[10px]">
                <LuSparkles className="w-3 h-3" />
              </div>
            </button>
          ) : (
            /* If text written: "Refine Text" and "Regenerate Text" */
            <>
              <button
                type="button"
                disabled={isGenerating}
                onClick={handleRefine}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#151B2B] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:scale-105 cursor-pointer disabled:opacity-50"
              >
                <span>{isGenerating ? "Refining..." : "Refine Text"}</span>
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1E293B] text-white text-[10px]">
                  <LuSparkles className="w-3 h-3" />
                </div>
              </button>

              <button
                type="button"
                disabled={isGenerating}
                onClick={handleRegenerate}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#151B2B] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:scale-105 cursor-pointer disabled:opacity-50"
              >
                <span>{isGenerating ? "Generating..." : "Regenerate Text"}</span>
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1E293B] text-white text-[10px]">
                  <LuDices className="w-3 h-3" />
                </div>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
