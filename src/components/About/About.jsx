"use client";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./style.module.css";

export default function About() {
  const { t, theme } = useLanguage();

  return (
    <section id="about" className={styles.about}>
      <h2 style={{ color: theme.text }}>{t.about.title}</h2>
      <p style={{ color: theme.subtext }}>{t.about.desc}</p>
    </section>
  );
}
