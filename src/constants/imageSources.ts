export type RasterMap = Record<number, string>;
export type ImageSources = {
  alt: string;
  sizes?: string; // <img sizes="...">
  webp?: RasterMap;
  jpg?:  RasterMap;
  png?:  RasterMap;
};

export const IMAGES = {
  LIVIA_AVATAR: {
    alt: "Nutricionista esportiva Lívia Anjos, especialista em saúde e performance",
    sizes: "(max-width:768px) 300px, 420px",
    jpg: { 420: "/foto-livia.jpg" },
  } satisfies ImageSources,

  LIVIA_BACK_POSE_BODYBUILDING: {
    alt: "Lívia Anjos, nutricionista e atleta de fisiculturismo, posando de costas no Muscle Contest Bahia 2025 em Feira de Santana",
    sizes:
      "(max-width:480px) 280px, (max-width:768px) 300px, (max-width:1024px) 360px, 420px",
    webp: {
      420: "/livia-posando-420.webp",
      840: "/livia-posando-840.webp",
      1260: "/livia-posando-1260.webp",
    },
    jpg: {
      420: "/livia-posando-420.jpg",
      840: "/livia-posando-840.jpg",
      1260: "/livia-posando-1260.jpg",
    },
  } satisfies ImageSources,

  LIVIA_AWARD_STAGE_TROPHY_3RD_PLACE: {
    alt: "Lívia Anjos, nutricionista clínica e esportiva, recebendo troféu de 3º lugar no Muscle Contest Bahia 2025 em Feira de Santana",
    sizes:
      "(max-width:480px) 280px, (max-width:768px) 300px, (max-width:1024px) 360px, 420px",
    webp: {
      420: "/livia-fisiculturista-420.webp",
      840: "/livia-fisiculturista-840.webp",
      1260: "/livia-fisiculturista-1260.webp",
    },
    jpg: {
      420: "/livia-fisiculturista-420.jpg",
      840: "/livia-fisiculturista-840.jpg",
      1260: "/livia-fisiculturista-1260.jpg",
    },
  } satisfies ImageSources,
} as const;
