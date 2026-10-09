"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/providers/ThemeProvider";
import {
  FiSearch,
  FiBell,
  FiChevronDown,
  FiSun,
  FiMoon,
  FiUser,
  FiSettings,
  FiHeart,
  FiSliders,
  FiLogOut,
} from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

export default function DashboardHeader({ onToggleSidebar }) {
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
    <header className="sticky top-0 z-30 flex min-h-19 w-full items-center justify-between border-b border-gray-100 bg-white/95 px-3 sm:px-6 lg:px-8 backdrop-blur-md dark:border-gray-800/80 dark:bg-[#0B0F19]/95 transition-colors duration-200">
      {/* Left: Hamburger + Greeting */}
      <div className="flex items-center gap-2.5 sm:gap-4 py-2">
        {/* Rounded Hamburger Button */}
        <button
          onClick={onToggleSidebar}
          aria-label="Toggle Sidebar Menu"
          className="flex h-9.5 w-9.5 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-gray-200/90 bg-white text-gray-700 shadow-2xs hover:bg-gray-50 hover:text-black dark:border-gray-800 dark:bg-[#151B2B] dark:text-gray-300 dark:hover:bg-gray-800 cursor-pointer transition-colors"
        >
          <HiOutlineMenuAlt2 className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Greeting Text (Hidden on mobile to keep header clean, visible on sm+) */}
        <div className="hidden sm:flex flex-col justify-center">
          <h1 className="text-xs sm:text-base font-bold text-gray-900 dark:text-white leading-snug">
            Welcome, Marco
          </h1>
          <p className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-400 font-normal leading-tight">
            Complete your profile
          </p>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-4 py-2">
        {/* Search Bar */}
        <div className="relative hidden md:block w-56 lg:w-80">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4 pointer-events-none" />
          <input
            type="text"
            placeholder="Search any job"
            className="w-full h-10 pl-10 pr-4 text-xs sm:text-sm rounded-full bg-[#F4F5F7] dark:bg-[#151B2B] border border-transparent dark:border-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-hidden focus:bg-white dark:focus:bg-[#111625] focus:border-brand-blue dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
          />
        </div>

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
            <FiSun className="w-4 h-4" />
          </button>

          {/* Toggle Capsule Switch */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-brand-blue transition-colors duration-200 ease-in-out focus:outline-hidden"
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
                ? "text-blue-400 bg-gray-800 shadow-xs"
                : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            }`}
          >
            <FiMoon className="w-4 h-4" />
          </button>
        </div>

        {/* Notification Bell */}
        <button
          aria-label="Notifications"
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200/90 bg-white text-gray-600 hover:bg-gray-50 dark:border-gray-800 dark:bg-[#151B2B] dark:text-gray-300 dark:hover:bg-gray-800 cursor-pointer transition-colors shadow-2xs"
        >
          <FiBell className="h-4.5 w-4.5" />
          <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#151B2B]" />
        </button>

        {/* User Profile Avatar & Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setProfileDropdownOpen((prev) => !prev)}
            aria-label="User Profile Menu"
            className="flex items-center gap-2 p-1 pl-1 pr-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#151B2B] cursor-pointer transition-colors"
          >
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-1 ring-gray-200 dark:ring-gray-700 bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-semibold text-xs">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Marco"
                width={32}
                height={32}
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <span className="hidden sm:block text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-100">
              Marco
            </span>
            <FiChevronDown
              className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
                profileDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Profile Dropdown Popover */}
          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-[#1C202B] text-white p-2 shadow-2xl border border-gray-700/60 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="px-3 py-2 border-b border-gray-700/50 mb-1">
                <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                  Signed in as
                </span>
                <p className="text-xs font-bold text-white truncate">
                  Marco (Job Seeker)
                </p>
              </div>

              <div className="space-y-0.5">
                <Link
                  href="/dashboard/profile"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-gray-200 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <FiUser className="w-3.5 h-3.5 text-gray-400" />
                  <span>Profile</span>
                </Link>

                <Link
                  href="/dashboard/account-settings"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-gray-200 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <FiSettings className="w-3.5 h-3.5 text-gray-400" />
                  <span>Account settings</span>
                </Link>

                <Link
                  href="/dashboard/favorite-company"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-gray-200 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <FiHeart className="w-3.5 h-3.5 text-gray-400" />
                  <span>Favorite Company</span>
                </Link>

                <Link
                  href="/dashboard/job-preferences"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-gray-200 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <FiSliders className="w-3.5 h-3.5 text-gray-400" />
                  <span>Job preferences</span>
                </Link>

                <div className="my-1 border-t border-gray-700/50" />

                <button
                  type="button"
                  onClick={() => {
                    setProfileDropdownOpen(false);
                  }}
                  className="flex w-full items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors cursor-pointer"
                >
                  <FiLogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
