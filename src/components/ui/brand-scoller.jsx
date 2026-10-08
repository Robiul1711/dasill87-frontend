"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiOpenai,
  SiAirbnb,
  SiStripe,
  SiReddit,
  SiNetflix,
  SiAnthropic,
  SiFigma,
  SiCisco,
  SiSpacex,
  SiNotion,
  SiSnapchat,
  SiSpotify,
  SiAtlassian,
  SiDoordash,
  SiPerplexity,
  SiDropbox,
  SiInstacart,
  SiLyft,
  SiTripadvisor,
  SiUdemy,
  SiPinterest,
} from "react-icons/si";
import { TbBrandMercedes } from "react-icons/tb";

const PlaidIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0A85EA]">
    <circle cx="6" cy="6" r="3.5" fill="#0A85EA" />
    <circle cx="18" cy="6" r="3.5" fill="#111827" />
    <circle cx="6" cy="18" r="3.5" fill="#111827" />
    <circle cx="18" cy="18" r="3.5" fill="#0A85EA" />
    <circle cx="12" cy="12" r="3.5" fill="#10B981" />
  </svg>
);

const DocuSignIcon = () => (
  <div className="w-5 h-5 rounded-xs bg-[#FFCE00] flex items-center justify-center font-bold text-xs text-black">
    d
  </div>
);

const topBrands = [
  { name: "OpenAI", icon: <SiOpenai className="text-black text-lg sm:text-xl" /> },
  { name: "Airbnb", icon: <SiAirbnb className="text-[#FF5A5F] text-lg sm:text-xl" /> },
  { name: "Stripe", icon: <SiStripe className="text-[#635BFF] text-lg sm:text-xl" /> },
  { name: "Reddit", icon: <SiReddit className="text-[#FF4500] text-lg sm:text-xl" /> },
  { name: "Netflix", icon: <SiNetflix className="text-[#E50914] text-lg sm:text-xl" /> },
  { name: "Anthropic", icon: <SiAnthropic className="text-[#191919] text-lg sm:text-xl" /> },
  { name: "Figma", icon: <SiFigma className="text-[#F24E1E] text-lg sm:text-xl" /> },
  { name: "Cisco", icon: <SiCisco className="text-[#1BA0D7] text-lg sm:text-xl" /> },
  { name: "SpaceX", icon: <SiSpacex className="text-black text-lg sm:text-xl" /> },
  { name: "Notion", icon: <SiNotion className="text-black text-lg sm:text-xl" /> },
  {
    name: "Snap",
    icon: (
      <span className="w-5 h-5 rounded-full bg-[#FFFC00] flex items-center justify-center">
        <SiSnapchat className="text-black text-xs" />
      </span>
    ),
  },
  { name: "Spotify", icon: <SiSpotify className="text-[#1DB954] text-lg sm:text-xl" /> },
];

const bottomBrands = [
  { name: "Atlassian", icon: <SiAtlassian className="text-[#0052CC] text-lg sm:text-xl" /> },
  { name: "DoorDash", icon: <SiDoordash className="text-[#FF3008] text-lg sm:text-xl" /> },
  { name: "Perplexity", icon: <SiPerplexity className="text-[#20B2AA] text-lg sm:text-xl" /> },
  { name: "Dropbox", icon: <SiDropbox className="text-[#0061FF] text-lg sm:text-xl" /> },
  { name: "Instacart", icon: <SiInstacart className="text-[#008A00] text-lg sm:text-xl" /> },
  { name: "Lyft", icon: <SiLyft className="text-[#FF00BF] text-lg sm:text-xl" /> },
  { name: "Plaid", icon: <PlaidIcon /> },
  { name: "DocuSign", icon: <DocuSignIcon /> },
  { name: "TripAdvisor", icon: <SiTripadvisor className="text-[#00AA6C] text-lg sm:text-xl" /> },
  { name: "Udemy", icon: <SiUdemy className="text-[#A435F0] text-lg sm:text-xl" /> },
  { name: "Mercedes", icon: <TbBrandMercedes className="text-[#333333] text-xl" /> },
  { name: "Pinterest", icon: <SiPinterest className="text-[#BD081C] text-lg sm:text-xl" /> },
];

const BrandCard = ({ brand }) => (
  <div className="flex items-center gap-2.5 bg-white border border-slate-200/80 hover:border-slate-300 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-all shrink-0">
    <span className="flex items-center justify-center">{brand.icon}</span>
    <span className="text-xs sm:text-sm font-semibold text-[#1E293B] whitespace-nowrap">
      {brand.name}
    </span>
  </div>
);

export const BrandScroller = ({ items = topBrands, duration = 35 }) => {
  return (
    <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-2">
      <motion.div
        className="flex gap-4 sm:gap-5 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
      >
        {[...items, ...items].map((brand, idx) => (
          <BrandCard key={idx} brand={brand} />
        ))}
      </motion.div>
    </div>
  );
};

export const BrandScrollerReverse = ({ items = bottomBrands, duration = 35 }) => {
  return (
    <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-2">
      <motion.div
        className="flex gap-4 sm:gap-5 w-max"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
      >
        {[...items, ...items].map((brand, idx) => (
          <BrandCard key={idx} brand={brand} />
        ))}
      </motion.div>
    </div>
  );
};
