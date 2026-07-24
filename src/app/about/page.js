"use client";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../page.module.css";

export default function AboutPage() {
  const { t, theme, dir } = useLanguage();

  return (
    <div dir={dir} style={{ background: theme.bg, color: theme.text }}>
      <Header />
      <main className={styles.pageShell}>
        <div>
          <h1 className={styles.pageTitle}>{t.about.title}</h1>
          <p className={styles.pageIntro} style={{ color: theme.subtext }}>
            {t.about.intro}
          </p>
        </div>

        <div className={styles.cardGrid}>
          <div className={styles.card} style={{ background: theme.bg2, borderColor: theme.border }}>
            <h3 style={{ color: theme.accent }}>{t.about.missionTitle}</h3>
            <p style={{ color: theme.subtext }}>{t.about.mission}</p>
          </div>
          <div className={styles.card} style={{ background: theme.bg2, borderColor: theme.border }}>
            <h3 style={{ color: theme.accent }}>{t.about.visionTitle}</h3>
            <p style={{ color: theme.subtext }}>{t.about.vision}</p>
          </div>
          <div className={styles.card} style={{ background: theme.bg2, borderColor: theme.border }}>
            <h3 style={{ color: theme.accent }}>{t.about.valuesTitle}</h3>
            <p style={{ color: theme.subtext }}>{t.about.values}</p>
          </div>
        </div>

        <div className={styles.sectionBox} style={{ background: theme.bg2, borderColor: theme.border }}>
          <h3 style={{ color: theme.text }}>{t.about.footerTitle}</h3>
          <p style={{ color: theme.subtext }}>{t.about.footerDesc}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
