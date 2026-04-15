import { Section } from "./ui/Section";

export function Footer() {
  return (
    <footer className="bg-bg-main text-text-muted py-12 border-t border-border-accent">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-[24px] tracking-[2px] uppercase text-accent font-normal leading-none">
                Thiago Curti
              </span>
            </div>
            <p className="text-[13px] leading-[1.6] max-w-sm">
              Advocacia de precisão. Transformando conhecimento técnico em um diferencial competitivo que gera escala e segurança patrimonial para nossos clientes.
            </p>
          </div>
          
          <div>
            <h4 className="text-text-main font-normal mb-6 text-[11px] uppercase tracking-[2px]">Contato</h4>
            <ul className="space-y-4 text-[13px] leading-[1.6]">
              <li>
                <a href="https://wa.me/5511999999999" className="hover:text-accent transition-colors">
                  WhatsApp: (11) 99999-9999
                </a>
              </li>
              <li>
                <a href="mailto:contato@thiagocurti.com.br" className="hover:text-accent transition-colors">
                  contato@thiagocurti.com.br
                </a>
              </li>
              <li>Atendimento Nacional (Digital)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-main font-normal mb-6 text-[11px] uppercase tracking-[2px]">Links</h4>
            <ul className="space-y-4 text-[13px] leading-[1.6]">
              <li><a href="#especialidades" className="hover:text-accent transition-colors">Especialidades</a></li>
              <li><a href="#sobre" className="hover:text-accent transition-colors">O Escritório</a></li>
              <li><a href="#conteudo" className="hover:text-accent transition-colors">Artigos & Materiais</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-card-border text-[11px] uppercase tracking-[1px] flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Thiago Curti Advogados Associados. Todos os direitos reservados.</p>
          <p>OAB/SP XXX.XXX</p>
        </div>
      </div>
    </footer>
  );
}
