# Thiago Curti - Site Profissional

Landing page institucional em React para posicionamento de autoridade e conversão via WhatsApp.

## Status do projeto
- Fase atual: Site institucional (em desenvolvimento).
- Próxima fase: Módulo de blog com artigos via planilha local.

## Objetivos
- Comunicar proposta de valor com clareza técnica e linguagem acessível.
- Apresentar especialidades e diferenciais com hierarquia visual profissional.
- Converter visitas em contato qualificado no WhatsApp.

## Stack
- React
- TypeScript
- Vite

## Estrutura principal
```txt
Arquivos_Cliente/
  Briefing/
  UI/
docs/
  00-roadmap.md
  01-visao-produto.md
  ...
src/
  components/
    layout/
      SkipLink.tsx
      SiteHeader.tsx
      SiteFooter.tsx
    sections/
      HeroSection.tsx
      AboutSection.tsx
      ...
  data/
    siteContent.ts
  App.tsx
  App.css
  index.css
```

## Como rodar localmente
```bash
npm install
npm run dev
```

## Scripts
- `npm run dev`: inicia ambiente de desenvolvimento.
- `npm run build`: gera build de produção.
- `npm run preview`: sobe preview do build.
- `npm run lint`: executa lint.

## Fonte de conteúdo
- Site institucional: conteúdo baseado no briefing do cliente.
- Blog: planejado para fase seguinte com entrada por planilha local CSV.

## Decisões arquiteturais
- Separação entre conteúdo e apresentação (`src/data/siteContent.ts` e componentes visuais), incluindo hero, CTA e rodapé.
- `App.tsx` atuando como camada de composição, com layout e seções extraídos para componentes modulares.
- Estilo orientado pela referência de UX/UI do cliente (minimalismo sofisticado, tons sóbrios e alta legibilidade).
- Desenvolvimento incremental por fases para reduzir risco de retrabalho.

## Documentação detalhada
Consulte a pasta [`docs`](./docs/README.md) para roadmap, critérios de qualidade, handoff e operação de conteúdo.
