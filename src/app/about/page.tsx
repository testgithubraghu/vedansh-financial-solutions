import type { Metadata } from "next";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "About Us | Vendansh Financial Solutions",
  description: "Learn about Vendansh Financial Solutions and our mission to make financial products easier to understand through transparent communication and customer-focused guidance.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-[72px] bg-canvas">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
          <h1 className="text-h1 font-light leading-[1.05] tracking-tight text-primary max-w-3xl">
            A More Human Approach to <span className="text-orange font-normal">Finance</span>.
          </h1>
          <p className="mt-8 text-body-lg text-secondary leading-relaxed max-w-2xl">{businessConfig.description}</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-orange">Our Mission</span>
              <p className="mt-4 text-h4 font-light text-primary leading-snug">
                To make financial solutions easier to understand through transparent communication and customer-focused guidance.
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-orange">Our Vision</span>
              <p className="mt-4 text-h4 font-light text-primary leading-snug">
                To build lasting relationships by helping customers make informed financial decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-canvas">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-h2 font-light leading-[1.1] tracking-tight text-primary mb-12">
            What We Stand <span className="text-orange font-normal">For</span>.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Transparency", desc: "We believe in clear, honest communication about products, processes, and what customers can realistically expect." },
              { title: "Responsibility", desc: "We take our role in the customer journey seriously, providing accurate information and appropriate guidance." },
              { title: "Professionalism", desc: "Every interaction is handled with the professionalism and care that financial decisions deserve." },
              { title: "Confidentiality", desc: "Customer information is treated with strict confidentiality and handled in accordance with applicable requirements." },
              { title: "Customer Care", desc: "We prioritise understanding customer needs and providing guidance that is genuinely helpful." },
            ].map((value) => (
              <div key={value.title} className="p-8 rounded-[32px] bg-white border border-border hover:border-orange/30 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-medium text-primary">{value.title}</h3>
                <p className="mt-3 text-sm text-secondary leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-border">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80" alt="Professional consultation" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-h2 font-light leading-[1.1] tracking-tight text-primary">
                How We Help
                <br />
                Our <span className="text-orange font-normal">Customers</span>.
              </h2>
              <div className="mt-10 space-y-8">
                {[
                  "Help customers understand available financing options across multiple categories.",
                  "Explain documentation requirements and eligibility criteria in plain language.",
                  "Guide customers through the application process with relevant lenders.",
                  "Provide tools like our EMI calculator to support financial planning.",
                  "Maintain transparent communication throughout the customer journey.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-orange font-light text-xl shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-primary leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-canvas border-t border-border">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-sm text-secondary leading-relaxed max-w-3xl">
            <strong className="text-primary">Important:</strong> {businessConfig.name} is a financial guidance and referral service. We do not directly provide loans, nor are we a lender, bank, or NBFC. All lending decisions, interest rates, terms, and disbursements are made by our partner financial institutions subject to their policies and eligibility criteria.
          </p>
        </div>
      </section>
    </>
  );
}
