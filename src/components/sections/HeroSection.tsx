"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export function HeroSection() {
  const { t } = useLanguage();
  const statValues = ["50+", "10,000+", "99%", "8+ Years"];

  return (
    <section className="hero container">
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <p className="pill">{t("hero.pill")}</p>
      <h1>{t("hero.title")}</h1>
      <p className="hero-copy">{t("hero.copy")}</p>
      <div className="cta-row">
        <Link className="btn btn-primary" href="/contact">
          {t("hero.bookDemo")}
        </Link>
        <Link className="btn btn-secondary" href="/product">
          {t("hero.exploreProduct")}
        </Link>
      </div>
      <div className="stat-grid">
        {statValues.map((value, index) => (
          <article key={value} className="stat-card">
            <p>{value}</p>
            <span>{t(`stats.${index + 1}`)}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
