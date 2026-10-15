# Botinha & Diniz Advocacia

Site institucional em português para o escritório de Priscila Botinha e Kethelen Diniz, em Ibirité, Minas Gerais. Seis áreas com detalhes, apresentação das sócias, avaliações, perguntas frequentes e contato direto.

## Desenvolvimento

Instalar dependências com npm install e iniciar com npm run dev -- --port 3016. Preview local: http://localhost:3016. Usa Next.js 16.3.5, React, Tailwind CSS 4, Framer Motion e Lucide. Antes de alterar Next.js, consultar node_modules/next/dist/docs conforme AGENTS.md.

Verificações: npm run lint -- app; node node_modules/typescript/bin/tsc --noEmit; npm run build.

## Marca e conteúdo

Paleta extraída do logo BD: marfim #f0f0e0, dourado champanhe #d0c0a0 e bronze #604020; carvão #161310 e neutros derivados. Títulos Cinzel e leitura Montserrat, servidos por next/font/google. O tema do Tailwind 4 fica em @theme inline de app/globals.css.

Dados e links: app/lib/brand.ts. Página e diálogos: app/page.tsx. Metadados e fontes: app/layout.tsx. CTA compartilhado: app/components/GlowingButton.tsx.

- Telefone: (31) 99591-7890; WhatsApp: https://wa.me/5531995917890.
- Sede: Ibirité Mall, Av. São Paulo, nº 608 — Loja 4, Nova Esperança, Ibirité — MG, 32400-460.
- Instagram: https://www.instagram.com/botinhadiniz.advocacia/.
- Áreas: Família, Inventários e Sucessões, Imobiliário, Previdenciário, Cível e Constitucional, com base nas especializações informadas.
- Google: nota 5,0 e 75 avaliações conforme material enviado; dado estático, sem consulta ao vivo. CID 16514638860687317371, presente nos links fornecidos.
- Depoimentos: trechos literais de Luiz Fernando, andre luiz de almeida luiz e Leonardo Henrique.

E-mail, horários e domínio de produção não foram informados. Configurar NEXT_PUBLIC_SITE_URL com o domínio real para habilitar imagens sociais com URL absoluta. A imagem de compartilhamento é o logo de 1774 × 887.

## Materiais originais

| Arquivo | Dimensões | Uso |
| --- | --- | --- |
| public/botinha-diniz-logo.png | 1774 × 887 | Cabeçalho, hero, rodapé e ícones |
| public/priscila-botinha.png | 722 × 769 | Apresentação completa da Dra. Priscila |
| public/kethelen-diniz.png | 793 × 785 | Apresentação completa da Dra. Kethelen |

Cópias binárias dos anexos, sem edição, com origem e SHA-256 em .impeccable/asset-origins.json. As artes conservam o conteúdo original; não extrapolar suas idades ou tempo de experiência em novos textos.

## Validação — 15/10/2026

Executor: lint, TypeScript e build passaram; build repetido após correção de foco também passou. Sem overflow horizontal em 320, 390, 518, 768 e 1440px. Seis diálogos verificados com destino WhatsApp específico, foco inicial, ciclo Tab/Shift+Tab, Escape, retorno de foco, fundo inert e bloqueio/restauração da rolagem. Menu móvel fecha ao selecionar Contato. Imagens carregadas e links inspecionados sem envio de mensagens.

Revisão independente inicial conferiu marca, contatos, especializações, avaliações, integridade dos anexos e composição. Identificou um P2 no foco do menu móvel. Após a correção para bronze escuro no fundo marfim, o verdict pass retornou **ship**, restrito a essa correção, com P2 resolvido. Contraste final do contorno: 8,57:1. A compressão IAB das capturas limita a avaliação de nitidez fina. Não se atribui ao reviewer repetição de build ou testes do executor.

O detector foi executado uma vez: quatro advisories de documentação desatualizada, referentes ao tipo 1,75rem e às divisórias/moldura douradas. Esses valores agora constam em DESIGN.md; o detector não foi repetido. A documentação foi finalizada diretamente pelo executor após a etapa delegada não retornar.

## Referências do projeto

- PRODUCT.md: fatos e limites.
- DESIGN.md: tokens e regras do sistema construído.
- .impeccable/design.json: extensões, estados e exemplos de componentes.
- .impeccable/botinha-diniz-direction.md: direção e evidências de conclusão.
- .impeccable/review/: capturas e registro local de validação, fora do versionamento.
