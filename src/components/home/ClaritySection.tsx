"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  { num: "01", text: "Guidance tailored to your needs." },
  { num: "02", text: "Clear application requirements." },
  { num: "03", text: "Support throughout the process." },
];

export function ClaritySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".clarity-heading", { y: 80, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.fromTo(".clarity-body", { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.fromTo(".clarity-value", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".clarity-values", start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 bg-canvas">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="clarity-heading text-h2 font-light leading-[1.1] tracking-tight text-primary">
              Financial Clarity
              <br />
              Starts Here.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="clarity-body text-body-lg text-secondary leading-relaxed max-w-xl">
              Every financial requirement is different. We help you understand
              available financing options, identify relevant requirements and
              navigate the next steps with greater clarity.
            </p>

            <div className="clarity-values mt-12 space-y-6">
              {values.map((value) => (
                <div key={value.num} className="clarity-value flex items-start gap-5 group py-4 border-b border-border">
                  <span className="text-orange font-light text-2xl tracking-tight shrink-0 w-10">{value.num}</span>
                  <p className="text-lg text-primary font-light leading-relaxed pt-0.5 group-hover:text-orange transition-colors duration-300">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
