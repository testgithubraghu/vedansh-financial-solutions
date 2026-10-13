"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink, businessConfig } from "@/config/business";

export function WhatsAppButton() {
  if (!businessConfig.whatsappNumber) return null;

  return (
    <Link
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      <MessageCircle size={26} fill="white" className="text-white" />
    </Link>
  );
}
