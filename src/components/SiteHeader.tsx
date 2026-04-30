"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function SiteHeader() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: "/about", label: t("nav.about") },
    { href: "/product", label: t("nav.product") },
    { href: "/solutions", label: t("nav.solutions") },
    { href: "/trust", label: t("nav.trust") },
    { href: "/contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("site-theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
      return;
    }
    document.documentElement.dataset.theme = "dark";
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("site-theme", nextTheme);
  };

  return (
    <header className="sticky-nav">
      <div className="container nav-shell">
        <Link href="/" className="brand-mark">
          RR
        </Link>
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <select
            className="lang-select"
            value={language}
            aria-label={t("lang.label")}
            onChange={(event) => setLanguage(event.target.value as "en" | "te" | "hi" | "ta" | "fr")}
          >
            <option value="en">English</option>
            <option value="te">Telugu</option>
            <option value="hi">Hindi</option>
            <option value="ta">Tamil</option>
            <option value="fr">French</option>
          </select>
          <button className="mode-toggle" onClick={toggleTheme} aria-label="Toggle color mode">
            {theme === "dark" ? t("theme.light") : t("theme.dark")}
          </button>
          <Link className="btn btn-primary" href="/contact">
            {t("header.bookDemo")}
          </Link>
        </div>
      </div>
    </header>
  );
}
