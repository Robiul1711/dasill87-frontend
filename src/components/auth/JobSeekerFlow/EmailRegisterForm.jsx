"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiArrowLeft, FiEye, FiEyeOff, FiCheck } from "react-icons/fi";
import PlatformBanner from "./PlatformBanner";

const EmailRegisterForm = ({ onBack, onSubmitSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeGDPR: false,
    },
    mode: "onChange",
  });

  const passwordValue = watch("password", "");

  // Password validation rules check
  const rules = [
    { label: "8 characters", valid: passwordValue.length >= 8 },
    { label: "At least 1 number", valid: /\d/.test(passwordValue) },
    {
      label: "1 special character",
      valid: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(passwordValue),
    },
    { label: "At least one capital letter", valid: /[A-Z]/.test(passwordValue) },
    { label: "1 lowercase letter", valid: /[a-z]/.test(passwordValue) },
  ];

  const onSubmit = (data) => {
    if (onSubmitSuccess) {
      onSubmitSuccess(data);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-4 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
        {/* Left Side: Form */}
        <div className="w-full max-w-lg mx-auto lg:mx-0">
          {/* Header with Back Button */}
          <div className="flex items-center gap-3 mb-6 lg:mb-8">
            <button
              type="button"
              onClick={onBack}
              className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
              aria-label="Go back"
            >
              <FiArrowLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E293B] tracking-tight">
              Sign up with your email address
            </h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 lg:space-y-5">
            {/* First Name */}
            <div>
              <label className="block text-sm lg:text-base font-medium text-[#1E293B] mb-1.5">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="John"
                {...register("firstName", {
                  required: "First name is required",
                })}
                className={`w-full h-12 lg:h-13 px-4 rounded-xl bg-[#F8FAFC] border ${
                  errors.firstName ? "border-red-400" : "border-slate-200"
                } focus:outline-hidden focus:border-[#323956] text-sm lg:text-base text-[#1E293B] placeholder:text-slate-400 transition-colors`}
              />
              {errors.firstName && (
                <p className="text-xs lg:text-sm text-red-500 mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm lg:text-base font-medium text-[#1E293B] mb-1.5">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Zampa"
                {...register("lastName", {
                  required: "Last name is required",
                })}
                className={`w-full h-12 lg:h-13 px-4 rounded-xl bg-[#F8FAFC] border ${
                  errors.lastName ? "border-red-400" : "border-slate-200"
                } focus:outline-hidden focus:border-[#323956] text-sm lg:text-base text-[#1E293B] placeholder:text-slate-400 transition-colors`}
              />
              {errors.lastName && (
                <p className="text-xs lg:text-sm text-red-500 mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm lg:text-base font-medium text-[#1E293B] mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full h-12 lg:h-13 px-4 rounded-xl bg-[#F8FAFC] border ${
                  errors.email ? "border-red-400" : "border-slate-200"
                } focus:outline-hidden focus:border-[#323956] text-sm lg:text-base text-[#1E293B] placeholder:text-slate-400 transition-colors`}
              />
              {errors.email && (
                <p className="text-xs lg:text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm lg:text-base font-medium text-[#1E293B] mb-1.5">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    validate: {
                      minLength: (v) =>
                        v.length >= 8 || "Password must be at least 8 characters",
                      hasNumber: (v) =>
                        /\d/.test(v) || "Password must contain at least 1 number",
                      hasSpecial: (v) =>
                        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(v) ||
                        "Password must contain 1 special character",
                      hasUpper: (v) =>
                        /[A-Z]/.test(v) ||
                        "Password must contain 1 capital letter",
                      hasLower: (v) =>
                        /[a-z]/.test(v) ||
                        "Password must contain 1 lowercase letter",
                    },
                  })}
                  className={`w-full h-12 lg:h-13 px-4 pr-11 rounded-xl bg-[#F8FAFC] border ${
                    errors.password ? "border-red-400" : "border-slate-200"
                  } focus:outline-hidden focus:border-[#323956] text-sm lg:text-base text-[#1E293B] placeholder:text-slate-400 transition-colors`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? (
                    <FiEyeOff className="w-5 h-5" />
                  ) : (
                    <FiEye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Password Requirement Rules List */}
              <div className="mt-3 space-y-1.5 pl-1">
                {rules.map((rule, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 text-xs lg:text-sm transition-colors ${
                      rule.valid ? "text-emerald-600 font-medium" : "text-slate-400"
                    }`}
                  >
                    {rule.valid ? (
                      <FiCheck className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-400 mr-0.5 ml-0.5" />
                    )}
                    <span>{rule.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm lg:text-base font-medium text-[#1E293B] mb-1.5">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (val) => {
                      if (watch("password") != val) {
                        return "Your passwords do not match";
                      }
                    },
                  })}
                  className={`w-full h-12 lg:h-13 px-4 pr-11 rounded-xl bg-[#F8FAFC] border ${
                    errors.confirmPassword ? "border-red-400" : "border-slate-200"
                  } focus:outline-hidden focus:border-[#323956] text-sm lg:text-base text-[#1E293B] placeholder:text-slate-400 transition-colors`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <FiEyeOff className="w-5 h-5" />
                  ) : (
                    <FiEye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-xs lg:text-sm text-red-500 mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* GDPR Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  {...register("agreeGDPR", {
                    required: "You must agree to GDPR terms to register",
                  })}
                  className="mt-1 h-4 w-4 lg:h-5 lg:w-5 rounded-sm border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer"
                />
                <span className="text-xs lg:text-sm text-slate-600 leading-normal">
                  I agree to the GDPR terms and data processing{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.agreeGDPR && (
                <p className="text-xs lg:text-sm text-red-500 mt-1 pl-7">
                  {errors.agreeGDPR.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-3 lg:px-12 lg:py-3.5 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-white text-sm lg:text-base font-semibold transition-all shadow-sm active:scale-[0.99] cursor-pointer disabled:opacity-60"
              >
                Register
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Platform Network Banner */}
        <div className="hidden lg:block">
          <PlatformBanner />
        </div>
      </div>
    </div>
  );
};

export default EmailRegisterForm;
