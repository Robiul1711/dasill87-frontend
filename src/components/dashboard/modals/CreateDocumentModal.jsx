"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { FiArrowUpRight } from "react-icons/fi";

const walkthroughSteps = [
  {
    title: "Generated for You",
    subtitle:
      "We've created your first CV based on your profile. Review each section and adjust it.",
  },
  {
    title: "Edit or Regenerate",
    subtitle:
      "Want to something? Edit or regenerate specific sections for a better fit.",
  },
  {
    title: "Try a New Layout",
    subtitle:
      "Explore different styles and templates to match your tone and goals. Switch anytime",
  },
  {
    title: "Now, the Cover Letter",
    subtitle:
      "After your CV is ready, create your AI-generated cover letter and personalize it.",
  },
  {
    title: "Download them all",
    subtitle:
      "Once you're happy with CV and cover letter, download everything and send your application.",
  },
];

export default function CreateDocumentModal({
  isOpen,
  onClose,
  jobTitle = "Software Engineer",
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(15);
  const [currentStep, setCurrentStep] = useState(0);

  // Reset and start loading animation when opened
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setProgress(15);
      setCurrentStep(0);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsLoading(false);
            }, 300);
            return 100;
          }
          return prev + 18;
        });
      }, 300);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < walkthroughSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      toast.success(`Documents ready for ${jobTitle}!`);
      onClose();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-10 dark:bg-[#151B2B] shadow-2xl border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-200 text-center min-h-95 flex flex-col justify-between">
        {/* Top Trabino Logo */}
        <div className="flex items-center justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Trabino Logo"
            width={140}
            height={36}
            className="dark:hidden h-8 w-auto object-contain"
            priority
          />
          <Image
            src="/navLogo.png"
            alt="Trabino Logo"
            width={140}
            height={36}
            className="hidden dark:block h-8 w-auto object-contain"
            priority
          />
        </div>

        {/* Dynamic Body: Loading State OR Walkthrough Slides */}
        {isLoading ? (
          <div className="my-auto space-y-5 animate-in fade-in duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Wait a minute...
            </h3>
            <p className="text-xs sm:text-sm text-secondary dark:text-gray-400 max-w-md mx-auto leading-relaxed">
              On average, recruiters spend only 1 minutes reviewing a CV, I will make yours stand out!
            </p>

            {/* Smooth animated progress bar */}
            <div className="w-full max-w-sm mx-auto h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-6">
              <div
                className="h-full bg-brand-blue rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="my-auto space-y-6 animate-in fade-in duration-300">
            {/* Slide Title & Subtitle */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F293D] dark:text-white">
                {walkthroughSteps[currentStep].title}
              </h3>
              <p className="text-xs sm:text-sm text-secondary dark:text-gray-400 max-w-md mx-auto leading-relaxed">
                {walkthroughSteps[currentStep].subtitle}
              </p>
            </div>

            {/* 5-Step Dot Indicators */}
            <div className="flex items-center justify-center gap-2 py-4">
              {walkthroughSteps.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentStep(idx)}
                  className={`h-2 transition-all rounded-full cursor-pointer ${
                    idx === currentStep
                      ? "w-7 bg-brand-blue"
                      : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Back
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#2A334B] hover:bg-[#1f2638] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer hover:scale-105"
              >
                <span>
                  {currentStep === walkthroughSteps.length - 1
                    ? "Get Started"
                    : "Next"}
                </span>
                <FiArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
