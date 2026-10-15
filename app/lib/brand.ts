// Informações e avaliações fornecidas pelo cliente; não são dados ao vivo.
export const brand = {
  name: "Raynne Lopes",
  businessName: "Raynne Lopes Advocacia Especializada",
  phone: "(31) 98497-3275",
  phoneDigits: "5531984973275",
  address: "R. Goiás, 750 — Boa Vista, Sete Lagoas — MG, 35700-030",
  location: "Sete Lagoas · Minas Gerais",
  // Cópia idêntica com caminho simples, compatível com o otimizador de imagens.
  logo: "/raynne-lopes-logo.png",
  portrait: "/raynne-lopes-advogada.png",
  googleReviewCount: 29,
  googleRating: "4,9",
  instagram: "https://www.instagram.com/raynnelopes.adv/",
  instagramHandle: "@raynnelopes.adv",
  threads: "https://www.threads.com/@raynnelopes.adv",
};

// Trechos literais de avaliações do material enviado, sem promessas de resultado.
export const testimonials = [
  { name: "Júlia Rodrigues", text: "A Dra Raynne é extremamente competente, atenciosa e demonstra um conhecimento incrível no que faz." },
  { name: "Paulo de Andrade", text: "Atendimento de excelência, com muita atenção e profissionalismo. Equipe sempre prestativa e comprometida em oferecer o melhor suporte aos clientes." },
  { name: "GEORGE DAUT", text: "Excelente profissional! A Dra. Raynne e toda a sua equipe foram muito atenciosas, competentes e transparentes durante todo o processo." },
];

export function whatsappFor(subject?: string) {
  const message = subject
    ? `Olá, Dra. Raynne Lopes! Gostaria de conversar sobre ${subject}.`
    : "Olá, Dra. Raynne Lopes! Gostaria de orientação sobre o meu caso.";
  return `https://wa.me/${brand.phoneDigits}?text=${encodeURIComponent(message)}`;
}

export const whatsapp = whatsappFor();
export const contact = whatsapp;
export const telephone = `tel:+${brand.phoneDigits}`;
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${brand.businessName}, ${brand.address}`)}`;
export const reviews = maps;
