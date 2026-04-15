# 00 - Roadmap do Projeto

## Estratégia de execução
A implementação será incremental para reduzir risco:
- Primeiro consolidamos o site institucional e conversão.
- Depois ativamos o blog com planilha local.

## Fase 1 - Site Institucional (Agora)

### Objetivo
Publicar uma landing profissional validada em conteúdo, UX e conversão.

### Escopo
- Hero com proposta de valor clara.
- Seção de especialidades em ordem estratégica.
- Diferenciais de atuação.
- Bloco de credibilidade.
- FAQ com dúvidas reais.
- CTA principal para WhatsApp.
- Base de SEO e acessibilidade.

### Critérios de pronto
- Layout responsivo validado em mobile e desktop.
- CTA de WhatsApp funcionando.
- Conteúdo alinhado ao briefing do cliente.
- Identidade visual alinhada ao `UI_UX.md`.
- Build de produção sem erros.

## Fase 2 - Blog (Após validação da Fase 1)

### Objetivo
Iniciar operação editorial com artigos voltados ao cliente final.

### Escopo
- Listagem de artigos.
- Página de artigo por `slug`.
- Leitura de conteúdo via planilha local (`CSV`).
- Camada de parsing/normalização com validação.
- SEO por artigo.

### Critérios de pronto
- Contrato da planilha respeitado.
- Fluxo de atualização documentado e testado.
- Artigos `draft` não publicados.

## Fase 3 - Evolução de Conteúdo

### Objetivo
Ganhar escala e reduzir operação manual.

### Escopo
- Migração da planilha local para API intermediária.
- Validação automática de conteúdo.
- Observabilidade mínima de erros de publicação.

## Ordem sugerida de entregas
1. Aprovar versão visual e textual da landing.
2. Publicar versão 1 do site institucional.
3. Iniciar módulo de blog com planilha local.
4. Planejar migração para camada de dados mais robusta.
