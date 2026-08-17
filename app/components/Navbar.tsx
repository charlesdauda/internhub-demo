"use client";

import Image from "next/image";
import { Search, MessageCircle, Bell, ChevronDown } from "lucide-react";

type NavbarProps = {
  userName?: string;
  userRole?: string;
};

export const Navbar = ({
  userName = "Charles Dauda",
  userRole = "Student",
}: NavbarProps) => {

  const initials = userName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center gap-4 border-b border-border bg-surface/95 px-6 backdrop-blur">
      <Image
        src="/logo.png"
        alt="InternshipHub"
        width={120}
        height={32}
        className="h-8 w-auto object-contain lg:hidden"
      />

      <label className="relative hidden max-w-md flex-1 items-center sm:flex">
        <Search className="pointer-events-none absolute left-3.5 h-4.5 w-4.5 text-gray-600" />
        <input
          type="text"
          placeholder="Search internships, companies or skills..."
          className="w-90 rounded-xl border border-border bg-white py-2.5 pl-10 pr-14 text-[14px] font-medium text-brand-navy placeholder:text-gray-600 outline-none transition focus:border-brand-blue focus:bg-white"
        />
      </label>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          aria-label="Messages"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-black transition hover:border-brand-blue/40 hover:text-brand-blue"
        >
          <MessageCircle className="h-4.5 w-4.5" />
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-black transition hover:border-brand-blue/40 hover:text-brand-blue"
        >
          <Bell className="h-4.5 w-4.5" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
        </button>

        <div className="mx-1 hidden h-8 w-px bg-border sm:block" />

        <button
          type="button"
          className="flex items-center gap-2.5 rounded-full py-1 pl-1 pr-2 transition hover:bg-surface-muted"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-brand-blue to-brand-indigo text-[13px] font-bold text-white">
            {initials}
          </span>
          <span className="hidden text-left leading-tight sm:block">
            <span className="block text-[13.5px] font-bold text-brand-navy">
              {userName}
            </span>
            <span className="block text-[11.5px] font-medium text-slate-400">
              {userRole}
            </span>
          </span>
          <ChevronDown className="hidden h-4 w-4 text-slate-400 sm:block" />
        </button>
      </div>
    </header>
  );
};