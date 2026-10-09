"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBookmark,
  FiUsers,
  FiExternalLink,
  FiCheck,
} from "react-icons/fi";
import { BsBookmarkFill, BsBuilding } from "react-icons/bs";

// Sample Companies Data
const initialFavoriteCompanies = [
  {
    id: "comp-1",
    name: "ABCD Company",
    role: "Software Engineer",
    employees: "501 - 1000 employees",
    jobOffers: "32 Job Offer",
    isFavorite: true,
    websiteUrl: "https://example.com",
    bannerImage:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&auto=format&fit=crop&q=80",
    location: "Dhaka, Dhaka, Bangladesh",
    reposted: "Reposted 1 week ago",
    appliedCount: "Over 100 people clicked apply",
    isPromoted: true,
    overview:
      "Faith Overseas Ltd. is a student consultancy firm. Our core value is to support and help students without compromising the quality as because the choices they make about their future are so important. Our slogan is 'Student's Number #1 Choice'. It refers that Faith Overseas Ltd. is doing career consultancy according student's background.",
  },
  {
    id: "comp-2",
    name: "ABCD Company",
    role: "Software Engineer",
    employees: "501 - 1000 employees",
    jobOffers: "32 Job Offer",
    isFavorite: true,
    websiteUrl: "https://example.com",
    bannerImage:
      "https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&auto=format&fit=crop&q=80",
    location: "Zurich, Switzerland",
    reposted: "Reposted 3 days ago",
    appliedCount: "Over 80 people clicked apply",
    isPromoted: true,
    overview:
      "Global software technology provider delivering enterprise-grade cloud systems and scalable digital platforms with industry-standard security and top performance.",
  },
  {
    id: "comp-3",
    name: "ABCD Company",
    role: "Software Engineer",
    employees: "501 - 1000 employees",
    jobOffers: "32 Job Offer",
    isFavorite: true,
    websiteUrl: "", // No website provided -> will test disabled state
    bannerImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=80",
    location: "Berlin, Germany",
    reposted: "Reposted 5 days ago",
    appliedCount: "Over 50 people clicked apply",
    isPromoted: false,
    overview:
      "Specialized development team creating high performance tools and digital signal processing applications for European engineering industries.",
  },
];

