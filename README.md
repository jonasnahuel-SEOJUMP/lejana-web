# Lejana Casa de Montaña

Sitio estático de la cabaña **Lejana Casa de Montaña** (Lago Puelo, Chubut).  
Astro + Tailwind. Sin backend ni reservas online: la conversión es por WhatsApp.

> Proyecto independiente. No relacionado con SEO Jump ni otros repos.

## Requisitos

- Node.js **≥ 22.23.4**

## Desarrollo

```bash
npm install
npm run dev
```

Abrí [http://localhost:4321](http://localhost:4321).

## Contenido editable

Todo lo editable (datos, FAQ, links, TODOs) está en:

[`src/data/casa.ts`](src/data/casa.ts)

Fotos: `src/assets/fotos/` (hoy hay placeholders; reemplazá por fotos reales manteniendo nombres o actualizando imports).

Reglas del proyecto: [`AGENTS.md`](AGENTS.md).

## Build

```bash
npm run build
npm run preview
```

Salida estática en `dist/`.

## Deploy en Cloudflare Pages

1. Creá un repo Git solo para este proyecto (no mezclar con otros).
2. En Cloudflare Pages: conectar el repo.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Node version: `22` (o superior compatible).
6. Cuando tengas el dominio `.com.ar`, actualizá `site` en `astro.config.mjs`, `site.url` en `src/data/casa.ts` y el `Sitemap` en `public/robots.txt`.

Archivo `public/_headers` ya incluye cabeceras básicas para Pages.

## Scripts

| Comando           | Qué hace              |
| ----------------- | --------------------- |
| `npm run dev`     | Servidor local        |
| `npm run build`   | Build de producción   |
| `npm run preview` | Vista previa del build |
