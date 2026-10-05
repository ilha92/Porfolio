import { build } from "esbuild";
import { readFileSync, writeFileSync, mkdirSync } from "fs";

const result = await build({
  entryPoints: ["src/main.jsx"],
  bundle: true, minify: true, format: "iife", write: false,
  define: { "process.env.NODE_ENV": '"production"' },
  loader: { ".jsx": "jsx" }, jsx: "automatic",
});
const js = result.outputFiles[0].text.replace(/<\/script/gi, "<\\/script");

const font = (pkg, file, family, weight, style = "normal") => {
  const b64 = readFileSync(`node_modules/@fontsource/${pkg}/files/${file}`).toString("base64");
  return `@font-face{font-family:"${family}";font-style:${style};font-weight:${weight};font-display:swap;src:url(data:font/woff2;base64,${b64}) format("woff2");}`;
};
const fonts = [
  font("bricolage-grotesque", "bricolage-grotesque-latin-600-normal.woff2", "Bricolage Grotesque", 600),
  font("bricolage-grotesque", "bricolage-grotesque-latin-700-normal.woff2", "Bricolage Grotesque", 700),
  font("bricolage-grotesque", "bricolage-grotesque-latin-800-normal.woff2", "Bricolage Grotesque", 800),
  font("newsreader", "newsreader-latin-400-normal.woff2", "Newsreader", 400),
  font("newsreader", "newsreader-latin-500-normal.woff2", "Newsreader", 500),
].join("\n");

const css = readFileSync("src/styles.css", "utf8");
const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ilias Hamel · Développeur Full Stack</title>
<meta name="description" content="Portfolio d'Ilias Hamel, développeur full stack (React.js, Node.js, Laravel).">
<meta name="theme-color" content="#eef2f6">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='18' fill='%230e1b2b'/%3E%3Cpath d='M50 22 82 40 50 58 18 40Z' fill='%238fb8e8'/%3E%3Cpath d='M50 42 82 60 50 78 18 60Z' fill='%231f4e79' opacity='.9'/%3E%3C/svg%3E">
<style>
${fonts}
${css}
</style>
</head>
<body>
<div id="root"></div>
<script>
${js}
</script>
</body>
</html>`;
mkdirSync("dist", { recursive: true });
writeFileSync("dist/index.html", html);
console.log("ok", Math.round(html.length / 1024) + " Ko");
