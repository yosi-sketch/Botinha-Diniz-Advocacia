# Silva & Lopes Advocacia

Site institucional do escritório em Formiga, MG. Apresenta as áreas cível, criminal, previdenciária, empresarial e trabalhista, com contato pelos dois WhatsApps fornecidos.

## Desenvolvimento
Instale com `npm install` e inicie com `npm run dev`.
Validação: `npm run lint -- app`, `node node_modules/typescript/bin/tsc --noEmit` e `npm run build`.
Os scripts executam os arquivos das ferramentas diretamente para funcionar em caminhos Windows que contêm `&`.

## Identidade e conteúdo
Tailwind CSS 4 usa `@theme inline` em `app/globals.css`. Vinho médio #5e171f e carvão #272625 foram extraídos por amostragem dos pixels opacos do logo original. Marfim #f8f5f0 e linho #e9e1d8 complementam a paleta.
Cormorant Garamond nos títulos e Manrope no corpo são carregadas por `next/font/google` e servidas pela aplicação.
Contatos, links e arquivos estão centralizados em `app/lib/brand.ts`. Seções e modais estão em `app/page.tsx`; metadados em `app/layout.tsx`.

## Dados do escritório
WhatsApp principal: (37) 99902-0336.
Segundo WhatsApp: (37) 99939-0455.
Endereço: R. Campos Altos, nº 276 - Formiga, MG, 35576-172.
Instagram: @silvaelopesadvocacia.
Sem e-mail, conforme confirmação do cliente. OAB, formação, resultados e tempo de experiência não foram informados.
As 81 avaliações são um dado estático fornecido pelo cliente. O site direciona ao perfil Google de cid 5097582474649043815 para os relatos e dados atuais; não apresenta nota ou depoimentos não fornecidos.
Configure `NEXT_PUBLIC_SITE_URL` com o domínio de produção para habilitar as imagens de compartilhamento com endereço absoluto.

## Arquivos
- `public/Logo Jurídico Silva & Lopes.png`: logo original transparente, intacto, em cabeçalho, sobre, rodapé e ícones.
- `public/silva-lopes-equipe.png`: imagem institucional anexada pelo cliente, copiada integralmente, em hero e compartilhamento.
