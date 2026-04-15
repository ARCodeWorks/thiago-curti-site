# 05 - SEO, Acessibilidade e Qualidade

## SEO técnico mínimo
- `title` e `meta description` únicos por página.
- Um `h1` por página.
- Open Graph configurado para home e artigos.
- URL limpa para páginas e posts.
- Sitemap e robots configurados no deploy.

## SEO de conteúdo
- Palavra-chave principal no título, intro e um subtítulo.
- Interlink entre artigos e páginas de serviço.
- Conteúdo com foco em intenção de busca transacional/informacional.

## Acessibilidade
- Contraste mínimo WCAG AA.
- Navegação por teclado com foco visível.
- Labels em formulários.
- Texto alternativo em imagens relevantes.
- Landmarks semânticos: `header`, `main`, `nav`, `section`, `footer`.

## Performance
- Imagens otimizadas (`webp`/`avif`).
- Lazy loading abaixo da dobra.
- Fontes com `font-display: swap`.
- Evitar bibliotecas pesadas sem necessidade.

## Qualidade de código
- TypeScript estrito.
- Lint e format no pipeline.
- Testes para parsing da planilha e utilitários críticos.
- Separação clara entre UI, regra de negócio e acesso a dados.
