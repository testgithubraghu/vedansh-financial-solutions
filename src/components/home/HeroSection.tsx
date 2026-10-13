"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Phone } from "lucide-react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero-headline", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 })
        .fromTo(".hero-body", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.7")
        .fromTo(".hero-ctas", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
        .fromTo(".hero-image", { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.4 }, "-=1")
        .fromTo(".hero-stats > div", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.6");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] flex items-center pt-[72px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 xl:col-span-6">
            <h1 className="hero-headline text-h1 font-light leading-[1.05] tracking-tight text-primary" style={{ opacity: 0 }}>
              Your{" "}
              <span className="text-orange font-normal">Financial Goals</span>.
              <br />
              Our Guided
              <br />
              Solutions.
            </h1>

            <p className="hero-body mt-8 text-body-lg text-secondary leading-relaxed max-w-lg" style={{ opacity: 0 }}>
              Explore financing options for your personal needs, home ownership,
              business growth and future plans with clear, customer-focused
              guidance.
            </p>

            <div className="hero-ctas mt-10 flex flex-wrap items-center gap-4" style={{ opacity: 0 }}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange text-white text-sm font-medium hover:bg-orange/90 transition-colors"
              >
                Explore Loan Options
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-primary text-sm font-medium hover:bg-canvas transition-colors"
              >
                <Phone size={16} />
                Talk to an Advisor
              </Link>
            </div>

            <div className="hero-stats mt-14 pt-8 border-t border-border grid grid-cols-3 gap-6">
              {[
                { num: "10+", label: "Loan Products" },
                { num: "100+", label: "Bank Partners" },
                { num: "24h", label: "Response Time" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl lg:text-3xl font-light text-primary tracking-tight">{stat.num}</p>
                  <p className="mt-1 text-xs text-secondary uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-image lg:col-span-5 xl:col-span-6 relative" style={{ opacity: 0 }}>
            <div className="relative">
              <div className="aspect-[4/5] lg:aspect-[3/4] rounded-[40px] overflow-hidden bg-border">
                <img
                  src="/images/financial-advisor.webp"
                  alt="Professional financial consultation"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 lg:-left-10 bg-white rounded-2xl p-5 shadow-lg border border-border max-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-light flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D7A3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-secondary">Guided Process</p>
                    <p className="text-sm font-semibold text-primary">Step-by-step support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
