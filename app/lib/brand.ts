// Informações e avaliações fornecidas pelo cliente; não são dados ao vivo.
export const brand = {
  name: "Dr. Murilo Alvarenga Nunes",
  businessName: "Murilo Alvarenga Nunes — Advogado",
  registration: "OAB/MG 102.602",
  phone: "(37) 99983-6911",
  phoneDigits: "5537999836911",
  address: "R. Dom Pedro II, 86 — Centro, Piumhi — MG, 37925-000",
  secondaryAddress: "Rua Arcemino Rodrigues da Cunha, 123 — Capitólio — MG",
  location: "Piumhi · Minas Gerais",
  // Cópia idêntica com caminho simples, compatível com o otimizador de imagens.
  logo: "/murilo-alvarenga-logo.png",
  portrait: "/murilo-alvarenga-advogado.png",
  laborImage: "/verbas-rescisorias.png",
  googleReviewCount: 134,
  googleRating: "5,0",
  instagram: "https://www.instagram.com/murilo_alvarenga_nunes/",
  instagramHandle: "@murilo_alvarenga_nunes",
};

// Trechos literais de avaliações do material enviado, sem promessas de resultado.
export const testimonials = [
  { name: "João Marcos Oliveira", text: "Dr. Murilo foi sempre atencioso e solícito quando precisei, é um grande profissional que me passou tranquilidade quando eu precisei. Recomendo sempre!" },
  { name: "Altarf Engenharia e Consultoria", text: "Excelente profissional! Serviços no prazo. Cordialidade e alta excelência na prestação de serviço." },
  { name: "Kerlon Moura Pureza", text: "Recomendo enfaticamente o Dr. Murilo. Um profissional exemplar, ético e de um profundo conhecimento jurídico. Sempre disposto a atender com total atenção e empatia." },
];

export function whatsappFor(subject?: string) {
  const message = subject
    ? `Olá, Dr. Murilo! Gostaria de conversar sobre ${subject}.`
    : "Olá, Dr. Murilo! Gostaria de orientação sobre o meu caso.";
  return `https://wa.me/${brand.phoneDigits}?text=${encodeURIComponent(message)}`;
}

export const whatsapp = whatsappFor();
export const contact = whatsapp;
export const telephone = `tel:+${brand.phoneDigits}`;
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${brand.businessName}, ${brand.address}`)}`;
export const secondaryMaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(brand.secondaryAddress)}`;
export const reviews = "https://www.google.com/maps?cid=2448691614492770861";
