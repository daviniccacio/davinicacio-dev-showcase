import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useTypewriter } from "@/hooks/use-reveal";

const actions = [
  { label: "WhatsApp", href: "https://wa.me/5598985597868", Icon: MessageCircle, primary: true },
  { label: "Email", href: "mailto:daviniccacio@gmail.com", Icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/daviniccacio", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/daviniccacio", Icon: Github },
];

export function Contact() {
  const typed = useTypewriter(["?", "!"]);

  return (
    <section
      id="contato"
      className="grain mesh-hero relative overflow-hidden border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-36">
        <div data-reveal className="reveal">
          <p className="mb-5 font-mono text-xs tracking-[0.2em] text-accent uppercase">Contato</p>
          <h2 className="text-glow text-[clamp(2.5rem,9vw,6rem)] leading-[0.9] font-bold">
            Vamos
            <br />
            conversar{typed}
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Aberto a oportunidades e freelas de front-end. Escolha o canal que preferir — respondo
            rápido.
          </p>
        </div>

        <div data-reveal className="reveal mt-12 flex flex-wrap gap-3">
          {actions.map(({ label, href, Icon, primary }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={
                primary
                  ? "inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_0_40px_var(--accent-glow)] transition-transform hover:-translate-y-0.5"
                  : "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
              }
            >
              <Icon className="size-4" />
              {label}
            </a>
          ))}
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} Davi Nicacio de Oliveira Cunha. Todos os direitos
            reservados.
          </p>
          <p className="font-mono">São Luís · MA · Brasil</p>
        </div>
      </footer>
    </section>
  );
}
