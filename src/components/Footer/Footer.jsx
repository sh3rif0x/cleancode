"use client";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./style.module.css";

export default function Footer() {
  const { t, theme } = useLanguage();

  return (
    <footer
      className={styles.footer}
      style={{ background: theme.bg2, borderTop: `1px solid ${theme.border}` }}
    >
      <div className={styles.grid}>
        <div>
          <h2 style={{ color: theme.accent }}>Clean Code</h2>
          <p style={{ color: theme.subtext }}>{t.footer.about}</p>
        </div>

        <div>
          <h4 style={{ color: theme.text }}>{t.footer.links}</h4>
          <div className={styles.linkList}>
            <a href="#services" style={{ color: theme.subtext }}>{t.nav.services}</a>
            <a href="#about" style={{ color: theme.subtext }}>{t.nav.about}</a>
            <a href="#projects" style={{ color: theme.subtext }}>{t.nav.projects}</a>
            <a href="#contact" style={{ color: theme.subtext }}>{t.nav.contact}</a>
          </div>
        </div>

        <div>
          <h4 style={{ color: theme.text }}>{t.footer.servicesTitle}</h4>
          <div className={styles.linkList}>
            {t.services.items.map((s, i) => (
              <span key={i} style={{ color: theme.subtext }}>{s.title}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ color: theme.text }}>{t.footer.contactTitle}</h4>
          <div className={styles.linkList} style={{ color: theme.subtext }}>
            <span>{t.contact.info.email}</span>
            <span>{t.contact.info.phone}</span>
            <span>{t.contact.info.address}</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom} style={{ borderTop: `1px solid ${theme.border}`, color: theme.subtext }}>
        {t.footer.rights}
      </div>
    </footer>
  );
}
