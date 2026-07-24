"use client";
import { useForm, ValidationError } from "@formspree/react";
import { useLanguage } from "../../context/LanguageContext";
import { CONTACT, SOCIAL_LINKS } from "../../data/contact";
import styles from "./style.module.css";

export default function Contact() {
  const { t, theme } = useLanguage();
  const [state, handleSubmit] = useForm("xaqrpbep");

  return (
    <section id="contact" className={styles.contact}>
      <h2 style={{ color: theme.text }}>{t.contact.title}</h2>
      <p style={{ color: theme.subtext }}>{t.contact.desc}</p>

      <div className={styles.infoRow}>
        <a
          href={CONTACT.emailHref}
          className={styles.infoCard}
          style={{ background: theme.bg2, borderColor: theme.border, color: theme.text }}
        >
          <span style={{ color: theme.accent }}>{t.contact.email}</span>
          <strong>{CONTACT.email}</strong>
        </a>
        <a
          href={CONTACT.phoneHref}
          className={styles.infoCard}
          style={{ background: theme.bg2, borderColor: theme.border, color: theme.text }}
        >
          <span style={{ color: theme.accent }}>{t.contact.phoneLabel}</span>
          <strong>{CONTACT.phone}</strong>
        </a>
      </div>

      <div className={styles.socials}>
        <p style={{ color: theme.subtext }}>{t.footer.followUs}</p>
        <div className={styles.socialRow}>
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

      {state.succeeded ? (
        <div className={styles.successBox}>
          <h3 style={{ color: theme.text }}>{t.contact.successTitle}</h3>
          <p style={{ color: theme.subtext }}>{t.contact.success}</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            required
            placeholder={t.contact.name}
            className={styles.input}
            style={{ background: theme.card, borderColor: theme.border, color: theme.text }}
          />
          <input
            id="home-email"
            type="email"
            name="email"
            required
            placeholder={t.contact.email}
            className={styles.input}
            style={{ background: theme.card, borderColor: theme.border, color: theme.text }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.error} />
          <input
            type="text"
            name="subject"
            required
            placeholder={t.contact.subject}
            className={styles.input}
            style={{ background: theme.card, borderColor: theme.border, color: theme.text }}
          />
          <textarea
            id="home-message"
            name="message"
            rows={6}
            required
            placeholder={t.contact.message}
            className={styles.textarea}
            style={{ background: theme.card, borderColor: theme.border, color: theme.text }}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className={styles.error} />
          <button
            type="submit"
            disabled={state.submitting}
            className={styles.submit}
            style={{ background: theme.accent, color: theme.accentText }}
          >
            {state.submitting ? t.contact.sending : t.contact.send}
          </button>
        </form>
      )}
    </section>
  );
}
