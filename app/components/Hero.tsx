"use client";

import { useEffect, useState } from "react";
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
  }
> = {
  student: {
    eyebrow: "Find Opportunities That Match Your Field",
    heading: ["Connect With Companies", " Looking For You"],
    description:
      "Discover internships and career opportunities tailored to your programme, skills, and career goals.",
    cta: "Register Now",
    href: "/signup/student",
  },

  company: {
    eyebrow: "Find Students Who Match Your Needs",
    heading: ["The Right Students For", "The Right Opportunities"],
    description:
      "Match with talented students whose skills and academic background fit your company’s needs.",
    cta: "Get Started",
    href: "/signup/organisation",
  },
};

export default function Hero() {
  const [audience, setAudience] = useState<Audience>("student");

  useEffect(() => {
    const id = setInterval(() => {
      setAudience((prev) =>
        prev === "student" ? "company" : "student"
      );
    }, SWAP_INTERVAL_MS);

    return () => clearInterval(id);
  }, []);

  const data = content[audience];

  return (
    <section className="mx-auto max-w-3xl px-6 pb-16 pt-6 md:max-w-4xl lg:max-w-5xl lg:pt-10">
      <div
        key={audience}
        className="animate-fade-in-up flex flex-col items-center rounded-sm bg-[#0b345c] px-8 py-14 text-center sm:px-16 sm:py-16 md:rounded-none md:bg-transparent md:px-0 md:py-6"
      >
        <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#70B5F9] md:text-black">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
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

        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl md:text-[#0b345c] lg:text-7xl">
          {data.heading[0]}
          <br />
          {data.heading[1]}
        </h1>

        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70 md:max-w-lg md:text-[17px] md:text-black">
          {data.description}
        </p>

       <Link href={data.href} className="mt-8 inline-flex items-center rounded-sm bg-[#70B5F9] px-6 py-3 text-sm font-semibold text-[#0b345c] transition-all duration-200 md:bg-[#0b345c] md:px-9 md:py-4 md:text-base md:font-bold md:tracking-tight md:text-white md:shadow-lg md:shadow-[#0b345c]/25 md:hover:bg-[#173d63] md:hover:-translate-y-0.5 md:hover:shadow-xl md:hover:shadow-[#0b345c]/30"
          >
         {data.cta}
         </Link>
      </div>
    </section>
  );
}