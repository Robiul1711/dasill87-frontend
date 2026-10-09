"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiPaperclip, FiSend, FiArrowLeft } from "react-icons/fi";
import { FaSlack } from "react-icons/fa";

// Digital Agency VW Style SVG Logo
const VWLogo = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
    <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="6" />
    <circle cx="50" cy="50" r="39" stroke="currentColor" strokeWidth="2" />
    <path d="M26 31L42 72H46L36 31H26Z" fill="currentColor" />
    <path d="M74 31L58 72H54L64 31H74Z" fill="currentColor" />
    <path d="M43 31L50 51L57 31H63L52 64H48L37 31H43Z" fill="currentColor" />
    <path d="M47 72L50 63L53 72H47Z" fill="currentColor" />
  </svg>
);

// Mock Inbox Conversations
const initialConversations = [
  {
    id: 1,
    name: "TechCorp Inc.",
    lastMessage: "Have you seen Janes new dog???????",
    time: "12:01pm",
    unread: 1,
    avatarType: "img",
    avatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&auto=format&fit=crop&q=80",
    role: "Tech Recruiter",
  },
  {
    id: 2,
    name: "Digital Agency",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
    avatarType: "vw",
    role: "Direct Employer",
    messages: [
      {
        id: 101,
        sender: "them",
        text: "Hello! Thank you for applying to our Senior Frontend Developer position.",
        time: "Today 10:27am",
      },
      {
        id: 102,
        sender: "me",
        text: "Hi! Thank you for reaching out. I'm very interested in this opportunity.",
        time: "Today 10:27am",
      },
      {
        id: 103,
        sender: "them",
        text: "Great! We reviewed your profile and we're impressed with your experience.",
        time: "Today 10:27am",
      },
      {
        id: 104,
        sender: "them",
        text: "We would like to schedule an interview with you.",
        time: "Today 10:27am",
      },
    ],
  },
  {
    id: 3,
    name: "TechCorp Inc.",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
    avatarType: "img",
    avatar: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=80&auto=format&fit=crop&q=80",
    role: "Talent Acquisition",
  },
  {
    id: 4,
    name: "TechCorp Inc.",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
    avatarType: "img",
    avatar: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=80&auto=format&fit=crop&q=80",
    role: "Hiring Manager",
  },
  {
    id: 5,
    name: "TechCorp Inc.",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
    avatarType: "img",
    avatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&auto=format&fit=crop&q=80",
    role: "HR Lead",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    lastMessage: "Thanks, I can't wait to see you tomorrow for coffee!",
    time: "12:01pm",
    unread: 0,
    avatarType: "img",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
    role: "Design Director",
  },
  {
    id: 7,
    name: "TechCorp Inc.",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
    avatarType: "img",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
    role: "Recruiting Partner",
  },
  {
    id: 8,
    name: "TechCorp Inc.",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
    avatarType: "img",
    avatar: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=80&auto=format&fit=crop&q=80",
    role: "HR Lead",
  },
  {
    id: 9,
    name: "TechCorp Inc.",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
    avatarType: "img",
    avatar: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=80&auto=format&fit=crop&q=80",
    role: "Talent Specialist",
  },
  {
    id: 10,
    name: "TechCorp Inc.",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
    avatarType: "img",
    avatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&auto=format&fit=crop&q=80",
    role: "HR Partner",
  },
  {
    id: 11,
    name: "TechCorp Inc.",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
    avatarType: "slack",
    role: "Engineering Manager",
  },
  {
    id: 12,
    name: "TechCorp Inc.",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
    avatarType: "img",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
    role: "Staff Recruiter",
  },
];

