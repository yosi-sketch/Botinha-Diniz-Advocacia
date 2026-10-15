---
name: "Eduardo Cury Advogado Criminalista"
description: "Dourado e bronze do logo original, superfícies quentes e títulos romanos Cinzel."
colors:
  ink: "#26221b"
  ink-soft: "#685f50"
  paper: "#ffffff"
  ivory: "#f8f5ee"
  linen: "#ede6d9"
  brand-50: "#faf5e9"
  brand-100: "#f5e8cd"
  brand-200: "#f0c880"
  brand-300: "#e0b060"
  brand-400: "#c89850"
  brand-500: "#a07030"
  brand-600: "#8b6029"
  brand-700: "#795324"
  brand-800: "#5c401f"
  brand-900: "#29241b"
  brand-950: "#191711"
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

# Design System: Eduardo Cury Advogado Criminalista

## Overview

**Creative North Star: "Clareza e confiança na defesa"**

O dourado e o bronze do logo original dão presença à identidade; marfim e superfícies escuras quentes organizam uma leitura sóbria. A combinação mantém a marca reconhecível sem depender de ornamentos adicionais.

Cinzel traz caráter romano aos títulos e complementa o desenho do logo. Manrope mantém textos e controles legíveis. Fotografias autênticas retangulares e ações principais de raio pequeno sustentam uma apresentação contida e direta.

**Key Characteristics:**
- Logo dourado original com cores e transparência preservadas.
- Superfícies quentes claras e escuras com acentos dourados e bronze.
- Títulos Cinzel e leitura Manrope.
- Fotografias retangulares e ações principais com raio pequeno.

## Colors

A paleta aproxima os tons metálicos da marca de neutros quentes; os valores normativos estão no frontmatter e correspondem a app/globals.css.

### Primary

Dourado da marca (brand-300) preenche o CTA principal e destaca palavras sobre superfícies escuras. Dourado claro (brand-200) atende ao hover e ao foco sobre o escuro. Bronze (brand-500), bronze profundo (brand-700) e brand-800 sustentam moldura, acentos, ícones e ações nas superfícies claras. São variações da mesma família de marca.

A amostragem com sharp excluiu pixels transparentes e encontrou cores frequentes quantizadas de dourado, bronze e dourado claro. Os demais passos da escala são derivados; não são apresentados como novas cores extraídas do logo.

### Neutral

Carvão quente (ink) e texto secundário quente (ink-soft) aparecem sobre marfim (ivory), branco (paper) e linho (linen). Brand-950 é a superfície escura dominante; brand-900 apoia a região do retrato. Brand-100 fornece texto claro no cabeçalho, hero, rodapé e seções escuras.

**The Surface Contrast Rule.** Usar texto escuro sobre marfim e dourado, texto claro sobre superfícies escuras e foco dourado claro nos contextos escuros.

## Typography

**Display Font:** Cinzel, Georgia, serif.
**Body Font:** Manrope, system-ui, sans-serif.

Cinzel é carregada com pesos 400, 500 e 600; o padrão dos títulos é 400. Manrope é carregada de 300 a 700; a navegação e o CTA usam 600. As famílias são configuradas em app/layout.tsx por next/font/google e conectadas ao tema por variáveis CSS.

### Hierarchy

- **Display:** os três tokens display acompanham celular, sm e lg; entrelinha de 1,16 e tracking de -0,025em.
- **Headline:** os títulos compartilhados seguem headline, headline-tablet e headline-desktop; entrelinha de 1,07. A apresentação do advogado usa entrelinha de 1,16 e termina em 3rem no breakpoint sm.
- **Title:** serviços usam service-title e service-title-tablet; títulos de apoio usam title; autoria de depoimentos usa testimonial-name.
- **Body:** body serve aos parágrafos principais; compact-body aos resumos e orientações auxiliares. No hero, o corpo passa a 16px/32px em sm. Parágrafos principais são limitados por contêineres de até 36rem, conforme o contexto.
- **Navigation / Label:** navigation serve aos links do cabeçalho; label descreve o CTA padrão. O botão pequeno usa 10px e tracking de 0,13em.

**The Two Voices Rule.** Usar Cinzel nos títulos e Manrope na leitura e nos controles, preservando o logo como imagem original.

## Layout

Contêiner máximo de 80rem com gutters progressivos do frontmatter. Cabeçalho escuro fixado por sticky, com alturas de 84px e 104px em sm. Breakpoints usados: sm (640px), md (768px) e lg (1024px).

