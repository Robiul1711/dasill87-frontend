"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiPaperclip, FiSend, FiCheck, FiMoreVertical } from "react-icons/fi";
import { IoSend } from "react-icons/io5";

const initialContacts = [
  {
    id: 1,
    name: "Dianne Russell",
    role: "Candidate",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    lastMessage: "Have you seen Janes new dog????????",
    time: "12:01pm",
    unread: 1,
  },
  {
    id: 2,
    name: "Theresa Webb",
    role: "Direct Employer",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
  },
  {
    id: 3,
    name: "Annette Black",
    role: "Candidate",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
  },
  {
    id: 4,
    name: "Kristin Watson",
    role: "Candidate",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
  },
  {
    id: 5,
    name: "Brooklyn Simmons",
    role: "Candidate",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
  },
  {
    id: 6,
    name: "Courtney Henry",
    role: "Candidate",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    lastMessage: "Thanks, I can't wait to see you tomorrow for coffee!",
    time: "12:01pm",
    unread: 0,
  },
  {
    id: 7,
    name: "Bessie Cooper",
    role: "Candidate",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
  },
  {
    id: 8,
    name: "Wade Warren",
    role: "Candidate",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
  },
  {
    id: 9,
    name: "Cameron Williamson",
    role: "Candidate",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
  },
  {
    id: 10,
    name: "Guy Hawkins",
    role: "Candidate",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
  },
  {
    id: 11,
    name: "Floyd Miles",
    role: "Candidate",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
  },
  {
    id: 12,
    name: "Kathryn Murphy",
    role: "Candidate",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
    lastMessage: "Hello! Thank you for applying!",
    time: "12:01pm",
    unread: 0,
  },
];

const defaultMessages = [
  {
    id: 1,
    sender: "employer",
    text: "Hello! Thank you for applying to our Senior Frontend Developer position.",
    time: "Today 10:27am",
  },
  {
    id: 2,
    sender: "candidate",
    text: "Hi! Thank you for reaching out. I'm very interested in this opportunity.",
    time: "Today 10:27am",
  },
  {
    id: 3,
    sender: "employer",
    text: "Great! We reviewed your profile and we're impressed with your experience.",
    time: "Today 10:27am",
  },
  {
    id: 4,
    sender: "employer",
    text: "We would like to schedule an interview with you.",
    time: "Today 10:27am",
  },
];

