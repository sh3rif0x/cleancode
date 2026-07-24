"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./style.module.css";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=85",
    alt: "Developer workspace with code on screen",
  },
  {
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1920&q=85",
    alt: "Team collaborating on a digital product",
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=85",
    alt: "Close-up of software development",
  },
];

export default function Slider() {
  const { t, theme, mode, dir } = useLanguage();
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused]);

  const next = () => setSlide((p) => (p + 1) % slides.length);
  const prev = () => setSlide((p) => (p - 1 + slides.length) % slides.length);

  const isRtl = dir === "rtl";

  return (
    <section
      id="home"
      className={styles.slider}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured highlights"
    >
      {slides.map((item, i) => (
        <div
          key={item.image}
          className={`${styles.slide} ${slide === i ? styles.slideActive : ""}`}
          style={{ backgroundImage: `url(${item.image})` }}
          role="img"
          aria-label={item.alt}
          aria-hidden={slide !== i}
        />
      ))}

      <div
        className={styles.overlay}
        style={{
          background:
            mode === "dark"
              ? "linear-gradient(120deg, rgba(4, 8, 22, 0.88) 0%, rgba(4, 8, 22, 0.55) 48%, rgba(4, 8, 22, 0.72) 100%)"
              : "linear-gradient(120deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.7) 100%)",
        }}
      />
      <div className={styles.vignette} />

      <div className={styles.content} key={slide}>
        <span className={styles.tagline} style={{ color: theme.accent }}>
          {t.hero.tagline}
        </span>
        <h1 style={{ color: theme.text }}>{t.hero.title}</h1>
        <p style={{ color: theme.subtext }}>{t.hero.desc}</p>
        <div className={styles.ctaRow}>
          <Link
            href="/contact"
            className={styles.cta}
            style={{ background: theme.accent, color: theme.accentText }}
          >
            {t.hero.cta}
          </Link>
          <Link
            href="/blog"
            className={styles.secondary}
            style={{ color: theme.text, borderColor: theme.border }}
          >
            {t.hero.secondaryCta}
          </Link>
        </div>
      </div>

      <button
        type="button"
        className={styles.arrowLeft}
        onClick={isRtl ? next : prev}
        aria-label={isRtl ? "Next slide" : "Previous slide"}
      >
        ‹
      </button>
      <button
        type="button"
        className={styles.arrowRight}
        onClick={isRtl ? prev : next}
        aria-label={isRtl ? "Previous slide" : "Next slide"}
      >
        ›
      </button>

      <div className={styles.dots} role="tablist" aria-label="Slide indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={slide === i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setSlide(i)}
            className={`${styles.dot} ${slide === i ? styles.dotActive : ""}`}
            style={{
              background: slide === i ? theme.accent : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>

      <div className={styles.progressTrack}>
        <div
          key={slide}
          className={`${styles.progressBar} ${paused ? styles.progressPaused : ""}`}
          style={{ background: theme.accent }}
        />
      </div>
    </section>
  );
}
