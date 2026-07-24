"use client";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AnimateOnScroll from "../../components/AnimateOnScroll/AnimateOnScroll";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../page.module.css";

export default function AboutPage() {
  const { t, theme, dir } = useLanguage();

  return (
    <div dir={dir} className="pageEnter" style={{ background: theme.bg, color: theme.text }}>
      <Header />
      <main className={styles.pageShell}>
        <AnimateOnScroll from="up">
          <h1 className={styles.pageTitle}>{t.about.title}</h1>
          <p className={styles.pageIntro} style={{ color: theme.subtext }}>
            {t.about.intro}
          </p>
        </AnimateOnScroll>

        <div className={styles.cardGrid}>
          {[
            { title: t.about.missionTitle, desc: t.about.mission },
            { title: t.about.visionTitle, desc: t.about.vision },
            { title: t.about.valuesTitle, desc: t.about.values },
          ].map((card, i) => (
            <AnimateOnScroll
              key={card.title}
              from={i === 1 ? "up" : i === 0 ? "left" : "right"}
              delay={i * 100}
              className={styles.card}
              style={{ background: theme.bg2, borderColor: theme.border }}
            >
              <h3 style={{ color: theme.accent }}>{card.title}</h3>
              <p style={{ color: theme.subtext }}>{card.desc}</p>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll
          from="up"
          delay={120}
          className={styles.sectionBox}
          style={{ background: theme.bg2, borderColor: theme.border }}
        >
          <h3 style={{ color: theme.text }}>{t.about.footerTitle}</h3>
          <p style={{ color: theme.subtext }}>{t.about.footerDesc}</p>
        </AnimateOnScroll>
      </main>
      <Footer />
    </div>
  );
}
