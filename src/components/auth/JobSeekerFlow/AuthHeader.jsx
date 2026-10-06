"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import logoImg from "@/assets/logo.png";

const AuthHeader = ({ userAvatar = null, userName = "" }) => {
  return (
    <header className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-2">
      <div className="bg-[#F8FAFC]/90 backdrop-blur-md border border-slate-200/80 rounded-full px-6 py-3 flex items-center justify-between shadow-xs">
        <Link href="/" className="flex items-center gap-2">
          {logoImg ? (
            <Image
              src={logoImg}
              alt="Trabino"
              width={120}
              height={36}
              className="h-7 sm:h-8 w-auto object-contain"
              priority
            />
          ) : (
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-[#4F46E5]">T</span>
              <span className="text-2xl font-bold text-[#1E293B]">rabino</span>
            </div>
          )}
        </Link>

        <div className="flex items-center gap-2">
          {userAvatar ? (
            <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-300">
              <Image
                src={userAvatar}
                alt={userName || "User"}
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors">
              <FaRegUserCircle className="w-6 h-6 text-[#29324B]" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
