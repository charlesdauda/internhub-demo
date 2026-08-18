import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
} from "lucide-react";

const DashboardAside = () => {
  return (
    <aside className="space-y-5">
      {/* Application Status */}
      <section className="rounded-xl border border-gray-200 bg-white p-5">
        <div className="mb-4 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg text-blue-800">
            <FileText size={17} />
          </span>

          <div>
            <h2 className="text-sm font-bold text-black">
              Application Status
            </h2>
            <p className="text-xs text-gray-500">
              Track your applications
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {/* Applied */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-sm font-medium text-gray-600">
                Applied
              </span>
            </div>

            <span className="text-sm font-bold text-black">12</span>
          </div>

          {/* Under Review */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="text-sm font-medium text-gray-600">
                Under review
              </span>
            </div>

            <span className="text-sm font-bold text-black">5</span>
          </div>

          {/* Interview */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              <span className="text-sm font-medium text-gray-600">
                Interview
              </span>
            </div>

            <span className="text-sm font-bold text-black">2</span>
          </div>

          {/* Accepted */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium text-gray-600">
                Accepted
              </span>
            </div>

            <span className="text-sm font-bold text-black">1</span>
          </div>
        </div>
      </section>

      {/* Upcoming Deadlines */}
      <section className="rounded-xl border border-gray-200 bg-white p-5">
        <div className="mb-4 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg text-blue-800">
            <CalendarDays size={17} />
          </span>

          <div>
            <h2 className="text-sm font-bold text-black">
              Upcoming Deadlines
            </h2>
            <p className="text-xs text-gray-500">
              Do not miss an opportunity
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg">
              <span className="text-[10px] font-semibold uppercase text-gray-400">
                Aug
              </span>
              <span className="text-sm font-bold text-black">
                22
              </span>
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-black">
                Software Engineering Intern
              </h3>

              <p className="mt-0.5 text-xs text-gray-500">
                Telecel Ghana
              </p>

              <div className="mt-1 flex items-center gap-1 text-[11px] font-bold text-red-800">
                <Clock3 size={12} />
                5 days left
              </div>
            </div>
          </div>

          {/* Deadline 2 */}
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg">
              <span className="text-[10px] font-semibold uppercase text-gray-400">
                Aug
              </span>
              <span className="text-sm font-bold text-black">
                27
              </span>
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-black">
                IT Support Intern
              </h3>

              <p className="mt-0.5 text-xs text-gray-500">
                Vodafone Ghana
              </p>

              <div className="mt-1 flex items-center gap-1 text-[11px] font-bold text-amber-800">
                <Clock3 size={12} />
                10 days left
              </div>
            </div>
          </div>

          {/* Deadline 3 */}
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg">
              <span className="text-[10px] font-semibold uppercase text-gray-400">
                Sep
              </span>
              <span className="text-sm font-bold text-black">
                03
              </span>
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-black">
                Data Analyst Intern
              </h3>

              <p className="mt-0.5 text-xs text-gray-500">
                MTN Ghana
              </p>

              <div className="mt-1 flex items-center gap-1 text-[11px] font-bold text-emerald-800">
                <CheckCircle2 size={12} />
                17 days left
              </div>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default DashboardAside;