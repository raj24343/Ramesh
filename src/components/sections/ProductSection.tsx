"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export function ProductSection() {
  const { t } = useLanguage();
  const featureKeys = ["product.feature.1", "product.feature.2", "product.feature.3", "product.feature.4", "product.feature.5"];
  const mockupKeys = ["product.mockup.1", "product.mockup.2", "product.mockup.3"];

  return (
    <section className="section container section-shell">
      <p className="section-kicker">{t("product.kicker")}</p>
      <h2>{t("product.title")}</h2>
      <p className="section-copy">{t("product.copy")}</p>
      <div className="feature-grid">
        {featureKeys.map((featureKey) => (
          <article key={featureKey} className="feature-card">
            <h3>{t(featureKey)}</h3>
            <p>{t("product.feature.copy")}</p>
          </article>
        ))}
      </div>
      <div className="mockup-grid">
        {mockupKeys.map((mockupKey) => (
          <div key={mockupKey} className="mockup">
            {t(mockupKey)}
          </div>
        ))}
      </div>
      <div className="cta-row">
        <Link className="btn btn-primary" href="/contact">
          {t("product.requestDemo")}
        </Link>
        <Link className="btn btn-secondary" href="/contact">
          {t("product.getStarted")}
        </Link>
      </div>
    </section>
  );
}
