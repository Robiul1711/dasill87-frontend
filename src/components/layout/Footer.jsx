"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaRedditAlien,
  FaTiktok,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";
import { FiGlobe, FiChevronDown } from "react-icons/fi";
import logoImg from "@/assets/logo.png";

const socialLinks = [
  { icon: <FaLinkedinIn className="w-3.5 h-3.5" />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FaRedditAlien className="w-3.5 h-3.5" />, href: "https://reddit.com", label: "Reddit" },
  { icon: <FaTiktok className="w-3.5 h-3.5" />, href: "https://tiktok.com", label: "TikTok" },
  { icon: <FaFacebookF className="w-3.5 h-3.5" />, href: "https://facebook.com", label: "Facebook" },
  { icon: <FaInstagram className="w-3.5 h-3.5" />, href: "https://instagram.com", label: "Instagram" },
];

const productLinks = [
  { label: "AI Job Search", href: "/#how-it-works" },
  { label: "AI Job Application", href: "/#how-it-works" },
  { label: "AI Resume Builder", href: "/tools/resume-builder" },
  { label: "AI Cover Letter Generator", href: "/tools/cover-letter-generator" },
  { label: "ATS Resume Checker", href: "/tools/ats-resume-checker" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQs", href: "/#faq" },
];

const companyLinks = [
  { label: "Contact US", href: "/contact" },
  { label: "Reviews", href: "/reviews" },
];

const legalLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const languages = ["English", "Spanish", "German", "French"];

  return (
    <footer className="w-full bg-[#FDFBF7] border-t border-slate-200/60 pt-10 sm:pt-14 pb-8 sm:pb-10 overflow-hidden">
      <div className="max-w-350 mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Mobile Top Brand & Social Row (visible only on mobile/tablet) */}
        <div className="flex lg:hidden flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-200/60">
          <Link href="/" className="inline-block">
            <Image
              src={logoImg}
              alt="Trabino Logo"
              width={115}
              height={30}
              className="h-6.5 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-1.5">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-7 h-7 rounded-md border border-slate-200/90 bg-white flex items-center justify-center text-slate-500 hover:text-[#4F46E5] hover:border-slate-300 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-8 pb-10 sm:pb-12">
          {/* Column 1: Brand Logo & Social Links (Desktop only) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col gap-5">
            <Link href="/" className="inline-block">
              <Image
                src={logoImg}
                alt="Trabino Logo"
                width={125}
                height={34}
                className="h-7 w-auto object-contain"
              />
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg border border-slate-200/90 hover:border-slate-400 bg-white flex items-center justify-center text-slate-500 hover:text-[#4F46E5] hover:shadow-xs transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: PRODUCT */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#141A29]">
              PRODUCT
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-slate-500">
              {productLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-[#4F46E5] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: RESOURCES */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#141A29]">
              RESOURCES
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-slate-500">
              {resourceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-[#4F46E5] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: COMPANY */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#141A29]">
              COMPANY
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-slate-500">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-[#4F46E5] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: LEGAL */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#141A29]">
              LEGAL
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-slate-500">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-[#4F46E5] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 6: Language Selector */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 flex flex-col gap-2.5">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#141A29]">
              Language:
            </h4>

            <div className="relative">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="w-full sm:w-auto inline-flex items-center justify-between gap-3 bg-white border border-slate-200/90 hover:border-slate-300 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-700 shadow-2xs transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <FiGlobe className="w-3.5 h-3.5 text-slate-500" />
                  <span>{selectedLanguage}</span>
                </div>
                <FiChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                    languageDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Language Dropdown Menu */}
              {languageDropdownOpen && (
                <div className="absolute bottom-full sm:bottom-auto sm:top-full left-0 mb-1.5 sm:mb-0 sm:mt-1.5 w-36 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-30 animate-in fade-in slide-in-from-bottom-1 sm:slide-in-from-top-1 duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setLanguageDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-1.5 text-xs font-medium transition-colors ${
                        selectedLanguage === lang
                          ? "bg-slate-50 text-[#4F46E5] font-semibold"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Divider */}
        <div className="border-t border-slate-200/80 pt-6 text-center">
          <p className="text-[11px] sm:text-xs text-slate-400 font-normal">
            ©Copyright 2026 trabino • All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
