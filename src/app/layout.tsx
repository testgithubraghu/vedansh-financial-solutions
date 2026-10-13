import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  title: "Vendansh Financial Solutions | Loan and Finance Guidance",
  description:
    "Explore loan and financing options with Vendansh Financial Solutions. Get guidance on available products, application requirements and repayment planning.",
  keywords: [
    "personal loan",
    "business loan",
    "home loan",
    "loan against property",
    "car loan",
    "education loan",
    "financial solutions",
    "loan guidance",
    "EMI calculator",
    "India",
  ],
  openGraph: {
    title: "Vendansh Financial Solutions | Loan and Finance Guidance",
    description:
      "Explore loan and financing options with Vendansh Financial Solutions. Get guidance on available products, application requirements and repayment planning.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendansh Financial Solutions | Loan and Finance Guidance",
    description:
      "Explore loan and financing options with Vendansh Financial Solutions. Get guidance on available products, application requirements and repayment planning.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
