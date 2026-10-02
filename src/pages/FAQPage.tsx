import React from "react";
import { SEOHead } from "../components/SEOHead";
import { FAQ } from "../components/FAQ";
import { CTASection } from "../components/CTASection";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { HelpCircle, Sparkles } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const FAQPage: React.FC = () => {
  return (
    <div className="bg-[#0A0E17] text-white min-h-screen py-12">
      <SEOHead
        title={`Dúvidas Frequentes sobre a CNH | ${siteConfig.nome} em Fortaleza`}
        description="Perguntas e respostas sobre exames do DETRAN-CE, aprovação de 94%, 20 acertos de 30 questões, prazos de 20 a 30 dias e formas de pagamento."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-400/40 text-xs font-black text-amber-400 uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Central de Ajuda & Transparência</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight">
          DÚVIDAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">FREQUENTES</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Encontre respostas claras para as perguntas mais comuns sobre o processo de habilitação, exames médicos, provas, taxa de aprovação e prazos na Autoescola Ximenes.
        </p>
      </div>

      <FAQ showSearch={true} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-12 text-center">
        <div className="bg-[#111827] border border-slate-700/80 rounded-3xl p-8 space-y-4 shadow-xl">
          <h3 className="font-heading text-xl font-black text-white uppercase">Sua dúvida não está na lista?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Nossos consultores e a Sofia estão online no WhatsApp oficial no {siteConfig.whatsappFormatado} para esclarecer qualquer particularidade do seu caso.
          </p>
          <div className="pt-2">
            <WhatsAppButton
              label="TIRAR DÚVIDA COM ATENDENTE NO WHATSAPP"
              size="md"
              mensagem="Olá! Estive na página de dúvidas frequentes do site da Autoescola Ximenes e gostaria de tirar uma dúvida específica."
            />
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
};
