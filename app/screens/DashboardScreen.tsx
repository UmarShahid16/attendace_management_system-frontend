export default function DashboardScreen() {
  return (
    <section className="space-y-8">
            <div id="overview" className="space-y-3">
              <h1 className="text-4xl font-semibold text-zinc-950 dark:text-zinc-50">Employee Attendance Dashboard</h1>
              <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
                Monitor attendance, leave balances, absent records, and daily working hours for the organization.
              </p>
            </div>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Total Employees</p>
                <p className="mt-4 text-3xl font-semibold text-zinc-950 dark:text-zinc-50">128</p>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Total Leaves Taken</p>
                <p className="mt-4 text-3xl font-semibold text-zinc-950 dark:text-zinc-50">312</p>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Remaining Leaves</p>
                <p className="mt-4 text-3xl font-semibold text-zinc-950 dark:text-zinc-50">1,024</p>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Absent Records</p>
                <p className="mt-4 text-3xl font-semibold text-zinc-950 dark:text-zinc-50">24</p>
              </div>
            </section>

            <section className="space-y-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">Daily Hours Summary</h2>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Latest daily hours for employees and attendance status.</p>
                </div>
                <div className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm shadow-black/5 dark:bg-zinc-800 dark:text-zinc-100">
                  Updated just now
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-3">
                <div className="rounded-3xl bg-white p-5 shadow-sm shadow-black/5 dark:bg-zinc-950">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Average Daily Hours</p>
                  <p className="mt-3 text-3xl font-semibold text-zinc-950 dark:text-zinc-50">8h 12m</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm shadow-black/5 dark:bg-zinc-950">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Employees Present</p>
                  <p className="mt-3 text-3xl font-semibold text-zinc-950 dark:text-zinc-50">118</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm shadow-black/5 dark:bg-zinc-950">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Employees Absent</p>
                  <p className="mt-3 text-3xl font-semibold text-zinc-950 dark:text-zinc-50">10</p>
                </div>
              </div>
            </section>

            <section id="attendance" className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm shadow-black/5 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="border-b border-zinc-200 px-6 py-5 dark:border-zinc-800">
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">Employee Attendance</h2>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Recent attendance records for all employees.</p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-zinc-200 text-left text-sm dark:divide-zinc-800">
                  <thead className="bg-zinc-50 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                    <tr>
                      <th className="px-6 py-4 font-medium">Employee</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 font-medium">Leaves Used</th>
                      <th className="px-6 py-4 font-medium">Remaining Leaves</th>
                      <th className="px-6 py-4 font-medium">Daily Hours</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
                    {[
                      { name: "Ayesha Khan", status: "Present", leaves: 3, remaining: 9, hours: "8h 15m" },
                      { name: "Rohit Sharma", status: "Absent", leaves: 1, remaining: 12, hours: "0h 0m" },
                      { name: "Sara Lee", status: "Present", leaves: 5, remaining: 7, hours: "8h 05m" },
                      { name: "David Chen", status: "On Leave", leaves: 10, remaining: 2, hours: "0h 0m" },
                    ].map((employee) => (
                      <tr key={employee.name} className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                        <td className="px-6 py-4 font-medium text-zinc-900 dark:text-zinc-100">{employee.name}</td>
                        <td className="px-6 py-4 text-zinc-600 dark:text-zinc-300">{employee.status}</td>
                        <td className="px-6 py-4 text-zinc-600 dark:text-zinc-300">{employee.leaves}</td>
                        <td className="px-6 py-4 text-zinc-600 dark:text-zinc-300">{employee.remaining}</td>
                        <td className="px-6 py-4 text-zinc-600 dark:text-zinc-300">{employee.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
    </section>
  );
}
