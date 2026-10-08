"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
import startNowBg from "@/assets/startNow.png";
import {
  TargetIcon,
  BrainIcon,
  FastIcon,
  ShieldIcon,
} from "@/components/icons";

const features = [
  {
    title: "Precise Opportunities",
    description: "Only jobs that truly fit you",
    icon: <TargetIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    glowBg: "bg-blue-50/90 shadow-[0_4px_16px_rgba(32,88,213,0.12)]",
  },
  {
    title: "Intelligent Matching",
    description: "Our algorithm recognizes your potential",
    icon: <BrainIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    glowBg: "bg-purple-50/90 shadow-[0_4px_16px_rgba(135,80,251,0.12)]",
  },
  {
    title: "Fast & Easy",
    description: "Register and get started in just a few minutes",
    icon: <FastIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    glowBg: "bg-emerald-50/90 shadow-[0_4px_16px_rgba(10,179,15,0.12)]",
  },
  {
    title: "Secure & Confidential",
    description: "Your data is protected with us",
    icon: <ShieldIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    glowBg: "bg-rose-50/90 shadow-[0_4px_16px_rgba(253,18,63,0.12)]",
  },
];

const StartNowSection = () => {
  return (
    <section className="w-full py-10 sm:py-14 md:py-16 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-350 mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-3xl sm:rounded-[40px] overflow-hidden px-5 sm:px-12 lg:px-16 py-10 sm:py-16 lg:py-20"
        >
          {/* Background image overlay - hidden on mobile */}
          <div className="hidden sm:block absolute inset-0 z-0 pointer-events-none">
            <Image
              src={startNowBg}
              alt="Background decoration"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Card Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Main Headline */}
            <h2 className="text-2xl sm:text-4xl md:text-[50px] font-bold text-[#141A29] tracking-tight leading-tight">
              Stop searching.
              <br />
              Start now with{" "}
              <span className="bg-linear-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Trabino
              </span>
              .
            </h2>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-5 text-xs sm:text-base text-slate-500 font-normal max-w-2xl leading-relaxed">
              Thousands already use Trabino, so they no longer have to search
              endlessly —
              <br className="hidden sm:inline" /> Create your free account and
              receive your first matches{" "}
              <span className="text-[#6366F1] font-semibold">
                within minutes.
              </span>
            </p>

            {/* 4 Feature Points Grid - 2 cols on mobile for clean modern look */}
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 my-8 sm:my-14 lg:divide-x lg:divide-slate-200/80">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center px-2 sm:px-4"
                >
                  {/* Icon Circle */}
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-2.5 sm:mb-4 transition-transform duration-300 hover:scale-105 ${item.glowBg}`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-xs sm:text-base font-bold text-[#141A29] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[11px] sm:text-sm text-slate-500 leading-tight sm:leading-normal max-w-45">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action CTA Button */}
            <div>
              <Link
                href="/auth/register"
                className="group inline-flex items-center gap-2.5 bg-[#1B2038] hover:bg-[#282F4E] text-white text-xs sm:text-base font-medium px-7 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-[0_10px_24px_rgba(27,32,56,0.28)] hover:shadow-[0_14px_30px_rgba(27,32,56,0.38)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get My Matches</span>
                <HiOutlineArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StartNowSection;
