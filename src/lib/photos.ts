import type { ImageMetadata } from 'astro';

// Toutes les images de src/assets/photos/, indexées par leur nom sans
// extension : « etude-energie.jpg » → photo('etude-energie').
// Pour changer une photo, il suffit de remplacer le fichier par un autre
// du même nom (jpg, jpeg, png, webp ou avif). Fichier absent → dégradé.
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

const byName = new Map<string, ImageMetadata>(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!.replace(/\.[^.]+$/, ''), mod.default]),
);

export const photo = (name?: string) => (name ? byName.get(name) : undefined);
