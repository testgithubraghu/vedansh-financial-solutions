export const businessConfig = {
  name: "Vendansh Financial Solutions",
  shortName: "Vendansh",
  tagline: "Customer-focused guidance to help you explore financial solutions with greater clarity.",
  description:
    "Vendansh Financial Solutions aims to make financial products easier to understand by helping customers explore available options, learn about documentation requirements and navigate the application process.",
  domain: "vendansh.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "",
  hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS || "",
  privacyContact: process.env.NEXT_PUBLIC_PRIVACY_CONTACT || "",
  grievanceContact: process.env.NEXT_PUBLIC_GRIEVANCE_CONTACT || "",
} as const;

export const getWhatsAppLink = (message?: string) => {
  const number = businessConfig.whatsappNumber;
  if (!number) return "#";
  const base = `https://wa.me/${number}`;
  const greeting =
    message ||
    "Hello Vendansh Financial Solutions, I would like to understand the available financing options.";
  return `${base}?text=${encodeURIComponent(greeting)}`;
};
