"use client";
import React from "react";
import Image from "next/image";
import companyBannerImg from "@/assets/CompanyRegistrationFlowBaner.png";

const CompanyBanner = ({ className = "" }) => {
  if (!companyBannerImg) return null;

  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      <Image
        src={companyBannerImg}
        alt="Trabino Company Platform"
        width={650}
        height={520}
        className="w-full h-auto rounded-3xl object-contain drop-shadow-xs transition-transform duration-500 hover:scale-[1.01]"
        priority
      />
    </div>
  );
};

export default CompanyBanner;
