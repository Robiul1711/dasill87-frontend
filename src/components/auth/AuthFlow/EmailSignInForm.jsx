"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiArrowLeft, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import PlatformBanner from "../JobSeekerFlow/PlatformBanner";

const EmailSignInForm = ({
  onBack,
  onForgotPassword,
  onSignInSuccess,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    if (onSignInSuccess) {
      onSignInSuccess(data);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-4 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        {/* Left Side: Sign in Form */}
        <div className="w-full max-w-lg mx-auto lg:mx-0">
          {/* Header with Back button */}
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
              Sign in with your email
            </h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 lg:space-y-5">
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
                  <FiLock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
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

              {/* Forgot password link */}
              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  onClick={onForgotPassword}
                  className="text-xs lg:text-sm font-semibold text-[#2563EB] hover:underline cursor-pointer"
                >
                  Forgot password
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-4 lg:pt-6">
              <button
                type="button"
                onClick={onBack}
                className="px-8 py-2.5 lg:px-10 lg:py-3 rounded-full border border-slate-300 hover:bg-slate-100 text-sm lg:text-base font-medium text-slate-700 transition-colors cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-2.5 lg:px-10 lg:py-3 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-white text-sm lg:text-base font-semibold transition-all shadow-xs active:scale-95 cursor-pointer disabled:opacity-60"
              >
                Sign in
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

export default EmailSignInForm;
