/**
 * Fuente única de verdad editable para Lejana Casa de Montaña.
 * Si un dato no está confirmado, usá null / texto con "TODO:" — nunca inventes.
 */

export const site = {
  /** TODO: confirmar dominio definitivo (ideal lejana.com.ar) */
  url: "https://lejana.com.ar",
  lang: "es-AR",
  locale: "es_AR",
} as const;

export const casa = {
  nombre: "Lejana Casa de Montaña",
  propuesta:
    "Casa nueva en un claro de bosque nativo, a 2 km del Parque Nacional Lago Puelo, con quincho e hidromasaje para desconectar de verdad.",
  direccion: {
    calle: "El Zorzal 13030",
    codigoPostal: "9211",
    localidad: "Lago Puelo",
    provincia: "Chubut",
    pais: "Argentina",
    /** Línea completa para NAP / footer */
    completa: "El Zorzal 13030, 9211 Lago Puelo, Chubut, Argentina",
  },
  /**
   * Pin confirmado con el anfitrión: ubicación real de la cabaña (El Zorzal).
   * El Cóndor es una calle perpendicular cercana; Google a veces etiqueta mal.
   * Ficha Google: unificar nombre “Lejana Casa de Montaña” y dirección El Zorzal.
   */
  geo: { lat: -42.082524, lng: -71.601623 },
  superficieM2: 120,
  terrenoM2: 1800,
  capacidad: 5,
  banos: 1,
  dormitorios: 2,
  camas: {
    dobles: 1,
    individuales: 3,
    /** Queen = cama matrimonial (confirmado por anfitrión). */
    resumen: "1 cama queen (matrimonial) y 3 individuales",
  },
  /** Descripción de dormitorios (texto del anfitrión). */
  dormitoriosDetalle:
    "Hay dos dormitorios: uno con cama queen e hidromasaje para dos personas, en suite; el otro con tres camas individuales.",
  /** Bañera con hidromasaje interior, en suite en la habitación. */
  hidromasaje: {
    tipo: "banera_interior" as const,
    descripcion:
      "Bañera con hidromasaje interior para dos personas, en suite en el dormitorio con cama queen.",
  },
  entorno:
    "La casa está en un claro en medio del bosque nativo, sobre un terreno de 1.800 m², a unos 700 m de la Ruta 16, a mitad de camino entre el centro de Lago Puelo y el Parque Nacional. Frondosos ejemplares de álamos y radales y otros árboles rodean la casa.",
  quincho: {
    metrosCuadrados: 45,
    descripcion:
      "Quincho grande de 45 m² con parrilla y mesa para seis personas.",
  },
  distancias: {
    parqueNacionalKm: 2,
    lagoPueloKm: 3.2,
    restaurantesKm: 1.6,
    elBolsonKm: 16,
    aeropuertoBarilocheKm: 145,
    ruta16m: 700,
    /** Tramo Bariloche → El Bolsón por Ruta 40 (indicaciones del anfitrión). */
    barilocheElBolsonKm: 130,
    /** Tramo El Bolsón → Lago Puelo por Ruta 16. */
    elBolsonLagoPueloKm: 11,
  },
  /** Cómo llegar desde Bariloche (texto del anfitrión). */
  comoLlegarDesdeBariloche:
    "La forma de llegar es desde Bariloche hasta El Bolsón por Ruta 40, aprox. 130 km. Luego, por Ruta 16 hasta Lago Puelo (11 km).",
  servicios: [
    "WiFi",
    "Cocina equipada (heladera, horno, cafetera, pava eléctrica)",
    "Bañera con hidromasaje (en suite)",
    "Quincho de 45 m² con parrilla y mesa para 6",
    "Mesa de comedor interior y mesa exterior",
    "Hamaca paraguaya",
    "Reposeras",
    "Lavarropas",
    "TV con streaming",
    "Ropa de cama y toallas",
    "Lugar para dejar hasta 4 autos al lado de la casa (sin cochera techada)",
  ],
  /**
   * Confirmado por el anfitrión (oct 2026).
   * “k” = kcal (potencia habitual de calefactores a gas).
   */
  calefaccion:
    "Calefactor de 6000 kcal en el living, calefactor de 2500 kcal en cada dormitorio, artefacto eléctrico en el baño y salamandra a leña en el living",
  reglas: {
    mascotas: true,
    fumar: false,
    fiestas: false,
    cunas: false,
    /** Horarios a coordinar con el huésped. */
    checkInDesde: "10:00 o 17:00 (a coordinar)",
    checkOut: "10:00 o 17:00 (a coordinar)",
  },
  /** TODO: confirmar formas de pago (Booking menciona solo efectivo) */
  formasDePago: null as string | null,
  /** TODO: confirmar precios por temporada y mínimo de noches */
  precios: null as string | null,
  /**
   * No publicar beneficio por reserva directa (pedido del anfitrión).
   * Si existe, se habla solo con Lucía, no va en la web.
   */
  beneficioReservaDirecta: null as string | null,
  contacto: {
    /** Solo dígitos con código país (wa.me). Confirmado: Lucía Parra. */
    whatsapp: "5492235373395",
    email: "lucia-parra@hotmail.com",
    instagram: "https://www.instagram.com/lejanacasaenlagopuelo/",
    /**
     * Link al pin correcto por coordenadas.
     * TODO: reemplazar por la ficha oficial de Google Business Profile
     * cuando exista “Lejana Casa de Montaña” en el lugar correcto.
     */
    googleMaps: "https://www.google.com/maps?q=-42.082524,-71.601623",
  },
  mensajeWhatsApp:
    "Hola, quiero consultar disponibilidad en Lejana Casa de Montaña (Lago Puelo).",
  anfitriona: "Lucía Parra",
  puntajes: {
    airbnb: {
      /** Escala Airbnb: máximo 5 */
      score: "5",
      scoreSobre: "5",
      insignia: "Favorito entre huéspedes",
      url: "https://www.airbnb.com.ar/rooms/1426293001437998455",
    },
    booking: {
      /** Escala Booking: máximo 10 */
      score: "8,5",
      scoreSobre: "10",
      atencion: "9,7",
      ubicacion: "9,1",
      url: "https://www.booking.com/hotel/ar/lejana-casa-de-montana.es.html",
    },
  },
  valoracionesTemas: [
    "paz",
    "desconectar",
    "lugar mágico",
    "aislado en la naturaleza",
    "casa nueva y cómoda",
    "tiene todo lo necesario",
    "la atención de Lucía",
  ],
};

