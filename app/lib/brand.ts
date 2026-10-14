// Business details supplied by the client. Keep all contact links in one place.
export const brand = {
  name: "Dr. Luciano Meni",
  fullName: "Dr. Luciano Meni Gonçalves",
  businessName: "Dr. Luciano Meni - Advocacia & Assessoria Jurídica",
  phone: "(35) 98881-4505",
  phoneDigits: "5535988814505",
  address: "Av. B P S, n. 944 - Pinheirinho, Itajubá - MG, 37500-179",
  logo: "/Logotipo Jurídico Azul com Monograma NL.png",
  portrait: "/imgi_11_502333575_2414325792285839_6443606683248185564_n.jpg",
  certificate: "/imgi_10_498544658_1023876026499951_6295330087421358117_n.jpg",
  googleRating: "5,0",
  googleReviewCount: 103,
  googleProfile: "https://www.google.com/maps?cid=1823622625055284594",
  instagram: "https://www.instagram.com/drlucianomeni/",
};

export const contact = `https://wa.me/${brand.phoneDigits}`;
export const whatsapp = `${contact}?text=${encodeURIComponent("Olá, Dr. Luciano! Gostaria de conversar sobre assessoria jurídica para a minha empresa.")}`;
export const telephone = `tel:+${brand.phoneDigits}`;
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${brand.businessName}, ${brand.address}`)}`;
export const reviews = brand.googleProfile;

// Complete reviews from the client's supplied Google review export.
export const testimonials = [
  { name: "Mendes Legalização", quote: "Dr. Luciano é um profissional de excelência, reconhecidamente um dos melhores da região. Sempre muito cordial, educado e atencioso, destaca-se pela precisão técnica e pelo alto nível de competência na condução dos processos. Sua atuação transmite confiança, segurança e total comprometimento com os interesses de seus clientes." },
  { name: "Jeser Giffoni Cruz", quote: "Dr Luciano analisou de forma cirúrgica os contratos de minhas empresas, e os refez com dispositivos eficazes e sólidos. Ele também realizou o registro da Marca de minha empresa, ele simplesmente é o melhor no que faz , recomendo de olhos fechados !" },
  { name: "Caio Farias", quote: "O Luciano é um ótimo profissional e realiza um trabalho muito detalhista, com elaboração de bons contratos, assessoria consistente e atuação firme em processos." },
  { name: "Thiago José", quote: "Encontrei o Dr. Luciano Meni na internet para me ajudar no registro de uma marca, foi extremamente atencioso e agil na minha demanda. Mesmo de forma remota, atendeu minhas expectativas. Excelente profissional, recomendo com absoluta certeza!!!!" },
  { name: "Cibelle Bissacot", quote: "Advogado especializado na área de marcas e patentes, e elaboração de contratos. Confiável e competente. Trabalho eficiente !" },
  { name: "Anne Rezende", quote: "Excelente advogado, atencioso, prestativo e preocupado em resolver meu problema. Mto satisfeita com seu trabalho." },
];
