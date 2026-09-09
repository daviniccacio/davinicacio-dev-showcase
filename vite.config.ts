import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/davinicacio-dev-showcase/",
  tanstackStart: {
    server: { entry: "src/server.ts" },
  },
  nitro: {
    preset: "github-pages",
    // O segredo está aqui: o servidor simulará a subpasta corretamente
    baseURL: "/davinicacio-dev-showcase/",
    prerender: {
      routes: ["/davinicacio-dev-showcase/"],
      crawlLinks: true,
    },
  } as any,
  vite: {
    build: {
      ssr: "src/server.ts",
    },
  },
});