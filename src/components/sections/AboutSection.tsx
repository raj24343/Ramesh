"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

export function AboutSection() {
  const { t } = useLanguage();
  const years = ["2021", "2022", "2023", "2025"];

  return (
    <>
      <section className="section container section-shell about-grid">
        <div className="about-photo-wrap">
          <div className="founder-photo">
            <Image src="/founder.jpeg" alt="Ramesh Raj" width={340} height={330} />
          </div>
        </div>
        <div className="about-content">
          <p className="section-kicker">{t("about.kicker")}</p>
          <h1>{t("Founder of RS Solutions | Bridging Custom Services & Scalable SaaS")}</h1>
          <p>{t("I am a founder, operator, and product strategist focused on building scalable technology solutions that solve real-world operational challenges. As the founder of RS Solutions, I lead a hybrid technology company that delivers both custom digital services and scalable SaaS products. My work sits at the intersection of execution and innovation, helping organizations streamline operations through tailored solutions while simultaneously building products that scale efficiently across institutions.")}</p>
          
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
