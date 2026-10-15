# Eduardo Cury Advogado Criminalista

Site institucional de advogado criminalista em Ituiutaba, MG. Apresenta quatro temas da defesa criminal com detalhes em modais, Eduardo Cury e seu escritório, perguntas frequentes, três depoimentos fornecidos pelo cliente e contato 24 horas.

## Desenvolvimento

Instale as dependências com `npm install` e inicie com `npm run dev`. A aplicação usa Next.js 16.3.5, React 19.2.8 e Tailwind CSS 4. Antes de alterar código, leia os guias pertinentes em `node_modules/next/dist/docs/`, conforme `AGENTS.md`.

Verificações da aplicação:

```sh
npm run lint -- app
node node_modules/typescript/bin/tsc --noEmit
npm run build
```

Validação em 15/10/2026: lint, TypeScript e build de produção aprovados. Revisão visual em computador e celular aprovada; imagens, âncoras, contatos, menu móvel e navegação por teclado nos modais conferidos. Contraste dos pares principais de texto e botão acima de 4,5:1.

## Identidade e implementação

O tema fica em `app/globals.css`, usando `@theme inline` do Tailwind CSS 4. O logo original forneceu amostras frequentes quantizadas de dourado (#e0b060), bronze (#a07030) e dourado claro (#f0c880), obtidas com sharp e exclusão de pixels transparentes. A escala e os neutros são derivados: marfim (#f8f5ee) e escuro (#191711) estruturam a página. Os CTAs principais usam dourado com texto escuro; bronze sustenta acentos nas superfícies claras.

Cinzel nos títulos e Manrope no corpo são carregadas por `next/font/google` em `app/layout.tsx`. Esse arquivo também define metadados em português brasileiro, ícones com o logo original e cor do navegador escura. Configure `NEXT_PUBLIC_SITE_URL` com a URL absoluta de produção para habilitar as imagens de compartilhamento; o retrato de 408 × 510 é a imagem usada no código.

Dados, depoimentos e links ficam em `app/lib/brand.ts`. Seções, menu móvel e modais ficam em `app/page.tsx`; o CTA reutilizável fica em `app/components/GlowingButton.tsx`. Apesar do nome do componente, seu tratamento atual é plano, com fundo dourado, raio pequeno e mudança de cor no hover.

## Dados confirmados

- Eduardo Cury, advogado criminalista em Ituiutaba, MG.
- Telefone e WhatsApp: (34) 99111-6365; número internacional: 5534991116365.
- Endereço: Av. 13, 658 — Sala 801 — Centro, Ituiutaba — MG, 38300-140. Edifício Ituiutaba.
- Atendimento 24 horas, informado pelo cliente.
- Instagram: [@eduardocuryadv](https://www.instagram.com/eduardocuryadv/).
- Google: nota 5,0 e 45 avaliações, valores estáticos fornecidos pelo cliente. O código usa o [perfil Google](https://www.google.com/maps?cid=8361611520771558648); não consulta avaliações ao vivo.
- Depoimentos fornecidos: Ana Paula Resende, Moriza Araújo e Marcella Barbieri; textos centralizados em `app/lib/brand.ts`.

E-mail, OAB, formação, experiência e resultados não foram fornecidos. Não preencher esses campos por suposição nem transformar o horário informado em promessa de prazo de resposta.

## Arquivos de marca e documentação

| Arquivo em public/ | Dimensões | Uso |
| --- | --- | --- |
| Logotipo Dourado Eduardo Cury Advocacia.png | 1961 × 802 | Logo transparente original, cabeçalho, rodapé e ícones |
| eduardo-cury-advogado.png | 408 × 510 | Retrato com beca no hero e compartilhamento |
| eduardo-cury-escritorio.png | 282 × 506 | Apresentação do advogado no escritório |

As fotografias são cópias exatas dos anexos do usuário. A implementação preserva as proporções, com `object-contain` no retrato e altura automática na foto do escritório.

`PRODUCT.md` registra identidade, público e evidências. `DESIGN.md` registra os tokens e padrões extraídos do código; `.impeccable/design.json` mantém extensões e exemplos independentes de framework no schemaVersion 2. `.impeccable/eduardo-cury-direction.md` registra o contrato aprovado para esta página e os critérios de fechamento.
