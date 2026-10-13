"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Handshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function PartnerSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".partner-card", { y: 80, opacity: 0, scale: 0.96 }, {
        y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 bg-surface">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="partner-card relative rounded-[40px] bg-primary overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 lg:p-16">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-orange/20 flex items-center justify-center mb-8">
                <Handshake size={24} className="text-orange" />
              </div>
              <h2 className="text-h2 font-light leading-[1.1] tracking-tight text-white">
                Let's Create
                <br />
                Opportunities{" "}
                <span className="text-orange font-normal">Together</span>.
              </h2>
              <p className="mt-6 text-white/60 text-body-lg leading-relaxed max-w-md">
                Are you a professional or business looking to refer prospective
                customers for financial products? Explore our partner enquiry
                process and learn about the applicable eligibility and agreement
                terms.
              </p>
              <Link
                href="/partner-with-us"
                className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange text-white text-sm font-medium hover:bg-orange/90 transition-colors"
              >
                Become a Referral Partner
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="hidden lg:flex items-center justify-center relative">
              <div className="absolute w-[300px] h-[300px] rounded-full border border-white/5" />
              <div className="absolute w-[200px] h-[200px] rounded-full border border-white/10" />
              <div className="absolute w-[100px] h-[100px] rounded-full bg-orange/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
