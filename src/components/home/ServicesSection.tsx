"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { loanServices } from "@/lib/services";

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".services-header", { y: 80, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.fromTo(".service-featured", { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
      });
      gsap.fromTo(".service-compact", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ".services-compact", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featured = loanServices.slice(0, 3);
  const compact = loanServices.slice(3);

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 bg-surface">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="services-header max-w-2xl mb-16 lg:mb-20">
          <h2 className="text-h2 font-light leading-[1.1] tracking-tight text-primary">
            Find the Right
            <br />
            Path Forward.
          </h2>
          <p className="mt-6 text-body-lg text-secondary leading-relaxed">
            Explore financing categories and learn which options may suit your requirements.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          <div className="service-featured lg:col-span-7">
            <Link
              href={`/services/${featured[0].slug}`}
              className="group block relative rounded-[32px] overflow-hidden bg-canvas border border-border hover:border-orange/30 transition-all duration-300 h-full"
            >
              <div className="p-8 lg:p-10 flex flex-col h-full min-h-[320px] lg:min-h-[400px]">
                <div className="flex items-start justify-between mb-auto">
                  <span className="text-xs font-medium uppercase tracking-wider text-orange bg-orange-light px-3 py-1 rounded-full">Popular</span>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-orange group-hover:border-orange transition-all duration-300">
                    <ArrowUpRight size={18} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="mt-auto">
                  <h3 className="text-h3 font-light text-primary group-hover:text-orange transition-colors duration-300">{featured[0].title}</h3>
                  <p className="mt-3 text-secondary leading-relaxed max-w-md">{featured[0].shortDescription}</p>
                  <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-orange">
                    Explore Service
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5 lg:gap-6">
            {featured.slice(1, 3).map((service) => (
              <div key={service.slug} className="service-featured flex-1">
                <Link
                  href={`/services/${service.slug}`}
                  className="group block rounded-[32px] overflow-hidden bg-canvas border border-border hover:border-orange/30 transition-all duration-300 h-full"
                >
                  <div className="p-8 lg:p-10 flex flex-col h-full justify-between">
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-orange group-hover:border-orange transition-all duration-300">
                        <ArrowUpRight size={18} className="text-primary group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="mt-6">
                      <h3 className="text-h4 font-light text-primary group-hover:text-orange transition-colors duration-300">{service.title}</h3>
                      <p className="mt-2 text-sm text-secondary leading-relaxed line-clamp-2">{service.shortDescription}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="services-compact mt-6 lg:mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {compact.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-compact group flex items-center justify-between p-6 rounded-2xl bg-canvas border border-border hover:border-orange/30 hover:bg-orange-light/30 transition-all duration-300"
              >
                <span className="text-sm font-medium text-primary group-hover:text-orange transition-colors">{service.title}</span>
                <ArrowUpRight size={16} className="text-secondary group-hover:text-orange transition-colors shrink-0 ml-3" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
