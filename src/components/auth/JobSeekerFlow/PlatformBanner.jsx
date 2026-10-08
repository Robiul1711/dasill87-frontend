"use client";
import React from "react";
import Image from "next/image";
import authBannerImg from "@/assets/authBanner.png";

const PlatformBanner = ({ className = "" }) => {
  if (!authBannerImg) return null;

  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      <Image
        src={authBannerImg}
        alt="Trabino Platform Preview"
        width={650}
        height={520}
        className="w-full h-auto rounded-3xl object-contain drop-shadow-xs transition-transform duration-500 hover:scale-[1.01]"
        priority
      />
    </div>
  );
};

export default PlatformBanner;
