---
name: "Dr. Luciano Meni · Advocacia & Assessoria Jurídica"
description: "Azul profundo, azul aço e prata para uma assessoria empresarial clara e próxima."
colors:
  ink: "#132135"
  ink-soft: "#4b5b6d"
  ivory: "#f5f7fa"
  paper: "#ffffff"
  steel: "#40648b"
  silver: "#d1d1d3"
  brand-50: "#edf2f7"
  brand-100: "#dce6ef"
  brand-200: "#c0d1e1"
  brand-300: "#a1bad2"
  brand-400: "#7899bb"
  brand-500: "#40648b"
  brand-600: "#355779"
  brand-700: "#2b496b"
  brand-800: "#203a58"
  brand-900: "#132135"
  brand-950: "#0c1828"
typography:
  display:
    fontSize: "2.2rem"
    fontFamily: "Cinzel, Georgia, serif"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  display-tablet:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "2.8rem"
  display-desktop:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "3.2rem"
  headline-desktop:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "3.55rem"
  biography-desktop:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "3.45rem"
  title:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "1.8rem"
  compact-title:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "1.7rem"
  navigation:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.72rem"
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "10px"
  caption:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "11px"
  compact-body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "13px"
  address:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "14px"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "15px"
    lineHeight: "1.75rem"
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

# Identidade visual: Dr. Luciano Meni

## Overview
A marca combina sobriedade, clareza e proximidade no atendimento à empresa. O logo original é a referência para a paleta fria e os títulos serifados.

## Colors
Amostragem das regiões opacas do PNG original: azul escuro RGB 19/33/53 (#132135), azul aço RGB 64/100/139 (#40648b), prata RGB 209/209/211 (#d1d1d3). Pixels transparentes foram excluídos. A escala azul e os neutros claros ampliam essa identidade para interfaces com contraste adequado. Tailwind CSS 4 usa @theme inline em app/globals.css.

## Typography
Cinzel tem serifas romanas próximas às letras do monograma e do nome no logo. Títulos em peso 500, sem simulação de itálico. Manrope mantém leitura e controles claros. As fontes são servidas pela aplicação via next/font/google. Títulos têm quebra equilibrada; o corpo usa entrelinha generosa.

## Layout
Cabeçalho inteiro em cinza frio claro, com o logo azul íntegro e transparência preservada, sem placa atrás da imagem. Navegação, ícones e foco em azul escuro. Hero com texto e retrato em duas colunas no desktop e empilhados no mobile. Seções claras apresentam serviços, biografia, perguntas frequentes, depoimentos e contato. Faixa escura apresenta a forma de atendimento. Encerramento em prata e rodapé inteiro em cinza frio claro, com textos em azul escuro. Largura máxima 80rem; margens de 1.25rem, 2rem e 3rem.

## Elevation & Depth
Superfícies e bordas de 1px delimitam grupos. Sombra card de 0 18px 48px rgb(19 33 53 / 12%) em modal e hover de serviços. Menu anima em 220ms; modal em 240ms.

## Shapes
Fotos e cartões com cantos retos. Botões e controles circulares usam raio full; modal mobile usa cantos superiores de 1rem.

## Components

### Imagens
Logo azul fornecido (public/Logotipo Jurídico Azul com Monograma NL.png) no cabeçalho, rodapé, ícones e compartilhamento. A transparência original é preservada, sem fundo adicional atrás do logo e sem alterar o arquivo. As superfícies inteiras do cabeçalho e do rodapé são claras para dar contraste à marca azul. Retrato no hero. Fotografia de certificado completa, sem recorte adicional, na biografia; não atribuir título acadêmico a partir da fotografia. Todos os arquivos permanecem intactos em public.

### Interações e acessibilidade
Menu móvel com estado expandido e links por seção. Detalhes de atuação em modais com Escape, ciclo de Tab, conteúdo de fundo inert, bloqueio de rolagem e retorno do foco. Perguntas frequentes usam details nativo. Conteúdo editorial visível desde a primeira renderização. MotionConfig e CSS respeitam movimento reduzido. Links externos, foco, seleção de texto, cursor e scrollbar usam a paleta. WhatsApp de cada modal identifica a área consultada.

## Do's and Don'ts
Assessoria empresarial é o foco principal escolhido pelo cliente. Contratos, marcas e patentes são pilares. Telefone, endereço e perfil Google centralizados em app/lib/brand.ts. Os seis depoimentos vêm do arquivo fornecido. Nota e quantidade de avaliações são explicitamente estáticas. Não inventar e-mail, OAB, horários ou resultados.
