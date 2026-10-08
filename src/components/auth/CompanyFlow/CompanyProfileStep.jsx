"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiUploadCloud, FiImage, FiChevronDown, FiGlobe } from "react-icons/fi";
import CompanyStepper from "./CompanyStepper";

const COUNTRIES = [
  "Switzerland",
  "Germany",
  "United States",
  "United Kingdom",
  "France",
  "Canada",
  "Australia",
  "Bangladesh",
  "Netherlands",
  "Spain",
];

const EMPLOYEE_RANGES = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "500+ employees",
];

const CompanyProfileStep = ({
  initialData = {},
  onBack,
  onContinue,
}) => {
  const [logoPreview, setLogoPreview] = useState(initialData.logo || null);
  const [bannerPreview, setBannerPreview] = useState(initialData.banner || null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyName: initialData.companyName || "Softvence Agency",
      details: initialData.details || "",
      address: initialData.address || "",
      country: initialData.country || "",
      phoneCountryCode: initialData.phoneCountryCode || "+001",
      phone: initialData.phone || "",
      contactEmail: initialData.contactEmail || initialData.email || "",
      employeeRange: initialData.employeeRange || "",
      website: initialData.website || "",
    },
    mode: "onChange",
  });

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogoPreview(url);
    }
  };

  const handleBannerUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setBannerPreview(url);
    }
  };

  const onSubmit = (data) => {
    onContinue({
      ...data,
      logo: logoPreview,
      banner: bannerPreview,
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-8">
      {/* Stepper (Step 02) */}
      <CompanyStepper currentStepIndex={2} />

      <div className="max-w-2xl mx-auto">
        <div className="mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B] mb-1 tracking-tight">
            Complete Company Profile
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-slate-400">
            This information will be shown to workers on job detail pages
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 lg:space-y-6">
          {/* Logo and Banner Upload Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Company Logo */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
                Company Logo <span className="text-red-500">*</span>
              </label>
              <label className="w-full h-28 lg:h-32 border-2 border-dashed border-slate-200 hover:border-slate-300 bg-[#F8FAFC] rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-colors overflow-hidden relative group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt="Logo"
                    className="w-full h-full object-contain p-2"
                  />
                ) : (
                  <>
                    <FiUploadCloud className="w-6 h-6 text-slate-400 group-hover:text-slate-600 mb-1" />
                    <span className="text-xs sm:text-sm text-slate-500 font-medium">
                      Upload Logo
                    </span>
                  </>
                )}
              </label>
            </div>

            {/* Company Banner */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
                Company Banner (optional)
              </label>
              <label className="w-full h-28 lg:h-32 border-2 border-dashed border-slate-200 hover:border-slate-300 bg-[#F8FAFC] rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-colors overflow-hidden relative group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleBannerUpload}
                  className="hidden"
                />
                {bannerPreview ? (
                  <img
                    src={bannerPreview}
                    alt="Banner"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <FiImage className="w-6 h-6 text-slate-400 group-hover:text-slate-600 mb-1" />
                    <span className="text-xs sm:text-sm text-slate-500 font-medium">
                      Upload Banner
                    </span>
                  </>
                )}
              </label>
            </div>
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Softvence Agency"
              {...register("companyName", {
                required: "Company name is required",
              })}
              className="w-full h-12 lg:h-13 px-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm lg:text-base text-[#1E293B] focus:outline-hidden focus:border-[#29324B]"
            />
          </div>

          {/* Company Details */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
              Company Details <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Tell about company..."
              {...register("details", {
                required: "Company details are required",
              })}
              className="w-full p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-sm lg:text-base text-[#1E293B] focus:outline-hidden focus:border-[#29324B] resize-none placeholder:text-slate-400"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="123 Main St, City, State, ZIP"
              {...register("address", {
                required: "Address is required",
              })}
              className="w-full h-12 lg:h-13 px-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm lg:text-base text-[#1E293B] focus:outline-hidden focus:border-[#29324B]"
            />
          </div>

          {/* Country / Region */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
              Country / Region <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                {...register("country", {
                  required: "Country is required",
                })}
                className="w-full h-12 lg:h-13 px-4 pr-10 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm lg:text-base text-[#1E293B] focus:outline-hidden focus:border-[#29324B] appearance-none cursor-pointer"
              >
                <option value="">Select country</option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <FiChevronDown className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Phone and Email Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Contact Phone */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
                Contact Phone <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <div className="w-24 shrink-0 h-12 lg:h-13 px-2 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-xs sm:text-sm font-medium text-[#1E293B]">
                  <span>🇺🇸 +001</span>
                </div>
                <input
                  type="tel"
                  placeholder="123 456 789"
                  {...register("phone")}
                  className="flex-1 h-12 lg:h-13 px-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm lg:text-base text-[#1E293B] focus:outline-hidden focus:border-[#29324B]"
                />
              </div>
            </div>

            {/* Contact Email */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
                Contact Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                {...register("contactEmail", {
                  required: "Contact email is required",
                })}
                className="w-full h-12 lg:h-13 px-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm lg:text-base text-[#1E293B] focus:outline-hidden focus:border-[#29324B]"
              />
            </div>
          </div>

          {/* Employee Range & Website Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Total Employee Range */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
                Total Employee Range
              </label>
              <div className="relative">
                <select
                  {...register("employeeRange")}
                  className="w-full h-12 lg:h-13 px-4 pr-10 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm lg:text-base text-[#1E293B] focus:outline-hidden focus:border-[#29324B] appearance-none cursor-pointer"
                >
                  <option value="">Select Range</option>
                  {EMPLOYEE_RANGES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Website */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
                Website
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <FiGlobe className="w-5 h-5" />
                </div>
                <input
                  type="url"
                  placeholder="https://softvence.agency/"
                  {...register("website")}
                  className="w-full h-12 lg:h-13 pl-11 pr-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm lg:text-base text-[#1E293B] focus:outline-hidden focus:border-[#29324B]"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-6 lg:pt-8">
            <button
              type="button"
              onClick={onBack}
              className="px-8 lg:px-10 py-2.5 lg:py-3 rounded-full border border-slate-300 hover:bg-slate-100 text-sm lg:text-base font-medium text-slate-700 transition-colors cursor-pointer"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-8 lg:px-10 py-2.5 lg:py-3 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-sm lg:text-base font-semibold text-white transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyProfileStep;
