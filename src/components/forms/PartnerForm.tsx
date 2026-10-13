"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { partnerSchema, type PartnerFormData } from "@/lib/validations";
import { cn } from "@/lib/utils";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PartnerFormData>({
    resolver: zodResolver(partnerSchema),
  });

  const onSubmit = async (data: PartnerFormData) => {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.message || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-green-light p-8 text-center">
        <CheckCircle size={40} className="text-green-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-primary">Enquiry Submitted</h3>
        <p className="mt-2 text-secondary text-sm">Thank you for your interest. Our partnership team will review your details and contact you shortly.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-sm text-orange font-medium hover:underline">Submit another enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-primary mb-1.5">Full Name <span className="text-red">*</span></label>
          <input {...register("fullName")} type="text" placeholder="Your full name"
            className={cn("w-full px-4 py-3 rounded-xl border bg-canvas text-sm focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all", errors.fullName ? "border-red" : "border-border focus:border-orange")} />
          {errors.fullName && <p className="mt-1 text-xs text-red">{errors.fullName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1.5">Mobile Number <span className="text-red">*</span></label>
          <input {...register("mobileNumber")} type="tel" placeholder="10-digit mobile number"
            className={cn("w-full px-4 py-3 rounded-xl border bg-canvas text-sm focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all", errors.mobileNumber ? "border-red" : "border-border focus:border-orange")} />
          {errors.mobileNumber && <p className="mt-1 text-xs text-red">{errors.mobileNumber.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-primary mb-1.5">Email</label>
          <input {...register("email")} type="email" placeholder="your@email.com"
            className={cn("w-full px-4 py-3 rounded-xl border bg-canvas text-sm focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all", errors.email ? "border-red" : "border-border focus:border-orange")} />
          {errors.email && <p className="mt-1 text-xs text-red">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1.5">City <span className="text-red">*</span></label>
          <input {...register("city")} type="text" placeholder="Your city"
            className={cn("w-full px-4 py-3 rounded-xl border bg-canvas text-sm focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all", errors.city ? "border-red" : "border-border focus:border-orange")} />
          {errors.city && <p className="mt-1 text-xs text-red">{errors.city.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-primary mb-1.5">Profession <span className="text-red">*</span></label>
          <input {...register("profession")} type="text" placeholder="e.g. Chartered Accountant, Real Estate Agent"
            className={cn("w-full px-4 py-3 rounded-xl border bg-canvas text-sm focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all", errors.profession ? "border-red" : "border-border focus:border-orange")} />
          {errors.profession && <p className="mt-1 text-xs text-red">{errors.profession.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1.5">Company Name (Optional)</label>
          <input {...register("companyName")} type="text" placeholder="Your company or firm name"
            className="w-full px-4 py-3 rounded-xl border border-border bg-canvas text-sm focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-primary mb-1.5">Message (Optional)</label>
        <textarea {...register("message")} rows={4} placeholder="Tell us about your referral network and how you would like to partner..."
          className="w-full px-4 py-3 rounded-xl border border-border bg-canvas text-sm focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all resize-none" />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input {...register("privacyAcknowledged")} type="checkbox"
            className="mt-0.5 w-4 h-4 rounded border-border text-orange focus:ring-orange" />
          <span className="text-sm text-secondary leading-relaxed">
            I acknowledge that I have read and understood the <a href="/privacy-policy" className="text-orange hover:underline">Privacy Policy</a> and consent to the processing of my personal information for the purpose of this partnership enquiry.
          </span>
        </label>
        {errors.privacyAcknowledged && <p className="mt-1 text-xs text-red">{errors.privacyAcknowledged.message}</p>}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red text-sm"><AlertCircle size={16} />{errorMsg}</div>
      )}

      <button type="submit" disabled={status === "loading"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-orange text-white text-sm font-medium hover:bg-orange/90 transition-colors disabled:opacity-60">
        {status === "loading" && <Loader2 size={16} className="animate-spin" />}
        Submit Partner Enquiry
      </button>
    </form>
  );
}
