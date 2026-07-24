"use client";
import { useLanguage } from "../../context/LanguageContext";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";
import styles from "./style.module.css";

const SERVICE_ICONS = {
  development: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  apps: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22a8 8 0 0 0 8-8V9a8 8 0 1 0-16 0v5a8 8 0 0 0 8 8z" />
      <path d="M4 13H2a2 2 0 0 0 2 2" />
      <path d="M20 13h2a2 2 0 0 1-2 2" />
      <path d="M15 19a3 3 0 0 1-6 0" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  ecommerce: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  integrations: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
};

export default function Services({ showTitle = true }) {
  const { t, theme } = useLanguage();

  return (
    <section id="services" className={`${styles.services}${showTitle ? "" : ` ${styles.embedded}`}`}>
      {showTitle ? (
        <AnimateOnScroll as="h2" from="up" style={{ color: theme.text }}>
          {t.services.title}
        </AnimateOnScroll>
      ) : null}

      <div className={styles.grid}>
        {t.services.items.map((item, i) => (
          <AnimateOnScroll
            key={item.id}
            id={item.id}
            from={i % 2 === 0 ? "left" : "right"}
            delay={(i % 3) * 100}
            className={styles.card}
            style={{ background: theme.card, border: `1px solid ${theme.border}` }}
          >
            <div
              className={styles.iconWrap}
              style={{
                color: theme.accent,
                background: `${theme.accent}18`,
                border: `1px solid ${theme.accent}33`,
              }}
            >
              {SERVICE_ICONS[item.id]}
            </div>
            <div className={styles.body}>
              <h3 style={{ color: theme.accent }}>{item.title}</h3>
              <p style={{ color: theme.subtext }}>{item.desc}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
