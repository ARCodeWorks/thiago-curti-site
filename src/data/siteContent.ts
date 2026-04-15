export type Specialty = {
  title: string
  description: string
  bullets: string[]
}

export type Differential = {
  title: string
  description: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type FooterLink = {
  label: string
  href: string
}

export type FooterContent = {
  intro: string
  note: string
  primaryLink: string
  navLinks: FooterLink[]
  serviceLinks: FooterLink[]
  supportLinks: FooterLink[]
  legal: string
}

export const brand = {
  name: 'Thiago Curti - Advocacia',
  focus: 'Direito Previdenciário, Trabalhista e Direito Médico',
}

export const contact = {
  whatsappUrl: 'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20Thiago.%20Quero%20agendar%20uma%20reuni%C3%A3o.',
  ctaLabel: 'Agendar no WhatsApp',
}

export const hero = {
  overline: 'ADVOCACIA DE PRECISÃO',
  title: 'Estratégia jurídica com clareza técnica e execução eficiente.',
  subtitle:
    'Atendimento direto com o sócio para quem busca condução profissional, previsível e sem ruído de comunicação.',
  highlight:
    'Foco em atuação digital para todo o Brasil, com possibilidade de atendimento presencial.',
}

export const positioning = {
  title: 'Por que este site existe',
  paragraphs: [
    'O objetivo é simples: transformar complexidade jurídica em decisão prática. A atuação prioriza comunicação objetiva, estratégia e controle de fluxo processual.',
    'Em vez de atendimento impessoal, a condução é artesanal, técnica e orientada a resultado em demandas previdenciárias, trabalhistas estratégicas e defesa médica.',
  ],
}

export const about = {
  title: 'Sobre Thiago Curti',
  subtitle:
    'Uma advocacia construída com visão de mercado, rigor técnico e obsessão por execução bem feita.',
  purpose:
    'A escolha pelo Direito nasceu de uma leitura objetiva de mercado e, com o tempo, se consolidou em uma atuação guiada por estratégia, organização e resultado. Hoje, o foco está em áreas nas quais resposta técnica e execução bem feita realmente mudam o desfecho do caso.',
  journey:
    'A trajetória foi marcada pela controladoria jurídica e pela gestão operacional de escritórios. Entre os marcos mais relevantes está o apoio a uma operação que passou de 5 mil para 7 mil processos em menos de um ano, sem novas contratações, por meio de organização de fluxos, gestão profissional e segurança operacional.',
  promise:
    'Ao contratar o escritório, o cliente recebe previsibilidade, acesso direto ao sócio e uma condução técnica com controle integral do caso. Isso significa atualizações constantes, linguagem acessível e estratégia orientada para reduzir ruído, risco e improviso.',
  hobbies:
    'Transparência radical, obsessão por eficiência e ética combativa são valores inegociáveis. Fora da rotina forense, Thiago estuda filosofia de organização japonesa e violão fingerstyle, práticas que reforçam disciplina, paciência e atenção ao detalhe.',
}

export const specialties: Specialty[] = [
  {
    title: 'Direito Previdenciário',
    description:
      'Planejamento, revisão e concessão de benefícios com abordagem técnica desde a fase documental.',
    bullets: [
      'Aposentadorias e revisões previdenciárias',
      'Pensão por morte e benefícios por incapacidade',
      'Estratégia pré-processual para reduzir risco de negativa',
    ],
  },
  {
    title: 'Direito Trabalhista Estratégico',
    description:
      'Atuação em demandas de maior complexidade e alto ticket com leitura de risco e execução organizada.',
    bullets: [
      'Ações trabalhistas com foco em eficiência econômica',
      'Estratégia probatória desde o início do caso',
      'Condução técnica com comunicação direta',
    ],
  },
  {
    title: 'Direito Médico e da Saúde',
    description:
      'Defesa de profissionais médicos em processos de pacientes, hospitais e órgãos de classe.',
    bullets: [
      'Resposta técnica a notificações do CRM',
      'Defesa em ações de responsabilidade civil médica',
      'Organização documental para proteção profissional',
    ],
  },
]

export const publicProfile = [
  'Médicos que receberam processo ou notificação e precisam agir com técnica e rapidez.',
  'Segurados do INSS que precisam de estratégia para concessão ou revisão de benefício.',
  'Profissionais e trabalhadores que buscam justiça eficiente em demandas de maior impacto financeiro.',
]

export const differentials: Differential[] = [
  {
    title: 'Atendimento Direto com o Sócio',
    description:
      'Seu caso não vira número de protocolo: a condução permanece com quem assume a estratégia jurídica.',
  },
  {
    title: 'Controladoria Jurídica Aplicada',
    description:
      'Processos, prazos e evidências são organizados com método para aumentar previsibilidade e segurança operacional.',
  },
  {
    title: 'Linguagem Técnica e Acessível',
    description:
      'Sem latinório e sem burocracia desnecessária: você entende cenário, risco e próximo passo com clareza.',
  },
]

export const credentials = [
  'Especialista em Gestão e Controladoria Jurídica',
  'Pós-graduado em Direito Médico e da Saúde',
  'Atuação com inteligência de dados aplicada ao fluxo processual',
]

export const values = [
  'Transparência radical na comunicação e na condução do caso.',
  'Obsessão por eficiência (Kaizen) em processo, prazo e estratégia.',
  'Ética combativa para defender interesses com técnica e firmeza.',
]

export const serviceFlow = [
  'Diagnóstico do caso e definição de cenário jurídico realista.',
  'Mapeamento de documentos e construção de estratégia probatória.',
  'Condução processual com atualizações constantes e linguagem objetiva.',
]

export const faq: FaqItem[] = [
  {
    question: 'Recebi processo de paciente ou notificação do CRM. Qual o primeiro passo?',
    answer:
      'O primeiro passo é evitar resposta impulsiva e organizar imediatamente os documentos do caso. A estratégia inicial define o risco futuro da demanda.',
  },
  {
    question: 'Meu familiar faleceu e recebia INSS. Posso ter direito à pensão por morte?',
    answer:
      'A resposta depende do vínculo, da qualidade de segurado e da documentação. A análise técnica evita perda de prazo e pedidos mal instruídos.',
  },
  {
    question: 'Vocês atendem apenas na cidade?',
    answer:
      'Não. O foco é atuação digital para todo o país, com atendimento presencial disponível quando necessário.',
  },
  {
    question: 'Qual o diferencial em relação a escritórios de grande porte?',
    answer:
      'Aqui, o atendimento é direto com senioridade, sem repasse impessoal. A operação combina organização de controladoria com estratégia jurídica individualizada.',
  },
]

export const finalCta = {
  title: 'Converse diretamente com quem vai conduzir sua estratégia jurídica.',
  description:
    'Se você precisa de orientação técnica, previsibilidade e resposta eficiente, o próximo passo é agendar sua reunião.',
}

export const footer: FooterContent = {
  intro: brand.name,
  note: 'Atendimento digital em todo o Brasil, com possibilidade de atendimento presencial quando necessário.',
  primaryLink: contact.whatsappUrl,
  navLinks: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'FAQ', href: '#faq' },
  ],
  serviceLinks: [
    { label: 'Previdenciário', href: '#especialidades' },
    { label: 'Trabalhista estratégico', href: '#especialidades' },
    { label: 'Direito médico e da saúde', href: '#especialidades' },
  ],
  supportLinks: [
    { label: 'Falar no WhatsApp', href: contact.whatsappUrl },
    { label: 'Ir para contato', href: '#contato' },
    { label: 'Perguntas frequentes', href: '#faq' },
  ],
  legal: 'Conteúdo institucional para fins informativos. Cada caso exige análise jurídica individualizada.',
}
