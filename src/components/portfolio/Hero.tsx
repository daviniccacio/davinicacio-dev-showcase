import { ArrowDown, Github, Instagram, Linkedin } from "lucide-react";
import { useTypewriter } from "@/hooks/use-reveal";
import { TextScramble } from "../ui/text-scramble";

const socials = [
  { href: "https://github.com/daviniccacio", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/daviniccacio", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.instagram.com/daviniccacio", label: "Instagram", Icon: Instagram },
];

export function Hero() {
  const typed = useTypewriter(["web", "desktop", "mobile"]);

  return (
    <section id="top" className="grain mesh-hero relative overflow-hidden">
      <div className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-5 pt-28 pb-20 sm:px-8">
        <p
          data-reveal
          className="reveal mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-accent" />
          São Luís, Maranhão — Brasil
        </p>

        {/* Efeito Scramble no nome principal */}
        <h1
          data-reveal
          className="reveal text-glow text-[clamp(3rem,13vw,10rem)] leading-[0.86] font-bold"
        >
          <TextScramble text="Davi" />
          <br />
          <TextScramble text="Nicacio" />
        </h1>

        <div data-reveal className="reveal mt-8 flex flex-col gap-2">
          {/* Efeito Scramble também no título profissional */}
          <p className="font-display text-xl font-medium sm:text-2xl">
            <TextScramble text="Front-End Developer" />
          </p>

          <p className="font-mono text-base text-accent sm:text-lg">
            {typed}
            <span className="ml-0.5 inline-block h-[1.1em] w-0.5 translate-y-0.5 bg-accent align-middle animate-terminal-blink" />
          </p>
        </div>

        <p data-reveal className="reveal mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
          Construo interfaces eficientes, responsivas e intuitivas para web, desktop e mobile —
          aplicando boas práticas de código e otimização de processos em projetos reais.
        </p>

        <div data-reveal className="reveal mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_0_40px_var(--accent-glow)] transition-transform hover:-translate-y-0.5"
          >
            Ver Projetos
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/60 hover:text-accent"
          >
            Falar comigo
          </a>
        </div>

        <div data-reveal className="reveal mt-12 flex items-center gap-4">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}