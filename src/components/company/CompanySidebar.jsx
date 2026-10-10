"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiGrid,
  FiPlus,
  FiBriefcase,
  FiEye,
  FiSettings,
  FiChevronDown,
  FiChevronsLeft,
  FiChevronsRight,
  FiMessageSquare,
  FiCheck,
} from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BiScan } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const navItems = [
  {
    name: "Dashboard",
    href: "/company/dashboard",
    icon: FiGrid,
    badge: null,
  },
  {
    name: "Post a Job",
    href: "/company/post-job",
    icon: FiPlus,
    badge: null,
  },
  {
    name: "Job Listings",
    href: "/company/job-listings",
    icon: FiBriefcase,
    badge: null,
  },
  {
    name: "Matches",
    href: "/company/matches",
    icon: BiScan,
    badge: "14",
  },
  {
    name: "Applications",
    href: "/company/applications",
    icon: HiOutlineDocumentText,
    badge: null,
  },
  {
    name: "Messages",
    href: "/company/messages",
    icon: FiMessageSquare,
    badge: "08",
  },
  {
    name: "Subscription",
    href: "/company/subscription",
    icon: ({ className }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    badge: null,
  },
];

export default function CompanySidebar({
  isOpen,
  onClose,
  isCollapsed,
  onToggleCollapse,
}) {
  const pathname = usePathname();
  const [agencyDropdownOpen, setAgencyDropdownOpen] = useState(false);

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs transition-opacity lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen flex flex-col justify-between border-r transition-all duration-300 ease-in-out lg:sticky lg:top-0 lg:shrink-0 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${
          isCollapsed ? "lg:w-20" : "lg:w-64"
        } w-64 bg-white dark:bg-[#111625] border-gray-100 dark:border-gray-800/80 shadow-lg lg:shadow-none overflow-hidden`}
      >
        <div className="flex flex-col h-full overflow-y-auto no-scrollbar">
          {/* Top Brand Logo Section */}
          <div
            className={`flex flex-col pt-5 pb-4 border-b border-gray-100/60 dark:border-gray-800/40 transition-all ${
              isCollapsed ? "items-center px-2" : "px-6"
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <Link
                href="/company/dashboard"
                className="flex flex-col items-start gap-0.5 group"
              >
                {isCollapsed ? (
                  <Image
                    src="/favicon.png"
                    alt="Trabino"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain rounded-xl"
                    priority
                  />
                ) : (
                  <div>
                    <div className="flex items-center">
                      <Image
                        src="/logo.png"
                        alt="Trabino Logo"
                        width={124}
                        height={32}
                        className="dark:hidden h-7.5 w-auto object-contain"
                        priority
                      />
                      <Image
                        src="/navLogo.png"
                        alt="Trabino Logo"
                        width={124}
                        height={32}
                        className="hidden dark:block h-7.5 w-auto object-contain"
                        priority
                      />
                    </div>
                    <span className="text-[11px] font-medium text-gray-400 dark:text-gray-400 tracking-normal pl-0.5">
                      Company Portal
                    </span>
                  </div>
                )}
              </Link>

              {/* Mobile Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="lg:hidden p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close sidebar"
              >
                <IoClose className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Company Profile Switcher Card */}
          <div className={`mt-4 ${isCollapsed ? "px-2" : "px-4"}`}>
            {isCollapsed ? (
              <div
                title="Digital Agency - Company Portal"
                className="w-11 h-11 mx-auto rounded-xl bg-[#0F172A] text-white flex items-center justify-center font-bold text-xs shadow-xs"
              >
                DA
              </div>
            ) : (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setAgencyDropdownOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-[#151B2B] transition-colors cursor-pointer group text-left"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-[#0F172A] text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-xs">
                      DA
                    </div>
                    <div className="truncate">
                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-tight truncate">
                        Digital Agency
                      </h3>
                      <p className="text-[11px] text-gray-400 dark:text-gray-400 font-normal leading-tight">
                        Company portal
                      </p>
                    </div>
                  </div>
                  <FiChevronDown
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                      agencyDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {agencyDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl p-1.5 z-30 animate-in fade-in slide-in-from-top-1 text-xs">
                    <div className="px-3 py-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                      Switch Portal
                    </div>
                    <button
                      type="button"
                      onClick={() => setAgencyDropdownOpen(false)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-blue-50/60 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
                    >
                      <span>Digital Agency</span>
                      <FiCheck className="w-3.5 h-3.5" />
                    </button>
                    <Link
                      href="/dashboard"
                      onClick={() => setAgencyDropdownOpen(false)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors"
                    >
                      <span>Candidate Portal</span>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/company/dashboard"
                  ? pathname === "/company" || pathname === "/company/dashboard"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => onClose?.()}
                  title={isCollapsed ? item.name : undefined}
                  className={`group relative flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-[13px] font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-blue-50/70 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 font-semibold shadow-2xs"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800/50"
                  } ${isCollapsed ? "justify-center px-0" : ""}`}
                >
                  <div className="relative shrink-0 flex items-center justify-center">
                    <Icon
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400 scale-105"
                          : "text-gray-400 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-200"
                      }`}
                    />
                  </div>

                  {!isCollapsed && (
                    <span className="flex-1 truncate">{item.name}</span>
                  )}

                  {!isCollapsed && item.badge && (
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide ${
                        isActive
                          ? "bg-blue-600 text-white dark:bg-blue-500"
                          : "bg-blue-100 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Settings Section (as styled in screenshot 1) */}
          <div className={`mt-auto mb-2 ${isCollapsed ? "px-2" : "px-3"}`}>
            <Link
              href="/company/settings"
              onClick={() => onClose?.()}
              title={isCollapsed ? "Settings" : undefined}
              className={`group flex items-center gap-3 p-2.5 rounded-2xl transition-all duration-200 ${
                pathname.startsWith("/company/settings")
                  ? "bg-gray-100/80 dark:bg-gray-800/60"
                  : "bg-gray-50/60 hover:bg-gray-100/70 dark:bg-gray-900/40 dark:hover:bg-gray-800/40"
              } ${isCollapsed ? "justify-center p-2" : ""}`}
            >
              {/* White card with blue cog icon */}
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#1A2234] text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-xs border border-gray-100/80 dark:border-gray-800 shrink-0 group-hover:rotate-45 transition-transform duration-300">
                <FiSettings className="w-5 h-5 stroke-[2]" />
              </div>
              {!isCollapsed && (
                <span className="text-xs sm:text-[13px] font-semibold text-gray-700 dark:text-gray-200 truncate">
                  Settings
                </span>
              )}
            </Link>
          </div>

          {/* Collapse Menu Toggle Button (Desktop Only) */}
          <div className="hidden lg:block border-t border-gray-100 dark:border-gray-800/80 p-3">
            <button
              type="button"
              onClick={onToggleCollapse}
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              className={`w-full flex items-center gap-2.5 py-2 px-3 rounded-xl text-xs font-medium text-gray-400 hover:text-gray-700 hover:bg-gray-50 dark:hover:text-gray-200 dark:hover:bg-gray-800/50 transition-colors cursor-pointer ${
                isCollapsed ? "justify-center px-0" : ""
              }`}
            >
              {isCollapsed ? (
                <FiChevronsRight className="w-4 h-4 text-gray-400" />
              ) : (
                <>
                  <FiChevronsLeft className="w-4 h-4 text-gray-400" />
                  <span>Collapse Menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
