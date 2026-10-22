import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";

const SSR_OUT = ".prerender";
const DIST = "dist";

await build({
  build: {
    ssr: "src/prerender.tsx",
    outDir: SSR_OUT,
    emptyOutDir: true,
  },
  logLevel: "warn",
});

const { render } = await import(`../${SSR_OUT}/prerender.js`);

const sitemap = readFileSync("public/sitemap.xml", "utf8");
const paths = [...sitemap.matchAll(/<loc>https:\/\/ferrostudioweb\.com(\/[^<]*)<\/loc>/g)].map((m) => m[1]);

const template = readFileSync(join(DIST, "index.html"), "utf8");
const EMPTY_ROOT = '<div id="root"></div>';
if (!template.includes(EMPTY_ROOT)) throw new Error("index.html no contiene #root vacío");

for (const path of paths) {
  const html = template.replace(EMPTY_ROOT, `<div id="root">${render(path)}</div>`);
  const target = path === "/" ? join(DIST, "index.html") : join(DIST, path, "index.html");
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
  console.log(`prerender ${path}`);
}

rmSync(SSR_OUT, { recursive: true, force: true });
