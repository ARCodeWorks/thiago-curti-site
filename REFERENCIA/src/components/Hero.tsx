import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-bg-main overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Modern Office Background"
          className="w-full h-full object-cover opacity-20 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/90 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[12px] text-accent uppercase tracking-[4px] mb-5 block">
              Atendimento Nacional
            </span>
            
            <h1 className="font-serif text-[40px] md:text-[56px] leading-[1.1] font-light mb-6 text-text-main">
              Advocacia de <span className="text-accent italic">Precisão.</span>
            </h1>
            
            <p className="text-text-muted text-[16px] leading-[1.6] mb-10 max-w-2xl">
              Clareza técnica traduzida em resultados. Estratégia orientada a dados para demandas complexas em Direito Médico, Trabalhista e Previdenciário.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="px-9 py-4 border border-accent text-accent uppercase text-[12px] tracking-[2px] hover:bg-accent/10 transition-colors inline-flex items-center justify-center gap-2 group"
              >
                Agendar Reunião de Avaliação
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#especialidades"
                className="px-9 py-4 border border-card-border text-text-muted uppercase text-[12px] tracking-[2px] hover:text-text-main transition-colors inline-flex items-center justify-center"
              >
                Conhecer Especialidades
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
