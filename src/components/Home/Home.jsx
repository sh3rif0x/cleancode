"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Services from "../Services/Services";
import About from "../About/About";
import LatestProjects from "../LatestProjects/LatestProjects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./style.module.css";

export default function Home() {
  const { t, theme, dir } = useLanguage();

  const techStack = useMemo(
    () => [
      { label: "React", glow: "#61DAFB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { label: "Next.js", glow: "#FFFFFF", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { label: "TypeScript", glow: "#3178C6", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { label: "JavaScript", glow: "#F7DF1E", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { label: "Node.js", glow: "#68A063", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { label: "Express", glow: "#FFFFFF", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { label: "Tailwind CSS", glow: "#38BDF8", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { label: "CSS3", glow: "#264DE4", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { label: "HTML5", glow: "#E34F26", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { label: "GraphQL", glow: "#E535AB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
      { label: "Firebase", glow: "#FFCA28", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { label: "Prisma", glow: "#2D3748", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
      { label: "Redis", glow: "#DC382D", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
      { label: "NestJS", glow: "#E0234E", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
      { label: "PostgreSQL", glow: "#336791", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { label: "MongoDB", glow: "#47A248", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { label: "MySQL", glow: "#4479A1", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { label: "Docker", glow: "#2496ED", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { label: "AWS", glow: "#FF9900", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { label: "Azure", glow: "#0078D4", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
      { label: "Vercel", glow: "#FFFFFF", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { label: "Git", glow: "#F05032", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { label: "GitHub", glow: "#FFFFFF", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { label: "Figma", glow: "#A259FF", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { label: "Redux", glow: "#764ABC", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { label: "Auth0", glow: "#EB5424", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/auth0/auth0-original.svg" },
      { label: "Sass", glow: "#CC6699", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
      { label: "Swagger", glow: "#85EA2D", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },
      { label: "Socket.IO", glow: "#FFFFFF", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
      { label: "Google", glow: "#4285F4", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    ],
    []
  );

  const integrations = useMemo(
    () => [
      { label: "Stripe", logo: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://stripe.com&size=128" },
      { label: "PayPal", logo: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://paypal.com&size=128" },
      { label: "Firebase", logo: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://firebase.google.com&size=128" },
      { label: "Auth0", logo: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://auth0.com&size=128" },
      { label: "Google Analytics", logo: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://analytics.google.com&size=128" },
      { label: "Zapier", logo: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://zapier.com&size=128" },
      { label: "Google Maps", logo: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://maps.google.com&size=128" },
      { label: "Zoom", logo: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://zoom.us&size=128" },
      { label: "Canva", logo: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://canva.com&size=128" },
      { label: "ChatGPT", logo: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://chatgpt.com&size=128" },
      { label: "Shopify", logo: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://shopify.com&size=128" },
      { label: "YouTube", logo: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://youtube.com&size=128" },
    ],
    []
  );

  const statsTargets = useMemo(
    () => [
      { label: t.home.stats.clients, value: 10, suffix: "+" },
      { label: t.home.stats.projects, value: 34, suffix: "+" },
      { label: t.home.stats.integrations, value: 12, suffix: "+" },
      { label: t.home.stats.technologies, value: 30, suffix: "+" },
    ],
    [t.home.stats]
  );

  const [counts, setCounts] = useState(statsTargets.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => {
        let done = true;
        const next = prev.map((current, index) => {
          const target = statsTargets[index].value;
          if (current < target) {
            done = false;
            return Math.min(target, current + Math.ceil(target / 16));
          }
          return current;
        });

        if (done) {
          clearInterval(interval);
        }

        return next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [statsTargets]);

  return (
    <div dir={dir} className={`${styles.page} pageEnter`} style={{ background: theme.bg, color: theme.text }}>
      <Header />

      <Slider />

      <section className={styles.hero}>
        <AnimateOnScroll from="left" className={styles.heroContent}>
          <span className={styles.tagline} style={{ color: theme.accent }}>
            {t.hero.tagline}
          </span>
          <h1 style={{ color: theme.text }}>{t.hero.title}</h1>
          <p style={{ color: theme.subtext }}>{t.hero.desc}</p>
          <div className={styles.heroButtons}>
            <Link href="/services" className={styles.primaryButton} style={{ background: theme.accent, color: theme.accentText }}>
              {t.hero.cta}
            </Link>
            <Link href="/contact" className={styles.secondaryButton} style={{ borderColor: theme.border, color: theme.text }}>
              {t.hero.secondaryCta}
            </Link>
          </div>
        </AnimateOnScroll>

        <div className={styles.heroCards}>
          {statsTargets.map((stat, i) => (
            <AnimateOnScroll
              key={stat.label}
              from="right"
              delay={i * 90}
              className={styles.heroCard}
              style={{ background: theme.bg2, borderColor: theme.border }}
            >
              <h3 style={{ color: theme.accent }}>
                {counts[i]}
                {stat.suffix}
              </h3>
              <p style={{ color: theme.text }}>{stat.label}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.integrationSection}`}>
        <AnimateOnScroll from="up" className={`${styles.sectionHeader} ${styles.sectionHeaderCenter}`}>
          <h2 style={{ color: theme.text }}>{t.home.integration.title}</h2>
          <p style={{ color: theme.subtext }}>{t.home.integration.desc}</p>
        </AnimateOnScroll>
        <div className={styles.integrationGrid}>
          {integrations.map((item, i) => (
            <AnimateOnScroll
              key={item.label}
              from="up"
              delay={Math.min(i * 50, 400)}
              className={styles.integrationCard}
              style={{ background: theme.bg2, borderColor: theme.border }}
              title={item.label}
              aria-label={item.label}
            >
              <div className={styles.integrationLogoWrap}>
                <img src={item.logo} alt="" className={styles.integrationLogo} />
              </div>
              <span style={{ color: theme.text }}>{item.label}</span>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <AnimateOnScroll from="up" className={styles.sectionHeader}>
          <h2 style={{ color: theme.text }}>{t.home.tech.title}</h2>
          <p style={{ color: theme.subtext }}>{t.home.tech.desc}</p>
        </AnimateOnScroll>
        <div className={styles.techGrid}>
          {techStack.map((tech) => (
            <div
              key={tech.label}
              className={styles.techBadge}
              style={{
                background: theme.bg2,
                border: `1px solid ${theme.border}`,
                "--glow": tech.glow,
              }}
              aria-label={tech.label}
              title={tech.label}
            >
              <img src={tech.logo} alt={tech.label} className={styles.techLogo} />
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Services />
      <About />
      <LatestProjects />
      <Contact />
      <Footer />
    </div>
  );
}
