"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="footer container">
      <p>Ramesh Raj | Founder & CEO, RS Solutions</p>
      <div>
        <Link href="/about">{t("footer.about")}</Link>
        <Link href="/product">{t("footer.product")}</Link>
        <Link href="/contact">{t("footer.contact")}</Link>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          {t("footer.linkedin")}
        </a>
      </div>
    </footer>
  );
}
