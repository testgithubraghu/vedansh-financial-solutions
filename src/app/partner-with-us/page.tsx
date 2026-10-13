import type { Metadata } from "next";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { Handshake, TrendingUp, Users, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Partner With Us | Vendansh Financial Solutions",
  description: "Are you a professional or business looking to refer customers for financial products? Explore our referral partner programme with Vendansh Financial Solutions.",
};

export default function PartnerPage() {
  return (
    <>
      <section className="pt-[72px] bg-canvas">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
          <h1 className="text-h1 font-light leading-[1.05] tracking-tight text-primary max-w-3xl">
            Let's Create Opportunities <span className="text-orange font-normal">Together</span>.
          </h1>
          <p className="mt-6 text-body-lg text-secondary leading-relaxed max-w-2xl">
            Are you a professional or business looking to refer prospective customers for financial products? Explore our partner enquiry process and learn about the applicable eligibility and agreement terms.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-h3 font-light text-primary mb-10">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Handshake, title: "Structured Process", desc: "A clear and transparent partner onboarding and referral process." },
              { icon: TrendingUp, title: "Diverse Products", desc: "Refer customers across multiple loan and financing categories." },
              { icon: Users, title: "Dedicated Support", desc: "Access to a partner support team for queries and assistance." },
              { icon: FileCheck, title: "Clear Agreements", desc: "Partnership terms are documented and agreed upon transparently." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-canvas border border-border hover:border-orange/30 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-orange-light flex items-center justify-center mb-4">
                  <item.icon size={18} className="text-orange" />
                </div>
                <h3 className="text-base font-medium text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-canvas">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-h3 font-light text-primary mb-4">Submit Your Partner Enquiry</h2>
              <p className="text-secondary leading-relaxed text-sm">
                Fill in the form and our partnership team will review your details and get in touch to discuss the next steps.
              </p>
              <div className="mt-8 p-6 rounded-2xl bg-white border border-border">
                <h4 className="text-sm font-semibold text-primary mb-2">Who Can Apply?</h4>
                <ul className="space-y-2 text-sm text-secondary">
                  <li>• Chartered Accountants</li>
                  <li>• Real Estate Agents</li>
                  <li>• Financial Advisors</li>
                  <li>• Business Consultants</li>
                  <li>• Other Professionals</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="p-8 lg:p-10 rounded-[32px] bg-white border border-border">
                <PartnerForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
