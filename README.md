# RAS Advogados

Site institucional em Sete Lagoas, MG, com apresentação dos sócios, áreas de atuação, perguntas frequentes, avaliações no Google e contato.

## Desenvolvimento

Instale com `npm install` e inicie com `npm run dev`.
Validação: `npm run lint -- app`, `node node_modules/typescript/bin/tsc --noEmit` e `npm run build`.

## Identidade e conteúdo

Tailwind CSS 4 configura o tema com `@theme inline` em `app/globals.css`.
Azul-petróleo #0e3b55 extraído dos pixels opacos do logo; azuis derivados e neutros frios complementam a paleta monocromática.
Outfit nos títulos e Manrope no corpo, servidas localmente por `next/font/google`.
Dados, assets, sócios e links centralizados em `app/lib/brand.ts`. Seções e modais em `app/page.tsx`; metadados em `app/layout.tsx`.

## Dados do escritório

- Telefone e WhatsApp: (31) 3177-0100, confirmado pelo cliente.
- Endereço: Praça Vo Fina, nº 124 — Centro, Sete Lagoas — MG, 35700-549.
- Instagram: @ras.advogadosoficial.
- Google: cid 3724645382148157793; nota 5,0 e 57 avaliações informadas pelo cliente; três relatos completos do material fornecido, sem textos inventados.
- Sócios: Willian Rangel, Denilson Rodrigues e Cleiton Silva. Áreas de atuação conforme os materiais fornecidos.

E-mail, OAB, formação, tempo de experiência e horários completos não foram fornecidos.
Configure `NEXT_PUBLIC_SITE_URL` com o domínio de produção para habilitar imagens de compartilhamento com endereço absoluto.

## Arquivos

Logo original transparente: `public/Logotipo RAS Advogados em Azul-petróleo.png`.
Fotografias originais: `public/ras-socios.png`, `public/willian-rangel.png`, `public/denilson-rodrigues.png` e `public/cleiton-silva.png`. Cópias integrais dos anexos, exibidas sem alteração dos pixels.