Grids editoriais empilham no celular e passam a duas colunas em lg. O hero usa colunas proporcionais de 1,05fr/0,95fr; a apresentação, 0,85fr/1,15fr. O retrato tem largura máxima de 408px, proporção original e uma moldura externa com deslocamento contido. A foto do escritório preserva sua proporção vertical e tem largura máxima de 340px.

Seções principais usam a escala section do frontmatter. Linhas de serviço têm divisórias e padding vertical de 32px, passando a 36px em sm. Depoimentos ficam em três colunas em md, separados por linhas, e empilham no celular. O modal ocupa a base da tela no celular e se centraliza em sm, com largura máxima de 36rem e altura máxima de 90dvh.

## Elevation & Depth

Predominam superfícies planas, contraste tonal e divisórias finas. A sombra card (0 18px 48px rgb(38 34 27 / 18%)) pertence ao modal. Seu backdrop usa ink com 55% de opacidade e desfoque leve. A moldura do retrato é uma borda bronze de 1px, sem sombra sólida deslocada.

Movimento de entrada usa 680ms com cubic-bezier(0.22, 1, 0.36, 1); a moldura revela sua borda em 1,2s com cubic-bezier(0.16, 1, 0.3, 1). Navegação muda em 180ms, CTA em 200ms, menu em 220ms e modal em 240ms. MotionConfig respeita a preferência do usuário e o CSS reduz animações e transições, desativa rolagem suave e remove a animação da moldura quando solicitado.

## Shapes

Fotos e contêineres editoriais são retangulares, sem máscaras ou recortes. Ações principais e o controle do menu usam sm. Círculos pertencem a ícones e controles compactos. O modal usa modal-mobile nos cantos superiores em telas pequenas e sm em telas maiores. Links secundários compactos usam contorno em cápsula; os CTAs principais mantêm raio pequeno.

## Components

### Buttons

Contato principal plano e claro: fundo e borda dourados, texto escuro, peso 600, altura mínima de 44px. Os três tamanhos estão no frontmatter; padrão e grande usam texto de 12px. Hover clareia fundo e borda em 200ms. Foco visível tem contorno de 2px e deslocamento de 3px; em regiões escuras a cor passa a dourado claro. Não há efeito luminoso no componente GlowingButton atual.

Links de ação em superfície clara usam bronze escuro, ícone SVG e hover bronze. Preservar o contexto da mensagem ao abrir WhatsApp a partir de um modal.

### Navigation

Links desktop claros sobre fundo escuro, com hover dourado e sublinhado de 1px animado em 180ms. Menu móvel com controle de 44px, aria-expanded e aria-controls; fecha por Escape ou seleção de item. O painel móvel tem fundo marfim e texto escuro. O link de salto torna-se visível ao receber foco.

### Service details

Linhas abertas com ícones Lucide e botão de detalhes, evitando cartões decorativos. O modal possui role dialog, aria-modal e título associado. Escape fecha; Tab circula entre controles; o conteúdo de fundo fica inert, a rolagem é bloqueada e o foco retorna ao controle anterior. O modal tem padding de 28px, passando a 40px em sm.

### Cards / Containers

O bloco de endereço é branco, retangular, com borda ink a 10% e padding de 28px/40px. Informações usam ícone circular de apoio e divisória; não há campo de formulário nem biblioteca de chips no escopo observado.

### Media and information

Logo original no cabeçalho e rodapé. Retrato com beca em object-contain e foto do escritório com altura automática. Depoimentos em colunas abertas mantêm texto e autoria fornecidos; a nota agregada é estática. Perguntas frequentes usam details e summary nativos.

## Do's and Don'ts

### Do:
- **Do** preservar cores, transparência e proporções do logo original.
- **Do** manter as fotografias autênticas retangulares e sem recorte.
- **Do** usar Cinzel nos títulos e Manrope na leitura e nos controles.
- **Do** manter foco visível, operação por teclado e movimento reduzido.
- **Do** aplicar dourado com texto escuro nos CTAs principais de raio pequeno.

### Don't:
- **Don't** inventar depoimentos, credenciais, dados de contato ou resultados.
- **Don't** apresentar a nota estática do Google como consulta ao vivo.
- **Don't** recolorir o logo nem substituir as fotografias autênticas por imagens genéricas.
- **Don't** promover ocorrências locais de cápsulas ou rótulos decorativos a regras globais.
