import type { Metadata } from "next";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "Terms & Conditions | Vendansh Financial Solutions",
  description: "Read the terms and conditions governing your use of the Vendansh Financial Solutions website and services.",
};

export default function TermsPage() {
  return (
    <div className="pt-[72px]">
      <div className="max-w-[800px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <h1 className="text-h2 font-light leading-[1.1] tracking-tight text-primary mb-8">Terms & Conditions</h1>
        <div className="prose prose-sm max-w-none text-secondary leading-relaxed space-y-6">
          <p>Welcome to {businessConfig.name}. By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">1. Nature of Service</h2>
          <p>{businessConfig.name} is a financial guidance and referral service. We do not directly provide loans, nor are we a lender, bank, or NBFC. We help customers understand available financing options and connect them with partner financial institutions.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">2. Use of Website</h2>
          <p>You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the website.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">3. Information Accuracy</h2>
          <p>While we strive to provide accurate and up-to-date information, we do not warrant that the content on our website is complete, accurate, or current. Product terms, interest rates, and eligibility criteria are subject to change by the respective lenders.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">4. No Financial Advice</h2>
          <p>The information provided on this website is for general informational purposes only and does not constitute financial advice. You should consult with a qualified financial advisor before making any financial decisions.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">5. Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and images, is the property of {businessConfig.name} or its licensors and is protected by applicable intellectual property laws.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">6. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, {businessConfig.name} shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our website or services.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">7. Governing Law</h2>
          <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">8. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms and Conditions at any time. Your continued use of the website after any changes constitutes acceptance of the revised terms.</p>

          <p className="text-xs text-secondary/70 pt-8 border-t border-border">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </div>
    </div>
  );
}
