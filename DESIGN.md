---
name: "Leonardo Carvalho Tenório · Advocacia"
description: "Preto, ouro metálico e tipografia serifada para advocacia trabalhista e previdenciária."
colors:
  ink: "#080706"
  ink-soft: "#62594e"
  ivory: "#faf7f0"
  brand-50: "#f3ede2"
  brand-100: "#eadfca"
  brand-200: "#efd2a4"
  brand-300: "#dfc092"
  brand-400: "#d4b47f"
  brand-500: "#c1a16f"
  brand-600: "#a08050"
  brand-700: "#785b34"
  brand-800: "#604220"
  brand-900: "#30271b"
  brand-950: "#080706"
  stone: "#c7bba5"
  marble: "#e7decf"
  gold: "#c1a16f"
  silver: "#c7bba5"
  paper: "#ffffff"
  hero-muted: "#ded6ca"
  black: "#000000"
typography:
  display:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "2.45rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 500
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "1.8rem"
    fontWeight: 500
    lineHeight: 1.25
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.75rem"
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "10px"
    fontWeight: 600
    letterSpacing: "0.13em"
rounded:
  square: "0"
  sm: "0.25rem"
  modal-mobile: "1rem"
  full: "9999px"
spacing:
  icon-gap: "0.5rem"
  card-gap: "1rem"
  gutter-mobile: "1.25rem"
  gutter-tablet: "2rem"
  gutter-desktop: "3rem"
  card-mobile: "1.75rem"
  card-desktop: "2rem"
  section-mobile: "5rem"
  section-tablet: "7rem"
  section-desktop: "8rem"
components:
  button-primary-sm:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.25rem"
  button-primary-md:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0.875rem 1.5rem"
  button-primary-lg:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "1rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.brand-400}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.25rem"
  button-inverse:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.brand-800}"
    rounded: "{rounded.full}"
    padding: "1rem 1.5rem"
  area-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "{spacing.card-mobile}"
  dialog:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    rounded: "{rounded.modal-mobile}"
    padding: "1.75rem"
---

# Design System: Leonardo Carvalho Tenório · Advocacia

## Overview

**Creative North Star: "Ouro, clareza e proximidade"**

A identidade usa o logo LC original em ouro metálico, com fundo preto, superfícies de leitura em marfim e branco e títulos serifados. Bodoni Moda acompanha o contraste das letras da marca; Manrope mantém a leitura e as ações claras. O logo permanece íntegro nos caminhos de public e nos metadados.

**Key Characteristics:**
- Logo LC metálico original sobre preto.
- Bodoni Moda nos títulos e Manrope na leitura.
- Ouro quente nas ações e bronze profundo em textos claros.
- Fotografias reais e depoimentos com nome e fonte.

## Colors

A escala de ouro, bronze e marfim foi extraída das regiões metálicas do logo; os neutros de leitura apoiam o contraste. Os valores normativos estão no frontmatter e em app/globals.css, que configura o Tailwind CSS 4 via @theme inline.

### Primary
Ouro quente (gold/brand-500) identifica as ações com texto preto. brand-400 serve ao hover. brand-200 destaca informação sobre preto. brand-700 e brand-800 mantêm contraste em texto sobre fundos claros.

### Neutral
ink e brand-950 compõem hero, rodapé e texto. ivory e paper compõem superfícies de leitura. ink-soft identifica o texto secundário. hero-muted mantém o apoio legível sobre o hero. black é o fundo do logo, cabeçalho e suporte no rodapé. stone/silver e marble são neutros de apoio declarados.

**The Contrast Rule.** Use ouro quente com texto preto nas ações e ouro profundo para texto sobre superfícies claras.

## Typography

Bodoni Moda é carregada por next/font/google nos pesos 400, 500 e 600; a classe font-serif usa peso 500. Manrope é carregada nos pesos 300 a 700. Fontes são servidas pela própria aplicação.

