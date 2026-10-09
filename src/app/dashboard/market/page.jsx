"use client";

import React from "react";
import Link from "next/link";
import { MarketIcon } from "@/components/icons/DashboardIcons";
import { FiArrowLeft, FiTrendingUp, FiActivity, FiUsers } from "react-icons/fi";

export default function MarketPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div>
        <Link
          href="/dashboard"
          className="text-xs text-gray-500 hover:text-brand-blue flex items-center gap-1 mb-1"
        >
          <FiArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
        </Link>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2.5">
          <MarketIcon className="w-6 h-6 text-brand-blue" color="#0000F6" />
          <span>Job Market Insights</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Real-time hiring trends, salary benchmarks, and demand for your skillset.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2 text-emerald-500 mb-2">
            <FiTrendingUp className="w-5 h-5" />
            <span className="text-xs font-bold">+18.4% This Month</span>
          </div>
          <h3 className="text-2xl font-black text-gray-900 dark:text-white">
            3,420
          </h3>
          <p className="text-xs text-gray-500">Active UI/UX Roles in Tech</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2 text-brand-blue dark:text-blue-400 mb-2">
            <FiActivity className="w-5 h-5" />
            <span className="text-xs font-bold">Top Percentile</span>
          </div>
          <h3 className="text-2xl font-black text-gray-900 dark:text-white">
            $145,000
          </h3>
          <p className="text-xs text-gray-500">Median Senior Designer Salary</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2 text-purple-500 mb-2">
            <FiUsers className="w-5 h-5" />
            <span className="text-xs font-bold">High Demand</span>
          </div>
          <h3 className="text-2xl font-black text-gray-900 dark:text-white">
            Design Systems
          </h3>
          <p className="text-xs text-gray-500">Most requested skill keyword</p>
        </div>
      </div>
    </div>
  );
}
