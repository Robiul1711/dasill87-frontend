"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/providers/ThemeProvider";
import {
  FiBell,
  FiChevronDown,
  FiSun,
  FiMoon,
  FiUser,
  FiSettings,
  FiLogOut,
  FiStar,
} from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

export default function CompanyHeader({ onToggleSidebar }) {
  const { theme, toggleTheme, setTheme, mounted } = useTheme();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between border-b border-gray-100 bg-white/95 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 backdrop-blur-md dark:border-gray-800/80 dark:bg-[#0B0F19]/95 transition-colors duration-200">
      {/* Left: Hamburger & Greeting */}
      <div className="flex items-center gap-3.5 sm:gap-4.5">
        {/* Mobile Hamburger Button */}
        <button
          onClick={onToggleSidebar}
          aria-label="Toggle Sidebar Menu"
          className="lg:hidden flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-xl border border-gray-200/90 bg-white text-gray-700 shadow-2xs hover:bg-gray-50 hover:text-black dark:border-gray-800 dark:bg-[#151B2B] dark:text-gray-300 dark:hover:bg-gray-800 cursor-pointer transition-colors"
        >
          <HiOutlineMenuAlt2 className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Greeting (Hidden on mobile & tablet) */}
        <div className="hidden lg:flex flex-col justify-center">
          <h1 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
            Welcome back, Mr. Mustermann
          </h1>
          <p className="text-xs sm:text-[13px] text-gray-400 dark:text-gray-400 font-normal mt-0.5">
            4 high quality candidates ready for you
          </p>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-4 py-2 shrink-0">
        {/* Theme Toggle Switch */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-gray-100 dark:bg-[#151B2B] border border-gray-200/80 dark:border-gray-800 shadow-2xs">
          {/* Sun Icon */}
          <button
            type="button"
            onClick={() => setTheme("light")}
            aria-label="Switch to Light Mode"
            title="Light Mode"
            className={`p-1.5 rounded-full transition-colors cursor-pointer ${
              !isDark
                ? "text-amber-500 bg-white dark:bg-transparent shadow-xs"
                : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            }`}
          >
            <FiSun className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* Toggle Capsule Switch */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-blue-600 transition-colors duration-200 ease-in-out focus:outline-hidden"
          >
            <span
              className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                isDark ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>

          {/* Moon Icon */}
          <button
            type="button"
            onClick={() => setTheme("dark")}
            aria-label="Switch to Dark Mode"
            title="Dark Mode"
            className={`p-1.5 rounded-full transition-colors cursor-pointer ${
              isDark
                ? "text-blue-400 bg-[#1E2638] shadow-xs"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <FiMoon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Notification Bell Button */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 dark:bg-[#151B2B] dark:hover:bg-gray-800 dark:text-gray-300 border border-gray-100 dark:border-gray-800 transition-colors cursor-pointer"
        >
          <FiBell className="w-4.5 h-4.5" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-blue-600 ring-2 ring-white dark:ring-[#151B2B]" />
        </button>

        {/* User Profile Avatar & Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setProfileDropdownOpen((prev) => !prev)}
            aria-label="User Profile Menu"
            className="flex items-center gap-2.5 p-1 sm:pl-1.5 sm:pr-3 rounded-full hover:bg-gray-50 dark:hover:bg-[#151B2B] cursor-pointer transition-colors"
          >
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-gray-100 dark:ring-gray-700 bg-linear-to-br from-slate-200 to-slate-400 shadow-xs">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
                alt="Mr. Mustermann"
                width={40}
                height={40}
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <div className="hidden sm:flex flex-col text-left leading-tight">
              <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100">
                Mr. Mustermann
              </span>
              <span className="text-[11px] text-gray-400 dark:text-gray-400 font-medium">
                Admin
              </span>
            </div>
            <FiChevronDown
              className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                profileDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Profile Dropdown Popover */}
          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-[#1C202B] text-gray-800 dark:text-white p-2 shadow-2xl border border-gray-100 dark:border-gray-700/60 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-700/50 mb-1">
                <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Signed in as
                </span>
                <p className="text-xs font-bold text-gray-900 dark:text-white truncate">
                  Mr. Mustermann
                </p>
                <p className="text-[11px] text-gray-400 truncate">
                  admin@digitalagency.com
                </p>
              </div>

              <div className="space-y-0.5">
                <Link
                  href="/company/settings"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
                >
                  <FiSettings className="w-3.5 h-3.5 text-gray-400" />
                  <span>Company Settings</span>
                </Link>

                <Link
                  href="/dashboard"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
                >
                  <FiUser className="w-3.5 h-3.5 text-gray-400" />
                  <span>Switch to Candidate Portal</span>
                </Link>

                <div className="pt-1 mt-1 border-t border-gray-100 dark:border-gray-700/50">
                  <Link
                    href="/auth/login"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                  >
                    <FiLogOut className="w-3.5 h-3.5 text-red-500" />
                    <span>Sign out</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
