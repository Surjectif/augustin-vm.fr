# Site d'Augustin Vinot--Marull

Portfolio d'un chargé d'études qualitatives. Astro 7 + Tailwind v4, 100 % statique, hébergé sur **GitHub Pages**.

- Tout le contenu : `src/data/site.ts` (`grep -n TODO src/data/site.ts`).
- Photos : `src/assets/photos/`, chargées par nom de fichier. Mode d'emploi : `src/assets/photos/README.md`.
- Liens internes : toujours via `withBase()` (`src/lib/url.ts`), pour fonctionner sous `/<nom-du-depot>/`.

## Déploiement

1. Pousser sur `main`.
2. Une seule fois : *Settings → Pages → Source : GitHub Actions*.
3. Le workflow `.github/workflows/deploy.yml` lance `astro check`, build et publie `dist/`.
   L'URL et le sous-chemin viennent de la config Pages du dépôt : rien à régler,
   y compris si un domaine personnalisé est ajouté plus tard (*Settings → Pages → Custom domain*).

## Build local (sans Node sur la machine)

```bash
docker run --rm --user "$(id -u):$(id -g)" -e HOME=/tmp -v "$PWD":/app -w /app node:22-alpine npm run build
```

Erwan est passé par là
