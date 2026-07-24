"use client";
import { useLanguage } from "../../context/LanguageContext";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";
import styles from "./style.module.css";

export default function LatestProjects() {
  const { t, theme } = useLanguage();

  return (
    <section id="projects" className={styles.projects}>
      <AnimateOnScroll as="h2" from="up" style={{ color: theme.text }}>
        {t.projects.title}
      </AnimateOnScroll>

      <div className={styles.grid}>
        {t.projects.items.map((p, i) => (
          <AnimateOnScroll
            key={i}
            from="up"
            delay={i * 120}
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
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
