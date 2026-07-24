"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./style.module.css";

const images = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80",
  "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1600&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80",
];

export default function Slider() {
  const { t, theme, mode } = useLanguage();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setSlide((p) => (p + 1) % images.length);
  const prev = () => setSlide((p) => (p - 1 + images.length) % images.length);

  return (
    <section id="home" className={styles.slider}>
      {images.map((img, i) => (
        <div
          key={i}
          className={styles.slide}
          style={{
            backgroundImage: `url(${img})`,
            opacity: slide === i ? 1 : 0,
          }}
        />
      ))}

      <div
        className={styles.overlay}
        style={{
          background: mode === "dark" ? "rgba(2,2,14,0.65)" : "rgba(255,255,255,0.55)",
        }}
      />

      <div className={styles.content}>
        <h1 style={{ color: theme.text }}>{t.hero.title}</h1>
        <p style={{ color: theme.subtext }}>{t.hero.desc}</p>
        <button
          className={styles.cta}
          style={{ background: theme.accent, color: theme.accentText }}
        >
          {t.hero.cta}
        </button>
      </div>

      <button className={styles.arrowLeft} onClick={prev}>‹</button>
      <button className={styles.arrowRight} onClick={next}>›</button>

      <div className={styles.dots}>
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setSlide(i)}
            className={styles.dot}
            style={{ background: slide === i ? theme.accent : "rgba(255,255,255,0.5)" }}
          />
        ))}
      </div>
    </section>
  );
}
