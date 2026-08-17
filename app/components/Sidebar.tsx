"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType } from "react";
import {
  LayoutDashboard,
  Search,
  ClipboardList,
  Heart,
  FileText,
  User,
  MessageSquare,
  Bell,
  Settings,
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  badge?: number;
};

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Find Internships", href: "/internships", icon: Search },
  { label: "My Applications", href: "/applications", icon: ClipboardList },
  { label: "Saved", href: "/saved", icon: Heart },
  { label: "My CV", href: "/cv", icon: FileText },
  { label: "Profile", href: "/profile", icon: User },
  { label: "Messages", href: "/messages", icon: MessageSquare },
  { label: "Notifications", href: "/notifications", icon: Bell },
  { label: "Settings", href: "/settings", icon: Settings },
];

const isActivePath = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
};

export const Sidebar = () => {
  const pathname = usePathname();

  const navLinkClasses = (active: boolean) =>
    `group flex items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-[14.5px] font-semibold transition-colors ${
      active ? "text-brand-blue" : "text-black hover:text-brand-blue"
    }`;

  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-72 lg:flex-col lg:border-r lg:border-border lg:bg-surface">
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-border px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="InternshipHub"
            width={190}
            height={50}
            priority
            className="h-11 w-auto object-contain"
          />
          <span className="font-extrabold text-black">Internship Hub</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-3 px-4 py-6">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = isActivePath(pathname, href);

          return (
            <Link
              key={href}
              href={href}
              className={navLinkClasses(active)}
            >
              <span className="flex items-center gap-3">
                <Icon
                  className={`h-4.5 w-4.5 ${
                    active ? "text-brand-blue" : "text-black"
                  }`}
                />

                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};