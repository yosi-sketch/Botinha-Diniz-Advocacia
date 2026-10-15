# Página institucional — Dr. Murilo Alvarenga Nunes

## Surface

- Target: app/page.tsx, rota /.
- Platform: web; idioma pt-BR.
- Mode: Persuade.
- Build path: code; estrutura estabelecida preservada, sem nova rodada de conceitos.
- Objetivo: conhecer o profissional e as sete áreas, compreender os próximos passos e iniciar contato em Piumhi ou Capitólio.

## THESIS

Apresentar o advogado e suas sete áreas com clareza e acesso direto ao WhatsApp, preservando componentes, navegação, responsividade e modais. A mensagem do hero é “Seus direitos. Seu patrimônio. Nossa dedicação.”; a comunicação respeita a análise individual e não promete resultados.

## OWN-WORLD

Logo MA original dourado com transparência. Paleta amostrada com sharp, alpha ≥ 240 e quantização 16: bronze #c09050 (5.850 pixels), dourado #e0b060 (5.846) e luz #f0d080 (5.324). Marfim #faf7f0, carvão #141310 e demais passos derivados. Cinzel complementa as serifas romanas do logo; Manrope sustenta leitura e controles, ambas via next/font/google. Tokens normativos em ../DESIGN.md; extensões em design.json.

## STORY

1. Identificar Dr. Murilo Alvarenga Nunes e encontrar contato imediato.
2. Explorar sete áreas com modais próprios: Previdenciário, Ambiental, Agronegócio, Bancário, Cível, Empresarial e Trabalhista.
3. Conhecer a apresentação profissional e o painel da marca no Sobre.
4. Compreender o atendimento e consultar perguntas frequentes.
5. Ler três trechos literais de avaliações fornecidas, com autoria e acesso ao perfil no Google.
6. Contatar a equipe por WhatsApp/telefone/Instagram e localizar os escritórios de Piumhi e Capitólio.

## FIRST VIEWPORT

Cabeçalho escuro, logo de 176px/208px e navegação; altura de 104px no celular e 120px em sm. Título à esquerda, CTA dourado e material institucional BNI íntegro à direita, proporção 617/788 e largura máxima de 408px. O logo conserva a proporção 1774/887. No celular, sequência vertical e menu sobreposto. Essa composição pertence a esta página.

## FORM

Contêiner de 80rem, gutters 20px/32px/48px e CTAs dourados com texto escuro e raio pequeno. Assinatura de movimento: moldura bronze do retrato; respeitar movimento reduzido. Menu móvel absoluto abaixo do cabeçalho, largura total e top: 100%, sem deslocar as seções; interior com altura máxima calc(100dvh - 104px), ou calc(100dvh - 120px) em sm, e rolagem vertical.

Preservar link de salto e foco visível; menu com estado e controle associados, fechamento por seleção ou Escape. Sete modais com título associado, role dialog, aria-modal, foco inicial, ciclo Tab/Shift+Tab, Escape, retorno de foco, fundo inert e bloqueio/restauração de rolagem. FAQ nativo. Âncoras com rolagem imediata.

## CONTENT TRUTH

Dr. Murilo Alvarenga Nunes; Murilo Alvarenga Nunes — Advogado; OAB/MG 102.602 conforme o logo. Telefone (37) 99983-6911; WhatsApp 5537999836911; Instagram [@murilo_alvarenga_nunes](https://www.instagram.com/murilo_alvarenga_nunes/).

Piumhi: R. Dom Pedro II, 86 — Centro, Piumhi — MG, 37925-000. Capitólio: Rua Arcemino Rodrigues da Cunha, 123 — Capitólio — MG. E-mail e horários não fornecidos; não inventar.

Nota 5,0 e 134 avaliações provenientes do texto enviado, sem integração ao vivo. Perfil: [Google Maps, CID fornecido](https://www.google.com/maps?cid=2448691614492770861). Mapas de localização são buscas separadas para cada endereço. Três trechos literais de João Marcos Oliveira, Altarf Engenharia e Consultoria e Kerlon Moura Pureza em app/lib/brand.ts, sem promessas de resultado.

### Materiais e proveniência

- public/murilo-alvarenga-logo.png: 1774 × 887; logo original MA no cabeçalho, Sobre, rodapé e ícones.
- public/murilo-alvarenga-advogado.png: 617 × 788; material institucional completo no hero e compartilhamento. A marca BNI e o texto tributário integram o anexo; não ampliam as sete áreas editoriais solicitadas.
- public/verbas-rescisorias.png: 632 × 839; arte sobre verbas rescisórias no modal trabalhista, largura máxima de 280px e altura proporcional.

As três imagens são cópias exatas dos anexos. Origem, dimensões e SHA-256 em asset-origins.json, preservado. Não alterar PNGs nem embutir metadados; registrar proveniência externamente e usar caminhos no código.

## FINISH

Em 15/10/2026, o executor informou lint de app, TypeScript e build de produção aprovados; sete modais e links específicos corretos, imagens carregadas, ciclo Tab/Shift+Tab, Escape e retorno de foco confirmados. Menu móvel fecha ao clicar Contato; seção a 127,8px do topo com cabeçalho de 104px. Sem overflow horizontal em 320px, 390px, 768px e 1440px.

Contrastes medidos pelo executor e confirmados independentemente: #695e4e/#faf7f0 = 5,93:1; #775225/#faf7f0 = 6,50:1; #141310/#e0b060 = 9,33:1; #f5e6c8/#141310 = 15,07:1.

Revisão independente concluída em 15/10/2026, conforme atualização do usuário: **disposition ship**, nenhum achado material impeditivo no escopo pedido. O reviewer leu o código, examinou sete capturas, conferiu três depoimentos no anexo e SHA-256 das três imagens, além dos contrastes. Limites: blur JPEG do IAB nas capturas em .impeccable/review/ limita nitidez fina; lint, TypeScript, build e operações do navegador foram informados pelo executor, não repetidos pelo reviewer.

Preview atual: [localhost:3015](http://localhost:3015). O domínio de produção ainda precisa ser fornecido em NEXT_PUBLIC_SITE_URL para imagens sociais absolutas. A atualização de documentação preserva o registro de origem e não repete detector ou build.
