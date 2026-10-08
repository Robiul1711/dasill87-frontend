"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { FiChevronRight } from "react-icons/fi";
import PlatformBanner from "./PlatformBanner";

const RegisterMethodSelect = ({ onSelectEmail, mode = "register", onToggleMode }) => {
  const isRegister = mode === "register";

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-4 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        {/* Left Side: Actions */}
        <div className="flex flex-col justify-center max-w-lg w-full mx-auto lg:mx-0">
          <div className="mb-8 lg:mb-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B] leading-tight tracking-tight">
              {isRegister
                ? "Welcome to Trabino Your personal AI job-hunter"
                : "Welcome back to Trabino Your personal AI job-hunter"}
            </h1>
          </div>

          <div className="flex flex-col gap-4">
            {/* LinkedIn */}
            <button
              type="button"
              className="w-full h-14 lg:h-15 px-5 rounded-2xl bg-[#F8FAFC] hover:bg-slate-100/90 border border-slate-200/80 flex items-center justify-between transition-all duration-200 shadow-2xs hover:shadow-xs group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white text-base">
                  <FaLinkedinIn className="w-4 h-4" />
                </div>
                <span className="text-base lg:text-lg font-semibold text-[#1E293B]">
                  {isRegister ? "Sign up with LinkedIn" : "Sign in with LinkedIn"}
                </span>
              </div>
              <FiChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-all" />
            </button>

            {/* Google */}
            <button
              type="button"
              className="w-full h-14 lg:h-15 px-5 rounded-2xl bg-[#F8FAFC] hover:bg-slate-100/90 border border-slate-200/80 flex items-center justify-between transition-all duration-200 shadow-2xs hover:shadow-xs group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xl shadow-2xs">
                  <FcGoogle className="w-5 h-5" />
                </div>
                <span className="text-base lg:text-lg font-semibold text-[#1E293B]">
                  {isRegister ? "Sign up with Google" : "Sign in with Google"}
                </span>
              </div>
              <FiChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-all" />
            </button>

            {/* Divider */}
            <div className="relative my-2.5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-[#F9FAFB] px-4 text-slate-400 font-medium">Or</span>
              </div>
            </div>

            {/* Email Option */}
            <button
              type="button"
              onClick={onSelectEmail}
              className="w-full h-14 lg:h-15 px-5 rounded-2xl bg-[#F8FAFC] hover:bg-slate-100/90 border border-slate-200/80 flex items-center justify-between transition-all duration-200 shadow-2xs hover:shadow-xs group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-slate-200/80 flex items-center justify-center text-slate-700">
                  <HiOutlineMail className="w-5 h-5" />
                </div>
                <span className="text-base lg:text-lg font-semibold text-[#1E293B]">
                  {isRegister ? "Sign up with your Email" : "Sign in with your Email"}
                </span>
              </div>
              <FiChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-all" />
            </button>
          </div>

          {/* Footer note */}
          <div className="mt-8 lg:mt-10 text-sm lg:text-base text-slate-500">
            {isRegister ? (
              <p>
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="font-bold text-[#1E293B] hover:underline"
                >
                  Sign in
                </Link>
              </p>
            ) : (
              <p>
                Don&apos;t have an account yet?{" "}
                <button
                  type="button"
                  onClick={onToggleMode}
                  className="font-bold text-[#1E293B] hover:underline cursor-pointer"
                >
                  Sign up
                </button>
              </p>
            )}
          </div>
        </div>

        {/* Right Side: Laptop Banner */}
        <div className="hidden lg:block">
          <PlatformBanner />
        </div>
      </div>
    </div>
  );
};

export default RegisterMethodSelect;
