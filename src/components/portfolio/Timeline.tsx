import { SectionLabel } from "./About";

const jobs = [
  {
    role: "Assistente de TI",
    company: "FR Negócios",
    period: "Fev/2026 — Atual",
    current: true,
    bullets: [
      "Desenvolvimento e manutenção de interfaces web responsivas para sistemas internos",
      "Scripts de automação em PowerShell e Batch",
      "Suporte à infraestrutura de TI: rede, servidores e estações de trabalho",
    ],
  },
  {
    role: "Dev Front-End",
    company: "Portal Web de Ciência da Computação",
    period: "Mai/2025 — Set/2025",
    bullets: [
      "Site institucional do curso construído com HTML5, Tailwind CSS e JavaScript",
      "Layout responsivo e conteúdo organizado por seções",
    ],
  },
  {
    role: "Dev Front-End Voluntário",
    company: "App de Gestão de Academia",
    period: "Set/2024 — Nov/2024",
    bullets: [
      "Front-end de aplicativo de gestão operacional",
      "Componentização e padronização visual das telas",
    ],
  },
];

export function Timeline() {
  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div data-reveal className="reveal">
        <SectionLabel>Experiência</SectionLabel>
        <h2 className="max-w-lg text-4xl font-bold sm:text-5xl">Onde eu já tive colaboração.</h2>
      </div>

      <ol className="mt-16 border-l border-border">
        {jobs.map((job, i) => (
          <li
            key={job.company}
            data-reveal
            className="reveal relative pb-14 pl-8 last:pb-0 sm:pl-12"
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <span
              className={`absolute top-1.5 -left-[5px] size-2.5 rounded-full ${
                job.current ? "bg-accent shadow-[0_0_18px_var(--accent-glow)]" : "bg-border"
              }`}
            />
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              {job.period}
            </p>
            <h3 className="mt-2 text-2xl font-semibold">{job.role}</h3>
            <p className="text-accent">{job.company}</p>
            <ul className="mt-4 space-y-2">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent/60" />
                  {b}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