export default function MessagesView() {
  const [selectedContact, setSelectedContact] = useState(initialContacts[1]); // Theresa Webb by default
  const [messages, setMessages] = useState(defaultMessages);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: "employer",
      text: inputText.trim(),
      time: "Today " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText("");
  };

  return (
    <div className="h-[calc(100vh-140px)] min-h-[640px] flex flex-col md:flex-row gap-5 animate-in fade-in duration-300 pb-4">
      {/* -------------------------------------------------- */}
      {/* LEFT PANEL: INBOX                                  */}
      {/* -------------------------------------------------- */}
      <div className="w-full md:w-[340px] lg:w-[380px] shrink-0 bg-white dark:bg-[#151B2B] rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xs flex flex-col overflow-hidden">
        {/* Inbox Header */}
        <div className="p-5 sm:p-6 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
            Inbox
          </h2>
          <span className="text-xs font-semibold text-gray-400 dark:text-gray-400 mt-3 block">
            Today
          </span>
        </div>

        {/* Contacts Scrollable List */}
        <div className="flex-1 overflow-y-auto px-3 pb-3 space-y-1">
          {initialContacts.map((contact) => {
            const isSelected = selectedContact.id === contact.id;

            return (
              <button
                key={contact.id}
                type="button"
                onClick={() => setSelectedContact(contact)}
                className={`w-full flex items-center gap-3 p-3 rounded-2xl text-left transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-gray-100/70 dark:bg-[#1E2638]"
                    : "hover:bg-gray-50/80 dark:hover:bg-[#1A2234]/60"
                }`}
              >
                {/* Avatar */}
                <div className="relative w-11 h-11 shrink-0 rounded-full overflow-hidden ring-1 ring-gray-100 dark:ring-gray-700 bg-gray-100">
                  <Image
                    src={contact.avatar}
                    alt={contact.name}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>

                {/* Name & Preview */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate">
                      {contact.name}
                    </span>
                    <span className="text-[10px] text-gray-400 shrink-0">
                      {contact.time}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 mt-0.5">
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {contact.lastMessage}
                    </p>

                    {contact.unread > 0 && (
                      <span className="w-4.5 h-4.5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                        {contact.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* RIGHT PANEL: MESSAGES CHAT VIEW                    */}
      {/* -------------------------------------------------- */}
      <div className="flex-1 bg-[#F6F7FB] dark:bg-[#111625] rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xs flex flex-col justify-between overflow-hidden p-5 sm:p-7">
        {/* Top Header of Active Chat */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              Messages
            </h3>
          </div>

          <div className="flex items-center gap-3 pb-4 border-b border-gray-200/70 dark:border-gray-800/80">
            <div className="relative w-11 h-11 shrink-0 rounded-full overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700">
              <Image
                src={selectedContact.avatar}
                alt={selectedContact.name}
                width={44}
                height={44}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white leading-tight">
                {selectedContact.name}
              </h4>
              <p className="text-xs text-gray-400 dark:text-gray-400">
                {selectedContact.role}
              </p>
            </div>
          </div>
        </div>

        {/* Message Thread (Scrollable) */}
        <div className="flex-1 overflow-y-auto py-5 space-y-4 no-scrollbar">
          {messages.map((msg) => {
            const isEmployer = msg.sender === "employer";

            return isEmployer ? (
              /* Message sent by Company / Employer (Right Side) */
              <div key={msg.id} className="flex items-start justify-end gap-3 max-w-2xl ml-auto">
                <div className="flex flex-col items-end">
                  <div className="bg-white dark:bg-[#1A2234] rounded-2xl rounded-tr-xs p-3.5 sm:p-4 shadow-2xs text-xs sm:text-[13px] text-gray-800 dark:text-gray-100 leading-relaxed max-w-md">
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 mr-1">
                    {msg.time}
                  </span>
                </div>

                {/* Company Logo Round Avatar (Matching screenshot circular badge) */}
                <div className="w-9 h-9 shrink-0 rounded-full bg-[#1E2538] text-white flex items-center justify-center font-bold text-xs shadow-2xs border border-gray-200 dark:border-gray-700">
                  <svg
                    className="w-5 h-5 text-sky-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m14 10-2 4-2-4" />
                    <path d="M10 14h4" />
                  </svg>
                </div>
              </div>
            ) : (
              /* Message sent by Candidate (Left Side) */
              <div key={msg.id} className="flex items-start justify-start gap-3 max-w-2xl">
                {/* Candidate Avatar */}
                <div className="relative w-9 h-9 shrink-0 rounded-full overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700">
                  <Image
                    src={selectedContact.avatar}
                    alt={selectedContact.name}
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>

                <div className="flex flex-col items-start">
                  <div className="bg-[#2B354F] text-white rounded-2xl rounded-tl-xs p-3.5 sm:p-4 shadow-xs text-xs sm:text-[13px] leading-relaxed max-w-md">
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 ml-1">
                    {msg.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Message Input Bar (Matching Screenshot) */}
        <form
          onSubmit={handleSendMessage}
          className="flex items-center gap-3 pt-3"
        >
          {/* Attachment Icon */}
          <button
            type="button"
            className="p-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer transition-colors"
            title="Attach file"
          >
            <FiPaperclip className="w-5 h-5 rotate-45" />
          </button>

          {/* Text Input */}
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type message"
            className="flex-1 py-3 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2234] text-xs sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 shadow-2xs"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-11 h-11 shrink-0 rounded-xl bg-[#222B45] hover:bg-[#1A2238] text-white flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            title="Send Message"
          >
            <IoSend className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
