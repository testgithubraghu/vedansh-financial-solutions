import type { Metadata } from "next";
import Link from "next/link";
import { loanServices } from "@/lib/services";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Loan Services | Vendansh Financial Solutions",
  description: "Explore financing categories including personal loans, business loans, home loans, and more. Find the right path forward with Vendansh Financial Solutions.",
};

export default function ServicesPage() {
  const featured = loanServices.slice(0, 4);
  const others = loanServices.slice(4);

  return (
    <>
      <section className="pt-[72px] bg-canvas">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
          <h1 className="text-h1 font-light leading-[1.05] tracking-tight text-primary max-w-3xl">
            Find the Right Path <span className="text-orange font-normal">Forward</span>.
          </h1>
          <p className="mt-8 text-body-lg text-secondary leading-relaxed max-w-2xl">
            Explore financing categories and learn which options may suit your requirements. Each service page provides general information about the product, typical use cases, and the application process.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}
                className="group block rounded-[32px] bg-canvas border border-border hover:border-orange/30 hover:shadow-lg transition-all duration-300 p-8 lg:p-10">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-h3 font-light text-primary group-hover:text-orange transition-colors duration-300">{service.title}</h2>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-orange group-hover:border-orange transition-all duration-300 shrink-0 ml-4">
                    <ArrowUpRight size={18} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                <p className="text-secondary leading-relaxed">{service.shortDescription}</p>
                <span className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-orange">
                  Explore Service<ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-canvas">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-h3 font-light text-primary mb-10">More Financing Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}
                className="group flex items-center justify-between p-6 rounded-2xl bg-white border border-border hover:border-orange/30 hover:bg-orange-light/30 transition-all duration-300">
                <span className="text-sm font-medium text-primary group-hover:text-orange transition-colors">{service.title}</span>
                <ArrowUpRight size={16} className="text-secondary group-hover:text-orange transition-colors shrink-0 ml-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-h2 font-light leading-[1.1] tracking-tight text-primary">
            Not Sure Which Option
            <br />
            Is <span className="text-orange font-normal">Right</span> for You?
          </h2>
          <p className="mt-6 text-body-lg text-secondary leading-relaxed max-w-xl mx-auto">
            Our team can help you understand the available options based on your specific requirements.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange text-white text-sm font-medium hover:bg-orange/90 transition-colors">
            Talk to an Advisor<ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
