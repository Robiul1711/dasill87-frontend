"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiGlobe,
  FiLinkedin,
} from "react-icons/fi";

export default function CvPreview({ cvData, selectedTemplate = "watercolor" }) {
  const containerRef = useRef(null);

  const fullName = `${cvData.personal?.firstName || "ANDREW"} ${
    cvData.personal?.lastName || "SMITH"
  }`.trim();
  const position = cvData.personal?.position || "TITLE POSITION";
  const avatarUrl =
    cvData.personal?.avatarUrl ||
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80";

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Dimension Badge like Figma screenshot (757 x 1060) */}
      <div className="w-full flex items-center justify-between pb-2 text-[11px] text-gray-400 font-mono">
        <span className="font-semibold text-gray-500 dark:text-gray-400">
          CV Live Preview
        </span>
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#2563EB] text-white font-medium text-[10px] shadow-2xs">
          757 × 1060
        </span>
      </div>

      {/* Main CV Document Paper */}
      <div
        ref={containerRef}
        id="cv-printable-document"
        className="relative w-full max-w-[560px] lg:max-w-[620px] xl:max-w-[700px] aspect-[1/1.414] bg-white text-[#2B3648] rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-200/90 dark:border-gray-800 transition-all select-none print:max-w-none print:shadow-none print:border-none print:rounded-none"
        style={{
          boxShadow:
            "0 20px 40px -15px rgba(0,0,0,0.08), 0 0 1px 1px rgba(0,0,0,0.04)",
        }}
      >
        {/* ========================================================================= */}
        {/* WATERCOLOR TEMPLATE THEME */}
        {/* ========================================================================= */}
        {selectedTemplate === "watercolor" && (
          <>
            {/* Artistic Watercolor Background Blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              {/* Top-Center / Left Yellow Splash */}
              <div
                className="absolute -top-[10%] left-[10%] w-[55%] h-[40%] rounded-full opacity-65 blur-3xl mix-blend-multiply"
                style={{
                  background:
                    "radial-gradient(circle, #FDE68A 0%, #F59E0B 40%, transparent 75%)",
                }}
              />
              {/* Top-Right Soft Pink / Blush Splash */}
              <div
                className="absolute -top-[5%] right-[-5%] w-[55%] h-[45%] rounded-full opacity-60 blur-3xl mix-blend-multiply"
                style={{
                  background:
                    "radial-gradient(circle, #FBCFE8 0%, #F472B6 45%, transparent 75%)",
                }}
              />
              {/* Bottom-Right Soft Teal / Indigo Splash */}
              <div
                className="absolute -bottom-[10%] right-[-10%] w-[65%] h-[50%] rounded-full opacity-55 blur-3xl mix-blend-multiply"
                style={{
                  background:
                    "radial-gradient(circle, #93C5FD 0%, #6EE7B7 35%, #3B82F6 60%, transparent 80%)",
                }}
              />
              {/* Bottom-Left Warm Orange Wash */}
              <div
                className="absolute bottom-[-8%] left-[-8%] w-[50%] h-[40%] rounded-full opacity-60 blur-3xl mix-blend-multiply"
                style={{
                  background:
                    "radial-gradient(circle, #FED7AA 0%, #FB923C 35%, transparent 75%)",
                }}
              />
              {/* Center subtle paper texture vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/40" />
            </div>

            {/* Document Content Grid */}
            <div className="relative z-10 w-full h-full p-6 sm:p-8 md:p-10 flex flex-col justify-between text-[11px] leading-relaxed">
              <div className="grid grid-cols-12 gap-5 sm:gap-6 md:gap-8 h-full">
                {/* ----------------- LEFT COLUMN (Width: 5/12) ----------------- */}
                <div className="col-span-5 flex flex-col justify-between pr-2">
                  <div className="space-y-5">
                    {/* Portrait Photo */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-md ring-4 ring-white/90 bg-gray-100 mx-auto sm:mx-0">
                      <Image
                        src={avatarUrl}
                        alt={fullName}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    {/* Name & Position */}
                    <div className="space-y-1">
                      <h1 className="text-sm sm:text-base md:text-lg font-black tracking-wider text-[#1F2937] uppercase leading-tight">
                        {fullName}
                      </h1>
                      <p className="text-[10px] sm:text-xs font-semibold tracking-wider text-gray-500 uppercase">
                        {position}
                      </p>
                      <div className="w-12 h-0.5 bg-gray-400/80 mt-2" />
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 pt-1">
                      <h2 className="text-[10px] sm:text-[11px] font-black tracking-wider text-[#1F2937] uppercase">
                        Contact Info
                      </h2>
                      <ul className="space-y-1.5 text-[9px] sm:text-[10px] text-gray-600">
                        <li className="flex items-center gap-1.5 break-all">
                          <FiPhone className="w-3 h-3 text-gray-500 shrink-0" />
                          <span>{cvData.contact?.phone || "+1 123 456 7890"}</span>
                        </li>
                        <li className="flex items-center gap-1.5 break-all">
                          <FiMail className="w-3 h-3 text-gray-500 shrink-0" />
                          <span>{cvData.contact?.email || "email@email.com"}</span>
                        </li>
                        <li className="flex items-center gap-1.5 break-all">
                          <FiMapPin className="w-3 h-3 text-gray-500 shrink-0" />
                          <span className="line-clamp-1">
                            {cvData.contact?.location || "Country, City, Zip"}
                          </span>
                        </li>
                        <li className="flex items-center gap-1.5 break-all">
                          <FiLinkedin className="w-3 h-3 text-gray-500 shrink-0" />
                          <span>
                            {cvData.contact?.username ||
                              cvData.personal?.firstName?.toLowerCase() ||
                              "username"}
                          </span>
                        </li>
                        {cvData.contact?.portfolio && (
                          <li className="flex items-center gap-1.5 break-all">
                            <FiGlobe className="w-3 h-3 text-gray-500 shrink-0" />
                            <span className="line-clamp-1">
                              {cvData.contact?.portfolio.replace(/^https?:\/\//, "")}
                            </span>
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="space-y-1.5 pt-1">
                      <h2 className="text-[10px] sm:text-[11px] font-black tracking-wider text-[#1F2937] uppercase">
                        Skills
                      </h2>
                      <ul className="space-y-1 text-[9px] sm:text-[10px] text-gray-600">
                        {cvData.skills?.slice(0, 5).map((sk, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                            <span className="uppercase tracking-wider font-medium text-[9px]">
                              {sk.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="space-y-2 pt-2">
                    <h2 className="text-[10px] sm:text-[11px] font-black tracking-wider text-[#1F2937] uppercase">
                      Education
                    </h2>
                    <div className="space-y-2 text-[9px] sm:text-[10px]">
                      {cvData.education?.slice(0, 2).map((edu, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="font-bold text-gray-800 tracking-wide text-[9px] sm:text-[10px]">
                            {edu.startDate} - {edu.current ? "Present" : edu.endDate}
                          </div>
                          <div className="font-semibold text-gray-700 uppercase tracking-wider text-[8.5px] sm:text-[9.5px]">
                            {edu.degree || edu.institution}
                          </div>
                          <p className="text-gray-500 text-[8px] sm:text-[9px] line-clamp-2 leading-relaxed">
                            {edu.description || edu.institution}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ----------------- RIGHT COLUMN (Width: 7/12) ----------------- */}
                <div className="col-span-7 flex flex-col justify-between pl-1 sm:pl-2">
                  <div className="space-y-4 sm:space-y-5">
                    {/* Profile Summary */}
                    <div className="space-y-1.5">
                      <h2 className="text-[10px] sm:text-[11px] font-black tracking-wider text-[#1F2937] uppercase">
                        Profile
                      </h2>
                      <p className="text-[9px] sm:text-[10px] text-gray-600 leading-relaxed line-clamp-5">
                        {cvData.bio}
                      </p>
                    </div>

                    {/* Experience */}
                    <div className="space-y-2 pt-1">
                      <h2 className="text-[10px] sm:text-[11px] font-black tracking-wider text-[#1F2937] uppercase">
                        Experience
                      </h2>
                      <div className="space-y-3">
                        {cvData.experiences?.slice(0, 3).map((exp, idx) => (
                          <div key={idx} className="space-y-0.5">
                            <div className="font-bold text-gray-800 tracking-wider text-[9px] sm:text-[10px] uppercase">
                              {exp.startDate} - {exp.current ? "Present" : exp.endDate}{" "}
                              / {exp.position}
                            </div>
                            <div className="text-gray-500 text-[8.5px] sm:text-[9.5px] font-medium">
                              {exp.company} • {exp.location}
                            </div>
                            <p className="text-gray-600 text-[8.5px] sm:text-[9.5px] line-clamp-2 leading-relaxed">
                              {exp.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Software & Languages */}
                  <div className="space-y-4 pt-2">
                    {/* Software Skills Bars */}
                    <div className="space-y-1.5">
                      <h2 className="text-[10px] sm:text-[11px] font-black tracking-wider text-[#1F2937] uppercase">
                        Software
                      </h2>
                      <div className="space-y-1.5">
                        {(
                          cvData.softwareSkills || [
                            { name: "Figma & Design Systems", progress: 95 },
                            { name: "Prototyping & Wireframes", progress: 85 },
                            { name: "Adobe Creative Suite", progress: 75 },
                          ]
                        )
                          .slice(0, 3)
                          .map((soft, idx) => (
                            <div key={idx} className="space-y-0.5">
                              <div className="flex justify-between text-[8px] sm:text-[9px] uppercase tracking-wider text-gray-600 font-semibold">
                                <span>{soft.name}</span>
                              </div>
                              <div className="h-1 w-full bg-amber-100 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-[#3B4D68] rounded-full"
                                  style={{ width: `${soft.progress}%` }}
                                />
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Languages Circular Meters */}
                    <div className="space-y-1.5 pt-1">
                      <h2 className="text-[10px] sm:text-[11px] font-black tracking-wider text-[#1F2937] uppercase">
                        Languages
                      </h2>
                      <div className="flex items-center gap-3">
                        {cvData.languages?.slice(0, 3).map((lang, idx) => {
                          const langCode =
                            lang.name.substring(0, 3).toUpperCase();
                          return (
                            <div
                              key={idx}
                              className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-brand-blue/30 bg-white/70 shadow-2xs"
                            >
                              <span className="text-[8px] sm:text-[9px] font-bold text-[#1F2937]">
                                {langCode}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ========================================================================= */}
        {/* OTHER SELECTED TEMPLATES (Image Based / Rendered Switch) */}
        {/* ========================================================================= */}
        {selectedTemplate !== "watercolor" && (
          <div className="relative w-full h-full flex flex-col items-center justify-center bg-gray-50">
            <Image
              src={`/templates/template_${selectedTemplate.replace("-", "_")}.jpg`}
              alt="Selected Template Preview"
              fill
              className="object-cover"
              unoptimized
            />
            {/* Overlay banner showing dynamic name/position preview */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-lg border border-gray-200/80 text-center shadow-lg">
              <p className="text-xs font-bold text-gray-900 uppercase">
                {fullName}
              </p>
              <p className="text-[10px] text-gray-500 font-medium">{position}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
