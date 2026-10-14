---
name: "RAS Advogados"
description: "Azul-petróleo, neutros frios e tipografia geométrica alinhados ao logo original."
colors:
  ink: "#202d35"
  ink-soft: "#52636e"
  paper: "#ffffff"
  ivory: "#f4f6f7"
  linen: "#e1e9ed"
  brand-50: "#eef4f7"
  brand-100: "#dbe9f0"
  brand-200: "#b8d2e1"
  brand-300: "#8fb5cb"
  brand-400: "#6493ae"
  brand-500: "#235e7e"
  brand-600: "#174d6b"
  brand-700: "#0e3b55"
  brand-800: "#0d3248"
  brand-900: "#0b293b"
  brand-950: "#08202e"
  hero-divider: "rgb(219 233 240 / 20%)"
typography:
  display:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "2.65rem"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  display-tablet:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "3.5rem"
  display-desktop:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "3.9rem"
  headline-desktop:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "3.55rem"
  biography-desktop:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "3.45rem"
  title:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1.8rem"
  compact-title:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1.7rem"
  heading-mobile:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "2.25rem"
  heading-tablet:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "3rem"
  heading-small:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1.875rem"
  partner-name:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1.5rem"
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

# Design System: RAS Advogados

## Overview

**Creative North Star: "Clareza com presença"**

Azul-petróleo do logo original, superfícies claras frias e títulos geométricos formam uma identidade sóbria e próxima. Outfit acompanha as formas sem serifa dos materiais institucionais; Manrope mantém a leitura e os controles claros.

**Key Characteristics:**
- Logo transparente original e quatro fotografias institucionais preservados.
- Superfícies claras frias alternadas com azul escuro.
- Títulos geométricos sem serifa e leitura Manrope.

## Colors

### Primary
Azul-petróleo da marca, brand-700, extraído da cor RGB opaca mais frequente do PNG original. Pixels transparentes foram excluídos. A escala de azuis deriva dessa cor: brand-500 nos botões, brand-600 no hover, brand-900 e brand-950 nas superfícies escuras.

### Neutral
Ink e ink-soft sustentam os textos em superfícies claras. Ivory, linen e paper são neutros frios de apoio. O logo é monocromático: os tons secundários são complementos derivados, não cores adicionais extraídas do arquivo.

**The Contrast Rule.** Texto escuro sobre superfícies claras; branco e azuis claros nas superfícies escuras. Foco, seleção, caret e scrollbar seguem a paleta. Os pares principais de corpo e CTA foram verificados acima de 4,5:1.

## Typography

**Display Font:** Outfit, system-ui, sans-serif.
**Body Font:** Manrope, system-ui, sans-serif.

Outfit usa peso 400 nos títulos e formas geométricas compatíveis com a marca. Manrope usa pesos 400–700 na leitura e nos controles. Ambas são servidas pela aplicação por next/font/google.

O H1 usa display, display-tablet e display-desktop, com entrelinha de 1,08 e tracking de -0,035em. Os títulos de seção usam heading-mobile, heading-tablet e headline-desktop, com entrelinha de 1,07; biografia usa biography-desktop. Serviços usam title; os nomes dos sócios, partner-name. Corpo principal com 15px e entrelinha de 28px; no hero passa a 16px/32px em sm. Textos auxiliares com 13px/24px, endereço com 14px/28px, controles com 10–12px. Títulos têm quebra equilibrada.

## Layout

Contêiner máximo de 80rem; margens de 1,25rem, 2rem e 3rem. Cabeçalho claro com alturas de 84px e 104px. Hero em duas colunas a partir de lg e empilhado em telas menores. Serviços usam linhas separadas por divisórias. Sócios em três colunas a partir de md e uma coluna no celular. Fotografias preservam suas proporções originais, sem recorte. Seções usam intervalos generosos de 5rem a 8rem. Breakpoints sm, md e lg em 640px, 768px e 1024px. Rodapé e contato se empilham no celular.

## Elevation & Depth

Superfícies planas e divisórias sutis delimitam os grupos. A sombra card pertence ao modal de detalhes; sua cor deriva do azul-petróleo. O fundo do modal escurece e desfoca o conteúdo para concentrar o foco na interação.

## Shapes

Imagens e contêineres editoriais com cantos retos. Botões e controles circulares usam full. Modal usa cantos superiores de 1rem no celular e 0,25rem em telas maiores. Nenhuma máscara altera a fotografia original.

## Components

### Buttons
Contato principal com brand-500 e texto branco; hover brand-600, foco brand-700, transição de 200ms. Padding padrão de 14px por 24px; versão grande de 16px por 28px. Links secundários usam sublinhado ou contorno e indicam sua ação com ícone Lucide.

### Navigation
Manrope, com sublinhado de 1px no hover. Menu móvel expande em 220ms, expõe aria-expanded e fecha por Escape ou seleção de link. Navegação inclui acesso direto aos sócios.

### Service details
Linhas de serviço com ícones Lucide e ação de detalhes. Modais com transição de 240ms, Escape, ciclo de Tab, conteúdo de fundo inert, bloqueio de rolagem e retorno do foco. CTA do modal leva ao WhatsApp com a área de interesse na mensagem. Conteúdo permanece visível por padrão; MotionConfig e CSS respeitam movimento reduzido.

### Media and information
Logo original no cabeçalho, apresentação do escritório, rodapé e ícones. Foto coletiva no hero e no compartilhamento; três retratos individuais na seção de sócios. As quatro fotografias são cópias integrais dos anexos, verificadas por SHA-256. As setas e textos existentes nos materiais permanecem parte das imagens. Avaliações exibem três relatos completos fornecidos pelo cliente em colunas abertas, com divisórias sutis, autoria e fonte. No celular, os relatos se empilham. Nota agregada e quantidade de avaliações ficam junto ao título, com link para o perfil Google. Nenhum relato não fornecido é reproduzido. Perguntas usam details nativo.

## Do's and Don'ts

### Do:
- Preservar o logo e as fotografias originais.
- Centralizar os dados de contato em app/lib/brand.ts.
- Usar Outfit nos títulos e Manrope na leitura e nos controles.
- Manter contraste, navegação por teclado e suporte a movimento reduzido.

### Don't:
- Inventar dados de contato, nota do Google, depoimentos ou resultados.
- Atribuir formação, OAB ou tempo de experiência não fornecidos.
- Alterar cores, transparência ou pixels do logo original.
