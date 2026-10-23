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
    calle: "El Cóndor 13030",
    codigoPostal: "9211",
    localidad: "Lago Puelo",
    provincia: "Chubut",
    pais: "Argentina",
    /** Línea completa para NAP / footer */
    completa: "El Cóndor 13030, 9211 Lago Puelo, Chubut, Argentina",
  },
  /**
   * Pin confirmado con el anfitrión (oct 2026): ubicación real de la cabaña.
   * El listado de Google que aparece “del otro lado de la calle” es incorrecto;
   * la ficha oficial de Google Maps todavía está pendiente de crear/corregir.
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
    resumen: "1 cama doble y 3 individuales",
  },
  /** Bañera con hidromasaje interior, en suite en la habitación. */
  hidromasaje: {
    tipo: "banera_interior" as const,
    descripcion:
      "Bañera con hidromasaje interior, en suite en la habitación.",
  },
  entorno:
    "La casa está en un claro en medio del bosque nativo, sobre un terreno de 1.800 m², a unos 700 m de la Ruta 16, a mitad de camino entre el centro de Lago Puelo y el Parque Nacional. Hay espacio alrededor, pero no es un patio delimitado.",
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
  },
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
  /** Confirmado por fotos del anfitrión: salamandra a leña en el living. */
  calefaccion: "Salamandra a leña",
  reglas: {
    mascotas: false,
    fumar: false,
    fiestas: false,
    cunas: false,
    checkInDesde: "15:00",
    /** TODO: confirmar horario de check-out */
    checkOut: null as string | null,
  },
  /** TODO: confirmar formas de pago (Booking menciona solo efectivo) */
  formasDePago: null as string | null,
  /** TODO: confirmar precios por temporada y mínimo de noches */
  precios: null as string | null,
  /** TODO: confirmar beneficio por reserva directa (no descuento vs plataformas) */
  beneficioReservaDirecta: null as string | null,
  contacto: {
    /** TODO: confirmar WhatsApp (solo dígitos con código país, ej. 5492944...) */
    whatsapp: null as string | null,
    /** TODO: confirmar email */
    email: null as string | null,
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
  anfitriona: "Lucía",
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
      "Entran hasta 5 personas. Hay 2 dormitorios, 1 cama doble y 3 individuales, y 1 baño, en una casa nueva de 120 m² sobre 1.800 m² de bosque nativo.",
  },
  {
    pregunta: "¿La cabaña está cerca del Parque Nacional Lago Puelo?",
    respuesta:
      "Sí: está a unos 2 km del Parque Nacional Lago Puelo y a 3,2 km del centro del pueblo, a unos 700 m de la Ruta 16.",
  },
  {
    pregunta: "¿Cuáles son los horarios de check-in y check-out?",
    respuesta:
      "El check-in es desde las 15:00. El horario exacto de check-out se confirma al reservar.",
    pendiente: true,
  },
  {
    pregunta: "¿Hay hidromasaje o jacuzzi?",
    respuesta:
      "Sí: hay una bañera con hidromasaje interior, en suite en la habitación, con vista al entorno.",
  },
  {
    pregunta: "¿Tiene patio o quincho?",
    respuesta:
      "No tiene un patio delimitado: la casa está en un claro en medio del bosque, con espacio alrededor. Sí tiene un quincho grande de 45 m² con parrilla y mesa para seis personas.",
  },
  {
    pregunta: "¿Hay espacio de trabajo o escritorio?",
    respuesta:
      "No hay un espacio de trabajo dedicado ni escritorio fijo. Hay mesa de comedor interior y mesa exterior; la casa está pensada para descanso, no para oficina.",
  },
  {
    pregunta: "¿Qué calefacción tiene?",
    respuesta: "Hay salamandra a leña en el living.",
  },
  {
    pregunta: "¿Se aceptan mascotas?",
    respuesta:
      "No se aceptan mascotas. Tampoco se fuma, no se hacen fiestas y no hay cunas disponibles.",
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
      "Podés consultar por WhatsApp para disponibilidad y reserva directa, o usar Airbnb y Booking si preferís las plataformas. Al reservar directo puede haber un beneficio (no un precio más bajo que en las plataformas); se confirma al escribir.",
    pendiente: true,
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
  return casa.contacto.whatsapp
    ? `+${casa.contacto.whatsapp}`
    : "TODO: confirmar teléfono / WhatsApp";
}
