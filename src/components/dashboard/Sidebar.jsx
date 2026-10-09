"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DashboardIcon,
  MatchesIcon,
  MessagesIcon,
  MarketIcon,
} from "@/components/icons/DashboardIcons";
import { IoClose } from "react-icons/io5";

const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: DashboardIcon,
    badge: null,
  },
  {
    name: "Matches",
    href: "/dashboard/matches",
    icon: MatchesIcon,
    badge: "14",
  },
  {
    name: "Messages",
    href: "/dashboard/messages",
    icon: MessagesIcon,
    badge: "08",
  },
  {
    name: "Market",
    href: "/dashboard/market",
    icon: MarketIcon,
    badge: null,
  },
];

export default function DashboardSidebar({
  isOpen,
  onClose,
  isCollapsed,
  onToggleCollapse,
}) {
  const pathname = usePathname();

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
        className={`fixed top-0 left-0 z-50 h-screen flex-col justify-between border-r transition-all duration-300 ease-in-out lg:sticky lg:top-0 lg:shrink-0 lg:flex lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${
          isCollapsed ? "lg:w-20" : "lg:w-64"
        } w-64 bg-white dark:bg-[#111625] border-gray-100 dark:border-gray-800/80 shadow-sm lg:shadow-none overflow-hidden`}
      >
        <div className="flex flex-col h-full overflow-y-auto no-scrollbar">
          {/* Brand Logo Header */}
          <div
            className={`flex min-h-19 items-center border-b border-gray-100/60 dark:border-gray-800/40 transition-all ${
              isCollapsed ? "justify-center px-2" : "justify-between px-6"
            }`}
          >
            <Link href="/dashboard" className="flex items-center gap-2.5">
              {isCollapsed ? (
                /* Favicon icon when collapsed */
                <Image
                  src="/favicon.png"
                  alt="Trabino Favicon"
                  width={38}
                  height={38}
                  className="h-9 w-9 object-contain rounded-xl"
                  priority
                />
              ) : (
                /* Full PNG Logo (logo.png in Light mode, navLogo.png in Dark mode) */
                <div className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Trabino Logo"
                    width={130}
                    height={34}
                    className="dark:hidden h-8 w-auto object-contain"
                    priority
                  />
                  <Image
                    src="/navLogo.png"
                    alt="Trabino Logo"
                    width={130}
                    height={34}
                    className="hidden dark:block h-8 w-auto object-contain"
                    priority
                  />
                </div>
              )}
            </Link>

            {/* Close button for mobile drawer */}
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-secondary hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden cursor-pointer"
              aria-label="Close Sidebar"
            >
              <IoClose className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto">
            {navItems.map((item) => {
              const isActive =
                item.href === "/dashboard"
                  ? pathname === "/dashboard" || pathname === "/dashboard/"
                  : pathname.startsWith(item.href);

              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    if (window.innerWidth < 1024) onClose();
                  }}
                  title={isCollapsed ? item.name : undefined}
                  className={`group flex items-center ${
                    isCollapsed ? "justify-center px-2 py-3" : "justify-between px-4 py-3"
                  } rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-brand-blue/10 dark:bg-[#1C2438] text-brand-blue dark:text-blue-400 shadow-xs"
                      : "text-secondary dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-primary dark:hover:text-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <Icon
                      className="w-5 h-5 transition-transform duration-200 group-hover:scale-105 shrink-0"
                      color={isActive ? "#0000F6" : "currentColor"}
                    />
                    {!isCollapsed && (
                      <span className="font-semibold">{item.name}</span>
                    )}
                  </div>

                  {!isCollapsed && item.badge && (
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                        isActive
                          ? "bg-brand-blue text-white"
                          : "bg-brand-blue/10 text-brand-blue dark:bg-blue-950/60 dark:text-blue-400"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Upgrade / Help Card */}
          {!isCollapsed ? (
            <div className="p-4 m-4 rounded-2xl bg-linear-to-br from-blue-50 to-indigo-50/50 dark:from-[#182033] dark:to-[#121929] border border-blue-100/70 dark:border-blue-900/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-brand-blue dark:text-blue-400 uppercase tracking-wider">
                  Job Seeker Pro
                </span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                </span>
              </div>
              <p className="text-xs text-secondary dark:text-gray-300 mb-3">
                Get AI matches 3x faster with a complete profile.
              </p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-brand-blue h-full rounded-full w-[47%] transition-all duration-500"></div>
              </div>
              <div className="flex justify-between text-[11px] text-secondary dark:text-gray-400 mt-1.5 font-medium">
                <span>Profile Score</span>
                <span>47%</span>
              </div>
            </div>
          ) : (
            <div className="p-3 m-2 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] font-bold text-brand-blue">47%</span>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
