"use client";
import { createContext, useContext, useState, useMemo, useEffect } from "react";
import arContent from "../content/ar.content.json";
import enContent from "../content/en.content.json";

const content = { ar: arContent, en: enContent };

export const themes = {
  dark: {
    bg: "#02020E",
    bg2: "#01031F",
    card: "#0B0E23",
    border: "#11152B",
    text: "#ffffff",
    subtext: "#94a3b8",
    accent: "#38bdf8",
    accentText: "#02020E",
  },
  light: {
    bg: "#ffffff",
    bg2: "#f8fafc",
    card: "#f1f5f9",
    border: "#e2e8f0",
    text: "#0f172a",
    subtext: "#475569",
    accent: "#0284c7",
    accentText: "#ffffff",
  },
};

const LanguageContext = createContext(null);

function readStored(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const value = window.localStorage.getItem(key);
    return value || fallback;
  } catch {
    return fallback;
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ar");
  const [mode, setMode] = useState("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedLang = readStored("cc-lang", "ar");
    const storedMode = readStored("cc-mode", "dark");
    setLang(storedLang === "en" ? "en" : "ar");
    setMode(storedMode === "light" ? "light" : "dark");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      window.localStorage.setItem("cc-lang", lang);
      window.localStorage.setItem("cc-mode", mode);
    } catch {
      /* ignore */
    }
  }, [lang, mode, ready]);

  const toggleLang = () => setLang((prev) => (prev === "ar" ? "en" : "ar"));
  const toggleMode = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

  const value = useMemo(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      t: content[lang],
      toggleLang,
      mode,
      theme: themes[mode],
      toggleMode,
    }),
    [lang, mode]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
