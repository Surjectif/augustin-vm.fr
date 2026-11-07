import type { APIRoute } from 'astro';
import { withBase } from '@/lib/url';

// Généré au build pour que l'URL du sitemap suive PUBLIC_SITE_URL.
export const GET: APIRoute = ({ site }) =>
  new Response(
    ['User-agent: *', 'Allow: /', '', `Sitemap: ${new URL(withBase('/sitemap-index.xml'), site)}`, ''].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
