"use client";

import React from "react";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaStar } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <section className="relative w-full sm:h-[640px] md:h-[760px] lg:h-[860px] 2xl:h-screen sm:overflow-hidden bg-[#FDFBF7]">
      {/* Video Container */}
      <div className="relative sm:absolute sm:inset-0 w-full aspect-[16/9] sm:aspect-auto sm:h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-top"
        >
          <source src="/videos/trabino-hero-animated.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Bottom soft gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-36 md:h-48 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Area */}
      <div className="relative sm:absolute sm:bottom-3 sm:left-0 sm:right-0 z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 -mt-6 sm:mt-0 pb-8 sm:pb-0 text-center flex flex-col items-center">
        {/* Main Headlines */}
        <div className="space-y-1 sm:space-y-2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold text-[#242C3F] tracking-tight">
            Not every job fits.
          </h2>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold text-[#141A29] tracking-tight leading-tight">
            The right one finds you.
          </h1>
        </div>

        {/* Subtitle / Description */}
        <p className="mt-3 sm:mt-5 text-xs sm:text-base md:text-lg text-[#556075] max-w-xl sm:max-w-2xl font-normal leading-relaxed text-balance">
          Trabino brings together what truly belongs —
          <br className="hidden sm:inline" /> precisely matched instead of
          endlessly searching.
        </p>

        {/* CTA Button */}
        <div className="mt-6 sm:mt-8">
          <Link
            href="/auth/register"
            className="group inline-flex items-center gap-2.5 bg-[#1B2038] hover:bg-[#282F4E] text-white text-xs sm:text-base font-medium px-7 sm:px-9 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-[0_10px_25px_rgba(27,32,56,0.32)] hover:shadow-[0_14px_30px_rgba(27,32,56,0.42)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get Matches Now</span>
            <HiOutlineArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Social Proof / Reviews.io Rating Badge */}
        <div className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#334155]">
          <span className="font-semibold text-[#1E2538]">Excellent</span>

          {/* 5 Star Rating Icons */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 bg-[#00B67A] rounded-xs flex items-center justify-center shadow-xs"
              >
                <FaStar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
              </div>
            ))}
          </div>

          <span className="text-[#64748B] flex items-center gap-1">
            <span>4.7 out of 5 based on</span>
            <strong className="font-semibold text-[#1E2538]">
              126 reviews
            </strong>
          </span>

          <div className="flex items-center gap-1 font-semibold text-[#1E2538] ml-0.5">
            <FaStar className="w-3.5 h-3.5 text-[#00B67A]" />
            <span>Reviews.io</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
