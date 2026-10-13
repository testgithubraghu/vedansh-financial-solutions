"use client";

import Link from "next/link";
import { useRef, useState, useCallback, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { calculateEMI } from "@/lib/emi";
import { formatIndianCurrency } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function EMICalculatorSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(10.5);
  const [tenure, setTenure] = useState(60);
  const [result, setResult] = useState(calculateEMI(500000, 10.5, 60));

  const updateResult = useCallback((p: number, r: number, t: number) => {
    setResult(calculateEMI(p, r, t));
  }, []);

  useEffect(() => {
    updateResult(principal, rate, tenure);
  }, [principal, rate, tenure, updateResult]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".emi-left", { y: 80, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.fromTo(".emi-right", { y: 80, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, delay: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleReset = () => {
    setPrincipal(500000);
    setRate(10.5);
    setTenure(60);
  };

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 bg-surface">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="emi-left lg:col-span-5">
            <h2 className="text-h2 font-light leading-[1.1] tracking-tight text-primary">
              Plan Your
              <br />
              Monthly <span className="text-orange font-normal">Repayments</span>.
            </h2>
            <p className="mt-6 text-body-lg text-secondary leading-relaxed">
              Estimate your monthly instalment using a loan amount, annual interest rate and repayment period.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-primary">Loan Amount</label>
                  <span className="text-sm font-semibold text-orange">{formatIndianCurrency(principal)}</span>
                </div>
                <input type="range" min={50000} max={5000000} step={50000} value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="w-full accent-orange h-1.5 bg-border rounded-full appearance-none cursor-pointer" />
                <input type="number" value={principal}
                  onChange={(e) => setPrincipal(Math.max(0, Number(e.target.value)))}
                  className="w-full mt-3 px-4 py-2.5 rounded-xl border border-border bg-canvas text-sm focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-primary">Annual Interest Rate</label>
                  <span className="text-sm font-semibold text-orange">{rate}%</span>
                </div>
                <input type="range" min={1} max={25} step={0.1} value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-orange h-1.5 bg-border rounded-full appearance-none cursor-pointer" />
                <input type="number" min={0} max={50} step={0.1} value={rate}
                  onChange={(e) => setRate(Math.max(0, Number(e.target.value)))}
                  className="w-full mt-3 px-4 py-2.5 rounded-xl border border-border bg-canvas text-sm focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-primary">Tenure (Months)</label>
                  <span className="text-sm font-semibold text-orange">{tenure} months</span>
                </div>
                <input type="range" min={6} max={360} step={6} value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full accent-orange h-1.5 bg-border rounded-full appearance-none cursor-pointer" />
                <input type="number" min={1} max={360} value={tenure}
                  onChange={(e) => setTenure(Math.max(1, Number(e.target.value)))}
                  className="w-full mt-3 px-4 py-2.5 rounded-xl border border-border bg-canvas text-sm focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange" />
              </div>

              <button onClick={handleReset} className="text-sm text-secondary hover:text-orange transition-colors underline underline-offset-4">
                Reset calculator
              </button>
            </div>
          </div>

          <div className="emi-right lg:col-span-7">
            <div className="bg-canvas rounded-[32px] p-8 lg:p-12 h-full flex flex-col">
              <div className="text-center pb-10 border-b border-border">
                <p className="text-sm text-secondary uppercase tracking-wider font-medium">Estimated Monthly EMI</p>
                <p className="mt-3 text-display font-light text-primary tracking-tight">{formatIndianCurrency(result.emi)}</p>
                <p className="mt-2 text-sm text-secondary">
                  per month for {Math.floor(tenure / 12)} years {tenure % 12 > 0 ? `${tenure % 12} months` : ""}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-10">
                <div className="text-center">
                  <p className="text-xs text-secondary uppercase tracking-wider">Principal</p>
                  <p className="mt-2 text-xl font-medium text-primary">{formatIndianCurrency(result.totalPrincipal)}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-secondary uppercase tracking-wider">Total Interest</p>
                  <p className="mt-2 text-xl font-medium text-primary">{formatIndianCurrency(result.totalInterest)}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-secondary uppercase tracking-wider">Total Repayment</p>
                  <p className="mt-2 text-xl font-medium text-primary">{formatIndianCurrency(result.totalRepayment)}</p>
                </div>
              </div>

              <div className="mt-auto">
                <div className="h-3 rounded-full bg-border overflow-hidden flex">
                  <div className="h-full bg-orange transition-all duration-500"
                    style={{ width: `${result.totalRepayment > 0 ? (result.totalPrincipal / result.totalRepayment) * 100 : 0}%` }} />
                  <div className="h-full bg-blue transition-all duration-500"
                    style={{ width: `${result.totalRepayment > 0 ? (result.totalInterest / result.totalRepayment) * 100 : 0}%` }} />
                </div>
                <div className="flex items-center justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange" />
                    <span className="text-xs text-secondary">Principal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue" />
                    <span className="text-xs text-secondary">Interest</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border text-center">
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange text-white text-sm font-medium hover:bg-orange/90 transition-colors">
                  Discuss Your Loan Requirement
                </Link>
                <p className="mt-4 text-xs text-secondary/70 max-w-md mx-auto">
                  Calculations are indicative and do not constitute a loan offer. Actual terms, charges, eligibility and repayments depend on the relevant lender.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
