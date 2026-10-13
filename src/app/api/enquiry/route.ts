import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { enquiries } from "@/db/schema";
import { enquirySchema } from "@/lib/validations";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid form data", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    await db.insert(enquiries).values({
      fullName: data.fullName,
      mobileNumber: data.mobileNumber,
      email: data.email || null,
      city: data.city,
      employmentCategory: data.employmentCategory,
      loanCategory: data.loanCategory,
      amount: data.amount || null,
      message: data.message || null,
      privacyAcknowledged: data.privacyAcknowledged,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { message: "Failed to submit enquiry. Please try again later." },
      { status: 500 }
    );
  }
}
