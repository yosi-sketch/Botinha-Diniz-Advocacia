# Raynne Lopes Advocacia Especializada

<!-- impeccable:product-schema 1 -->

## Platform
web

## Users
Pessoas e famílias que procuram orientação sobre benefícios do INSS, BPC/LOAS, relações de consumo e problemas com viagens aéreas, com escritório em Sete Lagoas, Minas Gerais.

## Product Purpose
Apresentar Raynne Lopes e sua equipe, explicar as áreas de atuação em linguagem acessível e facilitar contato por WhatsApp, telefone e redes sociais.

## Positioning
Advocacia especializada com atenção individual, escuta, sigilo e comunicação clara. Raynne Lopes é advogada e professora de Prática Previdenciária, conforme bio fornecida pelo usuário. A comunicação respeita a análise individual de cada demanda e não promete resultados.

## Operating Context
Site institucional pt-BR por seções: início, atuação, Sobre, acompanhamento, perguntas frequentes, avaliações e contato. Quatro áreas têm detalhes nos modais existentes: Direito Previdenciário; Benefícios assistenciais; Direito do Consumidor; Direito Aéreo. O Sobre usa painel da marca. A página oferece três trechos de avaliações, busca de endereço no Google Maps e acesso a Instagram e Threads.

## Capabilities and Constraints
Next.js 16.3.5, React 19.2.8, Tailwind CSS 4, Framer Motion e Lucide. Dados centralizados em app/lib/brand.ts, tema em app/globals.css, metadados e fontes em app/layout.tsx. Antes de alterar código Next.js, consultar os guias locais em node_modules/next/dist/docs/, conforme AGENTS.md.

Preservar responsividade, componentes e CTAs, com destinos da marca atual. Manter navegação por teclado, foco visível, fechamento por Escape, ciclo e retorno de foco nos modais, fundo inert, bloqueio de rolagem e suporte a movimento reduzido. Menu móvel em overlay absoluto, inset-x-0 e top-full, ancorado abaixo do cabeçalho, sem empurrar o conteúdo. Interior com altura máxima calc(100dvh - 104px), ou calc(100dvh - 120px) em sm, e overflow-y-auto. O padrão evita deslocamento das âncoras ao fechar o menu durante a rolagem. Revisão final independente aprovada no escopo solicitado, sem pendências.

Não inventar e-mail, OAB, horário, outras credenciais, experiência, resultados ou avaliações. Nota e quantidade de avaliações são estáticas. A busca do Google Maps usa nome e endereço; não há integração ao vivo nem identificador confirmado de perfil. O domínio de produção não foi fornecido; NEXT_PUBLIC_SITE_URL configura a base dos metadados.

## Brand Commitments
Identidade autorizada: Raynne Lopes Advocacia Especializada. Direção explicitamente pedida pelo usuário: cores e fonte baseadas no logo, preservando componentes e responsividade, sem nova rodada de conceitos.

O logo original dourado R&L conserva cores, transparência e proporção. Amostragem sharp com alpha ≥ 240, seleção de pixels coloridos quentes e quantização de 16: #b07020 (16.699), #f0b040 (12.680), #ffd060 (8.104), #d09030 (13.535) e #603000 (11.761). Escala restante e neutros derivados em app/globals.css, incluindo marfim #faf6ef e escuro #1c1712. Cinzel complementa as serifas romanas do logo; Manrope sustenta leitura e controles. O retrato autêntico permanece integral e proporcional.

Direção da página em .impeccable/raynne-lopes-direction.md; sistema observado em DESIGN.md e extensões schemaVersion 2 em .impeccable/design.json.

## Evidence on Hand

- Nome: Raynne Lopes; marca: Raynne Lopes Advocacia Especializada.
- Bio fornecida: advogada e professora de Prática Previdenciária.
- Áreas confirmadas: Previdenciário/INSS, BPC/LOAS, Consumidor e Aéreo.
- Telefone: (31) 98497-3275; WhatsApp internacional: 5531984973275.
- Endereço: R. Goiás, 750 — Boa Vista, Sete Lagoas — MG, 35700-030.
- Instagram: https://www.instagram.com/raynnelopes.adv/; Threads: https://www.threads.com/@raynnelopes.adv.
- Material Google “4,929 avaliações” interpretado como nota 4,9 e 29 avaliações; dados fornecidos pelo usuário, sem consulta ao vivo.
- Trechos literais de Júlia Rodrigues, Paulo de Andrade e GEORGE DAUT em app/lib/brand.ts.
- Original: public/Logotipo Jurídico Dourado R&L.png, 1774 × 887, RGBA, intacto.
- Cópia de uso: public/raynne-lopes-logo.png, mesmos bytes e dimensões; brand.logo usa esse caminho. O otimizador Next retornou HTTP 400 para o nome original com &, conforme verificação da implementação.
- Retrato: public/raynne-lopes-advogada.png, 614 × 803, cópia exata de C:/Users/matheus/AppData/Local/Temp/codex-clipboard-8b7613b4-0941-4f3c-9f44-954dcbd42923.png.
- Origens e SHA-256 verificados externamente em .impeccable/asset-origins.json; nenhum PNG alterado nesta documentação.
- Em 15/10/2026, lint, TypeScript e build aprovados segundo o responsável pela implementação; build novamente aprovado após o ajuste do caminho do logo. Revisão final independente aprovada por impeccable_finish_reviewer em 15/10/2026, disposição ship.

QA informado pelo agente principal em 15/10/2026: quatro modais funcionam; Tab e Shift+Tab mantêm o foco no diálogo, Escape fecha e restaura o botão de origem. Sem overflow horizontal em 320px, 390px, 768px e 1440px. Contrastes medidos: texto secundário #6b5c4b / marfim #faf6ef = 5,98:1; bronze #784b18 / marfim = 6,92:1; texto #1c1712 / dourado #f0b040 = 9,31:1; claro #f9e7c4 / escuro #1c1712 = 14,61:1. Revisão final independente concluída por impeccable_finish_reviewer em 15/10/2026: disposição ship, aprovado no escopo solicitado, sem achados materiais no código nem pendências. Foram examinadas nove capturas obrigatórias e capturas extras de FAQ/contato; trechos de fonte e hashes confirmados. Rodapé revisado em código; verificações de navegador, teclado, overflow, contraste, fontes, lint e build realizadas pelo executor. As capturas JPEG do IAB com blur limitam a avaliação de nitidez fina. QA nativo final informado pelo executor: âncoras #sobre a 128px e #contato a 127px, abaixo do cabeçalho de 104px; FAQ abre e fecha com contato correto; todas as âncoras existentes e quatro imagens carregadas.

## Product Principles
Clareza para compreender os próximos passos, atenção à história de cada pessoa, identidade apoiada em materiais autênticos, respeito ao sigilo e acesso direto à equipe. Distinguir informações fornecidas pelo usuário de dados consultados em tempo real.
