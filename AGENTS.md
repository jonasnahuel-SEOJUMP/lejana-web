# Contexto del proyecto: web de Lejana Casa de Montaña

Leé este archivo completo antes de hacer cualquier cosa. Es la fuente de verdad del proyecto.

## Quién soy y cómo trabajar conmigo

Me llamo Nahuel. Soy emprendedor, NO programador profesional. Sé bastante de SEO y AEO, pero poco de código.

Este proyecto es NUEVO e INDEPENDIENTE. No tiene nada que ver con SEO Jump ni con ningún otro proyecto mío. No reutilices código, configuración ni dependencias de otros proyectos.

Explicame en español simple qué vas a hacer y por qué, antes de hacerlo.

Trabajá de a pasos chicos. Antes de cambios grandes (instalar cosas, cambiar la estructura, borrar archivos), mostrame el plan y esperá mi OK.

Nunca inventes datos de la cabaña (precios, distancias, servicios, reseñas). Si falta un dato, poné un TODO: visible y avisame.

## El negocio

Lejana Casa de Montaña es una cabaña de alquiler turístico en Lago Puelo, Chubut, Patagonia Argentina. Es de mi tío y la administra con Lucía (la anfitriona, a quien los huéspedes mencionan mucho por su atención).

Hoy se alquila solo por Airbnb y Booking, que cobran comisión.

Objetivo de la web: que la encuentren en Google y en los buscadores con IA (ChatGPT, Perplexity, Google AI Overviews), dar confianza y generar consultas directas por WhatsApp. Más adelante se van a hacer campañas de Google Ads que apunten a esta web.

La web NO tiene sistema de reservas ni pagos. El objetivo de conversión es el botón de WhatsApp. También tiene links a Airbnb y Booking para quien prefiera reservar por ahí.

No publicar en la web beneficio por reserva directa; si existe, se habla solo con Lucía.

## Datos reales de la cabaña

Fuente: sus publicaciones en Airbnb y Booking (octubre 2026). Lo marcado como TODO está pendiente de confirmar con mi tío.

- Nombre oficial (usarlo SIEMPRE igual): Lejana Casa de Montaña
- Dirección: El Zorzal 13030, 9211 Lago Puelo, Chubut, Argentina
- Superficie: 120 m². Casa nueva.
- Capacidad: 5 personas. 1 baño. Camas: 1 queen (matrimonial) + 3 individuales.
- Dormitorios: 2 (uno con cama queen e hidromasaje para dos, en suite; el otro con tres individuales)
- Hidromasaje / jacuzzi: bañera con hidromasaje interior para dos, en suite. Se puede mencionar con naturalidad; no hace falta usarlo como único gancho.
- Entorno: casa en un claro en medio del bosque nativo (1.800 m²), a unos 700 m de la Ruta 16, a mitad de camino entre el centro de Lago Puelo y el Parque Nacional. Frondosos ejemplares de álamos y radales y otros árboles rodean la casa. Quincho de 45 m² con parrilla y mesa para 6.
- Distancias: Parque Nacional Lago Puelo 2 km · Lago Puelo 3,2 km · restaurantes 1,6 km · El Bolsón 16 km · aeropuerto de Bariloche 145 km
- Servicios: wifi, cocina equipada (heladera, horno, cafetera, pava eléctrica), bañera con hidromasaje (en suite), quincho de 45 m² con parrilla y mesa para 6, mesa de comedor interior y mesa exterior, hamaca paraguaya, reposeras, lavarropas, TV con streaming, ropa de cama y toallas; lugar para dejar hasta 4 autos al lado de la casa (sin cochera techada). No tiene patio delimitado ni espacio de trabajo dedicado.
- Calefacción: calefactor 6000 kcal en living, 2500 kcal en cada dormitorio, artefacto eléctrico en el baño, salamandra a leña en el living
- Reglas: sí se aceptan mascotas; no se fuma; no se hacen fiestas; no hay cunas. Check-in y check-out: 10:00 o 17:00 (a coordinar).
- Cómo llegar desde Bariloche: Ruta 40 hasta El Bolsón (~130 km), luego Ruta 16 hasta Lago Puelo (~11 km). No hay sección “Desde El Bolsón” en la web.
- Formas de pago: TODO (hoy en Booking dice solo efectivo)
- Precios por temporada y mínimo de noches: TODO
- WhatsApp, email, Instagram: TODO
- Puntajes: Airbnb 5,0 con insignia "Favorito entre huéspedes" · Booking 8,5 (atención 9,7, ubicación 9,1)
- Airbnb: https://www.airbnb.com.ar/rooms/1426293001437998455
- Booking: https://www.booking.com/hotel/ar/lejana-casa-de-montana.es.html

