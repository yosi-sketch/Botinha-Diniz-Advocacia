---
name: "Raynne Lopes Advocacia Especializada"
description: "Dourado e bronze do logo original, superfícies quentes e títulos romanos Cinzel."
colors:
  ink: "#2b2118"
  ink-soft: "#6b5c4b"
  paper: "#ffffff"
  ivory: "#faf6ef"
  linen: "#eee4d5"
  brand-50: "#fcf5e7"
  brand-100: "#f9e7c4"
  brand-200: "#ffd060"
  brand-300: "#f0b040"
  brand-400: "#d09030"
  brand-500: "#b07020"
  brand-600: "#925b1b"
  brand-700: "#784b18"
  brand-800: "#603000"
  brand-900: "#302319"
  brand-950: "#1c1712"
typography:
  display:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "2.4rem"
    fontWeight: 400
    lineHeight: 1.16
    letterSpacing: "-0.025em"
  display-tablet:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "3.3rem"
  display-desktop:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "3.65rem"
  headline:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1.07
  headline-tablet:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "3rem"
  headline-desktop:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "3.55rem"
  service-title:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "1.55rem"
    lineHeight: 1.25
  service-title-tablet:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "1.8rem"
  title:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "1.5rem"
  testimonial-name:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "1.25rem"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "15px"
    lineHeight: "1.75rem"
  compact-body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "13px"
    lineHeight: "1.5rem"
  navigation:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.14em"
  micro-label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "10px"
    fontWeight: 600
    letterSpacing: "0.13em"
  information-label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "11px"
    lineHeight: "1.25rem"
  body-small:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "14px"
    lineHeight: "1.75rem"
  body-large:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "16px"
    lineHeight: "2rem"
  portrait-name:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "1.125rem"
  intermediate-title:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "1.7rem"
    fontWeight: 400
    lineHeight: 1.25
  faq-title:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "1.875rem"
    lineHeight: 1.25
rounded:
  square: "0"
  sm: "0.25rem"
  modal-mobile: "1rem"
  full: "9999px"
spacing:
  gutter-mobile: "1.25rem"
  gutter-tablet: "2rem"
  gutter-desktop: "3rem"
  section-mobile: "5rem"
  section-tablet: "7rem"
  section-desktop: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.brand-300}"
    textColor: "{colors.brand-950}"
    rounded: "{rounded.sm}"
    padding: "0.875rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.brand-200}"
    textColor: "{colors.brand-950}"
  button-primary-small:
    backgroundColor: "{colors.brand-300}"
    textColor: "{colors.brand-950}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.25rem"
  button-primary-large:
    backgroundColor: "{colors.brand-300}"
    textColor: "{colors.brand-950}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.75rem"
---

# Design System: Raynne Lopes Advocacia Especializada

## Overview

**Creative North Star: "Clareza e atenção à sua história"**

O dourado e o bronze do logo R&L dão presença à identidade Raynne Lopes Advocacia Especializada; marfim e superfícies escuras quentes organizam a leitura. As cores mantêm a marca reconhecível a partir do material original fornecido pelo usuário.

Cinzel complementa as serifas romanas do logo nos títulos; Manrope mantém textos e controles legíveis. Retrato autêntico proporcional, painel da marca e ações principais de raio pequeno sustentam a apresentação.

**Key Characteristics:**

- Logo R&L dourado original com cores, transparência e proporções preservadas.
- Superfícies quentes claras e escuras com acentos dourados e bronze.
- Títulos Cinzel e leitura Manrope.
- Retrato autêntico sem recorte e ações principais com raio pequeno.

## Colors

Valores normativos no frontmatter, extraídos de app/globals.css. As variáveis de raiz brand-ink, brand-ink-soft e brand-paper correspondem a ink, ink-soft e ivory; color-paper é o branco usado nos componentes.

### Primary

Dourado da marca (brand-300) preenche os CTAs e destaca palavras sobre o escuro. Luz dourada (brand-200) atende ao hover e ao foco em superfícies escuras. Bronze (brand-500) desenha a moldura; brand-700 e brand-800 sustentam ícones, títulos e ações sobre superfícies claras. Brand-400 é o dourado intermediário. Não há segunda família de acento.

Amostragem do logo com sharp: ignorar alpha < 240, selecionar pixels coloridos quentes e quantizar em passos de 16. Amostras e contagens: bronze #b07020 (16.699), dourado #f0b040 (12.680), luz #ffd060 (8.104), #d09030 (13.535) e #603000 (11.761). Escala restante e neutros são derivados. As ramps do sidecar usam a escala atual da marca; ramps neutras são auxiliares sintetizadas, não novas amostras do logo nem tokens de uso obrigatório.

### Neutral

Carvão quente (ink) e texto secundário (ink-soft) aparecem sobre marfim (ivory), branco (paper) e linho (linen). Brand-950 domina cabeçalho, hero, painel do Sobre e rodapé; brand-900 apoia o retrato. Brand-100 fornece leitura clara sobre o escuro. Divisórias usam ink com 10%/15%; no hero e rodapé, os seletores do tema substituem algumas divisórias por dourado com 22%.

