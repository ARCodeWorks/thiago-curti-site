import { motion } from "motion/react";
import { Section } from "./ui/Section";
import { Download } from "lucide-react";

export function LeadMagnet() {
  return (
    <Section id="conteudo">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border border-card-border bg-card-bg p-8 md:p-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[12px] text-accent uppercase tracking-[4px] mb-5 block">
            Material Gratuito
          </span>
          <h3 className="font-serif text-[32px] md:text-[40px] font-light text-text-main mb-6 leading-tight">
            Checklist: 07 documentos que todo médico deve ter para evitar condenações.
          </h3>
          <p className="text-text-muted text-[16px] leading-[1.6] mb-10">
            A prevenção é a melhor defesa. Baixe nosso guia prático e descubra como blindar sua atuação profissional contra processos e notificações do CRM através da gestão documental correta.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-1 bg-bg-main border border-card-border text-text-main px-5 py-4 focus:outline-none focus:border-accent transition-colors text-[13px]"
              required
            />
            <button 
              type="submit"
              className="px-9 py-4 border border-accent text-accent uppercase text-[12px] tracking-[2px] hover:bg-accent/10 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Download size={16} />
              Baixar Agora
            </button>
          </form>
          <p className="text-[11px] text-text-muted mt-6 uppercase tracking-[1px]">
            Ao baixar, você concorda em receber nossos artigos semanais sobre Direito Médico e Previdenciário.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative hidden lg:block"
        >
          <div className="aspect-[4/3] relative flex items-center justify-center">
            {/* Abstract representation of a book/document */}
            <div className="w-64 h-80 bg-bg-main border border-card-border shadow-2xl relative flex flex-col p-8">
              <div className="w-12 h-[1px] bg-accent mb-8" />
              <div className="w-full h-[1px] bg-card-border mb-4" />
              <div className="w-3/4 h-[1px] bg-card-border mb-4" />
              <div className="w-5/6 h-[1px] bg-card-border mb-10" />
              
              <div className="mt-auto flex items-center gap-4">
                <div className="font-serif text-2xl tracking-[2px] uppercase text-accent font-normal leading-none">
                  C
                </div>
                <div className="w-16 h-[1px] bg-card-border" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
