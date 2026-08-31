import { ArrowUpRight, Github, Plus } from "lucide-react";
import pomodoroImg from "@/assets/pomodoroapp.png";
import hordaImg from "@/assets/sitehordacross.png";
import monetiImg from "@/assets/sitemoneti.png"
import treinopesadoAppImg from "@/assets/apptreinopesado.png"
import { SectionLabel } from "./About";

const projects = [
  {
    title: "PomodoroApp",
    image: pomodoroImg,
    description:
      "App desktop de produtividade baseado na técnica Pomodoro, com timers configuráveis e interface minimalista.",
    tags: ["Electron", "JavaScript", "Tailwind CSS"],
    links: [{ label: "Ver Projeto", href: "https://github.com/daviniccacio/PomodoroApp", icon: Github }],
  },
  {
    title: "Horda Crossfit",
    image: hordaImg,
    description:
      "Landing page institucional responsiva para academia, com planos, modalidades e grade de horários.",
    tags: ["HTML5", "Tailwind CSS", "JavaScript"],
    links: [
      { label: "Ver site", href: "https://horda-cross-website.vercel.app", icon: ArrowUpRight },
    ],
  },
  {
    title: "Moneti",
    image: monetiImg,
    description:
      "Um sistema web completo, moderno e responsivo para controle e planejamento financeiro pessoal ou empresarial.",
    tags: ["React", "Tailwind CSS", "Vite"],
    links: [
      { label: "Ver Projeto", href: "https://github.com/daviniccacio/FinancePlus", icon: Github },
    ],
  },
  {
    title: "Treino Pesado App",
    image: treinopesadoAppImg,
    description:
      "Aplicativo Mobile com intuito de visualização e demonstração de exercícios físicos e também criação de treinos para alunos.",
    tags: ["React Native", "Nativewind", "TypeScript"],
    links: [
      { label: "Ver Projeto", href: "https://github.com/daviniccacio/TreinoPesadoApp", icon: Github },
    ],
  },
];

export function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div data-reveal className="reveal">
        <SectionLabel>Projetos</SectionLabel>
        <h2 className="max-w-lg text-4xl font-bold sm:text-5xl">Trabalhos selecionados.</h2>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article
            key={p.title}
            data-reveal
            className="reveal group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface/50 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="overflow-hidden border-b border-border object-contain">
              <img
                src={p.image}
                alt={`Prévia do projeto ${p.title}`}
                loading="lazy"
                width={1280}
                height={800}
                className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-4">
                {p.links.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-80"
                  >
                    <Icon className="size-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
