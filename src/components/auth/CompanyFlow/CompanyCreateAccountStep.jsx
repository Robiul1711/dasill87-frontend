"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import CompanyStepper from "./CompanyStepper";

const CompanyCreateAccountStep = ({
  accountType = "standard",
  initialData = {},
  onBack,
  onSubmitSuccess,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      companyName: initialData.companyName || "",
      email: initialData.email || "",
      password: initialData.password || "",
      confirmPassword: initialData.confirmPassword || "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    if (onSubmitSuccess) {
      onSubmitSuccess(data);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4 sm:py-8">
      {/* Stepper (Step 01) */}
      <CompanyStepper currentStepIndex={1} />

      <div className="max-w-xl mx-auto">
        <div className="mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B] mb-1 tracking-tight">
            Create Your Account
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-slate-400">
            {accountType === "agency"
              ? "Temporary Agency Registration"
              : "Standard Company Registration"}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 lg:space-y-5">
          {/* Company Name */}
          <div>
            <label className="block text-sm lg:text-base font-medium text-[#1E293B] mb-1.5">
              Company Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                <HiOutlineBuildingOffice2 className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Softvence Agency"
                {...register("companyName", {
                  required: "Company name is required",
                })}
                className={`w-full h-12 lg:h-13 pl-11 pr-4 rounded-xl bg-[#F8FAFC] border ${
                  errors.companyName ? "border-red-400" : "border-slate-200"
                } focus:outline-hidden focus:border-[#29324B] text-sm lg:text-base text-[#1E293B] placeholder:text-slate-400 transition-colors`}
              />
            </div>
            {errors.companyName && (
              <p className="text-xs lg:text-sm text-red-500 mt-1">
                {errors.companyName.message}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm lg:text-base font-medium text-[#1E293B] mb-1.5">
              Email address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                <HiOutlineMail className="w-5 h-5" />
              </div>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full h-12 lg:h-13 pl-11 pr-4 rounded-xl bg-[#F8FAFC] border ${
                  errors.email ? "border-red-400" : "border-slate-200"
                } focus:outline-hidden focus:border-[#29324B] text-sm lg:text-base text-[#1E293B] placeholder:text-slate-400 transition-colors`}
              />
            </div>
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
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                <FiLock className="w-4 h-4 lg:w-5 lg:h-5" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className={`w-full h-12 lg:h-13 pl-11 pr-11 rounded-xl bg-[#F8FAFC] border ${
                  errors.password ? "border-red-400" : "border-slate-200"
                } focus:outline-hidden focus:border-[#29324B] text-sm lg:text-base text-[#1E293B] placeholder:text-slate-400 transition-colors`}
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
            {errors.password && (
              <p className="text-xs lg:text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm lg:text-base font-medium text-[#1E293B] mb-1.5">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                <FiLock className="w-4 h-4 lg:w-5 lg:h-5" />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (val) => {
                    if (watch("password") !== val) {
                      return "Your passwords do not match";
                    }
                  },
                })}
                className={`w-full h-12 lg:h-13 pl-11 pr-11 rounded-xl bg-[#F8FAFC] border ${
                  errors.confirmPassword ? "border-red-400" : "border-slate-200"
                } focus:outline-hidden focus:border-[#29324B] text-sm lg:text-base text-[#1E293B] placeholder:text-slate-400 transition-colors`}
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

          {/* Actions */}
          <div className="flex items-center gap-4 pt-4 lg:pt-6">
            <button
              type="button"
              onClick={onBack}
              className="px-8 lg:px-10 py-2.5 lg:py-3 rounded-full border border-slate-300 hover:bg-slate-100 text-sm lg:text-base font-medium text-slate-700 transition-colors cursor-pointer"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 lg:px-10 py-2.5 lg:py-3 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-white text-sm lg:text-base font-semibold transition-all shadow-xs active:scale-95 cursor-pointer disabled:opacity-60"
            >
              Create Account
            </button>
          </div>

          {/* Divider & Sign in */}
          <div className="relative pt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs lg:text-sm">
              <span className="bg-[#F9FAFB] px-3 text-slate-400 font-medium">Or</span>
            </div>
          </div>

          <div className="text-center text-xs lg:text-sm text-slate-500 pt-2">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-bold text-[#1E293B] hover:underline"
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyCreateAccountStep;
