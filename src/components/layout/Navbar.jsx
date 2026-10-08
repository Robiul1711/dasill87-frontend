"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import navLogo from "@/assets/navLogo.png";
import logoImg from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-2.5 sm:py-3 px-3 sm:px-6 md:px-8"
            : "py-4 sm:py-6 px-4 sm:px-6 md:px-8"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "max-w-350 bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-full px-5 sm:px-8 py-2.5 sm:py-3"
              : "max-w-350 bg-transparent px-0 py-0"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-10">
            <Image
              src={isScrolled ? logoImg : navLogo}
              alt="Trabino Logo"
              width={125}
              height={34}
              className="h-7 sm:h-8 w-auto object-contain transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium transition-colors duration-300 ${
              isScrolled ? "text-[#2C344E]" : "text-white"
            }`}
          >
            <Link
              href="#why-trabino"
              className={
                isScrolled
                  ? "hover:text-[#4F46E5] transition-colors"
                  : "hover:text-white/80 transition-colors"
              }
            >
              Why Trabino
            </Link>
            <Link
              href="#how-it-works"
              className={
                isScrolled
                  ? "hover:text-[#4F46E5] transition-colors"
                  : "hover:text-white/80 transition-colors"
              }
            >
              How it works
            </Link>

            {/* For companies Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyDropdownOpen(true)}
              onMouseLeave={() => setCompanyDropdownOpen(false)}
            >
              <button
                onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                className={`flex items-center gap-1.5 cursor-pointer py-1 transition-colors ${
                  isScrolled ? "hover:text-[#4F46E5]" : "hover:text-white/80"
                }`}
              >
                <span>For companies</span>
                <FiChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isScrolled ? "text-[#637381]" : "text-white/90"
                  } ${companyDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              {companyDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <Link
                    href="/auth/company-register"
                    className="block px-4 py-2.5 text-xs text-[#2C344E] hover:bg-slate-50 hover:text-[#4F46E5] transition-colors font-medium"
                  >
                    Hire Talent
                  </Link>
                  <Link
                    href="/auth/login"
                    className="block px-4 py-2.5 text-xs text-[#2C344E] hover:bg-slate-50 hover:text-[#4F46E5] transition-colors font-medium"
                  >
                    Employer Login
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/auth/login"
              className={`transition-colors ml-1 ${
                isScrolled ? "hover:text-[#4F46E5]" : "hover:text-white/80"
              }`}
            >
              Sign in
            </Link>
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/auth/register"
              className="hidden sm:inline-flex items-center gap-2 bg-[#15192E] hover:bg-[#222844] text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-2.5 rounded-full transition-all duration-200 shadow-[0_4px_14px_rgba(21,25,46,0.35)] hover:shadow-[0_6px_20px_rgba(21,25,46,0.45)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get Matches Now</span>
              <HiOutlineArrowRight className="w-4 h-4 text-white" />
            </Link>

            {/* Circular Hamburger Menu Button (mobile only) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                isScrolled
                  ? "bg-slate-100 text-[#2C344E] hover:bg-slate-200 shadow-xs"
                  : "bg-white/25 backdrop-blur-md border border-white/30 text-white hover:bg-white/35"
              }`}
              aria-label="Open Navigation Menu"
            >
              <HiOutlineMenu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Sidebar Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Outside Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Side Drawer Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="fixed top-0 right-0 bottom-0 w-[84%] max-w-[340px] bg-white/95 backdrop-blur-2xl z-50 shadow-2xl flex flex-col justify-between md:hidden border-l border-slate-100"
            >
              {/* Drawer Top Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center"
                >
                  <Image
                    src={logoImg}
                    alt="Trabino Logo"
                    width={115}
                    height={32}
                    className="h-7 w-auto object-contain"
                  />
                </Link>

                {/* Close Icon Button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <HiOutlineX className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Nav Links */}
              <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4">
                <Link
                  href="#why-trabino"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#2C344E] hover:text-[#4F46E5] py-2 border-b border-slate-100 transition-colors"
                >
                  Why Trabino
                </Link>
                <Link
                  href="#how-it-works"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#2C344E] hover:text-[#4F46E5] py-2 border-b border-slate-100 transition-colors"
                >
                  How it works
                </Link>

                {/* For companies Accordion */}
                <div className="border-b border-slate-100 pb-2">
                  <button
                    onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                    className="w-full flex items-center justify-between text-base font-medium text-[#2C344E] hover:text-[#4F46E5] py-2 transition-colors cursor-pointer"
                  >
                    <span>For companies</span>
                    <FiChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                        mobileCompanyOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileCompanyOpen && (
                    <div className="pl-3 pt-1 pb-2 flex flex-col gap-2 animate-in fade-in slide-in-from-top-1 duration-200">
                      <Link
                        href="/auth/company-register"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm text-slate-600 hover:text-[#4F46E5] py-1.5"
                      >
                        Hire Talent
                      </Link>
                      <Link
                        href="/auth/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm text-slate-600 hover:text-[#4F46E5] py-1.5"
                      >
                        Employer Login
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/auth/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#2C344E] hover:text-[#4F46E5] py-2 transition-colors"
                >
                  Sign in
                </Link>
              </div>

              {/* Drawer Bottom CTA */}
              <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col gap-3">
                <Link
                  href="/auth/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#15192E] hover:bg-[#222844] text-white text-sm font-medium py-3.5 px-5 rounded-full shadow-[0_4px_14px_rgba(21,25,46,0.3)] transition-all"
                >
                  <span>Get Matches Now</span>
                  <HiOutlineArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