## Lo que valoran los huéspedes (usar este lenguaje en los textos)

En las reseñas se repite: paz, desconectar, lugar mágico, aislado en la naturaleza, casa nueva y cómoda, tiene todo lo necesario, la atención de Lucía. NO copies reseñas textuales en la web y NO inventes testimonios.

## Público y posicionamiento

Público probable: familias y parejas argentinas que buscan naturaleza y descanso. TODO: confirmar con mi tío de dónde vienen.

Propuesta: casa nueva en bosque nativo, a minutos del Parque Nacional Lago Puelo, para desconectar de verdad.

Temporadas: verano (lago, trekking, kayak) e invierno, que está creciendo en el Parque Nacional. Los textos tienen que servir para las dos.

Búsquedas objetivo (usar de forma natural, sin repetir de más):

- cabaña en Lago Puelo / alquiler de cabaña en Lago Puelo
- cabaña cerca del Parque Nacional Lago Puelo
- cabaña para 5 personas en Lago Puelo / cabaña para familias
- cabaña con hidromasaje en Lago Puelo
- alojamiento en la Comarca Andina / cerca de El Bolsón
- qué hacer en Lago Puelo

## Decisiones técnicas (ya tomadas)

- Astro + Tailwind, sitio 100% estático, sin base de datos ni backend.
- Hosting gratis en Cloudflare (Workers). Dominio: https://cabañalejana.com.ar (NIC, titular Andrea Marín).
- Idioma: español de Argentina (lang="es-AR"). La estructura queda preparada para sumar inglés después.
- Todo el contenido editable (datos, textos, precios, preguntas frecuentes, links) en un solo archivo: `src/data/casa.ts`.
- Fotos en `src/assets/fotos/`. Por ahora placeholders; después se reemplazan por las reales.

## Páginas

- Inicio: foto principal, propuesta de valor, destacados, galería, prueba social (puntajes de Airbnb y Booking, sin inventar reseñas), botón de WhatsApp.
- La casa (`/la-casa`): espacios, camas, servicios, reglas.
- Ubicación y cómo llegar (`/como-llegar`): mapa embebido, distancias, acceso, desde Bariloche y El Bolsón.
- Qué hacer en Lago Puelo (`/que-hacer`): guía útil por temporada.
- Preguntas frecuentes (`/preguntas-frecuentes`): cuántas personas entran, horarios, hidromasaje, mascotas, distancia al centro, si sirve para familias, formas de pago, cómo reservar.
- Contacto / reservar (`/contacto`): WhatsApp con mensaje prearmado y links a Airbnb y Booking.

## Requisitos de SEO y AEO

- Title y meta description únicos por página, con "Lago Puelo" de forma natural. Un solo H1 por página.
- JSON-LD:
  - LodgingBusiness con nombre, dirección, geo, teléfono, amenityFeature, checkinTime, checkoutTime, numberOfRooms, petsAllowed: false, sameAs (Airbnb, Booking, Instagram).
  - FAQPage en la página de preguntas frecuentes.
  - BreadcrumbList.
- NO uses VacationRental (Google lo reserva para socios de Hotel Center).
- NO incluyas aggregateRating ni review con datos de otras plataformas.
- NAP (nombre, dirección, teléfono) idéntico en todas las páginas, en el footer.
- Respuestas directas al principio de cada sección: la primera oración responde la pregunta y después se amplía. Así lo toman las IA.
- Generar sitemap.xml, robots.txt que permita los crawlers de IA (GPTBot, OAI-SearchBot, PerplexityBot, Google-Extended, ClaudeBot) y /llms.txt con un resumen de la casa.
- Open Graph y Twitter cards, para que se vea bien al compartir por WhatsApp.
- URLs en español, sin ñ ni acentos.

## Diseño y rendimiento

- Mobile-first: la mayoría de las visitas van a ser desde el celular.
- Estética cálida de montaña: madera, verde bosque, crema. Elegante, simple, con mucho aire y fotos grandes.
- Botón flotante de WhatsApp siempre visible.
- Imágenes con astro:assets, en WebP o AVIF, con lazy loading y alt descriptivo en español.
- Objetivo: Lighthouse 95+ en Performance, SEO, Accesibilidad y Buenas prácticas.
- Accesible: buen contraste y textos legibles.

## Pendiente (no bloquea empezar)

- Respuestas de mi tío sobre los TODO.
- Fotos originales en alta calidad.
- Dominio definitivo.
- Ficha de Google Maps (la armo yo aparte; la web la va a enlazar).
