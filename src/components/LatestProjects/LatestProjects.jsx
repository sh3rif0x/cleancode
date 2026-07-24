"use client";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./style.module.css";

export default function LatestProjects() {
  const { t, theme } = useLanguage();

  return (
    <section id="projects" className={styles.projects}>
      <h2 style={{ color: theme.text }}>{t.projects.title}</h2>

      <div className={styles.grid}>
        {t.projects.items.map((p, i) => (
          <div
            key={i}
            className={styles.card}
            style={{ background: theme.card, border: `1px solid ${theme.border}` }}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${p.image})` }}
            />
            <div className={styles.body}>
              <h3 style={{ color: theme.accent }}>{p.title}</h3>
              <p style={{ color: theme.subtext }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
