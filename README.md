# Dr. Murilo Alvarenga Nunes

Site institucional pt-BR de Murilo Alvarenga Nunes — Advogado, OAB/MG 102.602, com atendimento em Piumhi e Capitólio, MG. Apresenta sete áreas com detalhes em modais, perfil profissional, perguntas frequentes, avaliações e contato direto.

## Desenvolvimento

Instale as dependências com npm install e inicie com npm run dev. A aplicação usa Next.js, React, Tailwind CSS 4, Framer Motion e Lucide. Antes de alterar código Next.js, leia os guias pertinentes em node_modules/next/dist/docs/, conforme AGENTS.md.

Preview da implementação atual: [localhost:3015](http://localhost:3015). Para iniciar explicitamente nessa porta, use npm run dev -- --port 3015 quando ela estiver disponível.

Comandos de verificação da aplicação: npm run lint -- app; node node_modules/typescript/bin/tsc --noEmit; npm run build. Os resultados já informados estão na seção de validação; a atualização documental não executa novamente build ou detector.

## Configuração e implementação

Configure NEXT_PUBLIC_SITE_URL com a URL absoluta do domínio de produção. O domínio ainda não foi fornecido. app/layout.tsx usa essa variável como base dos metadados e habilita as imagens Open Graph/Twitter quando ela está definida. O retrato institucional de 617 × 788 é a imagem de compartilhamento. O layout também define idioma pt-BR, ícones e cor do navegador.

Dados de marca, links, nota e três trechos literais de avaliações ficam em app/lib/brand.ts. A página, as sete áreas e os modais ficam em app/page.tsx; os CTAs reutilizáveis em app/components/GlowingButton.tsx; o tema em app/globals.css.

A paleta usa dourado #e0b060, bronze #c09050 e luz #f0d080 extraídos do logo MA; marfim #faf7f0, carvão #141310 e os demais passos são derivados. A amostragem informada com sharp, alpha ≥ 240 e quantização 16 encontrou respectivamente 5.846, 5.850 e 5.324 pixels. Cinzel nos títulos e Manrope nos textos e controles são carregadas por next/font/google.

## Dados confirmados

- Dr. Murilo Alvarenga Nunes; OAB/MG 102.602, conforme o logo.
- Áreas: Direito Previdenciário, Ambiental, do Agronegócio, Bancário, Cível, Empresarial e Trabalhista.
- Telefone: (37) 99983-6911; [WhatsApp](https://wa.me/5537999836911); ligação: tel:+5537999836911. Os links dos modais incluem mensagem referente à área escolhida.
- Piumhi: R. Dom Pedro II, 86 — Centro, Piumhi — MG, 37925-000.
- Capitólio: Rua Arcemino Rodrigues da Cunha, 123 — Capitólio — MG.
- Instagram: [@murilo_alvarenga_nunes](https://www.instagram.com/murilo_alvarenga_nunes/).
- Google: nota 5,0 e 134 avaliações fornecidas pelo usuário, estáticas; [perfil com CID fornecido](https://www.google.com/maps?cid=2448691614492770861). Os mapas usam buscas específicas dos dois endereços.
- Depoimentos: trechos literais de João Marcos Oliveira, Altarf Engenharia e Consultoria e Kerlon Moura Pureza em app/lib/brand.ts, sem promessas de resultado.

E-mail e horários não foram fornecidos. Não inventar esses dados, outras credenciais, experiência ou resultados.

## Imagens e proveniência

| Caminho | Dimensões | Uso |
| --- | --- | --- |
| public/murilo-alvarenga-logo.png | 1774 × 887 | Logo MA no cabeçalho, Sobre, rodapé e ícones |
| public/murilo-alvarenga-advogado.png | 617 × 788 | Material institucional BNI completo no hero e compartilhamento |
| public/verbas-rescisorias.png | 632 × 839 | Arte sobre verbas rescisórias no modal trabalhista |

As três imagens são idênticas aos anexos, conforme dimensões e SHA-256 em [.impeccable/asset-origins.json](.impeccable/asset-origins.json). Preservar esse registro externo e os PNGs, sem recorte, reexportação, recoloração ou metadados embutidos. O material BNI mantém todo o conteúdo original, incluindo o texto tributário; as áreas editoriais continuam sendo as sete solicitadas.

## Responsividade e acessibilidade

Cabeçalho de 104px no celular e 120px a partir de sm; logo com largura de 176px/208px. O retrato mantém proporção 617/788, largura máxima de 408px e object-contain. A arte trabalhista tem largura máxima de 280px e altura proporcional. A seção Sobre usa painel da marca.

Menu móvel sobreposto e ancorado abaixo do cabeçalho, sem deslocar o conteúdo; altura interna máxima calc(100dvh - 104px), ou calc(100dvh - 120px) em sm, e rolagem própria. Fecha por Escape ou seleção de link. As âncoras usam rolagem nativa imediata.

Preservar link de salto, foco visível, nomes acessíveis dos controles, aria-expanded/aria-controls no menu, diálogos com título associado, aria-modal, foco inicial, ciclo Tab/Shift+Tab, Escape, retorno do foco, fundo inert e bloqueio/restauração da rolagem. FAQ usa details/summary nativos. MotionConfig respeita movimento reduzido; o CSS reduz transições e animações e desativa a animação da moldura.

## Validação em 15/10/2026

**Executor:** lint de app, TypeScript e build de produção passaram, conforme informado. Sete modais, links específicos, carregamento das imagens, ciclo Tab/Shift+Tab, Escape e retorno do foco confirmados. Sem overflow horizontal em 320px, 390px, 768px e 1440px. Ao clicar Contato, o menu móvel fecha e a seção inicia 127,8px abaixo do topo, com cabeçalho de 104px.

| Texto / fundo | Contraste |
| --- | --- |
| #695e4e / #faf7f0 | 5,93:1 |
| #775225 / #faf7f0 | 6,50:1 |
| #141310 / #e0b060 | 9,33:1 |
| #f5e6c8 / #141310 | 15,07:1 |

**Revisão independente:** disposition **ship**, sem achado material impeditivo no escopo pedido, conforme atualização do usuário. O reviewer leu o código, examinou sete capturas, conferiu três depoimentos no anexo e SHA-256 das três imagens. Confirmou os contrastes independentemente. O blur JPEG do IAB nas capturas em .impeccable/review/ limita a avaliação de nitidez fina; lint, TypeScript, build e operações do navegador foram informados pelo executor e não repetidos pelo reviewer.

O detector já havia sido executado uma vez pelo principal, com dois advisories relativos à divisória dourada semitransparente. Sua cor agora consta nos tokens documentados; não houve nova execução nem se presume um novo resultado do detector.

## Documentação do projeto

- [PRODUCT.md](PRODUCT.md): fatos, público, limites e evidências.
- [DESIGN.md](DESIGN.md): tokens reais no frontmatter e padrões visuais/acessíveis.
- [.impeccable/design.json](.impeccable/design.json): extensões schemaVersion 2 e exemplos de componentes independentes de framework.
- [.impeccable/murilo-alvarenga-direction.md](.impeccable/murilo-alvarenga-direction.md): direção da página, materiais, escopo e veredito da revisão.
- [.impeccable/asset-origins.json](.impeccable/asset-origins.json): origem e integridade das três imagens; registro preservado.
