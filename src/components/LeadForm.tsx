"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

type LeadFormData = {
  name: string;
  company: string;
  phone: string;
  message: string;
};

export function LeadForm() {
  const { t } = useLanguage();
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadForm, setLeadForm] = useState<LeadFormData>({
    name: "",
    company: "",
    phone: "",
    message: "",
  });

  const leadWebhook = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;

  const submitLead = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmittingLead(true);

    try {
      if (leadWebhook) {
        await fetch(leadWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...leadForm,
            source: "founder-brand-website",
            submittedAt: new Date().toISOString(),
          }),
        });
      } else {
        console.info("Lead form captured", leadForm);
      }
      setLeadSubmitted(true);
      setLeadForm({ name: "", company: "", phone: "", message: "" });
    } catch (error) {
      console.error("Lead submission failed", error);
    } finally {
      setIsSubmittingLead(false);
    }
  };

  return (
    <form className="lead-form" onSubmit={submitLead}>
      <input
        required
        value={leadForm.name}
        onChange={(event) => setLeadForm({ ...leadForm, name: event.target.value })}
        placeholder={t("form.name")}
      />
      <input
        required
        value={leadForm.company}
        onChange={(event) => setLeadForm({ ...leadForm, company: event.target.value })}
        placeholder={t("form.company")}
      />
      <input
        required
        value={leadForm.phone}
        onChange={(event) => setLeadForm({ ...leadForm, phone: event.target.value })}
        placeholder={t("form.phone")}
        type="tel"
      />
      <textarea
        required
        value={leadForm.message}
        onChange={(event) => setLeadForm({ ...leadForm, message: event.target.value })}
        placeholder={t("form.message")}
        rows={5}
      />
      <button className="btn btn-primary" type="submit" disabled={isSubmittingLead}>
        {isSubmittingLead ? t("form.submitting") : t("form.submit")}
      </button>
      {leadSubmitted ? <p className="success-text">{t("form.success")}</p> : null}
    </form>
  );
}
