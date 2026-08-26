import { useEffect, useState } from "react";

/** Adds `is-revealed` to every [data-reveal] element as it scrolls into view. */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-revealed"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Rotating typewriter effect over a list of words. */
export function useTypewriter(words: string[], typeMs = 85, holdMs = 1500) {
  const [index, setIndex] = useState(0);
  const [len, setLen] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    if (!deleting && len === word.length) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }
    if (deleting && len === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setLen((l) => l + (deleting ? -1 : 1)),
      deleting ? typeMs / 2 : typeMs,
    );
    return () => clearTimeout(t);
  }, [len, deleting, index, words, typeMs, holdMs]);

  return (words[index % words.length] ?? "").slice(0, len);
}
