// Dados fornecidos pelo cliente. Contatos e arquivos centralizados aqui.
export const brand = {
  name: "Silva & Lopes",
  businessName: "Silva & Lopes Advocacia",
  phone: "(37) 99902-0336",
  phoneDigits: "5537999020336",
  secondPhone: "(37) 99939-0455",
  secondPhoneDigits: "5537999390455",
  address: "R. Campos Altos, nº 276 - Formiga, MG, 35576-172",
  logo: "/Logo Jurídico Silva & Lopes.png",
  portrait: "/silva-lopes-equipe.png",
  googleReviewCount: 81,
  googleProfile: "https://www.google.com/maps?cid=5097582474649043815",
  instagram: "https://www.instagram.com/silvaelopesadvocacia/",
  instagramHandle: "@silvaelopesadvocacia",
};

export function whatsappFor(subject?: string, phoneDigits = brand.phoneDigits) {
  const message = subject
    ? `Olá, Silva & Lopes! Gostaria de conversar sobre ${subject}.`
    : "Olá, Silva & Lopes! Gostaria de conversar sobre uma questão jurídica.";
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
}

export const contact = `https://wa.me/${brand.phoneDigits}`;
export const whatsapp = whatsappFor();
export const secondWhatsapp = whatsappFor(undefined, brand.secondPhoneDigits);
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${brand.businessName}, ${brand.address}`)}`;
export const reviews = brand.googleProfile;
