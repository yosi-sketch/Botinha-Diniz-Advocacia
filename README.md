# Raynne Lopes Advocacia Especializada

Site institucional em português brasileiro para Raynne Lopes, advogada e professora de Prática Previdenciária, em Sete Lagoas, MG. Apresenta Previdenciário/INSS, benefícios assistenciais BPC/LOAS, Consumidor e Aéreo, com detalhes em modais, apresentação profissional, perguntas frequentes, avaliações e contato direto.

## Desenvolvimento

Instale as dependências com npm install e inicie com npm run dev. A aplicação usa Next.js 16.3.5, React 19.2.8, Tailwind CSS 4, Framer Motion e Lucide. Antes de alterar código Next.js, leia os guias pertinentes em node_modules/next/dist/docs/, conforme AGENTS.md.

Verificações: npm run lint -- app; node node_modules/typescript/bin/tsc --noEmit; npm run build.

Status informado pelo responsável pela implementação em 15/10/2026: lint, TypeScript e build de produção aprovados; build novamente aprovado após a troca do caminho do logo. Revisão final independente aprovada em 15/10/2026, conforme resultado informado abaixo.

QA informado pelo agente principal em 15/10/2026: quatro modais funcionam; Tab e Shift+Tab mantêm o foco no diálogo, Escape fecha e restaura o botão de origem. Sem overflow horizontal em 320px, 390px, 768px e 1440px. Contrastes medidos: texto secundário #6b5c4b / marfim #faf6ef = 5,98:1; bronze #784b18 / marfim = 6,92:1; texto #1c1712 / dourado #f0b040 = 9,31:1; claro #f9e7c4 / escuro #1c1712 = 14,61:1. Revisão final independente concluída por impeccable_finish_reviewer em 15/10/2026: disposição ship, aprovado no escopo solicitado, sem achados materiais no código nem pendências. Foram examinadas nove capturas obrigatórias e capturas extras de FAQ/contato; trechos de fonte e hashes confirmados. Rodapé revisado em código; verificações de navegador, teclado, overflow, contraste, fontes, lint e build realizadas pelo executor. As capturas JPEG do IAB com blur limitam a avaliação de nitidez fina. QA nativo final informado pelo executor: âncoras #sobre a 128px e #contato a 127px, abaixo do cabeçalho de 104px; FAQ abre e fecha com contato correto; todas as âncoras existentes e quatro imagens carregadas.

Previews locais da implementação: desenvolvimento em http://localhost:3012 e produção em http://localhost:3013.

## Identidade e implementação

O tema em app/globals.css usa @theme inline. Amostragem do logo com sharp, ignorando alpha < 240, selecionando pixels coloridos quentes e quantizando em passos de 16, encontrou bronze #b07020 (16.699 pixels), dourado #f0b040 (12.680), luz #ffd060 (8.104), #d09030 (13.535) e #603000 (11.761). Os demais passos e os neutros são derivados: marfim #faf6ef e escuro #1c1712 estruturam as superfícies.

Cinzel nos títulos complementa as serifas romanas do logo; Manrope serve leitura e controles. Ambas são carregadas por next/font/google em app/layout.tsx, que também define metadados pt-BR, ícones e cor do navegador. Configure NEXT_PUBLIC_SITE_URL com a URL absoluta de produção para habilitar as imagens de compartilhamento. O retrato de 614 × 803 é usado para compartilhamento.

Dados, três trechos literais de avaliações e links ficam em app/lib/brand.ts. A página e os modais ficam em app/page.tsx; os CTAs reutilizáveis em app/components/GlowingButton.tsx. Os componentes e CTAs foram preservados no rebranding, com destinos atualizados. O botão principal tem fundo dourado, texto escuro e raio pequeno.

O cabeçalho mede 104px no celular e 120px a partir de sm; o logo mede 176px/208px de largura. O retrato tem largura máxima de 408px e mantém a proporção 614/803 com object-contain. A seção Sobre usa um painel da marca. Menu móvel em overlay absoluto, inset-x-0 e top-full, ancorado abaixo do cabeçalho, sem empurrar o conteúdo. Interior com altura máxima calc(100dvh - 104px), ou calc(100dvh - 120px) em sm, e overflow-y-auto. O padrão evita deslocamento das âncoras ao fechar o menu durante a rolagem. Modais, foco visível e movimento reduzido permanecem implementados.

## Dados confirmados

- Raynne Lopes, advogada e professora de Prática Previdenciária, conforme bio fornecida pelo usuário.
- Atuação: Previdenciário/INSS, BPC/LOAS, Consumidor e Aéreo.
- Telefone: (31) 98497-3275; WhatsApp: https://wa.me/5531984973275; ligação: tel:+5531984973275.
- Endereço: R. Goiás, 750 — Boa Vista, Sete Lagoas — MG, 35700-030.
- Instagram: [@raynnelopes.adv](https://www.instagram.com/raynnelopes.adv/); [Threads](https://www.threads.com/@raynnelopes.adv).
- Google: nota 4,9 e 29 avaliações, interpretadas do material colado pelo usuário como “4,929 avaliações”. São dados estáticos, sem integração. Os links de mapa e avaliações usam busca do Google Maps pelo nome e endereço; não há identificador de perfil confirmado.
- Trechos literais de Júlia Rodrigues, Paulo de Andrade e GEORGE DAUT em app/lib/brand.ts; preservar texto e autoria.

E-mail, OAB e horário de atendimento não foram fornecidos. Não presumir essas informações, outras credenciais ou resultados.

## Ativos e documentação

| Arquivo em public/ | Dimensões | Origem e uso |
| --- | --- | --- |
| Logotipo Jurídico Dourado R&L.png | 1774 × 887, RGBA | Original do usuário, preservado integralmente |
| raynne-lopes-logo.png | 1774 × 887, RGBA | Cópia idêntica usada por brand.logo, cabeçalho, Sobre, rodapé e ícones |
| raynne-lopes-advogada.png | 614 × 803 | Cópia exata do retrato anexado; hero e compartilhamento |

O caminho original com & retornou HTTP 400 no otimizador Next durante a verificação da implementação. A cópia com nome simples resolve a compatibilidade sem modificar o original; os dois logos têm o mesmo SHA-256. O retrato também tem SHA-256 igual ao anexo. Origens, dimensões e hashes ficam em .impeccable/asset-origins.json, externamente aos PNGs.

PRODUCT.md registra fatos e restrições. DESIGN.md documenta tokens reais e padrões do código. .impeccable/design.json preserva schemaVersion 2, com ramps atualizadas e exemplos independentes de framework. .impeccable/raynne-lopes-direction.md registra a direção autorizada para a página e o estado de validação.
