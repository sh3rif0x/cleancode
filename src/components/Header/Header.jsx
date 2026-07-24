"use client";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./style.module.css";

export default function Header() {
  const { t, theme, lang, toggleLang, mode, toggleMode } = useLanguage();

  return (
    <nav
      className={styles.nav}
      style={{ borderBottom: `1px solid ${theme.border}`, background: theme.bg }}
    >
      <h2 style={{ color: theme.accent }}>Clean Code</h2>

      <div className={styles.links}>
        <a href="#home" style={{ color: theme.text }}>{t.nav.home}</a>
        <a href="#services" style={{ color: theme.text }}>{t.nav.services}</a>
        <a href="#about" style={{ color: theme.text }}>{t.nav.about}</a>
        <a href="#projects" style={{ color: theme.text }}>{t.nav.projects}</a>
        <a href="#contact" style={{ color: theme.text }}>{t.nav.contact}</a>

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
