const segments = [
  { label: "Present", value: 118, percent: 92, color: "bg-emerald-500" },
  { label: "On Leave", value: 6, percent: 5, color: "bg-amber-500" },
  { label: "Absent", value: 4, percent: 3, color: "bg-rose-500" },
];

export function AttendanceBreakdown() {
  return (
    <div className="space-y-5">
      <div className="flex h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        {segments.map((seg) => (
          <div
            key={seg.label}
            className={seg.color}
            style={{ width: `${seg.percent}%` }}
            title={`${seg.label}: ${seg.percent}%`}
          />
        ))}
      </div>

      <ul className="space-y-3">
        {segments.map((seg) => (
          <li key={seg.label} className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400">
              <span className={`size-2.5 rounded-full ${seg.color}`} />
              {seg.label}
            </span>
            <span className="text-sm font-semibold tabular-nums text-slate-900 dark:text-slate-100">
              {seg.value}
              <span className="ml-1.5 text-xs font-normal text-slate-500">({seg.percent}%)</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="rounded-lg border border-slate-100 bg-slate-50/80 px-4 py-3 dark:border-slate-800 dark:bg-slate-800/40">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Today&apos;s rate</p>
        <p className="mt-1 text-2xl font-semibold text-slate-900 tabular-nums dark:text-slate-50">92.2%</p>
        <p className="mt-0.5 text-xs text-emerald-600 dark:text-emerald-400">+2.1% from yesterday</p>
      </div>
    </div>
  );
}
