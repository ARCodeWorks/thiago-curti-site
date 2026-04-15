# 03 - Modelo de Dados da Planilha Local

## Status
Fonte temporária de conteúdo do blog: planilha local.

## Local esperado
- Arquivo CSV em `data/blog_posts.csv`.
- Encoding: UTF-8.
- Separador: vírgula.

## Contrato de colunas
| Coluna | Obrigatória | Tipo | Exemplo | Observação |
|---|---|---|---|---|
| `id` | Sim | string | `post-001` | Identificador único estável. |
| `slug` | Sim | string | `como-reverter-negativa-auxilio-doenca` | Usado na rota do artigo. |
| `title` | Sim | string | `Como Reverter Negativa de Auxílio-Doença` | Título principal (`h1`). |
| `excerpt` | Sim | string | `Passos práticos para agir com segurança jurídica...` | Resumo para cards/listagem. |
| `content_md` | Sim | string | `## Introdução ...` | Conteúdo em Markdown. |
| `category` | Sim | string | `Previdenciário` | Categoria editorial. |
| `keywords` | Não | string | `auxílio-doença;INSS;recurso` | Separar por `;`. |
| `cover_image` | Não | string | `/images/blog/auxilio.jpg` | Caminho local ou URL. |
| `meta_description` | Sim | string | `Entenda o passo a passo...` | SEO da página. |
| `author` | Sim | string | `Thiago Curti` | Nome exibido no artigo. |
| `published_at` | Sim | date (`YYYY-MM-DD`) | `2026-04-13` | Data de publicação. |
| `status` | Sim | enum | `published` | Valores: `draft` ou `published`. |

## Regras de validação
- `slug` deve ser único.
- `title` com no máximo 70 caracteres recomendado para SEO.
- `meta_description` entre 140 e 160 caracteres recomendado.
- Artigos com `status=draft` não devem ser exibidos publicamente.

## Exemplo mínimo (CSV)
```csv
id,slug,title,excerpt,content_md,category,keywords,cover_image,meta_description,author,published_at,status
post-001,como-reverter-negativa-auxilio-doenca,Como Reverter Negativa de Auxílio-Doença,"Passos práticos para aumentar suas chances no recurso.","## Introdução\n...",Previdenciário,"auxílio-doença;INSS;recurso",/images/blog/auxilio.jpg,"Guia objetivo para agir após a negativa do benefício.",Thiago Curti,2026-04-13,published
```

## Observação importante
Não alterar nomes de colunas sem atualizar a camada de parsing/normalização no código.
