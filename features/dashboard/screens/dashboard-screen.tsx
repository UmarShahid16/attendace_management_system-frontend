'use client'
import Link from "next/link";
import {
  CalendarCheck,
  CalendarDays,
  Clock,
  Download,
  UserPlus,
  Users,
} from "lucide-react";

import { AttendanceBreakdown } from "@/features/dashboard/components/attendance-breakdown";
import { PendingActions } from "@/features/dashboard/components/pending-actions";
import { RecentAttendanceTable } from "@/features/dashboard/components/recent-attendance-table";
import { StatCard } from "@/features/dashboard/components/stat-card";
import { WeeklyAttendanceChart } from "@/features/dashboard/components/weekly-attendance-chart";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { dashboardCount, DashboardCountData } from "@/api/dashboard";

const quickActions = [
  { label: "Attendance", href: "/attendance", icon: CalendarCheck },
  { label: "Leave Requests", href: "/leave-requests", icon: CalendarDays },
  { label: "Register", href: "/register", icon: UserPlus },
];

// const hello = async () => {
//   const get1 = await dashboardCounts()
//   console.log(get1)
// }

// useEffect(() => {
//   hello()
// }, [])

export function DashboardScreen() {
  const [dashboardCounts, setDashboardCounts] =
    useState<DashboardCountData>({
      presentToday: 0,
      totalEmployees: 0,
      onLeave: 0,
      avgWorkingHours: ''
    });
  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const getDashboardStats = async () => {
    try {
      const response = await dashboardCount();

      setDashboardCounts(
        response?.responseData?.data ?? {
          presentToday: 0,
          totalEmployees: 0,
          onLeave: 0,
        }
      );
    } catch (error) {
      console.error("Error fetching dashboard counts:", error);

      setDashboardCounts({
        presentToday: 0,
        totalEmployees: 0,
        onLeave: 0,
        avgWorkingHours: 0
      });
    }
  };

  useEffect(() => {
    getDashboardStats();
  }, []);


  return (
    <div className="space-y-6 lg:space-y-8">
      <section className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 px-5 py-6 text-white shadow-lg sm:px-8 sm:py-8">
        <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 size-48 rounded-full bg-indigo-500/15 blur-3xl" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300/90">
              HR Dashboard
            </p>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Good morning, Admin
            </h1>
            <p className="text-sm leading-relaxed text-slate-300">
              {formattedDate} — Monitor workforce attendance, leave balances, and
              daily operations from one place.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button
              asChild
              className="h-10 "
            >
              <Link href="/register">
                <UserPlus className="size-4" />
                Add Employee
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-10 border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <Download className="size-4" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="relative mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-slate-100 ring-1 ring-white/10 transition hover:bg-white/15"
            >
              <action.icon className="size-4 text-blue-300" />
              {action.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Employees"
          // value={dashboardCounts?.totalEmployees ?? 0}
          value={40}
          hint="+4 joined this month"
          icon={Users}
          accent="blue"
        />

        <StatCard
          label="Present Today"
          // value={dashboardCounts?.presentToday ?? 0}
          value={36}
          hint="92.2% attendance rate"
          icon={CalendarCheck}
          accent="emerald"
        />

        <StatCard
          label="On Leave"
          // value={dashboardCounts?.onLeave ?? 0}
          value={4}
          hint="4 requests need approval"
          icon={CalendarDays}
          accent="amber"
        />

        <StatCard
          label="Avg. Working Hours"
          // value={dashboardCounts?.avgWorkingHours ?? 0}
          value={8.5}
          hint="+12 min vs last week"
          icon={Clock}
          accent="violet"
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-5">
        <article className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-6 lg:col-span-3 dark:border-slate-800 dark:bg-slate-900/80">
          <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                Weekly Attendance Trend
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Present rate by day of week
              </p>
            </div>
            <span className="w-fit rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
              On track
            </span>
          </div>
          <WeeklyAttendanceChart />
        </article>

        <article className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-6 lg:col-span-2 dark:border-slate-800 dark:bg-slate-900/80">
          <div className="mb-5">
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50">
              Today&apos;s Breakdown
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Live attendance distribution
            </p>
          </div>
          <AttendanceBreakdown />
        </article>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentAttendanceTable />
        </div>
        <PendingActions />
      </section>
    </div>
  );
}

function statsHintPending() {
  return "4";
}
