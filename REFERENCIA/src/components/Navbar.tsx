import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Especialidades", href: "#especialidades" },
    { name: "O Escritório", href: "#sobre" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Conteúdo", href: "#conteudo" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-bg-main/95 backdrop-blur-md border-border-accent py-6"
          : "bg-transparent border-transparent py-10"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-[2px] uppercase text-accent font-normal leading-none">
              Thiago Curti
            </span>
            <span className="text-[11px] tracking-[1px] text-text-muted uppercase mt-2">
              Advogados Associados
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] uppercase tracking-[1.5px] text-text-main/80 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-4 border border-accent text-accent uppercase text-[12px] tracking-[2px] hover:bg-accent/10 transition-colors inline-block ml-4"
          >
            Fale com o Sócio
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-main hover:text-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg-main border-b border-border-accent py-6 px-6 flex flex-col gap-6 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] uppercase tracking-[1.5px] text-text-main/80 hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-4 border border-accent text-accent uppercase text-[12px] tracking-[2px] hover:bg-accent/10 transition-colors text-center mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Fale com o Sócio
          </a>
        </div>
      )}
    </header>
  );
}
