"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Audience = "student" | "company";

const SWAP_INTERVAL_MS = 5000;

const content: Record<
  Audience,
  {
    eyebrow: string;
    heading: [string, string];
    description: string;
    cta: string;
    href: string;
    image: string;
    imageAlt: string;
  }
> = {
  student: {
    eyebrow: "We help you find real opportunities",
    heading: ["Launch Your Career", "With HR Support"],
    description:
      "Build your profile, get matched with internships and entry-level roles, and get coaching from real HR experts along the way.",
    cta: "Get Started",
    href: "/signup/student",
    image: "/test.png",
    imageAlt: "Student working on a laptop",
  },
  company: {
    eyebrow: "We Help You Find Skilled Talent",
    heading: ["Hire Skilled Talent", "With HR Support"],
    description:
      "Our HR experts use a clean workflow to attract the right candidates, screen them, and deliver top talent that fits your company culture.",
    cta: "Get Started",
    href: "/signup/company",
    image: "/test.png",
    imageAlt: "Professional working on a laptop in an office",
  },
};

export default function Hero() {
  const [audience, setAudience] = useState<Audience>("student");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setAudience((prev) => (prev === "student" ? "company" : "student"));
    }, SWAP_INTERVAL_MS);
  }, []);

  useEffect(() => {
    start();
    return () => {
      stop();
    };
  }, [start, stop]);

  const data = content[audience];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-6 lg:px-10 lg:pt-10">
      <div
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        onMouseEnter={stop}
        onMouseLeave={start}
      >
        {/* Image */}
        <div
          key={`img-${audience}`}
          className="animate-fade-in-up overflow-hidden rounded-[28px]"
        >
          <Image
            src={data.image}
            alt={data.imageAlt}
            width={900}
            height={900}
            priority
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div
          key={`copy-${audience}`}
          className="animate-fade-in-up flex flex-col justify-center rounded-[28px] bg-[#12332B] px-8 py-6 sm:px-12 sm:py-8"
        >
          <div className="mb-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-[#A8F3D2]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8 1L14.5 4.8V11.2L8 15L1.5 11.2V4.8L8 1Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path
                d="M8 8L14.5 4.8M8 8L1.5 4.8M8 8V15"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
            {data.eyebrow}
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {data.heading[0]}
            <br />
            {data.heading[1]}
          </h1>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
            {data.description}
          </p>

          <Link
            href={data.href}
            className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#A8F3D2] py-3 pl-6 pr-3 text-sm font-semibold text-[#12332B] transition-colors hover:bg-[#7FE0B0]"
          >
            {data.cta}
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#12332B] text-[#A8F3D2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3 11L11 3M11 3H4M11 3V10"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}