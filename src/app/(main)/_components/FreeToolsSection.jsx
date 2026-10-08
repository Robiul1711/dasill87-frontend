"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineDocumentText,
  HiOutlineMail,
  HiOutlineCheckCircle,
  HiOutlineChevronRight,
} from "react-icons/hi";
import blankSpaceImg from "@/assets/blankSpace.png";

const toolsData = [
  {
    id: "resume-builder",
    title: "AI Resume Builder",
    cta: "Try AI Resume Builder",
    icon: <HiOutlineDocumentText className="w-5 h-5" />,
    description:
      "Build a polished, ATS-friendly resume in minutes. Highlight your strengths and tailor each application to the job — no guesswork.",
    link: "/tools/resume-builder",
  },
  {
    id: "cover-letter",
    title: "AI Cover Letter Generator",
    cta: "Try AI Cover Letter Generator",
    icon: <HiOutlineMail className="w-5 h-5" />,
    description:
      "Create tailored, impactful cover letters for every single role you apply to in just seconds with AI personalized suggestions.",
    link: "/tools/cover-letter-generator",
  },
  {
    id: "ats-checker",
    title: "ATS Resume Checker",
    cta: "Try ATS Resume Checker",
    icon: <HiOutlineCheckCircle className="w-5 h-5" />,
    description:
      "Get instant feedback on keyword match rate, structure, and formatting to beat applicant tracking systems and get seen.",
    link: "/tools/ats-resume-checker",
  },
];

const FreeToolsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full py-10 sm:py-14 md:py-16 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-350 mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Row with Title and Dynamic CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            {/* Badge */}
            <div className="inline-block bg-white border border-slate-200/90 shadow-2xs px-4 py-1.5 rounded-full text-xs font-medium text-slate-700 mb-4">
              Free tools
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141A29] tracking-tight">
              Free AI tools for <br className="hidden sm:inline" />
              your job search
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-500 font-normal max-w-xl">
              Free AI-powered tools that work together to make every application
              stronger.
            </p>
          </div>

          {/* Right Action CTA Button */}
          <div>
            <Link
              href={toolsData[activeTab].link}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 text-[#141A29] text-xs sm:text-sm font-semibold px-6 sm:px-7 py-3 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-200 group"
            >
              <span>{toolsData[activeTab].cta}</span>
              <HiOutlineChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Preview Canvas Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full rounded-3xl p-3 sm:p-5 bg-linear-to-b from-[#EDE9FE]/50 via-[#F3EEFF]/40 to-[#F5F3FF]/30 border-2 border-[#DDD6FE]/60 shadow-[0_20px_50px_rgba(124,58,237,0.06)]"
            >
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-white shadow-xs border border-slate-100">
                <Image
                  src={blankSpaceImg}
                  alt={toolsData[activeTab].title}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Right: Interactive Tabs List */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">
            {toolsData.map((tool, index) => {
              const isActive = activeTab === index;
              return (
                <div
                  key={tool.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative p-5 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white border-2 border-[#818CF8] shadow-[0_8px_30px_rgba(99,102,241,0.08)]"
                      : "bg-transparent hover:bg-white/60 border border-transparent hover:border-slate-200/60"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isActive ? "text-[#6366F1]" : "text-slate-500"
                      }`}
                    >
                      {tool.icon}
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`text-base sm:text-lg font-bold transition-colors ${
                          isActive ? "text-[#141A29]" : "text-slate-700"
                        }`}
                      >
                        {tool.title}
                      </h3>

                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal"
                          >
                            {tool.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeToolsSection;
