"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import { coverLetterTemplateList } from "../../cv-document/mockData";

export default function ChooseCoverLetterTemplateModal({
  isOpen,
  onClose,
  currentTemplateId,
  onSelectTemplate,
}) {
  const [activeIndex, setActiveIndex] = useState(() => {
    const idx = coverLetterTemplateList.findIndex(
      (t) => t.id === currentTemplateId
    );
    return idx >= 0 ? idx : 0;
  });

  if (!isOpen) return null;

  const total = coverLetterTemplateList.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const handleConfirm = () => {
    const selected = coverLetterTemplateList[activeIndex];
    if (selected) {
      onSelectTemplate(selected.id);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#1E2536]/80 backdrop-blur-xl border border-white/10 p-6 sm:p-10 text-center shadow-2xl flex flex-col justify-between animate-in zoom-in-95 duration-200">
        {/* Header Text */}
        <div className="space-y-2 max-w-xl mx-auto mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Choose a template
          </h2>
          <p className="text-xs sm:text-sm text-gray-300/90 leading-relaxed font-normal">
            Get closer to your dream job with professionally designed Cover letter templates that help your skills stand out and make a strong first impression.
          </p>
        </div>

        {/* 3D / Coverflow Carousel View */}
        <div className="relative w-full flex items-center justify-center py-4 my-auto min-h-[360px] sm:min-h-[440px] select-none">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous template"
            className="absolute left-2 sm:left-4 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20 transition-all cursor-pointer hover:scale-110 shadow-lg"
          >
            <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Cards Track */}
          <div className="relative flex items-center justify-center w-full max-w-3xl h-[340px] sm:h-[420px]">
            {coverLetterTemplateList.map((tpl, idx) => {
              let offset = idx - activeIndex;
              if (offset < -2) offset += total;
              if (offset > 2) offset -= total;

              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              let transformStyles = "";
              let zIndex = 10;
              let opacity = "opacity-60";
              let scale = "scale-75";

              if (isCenter) {
                zIndex = 20;
                opacity = "opacity-100 drop-shadow-2xl";
                scale = "scale-100 sm:scale-105";
                transformStyles = "translate-x-0";
              } else if (offset === -1) {
                zIndex = 15;
                opacity = "opacity-75 hover:opacity-90";
                scale = "scale-80 sm:scale-85";
                transformStyles = "-translate-x-32 sm:-translate-x-48";
              } else if (offset === 1) {
                zIndex = 15;
                opacity = "opacity-75 hover:opacity-90";
                scale = "scale-80 sm:scale-85";
                transformStyles = "translate-x-32 sm:translate-x-48";
              } else if (offset === -2) {
                zIndex = 10;
                opacity = "opacity-40";
                scale = "scale-70 sm:scale-75";
                transformStyles = "-translate-x-60 sm:-translate-x-84 hidden sm:block";
              } else if (offset === 2) {
                zIndex = 10;
                opacity = "opacity-40";
                scale = "scale-70 sm:scale-75";
                transformStyles = "translate-x-60 sm:translate-x-84 hidden sm:block";
              }

              return (
                <div
                  key={tpl.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`absolute transition-all duration-300 ease-out cursor-pointer ${transformStyles} ${scale} ${opacity}`}
                  style={{ zIndex }}
                >
                  <div className="relative w-48 sm:w-56 md:w-64 aspect-[1/1.414] rounded-2xl overflow-hidden bg-white shadow-2xl">
                    <Image
                      src={tpl.image}
                      alt={tpl.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  {isCenter && (
                    <div className="mt-3 text-center">
                      <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
                        {tpl.title}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next template"
            className="absolute right-2 sm:right-4 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20 transition-all cursor-pointer hover:scale-110 shadow-lg"
          >
            <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Bottom Buttons */}
        <div className="flex items-center justify-center gap-4 pt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-8 py-2.5 sm:py-3 rounded-full bg-white text-gray-800 hover:bg-gray-100 text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer hover:scale-105"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleConfirm}
            className="inline-flex items-center gap-2 px-8 py-2.5 sm:py-3 rounded-full bg-[#2A344A] hover:bg-[#1a2130] text-white text-xs sm:text-sm font-semibold transition-all shadow-md border border-white/20 cursor-pointer hover:scale-105"
          >
            <span>Use This Template</span>
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
