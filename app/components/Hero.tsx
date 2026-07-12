"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Mode = "apply" | "hire";

const content: Record<
  Mode,
  {
    eyebrow: string;
    headline: React.ReactNode;
    subtext: string;
    ctaLabel: string;
    ctaHref: string;
    badgeTitle: string;
    badgeSubtitle: string;
  }
> = {
  apply: {
    eyebrow: "For students",
    headline: (
      <>
        Internships, <span className="text-[#2F5FE0]">tailored to your programme.</span>
      </>
    ),
    subtext:
      "Build a profile, get matched to opportunities based on what you actually study, and track every application in one place.",
    ctaLabel: "Find Opportunities",
    ctaHref: "/login/student",
    badgeTitle: "92% match",
    badgeSubtitle: "Frontend Developer Intern",
  },
  hire: {
    eyebrow: "For companies",
    headline: (
      <>
        Connect with <span className="text-[#2F5FE0]">ready students.</span>
      </>
    ),
    subtext:
      "Post internship opportunities and manage every applicant from one dashboard.",
    ctaLabel: "Find Student",
    ctaHref: "/login/company",
    badgeTitle: "1,200+ students",
    badgeSubtitle: "Ready across 40+ programmes",
  },
};

export default function Hero() {
  const [mode, setMode] = useState<Mode>("apply");
  const [shake, setShake] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const active = content[mode];

  useEffect(() => {
    if (interacted) return;
    const trigger = () => {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    };
    const initial = setTimeout(trigger, 1200);
    const interval = setInterval(trigger, 4500);
    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, [interacted]);

  const handleToggle = (next: Mode) => {
    setMode(next);
    setInteracted(true);
    setShake(false);
  };

  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-10 md:pb-16 md:pt-14">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2 md:gap-20">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div
            className={`inline-flex items-center gap-1 rounded-full border border-[#E4E7EC] bg-[#F5F6F8] p-1 ${
              shake ? "animate-shake-hint" : ""
            }`}
          >
            <button
              onClick={() => handleToggle("hire")}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                mode === "hire"
                  ? "bg-[#2F5FE0] text-white"
                  : "text-[#111318] hover:text-[#0B0F19]"
              }`}
            >
              Hire
            </button>
            <button
              onClick={() => handleToggle("apply")}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                mode === "apply"
                  ? "bg-[#2F5FE0] text-white"
                  : "text-[#111318] hover:text-[#0B0F19]"
              }`}
            >
              Apply
            </button>
          </div>

          <p className="mt-5 text-xs font-medium uppercase tracking-widest text-[#2F5FE0]">
            {active.eyebrow}
          </p>

          <h1 className="mt-2 text-4xl font-black leading-tight tracking-tight md:text-5xl">
            {active.headline}
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-[#111318]">
            {active.subtext}
          </p>

          <div className="mt-7 flex flex-wrap items-start gap-3">
            <a
              href={active.ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#2F5FE0] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#264DBD]"
            >
              {active.ctaLabel}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="relative mx-auto hidden w-full max-w-md md:ml-auto md:mr-0 md:block">
          <div className="relative aspect-4/5 w-full">
            <Image
              src="/test.png"
              alt="Student ready for their internship"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}