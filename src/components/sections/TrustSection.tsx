"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { logos } from "@/components/siteData";

export function TrustSection() {
  const { t } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const trustStats = [
    { value: "50+", labelKey: "stats.1" },
    { value: "10,000+", labelKey: "stats.2" },
    { value: "99%", labelKey: "stats.3" },
  ];
  const testimonials = [
    { quoteKey: "trust.testimonial.1.quote", name: "Dr. Priya Menon", roleKey: "trust.testimonial.1.role" },
    { quoteKey: "trust.testimonial.2.quote", name: "Arun Deshpande", roleKey: "trust.testimonial.2.role" },
    { quoteKey: "trust.testimonial.3.quote", name: "Sonal Verma", roleKey: "trust.testimonial.3.role" },
  ];

  useEffect(() => {
    const slider = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(slider);
  }, []);

  const activeReview = testimonials[activeTestimonial];

  return (
    <>
      <section className="section container section-shell">
        <p className="section-kicker">{t("trust.socialKicker")}</p>
        <h2>{t("trust.socialTitle")}</h2>
        <div className="logo-row">
          {logos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
        <div className="stat-grid secondary">
          {trustStats.map((stat) => (
            <article key={stat.labelKey} className="stat-card">
              <p>{stat.value}</p>
              <span>{t(stat.labelKey)}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section container section-shell">
        <p className="section-kicker">{t("trust.testimonialsKicker")}</p>
        <h2>{t("trust.testimonialsTitle")}</h2>
        <article className="testimonial-card">
          <p>{`"${t(activeReview.quoteKey)}"`}</p>
          <h3>{activeReview.name}</h3>
          <span>{t(activeReview.roleKey)}</span>
          <div className="dots">
            {testimonials.map((review, index) => (
              <button
                key={review.name}
                onClick={() => setActiveTestimonial(index)}
                className={index === activeTestimonial ? "dot active" : "dot"}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </article>
      </section>

      <section className="section container section-shell media-card">
        <p className="section-kicker">{t("trust.mediaKicker")}</p>
        <h2>{t("trust.mediaTitle")}</h2>
        <p>{t("trust.mediaCopy")}</p>
      </section>
    </>
  );
}
