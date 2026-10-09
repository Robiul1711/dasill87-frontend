"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FiMail,
  FiLock,
  FiGlobe,
  FiBell,
  FiTrash2,
  FiArrowUpRight,
  FiEye,
  FiEyeOff,
  FiCheck,
} from "react-icons/fi";

export default function AccountSettingsPage() {
  const [activeTab, setActiveTab] = useState("mail"); // 'mail', 'security', 'language', 'notifications', 'delete'

  // Form states
  const [email, setEmail] = useState("johndoe@gmail.com");

  // Password states
  const [currentPassword, setCurrentPassword] = useState("••••••••");
  const [newPassword, setNewPassword] = useState("••••••••");
  const [confirmPassword, setConfirmPassword] = useState("••••••••");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Language state
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // 'de' | 'en'

  // Notifications toggles
  const [notifications, setNotifications] = useState({
    newMatches: true,
    applyingJobs: true,
    inactivity: true,
    interviews: true,
    documentCreation: true,
    emailNotification: true,
  });

  const toggleNotification = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleRequestEmailChange = (e) => {
    e.preventDefault();
    toast.success("Verification email sent to request email change.");
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    toast.success("Password updated successfully!");
  };

  const handleUpdateLanguage = () => {
    toast.success(
      `Language updated to ${selectedLanguage === "de" ? "German" : "English"}!`
    );
  };

  const handleSavePreferences = () => {
    toast.success("Notification preferences saved!");
  };

  const handleDeleteAccount = () => {
    toast.error("Account deletion requested.");
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Title */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          Settings
        </h2>
      </div>

      {/* Top Tab Bar */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-gray-100 dark:border-gray-800 pb-2">
        {/* 1. Mail */}
        <button
          type="button"
          onClick={() => setActiveTab("mail")}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 ${
            activeTab === "mail"
              ? "bg-brand-blue text-white shadow-xs"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
          }`}
        >
          <FiMail className="w-4 h-4" />
          <span>Mail</span>
        </button>

        {/* 2. Security */}
        <button
          type="button"
          onClick={() => setActiveTab("security")}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 ${
            activeTab === "security"
              ? "bg-brand-blue text-white shadow-xs"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
          }`}
        >
          <FiLock className="w-4 h-4" />
          <span>Security</span>
        </button>

        {/* 3. Change Language */}
        <button
          type="button"
          onClick={() => setActiveTab("language")}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 ${
            activeTab === "language"
              ? "bg-brand-blue text-white shadow-xs"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
          }`}
        >
          <FiGlobe className="w-4 h-4" />
          <span>Change Language</span>
        </button>

        {/* 4. Notifications */}
        <button
          type="button"
          onClick={() => setActiveTab("notifications")}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 ${
            activeTab === "notifications"
              ? "bg-brand-blue text-white shadow-xs"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
          }`}
        >
          <FiBell className="w-4 h-4" />
          <span>Notifications</span>
        </button>

        {/* 5. Delete Account */}
        <button
          type="button"
          onClick={() => setActiveTab("delete")}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 ${
            activeTab === "delete"
              ? "bg-rose-600 text-white shadow-xs"
              : "text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20"
          }`}
        >
          <FiTrash2 className="w-4 h-4" />
          <span>Delete Account</span>
        </button>
      </div>

      {/* ================= TAB CONTENTS ================= */}
      <div className="max-w-2xl mx-auto pt-4">
        {/* ================= 1. MAIL TAB (Screen 2) ================= */}
        {activeTab === "mail" && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-sm space-y-6 animate-in fade-in duration-200">
            <form onSubmit={handleRequestEmailChange} className="space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-12 pl-11 pr-20 rounded-2xl bg-white dark:bg-[#111625] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:border-brand-blue dark:focus:border-blue-500 transition-all shadow-2xs"
                  />
                  <button
                    type="button"
                    onClick={() => toast.success("Verification link sent to your email!")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-brand-blue hover:text-blue-700 dark:text-blue-400 cursor-pointer"
                  >
                    Verify
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#2A334B] hover:bg-[#1f2638] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer hover:scale-105"
                >
                  <span>Request to Change</span>
                  <FiArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ================= 2. SECURITY TAB (Screen 3) ================= */}
        {activeTab === "security" && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-sm space-y-6 animate-in fade-in duration-200">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Change Password
            </h3>

            <form onSubmit={handleUpdatePassword} className="space-y-4">
              {/* Current Password */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Current Password
                </label>
                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    className="w-full h-12 pl-11 pr-11 rounded-2xl bg-white dark:bg-[#111625] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:border-brand-blue dark:focus:border-blue-500 transition-all shadow-2xs"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"
                  >
                    {showCurrentPassword ? (
                      <FiEyeOff className="w-4 h-4" />
                    ) : (
                      <FiEye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  New Password
                </label>
                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="w-full h-12 pl-11 pr-11 rounded-2xl bg-white dark:bg-[#111625] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:border-brand-blue dark:focus:border-blue-500 transition-all shadow-2xs"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"
                  >
                    {showNewPassword ? (
                      <FiEyeOff className="w-4 h-4" />
                    ) : (
                      <FiEye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm New Password */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Confirm New Password
                </label>
                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full h-12 pl-11 pr-11 rounded-2xl bg-white dark:bg-[#111625] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:border-brand-blue dark:focus:border-blue-500 transition-all shadow-2xs"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"
                  >
                    {showConfirmPassword ? (
                      <FiEyeOff className="w-4 h-4" />
                    ) : (
                      <FiEye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setCurrentPassword("");
                    setNewPassword("");
                    setConfirmPassword("");
                  }}
                  className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-full bg-[#2A334B] hover:bg-[#1f2638] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer hover:scale-105"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ================= 3. CHANGE LANGUAGE TAB (Screen 4) ================= */}
        {activeTab === "language" && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-sm space-y-6 animate-in fade-in duration-200">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Change Language
            </h3>

            <div className="space-y-3">
              {/* German Option */}
              <div
                onClick={() => setSelectedLanguage("de")}
                className={`p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  selectedLanguage === "de"
                    ? "border-brand-blue bg-blue-50/20 dark:bg-blue-950/20 shadow-xs"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111625] hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  {/* German Flag */}
                  <div className="w-9 h-6 rounded-md overflow-hidden shadow-xs border border-gray-200/50 flex flex-col shrink-0">
                    <div className="h-2 bg-black w-full" />
                    <div className="h-2 bg-red-600 w-full" />
                    <div className="h-2 bg-amber-400 w-full" />
                  </div>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    German
                  </span>
                </div>

                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedLanguage === "de"
                      ? "border-brand-blue bg-brand-blue"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                >
                  {selectedLanguage === "de" && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
              </div>

              {/* English Option */}
              <div
                onClick={() => setSelectedLanguage("en")}
                className={`p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  selectedLanguage === "en"
                    ? "border-brand-blue bg-blue-50/20 dark:bg-blue-950/20 shadow-xs"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111625] hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  {/* English/UK Flag */}
                  <div className="relative w-9 h-6 rounded-md overflow-hidden shadow-xs border border-gray-200/50 bg-white flex items-center justify-center shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-1.5 bg-red-600" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1.5 bg-red-600" />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    English
                  </span>
                </div>

                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedLanguage === "en"
                      ? "border-brand-blue bg-brand-blue"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                >
                  {selectedLanguage === "en" && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => setSelectedLanguage("en")}
                className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleUpdateLanguage}
                className="px-7 py-2.5 rounded-full bg-[#2A334B] hover:bg-[#1f2638] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer hover:scale-105"
              >
                Update
              </button>
            </div>
          </div>
        )}

        {/* ================= 4. NOTIFICATIONS TAB (Screen 5) ================= */}
        {activeTab === "notifications" && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800 shadow-sm space-y-6 animate-in fade-in duration-200">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Notifications Preferences
            </h3>

            <div className="space-y-4">
              {/* 1. Notifications for new matches */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#111625] border border-gray-100 dark:border-gray-800 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                    Notifications for new matches
                  </h4>
                  <p className="text-[11px] text-secondary dark:text-gray-400 mt-0.5">
                    To receive notification for new job matches.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleNotification("newMatches")}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                    notifications.newMatches
                      ? "bg-emerald-500"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                      notifications.newMatches
                        ? "translate-x-5"
                        : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* 2. Applying for jobs with documents */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#111625] border border-gray-100 dark:border-gray-800 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                    Applying for jobs with documents
                  </h4>
                  <p className="text-[11px] text-secondary dark:text-gray-400 mt-0.5">
                    To receive reminders to apply for jobs that you have created documents for.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleNotification("applyingJobs")}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                    notifications.applyingJobs
                      ? "bg-emerald-500"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                      notifications.applyingJobs
                        ? "translate-x-5"
                        : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* 3. Inactivity */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#111625] border border-gray-100 dark:border-gray-800 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                    Inactivity
                  </h4>
                  <p className="text-[11px] text-secondary dark:text-gray-400 mt-0.5">
                    To receive reminders that you are inactive in your job search
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleNotification("inactivity")}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                    notifications.inactivity
                      ? "bg-emerald-500"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                      notifications.inactivity
                        ? "translate-x-5"
                        : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* 4. Scheduled interviews */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#111625] border border-gray-100 dark:border-gray-800 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                    Scheduled interviews
                  </h4>
                  <p className="text-[11px] text-secondary dark:text-gray-400 mt-0.5">
                    To receive notifications for interviews that you have scheduled with employers.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleNotification("interviews")}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                    notifications.interviews
                      ? "bg-emerald-500"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                      notifications.interviews
                        ? "translate-x-5"
                        : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* 5. Document creation */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#111625] border border-gray-100 dark:border-gray-800 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                    Document creation
                  </h4>
                  <p className="text-[11px] text-secondary dark:text-gray-400 mt-0.5">
                    Reminders to create documents for the matches you have made
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleNotification("documentCreation")}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                    notifications.documentCreation
                      ? "bg-emerald-500"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                      notifications.documentCreation
                        ? "translate-x-5"
                        : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* 6. Email notification */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#111625] border border-gray-100 dark:border-gray-800 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                    Email notification
                  </h4>
                  <p className="text-[11px] text-secondary dark:text-gray-400 mt-0.5">
                    To receive your notification preferences by email
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleNotification("emailNotification")}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                    notifications.emailNotification
                      ? "bg-emerald-500"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                      notifications.emailNotification
                        ? "translate-x-5"
                        : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() =>
                  setNotifications({
                    newMatches: true,
                    applyingJobs: true,
                    inactivity: true,
                    interviews: true,
                    documentCreation: true,
                    emailNotification: true,
                  })
                }
                className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                className="px-7 py-2.5 rounded-full bg-[#2A334B] hover:bg-[#1f2638] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer hover:scale-105"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}

        {/* ================= 5. DELETE ACCOUNT TAB ================= */}
        {activeTab === "delete" && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#151B2B] border border-rose-200 dark:border-rose-900/40 shadow-sm space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center gap-3 text-rose-600 dark:text-rose-400">
              <FiTrash2 className="w-6 h-6" />
              <h3 className="text-xl font-bold">Delete Account</h3>
            </div>

            <p className="text-xs sm:text-sm text-secondary dark:text-gray-400 leading-relaxed">
              Once you delete your account, there is no going back. All your profile information, job applications, documents, and matches will be permanently erased.
            </p>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={handleDeleteAccount}
                className="px-7 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer hover:scale-105"
              >
                Permanently Delete Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
