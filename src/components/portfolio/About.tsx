const stack = [
  { group: "Linguagens", items: ["JavaScript", "TypeScript"] },
  { group: "Front-End", items: ["Vue.js", "React", "Tailwind CSS", "HTML5", "CSS3"] },
  { group: "Desktop & Mobile", items: ["Tauri", "Electron", "React Native", "Expo"] },
  { group: "Back-End & DB", items: ["Node.js", "Supabase"] },
  { group: "Ferramentas", items: ["Git", "GitHub", "Figma", "pnpm", "npm"] },
];

const education = [
  {
    title: "Bacharelado em Ciência da Computação",
    place: "Centro Universitário Estácio São Luís",
    period: "Mar/2023 — Cursando",
  },
  {
    title: "Técnico em Montagem e Manutenção de Computadores",
    place: "IEMA",
    period: "2019",
  },
];

export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-5 font-mono text-xs tracking-[0.2em] text-accent uppercase">{children}</p>
  );
}

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal className="reveal">
          <SectionLabel>Sobre</SectionLabel>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Interfaces com
            <br />
            <span className="text-accent">propósito</span>.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Sou desenvolvedor front-end focado em soluções para web, desktop e mobile. Gosto de
            transformar requisitos confusos em interfaces claras, rápidas e acessíveis — e de deixar
            o código legível para quem vem depois.
          </p>
          <p className="mt-4 text-muted-foreground">
            Além do front, atuo com infraestrutura de TI e automação (PowerShell/Batch, redes,
            servidores) — um diferencial que me ajuda a entender o sistema de ponta a ponta.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-accent/25 bg-surface/60 px-4 py-3">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-2 animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            <span className="text-sm">
              Assistente de TI @ FR Negócios
              <span className="text-muted-foreground"> — Fev/2026 – atual</span>
            </span>
          </div>

          <div className="mt-10">
            <p className="font-display text-sm font-semibold">Formação</p>
            <ul className="mt-4 space-y-4">
              {education.map((e) => (
                <li key={e.title} className="border-l border-border pl-4">
                  <p className="text-sm font-medium">{e.title}</p>
                  <p className="text-sm text-muted-foreground">{e.place}</p>
                  <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          {stack.map((s, i) => (
            <div
              key={s.group}
              data-reveal
              className="reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <p className="mb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {s.group}
              </p>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-border bg-surface/50 px-3.5 py-2 text-sm transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
