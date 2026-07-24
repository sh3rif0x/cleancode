"use client";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./style.module.css";

export default function Header() {
  const { t, theme, lang, toggleLang, mode, toggleMode } = useLanguage();

  const servicesMenu = t.services.items.map((item) => ({
    title: item.title,
    href: `/services#${item.id}`,
  }));

  return (
    <nav
      className={styles.nav}
      style={{ borderBottom: `1px solid ${theme.border}`, background: theme.bg }}
    >
      <h2 style={{ color: theme.accent }}>
        <Link href="/">Clean Code</Link>
      </h2>

      <div className={styles.links}>
        <Link href="/" className={styles.link} style={{ color: theme.text }}>
          {t.nav.home}
        </Link>
        <div className={styles.linkItem}>
          <Link href="/services" className={styles.link} style={{ color: theme.text }}>
            {t.nav.services}
          </Link>
          <div className={styles.dropdown} style={{ background: theme.bg2, borderColor: theme.border }}>
            {servicesMenu.map((item, index) => (
              <Link key={index} href={item.href} className={styles.dropdownLink} style={{ color: theme.text }}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <Link href="/about" className={styles.link} style={{ color: theme.text }}>
          {t.nav.about}
        </Link>
        <Link href="/projects" className={styles.link} style={{ color: theme.text }}>
          {t.nav.projects}
        </Link>
        <Link href="/blog" className={styles.link} style={{ color: theme.text }}>
          {t.nav.blog}
        </Link>
        <Link href="/contact" className={styles.link} style={{ color: theme.text }}>
          {t.nav.contact}
        </Link>

        <button
          onClick={toggleLang}
          className={styles.btn}
          style={{ borderColor: theme.border, color: theme.text }}
        >
          {lang === "ar" ? "EN" : "عربي"}
        </button>

        <button
          onClick={toggleMode}
          className={styles.btn}
          style={{ borderColor: theme.border, color: theme.text }}
        >
          {mode === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
