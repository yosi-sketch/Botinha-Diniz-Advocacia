# Raynne Lopes — direção da página institucional

Contrato de rebranding integral autorizado pelo usuário. A direção já foi definida: cores e fontes baseadas no logo, preservação da responsividade, dos componentes, dos modais e dos CTAs com novos destinos. Não reabrir entrevista nem gerar conceitos adicionais. PRODUCT.md guarda os fatos; DESIGN.md e design.json registram o sistema observado.

## Surface

- Target: app/page.tsx, rota /.
- Platform: web; idioma pt-BR.
- Mode: Persuade.
- Build path: code.
- Objetivo: compreender a atuação e iniciar contato com Raynne Lopes e sua equipe em Sete Lagoas, MG.

## THESIS

Clareza e atenção à sua história. Apresentar orientação previdenciária, assistencial, de consumo e aérea com escuta, técnica, sensibilidade e sigilo, sem prometer resultados.

## OWN-WORLD

Logo R&L original dourado/bronze. Amostragem com sharp: alpha ≥ 240, pixels coloridos quentes, quantização em passos de 16; #b07020 (16.699), #f0b040 (12.680), #ffd060 (8.104), #d09030 (13.535) e #603000 (11.761). A escala restante e os neutros são derivados no CSS, incluindo marfim #faf6ef e escuro #1c1712. Cinzel complementa as serifas romanas do logo; Manrope serve corpo e controles.

## STORY

1. Compreender a proposta e encontrar contato imediato.
2. Explorar os quatro modais: Direito Previdenciário/INSS; Benefícios assistenciais BPC/LOAS; Direito do Consumidor; Direito Aéreo.
3. Conhecer Raynne Lopes, advogada e professora de Prática Previdenciária, conforme bio do usuário. O Sobre traz painel da marca.
4. Entender o acompanhamento e consultar perguntas frequentes.
5. Ler os trechos literais de Júlia Rodrigues, Paulo de Andrade e GEORGE DAUT, preservando autoria.
6. Contatar a equipe e localizar o escritório; acessar Instagram e Threads.

## FIRST VIEWPORT

Cabeçalho escuro com logo original servido pela cópia de caminho simples. Altura de 104px no celular e 120px em sm; logo com largura de 176px/208px. H1: “Seus direitos merecem uma atenção especial.” WhatsApp em destaque, localização em Sete Lagoas e retrato autêntico de largura máxima de 408px, proporção 614/803, sem recorte. A composição empilha no celular. Essa composição pertence a esta página.

## FORM

Estrutura e componentes existentes preservados; CTAs principais dourados com texto escuro e raio pequeno. Contêiner de 80rem, gutters de 20px/32px/48px; menu móvel, modais com Escape, ciclo e retorno de foco, fundo inert e bloqueio de rolagem. Foco visível e movimento reduzido implementados. Menu móvel em overlay absoluto, inset-x-0 e top-full, ancorado abaixo do cabeçalho, sem empurrar o conteúdo. Interior com altura máxima calc(100dvh - 104px), ou calc(100dvh - 120px) em sm, e overflow-y-auto. O padrão evita deslocamento das âncoras ao fechar o menu durante a rolagem.

Original: public/Logotipo Jurídico Dourado R&L.png (1774 × 887, RGBA), intacto. Cópia idêntica: public/raynne-lopes-logo.png, usada por brand.logo para evitar o HTTP 400 observado no otimizador Next com & no caminho original. Retrato: public/raynne-lopes-advogada.png (614 × 803), cópia exata do anexo do usuário. Origens e hashes em asset-origins.json, fora dos PNGs. Não restaurar ativos excluídos pelo usuário.

## CONTENT TRUTH

Raynne Lopes Advocacia Especializada; advogada e professora de Prática Previdenciária. Telefone (31) 98497-3275; WhatsApp 5531984973275. Endereço: R. Goiás, 750 — Boa Vista, Sete Lagoas — MG, 35700-030. Instagram e Threads: @raynnelopes.adv. E-mail, OAB e horário não fornecidos.

O material Google “4,929 avaliações” foi interpretado como nota 4,9 e 29 avaliações. Dados estáticos, sem integração. Os três trechos literais ficam em app/lib/brand.ts; não ampliar nem inventar depoimentos. Os links externos de avaliações e mapa usam busca pelo nome e endereço, sem identificador de perfil confirmado.

## FINISH

Status em 15/10/2026 informado pelo responsável pela implementação: lint, TypeScript e build aprovados; build novamente aprovado após o ajuste do caminho do logo. SHA-256 confirmado: original e cópia do logo idênticos; retrato idêntico ao anexo. Revisão final independente aprovada em 15/10/2026, conforme resultado informado abaixo.

QA informado pelo agente principal em 15/10/2026: quatro modais funcionam; Tab e Shift+Tab mantêm o foco no diálogo, Escape fecha e restaura o botão de origem. Sem overflow horizontal em 320px, 390px, 768px e 1440px. Contrastes medidos: texto secundário #6b5c4b / marfim #faf6ef = 5,98:1; bronze #784b18 / marfim = 6,92:1; texto #1c1712 / dourado #f0b040 = 9,31:1; claro #f9e7c4 / escuro #1c1712 = 14,61:1. Revisão final independente concluída por impeccable_finish_reviewer em 15/10/2026: disposição ship, aprovado no escopo solicitado, sem achados materiais no código nem pendências. Foram examinadas nove capturas obrigatórias e capturas extras de FAQ/contato; trechos de fonte e hashes confirmados. Rodapé revisado em código; verificações de navegador, teclado, overflow, contraste, fontes, lint e build realizadas pelo executor. As capturas JPEG do IAB com blur limitam a avaliação de nitidez fina. QA nativo final informado pelo executor: âncoras #sobre a 128px e #contato a 127px, abaixo do cabeçalho de 104px; FAQ abre e fecha com contato correto; todas as âncoras existentes e quatro imagens carregadas.

Previews: desenvolvimento http://localhost:3012; produção http://localhost:3013. Fechamento aprovado no escopo solicitado, sem pendências.
