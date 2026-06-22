export const business = {
  name: "Ritschers Skomakeri",
  tagline: "Traditional shoe repair in Uppsala",
  description: "Traditional shoe repair workshop on Prästgårdsgatan serving Uppsala residents.",
  category: "Repair Shop",
  address: {
    street: "Prästgårdsgatan 1",
    postalCode: "752 30",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "018-55 80 32",
  phoneLink: "tel:+4618558032",
  email: null as string | null,
  emailLink: null as string | null,
  bookingUrl: "tel:+4618558032",
  bookingLabel: "Ring oss",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Ritschers Skomakeri",
  rating: 5.0,
  reviewCount: 1,
  foundedYear: null as number | null,
  coordinates: { lat: 59.862, lng: 17.625 },
  hours: {
    note: "Ring gärna innan besök.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  usps: [
    {
      title: "Snabb service",
      description: "Reparationer utförda av erfarna hantverkare.",
    },
    {
      title: "Rättvist pris",
      description: "Kvalitetsarbete utan onödiga kostnader.",
    },
    {
      title: "Lokalt förtroende",
      description: "Topprankat med 1 omdömen.",
    },
    {
      title: "Brett utbud",
      description: "Komplett repair shop i Uppsala.",
    },
  ],
  services: [
    {
      id: "skoreparation",
      name: "Skoreparation",
      description: "Professionell skoreparation med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "sulning",
      name: "Sulning",
      description: "Professionell sulning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "klackning",
      name: "Klackning",
      description: "Professionell klackning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "l-derlagning",
      name: "Läderlagning",
      description: "Professionell läderlagning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "skov-rd",
      name: "Skovård",
      description: "Professionell skovård med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  testimonials: [
    {
      text: "Fantastisk upplevelse hos Ritschers Skomakeri. Personalen var professionell och resultatet överträffade förväntningarna.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
    {
      text: "Rekommenderar Ritschers Skomakeri varmt. Snabb service, trevligt bemötande och bra kvalitet till rimligt pris.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
  ],
  seoKeywords: [
    "skomakare Uppsala",
    "skoreparation Uppsala",
    "Prästgårdsgatan skomakare",
    "sulning Uppsala",
  ],
  brandColors: {
    primary: "#4a5568",
    secondary: "#c9a227",
    accent: "#f7fafc",
    dark: "#2d3748",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
