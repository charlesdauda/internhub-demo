"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

type MenuKey = "login" | "signup" | null;

const menus: Record<
  "login" | "signup",
  { label: string; studentHref: string; companyHref: string }
> = {
  login: { label: "Log in", studentHref: "/login/student", companyHref: "/login/company" },
  signup: { label: "Sign up", studentHref: "/signup/student", companyHref: "/signup/company" },
};

export default function Header() {
  const [open, setOpen] = useState<MenuKey>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggle = (key: "login" | "signup") => {
    setOpen((current) => (current === key ? null : key));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4E7EC] bg-white">
      <div
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        ref={containerRef}
      >
        <Link href="/" className="text-lg font-semibold tracking-tight text-[#0B0F19]">
          InternshipHub
        </Link>

        <div className="flex items-center gap-3">
          {(["login", "signup"] as const).map((key) => {
            const menu = menus[key];
            const isOpen = open === key;
            const isPrimary = key === "signup";
            return (
              <div key={key} className="relative">
                <button
                  onClick={() => toggle(key)}
                  className={
                    isPrimary
                      ? "rounded-md bg-[#2F5FE0] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#264DBD]"
                      : "rounded-md px-4 py-2 text-sm font-medium text-[#0B0F19] transition-colors hover:text-[#2F5FE0]"
                  }
                >
                  {menu.label}
                </button>

                {isOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-[#E4E7EC] bg-white p-2 shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between px-2 pb-1">
                      <p className="text-xs font-medium uppercase tracking-widest text-[#111318]">
                        {menu.label} as
                      </p>
                      <button
                        onClick={() => setOpen(null)}
                        aria-label="Close menu"
                        className="text-[#111318] hover:text-[#0B0F19]"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <Link
                      href={menu.studentHref}
                      onClick={() => setOpen(null)}
                      className="block rounded-lg px-2 py-2 text-sm text-[#0B0F19] hover:bg-[#F5F6F8]"
                    >
                      Student
                    </Link>
                    <Link
                      href={menu.companyHref}
                      onClick={() => setOpen(null)}
                      className="block rounded-lg px-2 py-2 text-sm text-[#0B0F19] hover:bg-[#F5F6F8]"
                    >
                      Organization
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}