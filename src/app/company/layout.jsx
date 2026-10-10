"use client";

import React, { useState } from "react";
import CompanySidebar from "@/components/company/CompanySidebar";
import CompanyHeader from "@/components/company/CompanyHeader";

export default function CompanyLayout({ children }) {
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
      {/* Left Sidebar */}
      <CompanySidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed((prev) => !prev)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto overflow-x-hidden min-w-0">
        {/* Top Header */}
        <CompanyHeader
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
