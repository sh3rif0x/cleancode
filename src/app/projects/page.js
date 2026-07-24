"use client";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AnimateOnScroll from "../../components/AnimateOnScroll/AnimateOnScroll";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../page.module.css";

export default function ProjectsPage() {
  const { t, theme, dir } = useLanguage();

  return (
    <div dir={dir} className="pageEnter" style={{ background: theme.bg, color: theme.text }}>
      <Header />
      <main className={styles.pageShell}>
        <AnimateOnScroll from="up">
          <h1 className={styles.pageTitle}>{t.projects.title}</h1>
          <p className={styles.pageIntro} style={{ color: theme.subtext }}>
            {t.projects.intro}
          </p>
        </AnimateOnScroll>

        <div className={styles.cardGrid}>
          {t.projects.items.map((project, index) => (
            <AnimateOnScroll
              key={index}
              from="up"
              delay={index * 120}
              className={styles.card}
              style={{ background: theme.bg2, borderColor: theme.border }}
            >
              <h3 style={{ color: theme.accent }}>{project.title}</h3>
              <p style={{ color: theme.subtext }}>{project.desc}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
