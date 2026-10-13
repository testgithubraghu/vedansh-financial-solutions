"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Share Your Requirement", description: "Submit a basic enquiry with your preferred loan category." },
  { num: "02", title: "Discuss Your Options", description: "The team reviews the information provided and discusses relevant options." },
  { num: "03", title: "Understand Eligibility", description: "Review applicable lender criteria and documentation requirements." },
  { num: "04", title: "Complete the Application", description: "Proceed with the relevant lender's process, subject to your consent." },
  { num: "05", title: "Receive the Lender's Decision", description: "The lender communicates its decision and, if approved, the applicable terms." },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".process-heading", { y: 80, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.fromTo(".process-step", { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".process-desktop", start: "top 80%" },
      });
      gsap.fromTo(".process-mobile-step", { x: -40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".process-mobile", start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 bg-canvas">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="process-heading text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-h2 font-light leading-[1.1] tracking-tight text-primary">
            A Simple Journey.
            <br />
            Clear Next <span className="text-orange font-normal">Steps</span>.
          </h2>
        </div>

        <div className="process-desktop hidden lg:block">
          <div className="relative">
            <div className="absolute top-[60px] left-[10%] right-[10%] h-px bg-border" />
            <div className="grid grid-cols-5 gap-6">
              {steps.map((step) => (
                <div key={step.num} className="process-step text-center relative">
                  <div className="w-[120px] h-[120px] mx-auto rounded-full bg-surface border border-border flex items-center justify-center mb-6 relative z-10">
                    <span className="text-3xl font-light text-orange tracking-tight">{step.num}</span>
                  </div>
                  <h3 className="text-base font-medium text-primary leading-snug">{step.title}</h3>
                  <p className="mt-2 text-sm text-secondary leading-relaxed px-2">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="process-mobile lg:hidden space-y-0 relative">
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-border" />
          {steps.map((step) => (
            <div key={step.num} className="process-mobile-step flex gap-6 py-6 relative">
              <div className="w-[54px] h-[54px] rounded-full bg-surface border border-border flex items-center justify-center shrink-0 relative z-10">
                <span className="text-xl font-light text-orange">{step.num}</span>
              </div>
              <div>
                <h3 className="text-base font-medium text-primary">{step.title}</h3>
                <p className="mt-1 text-sm text-secondary leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
