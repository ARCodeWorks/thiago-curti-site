import { motion } from "motion/react";
import { FileCheck, Briefcase, Activity } from "lucide-react";
import { Section } from "./ui/Section";

const specialties = [
  {
    id: "previdenciario",
    title: "Direito Previdenciário",
    description: "Planejamento, avaliação minuciosa e concessão de benefícios. Maximizamos o valor do seu benefício antes mesmo de dar entrada no pedido.",
    icon: FileCheck,
  },
  {
    id: "trabalhista",
    title: "Direito Trabalhista",
    description: "Atuação estratégica em demandas de alta complexidade e ticket elevado. Foco em resultados pragmáticos e rentáveis.",
    icon: Briefcase,
  },
  {
    id: "medico",
    title: "Direito Médico e da Saúde",
    description: "Defesa especializada para profissionais da saúde em processos movidos por pacientes, hospitais ou notificações do CRM.",
    icon: Activity,
  },
];

export function Specialties() {
  return (
    <Section id="especialidades">
      <div className="mb-16 md:mb-24 relative">
        <div className="w-[60px] h-[1px] bg-accent mb-[30px]" />
        <span className="text-[12px] text-accent uppercase tracking-[4px] mb-5 block">
          Áreas de Atuação
        </span>
        <h3 className="font-serif text-[32px] md:text-[40px] font-light text-text-main max-w-2xl leading-tight">
          Especialização profunda para demandas que exigem excelência.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {specialties.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 border border-card-border bg-card-bg hover:border-accent/30 transition-colors group"
          >
            <div className="text-accent mb-6">
              <item.icon size={32} strokeWidth={1} />
            </div>
            <h4 className="font-serif text-[18px] text-accent font-normal mb-3">
              {item.title}
            </h4>
            <p className="text-[13px] text-text-muted leading-[1.6]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
