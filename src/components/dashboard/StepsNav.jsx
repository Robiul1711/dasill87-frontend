"use client";

import React from "react";
import {
  PersonalInfoIcon,
  SkillLanguagesIcon,
  ExperienceEducationIcon,
  DocumentsSettingsIcon,
  HobbiesIcon,
} from "@/components/icons/DashboardIcons";

export const stepsList = [
  {
    id: "personal-info",
    label: "Personal Information",
    icon: PersonalInfoIcon,
    hasDot: true,
  },
  {
    id: "skills-languages",
    label: "Skill & Languages",
    icon: SkillLanguagesIcon,
    hasDot: true,
  },
  {
    id: "experience-education",
    label: "Experience & Education",
    icon: ExperienceEducationIcon,
    hasDot: true,
  },
  {
    id: "documents-settings",
    label: "Documents Settings",
    icon: DocumentsSettingsIcon,
    hasDot: false,
  },
  {
    id: "hobbies",
    label: "Hobbies",
    icon: HobbiesIcon,
    hasDot: false,
  },
];

export default function StepsNav({ activeTab, onSelectTab }) {
  return (
    <div className="w-full border-b border-gray-200/80 dark:border-gray-800 pb-0">
      <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-2">
        {stepsList.map((step) => {
          const isActive = activeTab === step.id;
          const Icon = step.icon;

          return (
            <button
              key={step.id}
              onClick={() => onSelectTab(step.id)}
              className={`relative flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-blue-400 shadow-xs"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/60 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800/40"
              }`}
            >
              <span className="flex items-center">
                <Icon
                  className="w-4 h-4"
                  color={
                    isActive
                      ? "#0000F6"
                      : "currentColor"
                  }
                />
              </span>

              <span>{step.label}</span>

              {/* Status red/pink notification dot */}
              {step.hasDot && (
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500 inline-block shrink-0" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
