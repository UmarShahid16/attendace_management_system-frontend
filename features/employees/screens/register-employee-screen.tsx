"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas/register.schema";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const departments = ["HR", "Finance", "Marketing", "Sales", "Operations", "IT"];
const designation = ["Software Engineer", "QA Engineer", "Intern", "Business Analyst", "Project Manager", "Finance"];

export function RegisterEmployeeScreen() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: any) => {
    setLoading(true);

    try {
      const payload = {
        ...data,
        roleName: "user",
        isActive: data.isActive ?? true,
      };

      const response = await fetch(
        "https://unrollable-psychodelic-dalia.ngrok-free.dev/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      if (result?.code === "AMS_SUCCESS_00") {
        toast.success(result?.message, {
          description: "Employee Register Successfully",
        });
        reset();
        router.push('/employee')
      } else {
        toast.error(result?.message);
      }
      // if (!response.ok) throw new Error(result?.message || "Registration failed");
      // toast.success(result?.message || "Employee registered successfully");
      // reset();
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50";

  const labelClass = "text-sm font-medium text-zinc-700 dark:text-zinc-300";

  const errorText = "text-xs text-red-500 mt-1";

  return (
    <section className="mx-auto max-w-4xl space-y-8">
      {/* HEADER */}
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
          Employee Management
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          Register New Employee
        </h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Add employee details. All required fields must be completed before submission.
        </p>
      </header>

      {/* FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
      >
        {/* PERSONAL INFO */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            Personal Information
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>First Name</label>
              <input {...register("firstName")} className={inputClass} />
              {errors.firstName && <p className={errorText}>{errors.firstName.message}</p>}
            </div>

            <div>
              <label className={labelClass}>Last Name</label>
              <input {...register("lastName")} className={inputClass} />
              {errors.lastName && <p className={errorText}>{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Email</label>
              <input type="email" {...register("email")} className={inputClass} />
              {errors.email && <p className={errorText}>{errors.email.message}</p>}
            </div>

            <div>
              <label className={labelClass}>Password</label>
              <input type="password" {...register("password")} className={inputClass} />
              {errors.password && <p className={errorText}>{errors.password.message}</p>}
            </div>
          </div>

          <div>
            <label className={labelClass}>Phone</label>
            <input type="tel" {...register("phone")} className={inputClass} />
            {errors.phone && <p className={errorText}>{errors.phone.message}</p>}
          </div>

          <div>
            <label className={labelClass}>Address</label>
            <textarea rows={3} {...register("address")} className={inputClass} />
            {errors.address && <p className={errorText}>{errors.address.message}</p>}
          </div>
        </div>

        {/* WORK INFO */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            Work Information
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Department</label>
              <select {...register("departmentName")} className={inputClass}>
                <option value="">Select department</option>
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              {errors.departmentName && (
                <p className={errorText}>{errors.departmentName.message}</p>
              )}
            </div>

            <div>
              <label className={labelClass}>Designation</label>
              <select {...register("designation")} className={inputClass}>
                <option value="">Select designation</option>
                {designation.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              {errors.designation && (
                <p className={errorText}>{errors.designation.message}</p>
              )}
            </div>

            {/* <div>
              <label className={labelClass}>Designation</label>
              <input {...register("designation")} className={inputClass} />
              {errors.designation && (
                <p className={errorText}>{errors.designation.message}</p>
              )}
            </div> */}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 items-end ">
            <div className="w-full">
              <label className={labelClass}>Date of Joining</label>
              <input type="date" {...register("dateOfJoining")} className={`${inputClass} w-full`} />
              {errors.dateOfJoining && (
                <p className={errorText}>{errors.dateOfJoining.message}</p>
              )}
            </div>

            <label className="flex items-center gap-3 w-full px-4 py-3 dark:border-zinc-700 dark:bg-zinc-950 h-10.5">
              <input
                type="checkbox"
                {...register("isActive")}
                className="h-4 w-4 accent-sky-600"
              />
              <span className="text-sm text-zinc-700 dark:text-zinc-300">
                Active employee
              </span>
            </label>
          </div>
        </div>

        {/* ACTION */}
        <button
          disabled={loading || !isValid}
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Registering...
            </>
          ) : (
            "Register Employee"
          )}
        </button>
      </form>
    </section>
  );
}