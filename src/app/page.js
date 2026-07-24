// src/app/page.js
"use client";
import { LanguageProvider } from "../context/LanguageContext";
import Home from "../components/Home/Home";

export default function Page() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}