import { z } from "zod";

export const enquirySchema = z.object({
  fullName: z.string().min(2, "Full name is required").max(255),
  mobileNumber: z
    .string()
    .min(10, "Valid mobile number is required")
    .max(15)
    .regex(/^[0-9+\-\s]+$/, "Invalid mobile number"),
  email: z.string().email("Valid email is required").optional().or(z.literal("")),
  city: z.string().min(1, "City is required").max(255),
  employmentCategory: z.string().min(1, "Please select employment category"),
  loanCategory: z.string().min(1, "Please select loan category"),
  amount: z.string().optional(),
  message: z.string().max(2000).optional(),
  privacyAcknowledged: z.literal(true, {
    errorMap: () => ({ message: "You must acknowledge the privacy policy" }),
  }),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

export const partnerSchema = z.object({
  fullName: z.string().min(2, "Full name is required").max(255),
  mobileNumber: z
    .string()
    .min(10, "Valid mobile number is required")
    .max(15)
    .regex(/^[0-9+\-\s]+$/, "Invalid mobile number"),
  email: z.string().email("Valid email is required").optional().or(z.literal("")),
  city: z.string().min(1, "City is required").max(255),
  profession: z.string().min(1, "Profession is required").max(255),
  companyName: z.string().max(255).optional(),
  message: z.string().max(2000).optional(),
  privacyAcknowledged: z.literal(true, {
    errorMap: () => ({ message: "You must acknowledge the privacy policy" }),
  }),
});

export type PartnerFormData = z.infer<typeof partnerSchema>;

export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required").max(255),
  mobileNumber: z
    .string()
    .min(10, "Valid mobile number is required")
    .max(15)
    .regex(/^[0-9+\-\s]+$/, "Invalid mobile number"),
  email: z.string().email("Valid email is required").optional().or(z.literal("")),
  message: z.string().min(1, "Message is required").max(2000),
  privacyAcknowledged: z.literal(true, {
    errorMap: () => ({ message: "You must acknowledge the privacy policy" }),
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
