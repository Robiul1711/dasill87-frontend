"use client";

import React from "react";
import {
  BrandScroller,
  BrandScrollerReverse,
} from "@/components/ui/brand-scoller";

const BrandScrollerSection = () => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-14 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-350 mx-auto px-4 sm:px-6 md:px-8 mb-6 sm:mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141A29] tracking-tight">
          Jobs are constantly moving.
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#64748B] font-normal">
          Only vetted jobs reach you — precisely matched.
        </p>
      </div>

      <div className="max-w-350 mx-auto px-2 sm:px-4 flex flex-col gap-4 sm:gap-5">
        <BrandScroller duration={35} />
        <BrandScrollerReverse duration={38} />
      </div>
    </section>
  );
};

export default BrandScrollerSection;
