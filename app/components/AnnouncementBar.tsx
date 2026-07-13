import { Gem, ArrowRight } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-6">
      <div className="mt-10 flex items-center justify-between gap-4 rounded-xl bg-[#1f5993] px-6 py-5 text-white sm:px-8">
        <div className="flex items-center gap-3 text-sm sm:text-base">
          <Gem size={20} className="shrink-0" />
          <p>
            <span className="font-semibold">Companies are joining InternshipHub.</span>{" "}
            <span className="hidden sm:inline">Verify your business and post your first opportunity in minutes.</span>
          </p>
        </div>
        <a
          href="#for-companies"
          className="flex shrink-0 items-center gap-1 text-sm font-medium whitespace-nowrap hover:opacity-90 sm:text-base"
        >
          Get started
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}