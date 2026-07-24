"use client";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../page.module.css";

export default function ServicesPage() {
  const { t, theme, dir } = useLanguage();

  return (
    <div dir={dir} className="pageEnter" style={{ background: theme.bg, color: theme.text }}>
      <Header />
      <main className={styles.pageShell}>
        <div>
          <h1 className={styles.pageTitle}>{t.services.title}</h1>
          <p className={styles.pageIntro} style={{ color: theme.subtext }}>
            {t.services.intro}
          </p>
        </div>

        <Services showTitle={false} />

        <div className={styles.sectionBox} style={{ background: theme.bg2, borderColor: theme.border }}>
          <h3 style={{ color: theme.text }}>{t.services.flowTitle}</h3>
          <p style={{ color: theme.subtext }}>{t.services.flowDesc}</p>
        </div>

        <div>
          <a href="/contact" className={styles.ctaLink} style={{ background: theme.accent, color: theme.accentText }}>
            {t.services.ctaButton}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
