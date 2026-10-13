"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  { title: "Personalised Guidance", description: "Understand options in the context of your requirements." },
  { title: "Application Assistance", description: "Receive guidance on forms and supporting documents." },
  { title: "Informed Comparisons", description: "Where options are available, understand applicable fees, rates, and repayment conditions." },
  { title: "Responsive Communication", description: "Understand the next steps and receive updates as appropriate." },
  { title: "Privacy-Conscious Service", description: "Personal information should be handled according to the published privacy policy and applicable requirements." },
];

export function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".why-heading", { y: 80, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.fromTo(".why-item", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".why-list", start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 bg-surface">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 className="why-heading text-h2 font-light leading-[1.1] tracking-tight text-primary">
                Clarity at
                <br />
                Every <span className="text-orange font-normal">Step</span>.
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="why-list space-y-0">
              {principles.map((principle, i) => (
                <div key={principle.title} className="why-item group py-8 border-t border-border first:border-t-0">
                  <div className="flex items-start gap-6 lg:gap-10">
                    <span className="text-orange/40 font-light text-3xl lg:text-4xl tracking-tight shrink-0 w-12 lg:w-16 group-hover:text-orange transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-h4 font-light text-primary group-hover:text-orange transition-colors duration-300">{principle.title}</h3>
                      <p className="mt-2 text-secondary leading-relaxed max-w-lg">{principle.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
