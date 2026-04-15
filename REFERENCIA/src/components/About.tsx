import { motion } from "motion/react";
import { Section } from "./ui/Section";

export function About() {
  return (
    <Section id="sobre">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 border border-card-border p-4 bg-card-bg">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
              alt="Thiago Curti - Escritório"
              className="w-full h-full object-cover grayscale opacity-80"
              referrerPolicy="no-referrer"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-border-accent z-[-1]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-[60px] h-[1px] bg-accent mb-[30px]" />
          <span className="text-[12px] text-accent uppercase tracking-[4px] mb-5 block">
            O Sócio Fundador
          </span>
          <h3 className="font-serif text-[40px] md:text-[56px] font-light text-text-main mb-8 leading-tight">
            Thiago Curti
          </h3>
          
          <div className="space-y-6 text-text-muted text-[16px] leading-[1.6]">
            <p>
              Especialista em Gestão e Controladoria Jurídica, com pós-graduação em Direito Médico e da Saúde. Minha trajetória é marcada pela obsessão por eficiência.
            </p>
            <p>
              Como gestor adjunto em rotinas de conferência, auxiliei escritórios a escalarem de 5 mil para 7 mil processos em menos de um ano, sem novas contratações. Isso foi possível através da organização implacável de fluxos, inteligência de dados e segurança operacional.
            </p>
            <p>
              Hoje, aplico essa mesma filosofia de <span className="text-text-main font-medium">Kaizen (melhoria contínua)</span> e organização japonesa diretamente nos casos dos meus clientes. O Direito, quando aliado à controladoria jurídica, deixa de ser uma loteria e torna-se previsível e eficiente.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-border-accent">
            <div>
              <h4 className="font-serif text-[18px] text-accent font-normal mb-3">Transparência Radical</h4>
              <p className="text-[13px] text-text-muted leading-[1.6]">Comunicação sem ruídos ou "juridiquês".</p>
            </div>
            <div>
              <h4 className="font-serif text-[18px] text-accent font-normal mb-3">Eficiência (Kaizen)</h4>
              <p className="text-[13px] text-text-muted leading-[1.6]">Melhoria contínua e gestão de prazos impecável.</p>
            </div>
            <div>
              <h4 className="font-serif text-[18px] text-accent font-normal mb-3">Ética Combativa</h4>
              <p className="text-[13px] text-text-muted leading-[1.6]">Defesa intransigente dos interesses do cliente.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
