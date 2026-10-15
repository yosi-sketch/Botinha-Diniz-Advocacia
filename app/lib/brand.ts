// Dados institucionais e avaliações do material fornecido; sem integração ao vivo.
export const brand = {
  name: "Botinha & Diniz Advocacia",
  businessName: "Botinha & Diniz Advocacia",
  phone: "(31) 99591-7890",
  phoneDigits: "5531995917890",
  address: "Av. São Paulo, nº 608 — Loja 4, Nova Esperança, Ibirité — MG, 32400-460",
  building: "Ibirité Mall",
  location: "Ibirité · Minas Gerais",
  logo: "/botinha-diniz-logo.png",
  googleReviewCount: 75,
  googleRating: "5,0",
  instagram: "https://www.instagram.com/botinhadiniz.advocacia/",
  instagramHandle: "@botinhadiniz.advocacia",
};

export const team = [
  {
    name: "Dra. Priscila Botinha",
    role: "Sócia · Advogada e administradora",
    image: "/priscila-botinha.png",
    width: 722,
    height: 769,
    bio: "Especialista em Inventários e Direito Imobiliário. Sua formação em Direito e Administração contribui para um olhar atento às questões que envolvem o patrimônio e as decisões de cada família.",
    alt: "Apresentação institucional da Dra. Priscila Botinha, sócia, advogada e administradora, especialista em Inventários e Direito Imobiliário.",
  },
  {
    name: "Dra. Kethelen Diniz",
    role: "Sócia · Advogada, escritora e gestora empresarial",
    image: "/kethelen-diniz.png",
    width: 793,
    height: 785,
    bio: "Especialista em Direito Constitucional, Direito Privado, Direito de Família e Direito Previdenciário. Une a atuação jurídica ao interesse pelo estudo, pela escrita e pela publicação de artigos.",
    alt: "Apresentação institucional da Dra. Kethelen Diniz, sócia, advogada, escritora e gestora empresarial, com suas áreas de especialização.",
  },
];

// Trechos literais dos depoimentos enviados, com autoria preservada.
export const testimonials = [
  { name: "Luiz Fernando", text: "Sua competência, organização e dedicação trouxeram muita segurança durante todo o acompanhamento, sempre com clareza nas informações e agilidade nas demandas." },
  { name: "andre luiz de almeida luiz", text: "Quero agradecer à advogada Kethelen pela dedicação e profissionalismo no meu processo. Ela sempre me manteve informado de cada movimentação, transmitindo confiança e transparência." },
  { name: "Leonardo Henrique", text: "Atendimento excelente! Muito bom o local, a educação de todos e a atenção ao ouvir o cliente! Além do grande conhecimento sobre a questão cível e previdenciário e também regulamentação de imóveis." },
];

export function whatsappFor(subject?: string) {
  const message = subject
    ? `Olá, equipe Botinha & Diniz! Gostaria de conversar sobre ${subject}.`
    : "Olá, equipe Botinha & Diniz! Gostaria de orientação sobre o meu caso.";
  return `https://wa.me/${brand.phoneDigits}?text=${encodeURIComponent(message)}`;
}

export const whatsapp = whatsappFor();
export const contact = whatsapp;
export const telephone = `tel:+${brand.phoneDigits}`;
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${brand.businessName}, ${brand.address}`)}`;
export const reviews = "https://www.google.com/maps?cid=16514638860687317371";
