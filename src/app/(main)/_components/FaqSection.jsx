"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi";

const faqData = [
  {
    question: "Is Trabino legit? How does it apply on my behalf?",
    answer:
      "Trabino is trusted by 131,446 job seekers with a 4.7/5 rating on Reviews.io and backed by Microsoft for Startups. You sign up, tell us what kind of role you’re looking for, and share a few details about yourself. Trabino then scans the entire job market, finds your best matches, and applies through each company’s own career portal with a tailored cover letter and screening question answers written in your voice.",
  },
  {
    question: "How is this different from LinkedIn Easy Apply?",
    answer:
      "Unlike LinkedIn Easy Apply which dumps generic resumes into saturated application piles, Trabino applies directly on official company career portals with personalized screening responses, customized cover letters, and verified profile credentials.",
  },
  {
    question: "Can I review applications before they are sent?",
    answer:
      "Yes! You have full control. You can choose Manual Mode to review and approve every single application before it goes out, or Auto-Pilot mode to let Trabino apply automatically to jobs matching your exact criteria.",
  },
  {
    question: "Does Trabino work outside the US?",
    answer:
      "Yes, Trabino supports global job seekers and remote roles worldwide, as well as localized job markets across the US, UK, Europe, Canada, and Asia-Pacific.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes, Trabino offers a generous free tier where you can explore curated matches, build your ATS resume, and generate cover letters at no cost. Paid tiers unlock unlimited automated submissions and advanced matching power.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-10 sm:py-14 md:py-16 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-white border border-slate-200/90 shadow-2xs px-4 py-1.5 rounded-full text-xs font-medium text-slate-700 mb-4">
            FAQ
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141A29] tracking-tight">
            FAQ About Trabino
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-500 font-normal max-w-lg mx-auto">
            Everything you need to know about Trabino and how it helps you land
            your dream job
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="divide-y divide-slate-200/80">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5 sm:py-6 transition-colors">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                >
                  <span
                    className={`text-base sm:text-lg font-semibold transition-colors duration-200 ${
                      isOpen
                        ? "text-[#4F46E5]"
                        : "text-[#141A29] group-hover:text-[#4F46E5]"
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* Circular Toggle Icon */}
                  <span
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "bg-[#4F46E5] text-white shadow-xs"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                    }`}
                  >
                    {isOpen ? (
                      <HiMinus className="w-4 h-4" />
                    ) : (
                      <HiPlus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 sm:pt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal pr-8 sm:pr-12">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
