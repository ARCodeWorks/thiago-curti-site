<div align="center">
  <h1>Thiago Curti Site</h1>
  <p><i>Site institucional em React com foco em posicionamento profissional, conversão via WhatsApp e base preparada para evolução com blog.</i></p>

  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=111" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5" />
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 8" />
    <img src="https://img.shields.io/badge/Status-Fase%201%20Ativa-2E7D32?style=flat-square" alt="Status" />
  </p>
</div>

---

## Documentação

A documentação técnica e operacional está organizada na pasta `docs/`:

- [Índice da documentação](docs/README.md)
- [Roadmap](docs/00-roadmap.md)
- [Visão do produto](docs/01-visao-produto.md)
- [Arquitetura React + Blog](docs/02-arquitetura-react-blog.md)
- [Modelo de dados da planilha local](docs/03-modelo-dados-planilha-local.md)
- [Operação de conteúdo](docs/04-operacao-conteudo.md)
- [SEO, acessibilidade e qualidade](docs/05-seo-qualidade.md)
- [Checklist de entrega](docs/06-checklist-entrega.md)
- [Handoff para cliente](docs/07-handoff-cliente.md)

---

## Visão Geral

Este projeto entrega a presença digital institucional de Thiago Curti com três objetivos centrais:

- posicionamento de autoridade com linguagem técnica e clara;
- conversão de tráfego em contato qualificado via WhatsApp;
- base arquitetural pronta para evolução com blog editorial.

O desenvolvimento está organizado por fases para reduzir retrabalho e acelerar validação.

---

## Funcionalidades Atuais

- Landing page institucional completa;
- Seções orientadas à conversão (hero, especialidades, diferenciais, FAQ e CTA final);
- Conteúdo centralizado em `src/data/siteContent.ts`;
- Navegação por âncoras com foco em clareza e escaneabilidade;
- Estrutura de componentes reutilizáveis para evolução futura.

---

## Arquitetura

Princípios adotados:

- separação entre conteúdo e apresentação (`siteContent` vs componentes);
- layout composto por seções modulares em `src/components/sections`;
- camada de layout isolada em `src/components/layout`;
- código preparado para expansão com blog sem reescrever a base institucional.

---

## Stack Técnica

- React 19
- TypeScript
- Vite
- ESLint

---

## Estrutura do Projeto

```text
.
├── docs/
│   ├── 00-roadmap.md
│   ├── 01-visao-produto.md
│   ├── 02-arquitetura-react-blog.md
│   ├── 03-modelo-dados-planilha-local.md
│   ├── 04-operacao-conteudo.md
│   ├── 05-seo-qualidade.md
│   ├── 06-checklist-entrega.md
│   ├── 07-handoff-cliente.md
│   └── README.md
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   └── sections/
│   ├── data/
│   │   └── siteContent.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

---

## Como Executar

Pré-requisitos:

- Node.js 20+
- npm 10+

Instalação e ambiente local:

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

---

## Scripts

- `npm run dev`: inicia ambiente de desenvolvimento.
- `npm run build`: gera build de produção.
- `npm run preview`: serve o build localmente.
- `npm run lint`: executa validações de lint.

---

## Roadmap Resumido

1. Consolidar e publicar o site institucional (fase atual).
2. Ativar módulo de blog com fonte local estruturada.
3. Evoluir para camada de dados mais robusta (API/CMS).

---

## Conteúdo e Operação

- Conteúdo institucional baseado em briefing validado.
- Blog planejado para operação editorial contínua.
- Regras de qualidade e operação documentadas em `docs/`.

---

## Licença

Este projeto é proprietário e destinado ao cliente final Thiago Curti, salvo definição contratual em contrário.
