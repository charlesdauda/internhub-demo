"use client";

import { useEffect, useRef } from "react";
import { Target, ShieldCheck, ListChecks, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Matched to your programme",
    description: "Recommendations built around what you actually study.",
  },
  {
    icon: ShieldCheck,
    title: "Verified on both sides",
    description: "Ghana Card and Student ID for students, TIN for companies.",
  },
  {
    icon: ListChecks,
    title: "One place for every application",
    description: "Track status from pending through to accepted.",
  },
  {
    icon: LayoutDashboard,
    title: "A dashboard built for recruiters",
    description: "Review CVs and manage applicants in one place.",
  },
];

export default function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      const firstCard = el.firstElementChild as HTMLElement | null;
      const step = firstCard ? firstCard.offsetWidth + 16 : el.clientWidth * 0.8;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10;

      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="border-t border-[#E4E7EC] px-6 py-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-widest text-[#1f5993]">
            Why InternshipHub
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Built around how Ghanaian students actually search for placements.
          </h2>
        </div>


        <div
          ref={scrollRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] scrollbar-none md:mt-12 md:grid md:grid-cols-4 md:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="w-[78%] shrink-0 snap-start rounded-2xl border border-[#E4E7EC] bg-[#F5F6F8] p-4 transition-colors hover:border-[#004182]/60 sm:w-[45%] md:w-auto md:shrink md:p-5"
              >
                <Icon size={18} className="text-[#1f5993]" />
                <h3 className="mt-3 text-base font-semibold text-[#0B0F19]">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm leading-snug text-[#111318]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}