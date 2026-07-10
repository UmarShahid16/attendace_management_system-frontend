import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const rows = [
  {
    name: "Ayesha Khan",
    department: "Engineering",
    status: "Present",
    hours: "8h 15m",
    initials: "AK",
    statusClass: "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-950/50 dark:text-emerald-300",
  },
  {
    name: "Rohit Sharma",
    department: "Finance",
    status: "Absent",
    hours: "—",
    initials: "RS",
    statusClass: "bg-rose-50 text-rose-700 ring-rose-600/20 dark:bg-rose-950/50 dark:text-rose-300",
  },
  {
    name: "Sara Lee",
    department: "Human Resources",
    status: "Present",
    hours: "8h 05m",
    initials: "SL",
    statusClass: "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-950/50 dark:text-emerald-300",
  },
  {
    name: "David Chen",
    department: "Marketing",
    status: "On Leave",
    hours: "—",
    initials: "DC",
    statusClass: "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-950/50 dark:text-amber-300",
  },
  {
    name: "Hina Shah",
    department: "Operations",
    status: "Late",
    hours: "7h 40m",
    initials: "HS",
    statusClass: "bg-orange-50 text-orange-700 ring-orange-600/20 dark:bg-orange-950/50 dark:text-orange-300",
  },
];

function getInitialsColor(name: string) {
  const colors = [
    "bg-slate-700 text-white",
    "bg-blue-600 text-white",
    "bg-indigo-600 text-white",
    "bg-teal-600 text-white",
  ];
  return colors[name.length % colors.length];
}

export function RecentAttendanceTable() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] dark:border-slate-800 dark:bg-slate-900/80">
      <div className="flex flex-col gap-3 border-b border-slate-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 dark:border-slate-800">
        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50">
            Recent Attendance
          </h2>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{today}</p>
        </div>
        <Button variant="outline" size="sm" asChild className="h-9 shrink-0 gap-1.5">
          <Link href="/attendance">
            View all records
            <ArrowUpRight className="size-3.5" />
          </Link>
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[40rem] w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/80 text-xs font-medium uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:bg-slate-800/30 dark:text-slate-400">
              <th className="px-4 py-3 sm:px-6">Employee</th>
              <th className="px-4 py-3 sm:px-6">Department</th>
              <th className="px-4 py-3 sm:px-6">Status</th>
              <th className="px-4 py-3 text-right sm:px-6">Hours</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {rows.map((row) => (
              <tr
                key={row.name}
                className="transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/30"
              >
                <td className="px-4 py-3.5 sm:px-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                        getInitialsColor(row.name)
                      )}
                    >
                      {row.initials}
                    </span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">
                      {row.name}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3.5 text-slate-600 sm:px-6 dark:text-slate-400">
                  {row.department}
                </td>
                <td className="px-4 py-3.5 sm:px-6">
                  <span
                    className={cn(
                      "inline-flex rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset",
                      row.statusClass
                    )}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3.5 text-right font-medium tabular-nums text-slate-700 sm:px-6 dark:text-slate-300">
                  {row.hours}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