O H1 sobe de 2.45rem para 3rem em sm e 3.65rem em lg. Títulos de seção usam 2.25rem, 3rem e 3.55rem; o título biográfico chega a 3.45rem. Títulos de cartões usam 1.8rem; placas e painéis usam 1.25rem a 1.875rem. A leitura principal usa 15px/28px, o hero chega a 16px/32px e textos compactos usam 13px/24px. Rótulos usam 10px a 12px, navegação 0.72rem; créditos usam 10px. Enfase vem da cor e da hierarquia.

**The Serif Rule.** Use Bodoni Moda em peso 500 nos títulos e Manrope na leitura; não simule itálico global nos títulos.

## Layout

Largura máxima de 80rem e gutters de 1.25rem, 2rem e 3rem. Cabeçalho sticky preto mede 84px no mobile e 104px a partir de sm; navegação completa aparece em lg. Menu móvel empilha links em fundo preto.

Hero com texto e retrato em duas colunas no desktop, empilhados no mobile. Retrato usa 4:5 e limite de 460px; biografia usa 3:4 e limite de 560px. Moldura e círculo do hero ficam contidos pela seção para evitar rolagem horizontal. Os dois serviços usam duas colunas em sm; avaliações usam uma coluna, duas em md e três em lg. Seções usam 5rem, 7rem e 8rem de respiro vertical.

## Elevation & Depth

Alternância tonal e bordas de 1px definem os grupos. A sombra card, 0 18px 48px rgba(9,13,14,0.12), aparece nas placas, modal e hover de serviços. Menu móvel anima altura e opacidade em 220ms; modal anima em 240ms. Conteúdo editorial usa initial=false. MotionConfig reducedMotion=user e CSS para movimento reduzido limitam transições e rolagem suave.

**The Visible Content Rule.** Conteúdo editorial permanece visível desde a primeira renderização; menu e modal animam interações e respeitam movimento reduzido.

## Shapes

Fotos e cartões informativos têm cantos retos. Botões e controles circulares usam raio full. Modal usa cantos superiores de 1rem no mobile e raio sm em telas maiores. Bordas e detalhes usam ouro ou ink com opacidade baixa.

## Components

### Buttons
GlowingButton tem três tamanhos, ouro quente, texto preto, Manrope semibold e caixa alta. Hover altera o fundo para brand-400 e desloca 2px; foco usa outline de 2px e offset de 3px. Ações auxiliares de mapa/Google usam borda fina e ouro profundo no hover.

### Navigation
Cabeçalho preto com logo íntegro, navegação clara e links de sublinhado animado. Foco no cabeçalho, hero e rodapé usa ouro claro; no restante usa ouro profundo.

### Cards / Containers
Serviços usam superfície branca, borda ink/10, padding de 1.75rem a 2rem e ícone de traço. Hover sobe 4px e usa a sombra card. Seis depoimentos completos do material fornecido usam marfim, estrelas bronze, autor e link para o perfil Google; 5,0 e 171 são dados estáticos, com convite para consultar informação atualizada no Google.

### Area Dialog
Painel inferior no mobile e central em sm, max-height 90dvh, largura máxima 36rem e rolagem interna. Conteúdo da página fica inert enquanto está aberto. Escape, bloqueio de rolagem, ciclo de Tab e retorno do foco ao botão de origem fazem parte do comportamento.

### Brand Assets
Logo original é usado no cabeçalho, rodapé, ícones e compartilhamento; os ícones de navegador reutilizam a imagem retangular original. Três fotografias fornecidas aparecem em hero, biografia e conteúdo. A quarta permanece disponível em public. Imagens e dados de compartilhamento usam os caminhos atuais; domínio de produção depende de NEXT_PUBLIC_SITE_URL.

## Do's and Don'ts

### Do:
- **Do** preservar o logo LC original e as fotografias fornecidas.
- **Do** usar ouro profundo em textos sobre marfim ou branco e ouro claro sobre preto.
- **Do** manter foco visível, contenção de foco no modal e respeito a movimento reduzido.

### Don't:
- **Don’t** inventar resultados, experiência, e-mail, Instagram ou OAB.
- **Don’t** atribuir atualização em tempo real às avaliações estáticas.
- **Don’t** substituir os títulos serifados por uma fonte geométrica sem nova orientação de marca.
