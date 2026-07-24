"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BlogSidebar from "./BlogSidebar";
import { useLanguage } from "../../context/LanguageContext";
import { CONTACT } from "../../data/contact";
import { getPostBySlug } from "../../data/blog";
import styles from "./style.module.css";

function WhatsAppCta({ label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.ctaBtn}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.78 9.78 0 0 1-4.98-1.36l-.36-.21-3.7.97 1-3.61-.24-.37a9.76 9.76 0 0 1-1.5-5.22c0-5.4 4.4-9.79 9.8-9.79a9.73 9.73 0 0 1 6.93 2.87 9.72 9.72 0 0 1 2.86 6.93c0 5.4-4.4 9.79-9.8 9.79zm8.3-17.1A11.5 11.5 0 0 0 12.04 0C5.45 0 .1 5.35.1 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.26-1.64a11.9 11.9 0 0 0 5.78 1.47h.01c6.59 0 11.94-5.35 11.94-11.94 0-3.19-1.24-6.19-3.5-8.44z"
        />
      </svg>
      {label}
    </a>
  );
}

function ShareBar({ title, shareLabel }) {
  const pathname = usePathname();
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(`${window.location.origin}${pathname}`);
  }, [pathname]);

  const encoded = encodeURIComponent(url || pathname);
  const text = encodeURIComponent(title);

  const shares = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${text}%20${encoded}`,
      color: "#25D366",
      path: "M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.78 9.78 0 0 1-4.98-1.36l-.36-.21-3.7.97 1-3.61-.24-.37a9.76 9.76 0 0 1-1.5-5.22c0-5.4 4.4-9.79 9.8-9.79a9.73 9.73 0 0 1 6.93 2.87 9.72 9.72 0 0 1 2.86 6.93c0 5.4-4.4 9.79-9.8 9.79zm8.3-17.1A11.5 11.5 0 0 0 12.04 0C5.45 0 .1 5.35.1 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.26-1.64a11.9 11.9 0 0 0 5.78 1.47h.01c6.59 0 11.94-5.35 11.94-11.94 0-3.19-1.24-6.19-3.5-8.44z",
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
      color: "#1877F2",
      path: "M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.01 10.13 11.91v-8.42H7.08v-3.49h3.05V9.41c0-3.02 1.8-4.7 4.56-4.7 1.32 0 2.7.24 2.7.24v2.97h-1.52c-1.5 0-1.97.93-1.97 1.89v2.26h3.35l-.54 3.49h-2.81v8.42C19.61 23.08 24 18.09 24 12.07z",
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${text}`,
      color: "#1DA1F2",
      path: "M18.9 2H22l-6.78 7.75L23.2 22h-6.4l-5.01-6.55L6.1 22H3l7.25-8.29L.8 2h6.56l4.53 6 7.01-6zm-1.12 18h1.78L6.34 3.9H4.44L17.78 20z",
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
      color: "#0A66C2",
      path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z",
    },
  ];

  return (
    <div className={styles.shareBar}>
      <span className={styles.shareLabel}>{shareLabel}</span>
      <div className={styles.shareIcons}>
        {shares.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.shareIcon}
            style={{ background: item.color }}
            aria-label={item.name}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#fff" d={item.path} />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}

function renderSection(section, index, theme) {
  if (section.type === "h2") {
    return (
      <h2 key={index} className={styles.sectionHeading} style={{ color: theme.text }}>
        {section.text}
      </h2>
    );
  }

  if (section.type === "ul" || section.type === "ol") {
    const Tag = section.type;
    return (
      <Tag key={index} className={styles.contentList} style={{ color: theme.subtext }}>
        {section.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </Tag>
    );
  }

  return (
    <p key={index} className={styles.sectionText} style={{ color: theme.subtext }}>
      {section.text}
    </p>
  );
}

export default function BlogPost({ slug }) {
  const { t, theme, dir, lang } = useLanguage();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div dir={dir} className={styles.page} style={{ background: theme.bg, color: theme.text }}>
        <Header />
        <main className={styles.shell}>
          <div className={styles.layout}>
            <div className={styles.mainCol}>
              <div className={styles.notFound}>
                <h1 className={styles.postTitle}>{t.blog.notFoundTitle}</h1>
                <p className={styles.sectionText} style={{ color: theme.subtext }}>
                  {t.blog.notFoundDesc}
                </p>
                <Link href="/blog" className={styles.backLink} style={{ color: theme.accent }}>
                  {t.blog.back}
                </Link>
              </div>
            </div>
            <BlogSidebar />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const copy = post[lang];
  const mid = Math.ceil(copy.sections.length / 2);
  const firstHalf = copy.sections.slice(0, mid);
  const secondHalf = copy.sections.slice(mid);

  return (
    <div dir={dir} className={`${styles.page} pageEnter`} style={{ background: theme.bg, color: theme.text }}>
      <Header />
      <main className={styles.shell}>
        <div className={styles.layout}>
          <article className={styles.mainCol}>
            <Link href="/blog" className={styles.backLink} style={{ color: theme.accent }}>
              {t.blog.back}
            </Link>

            <header className={`${styles.postHeader} pageEnter`}>
              <h1 className={styles.postTitle}>{copy.title}</h1>
              <p className={styles.postCategory} style={{ color: theme.accent }}>
                {post.category[lang]}
              </p>
            </header>

            <div
              className={`${styles.postHero} pageEnter`}
              style={{ backgroundImage: `url(${post.image})`, borderColor: theme.border }}
            />

            <p className={styles.lead} style={{ color: theme.subtext }}>
              {copy.excerpt}
            </p>

            <WhatsAppCta label={t.blog.ctaWhatsapp} href={CONTACT.whatsappHref} />

            <div className={styles.postContent}>
              {firstHalf.map((section, index) => renderSection(section, index, theme))}
            </div>

            <WhatsAppCta label={t.blog.ctaWhatsapp} href={CONTACT.whatsappHref} />

            <div className={styles.postContent}>
              {secondHalf.map((section, index) => renderSection(section, index + mid, theme))}
            </div>

            <div className={styles.tags}>
              {post.tags[lang].map((tag) => (
                <span
                  key={tag}
                  className={styles.tag}
                  style={{ background: theme.bg2, borderColor: theme.border, color: theme.accent }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <ShareBar title={copy.title} shareLabel={t.blog.share} />
          </article>

          <BlogSidebar excludeSlug={post.slug} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
