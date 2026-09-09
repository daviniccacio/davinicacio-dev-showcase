import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "src/server.ts" },
  },
  nitro: {
    preset: "github-pages",
    prerender: {
      routes: ["/davinicacio-dev-showcase/"], // A raiz real da aplicação que o Nitro vai compilar
      crawlLinks: true,
    },
  } as any,
  vite: {
    base: "/davinicacio-dev-showcase/", // Isso diz ao Vite para prefixar os assets com a subpasta
    build: {
      ssr: "src/server.ts",
    },
  },
});