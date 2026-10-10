"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiChevronLeft, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const candidates = [
  {
    id: 1,
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    matchScore: "95%",
    jobTitle: "Product Manager",
    topReasons: [
      { text: "5 Years of related experience", status: "good" },
      { text: "Annual review", status: "good" },
      { text: "Performance review", status: "good" },
      { text: "Roadmap", status: "neutral" },
    ],
    skills: [
      "Mechanical Assembly",
      "Quality Control",
      "Mechanical Assembly",
      "Quality Control",
    ],
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    matchScore: "94%",
    jobTitle: "Product Manager",
    topReasons: [
      { text: "5 Years of related experience", status: "good" },
      { text: "Annual review", status: "good" },
      { text: "Performance review", status: "good" },
      { text: "Roadmap", status: "good" },
    ],
    skills: [
      "Mechanical Assembly",
      "Quality Control",
      "Mechanical Assembly",
      "Quality Control",
    ],
  },
  {
    id: 3,
    name: "Alexandre Moreau",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    matchScore: "92%",
    jobTitle: "Product Manager",
    topReasons: [
      { text: "4 Years of related experience", status: "good" },
      { text: "Annual review", status: "good" },
      { text: "Performance review", status: "good" },
      { text: "Roadmap", status: "neutral" },
    ],
    skills: [
      "Mechanical Assembly",
      "Quality Control",
      "Mechanical Assembly",
      "Quality Control",
    ],
  },
  {
    id: 4,
    name: "Elena Rostova",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    matchScore: "91%",
    jobTitle: "Product Manager",
    topReasons: [
      { text: "5 Years of related experience", status: "good" },
      { text: "Annual review", status: "good" },
      { text: "Performance review", status: "good" },
      { text: "Roadmap", status: "neutral" },
    ],
    skills: [
      "Mechanical Assembly",
      "Quality Control",
      "Mechanical Assembly",
      "Quality Control",
    ],
  },
  {
    id: 5,
    name: "Michael Chen",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    matchScore: "89%",
    jobTitle: "Product Manager",
    topReasons: [
      { text: "6 Years of related experience", status: "good" },
      { text: "Annual review", status: "good" },
      { text: "Performance review", status: "good" },
      { text: "Roadmap", status: "good" },
    ],
    skills: [
      "Mechanical Assembly",
      "Quality Control",
      "Mechanical Assembly",
      "Quality Control",
    ],
  },
  {
    id: 6,
    name: "Laura Schmidt",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    matchScore: "88%",
    jobTitle: "Product Manager",
    topReasons: [
      { text: "5 Years of related experience", status: "good" },
      { text: "Annual review", status: "good" },
      { text: "Performance review", status: "good" },
      { text: "Roadmap", status: "good" },
    ],
    skills: [
      "Mechanical Assembly",
      "Quality Control",
      "Mechanical Assembly",
      "Quality Control",
    ],
  },
  {
    id: 7,
    name: "David Kim",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    matchScore: "87%",
    jobTitle: "Product Manager",
    topReasons: [
      { text: "4 Years of related experience", status: "good" },
      { text: "Annual review", status: "good" },
      { text: "Performance review", status: "good" },
      { text: "Roadmap", status: "neutral" },
    ],
    skills: [
      "Mechanical Assembly",
      "Quality Control",
      "Mechanical Assembly",
      "Quality Control",
    ],
  },
];

export default function TopCandidatesSlider() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="space-y-4">
      {/* Header with Title and "View all candidates" Link */}
      <div className="flex items-center justify-between">
        <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
          Top Candidates for Your Jobs
        </h2>

        <Link
          href="/company/matches"
          className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1.5 transition-colors group"
        >
          <span>View all candidates</span>
          <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Swiper Slider Wrapper */}
      <div className="relative group">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          grabCursor={true}
          spaceBetween={16}
          slidesPerView={1.1}
          breakpoints={{
            520: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1380: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="!overflow-visible py-1"
        >
          {candidates.map((candidate) => (
            <SwiperSlide key={candidate.id} className="h-auto">
              <div className="h-full flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-2xs hover:shadow-md transition-all duration-200">
                <div>
                  {/* Candidate Header: Avatar, Name, Match % */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-11 h-11 shrink-0 rounded-full overflow-hidden ring-2 ring-gray-100 dark:ring-gray-700 bg-gray-100 dark:bg-gray-800">
                        <Image
                          src={candidate.avatar}
                          alt={candidate.name}
                          width={44}
                          height={44}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="truncate">
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white truncate">
                          {candidate.name}
                        </h3>
                      </div>
                    </div>

                    <span className="shrink-0 px-2.5 py-0.5 rounded-md text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 dark:text-emerald-400">
                      {candidate.matchScore}
                    </span>
                  </div>

                  {/* For Job Tag */}
                  <div className="mt-4 flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs text-gray-400 dark:text-gray-400">
                      For job:
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                      {candidate.jobTitle}
                    </span>
                  </div>

                  {/* Top Reasons */}
                  <div className="mt-4 space-y-2">
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">
                      Top Reasons
                    </span>
                    <ul className="space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                      {candidate.topReasons.map((reason, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full shrink-0 ${
                              reason.status === "good"
                                ? "bg-emerald-500"
                                : "bg-amber-500"
                            }`}
                          />
                          <span className="truncate">{reason.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Skills */}
                  <div className="mt-4 space-y-2">
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">
                      Key Skills
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {candidate.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-blue-50/70 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Profile Button */}
                <div className="mt-5 pt-2">
                  <Link
                    href={`/company/matches`}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white font-semibold text-xs transition-all duration-200 cursor-pointer group/btn"
                  >
                    <span>View Profile</span>
                    <FiChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Circular Next Navigation Arrow (Right edge, matching screenshot) */}
        <button
          type="button"
          onClick={() => swiperInstance?.slideNext()}
          disabled={isEnd}
          aria-label="Next Candidates"
          className={`flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-white dark:bg-[#1A2234] border border-gray-200 dark:border-gray-700 shadow-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all cursor-pointer ${
            isEnd ? "opacity-40 cursor-not-allowed" : "opacity-100"
          }`}
        >
          <FiChevronRight className="w-5 h-5" />
        </button>

        {/* Circular Prev Navigation Arrow (Left edge) */}
        <button
          type="button"
          onClick={() => swiperInstance?.slidePrev()}
          disabled={isBeginning}
          aria-label="Previous Candidates"
          className={`flex absolute -left-3.5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-white dark:bg-[#1A2234] border border-gray-200 dark:border-gray-700 shadow-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all cursor-pointer ${
            isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <FiChevronLeft className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
