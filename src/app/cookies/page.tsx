import type { Metadata } from "next";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "Cookie Policy | Vendansh Financial Solutions",
  description: "Learn about how Vendansh Financial Solutions uses cookies and similar technologies on our website.",
};

export default function CookiesPage() {
  return (
    <div className="pt-[72px]">
      <div className="max-w-[800px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <h1 className="text-h2 font-light leading-[1.1] tracking-tight text-primary mb-8">Cookie Policy</h1>
        <div className="prose prose-sm max-w-none text-secondary leading-relaxed space-y-6">
          <p>This Cookie Policy explains how <strong className="text-primary">{businessConfig.name}</strong> uses cookies and similar technologies when you visit our website.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">1. What Are Cookies?</h2>
          <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">2. How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-primary">Essential cookies:</strong> Required for the website to function properly.</li>
            <li><strong className="text-primary">Performance cookies:</strong> Help us understand how visitors interact with our website.</li>
            <li><strong className="text-primary">Functionality cookies:</strong> Enable enhanced functionality and personalisation.</li>
          </ul>

          <h2 className="text-lg font-semibold text-primary mt-8">3. Managing Cookies</h2>
          <p>Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies. However, please note that disabling certain cookies may affect the functionality of our website.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">4. Third-Party Cookies</h2>
          <p>We may use third-party services that place cookies on your device. These third parties have their own privacy and cookie policies.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">5. Changes to This Policy</h2>
          <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page.</p>

          <h2 className="text-lg font-semibold text-primary mt-8">6. Contact Us</h2>
          <p>If you have any questions about our use of cookies, please contact us.</p>

          <p className="text-xs text-secondary/70 pt-8 border-t border-border">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </div>
    </div>
  );
}