const renderAvatar = (conv, size = "w-10 h-10") => {
  if (conv.avatarType === "vw") {
    return (
      <div
        className={`${size} shrink-0 rounded-full border border-gray-300 dark:border-gray-700 bg-[#1E293B] text-white flex items-center justify-center p-1.5 shadow-2xs`}
      >
        <VWLogo />
      </div>
    );
  }
  if (conv.avatarType === "slack") {
    return (
      <div
        className={`${size} shrink-0 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1E2638] flex items-center justify-center p-2 shadow-2xs`}
      >
        <FaSlack className="w-full h-full text-emerald-500" />
      </div>
    );
  }
  return (
    <div
      className={`${size} shrink-0 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 shadow-2xs relative`}
    >
      <Image
        src={conv.avatar || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&auto=format&fit=crop&q=80"}
        alt={conv.name}
        width={40}
        height={40}
        className="w-full h-full object-cover"
        unoptimized
      />
    </div>
  );
};

export default function MessagesPage() {
  const [conversations, setConversations] = useState(initialConversations);
  const [activeId, setActiveId] = useState(2); // Digital Agency default active
  const [inputMessage, setInputMessage] = useState("");
  const [showMobileChat, setShowMobileChat] = useState(false);

  const activeConversation =
    conversations.find((c) => c.id === activeId) || conversations[0];

  const activeMessages = activeConversation?.messages || [
    {
      id: 1,
      sender: "them",
      text: "Hello! Thank you for applying!",
      time: "Today 10:27am",
    },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "me",
      text: inputMessage.trim(),
      time: "Just now",
    };

    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              lastMessage: inputMessage.trim(),
              messages: [...(c.messages || []), newMessage],
            }
          : c
      )
    );
    setInputMessage("");
  };

  const handleSelectConversation = (conv) => {
    setActiveId(conv.id);
    setShowMobileChat(true);

    // Mark as read
    if (conv.unread > 0) {
      setConversations((prev) =>
        prev.map((c) => (c.id === conv.id ? { ...c, unread: 0 } : c))
      );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5 h-[calc(100vh-140px)] min-h-145 animate-in fade-in duration-300">
      {/* 1. Left Panel: Inbox List */}
      <div
        className={`w-full lg:w-80 xl:w-96 flex flex-col rounded-3xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800/80 shadow-xs p-5 transition-all ${
          showMobileChat ? "hidden lg:flex" : "flex"
        }`}
      >
        {/* Inbox Header */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Inbox
          </h2>
          <span className="text-xs text-secondary dark:text-gray-400 font-normal">
            Today
          </span>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto space-y-1 pr-1">
          {conversations.map((conv) => {
            const isActive = conv.id === activeId;
            return (
              <div
                key={conv.id}
                onClick={() => handleSelectConversation(conv)}
                className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-all ${
                  isActive
                    ? "bg-[#F0F4FF] dark:bg-blue-950/40"
                    : "hover:bg-[#F8FAFC] dark:hover:bg-[#111625]"
                }`}
              >
                {renderAvatar(conv, "w-10 h-10")}

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate">
                      {conv.name}
                    </h3>
                    <span className="text-[11px] text-gray-400 shrink-0 ml-1.5">
                      {conv.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-xs text-secondary dark:text-gray-400 truncate">
                      {conv.lastMessage}
                    </p>
                    {conv.unread > 0 && (
                      <span className="flex h-4 min-w-4 px-1 items-center justify-center rounded-full bg-orange-500 text-white text-[10px] font-bold shrink-0">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Right Panel: Active Chat Messages */}
      <div
        className={`flex-1 flex flex-col rounded-3xl bg-white dark:bg-[#151B2B] border border-gray-100 dark:border-gray-800/80 shadow-xs p-5 sm:p-6 transition-all ${
          showMobileChat ? "flex" : "hidden lg:flex"
        }`}
      >
        {/* Top Header */}
        <div className="pb-4 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              {/* Mobile Back Button */}
              <button
                type="button"
                onClick={() => setShowMobileChat(false)}
                className="p-1.5 -ml-1 text-gray-500 hover:text-black dark:text-gray-400 lg:hidden cursor-pointer"
                aria-label="Back to Inbox"
              >
                <FiArrowLeft className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Messages
              </h2>
            </div>
          </div>

          {/* Active Contact Bar */}
          <div className="flex items-center gap-3 pt-1">
            {renderAvatar(activeConversation, "w-11 h-11")}
            <div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                {activeConversation.name}
              </h3>
              <p className="text-xs text-secondary dark:text-gray-400">
                {activeConversation.role || "Direct Employer"}
              </p>
            </div>
          </div>
        </div>

        {/* Messages Stream Area */}
        <div className="flex-1 overflow-y-auto py-6 space-y-6 pr-1 sm:pr-2">
          {activeMessages.map((msg) => {
            const isMe = msg.sender === "me";

            return isMe ? (
              /* Outgoing User Message */
              <div key={msg.id} className="flex flex-col items-end">
                <div className="max-w-md lg:max-w-lg rounded-2xl rounded-tr-xs bg-primary dark:bg-[#1E293B] text-white p-4 shadow-2xs">
                  <p className="text-xs sm:text-sm leading-relaxed">{msg.text}</p>
                </div>
                <span className="text-[11px] text-gray-400 mt-1.5 pr-1 font-normal">
                  {msg.time}
                </span>
              </div>
            ) : (
              /* Incoming Contact Message */
              <div key={msg.id} className="flex items-start gap-3 max-w-md lg:max-w-lg">
                {renderAvatar(activeConversation, "w-8 h-8 mt-0.5")}
                <div className="flex flex-col items-start">
                  <div className="rounded-2xl rounded-tl-xs bg-[#F8FAFC] dark:bg-[#111625] border border-gray-100/90 dark:border-gray-800 text-gray-800 dark:text-gray-200 p-4 shadow-2xs">
                    <p className="text-xs sm:text-sm leading-relaxed">{msg.text}</p>
                  </div>
                  <span className="text-[11px] text-gray-400 mt-1.5 pl-1 font-normal">
                    {msg.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Input Area */}
        <form
          onSubmit={handleSendMessage}
          className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-3"
        >
          {/* Paperclip Button */}
          <button
            type="button"
            className="p-2.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer transition-colors"
            title="Attach file"
          >
            <FiPaperclip className="w-5 h-5" />
          </button>

          {/* Text Input */}
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type massage"
              className="w-full h-12 px-5 text-xs sm:text-sm rounded-2xl bg-white dark:bg-[#111625] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-hidden focus:border-brand-blue transition-all"
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary hover:bg-primary/90 text-white dark:bg-brand-blue dark:hover:bg-brand-blue-hover transition-all shadow-md cursor-pointer"
            title="Send message"
          >
            <FiSend className="w-5 h-5 -translate-x-0.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
