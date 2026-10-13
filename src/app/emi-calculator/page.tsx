import type { Metadata } from "next";
import { EMICalculatorSection } from "@/components/home/EMICalculatorSection";

export const metadata: Metadata = {
  title: "EMI Calculator | Vendansh Financial Solutions",
  description: "Estimate your monthly loan EMI using our interactive calculator. Plan your repayments with loan amount, interest rate, and tenure inputs.",
};

export default function EMICalculatorPage() {
  return (
    <>
      <section className="pt-[72px] bg-canvas">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
          <h1 className="text-h1 font-light leading-[1.05] tracking-tight text-primary max-w-3xl">
            Plan Your Monthly <span className="text-orange font-normal">Repayments</span>.
          </h1>
          <p className="mt-6 text-body-lg text-secondary leading-relaxed max-w-2xl">
            Use our interactive EMI calculator to estimate your monthly instalment based on loan amount, annual interest rate, and repayment period.
          </p>
        </div>
      </section>
      <EMICalculatorSection />
    </>
  );
}
