import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { businessConfig, getWhatsAppLink } from "@/config/business";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Vendansh Financial Solutions",
  description: "Get in touch with Vendansh Financial Solutions. Submit an enquiry, request a callback, or reach out via WhatsApp for loan and financing guidance.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-[72px] bg-canvas">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
          <h1 className="text-h1 font-light leading-[1.05] tracking-tight text-primary max-w-3xl">
            Let's Start a <span className="text-orange font-normal">Conversation</span>.
          </h1>
          <p className="mt-6 text-body-lg text-secondary leading-relaxed max-w-2xl">
            Have a question or ready to explore your financing options? Reach out to our team and we will get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-h3 font-light text-primary mb-8">Contact Information</h2>
              <div className="space-y-6">
                {businessConfig.email && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-light flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-orange" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary">Email</p>
                      <a href={`mailto:${businessConfig.email}`} className="text-primary font-medium hover:text-orange transition-colors">{businessConfig.email}</a>
                    </div>
                  </div>
                )}
                {businessConfig.phone && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-light flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary">Phone</p>
                      <a href={`tel:${businessConfig.phone}`} className="text-primary font-medium hover:text-orange transition-colors">{businessConfig.phone}</a>
                    </div>
                  </div>
                )}
                {businessConfig.whatsappNumber && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center shrink-0">
                      <MessageCircle size={18} className="text-green-700" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary">WhatsApp</p>
                      <Link href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-orange transition-colors">Chat on WhatsApp</Link>
                    </div>
                  </div>
                )}
                {businessConfig.address && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-light flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-orange" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary">Address</p>
                      <p className="text-primary">{businessConfig.address}</p>
                    </div>
                  </div>
                )}
                {businessConfig.hours && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-light flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary">Business Hours</p>
                      <p className="text-primary">{businessConfig.hours}</p>
                    </div>
                  </div>
                )}
              </div>

              {!businessConfig.email && !businessConfig.phone && (
                <div className="mt-6 p-4 rounded-xl bg-orange-light/50 border border-orange/20">
                  <p className="text-sm text-secondary">Contact details will be updated soon. Please use the enquiry form to reach out.</p>
                </div>
              )}
            </div>

            <div className="lg:col-span-8">
              <div className="p-8 lg:p-10 rounded-[32px] bg-white border border-border">
                <h2 className="text-h4 font-light text-primary mb-6">Submit an Enquiry</h2>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
