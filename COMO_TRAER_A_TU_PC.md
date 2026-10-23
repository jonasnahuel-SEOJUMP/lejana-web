# Cómo traer este proyecto a tu carpeta “Lejana web”

Este sitio se armó en un entorno Cloud **aparte** de SEO Jump (no se tocó ese repo).

## Opción rápida

1. Bajá el archivo `lejana-web.tar.gz` desde los artifacts del agente.
2. En tu PC, abrí la carpeta `Lejana web` del Escritorio.
3. Extraé el contenido del `.tar.gz` **adentro** de esa carpeta (podés reemplazar todo salvo que quieras conservar algo).
4. En Cursor: **File → Open Folder → Lejana web**.
5. En la terminal de esa carpeta:

```bash
npm install
npm run dev
```

6. Abrí http://localhost:4321

## Editar datos

Todo lo editable está en `src/data/casa.ts` (WhatsApp, Instagram, TODOs, FAQ, links).

## Subir a GitHub (recomendado)

1. Creá un repo vacío nuevo (ej. `lejana-web`), **sin** mezclarlo con SeoJump.
2. Desde la carpeta del proyecto:

```bash
git remote add origin https://github.com/TU-USUARIO/lejana-web.git
git push -u origin master
```

3. Conectá ese repo a Cloudflare Pages (`build`: `npm run build`, `output`: `dist`, Node 22).
