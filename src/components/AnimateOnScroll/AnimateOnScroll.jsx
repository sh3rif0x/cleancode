"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const FROM_CLASS = {
  up: "revealUp",
  down: "revealDown",
  left: "revealLeft",
  right: "revealRight",
  scale: "revealScale",
};

export default function AnimateOnScroll({
  children,
  from = "up",
  delay = 0,
  duration = 900,
  className = "",
  as: Tag = "div",
  once = true,
  threshold = 0.12,
  style,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const { dir } = useLanguage();

  let resolvedFrom = from;
  if (dir === "rtl") {
    if (from === "left") resolvedFrom = "right";
    if (from === "right") resolvedFrom = "left";
  }

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold]);

  const classes = [
    "reveal",
    FROM_CLASS[resolvedFrom] || FROM_CLASS.up,
    visible ? "revealVisible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{
        ...style,
        "--reveal-delay": `${delay}ms`,
        "--reveal-duration": `${duration}ms`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
