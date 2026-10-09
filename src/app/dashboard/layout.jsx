"use client";

import React, { useState } from "react";
import DashboardSidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/Header";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleMenu = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      setIsCollapsed((prev) => !prev);
    } else {
      setSidebarOpen((prev) => !prev);
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#F8FAFC] dark:bg-[#0B0F19] text-gray-900 dark:text-gray-100 flex transition-colors duration-200">
      {/* Left Sidebar (Sticky / Fixed + Collapse/Expand support) */}
      <DashboardSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed((prev) => !prev)}
      />

      {/* Main Content Area (Independent Scroll Container) */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto overflow-x-hidden min-w-0">
        {/* Top Sticky Header */}
        <DashboardHeader
          onToggleSidebar={handleToggleMenu}
          isCollapsed={isCollapsed}
        />

        {/* Page Content Container */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 w-full mx-auto pb-16">
          {children}
        </main>
      </div>
    </div>
  );
}
