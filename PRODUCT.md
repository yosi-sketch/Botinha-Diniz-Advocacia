# Dr. Murilo Alvarenga Nunes

<!-- impeccable:product-schema 1 -->

## Platform
web

## Users
Pessoas, famílias, empresas e produtores rurais que procuram orientação jurídica em Piumhi e Capitólio, Minas Gerais. Precisam compreender as áreas de atuação, reunir informações iniciais e encontrar um canal direto de atendimento.

## Product Purpose
Apresentar Dr. Murilo Alvarenga Nunes e seu escritório, explicar as sete áreas em linguagem acessível e facilitar contato por WhatsApp, telefone e Instagram, além da localização dos dois escritórios.

## Positioning
Advocacia com atenção individual, escuta, sigilo e comunicação clara. Murilo Alvarenga Nunes é advogado inscrito na OAB/MG sob o nº 102.602, conforme o logo fornecido. A orientação considera documentos e circunstâncias de cada demanda; a comunicação não promete resultados.

## Operating Context
Site institucional pt-BR em uma página: início, faixa de atendimento, atuação, Sobre, acompanhamento, perguntas frequentes, avaliações, contato e rodapé. As sete áreas abrem detalhes em modais: Direito Previdenciário, Direito Ambiental, Direito do Agronegócio, Direito Bancário, Direito Cível, Direito Empresarial e Direito Trabalhista, nessa ordem no código.

O hero usa o material institucional BNI original completo. O Sobre apresenta um painel com o logo. A arte sobre verbas rescisórias aparece somente no modal trabalhista. A página apresenta três trechos literais de avaliações, nota e quantidade fornecidas, link ao perfil no Google e mapas específicos de Piumhi e Capitólio.

## Capabilities and Constraints
Next.js, React, Tailwind CSS 4, Framer Motion e Lucide. Dados e destinos em app/lib/brand.ts; página e modais em app/page.tsx; tema em app/globals.css; fontes e metadados em app/layout.tsx; CTA compartilhado em app/components/GlowingButton.tsx. Antes de alterar código Next.js, consultar os guias pertinentes em node_modules/next/dist/docs/, conforme AGENTS.md.

Preservar a estrutura estabelecida, responsividade e acessibilidade: link de salto, foco visível, menu com aria-expanded e aria-controls, fechamento por seleção ou Escape, diálogos nomeados com aria-modal, foco inicial no botão de fechar, ciclo Tab/Shift+Tab, retorno ao controle de origem, fundo inert, bloqueio e restauração da rolagem. FAQ com details e summary nativos. Respeitar movimento reduzido.

Menu móvel sobreposto e ancorado abaixo do cabeçalho, sem deslocar o conteúdo: posição absoluta, largura total e top: 100%; interior com altura máxima calc(100dvh - 104px), ou calc(100dvh - 120px) em sm, e rolagem vertical. As âncoras usam rolagem nativa imediata, scroll-padding-top de 2rem no html e margem de rolagem de 6rem nas seções.

Não inventar e-mail, horários, outras credenciais, experiência, resultados ou avaliações. A nota do Google é estática, sem integração ao vivo. O domínio de produção ainda precisa ser informado em NEXT_PUBLIC_SITE_URL, com URL absoluta, para fornecer a base dos metadados e as imagens sociais.

## Brand Commitments
Identidade: Dr. Murilo Alvarenga Nunes; nome comercial no código: Murilo Alvarenga Nunes — Advogado. Paleta e combinação tipográfica apoiadas no logo MA original, preservando transparência, cores e proporções das imagens.

Amostragem informada com sharp, alpha ≥ 240 e quantização em passos de 16: bronze #c09050 (5.850 pixels), dourado #e0b060 (5.846) e luz #f0d080 (5.324). Escala restante e neutros derivados, incluindo marfim #faf7f0 e carvão #141310. Cinzel complementa as serifas romanas do logo; Manrope serve leitura e controles, ambas via next/font/google.

Preservar integralmente o retrato institucional de 617 × 788, incluindo marca BNI e texto tributário presentes no material. Esse texto incorporado à imagem não amplia a lista editorial das sete áreas solicitadas. Não recortar, recolorir, reexportar ou inserir metadados nos PNGs. Os caminhos e os usos são definidos no código; a proveniência permanece externa em .impeccable/asset-origins.json.

Direção da página em .impeccable/murilo-alvarenga-direction.md; tokens observados em DESIGN.md e extensões schemaVersion 2 em .impeccable/design.json.

## Evidence on Hand

- Nome: Dr. Murilo Alvarenga Nunes; inscrição: OAB/MG 102.602, extraída do logo fornecido.
- Telefone: (37) 99983-6911; WhatsApp internacional: 5537999836911; ligação: tel:+5537999836911.
- Piumhi: R. Dom Pedro II, 86 — Centro, Piumhi — MG, 37925-000.
- Capitólio: Rua Arcemino Rodrigues da Cunha, 123 — Capitólio — MG.
- Instagram: [@murilo_alvarenga_nunes](https://www.instagram.com/murilo_alvarenga_nunes/).
- Google: nota 5,0 e 134 avaliações fornecidas pelo usuário, sem consulta ao vivo; [perfil com CID fornecido](https://www.google.com/maps?cid=2448691614492770861). Os mapas de localização usam buscas separadas para os dois endereços.
- Três trechos literais em app/lib/brand.ts, de João Marcos Oliveira, Altarf Engenharia e Consultoria e Kerlon Moura Pureza. Preservar texto e autoria, sem promessas de resultado.
- public/murilo-alvarenga-logo.png: 1774 × 887; cabeçalho, Sobre, rodapé e ícones.
- public/murilo-alvarenga-advogado.png: 617 × 788; material institucional BNI integral no hero e no compartilhamento.
- public/verbas-rescisorias.png: 632 × 839; arte original no modal Direito Trabalhista, exibida proporcionalmente.
- .impeccable/asset-origins.json: dimensões, origens e SHA-256 confirmam que as três imagens são idênticas aos anexos. Preservar esse registro e os PNGs.

QA do executor informado em 15/10/2026: lint de app, TypeScript e build de produção passaram. Sete modais e links específicos corretos; imagens carregadas; Tab/Shift+Tab circulam no diálogo, Escape fecha e devolve o foco. Menu móvel fecha ao clicar Contato; a seção inicia 127,8px abaixo do topo com cabeçalho de 104px. Sem overflow horizontal em 320px, 390px, 768px e 1440px. Contrastes medidos: #695e4e/#faf7f0 = 5,93:1; #775225/#faf7f0 = 6,50:1; #141310/#e0b060 = 9,33:1; #f5e6c8/#141310 = 15,07:1.

Revisão independente concluída em 15/10/2026, conforme atualização do usuário: **disposition ship**, sem achado material impeditivo no escopo pedido. O reviewer leu o código, examinou sete capturas, conferiu os três depoimentos no anexo e o SHA-256 das três imagens; os contrastes foram confirmados independentemente. Limites: o blur JPEG do IAB nas capturas de .impeccable/review/ limita a avaliação de nitidez fina. Lint, TypeScript, build e operações do navegador foram informados pelo executor, não repetidos pelo reviewer. Preview: [localhost:3015](http://localhost:3015).

## Product Principles
Clareza sobre os próximos passos, atenção à história de cada pessoa, identidade apoiada em materiais autênticos, sigilo e contato direto com a equipe. Distinguir fatos fornecidos, verificações do executor e escopo da revisão independente.
