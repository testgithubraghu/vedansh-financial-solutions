"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { question: "What services does Vendansh Financial Solutions offer?", answer: "We provide guidance and referral services across a range of financing categories including personal loans, business loans, home loans, loan against property, car loans, education loans, professional loans, machinery and equipment finance, working capital finance, and loan balance transfers. We help you understand available options and navigate the application process." },
  { question: "How can I submit a loan enquiry?", answer: "You can submit an enquiry through our contact form, by reaching out via WhatsApp, or by calling our team directly. We will review your requirements and discuss relevant options with you." },
  { question: "Is loan approval guaranteed?", answer: "No. Loan approval is never guaranteed. All lending decisions are made by the relevant financial institution based on their assessment of your credit profile, income, documentation, and internal policies. We help you understand requirements and prepare your application, but the final decision rests with the lender." },
  { question: "What documents might I need?", answer: "Document requirements vary by loan type and lender. Typically, you will need identity proof, address proof, income proof (salary slips, bank statements, or ITR), and loan-specific documents. Our team will guide you on the exact requirements for your chosen product." },
  { question: "How is the interest rate determined?", answer: "Interest rates are set by individual lenders based on factors including your credit score, income, loan amount, tenure, and existing relationship with the lender. We can help you understand the rate structures offered by different lenders." },
  { question: "Can I estimate my EMI before applying?", answer: "Yes. Use our EMI calculator to estimate your monthly repayment based on loan amount, interest rate, and tenure. Please note that these calculations are indicative and actual terms may vary." },
  { question: "Does submitting an enquiry guarantee disbursement?", answer: "No. Submitting an enquiry is only the first step. Disbursement depends on lender approval, successful verification of your documents, property valuation (where applicable), and compliance with the lender's terms and conditions." },
  { question: "How can I contact the team?", answer: "You can reach us through the contact form on our website, via WhatsApp, or by email. Our team aims to respond to all enquiries promptly." },
  { question: "How is my personal information handled?", answer: "Your personal information is handled in accordance with our privacy policy and applicable data protection requirements. We do not share your information with third parties without your consent, except as necessary to process your enquiry with relevant lenders." },
];

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/30 rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="text-base lg:text-lg font-medium text-primary group-hover:text-orange transition-colors duration-300">{question}</span>
        <span className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-orange group-hover:border-orange transition-all duration-300 mt-0.5">
          {isOpen ? (
            <Minus size={14} className="text-primary group-hover:text-white transition-colors" />
          ) : (
            <Plus size={14} className="text-primary group-hover:text-white transition-colors" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-secondary leading-relaxed max-w-3xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-heading", { y: 80, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.fromTo(".faq-item", { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.06, ease: "power3.out",
        scrollTrigger: { trigger: ".faq-list", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 bg-canvas">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="faq-heading max-w-2xl mb-12 lg:mb-16">
          <h2 className="text-h2 font-light leading-[1.1] tracking-tight text-primary">
            Questions Before
            <br />
            You Get <span className="text-orange font-normal">Started</span>?
          </h2>
        </div>

        <div className="faq-list max-w-3xl">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
