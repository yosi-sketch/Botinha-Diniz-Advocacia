---
name: "Silva & Lopes Advocacia"
description: "Vinho, carvão e superfícies claras quentes, com tipografia serifada alinhada ao logo."
colors:
  ink: "#272625"
  ink-soft: "#625954"
  paper: "#ffffff"
  ivory: "#f8f5f0"
  linen: "#e9e1d8"
  brand-50: "#faf2f2"
  brand-100: "#f1dddd"
  brand-200: "#e0baba"
  brand-300: "#cb9496"
  brand-400: "#ac666b"
  brand-500: "#853740"
  brand-600: "#702630"
  brand-700: "#5e171f"
  brand-800: "#4d1019"
  brand-900: "#3c0e15"
  brand-950: "#280b10"
  hero-divider: "rgb(241 221 221 / 20%)"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "2.75rem"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  display-tablet:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "3.5rem"
  display-desktop:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "4.2rem"
  headline-desktop:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "3.55rem"
  biography-desktop:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "3.45rem"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.8rem"
  compact-title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.7rem"
  navigation:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.8rem"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "15px"
    lineHeight: "1.75rem"
  compact-body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "13px"
    lineHeight: "1.5rem"
  address:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "14px"
  caption:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "11px"
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "10px"
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
    backgroundColor: "{colors.brand-500}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "0.875rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.brand-600}"
    textColor: "{colors.paper}"
---

# Design System: Silva & Lopes Advocacia

## Overview
**Creative North Star: "Proteção com clareza"**

Vinho e carvão extraídos do logo, títulos Cormorant Garamond e leitura Manrope formam uma identidade profissional coesa. A marca fornecida orienta o contraste entre superfícies claras quentes e vinho escuro.

**Key Characteristics:**
- Logo e imagem institucional originais preservados.
- Superfícies claras quentes alternadas com vinho escuro.
- Serifas de alto contraste nos títulos e leitura simples nos controles.

## Colors
### Primary
O vinho da marca, brand-700, vem da média RGB 94/23/31 dos grupos vermelhos opacos do PNG. A escala complementa os degradês presentes no símbolo: brand-500 nos botões, brand-600 no hover, brand-900 e brand-950 nas superfícies escuras.

### Neutral
O carvão, ink, vem da média RGB 39/38/37 dos grupos escuros opacos do logo. Pixels transparentes foram excluídos da amostragem. Ivory e linen dão contraste ao logo sem alterar seus pixels; ink-soft atende a leitura secundária. Paper é a superfície branca.

**The Contrast Rule.** Texto escuro nas superfícies claras; branco, brand-100 e brand-200 nas superfícies vinho. Os pares principais foram verificados com contraste superior a 4,5:1. Seleção, cursor de texto, foco e scrollbar seguem a paleta.

## Typography
Cormorant Garamond tem serifas finas e contraste próximo às letras do logo. Manrope mantém textos e controles legíveis. Ambas são servidas localmente pela aplicação por next/font/google.

Títulos usam peso 500. O display cresce nos três valores registrados no frontmatter; os títulos de seção variam entre 2,25rem, 3rem e headline-desktop. A entrelinha do display é 1,06 e dos títulos de seção 1,07. Corpo principal usa 15px com entrelinha de 28px; no hero sobe para 16px e 32px a partir de sm. Textos auxiliares usam compact-body; botões usam 12px ou label. A navegação usa o token navigation. Títulos recebem quebra equilibrada.

## Layout
Contêiner máximo de 80rem e margens de 1,25rem, 2rem e 3rem. Cabeçalho claro com alturas de 84px e 104px. Hero em duas colunas a partir de lg e empilhado em telas menores. Serviços aparecem em linhas abertas, com texto, ícone e ação. Sobre, atendimento, perguntas, avaliações e contato têm separação generosa. Rodapé claro com colunas que se empilham no celular. Breakpoints sm, md e lg são 640px, 768px e 1024px.

## Elevation & Depth
Superfícies e divisórias de 1px delimitam os grupos. A sombra card, 0 18px 48px rgb(60 14 21 / 12%), pertence ao modal. Serviços usam divisórias, sem cartões elevados.

## Shapes
Imagens preservam seu enquadramento original. Contêineres editoriais têm cantos retos. Botões e controles circulares usam full; o modal usa cantos superiores de 1rem no celular e 0,25rem em telas maiores.

## Components
### Buttons
Contato pelo WhatsApp com brand-500 e texto branco, hover brand-600 e foco brand-700. Transição de 200ms. Padding padrão de 14px por 24px; versão grande de 16px por 28px. Links secundários usam a paleta e indicam a ação.

### Navigation
Navegação Manrope com sublinhado de 1px no hover. Menu móvel expande em 220ms, expõe aria-expanded e fecha por Escape ou seleção de link.

### Service details
Linhas de serviço com ícones Lucide e botão de detalhes. Modais com transição de 240ms, Escape, ciclo de Tab, fundo inert, bloqueio de rolagem e retorno do foco. Conteúdo editorial aparece desde a primeira renderização. MotionConfig e CSS respeitam movimento reduzido.

### Media and information
Logo transparente original em public/Logo Jurídico Silva & Lopes.png, fornecido pelo cliente, no cabeçalho, sobre, rodapé e ícones. A imagem institucional public/silva-lopes-equipe.png foi copiada integralmente do anexo codex-clipboard-55cc4c51-2ab5-479c-ab6f-65ac5cab3118.png, com checksum idêntico; aparece inteira no hero. Nenhum arquivo fornecido foi editado. Avaliações direcionam ao Google, sem reproduzir relatos não fornecidos. Perguntas usam details nativo.

## Do's and Don'ts
### Do:
- Preservar os assets originais.
- Centralizar os dados de contato.
- Usar os dois WhatsApps fornecidos, sem e-mail.
- Manter contraste e navegação por teclado.
### Don't:
- Inventar dados de contato, nota do Google, depoimentos ou resultados.
- Atribuir nomes completos, formação, OAB ou experiência não fornecidos.
- Alterar as cores ou a transparência do logo original.
