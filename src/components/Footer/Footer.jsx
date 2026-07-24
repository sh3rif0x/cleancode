"use client";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { CONTACT, SOCIAL_LINKS } from "../../data/contact";
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
          <div className={styles.socials}>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={social.name}
                title={social.name}
                style={{ borderColor: theme.border, color: theme.text }}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ color: theme.text }}>{t.footer.links}</h4>
          <div className={styles.linkList}>
            <Link href="/services" style={{ color: theme.subtext }}>{t.nav.services}</Link>
            <Link href="/about" style={{ color: theme.subtext }}>{t.nav.about}</Link>
            <Link href="/projects" style={{ color: theme.subtext }}>{t.nav.projects}</Link>
            <Link href="/blog" style={{ color: theme.subtext }}>{t.nav.blog}</Link>
            <Link href="/contact" style={{ color: theme.subtext }}>{t.nav.contact}</Link>
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
          <div className={styles.linkList}>
            <a href={CONTACT.emailHref} style={{ color: theme.subtext }}>
              {CONTACT.email}
            </a>
            <a href={CONTACT.phoneHref} style={{ color: theme.subtext }}>
              {CONTACT.phone}
            </a>
            <span style={{ color: theme.subtext }}>{t.contact.info.address}</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom} style={{ borderTop: `1px solid ${theme.border}`, color: theme.subtext }}>
        {t.footer.rights}
      </div>
    </footer>
  );
}
