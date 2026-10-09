"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  FiEdit2,
  FiMail,
  FiUser,
  FiMapPin,
  FiArrowUpRight,
  FiGlobe,
  FiChevronDown,
} from "react-icons/fi";

const countryCodes = [
  { code: "+001", country: "US", flag: "🇺🇸" },
  { code: "+44", country: "GB", flag: "🇬🇧" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+880", country: "BD", flag: "🇧🇩" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+1", country: "CA", flag: "🇨🇦" },
];

export default function PersonalInfoForm({ onOpenEditModal, userInfo, onUpdateUserInfo }) {
  const [phoneCountry, setPhoneCountry] = useState(countryCodes[0]);
  const [currency, setCurrency] = useState("EUR");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: userInfo?.email || "johndoe@gmail.com",
      phoneNumber: userInfo?.phoneNumber || "555-0199",
      gender: userInfo?.gender || "",
      location: userInfo?.location || "123 Main St, City, State, ZIP",
      citizenship: userInfo?.citizenship || "",
      workPermit: userInfo?.workPermit || "",
      salary: userInfo?.salary || "1,000",
      website: userInfo?.website || "http://johndow.io",
    },
  });

  const onSubmit = (data) => {
    const updated = {
      ...userInfo,
      ...data,
      phoneCountryCode: phoneCountry.code,
      currency,
    };
    if (onUpdateUserInfo) {
      onUpdateUserInfo(updated);
    }
    toast.success("Personal information updated successfully!");
  };

  return (
    <div className="rounded-2xl bg-white p-5 sm:p-7 border border-gray-100 shadow-xs dark:bg-[#151B2B] dark:border-gray-800/80 transition-all duration-200">
      {/* User Header Info & Edit Button */}
      <div className="flex items-center justify-between pb-6 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-brand-blue text-white font-bold text-lg sm:text-xl shadow-xs">
            {userInfo?.firstName?.[0] || userInfo?.name?.[0] || "H"}
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              {userInfo?.name || `${userInfo?.firstName || "Hande"} ${userInfo?.lastName || "Ercel"}`}
            </h3>
            <p className="text-xs sm:text-sm text-secondary dark:text-gray-400">
              {userInfo?.position || "UI/UX Designer"}
            </p>
          </div>
        </div>

        {/* Edit Button */}
        <button
          type="button"
          onClick={onOpenEditModal}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-primary dark:text-gray-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
        >
          <FiEdit2 className="w-3.5 h-3.5 text-secondary dark:text-gray-400" />
          <span>Edit</span>
        </button>
      </div>

      {/* Form with React Hook Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="pt-6 space-y-5 sm:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Email Address */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Email address <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="johndoe@gmail.com"
                className={`w-full h-11 pl-10 pr-4 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border ${
                  errors.email
                    ? "border-rose-500 focus:ring-rose-500/20"
                    : "border-gray-200 dark:border-gray-800 focus:border-brand-blue dark:focus:border-brand-blue"
                } text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-brand-blue/10 transition-all`}
              />
            </div>
            {errors.email && (
              <p className="mt-1.5 text-xs text-rose-500">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <div className="flex gap-2">
              {/* Country Select */}
              <div className="relative w-28 shrink-0">
                <select
                  value={phoneCountry.code}
                  onChange={(e) => {
                    const selected = countryCodes.find((c) => c.code === e.target.value);
                    if (selected) setPhoneCountry(selected);
                  }}
                  className="w-full h-11 px-3 pr-7 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:border-brand-blue appearance-none cursor-pointer"
                >
                  {countryCodes.map((c) => (
                    <option key={c.country} value={c.code} className="dark:bg-[#151B2B]">
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5 pointer-events-none" />
              </div>

              {/* Phone Input */}
              <div className="relative flex-1">
                <input
                  type="tel"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                  })}
                  placeholder="555-0199"
                  className={`w-full h-11 px-4 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border ${
                    errors.phoneNumber
                      ? "border-rose-500 focus:ring-rose-500/20"
                      : "border-gray-200 dark:border-gray-800 focus:border-brand-blue dark:focus:border-brand-blue"
                  } text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-brand-blue/10 transition-all`}
                />
              </div>
            </div>
            {errors.phoneNumber && (
              <p className="mt-1.5 text-xs text-rose-500">{errors.phoneNumber.message}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Gender <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              <select
                {...register("gender", {
                  required: "Please select gender",
                })}
                className={`w-full h-11 pl-10 pr-9 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border ${
                  errors.gender
                    ? "border-rose-500 focus:ring-rose-500/20"
                    : "border-gray-200 dark:border-gray-800 focus:border-brand-blue dark:focus:border-brand-blue"
                } text-gray-900 dark:text-gray-100 focus:outline-hidden focus:ring-2 focus:ring-brand-blue/10 appearance-none cursor-pointer transition-all`}
              >
                <option value="" className="text-gray-400">Select</option>
                <option value="Male" className="dark:bg-[#151B2B]">Male</option>
                <option value="Female" className="dark:bg-[#151B2B]">Female</option>
                <option value="Non-binary" className="dark:bg-[#151B2B]">Non-binary</option>
                <option value="Prefer not to say" className="dark:bg-[#151B2B]">Prefer not to say</option>
              </select>
              <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
            {errors.gender && (
              <p className="mt-1.5 text-xs text-rose-500">{errors.gender.message}</p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Location <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <FiMapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              <input
                type="text"
                {...register("location", {
                  required: "Location is required",
                })}
                placeholder="123 Main St, City, State, ZIP"
                className={`w-full h-11 pl-10 pr-4 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border ${
                  errors.location
                    ? "border-rose-500 focus:ring-rose-500/20"
                    : "border-gray-200 dark:border-gray-800 focus:border-brand-blue dark:focus:border-brand-blue"
                } text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-brand-blue/10 transition-all`}
              />
            </div>
            {errors.location && (
              <p className="mt-1.5 text-xs text-rose-500">{errors.location.message}</p>
            )}
          </div>

          {/* Citizenship */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Citizenship
            </label>
            <div className="relative">
              <select
                {...register("citizenship")}
                className="w-full h-11 px-4 pr-9 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:border-brand-blue appearance-none cursor-pointer transition-all"
              >
                <option value="">Add</option>
                <option value="United States" className="dark:bg-[#151B2B]">United States</option>
                <option value="United Kingdom" className="dark:bg-[#151B2B]">United Kingdom</option>
                <option value="Germany" className="dark:bg-[#151B2B]">Germany</option>
                <option value="Canada" className="dark:bg-[#151B2B]">Canada</option>
                <option value="Bangladesh" className="dark:bg-[#151B2B]">Bangladesh</option>
                <option value="Australia" className="dark:bg-[#151B2B]">Australia</option>
                <option value="France" className="dark:bg-[#151B2B]">France</option>
              </select>
              <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          {/* Work Permit */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Work Permit
            </label>
            <div className="relative">
              <select
                {...register("workPermit")}
                className="w-full h-11 px-4 pr-9 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:border-brand-blue appearance-none cursor-pointer transition-all"
              >
                <option value="">Select your permit</option>
                <option value="Citizen" className="dark:bg-[#151B2B]">Citizen</option>
                <option value="Permanent Resident" className="dark:bg-[#151B2B]">Permanent Resident</option>
                <option value="Work Visa (H-1B / Tier 2)" className="dark:bg-[#151B2B]">Work Visa (H-1B / Tier 2)</option>
                <option value="Student Visa (OPT / STEM)" className="dark:bg-[#151B2B]">Student Visa (OPT / STEM)</option>
                <option value="Need Sponsorship" className="dark:bg-[#151B2B]">Need Sponsorship</option>
              </select>
              <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          {/* Current Annual Salary */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Your current annual salary
            </label>
            <div className="relative flex">
              <input
                type="text"
                {...register("salary")}
                placeholder="1,000"
                className="w-full h-11 pl-4 pr-16 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden focus:border-brand-blue dark:focus:border-brand-blue transition-all"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="h-8 px-2 text-xs font-semibold rounded-lg bg-transparent text-secondary dark:text-gray-400 focus:outline-hidden cursor-pointer"
                >
                  <option value="EUR" className="dark:bg-[#151B2B]">EUR</option>
                  <option value="USD" className="dark:bg-[#151B2B]">USD</option>
                  <option value="GBP" className="dark:bg-[#151B2B]">GBP</option>
                  <option value="BDT" className="dark:bg-[#151B2B]">BDT</option>
                </select>
              </div>
            </div>
          </div>

          {/* Website */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Website
            </label>
            <div className="relative">
              <FiGlobe className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              <input
                type="text"
                {...register("website")}
                placeholder="e.g http://johndow.io"
                className="w-full h-11 pl-10 pr-4 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111625] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden focus:border-brand-blue dark:focus:border-brand-blue transition-all"
              />
            </div>
          </div>
        </div>

        {/* Submit Save Button */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary hover:bg-primary/90 text-white dark:bg-brand-blue dark:hover:bg-brand-blue-hover text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer disabled:opacity-50"
          >
            <span>Save</span>
            <FiArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
