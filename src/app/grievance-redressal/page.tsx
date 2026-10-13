import type { Metadata } from "next";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "Grievance Redressal | Vendansh Financial Solutions",
  description: "Learn about the grievance redressal process at Vendansh Financial Solutions. We are committed to resolving customer concerns promptly and fairly.",
};

export default function GrievancePage() {
  return (
    <div className="pt-[72px]">
      <div className="max-w-[800px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <h1 className="text-h2 font-light leading-[1.1] tracking-tight text-primary mb-8">Grievance Redressal</h1>
        <div className="prose prose-sm max-w-none text-secondary leading-relaxed space-y-6">
          <p>At <strong className="text-primary">{businessConfig.name}</strong>, we are committed to providing excellent service. If you have any concerns, complaints, or grievances, we have established the following process to ensure they are addressed promptly and fairly.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">1. Raising a Grievance</h2>
          <p>You may raise a grievance by contacting us through any of the following channels:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Email: {businessConfig.grievanceContact || businessConfig.email || "Please use our contact form"}</li>
            <li>Contact form on our website</li>
            <li>WhatsApp (if available)</li>
          </ul>

          <h2 className="text-lg font-semibold text-primary mt-8">2. Information Required</h2>
          <p>When submitting a grievance, please provide:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Your full name and contact details</li>
            <li>A clear description of the issue</li>
            <li>Any relevant reference numbers or dates</li>
            <li>Your preferred resolution</li>
          </ul>

          <h2 className="text-lg font-semibold text-primary mt-8">3. Acknowledgement</h2>
          <p>We will acknowledge receipt of your grievance within 2 business days and provide you with a reference number for tracking purposes.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">4. Resolution Timeline</h2>
          <p>We aim to resolve grievances within 15 business days of receipt. If a resolution requires more time, we will inform you of the expected timeline and provide regular updates.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">5. Escalation</h2>
          <p>If you are not satisfied with the resolution provided, you may request escalation. Your grievance will be reviewed by a senior member of our team who will provide a final response within 10 business days.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">6. External Recourse</h2>
          <p>If your grievance remains unresolved after exhausting our internal process, you may approach the appropriate regulatory authority or consumer forum as per applicable Indian law.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">7. Record Keeping</h2>
          <p>We maintain records of all grievances and their resolutions to help us identify trends and improve our services.</p>

          <p className="text-xs text-secondary/70 pt-8 border-t border-border">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </div>
    </div>
  );
}
