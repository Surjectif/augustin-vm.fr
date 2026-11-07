import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Hébergement GitHub Pages. Les deux valeurs sont injectées par le workflow
// (.github/workflows/deploy.yml) à partir de la configuration Pages du dépôt :
//   PUBLIC_SITE_URL  origine, ex. https://<compte>.github.io ou le domaine perso
//   BASE_PATH        /<nom-du-depot> pour un site « projet », vide sinon
const SITE = process.env.PUBLIC_SITE_URL || 'https://augustin-vinot-marull.fr';
const BASE = process.env.BASE_PATH || '/';
// URL de l'accueil sans « / » final : doublon que le sitemap émet avec une base.
const HOME_NO_SLASH = new URL(BASE.replace(/\/?$/, '/'), SITE).href.replace(/\/$/, '');

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',

  // Site 100 % statique : GitHub Pages sert dist/ tel quel.
  output: 'static',

  integrations: [
    sitemap({ filter: (page) => !/\/404\/?$/.test(page) && page !== HOME_NO_SLASH }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  // format « file » : index.html + 404.html à la racine, ce qu'attend Pages.
  build: { inlineStylesheets: 'auto', format: 'file' },

  image: { layout: 'constrained' },

  // Pages ne permet pas d'en-têtes HTTP personnalisés : la CSP passe par
  // une balise <meta>, générée par Astro avec les empreintes des scripts.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self' data:",
        "connect-src 'self'",
        "base-uri 'none'",
        "form-action 'self'",
        "object-src 'none'",
      ],
    },
  },
});
