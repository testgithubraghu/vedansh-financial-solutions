"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-image", { scale: 0.92, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 1.4, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.fromTo(".about-heading", { y: 80, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.fromTo(".about-body", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
      gsap.fromTo(".about-card", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".about-cards", start: "top 85%" },
      });
      gsap.fromTo(".about-pill", { scale: 0.9, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 0.5, stagger: 0.06, ease: "back.out(1.5)",
        scrollTrigger: { trigger: ".about-pills", start: "top 90%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 bg-canvas">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="about-image aspect-[4/5] rounded-[40px] overflow-hidden bg-border">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Professional team collaboration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="about-heading text-h2 font-light leading-[1.1] tracking-tight text-primary">
              A More Human
              <br />
              Approach to <span className="text-orange font-normal">Finance</span>.
            </h2>

            <p className="about-body mt-8 text-body-lg text-secondary leading-relaxed max-w-xl">
              Vendansh Financial Solutions aims to make financial products easier
              to understand by helping customers explore available options, learn
              about documentation requirements and navigate the application process.
            </p>

            <div className="about-cards mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="about-card">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange">Mission</span>
                <p className="mt-3 text-primary leading-relaxed">
                  To make financial solutions easier to understand through transparent communication and customer-focused guidance.
                </p>
              </div>
              <div className="about-card">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange">Vision</span>
                <p className="mt-3 text-primary leading-relaxed">
                  To build lasting relationships by helping customers make informed financial decisions.
                </p>
              </div>
            </div>

            <div className="about-pills mt-12 pt-8 border-t border-border">
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary block mb-4">Core Values</span>
              <div className="flex flex-wrap gap-3">
                {["Transparency", "Responsibility", "Professionalism", "Confidentiality", "Customer Care"].map((value) => (
                  <span key={value} className="about-pill px-4 py-2 rounded-full bg-white border border-border text-sm text-primary hover:bg-orange hover:text-white hover:border-orange transition-all duration-300 cursor-default">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
