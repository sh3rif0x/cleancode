"use client";
import Link from "next/link";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BlogSidebar from "./BlogSidebar";
import { useLanguage } from "../../context/LanguageContext";
import { getAllPosts } from "../../data/blog";
import styles from "./style.module.css";

export default function Blog() {
  const { t, theme, dir, lang } = useLanguage();
  const posts = getAllPosts();

  return (
    <div dir={dir} className={styles.page} style={{ background: theme.bg, color: theme.text }}>
      <Header />
      <main className={styles.shell}>
        <div className={styles.layout}>
          <div className={styles.mainCol}>
            <div className={styles.intro}>
              <h1 className={styles.listTitle}>{t.blog.title}</h1>
              <p className={styles.lead} style={{ color: theme.subtext }}>
                {t.blog.intro}
              </p>
            </div>

            <div className={styles.grid}>
              {posts.map((post) => {
                const copy = post[lang];

                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className={styles.card}
                    style={{ background: theme.bg2, borderColor: theme.border, color: theme.text }}
                  >
                    <div
                      className={styles.cardImage}
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className={styles.cardBody}>
                      <p className={styles.cardMeta} style={{ color: theme.accent }}>
                        {post.category[lang]} · {post.date}
                      </p>
                      <h3 className={styles.cardTitle}>{copy.title}</h3>
                      <p className={styles.cardExcerpt} style={{ color: theme.subtext }}>
                        {copy.excerpt}
                      </p>
                      <span className={styles.readMore} style={{ color: theme.accent }}>
                        {t.blog.readMore}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <BlogSidebar />
        </div>
      </main>
      <Footer />
    </div>
  );
}
