"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";

// Assets
import chatBannerImg from "@/assets/chatbanner.png";
import scanMarketImg from "@/assets/scanMarket.png";
import swipeRightImg from "@/assets/swipeRight.png";
import wakeUpImg from "@/assets/wakeUp.png";

// Bubble popup animation variant
const bubbleVariant = {
  hidden: { opacity: 0, scale: 0.88, y: 35 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 18,
      mass: 0.8,
    },
  },
};

const MilestoneBadge = ({ text, number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className="flex flex-col items-center relative z-20 my-6 sm:my-10"
  >
    <div className="bg-gradient-to-r from-[#8C5E28] via-[#A87432] to-[#7B4E1E] text-[#FFF9E6] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold shadow-[0_6px_20px_rgba(140,94,40,0.35)] border border-[#C59B4E]/40 tracking-wide select-none">
      {text}
    </div>
    <div className="w-3.5 h-3.5 rounded-full bg-[#A87432] border-2 border-white shadow-md mt-2 relative">
      <span className="absolute -inset-1 rounded-full bg-[#A87432]/30 animate-ping" />
    </div>
  </motion.div>
);

const HowItWorksSection = () => {
  const containerRef = useRef(null);

  // Scroll progress for drawing the animated SVG path
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 85%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative w-full py-10 sm:py-14 md:py-16 bg-[#FDFBF7] overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block bg-white border border-slate-200/90 shadow-xs px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-slate-700 mb-4"
        >
          Your journey starts here
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141A29] tracking-tight"
        >
          How AI job search actually works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-sm sm:text-base text-slate-500 font-normal"
        >
          Four steps. One path to interviews.
        </motion.p>
      </div>

      {/* Main Timeline Container with SVG Animated Curve */}
      <div className="relative max-w-350 mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Animated Connecting SVG Path (Desktop & Tablet) */}
        <div className="absolute inset-0 hidden md:block pointer-events-none z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 2400"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Background Dotted Guideline */}
            <path
              d="M 500 80 
                 C 500 250, 580 320, 580 480 
                 C 580 640, 500 700, 500 840 
                 C 500 980, 440 1040, 440 1200 
                 C 440 1360, 500 1440, 500 1580 
                 C 500 1720, 560 1800, 540 1960 
                 C 520 2100, 500 2200, 500 2320"
              stroke="#E8DFC8"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />

            {/* Active Smooth Animated Golden Stroke */}
            <motion.path
              d="M 500 80 
                 C 500 250, 580 320, 580 480 
                 C 580 640, 500 700, 500 840 
                 C 500 980, 440 1040, 440 1200 
                 C 440 1360, 500 1440, 500 1580 
                 C 500 1720, 560 1800, 540 1960 
                 C 520 2100, 500 2200, 500 2320"
              stroke="url(#goldenGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              style={{ pathLength: smoothProgress }}
            />

            <defs>
              <linearGradient
                id="goldenGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#C59B27" />
                <stop offset="50%" stopColor="#D8A538" />
                <stop offset="100%" stopColor="#A87432" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* ---------------------------------------------------- */}
        {/* STEP 1: Share your skills and details                */}
        {/* ---------------------------------------------------- */}
        <MilestoneBadge text="Share your skills and details" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center my-10 sm:my-14 relative z-10">
          {/* Left Text */}
          <motion.div
            variants={bubbleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:pr-6 text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#141A29] tracking-tight">
              Share your skills and details
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
              Start with your details, reach your dashboard, and build your
              profile step by step to earn verified batch.
            </p>
          </motion.div>

          {/* Right Bubble Mockup Card */}
          <motion.div
            variants={bubbleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full flex justify-center md:justify-end"
          >
            <div className="w-full max-w-md bg-white rounded-3xl p-3 sm:p-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-xl transition-all duration-300">
              <Image
                src={chatBannerImg}
                alt="AI chat persona setup"
                width={500}
                height={320}
                className="w-full h-auto object-contain rounded-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* STEP 2: Set Match Compatibility Level                */}
        {/* ---------------------------------------------------- */}
        <MilestoneBadge text="Set Match Compatibility Level" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center my-10 sm:my-14 relative z-10">
          {/* Left: 3M+ Stats & Scanning Feed */}
          <motion.div
            variants={bubbleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full flex flex-col gap-5 items-center md:items-start"
          >
            {/* Stat Badges */}
            <div className="flex items-center gap-10 sm:gap-14 mb-1">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#141A29]">
                  3M+
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  jobs scanned
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#4F46E5]">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  pre-vetted
                </div>
              </div>
            </div>

            {/* Scan Market Card */}
            <div className="w-full max-w-md bg-white rounded-3xl p-3 sm:p-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-xl transition-all duration-300">
              <Image
                src={scanMarketImg}
                alt="Market scanning live feed"
                width={500}
                height={350}
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            variants={bubbleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:pl-6 text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#141A29] tracking-tight">
              We scan the market, every single day
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
              Trabino scans the entire market for you and finds the roles that
              actually match your experience. By the time you wake up, only the
              jobs worth your time are waiting.
            </p>
          </motion.div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* STEP 3: Your Matches (Swipe Right. Accept.)          */}
        {/* ---------------------------------------------------- */}
        <MilestoneBadge text="Your Matches" />

        <div className="flex flex-col items-center text-center my-10 sm:my-14 relative z-10">
          {/* Headline */}
          <motion.div
            variants={bubbleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl mx-auto mb-8"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141A29] tracking-tight">
              Swipe right. Accept.
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal">
              See your match score, salary range, and company ratings, then apply
              with one swipe.
            </p>
          </motion.div>

          {/* Job Match Card Bubble */}
          <motion.div
            variants={bubbleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full max-w-2xl bg-white rounded-3xl p-3 sm:p-5 shadow-[0_16px_50px_rgba(0,0,0,0.08)] border border-slate-100 hover:shadow-2xl transition-all duration-300"
          >
            <Image
              src={swipeRightImg}
              alt="Swipe Right Match Card"
              width={700}
              height={450}
              className="w-full h-auto object-contain rounded-2xl"
            />
          </motion.div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* STEP 4: Wake up to Results                           */}
        {/* ---------------------------------------------------- */}
        <MilestoneBadge text="Wake up to Results" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center my-10 sm:my-14 relative z-10">
          {/* Left Text */}
          <motion.div
            variants={bubbleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:pr-6 text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#141A29] tracking-tight">
              Wake up to responses, not another day of job hunting.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
              While you sleep, companies review your applications. Wake up to
              interview invitations, not silence.
            </p>
          </motion.div>

          {/* Right Phone Mockup Bubble Card */}
          <motion.div
            variants={bubbleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full flex justify-center md:justify-end"
          >
            <div className="w-full max-w-sm flex justify-center">
              <Image
                src={wakeUpImg}
                alt="Mobile Notifications"
                width={360}
                height={520}
                className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 160, damping: 20 }}
          className="mt-16 sm:mt-20 flex flex-col items-center relative z-20"
        >
          <Link
            href="/auth/register"
            className="group inline-flex items-center gap-2.5 bg-[#1B2038] hover:bg-[#282F4E] text-white text-sm sm:text-base font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-[0_12px_30px_rgba(27,32,56,0.35)] hover:shadow-[0_16px_35px_rgba(27,32,56,0.45)] hover:-translate-y-1 active:translate-y-0"
          >
            <span>Start Free</span>
            <HiOutlineArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
