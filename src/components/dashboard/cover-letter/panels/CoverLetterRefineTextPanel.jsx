"use client";

import React, { useState } from "react";
import { FiArrowLeft, FiCalendar } from "react-icons/fi";
import { LuDices, LuSparkles } from "react-icons/lu";
import toast from "react-hot-toast";

const clSamples = [
  `A constellation consists of visible stars that form a perceived outline or pattern, usually representing an animal, a person or mythological creature, or an inanimate object.

The origins of the first constellations date back to prehistoric times. Their purpose was to tell stories of their beliefs, experiences. The recognition of constellations has changed over time. They varied in size or shape, others became popular and then were forgotten, and some were limited to a single culture.

In the 20th century, a committee of the International Astronomical Union took it upon itself to accurately delineate the 88 constellations. It included 48 ancient constellations enumerated by the Greek astronomer Ptolemy, plus 40 new constellations.

The star charts represent the position of the stars as we see them from Earth; however, the stars in each constellation may not be close to each other, as some we perceive to be brighter because they are close to the Earth, while others are brighter because they are huge stars.

Regards, Mike.`,
  `I am writing to express my eager interest in the Mobile Developer position. With over five years of dedicated experience architecting resilient mobile client applications across iOS and Android ecosystems, I have continuously translated intricate user needs into elegant, performant digital solutions.

In my previous roles, I spearheaded multiple end-to-end releases that boosted app store user ratings from 3.8 to 4.7 stars while trimming app startup latency by 40%. My workflow is anchored on rigorous unit testing, clean state architecture, and active cross-disciplinary collaboration with design and backend squads.

I look forward to discussing how my engineering background and passion for frictionless user experiences can create tangible value for your engineering team.

Regards, Mike.`,
];

export default function CoverLetterRefineTextPanel({
  clData,
  setClData,
  onBack,
}) {
  const [isGenerating, setIsGenerating] = useState(false);
  const currentText = clData.bodyText || "";
  const maxLength = 1000;

  const handleTextChange = (e) => {
    const val = e.target.value;
    if (val.length <= maxLength) {
      setClData((prev) => ({
        ...prev,
        bodyText: val,
      }));
    }
  };

  const handleDateChange = (e) => {
    setClData((prev) => ({
      ...prev,
      letterDate: e.target.value,
    }));
  };

  const handleRefine = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      const refined =
        currentText.trim().length > 0
          ? `${currentText.trim()}\n\nThank you for considering my application. I welcome the opportunity to connect further.`
          : clSamples[0];
      setClData((prev) => ({
        ...prev,
        bodyText: refined.slice(0, maxLength),
      }));
      toast.success("Cover letter text refined with AI!");
    }, 600);
  };

  const handleRegenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      const nextSample =
        clSamples[Math.floor(Math.random() * clSamples.length)];
      setClData((prev) => ({
        ...prev,
        bodyText: nextSample,
      }));
      toast.success("New cover letter text generated with AI!");
    }, 600);
  };

  const isEmpty = currentText.trim().length === 0;

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
          <span>Refine Text With AI</span>
        </button>
      </div>

      {/* Main Container Card */}
      <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-xs space-y-5">
        {/* Letter Date */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            Letter Date
          </label>
          <div className="relative">
            <input
              type="text"
              value={clData.letterDate || ""}
              onChange={handleDateChange}
              placeholder="Eg., 01.01.26"
              className="w-full px-4 pr-11 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] text-gray-900 dark:text-white focus:outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
            />
            <FiCalendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        {/* Cover Letter Text */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            Cover Letter Text
          </label>
          <textarea
            rows={10}
            value={currentText}
            onChange={handleTextChange}
            placeholder="Write your cover letter content or let AI craft one for you..."
            className="w-full p-4 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101522] text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all leading-relaxed resize-none"
          />

          {/* Character Counter */}
          <div className="flex justify-between items-center text-[11px] text-gray-400 font-medium">
            <span>{currentText.length}/1000</span>
          </div>
        </div>

        {/* AI Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          {isEmpty ? (
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