Contrastes medidos na QA pelo agente principal: ink-soft/ivory 5,98:1; brand-700/ivory 6,92:1; brand-950/brand-300 9,31:1; brand-100/brand-950 14,61:1. Revisão final independente aprovada por impeccable_finish_reviewer em 15/10/2026, disposição ship, sem achados materiais no código nem pendências no escopo solicitado.

**The Surface Contrast Rule.** Usar texto escuro sobre marfim e dourado, texto claro sobre superfícies escuras e foco dourado claro nos contextos escuros.

## Typography

**Display Font:** Cinzel, Georgia, serif.
**Body Font:** Manrope, system-ui, sans-serif.

Cinzel complementa as serifas romanas do logo; não é uma identificação da fonte interna da imagem. Carregada com pesos 400, 500 e 600, usa 400 nos títulos. Manrope carrega 300, 400, 500, 600 e 700; navegação e CTA usam 600. app/layout.tsx carrega ambas por next/font/google e expõe as variáveis font-display-face e font-body. O padrão font-display aplica tracking de -0,025em.

### Hierarchy

- **Display:** H1 de 2,4rem / 3,3rem / 3,65rem em base / sm / lg, entrelinha 1,16.
- **Headline:** títulos compartilhados de 2,25rem / 3rem / 3,55rem, entrelinha 1,07. O Sobre usa 2,25rem / 3rem, entrelinha 1,16.
- **Titles:** serviços de 1,55rem / 1,8rem, entrelinha 1,25; título intermediário de 1,7rem no modal e na faixa de atendimento em sm. Modal cresce para 1,875rem em sm. FAQ e chamada final usam 1,875rem / 2,25rem. Títulos de apoio usam 1,5rem; autores 1,25rem; nome do retrato 1,125rem. Nota agregada usa 3rem.
- **Body:** texto principal de 15px com entrelinha 28px; introdução cresce para 16px/32px em sm. Resumos de 13px/24px. Endereço, respostas e detalhes usam 14px/28px; tópicos do modal 14px/24px.
- **Navigation / labels:** navegação de 0,8rem (12,8px), peso 600; CTA padrão/grande de 12px; pequeno de 10px com tracking 0,13em. Faixa de atendimento usa 11px/20px. Rodapé e links compactos usam 10px; tracking varia por contexto de 0,12em a 0,18em. A legenda “Advogada” mantém peso regular.

Tamanhos observados, em ordem: 10px, 11px, 12px, 0,8rem, 13px, 14px, 15px, 16px, 1,125rem, 1,25rem, 1,5rem, 1,55rem, 1,7rem, 1,8rem, 1,875rem, 2,25rem, 2,4rem, 3rem, 3,3rem, 3,55rem e 3,65rem. A escala reúne papéis e variações responsivas; não presume uma razão modular.

**The Two Voices Rule.** Usar Cinzel nos títulos e Manrope na leitura e nos controles, preservando o logo como imagem original.

## Layout

Contêiner máximo de 80rem com gutters de 20px, 32px em sm e 48px em lg. Cabeçalho sticky de 104px no celular e 120px em sm; logo com 176px/208px de largura e altura automática. Breakpoints usados: sm (640px), md (768px), lg (1024px). A navegação desktop aparece em lg; antes disso, menu móvel. O html aplica somente scroll-padding-top de 2rem; as seções navegáveis usam scroll-margin de 6rem. A navegação por âncoras usa rolagem nativa imediata, sem scroll-behavior smooth, para manter destinos previsíveis nas transições de menu e tamanho.

Grids empilham no celular e passam a duas colunas em lg. Hero: 1,05fr/0,95fr e altura mínima de 640px/680px em lg; Sobre: 0,85fr/1,15fr. Retrato com largura máxima de 408px, proporção 614/803, object-contain, sem recorte. O painel da marca no Sobre tem largura máxima de 420px, fundo escuro e logo proporcional; não há foto de escritório nessa seção. Logo do rodapé com largura de 200px.

Seções principais usam padding vertical de 5rem / 7rem / 8rem. Há variações locais: hero 3,5rem/5rem, FAQ 5rem/6rem, chamada final 3,5rem/4rem. Linhas de serviço usam 32px/36px. Depoimentos empilham no celular e ficam em três colunas em md. Modal na base da tela no celular e centralizado em sm, largura máxima de 36rem em sm, altura máxima de 90dvh e rolagem interna.

## Elevation & Depth

Superfícies predominantemente planas, contraste tonal e divisórias finas. A sombra card (0 18px 48px rgb(43 33 24 / 18%)) pertence ao modal. Backdrop usa ink com 55% e desfoque leve. O retrato tem moldura bronze de 1px, com padding externo de 14px no topo e à direita; a borda termina 24px antes da base e começa 24px à esquerda.

