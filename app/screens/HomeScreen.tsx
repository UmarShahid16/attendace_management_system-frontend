import Link from "next/link";

export default function HomeScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4 py-8 dark:bg-black">
      <main className="w-full max-w-2xl rounded-[2rem] bg-white px-8 py-10 shadow-2xl shadow-black/5 ring-1 ring-black/5 dark:bg-zinc-950 dark:ring-white/10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,_0.8fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Welcome to Attendance Management
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Sign in to manage attendance, view reports, and stay connected with your team.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-zinc-50 p-8 dark:bg-zinc-900">
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Get started</p>
            <Link
              href="/login"
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
