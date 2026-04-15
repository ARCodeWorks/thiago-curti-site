import { motion } from "motion/react";
import { Section } from "./ui/Section";
import { Scale, Clock, ShieldCheck } from "lucide-react";

export function Differentials() {
  return (
    <Section id="diferenciais">
      <div className="mb-16 md:mb-24 relative">
        <div className="w-[60px] h-[1px] bg-accent mb-[30px]" />
        <span className="text-[12px] text-accent uppercase tracking-[4px] mb-5 block">
          Por que nos escolher?
        </span>
        <h3 className="font-serif text-[32px] md:text-[40px] font-light text-text-main leading-tight max-w-2xl">
          O fim do mito da "loteria processual".
        </h3>
        <p className="mt-6 text-text-muted text-[16px] leading-[1.6] max-w-3xl">
          Acreditamos que o desfecho de uma lide é decidido na fase pré-processual e na organização da prova. A vitória pertence a quem tem a melhor gestão de documentos e a estratégia mais clara.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 border border-card-border bg-card-bg hover:border-accent/30 transition-colors"
        >
          <Scale className="w-8 h-8 text-accent mb-6" strokeWidth={1} />
          <h4 className="font-serif text-[18px] text-accent font-normal mb-3">
            Senioridade e Pessoalidade
          </h4>
          <p className="text-[13px] text-text-muted leading-[1.6]">
            Aqui, você não é um número de processo delegado a um estagiário. A lide é conduzida diretamente pelo sócio, unindo atendimento artesanal à alta especialização.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-8 border border-card-border bg-card-bg hover:border-accent/30 transition-colors"
        >
          <Clock className="w-8 h-8 text-accent mb-6" strokeWidth={1} />
          <h4 className="font-serif text-[18px] text-accent font-normal mb-3">
            Controladoria Jurídica
          </h4>
          <p className="text-[13px] text-text-muted leading-[1.6]">
            Aplicamos inteligência de dados para garantir que nenhum prazo seja perdido e que o fluxo do processo seja o mais ágil do mercado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 border border-card-border bg-card-bg hover:border-accent/30 transition-colors"
        >
          <ShieldCheck className="w-8 h-8 text-accent mb-6" strokeWidth={1} />
          <h4 className="font-serif text-[18px] text-accent font-normal mb-3">
            Previsibilidade e Controle
          </h4>
          <p className="text-[13px] text-text-muted leading-[1.6]">
            Transparência total em cada etapa. O cliente tem a segurança de um fluxo gerido por dados e atualizações constantes em linguagem acessível.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
