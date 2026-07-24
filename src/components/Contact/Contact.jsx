"use client";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./style.module.css";

export default function Contact() {
  const { t, theme } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2 style={{ color: theme.text }}>{t.contact.title}</h2>
      <p style={{ color: theme.subtext }}>{t.contact.desc}</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={t.contact.name}
          value={form.name}
          onChange={handleChange}
          className={styles.input}
          style={{ background: theme.card, borderColor: theme.border, color: theme.text }}
        />
        <input
          type="email"
          name="email"
          placeholder={t.contact.email}
          value={form.email}
          onChange={handleChange}
          className={styles.input}
          style={{ background: theme.card, borderColor: theme.border, color: theme.text }}
        />
        <textarea
          name="message"
          placeholder={t.contact.message}
          value={form.message}
          onChange={handleChange}
          className={styles.textarea}
          style={{ background: theme.card, borderColor: theme.border, color: theme.text }}
        />
        <button
          type="submit"
          className={styles.submit}
          style={{ background: theme.accent, color: theme.accentText }}
        >
          {t.contact.send}
        </button>
      </form>
    </section>
  );
}
