# 07 - Handoff para Cliente

## Entregáveis
- Site institucional em React.
- Blog com conteúdo vindo de planilha local.
- Documentação operacional em `/docs`.

## Como atualizar artigos (versão atual)
1. Abrir `data/blog_posts.csv`.
2. Inserir/editar linha seguindo o contrato de colunas.
3. Salvar em UTF-8.
4. Validar localmente a listagem e a página do artigo.
5. Publicar atualização.

## Pontos de atenção
- Não remover ou renomear colunas da planilha.
- Não duplicar `slug`.
- Usar `draft` para conteúdos em revisão.
- Revisar ortografia e meta description antes de publicar.

## Limites da solução temporária (planilha local)
- Processo manual e sujeito a erro humano.
- Sem painel editorial com permissões.
- Escalabilidade limitada conforme volume de artigos.

## Próxima melhoria recomendada
Implementar uma camada API para leitura/escrita de conteúdo com validação automática e trilha de auditoria.

## Responsabilidades sugeridas
- Responsável jurídico/editorial: aprovar conteúdo.
- Responsável técnico: validar contrato de dados e publicação.
- Responsável comercial: acompanhar conversões e otimizar CTA.
