import { pgTable, serial, varchar, text, timestamp, integer, decimal, boolean } from "drizzle-orm/pg-core";

export const enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  mobileNumber: varchar("mobile_number", { length: 20 }).notNull(),
  email: varchar("email", { length: 255 }),
  city: varchar("city", { length: 255 }),
  employmentCategory: varchar("employment_category", { length: 100 }),
  loanCategory: varchar("loan_category", { length: 100 }),
  amount: varchar("amount", { length: 50 }),
  message: text("message"),
  privacyAcknowledged: boolean("privacy_acknowledged").notNull().default(false),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
});

export const partnerEnquiries = pgTable("partner_enquiries", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  mobileNumber: varchar("mobile_number", { length: 20 }).notNull(),
  email: varchar("email", { length: 255 }),
  city: varchar("city", { length: 255 }),
  profession: varchar("profession", { length: 255 }),
  companyName: varchar("company_name", { length: 255 }),
  message: text("message"),
  privacyAcknowledged: boolean("privacy_acknowledged").notNull().default(false),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
});
