// Dados fornecidos pelo cliente. Contatos e arquivos centralizados aqui.
export const brand = {
  name: "RAS Advogados",
  businessName: "RAS Advogados",
  phone: "(31) 3177-0100",
  phoneDigits: "553131770100",
  address: "Praça Vo Fina, nº 124 — Centro, Sete Lagoas — MG, 35700-549",
  logo: "/Logotipo RAS Advogados em Azul-petróleo.png",
  portrait: "/ras-socios.png",
  googleReviewCount: 57,
  googleRating: "5,0",
  googleProfile: "https://www.google.com/maps?cid=3724645382148157793",
  instagram: "https://www.instagram.com/ras.advogadosoficial/",
  instagramHandle: "@ras.advogadosoficial",
};

// Relatos completos copiados do material do Google fornecido pelo cliente.
export const testimonials = [
  {
    name: "Lucas de Castro",
    text: "Quero deixar aqui meu elogio a toda a equipe. Profissionais extremamente competentes, atenciosos e comprometidos com o cliente. Fui muito bem atendido e tive todo o suporte necessário durante o processo. Recomendo pelo excelente trabalho!",
  },
  {
    name: "Janine Liz",
    text: "Sempre que preciso o atendimento é impecável. Além do atendimento personalizado, oferecem clareza nas explicações, demonstrando confiança, ética e agilidade nos atendimentos.",
  },
  {
    name: "Lohari Arquitetura & Design",
    text: "Referência em profissionalismo e comprometimento! Atendimento Ágil, comunicação clara e uma equipe que transmite segurança em todos os detalhes.",
  },
];

export const partners = [
  { name: "Willian Rangel", area: "Direito Empresarial e Civil", image: "/willian-rangel.png", width: 680, height: 798 },
  { name: "Denilson Rodrigues", area: "Direito Penal Empresarial e Financeiro", image: "/denilson-rodrigues.png", width: 678, height: 809 },
  { name: "Cleiton Silva", area: "Direito Imobiliário e Planejamento Sucessório", image: "/cleiton-silva.png", width: 666, height: 804 },
];

export function whatsappFor(subject?: string) {
  const message = subject
    ? `Olá, RAS Advogados! Gostaria de conversar sobre ${subject}.`
    : "Olá, RAS Advogados! Gostaria de conversar sobre uma questão jurídica.";
  return `https://wa.me/${brand.phoneDigits}?text=${encodeURIComponent(message)}`;
}

export const contact = `https://wa.me/${brand.phoneDigits}`;
export const whatsapp = whatsappFor();
export const telephone = `tel:+${brand.phoneDigits}`;
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${brand.businessName}, ${brand.address}`)}`;
export const reviews = brand.googleProfile;
