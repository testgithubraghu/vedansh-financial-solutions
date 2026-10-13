"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const standards = [
  "Clear explanations.",
  "Respectful communication.",
  "Relevant information.",
  "Responsible handling of enquiries.",
];

export function ServiceStandardsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".standards-heading", { y: 80, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.fromTo(".standards-pill", { scale: 0.9, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 0.5, stagger: 0.08, ease: "back.out(1.5)",
        scrollTrigger: { trigger: ".standards-pills", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 bg-canvas">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="standards-heading text-h2 font-light leading-[1.1] tracking-tight text-primary">
            Service Built on{" "}
            <span className="text-orange font-normal">Clarity</span> and Care.
          </h2>

          <div className="standards-pills mt-12 flex flex-wrap justify-center gap-4">
            {standards.map((standard) => (
              <span key={standard} className="standards-pill px-6 py-3 rounded-full bg-white border border-border text-primary text-sm font-medium hover:bg-orange hover:text-white hover:border-orange transition-all duration-300 cursor-default">
                {standard}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
