import React from "react";
import { Phone, MessageCircle, MapPin, Instagram, Clock, CheckCircle2, ArrowUp, ExternalLink } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { Logo } from "./Logo";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1E232A] border-t border-slate-700/80 text-slate-300 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-700/80">
          
          {/* Column 1: Auto Escola Brand & Identity */}
          <div className="space-y-4">
            <div>
              <Logo variant="light" className="h-12 sm:h-14 w-auto" />
              <span className="text-[10px] font-bold text-[#FFC905] uppercase tracking-wider block mt-2">
                Desde 2012 • Pan-Americano, Fortaleza - CE
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {siteConfig.slogan}. Formação humana com instrutores dedicados e frota com ar-condicionado e direção elétrica.
            </p>

            <div className="space-y-1.5 pt-1 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Início Imediato Sem Fila de Espera</span>
              </div>
              <div className="flex items-center gap-2 text-[#FFC905] font-semibold">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Simulado Teórico Online</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-[#FFC905] mb-4">
              Categorias & Cursos
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate("/")}
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all"
                >
                  Página Inicial
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/cnh")}
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all"
                >
                  Primeira Habilitação (CNH)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/cnh-a")}
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all"
                >
                  Categoria A (Moto)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/cnh-b")}
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all"
                >
                  Categoria B (Carro)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/cnh-ab")}
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all"
                >
                  Categoria AB (Carro e Moto)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/cnh-d")}
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all"
                >
                  Categoria D (Ônibus e Vans)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/sobre")}
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all"
                >
                  Sobre a Auto Escola Ximenes
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Free Student Tools */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-[#FFC905] mb-4">
              Ferramentas Gratuitas
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="/simulado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#FFC905] flex items-center gap-2 group transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC905]"></span>
                  <span>Simulado DETRAN (Respostas na hora)</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 font-bold">Nova Aba</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/quiz")}
                  className="text-slate-300 hover:text-[#FFC905] flex items-center gap-2 group transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC905]"></span>
                  <span>Quiz: Teste de Conhecimento</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/perguntas-frequentes")}
                  className="text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                  <span>Perguntas Frequentes (FAQ)</span>
                </button>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/WjqdJ3WnktRSh6J97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#FFC905] flex items-center gap-2 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC905]"></span>
                  <span>Como Chegar (Google Maps)</span>
                  <ExternalLink className="w-3 h-3 text-[#FFC905]" />
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/contato")}
                  className="text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                  <span>Fale com a Equipe</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-[#FFC905] mb-4">
              Atendimento & Contato
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFC905] flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/WjqdJ3WnktRSh6J97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.endereco}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFC905] flex-shrink-0" />
                <a href={`tel:${siteConfig.telefone.replace(/\D/g, "")}`} className="hover:text-white transition-colors">
                  {siteConfig.telefone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href="https://wa.me/558599880848"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-[#FFC905] transition-colors"
                >
                  {siteConfig.whatsappFormatado}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#FFC905] flex-shrink-0" />
                <a
                  href={`https://instagram.com/${siteConfig.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.instagram}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-[#FFC905] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.horarioAtendimento}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 {siteConfig.nome} • Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-slate-400 text-center md:text-right max-w-xl text-[11px] leading-tight">
              Portal informativo e de simulação para alunos e futuros condutores em Fortaleza - CE.
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-[#FFC905] border border-slate-700 transition-colors"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
