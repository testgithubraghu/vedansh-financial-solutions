import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { loanServices, getServiceBySlug, serviceSlugs } from "@/lib/services";
import { ArrowUpRight, CheckCircle, FileText, ListChecks, HelpCircle } from "lucide-react";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Vendansh Financial Solutions`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return notFound();

  return (
    <>
      <section className="pt-[72px] bg-canvas">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-20">
          <nav className="flex items-center gap-2 text-sm text-secondary mb-8">
            <Link href="/services" className="hover:text-orange transition-colors">Services</Link>
            <span>/</span>
            <span className="text-primary">{service.title}</span>
          </nav>
          <h1 className="text-h1 font-light leading-[1.05] tracking-tight text-primary max-w-3xl">{service.title}</h1>
          <p className="mt-6 text-body-lg text-secondary leading-relaxed max-w-2xl">{service.description}</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-light flex items-center justify-center">
                  <CheckCircle size={18} className="text-orange" />
                </div>
                <h2 className="text-h4 font-light text-primary">Common Use Cases</h2>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-4">
                {service.useCases.map((useCase, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-orange font-light text-lg shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-primary leading-relaxed">{useCase}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-canvas">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-light flex items-center justify-center">
                  <ListChecks size={18} className="text-blue" />
                </div>
                <h2 className="text-h4 font-light text-primary">General Eligibility</h2>
              </div>
              <p className="text-sm text-secondary">Actual eligibility criteria depend on the specific lender and may vary.</p>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-4">
                {service.eligibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-orange font-light text-lg shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-primary leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center">
                  <FileText size={18} className="text-green-700" />
                </div>
                <h2 className="text-h4 font-light text-primary">Typical Documents</h2>
              </div>
              <p className="text-sm text-secondary">Document requirements may vary by lender and individual profile.</p>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-4">
                {service.documents.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-orange font-light text-lg shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-primary leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-canvas">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-h3 font-light text-primary mb-10">Application Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.steps.map((step, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-border">
                <span className="text-orange font-light text-2xl">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-sm text-primary leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-orange-light flex items-center justify-center">
              <HelpCircle size={18} className="text-orange" />
            </div>
            <h2 className="text-h3 font-light text-primary">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl space-y-0">
            {service.faqs.map((faq, i) => (
              <div key={i} className="border-b border-border py-6">
                <h3 className="text-base font-medium text-primary">{faq.question}</h3>
                <p className="mt-2 text-secondary leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-canvas">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="rounded-[32px] bg-white border border-border p-10 lg:p-16 text-center">
            <h2 className="text-h2 font-light leading-[1.1] tracking-tight text-primary">Interested in {service.title}?</h2>
            <p className="mt-4 text-secondary leading-relaxed max-w-xl mx-auto">
              Submit an enquiry and our team will discuss your requirements and guide you through the available options.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange text-white text-sm font-medium hover:bg-orange/90 transition-colors">
                Submit an Enquiry<ArrowUpRight size={16} />
              </Link>
              <Link href="/emi-calculator" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-primary text-sm font-medium hover:bg-canvas transition-colors">
                Try EMI Calculator
              </Link>
            </div>
            <p className="mt-6 text-xs text-secondary/70 max-w-lg mx-auto">
              All lending decisions are made by partner financial institutions. Terms, eligibility, and approval depend on the lender's assessment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
