"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { CONTACT } from "../../data/contact";
import { getAllPosts, getLatestPosts } from "../../data/blog";
import styles from "./style.module.css";

export default function BlogSidebar({ excludeSlug }) {
  const { t, theme, lang } = useLanguage();
  const [query, setQuery] = useState("");

  const latest = useMemo(() => getLatestPosts(excludeSlug, 5), [excludeSlug]);

  const filtered = useMemo(() => {
    const source = query.trim() ? getAllPosts() : latest;
    const q = query.trim().toLowerCase();
    if (!q) return source;

    return source.filter((post) => {
      const copy = post[lang];
      return (
        copy.title.toLowerCase().includes(q) ||
        copy.excerpt.toLowerCase().includes(q) ||
        post.category[lang].toLowerCase().includes(q)
      );
    });
  }, [query, latest, lang]);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.widget} style={{ background: theme.bg2, borderColor: theme.border }}>
        <label className={styles.searchBox} style={{ background: theme.card, borderColor: theme.border }}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.blog.searchPlaceholder}
            style={{ color: theme.text }}
          />
        </label>
      </div>

      <div className={styles.widget} style={{ background: theme.bg2, borderColor: theme.border }}>
        <h3 className={styles.widgetTitle}>{t.blog.latest}</h3>
        <div className={styles.latestList}>
          {filtered.length === 0 ? (
            <p className={styles.emptySearch} style={{ color: theme.subtext }}>
              {t.blog.noResults}
            </p>
          ) : (
            filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={styles.latestItem}
                style={{ borderColor: theme.border, color: theme.text }}
              >
                <span
                  className={styles.latestThumb}
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <span className={styles.latestText}>{post[lang].title}</span>
              </Link>
            ))
          )}
        </div>
      </div>

      <div className={styles.widget} style={{ background: theme.bg2, borderColor: theme.border }}>
        <h3 className={styles.widgetTitle}>{t.blog.connect}</h3>
        <div className={styles.connectButtons}>
          <a
            href="/contact"
            className={styles.connectBtn}
            style={{ background: theme.accent, color: theme.accentText }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"
              />
            </svg>
            {t.blog.messageUs}
          </a>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.connectBtn} ${styles.whatsappBtn}`}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.78 9.78 0 0 1-4.98-1.36l-.36-.21-3.7.97 1-3.61-.24-.37a9.76 9.76 0 0 1-1.5-5.22c0-5.4 4.4-9.79 9.8-9.79a9.73 9.73 0 0 1 6.93 2.87 9.72 9.72 0 0 1 2.86 6.93c0 5.4-4.4 9.79-9.8 9.79zm8.3-17.1A11.5 11.5 0 0 0 12.04 0C5.45 0 .1 5.35.1 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.26-1.64a11.9 11.9 0 0 0 5.78 1.47h.01c6.59 0 11.94-5.35 11.94-11.94 0-3.19-1.24-6.19-3.5-8.44z"
              />
            </svg>
            {t.blog.whatsapp}
          </a>
        </div>
      </div>
    </aside>
  );
}
