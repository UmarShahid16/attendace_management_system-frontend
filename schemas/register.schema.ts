import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  phone: z.coerce.number().min(1, "Phone is required"),
  address: z.string().min(1, "Address is required"),
  departmentName: z.string().min(1, "Department is required"),
  roleName: z.string().optional(),
  designation: z.string().min(1, "Designation is required"),
  dateOfJoining: z.string().min(1, "Date of joining is required"),
  isActive: z.boolean().optional(),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