Entradas de blocos: 680ms, cubic-bezier(0.22, 1, 0.36, 1), stagger de 100ms e atraso inicial de 40ms. Retrato: 900ms com atraso de 160ms. Moldura: 1200ms, cubic-bezier(0.16, 1, 0.3, 1). Navegação e rodapé: 180ms; CTA: 200ms; menu: 220ms; modal: 240ms. MotionConfig respeita a preferência do usuário; CSS reduz animações/transições a 0,01ms e remove a animação da moldura em movimento reduzido. A rolagem nativa já é imediata em todas as preferências de movimento.

## Shapes

Logo e retrato conservam proporções. Painéis e blocos editoriais são retangulares; CTAs principais e menu usam raio de 0,25rem. Ícones e controles compactos usam círculos. Modal com raio de 1rem nos cantos superiores no celular e 0,25rem em sm. Alguns links auxiliares e a chamada final usam cápsulas; essa ocorrência não muda a regra dos CTAs principais.

## Components

### Buttons

Botão principal plano: fundo e borda dourados, texto escuro, peso 600, altura mínima de 44px. Padding e variantes no frontmatter; textos de 10px/12px. Hover clareia fundo e borda em 200ms. Foco de 2px com deslocamento de 3px; no contexto escuro, dourado claro. O componente GlowingButton mantém esse tratamento sem efeito luminoso.

Links editoriais usam bronze escuro, ícone e hover bronze. A mensagem WhatsApp do modal inclui sua área de atuação; os destinos vêm de app/lib/brand.ts. CTAs e componentes existentes são preservados no rebranding.

### Navigation

Links claros sobre fundo escuro, hover dourado e sublinhado de 1px em 180ms. Controle móvel de 44px com aria-expanded e aria-controls; menu fecha por Escape ou seleção. Painel móvel marfim com texto escuro. Menu móvel em overlay absoluto, inset-x-0 e top-full, ancorado abaixo do cabeçalho, sem empurrar o conteúdo. Interior com altura máxima calc(100dvh - 104px), ou calc(100dvh - 120px) em sm, e overflow-y-auto. O padrão evita deslocamento das âncoras ao fechar o menu durante a rolagem. Link de salto aparece ao receber foco. Foco global de 2px com deslocamento de 4px; sobre escuro, dourado claro.

### Service details

Linhas abertas com ícones Lucide e controle “Saiba mais”. Modal com role dialog, aria-modal e título associado, padding de 28px/40px. Escape fecha; Tab circula entre controles; fundo inert, rolagem bloqueada e retorno de foco. O agente principal confirmou quatro modais funcionais, retenção de foco com Tab/Shift+Tab e retorno ao botão de origem por Escape; também informou ausência de overflow horizontal em 320px, 390px, 768px e 1440px. Revisão final independente concluída por impeccable_finish_reviewer em 15/10/2026: disposição ship, aprovado no escopo solicitado, sem achados materiais no código nem pendências. Foram examinadas nove capturas obrigatórias e capturas extras de FAQ/contato; trechos de fonte e hashes confirmados. Rodapé revisado em código; verificações de navegador, teclado, overflow, contraste, fontes, lint e build realizadas pelo executor. As capturas JPEG do IAB com blur limitam a avaliação de nitidez fina. QA nativo final informado pelo executor: âncoras #sobre a 128px e #contato a 127px, abaixo do cabeçalho de 104px; FAQ abre e fecha com contato correto; todas as âncoras existentes e quatro imagens carregadas.

### Cards / Containers

Endereço em bloco branco retangular, borda ink a 10%, padding de 28px/40px e pequeno acento bronze no topo. Sobre usa painel escuro com logo e legenda. A faixa de atendimento usa três itens a partir de sm; sem formulários ou biblioteca de chips observados.

### Media and information

Original public/Logotipo Jurídico Dourado R&L.png preservado; public/raynne-lopes-logo.png é cópia byte a byte usada pela aplicação. A cópia evita o HTTP 400 observado no otimizador Next para o caminho original com &. Ambos têm 1774 × 887, RGBA, e SHA-256 igual; a origem é registrada externamente em asset-origins.json. Retrato autêntico de 614 × 803 no hero e compartilhamento, idêntico ao anexo.

Três depoimentos em colunas abertas com trechos e autores fornecidos; nota e quantidade estáticas. FAQ usa details e summary nativos. Sem integração de avaliações ao vivo.

## Do's and Don'ts

### Do:

- **Do** preservar cores, transparência e proporções do logo original.
- **Do** manter o retrato autêntico na proporção original, sem recorte.
- **Do** usar Cinzel nos títulos e Manrope na leitura e nos controles.
- **Do** manter foco visível, operação por teclado e movimento reduzido.
- **Do** aplicar dourado com texto escuro nos CTAs principais de raio pequeno.

### Don't:

- **Don't** inventar depoimentos, credenciais, dados de contato, horários ou resultados.
- **Don't** apresentar a nota estática do Google como consulta ao vivo.
- **Don't** recolorir o logo nem substituir o retrato autêntico por imagem genérica.
- **Don't** promover ocorrências locais de cápsulas ou rótulos decorativos a regras globais.
