"use client";

import React from "react";
import StatCards from "./StatCards";
import TopCandidatesSlider from "./TopCandidatesSlider";
import ActiveJobsTable from "./ActiveJobsTable";
import ProfileStrengthCard from "./ProfileStrengthCard";

export default function CompanyDashboard() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* 1. Overview Stat Cards */}
      <section>
        <StatCards />
      </section>

      {/* 2. Top Candidates for Your Jobs (Swiper Carousel) */}
      <section>
        <TopCandidatesSlider />
      </section>

      {/* 3. Bottom Grid: Active Jobs Table & Company Profile Strength */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* Left Column: Your Active Jobs (Spans 7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col">
          <ActiveJobsTable />
        </div>

        {/* Right Column: Company Profile Strength (Spans 5 cols on desktop) */}
        <div className="lg:col-span-5 flex flex-col">
          <ProfileStrengthCard />
        </div>
      </section>
    </div>
  );
}
