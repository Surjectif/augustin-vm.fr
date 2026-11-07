// Préfixe les liens internes avec la base du site. Sur GitHub Pages, un
// dépôt « projet » est servi sous /<nom-du-depot>/ ; avec un domaine
// personnalisé, la base est « / ». Elle est fixée au build (BASE_PATH).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path: string) => `${base}${path.startsWith('/') ? path : `/${path}`}`;
