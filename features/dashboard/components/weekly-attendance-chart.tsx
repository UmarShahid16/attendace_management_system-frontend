const weekData = [
  { day: "Mon", value: 94, present: 120 },
  { day: "Tue", value: 91, present: 117 },
  { day: "Wed", value: 88, present: 113 },
  { day: "Thu", value: 92, present: 118 },
  { day: "Fri", value: 86, present: 110 },
  { day: "Sat", value: 42, present: 54 },
  { day: "Sun", value: 12, present: 15 },
];

export function WeeklyAttendanceChart() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-1.5 sm:gap-2">
        {weekData.map((item) => (
          <div key={item.day} className="flex flex-1 flex-col items-center gap-2">
            <span className="text-[11px] font-medium text-slate-500 tabular-nums dark:text-slate-400">
              {item.value}%
            </span>
            <div className="flex h-28 w-full max-w-10 items-end justify-center sm:h-32">
              <div
                className="w-full max-w-9 rounded-t-md bg-linear-to-t from-blue-600 to-blue-400 shadow-sm transition-all hover:from-blue-700 hover:to-blue-500"
                style={{ height: `${item.value}%` }}
                title={`${item.present} present`}
              />
            </div>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
              {item.day}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <span>
          Weekly average:{" "}
          <strong className="font-semibold text-slate-800 dark:text-slate-200">86%</strong>
        </span>
        <span>
          Target:{" "}
          <strong className="font-semibold text-emerald-600 dark:text-emerald-400">90%</strong>
        </span>
      </div>
    </div>
  );
}
