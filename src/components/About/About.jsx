"use client";
import { useLanguage } from "../../context/LanguageContext";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";
import styles from "./style.module.css";

export default function About() {
  const { t, theme } = useLanguage();

  return (
    <section id="about" className={styles.about}>
      <AnimateOnScroll as="h2" from="up" style={{ color: theme.text }}>
        {t.about.title}
      </AnimateOnScroll>
      <AnimateOnScroll as="p" from="up" delay={120} style={{ color: theme.subtext }}>
        {t.about.desc}
      </AnimateOnScroll>
    </section>
  );
}
