"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const ResetPasswordForm = ({ onBack, onPasswordChangeSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    if (onPasswordChangeSuccess) {
      onPasswordChangeSuccess(data);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <div className="max-w-xl mx-auto">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E293B] mb-8 tracking-tight">
          Set your new password
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 lg:space-y-6">
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
                    if (watch("password") != val) {
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
              Password Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
