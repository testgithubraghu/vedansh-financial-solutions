// import { NextRequest, NextResponse } from "next/server";
// import { db } from "@/db";
// import { partnerEnquiries } from "@/db/schema";
// import { partnerSchema } from "@/lib/validations";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const parsed = partnerSchema.safeParse(body);

//     if (!parsed.success) {
//       return NextResponse.json(
//         { message: "Invalid form data", errors: parsed.error.flatten() },
//         { status: 400 }
//       );
//     }

//     const data = parsed.data;

//     await db.insert(partnerEnquiries).values({
//       fullName: data.fullName,
//       mobileNumber: data.mobileNumber,
//       email: data.email || null,
//       city: data.city,
//       profession: data.profession,
//       companyName: data.companyName || null,
//       message: data.message || null,
//       privacyAcknowledged: data.privacyAcknowledged,
//     });

//     return NextResponse.json({ success: true }, { status: 201 });
//   } catch (error) {
//     console.error("Partner submission error:", error);
//     return NextResponse.json(
//       { message: "Failed to submit enquiry. Please try again later." },
//       { status: 500 }
//     );
//   }
// }
