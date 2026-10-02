import React, { useState } from "react";
import { SEOHead } from "../components/SEOHead";
import { Simulator } from "../components/Simulator";
import { CTASection } from "../components/CTASection";
import {
  Copy,
  Check,
  Share2,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  ArrowLeft,
  Sparkles
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const SimuladoPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const simuladoUrl = "https://autoescolaximenes.com.br/simulado";

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(simuladoUrl);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = simuladoUrl;
        textarea.style.position = "fixed";
        textarea.style.left = "-999999px";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const whatsappShareText = encodeURIComponent(
    "Olá! Segue o link do Simulado Oficial DETRAN-CE da Auto Escola Ximenes com respostas e correção na hora: https://autoescolaximenes.com.br/simulado"
  );
  const whatsappShareUrl = `https://wa.me/?text=${whatsappShareText}`;

  return (
    <div className="bg-[#0A0E17] text-white min-h-screen">
      <SEOHead
        title="Simulado DETRAN-CE Grátis com Respostas na Hora | Auto Escola Ximenes"
        description="Simulado oficial do DETRAN-CE online e gratuito com correção instantânea a cada questão. Veja na hora se acertou ou errou, com gabarito comentado pelo CTB."
      />

      {/* Top Standalone Share & Link Bar */}
      <div className="bg-slate-900/95 border-b border-slate-800 py-3 px-4 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          
          {/* Left: Back to Home link */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-semibold"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400" />
              <span>Voltar ao site principal</span>
            </a>

            <span className="hidden sm:inline text-slate-700">|</span>

            <span className="inline-flex items-center gap-1.5 text-amber-400 font-black uppercase tracking-wider text-[11px]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Respostas na Hora</span>
            </span>
          </div>

          {/* Right: Direct URL & Share Action */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 w-full sm:w-auto">
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-400 select-all">
              <span className="text-amber-400 font-bold">Link direto:</span>
              <span className="text-white font-semibold">autoescolaximenes.com.br/simulado</span>
            </div>

            {/* Copy button */}
            <button
              id="btn-copiar-link-simulado"
              onClick={handleCopyLink}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                copied
                  ? "bg-emerald-500 text-slate-950 font-black"
                  : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
              }`}
              title="Copiar link direto do simulado para enviar"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-slate-950" />
                  <span>Link Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-amber-400" />
                  <span>Copiar Link</span>
                </>
              )}
            </button>

            {/* Share to WhatsApp */}
            <a
              id="btn-compartilhar-whatsapp-simulado"
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 text-xs font-black uppercase tracking-wider shadow-sm transition-all"
              title="Enviar simulado pelo WhatsApp para alunos ou amigos"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
              <span>Enviar via WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      {/* Simulator Core Content */}
      <div className="py-4 sm:py-8">
        <Simulator />
      </div>

      {/* Conversion CTA */}
      <CTASection
        title="GOSTOU DO SIMULADO? GARANTA SUA APROVAÇÃO NA PRÁTICA"
        subtitle="Treine com a equipe que mais aprova em Fortaleza. Aulas em veículos novos com ar e direção elétrica, metodologia focada e aprovação rápida."
        buttonLabel="CONVERSAR COM UM CONSULTOR"
      />
    </div>
  );
};
