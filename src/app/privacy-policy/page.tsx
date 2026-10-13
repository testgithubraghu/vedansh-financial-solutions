import type { Metadata } from "next";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "Privacy Policy | Vendansh Financial Solutions",
  description: "Read the privacy policy of Vendansh Financial Solutions to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-[72px]">
      <div className="max-w-[800px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <h1 className="text-h2 font-light leading-[1.1] tracking-tight text-primary mb-8">Privacy Policy</h1>
        <div className="prose prose-sm max-w-none text-secondary leading-relaxed space-y-6">
          <p><strong className="text-primary">{businessConfig.name}</strong> ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit an enquiry.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">1. Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide to us when you submit an enquiry, including but not limited to your name, mobile number, email address, city, employment details, and loan requirements.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Process and respond to your enquiries</li>
            <li>Connect you with relevant financial institutions</li>
            <li>Communicate with you about your enquiry</li>
            <li>Improve our services and website experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-lg font-semibold text-primary mt-8">3. Information Sharing</h2>
          <p>We do not sell your personal information. We may share your information with partner financial institutions solely for the purpose of processing your loan enquiry, and only with your consent. We may also disclose information when required by law.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">4. Data Security</h2>
          <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us using the information provided below.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">6. Cookies and Tracking</h2>
          <p>We may use cookies and similar technologies to enhance your browsing experience. You can manage cookie preferences through your browser settings.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">7. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We encourage you to review this page periodically for any changes.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at: {businessConfig.privacyContact || businessConfig.email || "Please use our contact form."}</p>

          <p className="text-xs text-secondary/70 pt-8 border-t border-border">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </div>
    </div>
  );
}
