"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FiBell,
  FiLock,
  FiUpload,
  FiImage,
  FiMail,
  FiGlobe,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

export default function CompanySettingsView() {
  const [activeTab, setActiveTab] = useState("profile"); // 'profile', 'notifications', 'security'

  // Tab 1: Profile state
  const [profileData, setProfileData] = useState({
    name: "Softvence Agency (previous page auto fill)",
    details: "",
    address: "123 Main St, City, State, ZIP",
    country: "Bangladesh",
    phoneCode: "+001",
    phone: "",
    email: "johndoe@gmail.com",
    employeeRange: "",
    website: "https://softvence.agency/",
  });

  // Tab 2: Notification preferences toggles
  const [notifications, setNotifications] = useState({
    newMatches: true,
    newApplications: true,
    messages: true,
    weeklyReport: true,
  });

  // Tab 3: Security passwords
  const [passwords, setPasswords] = useState({
    current: "password123",
    new: "password123",
    confirm: "password123",
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleProfileSave = (e) => {
    e.preventDefault();
    toast.success("Company profile updated successfully!");
  };

  const handleNotificationsSave = () => {
    toast.success("Notification preferences saved!");
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    toast.success("Password updated successfully!");
  };

  return (
    <div className="space-y-6 w-full animate-in fade-in duration-300 pb-16">
      {/* Dynamic Page Header based on Active Tab */}
      {activeTab === "profile" && (
        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
            Company Profile
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400">
            Update your company information
          </p>
        </div>
      )}

      {activeTab === "notifications" && (
        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
            Notification Preferences
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400">
            Manage how you receive notifications
          </p>
        </div>
      )}

      {activeTab === "security" && (
        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
            Security Settings
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400">
            Manage your account security
          </p>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* TOP TABS NAVIGATION BAR (Matching Screenshots)       */}
      {/* ---------------------------------------------------- */}
      <div className="bg-white dark:bg-[#151B2B] rounded-2xl p-2 border border-gray-100 dark:border-gray-800 shadow-2xs flex items-center gap-2 sm:gap-6 w-fit">
        {/* Tab 1: Company Profile */}
        <button
          type="button"
          onClick={() => setActiveTab("profile")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer relative ${
            activeTab === "profile"
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
              activeTab === "profile"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            }`}
          >
            <HiOutlineOfficeBuilding className="w-4 h-4" />
          </div>
          <span>Company Profile</span>
          {activeTab === "profile" && (
            <div className="absolute -bottom-2 left-4 right-4 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
          )}
        </button>

        {/* Tab 2: Notifications */}
        <button
          type="button"
          onClick={() => setActiveTab("notifications")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer relative ${
            activeTab === "notifications"
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
              activeTab === "notifications"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            }`}
          >
            <FiBell className="w-3.5 h-3.5" />
          </div>
          <span>Notifications</span>
          {activeTab === "notifications" && (
            <div className="absolute -bottom-2 left-4 right-4 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
          )}
        </button>

        {/* Tab 3: Security */}
        <button
          type="button"
          onClick={() => setActiveTab("security")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer relative ${
            activeTab === "security"
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
              activeTab === "security"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            }`}
          >
            <FiLock className="w-3.5 h-3.5" />
          </div>
          <span>Security</span>
          {activeTab === "security" && (
            <div className="absolute -bottom-2 left-4 right-4 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
          )}
        </button>
      </div>

      {/* ---------------------------------------------------- */}
      {/* TAB 1: COMPANY PROFILE (Screenshot 1)                 */}
      {/* ---------------------------------------------------- */}
      {activeTab === "profile" && (
        <form
          onSubmit={handleProfileSave}
          className="bg-white dark:bg-[#151B2B] rounded-3xl p-6 sm:p-10 border border-gray-100 dark:border-gray-800 shadow-xs space-y-6 animate-in fade-in"
        >
          {/* Row 1: Logo & Banner Uploaders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {/* Company Logo * */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Company Logo *
              </label>
              <div className="flex items-center gap-3">
                {/* Logo circle preview */}
                <div className="w-14 h-14 rounded-full bg-[#1E2538] text-sky-400 border border-gray-200 dark:border-gray-700 flex items-center justify-center font-bold text-sm shrink-0 shadow-2xs">
                  <svg
                    className="w-7 h-7 text-sky-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m14 10-2 4-2-4" />
                    <path d="M10 14h4" />
                  </svg>
                </div>

                {/* Upload Box */}
                <label className="flex-1 border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-blue-500 rounded-2xl p-3 flex flex-col items-center justify-center cursor-pointer transition-colors text-center group">
                  <FiUpload className="w-4 h-4 text-gray-400 group-hover:text-blue-500 mb-1" />
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 group-hover:text-blue-500">
                    Upload Logo
                  </span>
                  <input type="file" className="hidden" accept="image/*" />
                </label>
              </div>
            </div>

            {/* Company Banner (optional) */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Company Banner (optional)
              </label>
              <label className="h-14 border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-blue-500 rounded-2xl p-3 flex flex-col items-center justify-center cursor-pointer transition-colors text-center group">
                <FiImage className="w-4 h-4 text-gray-400 group-hover:text-blue-500 mb-0.5" />
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 group-hover:text-blue-500">
                  Upload Banner
                </span>
                <input type="file" className="hidden" accept="image/*" />
              </label>
            </div>
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Company Name
            </label>
            <input
              type="text"
              value={profileData.name}
              onChange={(e) =>
                setProfileData({ ...profileData, name: e.target.value })
              }
              placeholder="Softvence Agency (previous page auto fill)"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 shadow-2xs"
            />
          </div>

          {/* Company Details* */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Company Details*
            </label>
            <textarea
              rows={4}
              value={profileData.details}
              onChange={(e) =>
                setProfileData({ ...profileData, details: e.target.value })
              }
              placeholder="Tell about company..."
              className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 shadow-2xs"
            />
          </div>

          {/* Address * */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Address *
            </label>
            <input
              type="text"
              value={profileData.address}
              onChange={(e) =>
                setProfileData({ ...profileData, address: e.target.value })
              }
              placeholder="123 Main St, City, State, ZIP"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 shadow-2xs"
            />
          </div>

          {/* Country / Region */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Country / Region
            </label>
            <select
              value={profileData.country}
              onChange={(e) =>
                setProfileData({ ...profileData, country: e.target.value })
              }
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 shadow-2xs cursor-pointer"
            >
              <option value="Bangladesh">Bangladesh</option>
              <option value="Germany">Germany</option>
              <option value="Austria">Austria</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
            </select>
          </div>

          {/* Contact Phone & Contact Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Contact Phone
              </label>
              <div className="flex items-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/20 shadow-2xs">
                <span className="px-3 py-2.5 bg-gray-50 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 flex items-center gap-1.5">
                  <span>🇺🇸</span>
                  <span>+001</span>
                </span>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) =>
                    setProfileData({ ...profileData, phone: e.target.value })
                  }
                  placeholder="555-0199"
                  className="flex-1 px-3 py-2.5 bg-transparent text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Contact Email
              </label>
              <div className="relative">
                <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                  placeholder="johndoe@gmail.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 shadow-2xs"
                />
              </div>
            </div>
          </div>

          {/* Total Employee Range & Website */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Total Employee Range
              </label>
              <select
                value={profileData.employeeRange}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    employeeRange: e.target.value,
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 shadow-2xs cursor-pointer"
              >
                <option value="">Select Range</option>
                <option value="1-10">1-10 Employees</option>
                <option value="11-50">11-50 Employees</option>
                <option value="51-200">51-200 Employees</option>
                <option value="201-500">201-500 Employees</option>
                <option value="500+">500+ Employees</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Website
              </label>
              <div className="relative">
                <FiGlobe className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="url"
                  value={profileData.website}
                  onChange={(e) =>
                    setProfileData({ ...profileData, website: e.target.value })
                  }
                  placeholder="https://softvence.agency/"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 shadow-2xs"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-end gap-3">
            <button
              type="button"
              className="px-6 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-7 py-2.5 rounded-xl bg-[#222B45] hover:bg-[#1A2238] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </form>
      )}

      {/* ---------------------------------------------------- */}
      {/* TAB 2: NOTIFICATIONS (Screenshot 2)                  */}
      {/* ---------------------------------------------------- */}
      {activeTab === "notifications" && (
        <div className="space-y-4 animate-in fade-in">
          {/* List of Notification items */}
          <div className="space-y-3.5">
            {/* 1. New Matches */}
            <div className="bg-white dark:bg-[#151B2B] rounded-2xl p-5 sm:p-6 border border-gray-100 dark:border-gray-800 shadow-2xs flex items-center justify-between gap-4">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                  New Matches
                </h3>
                <p className="text-xs text-gray-400 dark:text-gray-400 mt-0.5">
                  Get notified when new candidates match your job posts
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setNotifications({
                    ...notifications,
                    newMatches: !notifications.newMatches,
                  })
                }
                className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                  notifications.newMatches ? "bg-emerald-500" : "bg-gray-300 dark:bg-gray-700"
                }`}
              >
                <div
                  className={`w-4.5 h-4.5 rounded-full bg-white transition-transform absolute top-0.5 shadow-xs ${
                    notifications.newMatches ? "left-6" : "left-0.5"
                  }`}
                />
              </button>
            </div>

            {/* 2. New Applications */}
            <div className="bg-white dark:bg-[#151B2B] rounded-2xl p-5 sm:p-6 border border-gray-100 dark:border-gray-800 shadow-2xs flex items-center justify-between gap-4">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                  New Applications
                </h3>
                <p className="text-xs text-gray-400 dark:text-gray-400 mt-0.5">
                  Receive alerts when candidates apply to your jobs
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setNotifications({
                    ...notifications,
                    newApplications: !notifications.newApplications,
                  })
                }
                className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                  notifications.newApplications
                    ? "bg-emerald-500"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              >
                <div
                  className={`w-4.5 h-4.5 rounded-full bg-white transition-transform absolute top-0.5 shadow-xs ${
                    notifications.newApplications ? "left-6" : "left-0.5"
                  }`}
                />
              </button>
            </div>

            {/* 3. Messages */}
            <div className="bg-white dark:bg-[#151B2B] rounded-2xl p-5 sm:p-6 border border-gray-100 dark:border-gray-800 shadow-2xs flex items-center justify-between gap-4">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                  Messages
                </h3>
                <p className="text-xs text-gray-400 dark:text-gray-400 mt-0.5">
                  Get notified about new messages from candidates
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setNotifications({
                    ...notifications,
                    messages: !notifications.messages,
                  })
                }
                className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                  notifications.messages
                    ? "bg-emerald-500"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              >
                <div
                  className={`w-4.5 h-4.5 rounded-full bg-white transition-transform absolute top-0.5 shadow-xs ${
                    notifications.messages ? "left-6" : "left-0.5"
                  }`}
                />
              </button>
            </div>

            {/* 4. Weekly Report */}
            <div className="bg-white dark:bg-[#151B2B] rounded-2xl p-5 sm:p-6 border border-gray-100 dark:border-gray-800 shadow-2xs flex items-center justify-between gap-4">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                  Weekly Report
                </h3>
                <p className="text-xs text-gray-400 dark:text-gray-400 mt-0.5">
                  Receive a weekly summary of your recruitment activity
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setNotifications({
                    ...notifications,
                    weeklyReport: !notifications.weeklyReport,
                  })
                }
                className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                  notifications.weeklyReport
                    ? "bg-emerald-500"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              >
                <div
                  className={`w-4.5 h-4.5 rounded-full bg-white transition-transform absolute top-0.5 shadow-xs ${
                    notifications.weeklyReport ? "left-6" : "left-0.5"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 flex items-center justify-end gap-3">
            <button
              type="button"
              className="px-6 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleNotificationsSave}
              className="px-7 py-2.5 rounded-xl bg-[#222B45] hover:bg-[#1A2238] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* TAB 3: SECURITY (Screenshot 3)                       */}
      {/* ---------------------------------------------------- */}
      {activeTab === "security" && (
        <form
          onSubmit={handlePasswordUpdate}
          className="space-y-6 animate-in fade-in"
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
              Change Password
            </h2>
          </div>

          <div className="space-y-4">
            {/* 1. Current Password */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Current Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type={showPasswords.current ? "text" : "password"}
                  value={passwords.current}
                  onChange={(e) =>
                    setPasswords({ ...passwords, current: e.target.value })
                  }
                  className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#151B2B] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 shadow-2xs"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPasswords({
                      ...showPasswords,
                      current: !showPasswords.current,
                    })
                  }
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"
                >
                  {showPasswords.current ? (
                    <FiEyeOff className="w-4 h-4" />
                  ) : (
                    <FiEye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* 2. New Password */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                New Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type={showPasswords.new ? "text" : "password"}
                  value={passwords.new}
                  onChange={(e) =>
                    setPasswords({ ...passwords, new: e.target.value })
                  }
                  className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#151B2B] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 shadow-2xs"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPasswords({
                      ...showPasswords,
                      new: !showPasswords.new,
                    })
                  }
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"
                >
                  {showPasswords.new ? (
                    <FiEyeOff className="w-4 h-4" />
                  ) : (
                    <FiEye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* 3. Confirm New Password */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type={showPasswords.confirm ? "text" : "password"}
                  value={passwords.confirm}
                  onChange={(e) =>
                    setPasswords({ ...passwords, confirm: e.target.value })
                  }
                  className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#151B2B] text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 shadow-2xs"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPasswords({
                      ...showPasswords,
                      confirm: !showPasswords.confirm,
                    })
                  }
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"
                >
                  {showPasswords.confirm ? (
                    <FiEyeOff className="w-4 h-4" />
                  ) : (
                    <FiEye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 flex items-center justify-end gap-3">
            <button
              type="button"
              className="px-6 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-7 py-2.5 rounded-xl bg-[#222B45] hover:bg-[#1A2238] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
            >
              Update Password
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
