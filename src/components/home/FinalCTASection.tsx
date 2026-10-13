"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function FinalCTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cta-card", { y: 80, opacity: 0, scale: 0.96 }, {
        y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 bg-surface">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="cta-card relative rounded-[40px] bg-canvas border border-border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 lg:p-16 items-center">
            <div>
              <h2 className="text-h2 font-light leading-[1.1] tracking-tight text-primary">
                Your Next Financial Step
                <br />
                Starts with a{" "}
                <span className="text-orange font-normal">Conversation</span>.
              </h2>
              <p className="mt-6 text-body-lg text-secondary leading-relaxed max-w-md">
                Tell us what you are planning, and we can help you understand the available next steps.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange text-white text-sm font-medium hover:bg-orange/90 transition-colors"
                >
                  Request a Callback
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-primary text-sm font-medium hover:bg-white transition-colors"
                >
                  <Layers size={16} />
                  Explore Loan Services
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-[360px] aspect-square">
                <div className="absolute inset-0 rounded-full border border-border" />
                <div className="absolute inset-8 rounded-full border border-border" />
                <div className="absolute inset-16 rounded-full border border-border" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-orange/10 flex items-center justify-center">
                    <ArrowRight size={28} className="text-orange" />
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
