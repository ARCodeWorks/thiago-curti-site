# 02 - Arquitetura React + Blog

## Stack recomendada
- React + TypeScript.
- Vite para build e DX.
- React Router para rotas.
- Camada de dados isolada em `src/services`.

## Organização de pastas (base)
```txt
src/
  app/
    router/
    providers/
  pages/
    Home/
    Blog/
    BlogPost/
    Contato/
  features/
    blog/
      components/
      hooks/
      services/
      types/
      utils/
    lead-capture/
      components/
      services/
  components/
    ui/
    layout/
  services/
    content/
  lib/
  styles/
  assets/
```

## Princípios arquiteturais
- Componentes visuais não acessam dados diretamente.
- Parsing e normalização de dados centralizados em `services`.
- Tipos compartilhados em `features/blog/types`.
- Funções de transformação em `utils` com testes unitários.

## Fluxo de dados do blog
1. Ler dados da planilha local.
2. Validar colunas obrigatórias.
3. Normalizar para o tipo interno `BlogPost`.
4. Entregar lista/slug para páginas do blog.
5. Renderizar com SEO por página de artigo.

## Estratégia de evolução
- Fase 1: planilha local (MVP).
- Fase 2: API intermediária com autenticação e cache.
- Fase 3: CMS/headless ou painel editorial dedicado.
