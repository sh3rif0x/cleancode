"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./style.module.css";

export default function Header() {
  const { t, theme, lang, toggleLang, mode, toggleMode, dir } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const servicesMenu = t.services.items.map((item) => ({
    title: item.title,
    href: `/services#${item.id}`,
  }));

  useEffect(() => {
    const id = window.setTimeout(() => {
      setOpen(false);
      setServicesOpen(false);
    }, 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const navLinks = (
    <>
      <Link href="/" className={styles.link} style={{ color: theme.text }} onClick={closeMenu}>
        {t.nav.home}
      </Link>

      <div className={styles.linkItem}>
        <div className={styles.servicesRow}>
          <Link
            href="/services"
            className={styles.link}
            style={{ color: theme.text }}
            onClick={closeMenu}
          >
            {t.nav.services}
          </Link>
          <button
            type="button"
            className={styles.chevronBtn}
            style={{ color: theme.subtext, borderColor: theme.border }}
            aria-label="Toggle services submenu"
            aria-expanded={servicesOpen}
            onClick={() => setServicesOpen((v) => !v)}
          >
            <span className={`${styles.chevron} ${servicesOpen ? styles.chevronOpen : ""}`}>
              {dir === "rtl" ? "‹" : "›"}
            </span>
          </button>
        </div>

        <div
          className={`${styles.dropdown} ${servicesOpen ? styles.dropdownOpen : ""}`}
          style={{ background: theme.bg2, borderColor: theme.border }}
        >
          {servicesMenu.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={styles.dropdownLink}
              style={{ color: theme.text }}
              onClick={closeMenu}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <Link href="/about" className={styles.link} style={{ color: theme.text }} onClick={closeMenu}>
        {t.nav.about}
      </Link>
      <Link href="/projects" className={styles.link} style={{ color: theme.text }} onClick={closeMenu}>
        {t.nav.projects}
      </Link>
      <Link href="/blog" className={styles.link} style={{ color: theme.text }} onClick={closeMenu}>
        {t.nav.blog}
      </Link>
      <Link href="/contact" className={styles.link} style={{ color: theme.text }} onClick={closeMenu}>
        {t.nav.contact}
      </Link>
    </>
  );

  return (
    <nav
      className={styles.nav}
      style={{ borderBottom: `1px solid ${theme.border}`, background: theme.bg }}
    >
      <div className={styles.bar}>
        <h2 className={styles.brand} style={{ color: theme.accent }}>
          <Link href="/" onClick={closeMenu}>
            Clean Code
          </Link>
        </h2>

        <div className={styles.desktopLinks}>{navLinks}</div>

        <div className={styles.barActions}>
          <button
            type="button"
            onClick={toggleLang}
            className={styles.btn}
            style={{ borderColor: theme.border, color: theme.text }}
          >
            {lang === "ar" ? "EN" : "عربي"}
          </button>
          <button
            type="button"
            onClick={toggleMode}
            className={styles.btn}
            style={{ borderColor: theme.border, color: theme.text }}
            aria-label="Toggle theme"
          >
            {mode === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            type="button"
            className={styles.menuBtn}
            style={{ borderColor: theme.border, color: theme.text }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}>
              <span style={{ background: theme.text }} />
              <span style={{ background: theme.text }} />
              <span style={{ background: theme.text }} />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`${styles.mobilePanel} ${open ? styles.mobilePanelOpen : ""}`}
        style={{ background: theme.bg, borderColor: theme.border }}
      >
        {navLinks}
      </div>

      {open ? (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close menu"
          onClick={closeMenu}
        />
      ) : null}
    </nav>
  );
}
