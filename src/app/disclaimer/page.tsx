import type { Metadata } from "next";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "Disclaimer | Vendansh Financial Solutions",
  description: "Read the financial services disclaimer for Vendansh Financial Solutions. Understand the nature of our guidance and referral services.",
};

export default function DisclaimerPage() {
  return (
    <div className="pt-[72px]">
      <div className="max-w-[800px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <h1 className="text-h2 font-light leading-[1.1] tracking-tight text-primary mb-8">Financial Services Disclaimer</h1>
        <div className="prose prose-sm max-w-none text-secondary leading-relaxed space-y-6">
          <div className="p-6 rounded-2xl bg-orange-light/50 border border-orange/20">
            <p className="text-primary font-medium">Please read this disclaimer carefully before using our services or submitting an enquiry.</p>
          </div>

          <h2 className="text-lg font-semibold text-primary mt-8">1. Nature of Our Service</h2>
          <p><strong className="text-primary">{businessConfig.name}</strong> operates as a financial guidance and referral service provider. We are not a lender, bank, non-banking financial company (NBFC), or any other regulated financial institution. We do not directly provide loans, credit, or financial products.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">2. No Guarantee of Approval</h2>
          <p>We do not guarantee loan approval, specific interest rates, loan amounts, or disbursement timelines. All lending decisions are made solely by the partner financial institutions based on their internal policies, eligibility criteria, and risk assessment.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">3. Information Accuracy</h2>
          <p>The information provided on this website is for general informational and educational purposes only. While we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the information.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">4. Not Financial Advice</h2>
          <p>Nothing on this website constitutes professional financial advice. The content should not be construed as a recommendation to apply for any specific financial product. You should seek independent professional advice before making any financial decision.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">5. EMI Calculator</h2>
          <p>The EMI calculator provided on this website produces indicative estimates only. Actual EMI amounts, interest calculations, and total repayment figures may differ based on the lender's specific calculation methodology, fees, charges, and other terms.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">6. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We have no control over the content, privacy policies, or practices of any third-party websites and assume no responsibility for them.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">7. Limitation of Liability</h2>
          <p>In no event shall {businessConfig.name} be liable for any loss or damage arising out of or in connection with the use of our website or services, including but not limited to decisions made based on information obtained through our platform.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">8. Contact</h2>
          <p>If you have any questions about this disclaimer, please contact us through the contact form on our website.</p>

          <p className="text-xs text-secondary/70 pt-8 border-t border-border">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </div>
    </div>
  );
}
