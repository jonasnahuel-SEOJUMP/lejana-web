import { casa, faqs, site } from "../data/casa";

export function lodgingBusinessLd() {
  const sameAs = [
    casa.puntajes.airbnb.url,
    casa.puntajes.booking.url,
    ...(casa.contacto.instagram ? [casa.contacto.instagram] : []),
  ];

  const amenityFeature = [
    ...casa.servicios.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    ...(casa.calefaccion
      ? [
          {
            "@type": "LocationFeatureSpecification",
            name: `Calefacción: ${casa.calefaccion}`,
            value: true,
          },
        ]
      : []),
    ...(casa.hidromasaje
      ? [
          {
            "@type": "LocationFeatureSpecification",
            name: casa.hidromasaje.descripcion,
            value: true,
          },
        ]
      : []),
  ];

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: casa.nombre,
    alternateName: "Cabaña Lejana Casa de Montaña Lago Puelo",
    description: casa.propuesta,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: casa.direccion.calle,
      addressLocality: casa.direccion.localidad,
      addressRegion: casa.direccion.provincia,
      postalCode: casa.direccion.codigoPostal,
      addressCountry: "AR",
    },
    amenityFeature,
    /** Horario más temprano posible; en la web se aclara que es 10:00 o 17:00 a coordinar. */
    checkinTime: "10:00",
    checkoutTime: "10:00",
    petsAllowed: casa.reglas.mascotas,
    smokingAllowed: false,
    maximumAttendeeCapacity: casa.capacidad,
    sameAs,
  };

  if (casa.contacto.whatsapp) {
    data.telephone = `+${casa.contacto.whatsapp}`;
  }

  if (casa.dormitorios != null) {
    data.numberOfRooms = casa.dormitorios;
  }

  if (casa.geo) {
    data.geo = {
      "@type": "GeoCoordinates",
      latitude: casa.geo.lat,
      longitude: casa.geo.lng,
    };
  }

  return data;
}

export function faqPageLd() {
  /** Solo FAQ confirmadas en el JSON-LD (las pendientes se ven en la página, no en schema). */
  const confirmadas = faqs.filter((item) => !item.pendiente);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: confirmadas.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.respuesta,
      },
    })),
  };
}
