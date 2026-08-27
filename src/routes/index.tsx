import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Timeline } from "@/components/portfolio/Timeline";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { useReveal } from "@/hooks/use-reveal";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const title = "Davi Nicacio — Front-End Developer";
const description =
  "Portfólio de Davi Nicacio, desenvolvedor front-end em São Luís (MA). Interfaces responsivas e intuitivas para web, desktop e mobile.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  useSmoothScroll();

  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Contact />
    </main>
  );
}
