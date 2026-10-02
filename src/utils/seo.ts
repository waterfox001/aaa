import { siteConfig } from "../config/siteConfig";

export interface PageSeoMeta {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath?: string;
  ogType?: string;
}

export const defaultLocalKeywords = [
  "autoescola em Fortaleza",
  "Auto Escola Ximenes",
  "autoescola no Pan-Americano",
  "habilitação em Fortaleza",
  "primeira habilitação em Fortaleza",
  "carteira de motorista em Fortaleza",
  "autoescola próxima",
  "curso para habilitação em Fortaleza",
  "autoescola no Ceará",
  "CNH Fortaleza",
  "autoescola Pici",
  "autoescola Bela Vista",
  "autoescola Demócrito Rocha",
  "simulado DETRAN CE"
];

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    "name": siteConfig.nome,
    "description": "Auto Escola Ximenes em Fortaleza - CE. Atendimento próximo, orientação clara e uma experiência mais leve para quem deseja iniciar ou avançar no processo de habilitação.",
    "telephone": siteConfig.telefone,
    "email": siteConfig.email,
    "url": "https://wa.me/558599880848",
    "hasMap": siteConfig.mapsUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Amazonas, 220",
      "addressLocality": "Fortaleza",
      "addressRegion": "CE",
      "postalCode": "60441-685",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -3.7607,
      "longitude": -38.5639
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "14:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Pan-Americano, Fortaleza" },
      { "@type": "AdministrativeArea", "name": "Pici, Fortaleza" },
      { "@type": "AdministrativeArea", "name": "Bela Vista, Fortaleza" },
      { "@type": "AdministrativeArea", "name": "Demócrito Rocha, Fortaleza" },
      { "@type": "AdministrativeArea", "name": "Damas, Fortaleza" },
      { "@type": "City", "name": "Fortaleza" }
    ]
  };
}
