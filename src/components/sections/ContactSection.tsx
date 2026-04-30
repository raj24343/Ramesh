"use client";

import { LeadForm } from "@/components/LeadForm";
import { useLanguage } from "@/components/LanguageProvider";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className="section container section-shell contact-shell">
      <div>
        <p className="section-kicker">{t("contact.kicker")}</p>
        <h2>{t("contact.title")}</h2>
        <p>{t("contact.copy")}</p>
        <div className="contact-links">
          <a href="mailto:founder@rssolutions.com">founder@rssolutions.com</a>
          <a href="tel:+919908864288">+91 9908864288</a>
          <a href="https://wa.me/919908864288" target="_blank" rel="noreferrer">
            {t("contact.whatsapp")}
          </a>
        </div>
      </div>
      <LeadForm />
    </section>
  );
}
