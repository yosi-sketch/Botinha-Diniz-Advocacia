// Informações e avaliações fornecidas pelo cliente; não são dados ao vivo.
export const brand = {
  name: "Eduardo Cury",
  businessName: "Eduardo Cury Advogado Criminalista",
  phone: "(34) 99111-6365",
  phoneDigits: "5534991116365",
  address: "Av. 13, 658 — Sala 801 — Centro, Ituiutaba — MG, 38300-140",
  building: "Edifício Ituiutaba",
  hours: "Atendimento 24 horas",
  logo: "/Logotipo Dourado Eduardo Cury Advocacia.png",
  portrait: "/eduardo-cury-advogado.png",
  office: "/eduardo-cury-escritorio.png",
  googleReviewCount: 45,
  googleRating: "5,0",
  googleProfile: "https://www.google.com/maps?cid=8361611520771558648",
  instagram: "https://www.instagram.com/eduardocuryadv/",
  instagramHandle: "@eduardocuryadv",
};

// Transcrições integrais dos relatos selecionados no material enviado.
export const testimonials = [
  { name: "Ana Paula Resende", text: "Dr. Eduardo, superou em excelência todas minhas expectativas. De total confiança e profissionalismo...super indico!!!" },
  { name: "Moriza Araújo", text: "O profissional é excelente, ético, responsável e muito comprometido com seus casos e seus clientes. Recomendo muitíssimo!" },
  { name: "Marcella Barbieri", text: "Compartilho minha experiência extremamente positiva com o advogado Eduardo Cury. Contratei seus serviços para lidar com um caso e fiquei muito satisfeita com sua competência, dedicação e profissionalismo." },
];

export function whatsappFor(subject?: string) {
  const message = subject
    ? `Olá, Dr. Eduardo Cury! Gostaria de conversar sobre ${subject}.`
    : "Olá, Dr. Eduardo Cury! Gostaria de orientação sobre uma questão criminal.";
  return `https://wa.me/${brand.phoneDigits}?text=${encodeURIComponent(message)}`;
}

export const whatsapp = whatsappFor();
export const contact = whatsapp;
export const telephone = `tel:+${brand.phoneDigits}`;
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${brand.businessName}, ${brand.address}`)}`;
export const reviews = brand.googleProfile;
