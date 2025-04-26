import * as z from "zod";

export const studentSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  dob: z.string().refine(
    (val) => {
      const dob = new Date(val);
      const today = new Date();

      const age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();

      const exactAge =
        m < 0 || (m === 0 && today.getDate() < dob.getDate()) ? age - 1 : age;

      return exactAge >= 18 && exactAge <= 21;
    },
    {
      message: "Age must be between 18 and 21 years",
    }
  ),
  gender: z.enum(["male", "female"], {
    required_error: "Please select gender",
  }),
  studentClass: z.enum(["A", "B", "C"], {
    required_error: "Please select class",
  }),
  address: z.string().min(1, "Address is required"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().regex(/^\d{10}$/, "Mobile number must be 10 digits"),
});

export type StudentFormValues = z.infer<typeof studentSchema>;
