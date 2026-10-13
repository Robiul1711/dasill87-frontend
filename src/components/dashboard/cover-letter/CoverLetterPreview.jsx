"use client";

import React from "react";
import { FiMail, FiPhone, FiAtSign } from "react-icons/fi";

export default function CoverLetterPreview({
  clData,
  selectedTemplate = "classic-blue",
}) {
  const fullName = `${clData.personal?.firstName || "Mike"} ${
    clData.personal?.lastName || "Smith"
  }`.trim();
  const position = clData.personal?.position || "Mobile Developer";
  const email = clData.contact?.email || "email@freepik.com";
  const phone = clData.contact?.phone || "+00 123 456 789";
  const username = clData.contact?.username || "@username";
  const address =
    clData.personal?.address || "00 Main Street Avenue, Country, City, 00000";

  const paragraphs = (clData.bodyText || "").split("\n\n").filter(Boolean);

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Dimension Badge (757 × 1060) */}
      <div className="w-full flex items-center justify-between pb-2 text-[11px] text-gray-400 font-mono">
        <span className="font-semibold text-gray-500 dark:text-gray-400">
          Cover Letter Live Preview
        </span>
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#2563EB] text-white font-medium text-[10px] shadow-2xs">
          757 × 1060
        </span>
      </div>

      {/* Main Cover Letter Document Paper */}
      <div
        id="cover-letter-printable-document"
        className="relative w-full max-w-[560px] lg:max-w-[620px] xl:max-w-[700px] aspect-[1/1.414] bg-white text-[#2B3648] rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-200/90 dark:border-gray-800 transition-all select-none p-6 sm:p-10 md:p-12 flex flex-col justify-between"
        style={{
          boxShadow:
            "0 20px 40px -15px rgba(0,0,0,0.08), 0 0 1px 1px rgba(0,0,0,0.04)",
        }}
      >
        <div className="space-y-6">
          {/* Header Block: Left Name/Title, Right Address */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#223567] tracking-tight">
                {fullName}
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-gray-700 tracking-wide">
                {position}
              </p>
            </div>

            <div className="text-right text-[10px] sm:text-xs text-gray-600 leading-tight space-y-0.5">
              <p className="font-semibold text-gray-800">{fullName}</p>
              <p className="whitespace-pre-line text-gray-500">
                {address.replace(/,\s*/g, "\n")}
              </p>
              {clData.letterDate && (
                <p className="text-gray-400 font-mono pt-1">
                  Date: {clData.letterDate}
                </p>
              )}
            </div>
          </div>

          {/* Horizontal Contact Info Strip */}
          <div className="w-full py-2.5 px-4 rounded-md bg-[#F0F4FA] flex items-center justify-between text-[10px] sm:text-xs font-medium text-[#223567] shadow-2xs">
            <span className="flex items-center gap-1.5 truncate">
              <FiMail className="w-3 h-3 text-gray-400 shrink-0" />
              <span>{email}</span>
            </span>
            <span className="flex items-center gap-1.5 shrink-0">
              <FiPhone className="w-3 h-3 text-gray-400 shrink-0" />
              <span>{phone}</span>
            </span>
            <span className="flex items-center gap-1.5 shrink-0">
              <FiAtSign className="w-3 h-3 text-gray-400 shrink-0" />
              <span>{username}</span>
            </span>
          </div>

          {/* Recipient Block */}
          <div className="text-[10px] sm:text-xs text-gray-700 space-y-0.5 pt-1">
            <p className="font-bold text-gray-900">To:</p>
            <p className="font-semibold text-gray-800">
              {clData.recipient?.company || "Business Company"}
            </p>
            <p className="whitespace-pre-line text-gray-500">
              {clData.recipient?.address ||
                "00 Main Street Avenue\nCountry, City\n00000"}
            </p>
          </div>

          {/* Salutation */}
          <div className="pt-1">
            <p className="text-xs sm:text-sm font-bold text-[#223567]">
              {clData.recipient?.salutation || "Dear Manager,"}
            </p>
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-3 text-[10.5px] sm:text-xs text-gray-700 leading-relaxed font-normal">
            {paragraphs.map((p, idx) => {
              if (p.startsWith("Regards,")) {
                return null;
              }
              return (
                <p key={idx} className="text-justify leading-relaxed">
                  {p}
                </p>
              );
            })}
          </div>
        </div>

        {/* Footer: Sign-off & Handwritten Signature Graphic */}
        <div className="pt-4 space-y-1">
          <p className="text-xs sm:text-sm font-bold text-[#223567]">
            Regards, {clData.personal?.firstName || "Mike"}.
          </p>

          {/* Realistic SVG Signature Line */}
          <div className="pt-2">
            <svg
              className="w-32 sm:w-40 h-8 sm:h-10 text-gray-700"
              viewBox="0 0 200 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15,35 Q35,10 65,30 T115,25 Q145,15 175,38 M80,38 Q110,48 145,34" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
