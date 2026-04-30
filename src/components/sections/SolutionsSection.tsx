"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function SolutionsSection() {
  const { t } = useLanguage();
  const problemPoints = ["solutions.problem.point.1", "solutions.problem.point.2", "solutions.problem.point.3"];
  const solutionPoints = ["solutions.solution.point.1", "solutions.solution.point.2", "solutions.solution.point.3"];
  const serviceKeys = ["solutions.service.1", "solutions.service.2", "solutions.service.3", "solutions.service.4"];

  return (
    <>
      <section className="section container section-shell split-grid">
        <article className="problem-card">
          <p className="section-kicker">{t("solutions.problemKicker")}</p>
          <h3>{t("solutions.problemTitle")}</h3>
          <ul>
            {problemPoints.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
        </article>
        <article className="solution-card">
          <p className="section-kicker">{t("solutions.solutionKicker")}</p>
          <h3>{t("solutions.solutionTitle")}</h3>
          <ul>
            {solutionPoints.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section container section-shell">
        <p className="section-kicker">{t("solutions.servicesKicker")}</p>
        <h2>{t("solutions.servicesTitle")}</h2>
        <div className="service-grid">
          {serviceKeys.map((key) => (
            <article key={key} className="service-card">
              <h3>{t(key)}</h3>
              <p>{t("solutions.service.copy")}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
