import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'skeleton/movie', renderMode: RenderMode.Prerender },
  // { path: 'movie/:id', renderMode: RenderMode.Prerender, getPrerenderParams: async () => [{ id: 'skeleton' }] },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
