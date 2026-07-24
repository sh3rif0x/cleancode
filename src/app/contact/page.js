"use client";
import { useForm, ValidationError } from "@formspree/react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useLanguage } from "../../context/LanguageContext";
import { CONTACT, SOCIAL_LINKS } from "../../data/contact";
import styles from "./contact.module.css";

export default function ContactPage() {
  const { t, theme, dir } = useLanguage();
  const [state, handleSubmit] = useForm("xaqrpbep");

  const infoItems = [
    {
      label: t.contact.email,
      value: CONTACT.email,
      href: CONTACT.emailHref,
    },
    {
      label: t.contact.phoneLabel,
      value: CONTACT.phone,
      href: CONTACT.phoneHref,
    },
    {
      label: t.contact.whatsapp,
      value: CONTACT.whatsapp,
      href: CONTACT.whatsappHref,
      external: true,
    },
    {
      label: t.contact.info.locationLabel,
      value: t.contact.info.address,
    },
    {
      label: t.contact.workingHours,
      value: t.contact.workingHoursValue,
    },
  ];

  const fieldStyle = {
    background: theme.card || theme.bg2,
    borderColor: theme.border,
    color: theme.text,
  };

  return (
    <div dir={dir} style={{ background: theme.bg, color: theme.text }}>
      <Header />
      <main className={styles.page}>
        <div className={styles.intro}>
          <h1 style={{ color: theme.text }}>{t.contact.title}</h1>
          <p style={{ color: theme.subtext }}>{t.contact.desc}</p>
        </div>

        <div className={styles.layout}>
          <aside className={styles.infoPanel} style={{ background: theme.bg2, borderColor: theme.border }}>
            <h2 style={{ color: theme.text }}>{t.contact.infoTitle}</h2>

            <div className={styles.infoList}>
              {infoItems.map((item) => {
                const content = (
                  <>
                    <span style={{ color: theme.accent }}>{item.label}</span>
                    <strong style={{ color: theme.text }}>{item.value}</strong>
                  </>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className={styles.infoItem}
                      style={{ borderColor: theme.border }}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className={styles.infoItem}
                    style={{ borderColor: theme.border }}
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className={styles.socialBlock}>
              <h3 style={{ color: theme.text }}>{t.footer.followUs}</h3>
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
          </aside>

          <section className={styles.formPanel} style={{ background: theme.bg2, borderColor: theme.border }}>
            {state.succeeded ? (
              <div className={styles.successBox}>
                <h2 style={{ color: theme.text }}>{t.contact.successTitle}</h2>
                <p style={{ color: theme.subtext }}>{t.contact.success}</p>
              </div>
            ) : (
              <>
                <h2 style={{ color: theme.text }}>{t.contact.formTitle}</h2>

                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <label className={styles.field}>
                      <span style={{ color: theme.subtext }}>{t.contact.name}</span>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder={t.contact.name}
                        className={styles.input}
                        style={fieldStyle}
                      />
                    </label>
                    <label className={styles.field}>
                      <span style={{ color: theme.subtext }}>{t.contact.email}</span>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder={t.contact.email}
                        className={styles.input}
                        style={fieldStyle}
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className={styles.error}
                      />
                    </label>
                  </div>

                  <div className={styles.row}>
                    <label className={styles.field}>
                      <span style={{ color: theme.subtext }}>{t.contact.phoneLabel}</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder={t.contact.phonePlaceholder}
                        className={styles.input}
                        style={fieldStyle}
                      />
                    </label>
                    <label className={styles.field}>
                      <span style={{ color: theme.subtext }}>{t.contact.subject}</span>
                      <input
                        type="text"
                        name="subject"
                        required
                        placeholder={t.contact.subject}
                        className={styles.input}
                        style={fieldStyle}
                      />
                    </label>
                  </div>

                  <label className={styles.field}>
                    <span style={{ color: theme.subtext }}>{t.contact.message}</span>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder={t.contact.message}
                      className={styles.textarea}
                      style={fieldStyle}
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className={styles.error}
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className={styles.submit}
                    style={{ background: theme.accent, color: theme.accentText }}
                  >
                    {state.submitting ? t.contact.sending : t.contact.send}
                  </button>
                </form>
              </>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
