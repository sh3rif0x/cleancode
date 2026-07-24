"use client";
import { useForm, ValidationError } from "@formspree/react";
import { useLanguage } from "../../context/LanguageContext";
import { CONTACT, SOCIAL_LINKS } from "../../data/contact";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";
import styles from "./style.module.css";

export default function Contact() {
  const { t, theme } = useLanguage();
  const [state, handleSubmit] = useForm("xaqrpbep");

  return (
    <section id="contact" className={styles.contact}>
      <AnimateOnScroll as="h2" from="up" style={{ color: theme.text }}>
        {t.contact.title}
      </AnimateOnScroll>
      <AnimateOnScroll as="p" from="up" delay={80} style={{ color: theme.subtext }}>
        {t.contact.desc}
      </AnimateOnScroll>

      <div className={styles.infoRow}>
        <AnimateOnScroll
          as="a"
          href={CONTACT.emailHref}
          from="left"
          delay={100}
          className={styles.infoCard}
          style={{ background: theme.bg2, borderColor: theme.border, color: theme.text }}
        >
          <span style={{ color: theme.accent }}>{t.contact.email}</span>
          <strong>{CONTACT.email}</strong>
        </AnimateOnScroll>
        <AnimateOnScroll
          as="a"
          href={CONTACT.phoneHref}
          from="right"
          delay={180}
          className={styles.infoCard}
          style={{ background: theme.bg2, borderColor: theme.border, color: theme.text }}
        >
          <span style={{ color: theme.accent }}>{t.contact.phoneLabel}</span>
          <strong>{CONTACT.phone}</strong>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll from="up" delay={120} className={styles.socials}>
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
      </AnimateOnScroll>

      {state.succeeded ? (
        <AnimateOnScroll from="scale" className={styles.successBox}>
          <h3 style={{ color: theme.text }}>{t.contact.successTitle}</h3>
          <p style={{ color: theme.subtext }}>{t.contact.success}</p>
        </AnimateOnScroll>
      ) : (
        <AnimateOnScroll as="form" from="up" delay={160} className={styles.form} onSubmit={handleSubmit}>
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
        </AnimateOnScroll>
      )}
    </section>
  );
}
