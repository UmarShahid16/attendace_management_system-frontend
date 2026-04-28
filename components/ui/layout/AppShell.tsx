"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { DashboardSidebar } from "@/components/ui/layout/DashboardSidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

const HIDE_SIDEBAR_ROUTES = new Set(["/login", "/register"]);

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideSidebar = pathname ? HIDE_SIDEBAR_ROUTES.has(pathname) : false;

  if (hideSidebar) {
    return <>{children}</>;
  }

  return (
    <TooltipProvider delayDuration={0}>
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset className="min-h-svh overflow-x-hidden bg-amber-300-50 dark:bg-black">
          <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-zinc-200 bg-white/95 px-4 backdrop-blur supports-backdrop-filter:bg-white/80 dark:border-zinc-800 dark:bg-zinc-950/90 dark:supports-backdrop-filter:bg-zinc-950/75">
            <SidebarTrigger />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
                Admin Portal
              </p>
              <h1 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                Attendance Management
              </h1>
            </div>
          </header>

          <div className="min-h-0 flex-1 p-4 md:p-6">
            <main className="mx-auto w-full max-w-7xl rounded-[2rem] bg-white p-6 shadow-2xl shadow-black/5 ring-1 ring-black/5 dark:bg-zinc-950 dark:ring-white/10">
              {children}
            </main>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
