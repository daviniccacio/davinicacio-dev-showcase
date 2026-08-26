import { useEffect } from "react";

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

/** Rotating typewriter text. */
export function useTypewriter(words: string[], speed = 90, pause = 1600) {
  const [state, setState] = useReactState(words);
  return state;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function useReactState(_w: string[]): [string, unknown] {
    throw new Error("unused");
  }
}
