"use client";
import React from "react";
import Image from "next/image";
import authBannerImg from "@/assets/authBanner.png";
import companyLogoImg from "@/assets/companyLogo.png";

const WelcomeGetStarted = ({ userName = "Adam Zampa", onGetStarted }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 sm:py-8 flex flex-col items-center text-center">
      {/* Banner Card centered without padding */}
      <div className="w-full max-w-md sm:max-w-xl mx-auto mb-8 flex items-center justify-center">
        {authBannerImg && (
          <Image
            src={authBannerImg}
            alt="Trabino Platform Preview"
            width={600}
            height={460}
            className="w-full h-auto rounded-3xl object-contain drop-shadow-xs transition-transform duration-500 hover:scale-[1.01]"
            priority
          />
        )}
      </div>

      {/* Welcome Greetings */}
      <div className="space-y-3 max-w-lg mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1E293B]">
          Hello {userName}.
        </h1>
        
        {/* Welcome to [companyLogo] */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-xl sm:text-2xl font-bold text-[#1E293B]">
            Welcome to
          </span>
          {companyLogoImg ? (
            <Image
              src={companyLogoImg}
              alt="Trabino"
              width={100}
              height={30}
              className="h-6 sm:h-7 w-auto object-contain inline-block"
            />
          ) : (
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold text-[#2563EB]">Tra</span>
              <span className="text-xl sm:text-2xl font-bold text-[#EA580C]">bino</span>
            </div>
          )}
        </div>

        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
          Lets Built your professional profile and connect you with jobs that
          truly fit your skills, goal and aspirations
        </p>
      </div>

      {/* Get Started Button */}
      <div className="mt-8">
        <button
          type="button"
          onClick={onGetStarted}
          className="px-10 py-3 rounded-full bg-[#29324B] hover:bg-[#1E2538] text-white text-sm sm:text-base font-semibold transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomeGetStarted;
