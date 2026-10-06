"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import logoImg from "@/assets/logo.png";

const OtpModal = ({ isOpen, onClose, onVerifySuccess, email = "demo@gmail.com" }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(59);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    let interval = null;
    if (isOpen && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOpen, timer]);

  useEffect(() => {
    if (isOpen && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (index, value) => {
    // Only numbers allowed
    const val = value.replace(/\D/g, "");
    if (!val && value !== "") return;

    const newOtp = [...otp];
    newOtp[index] = val.slice(-1);
    setOtp(newOtp);

    // Auto-focus next input
    if (val && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pastedData) return;

    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);

    const nextFocus = Math.min(pastedData.length, 5);
    inputRefs.current[nextFocus]?.focus();
  };

  const handleResend = () => {
    if (!canResend) return;
    setOtp(["", "", "", "", "", ""]);
    setTimer(59);
    setCanResend(false);
    inputRefs.current[0]?.focus();
  };

  const handleContinue = (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length < 6) {
      // Allow demo completion if filled
      if (otpCode.length === 0) {
        // for quick demo
        onVerifySuccess("123456");
        return;
      }
    }
    onVerifySuccess(otpCode || "123456");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs transition-opacity animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100 text-center">
        {/* Red close button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 w-7 h-7 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-xs hover:bg-[#DC2626] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <IoClose className="w-5 h-5" />
        </button>

        {/* Trabino Logo */}
        <div className="flex justify-center mb-6">
          {logoImg ? (
            <Image
              src={logoImg}
              alt="Trabino"
              width={130}
              height={40}
              className="h-8 w-auto object-contain"
            />
          ) : (
            <span className="text-2xl font-bold text-[#1E293B]">Trabino</span>
          )}
        </div>

        {/* Title & Description */}
        <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B] mb-2.5">
          Enter your OTP code
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed mb-8">
          We&apos;ve sent a verification code to{" "}
          <span className="font-medium text-slate-700">{email}</span>.
          You&apos;re just one step away from getting in please enter the code
          we sent to confirm it&apos;s really you and complete the verification
          process.
        </p>

        {/* 6 OTP Inputs */}
        <form onSubmit={handleContinue}>
          <div className="flex justify-center items-center gap-2 sm:gap-3 mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-11 sm:w-13 h-12 sm:h-14 text-center text-lg sm:text-xl font-bold rounded-2xl bg-[#F8FAFC] border border-slate-200 text-[#1E293B] focus:border-[#29324B] focus:outline-hidden transition-all shadow-2xs"
              />
            ))}
          </div>

          {/* Continue Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="px-10 py-3 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-white text-sm font-semibold transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Continue
            </button>
          </div>
        </form>

        {/* Resend Footer */}
        <div className="text-xs sm:text-sm text-slate-500 space-y-1">
          <p>
            Didn&apos;t Receive Code?{" "}
            <button
              type="button"
              onClick={handleResend}
              disabled={!canResend}
              className={`font-semibold underline transition-colors cursor-pointer ${
                canResend
                  ? "text-[#1E293B] hover:text-black cursor-pointer"
                  : "text-slate-400 cursor-not-allowed"
              }`}
            >
              Resend Code
            </button>
          </p>
          <p className="text-xs text-slate-400">
            Resend code in 00:{timer < 10 ? `0${timer}` : timer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpModal;
