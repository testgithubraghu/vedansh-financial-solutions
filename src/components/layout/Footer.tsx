import Link from "next/link";
import { businessConfig } from "@/config/business";
import Image from "next/image";

const footerLinks = {
  services: [
    { href: "/services/personal-loan", label: "Personal Loan" },
    { href: "/services/business-loan", label: "Business Loan" },
    { href: "/services/home-loan", label: "Home Loan" },
    { href: "/services/loan-against-property", label: "Loan Against Property" },
    { href: "/services/car-loan", label: "Car Loan" },
    { href: "/services/education-loan", label: "Education Loan" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/partner-with-us", label: "Partner With Us" },
    { href: "/contact", label: "Contact" },
    { href: "/emi-calculator", label: "EMI Calculator" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/grievance-redressal", label: "Grievance Redressal" },
    { href: "/cookies", label: "Cookie Policy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
                   <Link href="/" className="flex items-center shrink-0" aria-label="Vendansh Financial Solutions home">
               <Image
                 src="/images/footer-logo.png"
                 alt="Vendansh Financial Solutions"
                 width={180}
                 height={48}
                 priority
                 className="h-10 w-auto sm:h-12"
               />
             </Link>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {businessConfig.tagline}
            </p>
            {businessConfig.email && (
              <p className="mt-4 text-white/60 text-sm">
                <span className="text-white/40">Email:</span>{" "}
                <a href={`mailto:${businessConfig.email}`} className="hover:text-orange transition-colors">
                  {businessConfig.email}
                </a>
              </p>
            )}
            {businessConfig.phone && (
              <p className="mt-1 text-white/60 text-sm">
                <span className="text-white/40">Phone:</span>{" "}
                <a href={`tel:${businessConfig.phone}`} className="hover:text-orange transition-colors">
                  {businessConfig.phone}
                </a>
              </p>
            )}
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-5">
              Loan Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-4">
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} {businessConfig.name}. All rights reserved.
            </p>
            <p className="text-white/40 text-xs max-w-lg">
              {businessConfig.name} is a financial guidance and referral service. We do not directly
              provide loans. All lending decisions are made by our partner financial institutions
              subject to their policies and eligibility criteria.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
