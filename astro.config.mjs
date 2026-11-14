// @ts-check
import { defineConfig } from "astro/config";

// SITE_URL / BASE_PATH sont fournis par le workflow GitHub Pages (sous-dossier /emna-ladhib-site).
// En local et sur Netlify, le site est servi à la racine.
// TODO(backend/seo): remplacer le domaine par défaut par le domaine définitif avant la mise en ligne.
export default defineConfig({
  site: process.env.SITE_URL ?? "https://www.exemple-emna-ladhib.ca",
  base: process.env.BASE_PATH ?? "/",
  trailingSlash: "ignore",
});
