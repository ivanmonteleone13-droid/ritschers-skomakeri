export const business = {
  name: "Ritschers Skomakeri",
  tagline: "Skomakeri på Prästgårdsgatan",
  description:
    "Ritschers Skomakeri på Prästgårdsgatan 1 — reparation och underhåll av skodon och lädervaror i Uppsala. Läderlagning, sulning och klackning.",
  category: "Skomakeri",
  address: {
    street: "Prästgårdsgatan 1",
    postalCode: "752 30",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "018-55 80 32",
  phoneLink: "tel:+4618558032",
  email: "ritscher.skomakare@telia.com",
  emailLink: "mailto:ritscher.skomakare@telia.com",
  bookingUrl: "tel:+4618558032",
  bookingLabel: "Ring oss",
  websiteUrl: null as string | null,
  facebookUrl: "https://www.facebook.com/ritschersskomakeri" as string | null,
  instagramUrl: null as string | null,
  owner: "Ritschers Skomakeri",
  rating: 5.0,
  reviewCount: 1,
  foundedYear: null as number | null,
  coordinates: { lat: 59.865, lng: 17.610 },
  hours: {
    note: "Ring gärna innan besök — öppettider kan avvika.",
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
      title: "Läder & skor",
      description: "Reparation av skodon och lädervaror — enligt Hitta.se.",
    },
    {
      title: "5,0 på Reco",
      description: "1 omdöme med perfekt betyg.",
    },
    {
      title: "Centralt läge",
      description: "Prästgårdsgatan 1 i Uppsala.",
    },
    {
      title: "Ring före besök",
      description: "Skicka gärna meddelande dagen innan — enligt Facebook.",
    },
  ],
  services: [
    {
      id: "skoreparation",
      name: "Skoreparation",
      description: "Reparation och underhåll av skodon.",
      duration: "—",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "sulning",
      name: "Sulning",
      description: "Byte och reparation av sulor.",
      duration: "—",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "klackning",
      name: "Klackning",
      description: "Klackreparation och omkackning.",
      duration: "—",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "laderlagning",
      name: "Läderlagning",
      description: "Lagning av läderjackor, väskor och andra lädervaror.",
      duration: "—",
      priceFrom: null,
      note: "Källa: Reco-omdöme om skinnjacka.",
    },
    {
      id: "skovard",
      name: "Skovård",
      description: "Underhåll och vård av skodon.",
      duration: "—",
      priceFrom: null,
      note: "Kontakta oss för rådgivning.",
    },
  ],
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/gallery-1.jpg",
  gallery: [
    { id: 1, label: "Ritscher's Skomakeri", image: "/images/hero.jpg" },
    { id: 2, label: "Prästgårdsgatan 1", image: "/images/gallery-1.jpg" },
  ],
  about: {
    headline: "Skomakeri i Uppsala",
    paragraphs: [
      "Ritschers Skomakeri är verksam inom reparation och underhåll av skodon och lädervaror i Uppsala.",
      "Vi finns på Prästgårdsgatan 1. Ring 018-55 80 32 eller skicka meddelande via Facebook dagen innan besök.",
      "Läderlagning av skinnjackor och skoreparationer — med omdömet: «Perfekt resultat» på Reco.se.",
    ],
  },
  testimonials: [
    {
      text: "Lagade min skinnjacka i mycket tjockt läder. Perfekt resultat. Rekommenderas alla dar i veckan.",
      author: "Paul H",
      source: "Reco.se",
      sourceUrl: "https://www.reco.se/r/865085",
      rating: 5,
      date: "2014-08-11",
    },
  ],
  seoKeywords: [
    "skomakare Uppsala",
    "skoreparation Uppsala",
    "Prästgårdsgatan skomakare",
    "läderlagning Uppsala",
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
