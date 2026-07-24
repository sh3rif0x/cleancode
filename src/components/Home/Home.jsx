"use client";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Services from "../Services/Services";
import About from "../About/About";
import LatestProjects from "../LatestProjects/LatestProjects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./style.module.css";

export default function Home() {
  const { theme, dir } = useLanguage();

  return (
    <div dir={dir} className={styles.page} style={{ background: theme.bg, color: theme.text }}>
      <Header />
      <Slider />
      <Services />
      <About />
      <LatestProjects />
      <Contact />
      <Footer />
    </div>
  );
}
