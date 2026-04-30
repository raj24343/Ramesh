"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function AboutSection() {
  const { t } = useLanguage();
  const years = ["2021", "2022", "2023", "2025"];

  return (
    <>
      <section className="section container section-shell about-grid">
        <div className="about-photo-wrap">
          <div className="founder-photo">
            <img src="/founder.jpeg" alt="Ramesh Raj" />
          </div>
        </div>
        <div className="about-content">
          <p className="section-kicker">{t("about.kicker")}</p>
          <h2>{t("about.title")}</h2>
          <p>{t("about.body1")}</p>
          <p>{t("about.body2")}</p>
        </div>
      </section>

      <section className="section container section-shell">
        <p className="section-kicker">{t("about.journeyKicker")}</p>
        <h2>{t("about.journeyTitle")}</h2>
        <div className="timeline">
          {years.map((year, index) => (
            <article key={year} className="timeline-item">
              <span>{year}</span>
              <h3>{t(`about.milestone.${index + 1}.title`)}</h3>
              <p>{t(`about.milestone.${index + 1}.text`)}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
