"use client";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./style.module.css";

export default function Services() {
  const { t, theme } = useLanguage();

  return (
    <section id="services" className={styles.services}>
      <h2 style={{ color: theme.text }}>{t.services.title}</h2>

      <div className={styles.grid}>
        {t.services.items.map((item, i) => (
          <div
            key={i}
            className={styles.card}
            style={{ background: theme.card, border: `1px solid ${theme.border}` }}
          >
            <h3 style={{ color: theme.accent }}>{item.title}</h3>
            <p style={{ color: theme.subtext }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