export type FaqItem = {
  pregunta: string;
  respuesta: string;
  /** Si true, la respuesta aún espera confirmación */
  pendiente?: boolean;
};

export const faqs: FaqItem[] = [
  {
    pregunta: "¿Cuántas personas entran en Lejana Casa de Montaña?",
    respuesta:
      "Entran hasta 5 personas. Hay 2 dormitorios: uno con cama queen (matrimonial) e hidromasaje para dos, en suite; el otro con tres camas individuales. Hay 1 baño, en una casa nueva de 120 m² sobre 1.800 m² de bosque nativo.",
  },
  {
    pregunta: "¿La cabaña está cerca del Parque Nacional Lago Puelo?",
    respuesta:
      "Sí: está a unos 2 km del Parque Nacional Lago Puelo y a 3,2 km del centro del pueblo, a unos 700 m de la Ruta 16.",
  },
  {
    pregunta: "¿Cuáles son los horarios de check-in y check-out?",
    respuesta:
      "El check-in y el check-out son a las 10:00 o a las 17:00, a coordinar con el huésped.",
  },
  {
    pregunta: "¿Hay hidromasaje o jacuzzi?",
    respuesta:
      "Sí: hay una bañera con hidromasaje interior para dos personas, en suite en el dormitorio con cama queen.",
  },
  {
    pregunta: "¿Tiene patio o quincho?",
    respuesta:
      "Frondosos ejemplares de álamos y radales y otros árboles rodean la casa. Sí tiene un quincho grande de 45 m² con parrilla y mesa para seis personas.",
  },
  {
    pregunta: "¿Hay espacio de trabajo o escritorio?",
    respuesta:
      "No hay un espacio de trabajo dedicado ni escritorio fijo. Hay mesa de comedor interior y mesa exterior; la casa está pensada para descanso, no para oficina.",
  },
  {
    pregunta: "¿Qué calefacción tiene?",
    respuesta:
      "Tiene calefactor de 6000 kcal en el living, calefactor de 2500 kcal en cada dormitorio, artefacto eléctrico en el baño y salamandra a leña en el living.",
  },
  {
    pregunta: "¿Se aceptan mascotas?",
    respuesta:
      "Sí, se aceptan mascotas. No se fuma, no se hacen fiestas y no hay cunas disponibles.",
  },
  {
    pregunta: "¿A qué distancia está del centro de Lago Puelo?",
    respuesta:
      "Está a unos 3,2 km del centro de Lago Puelo, a 2 km del Parque Nacional, a 16 km de El Bolsón y a unos 145 km del aeropuerto de Bariloche.",
  },
  {
    pregunta: "¿Sirve para familias?",
    respuesta:
      "Sí: es una cabaña para hasta 5 personas, con 2 dormitorios, pensada para familias y parejas que buscan naturaleza y descanso en Lago Puelo y la Comarca Andina.",
  },
  {
    pregunta: "¿Dónde se dejan los autos?",
    respuesta:
      "Se pueden dejar hasta 4 autos al lado de la casa. No hay cochera techada ni estacionamiento cubierto.",
  },
  {
    pregunta: "¿Cuáles son las formas de pago?",
    respuesta:
      "Las formas de pago para reserva directa se confirman al consultar disponibilidad. En las plataformas (Airbnb y Booking) aplica el método de cada una.",
    pendiente: true,
  },
  {
    pregunta: "¿Cómo reservo?",
    respuesta:
      "Podés consultar por WhatsApp para disponibilidad y reserva directa, o usar Airbnb y Booking si preferís las plataformas.",
  },
];

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/la-casa", label: "La casa" },
  { href: "/como-llegar", label: "Cómo llegar" },
  { href: "/que-hacer", label: "Qué hacer" },
  { href: "/preguntas-frecuentes", label: "Preguntas" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function whatsappUrl(mensaje = casa.mensajeWhatsApp): string | null {
  if (!casa.contacto.whatsapp) return null;
  return `https://wa.me/${casa.contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export function napTelefonoDisplay(): string {
  if (!casa.contacto.whatsapp) return "TODO: confirmar teléfono / WhatsApp";
  // +54 9 223 537-3395
  const d = casa.contacto.whatsapp;
  if (d === "5492235373395") return "+54 9 223 537-3395";
  return `+${d}`;
}
