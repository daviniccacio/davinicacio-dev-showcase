import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      const isTop = window.scrollY < 100;
      setScrolled(window.scrollY > 24);

      // Se estiver bem no topo (Hero), desativa o destaque verde de todos os links
      if (isTop) {
        setActiveSection("#top");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Adicionamos o #top (Hero) na lista de elementos monitorados
    const allTargets = ["#top", ...links.map((l) => l.href)];
    const sectionElements = allTargets
      .map((id) => document.querySelector(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-20% 0px -50% 0px",
        threshold: 0,
      },
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-sm font-bold tracking-tight">
          daviniccacio<span className="text-accent">.</span>dev
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isActive = activeSection === l.href;

            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm transition-all duration-300 ${
                    isActive
                      ? "text-accent font-medium [text-shadow:0_0_12px_var(--accent-glow)]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contato"
          className="hidden rounded-full border border-accent/40 px-4 py-1.5 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-accent-foreground md:inline-block"
        >
          Falar comigo
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen((o) => !o)}
          className="text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl md:hidden">
          {links.map((l) => {
            const isActive = activeSection === l.href;

            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-base transition-colors ${
                    isActive
                      ? "text-accent font-medium [text-shadow:0_0_12px_var(--accent-glow)]"
                      : "text-muted-foreground hover:text-accent"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