export default function FavoriteCompanyPage() {
  const [companies, setCompanies] = useState(initialFavoriteCompanies);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null); // null means list view; string id means detail view

  const favoriteList = companies.filter((c) => c.isFavorite);
  const selectedCompany = companies.find((c) => c.id === selectedCompanyId);

  const toggleFavorite = (id, e) => {
    if (e) e.stopPropagation();
    setCompanies((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const newState = !c.isFavorite;
          toast.success(
            newState
              ? `Added ${c.name} to favorites!`
              : `Removed ${c.name} from favorites.`
          );
          return { ...c, isFavorite: newState };
        }
        return c;
      })
    );
  };

  const handleDiscoverCompanies = () => {
    // Re-populate all companies to explore
    setCompanies(initialFavoriteCompanies.map((c) => ({ ...c, isFavorite: true })));
    toast.success("Discovering new companies!");
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Top Header / Breadcrumb */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Favorite Company
          </h2>
          <p className="text-xs sm:text-sm text-secondary dark:text-gray-400">
            Check your favorite jobs and companies here.
          </p>
        </div>

        {selectedCompanyId && (
          <button
            type="button"
            onClick={() => setSelectedCompanyId(null)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#151B2B] text-gray-700 dark:text-gray-300 text-xs font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <FiArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Favorite Companies</span>
          </button>
        )}
      </div>

      {/* Main View Container */}
      {selectedCompanyId && selectedCompany ? (
        /* ================= 3. COMPANY DETAIL VIEW (Screen 3) ================= */
        <div className="rounded-3xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden animate-in fade-in duration-200">
          {/* Top Banner Image */}
          <div className="relative w-full h-48 sm:h-64 md:h-72 bg-gray-100 dark:bg-gray-800 overflow-hidden">
            <Image
              src={selectedCompany.bannerImage}
              alt={selectedCompany.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Company Card Header */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-[#FBFBFC] dark:bg-[#111625] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                {/* Logo */}
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center p-2 shrink-0 border border-emerald-100 dark:border-emerald-800">
                  <svg viewBox="0 0 40 40" className="w-full h-full fill-emerald-500">
                    <path d="M20 10 C20 4, 14 4, 14 10 C14 16, 20 20, 20 20 C20 20, 26 16, 26 10 C26 4, 20 4, 20 10 Z" />
                    <path d="M10 20 C4 20, 4 14, 10 14 C16 14, 20 20, 20 20 C20 20, 16 26, 10 26 C4 26, 4 20, 10 20 Z" />
                    <path d="M20 30 C20 36, 26 36, 26 30 C26 24, 20 20, 20 20 C20 20, 14 24, 14 30 C14 36, 20 36, 20 30 Z" />
                    <path d="M30 20 C36 20, 36 26, 30 26 C24 26, 20 20, 20 20 C20 20, 24 14, 30 14 C36 14, 36 20, 30 20 Z" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    {selectedCompany.name}
                  </h3>
                  <p className="text-xs text-secondary dark:text-gray-400 mt-0.5">
                    {selectedCompany.location} • {selectedCompany.reposted} •{" "}
                    {selectedCompany.appliedCount}
                  </p>
                  {selectedCompany.isPromoted && (
                    <span className="inline-block text-[11px] text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                      Promoted by hirer
                    </span>
                  )}
                  <div className="flex items-center gap-1.5 text-xs text-secondary dark:text-gray-400 mt-1">
                    <FiUsers className="w-3.5 h-3.5" />
                    <span>{selectedCompany.employees}</span>
                  </div>
                </div>
              </div>

              {/* Visit Website Button (Enabled if websiteUrl exists, Disabled otherwise) */}
              <div>
                {selectedCompany.websiteUrl ? (
                  <a
                    href={selectedCompany.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#151B2B] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-semibold transition-colors shadow-2xs"
                  >
                    <span>Visit Website</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800/40 text-gray-400 dark:text-gray-600 text-xs sm:text-sm font-semibold cursor-not-allowed"
                  >
                    <span>Visit Website</span>
                  </button>
                )}
              </div>
            </div>

            {/* Company Overview Section */}
            <div className="space-y-3 pt-2">
              <h4 className="text-base font-bold text-gray-900 dark:text-white">
                Company Overview
              </h4>
              <p className="text-xs sm:text-sm text-secondary dark:text-gray-300 leading-relaxed max-w-4xl">
                {selectedCompany.overview}
              </p>
            </div>

            {/* Bottom Action Button */}
            <div className="pt-6 flex justify-end">
              <button
                type="button"
                onClick={() => toggleFavorite(selectedCompany.id)}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#2A334B] hover:bg-[#1f2638] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer hover:scale-105"
              >
                <span>
                  {selectedCompany.isFavorite
                    ? "Remove from Favorite Company"
                    : "Add to Favorite Company"}
                </span>
                <FiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : favoriteList.length === 0 ? (
        /* ================= 1. EMPTY STATE (Screen 1) ================= */
        <div className="space-y-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-6">
            {/* Skyline Building Graphic */}
            <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-brand-blue dark:text-blue-400 shrink-0">
              <BsBuilding className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                No Companies followed yet
              </h3>
              <p className="text-xs sm:text-sm text-secondary dark:text-gray-400 mt-1">
                Save companies that are interesting for you and don&apos;t miss any job ads anymore.
              </p>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleDiscoverCompanies}
              className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#151B2B] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-2xs"
            >
              Discover all companies
            </button>
          </div>
        </div>
      ) : (
        /* ================= 2. FAVORITE COMPANIES LIST (Screen 2) ================= */
        <div className="space-y-4">
          <div className="space-y-3.5">
            {favoriteList.map((comp) => (
              <div
                key={comp.id}
                onClick={() => setSelectedCompanyId(comp.id)}
                className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-2xs hover:border-gray-300 dark:hover:border-gray-700 transition-all flex items-center justify-between gap-4 cursor-pointer"
              >
                {/* Left info */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center p-1.5 shrink-0 border border-emerald-100 dark:border-emerald-800">
                    <svg viewBox="0 0 40 40" className="w-full h-full fill-emerald-500">
                      <path d="M20 10 C20 4, 14 4, 14 10 C14 16, 20 20, 20 20 C20 20, 26 16, 26 10 C26 4, 20 4, 20 10 Z" />
                      <path d="M10 20 C4 20, 4 14, 10 14 C16 14, 20 20, 20 20 C20 20, 16 26, 10 26 C4 26, 4 20, 10 20 Z" />
                      <path d="M20 30 C20 36, 26 36, 26 30 C26 24, 20 20, 20 20 C20 20, 14 24, 14 30 C14 36, 20 36, 20 30 Z" />
                      <path d="M30 20 C36 20, 36 26, 30 26 C24 26, 20 20, 20 20 C20 20, 24 14, 30 14 C36 14, 36 20, 30 20 Z" />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                      {comp.name}
                    </h4>
                    <p className="text-xs text-secondary dark:text-gray-400">
                      {comp.role}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
                      <FiUsers className="w-3 h-3" />
                      <span>{comp.employees}</span>
                    </div>
                  </div>
                </div>

                {/* Right Bookmark & Job offer badge */}
                <div className="flex items-center gap-3">
                  {/* Bookmark Button */}
                  <button
                    type="button"
                    onClick={(e) => toggleFavorite(comp.id, e)}
                    className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-rose-500 flex items-center justify-center hover:bg-rose-100 transition-colors cursor-pointer"
                    title="Bookmark Company"
                  >
                    <BsBookmarkFill className="w-3.5 h-3.5" />
                  </button>

                  {/* Job Offer Badge */}
                  <span className="px-3.5 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-50/50 dark:bg-gray-800/40">
                    {comp.jobOffers}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Discover Action */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleDiscoverCompanies}
              className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#151B2B] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-2xs"
            >
              Discover all companies
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
