import React from "react";
import { SEOHead } from "../components/SEOHead";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Layers, CheckCircle2, DollarSign, Clock, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { CTASection } from "../components/CTASection";
import { siteConfig } from "../config/siteConfig";

export const CNHABPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="py-12 bg-[#0A0E17] text-white min-h-screen">
      <SEOHead
        title={`CNH Categoria AB (Carro e Moto) em Fortaleza | Combo Promocional ${siteConfig.nome}`}
        description="Economize tempo e dinheiro tirando a CNH de Carro e Moto juntas em Fortaleza na Autoescola Ximenes. Apenas 1 curso teórico para as duas categorias. Parcelamento em até 12x."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-slate-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-400/40 text-xs font-black text-amber-400 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Combo Mais Econômico</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight">
              CNH CATEGORIA AB <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">CARRO & MOTO</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              O pacote mais inteligente: tire sua carteira de carro e moto ao mesmo tempo na Autoescola Ximenes. Você realiza o curso teórico de 45h apenas uma vez, economiza em taxas e sai 100% habilitado para qualquer situação no trânsito de Fortaleza.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <WhatsAppButton
                label="GARANTIR DESCONTO COMBO AB"
                size="md"
                mensagem="Olá! Quero aproveitar a economia do Combo CNH AB (Carro e Moto) na Autoescola Ximenes. Quais as condições especiais?"
              />
              <button
                onClick={() => onNavigate("/simulado")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white hover:text-amber-400 border border-slate-700 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Fazer Simulado Teórico</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#111827] border-2 border-amber-400/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl shadow-amber-500/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center font-black shadow-md">
                  <Layers className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-black text-white uppercase">Vantagens do Combo AB</h3>
                  <span className="text-xs text-amber-400 font-bold">Máxima liberdade & economia</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-4">
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Curso Teórico:</span>
                  <span className="font-bold text-amber-400">Apenas 1x de 45 horas</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Aulas Práticas:</span>
                  <span className="font-bold text-amber-400">Mínimo 2h/aula (Norma 2026)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Frota & Conforto:</span>
                  <span className="font-bold text-white">Carros com ar e motos revisadas</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Tempo Médio Ximenes:</span>
                  <span className="font-bold text-amber-400">20 a 30 dias de processo</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Taxa de Aprovação:</span>
                  <span className="font-bold text-emerald-400">94% no DETRAN-CE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111827] p-6 rounded-3xl border border-slate-700/80 space-y-3 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center font-bold">
                <DollarSign className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-base font-black text-white uppercase">Economia Real</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Você não paga duas matrículas e não perde dias repetindo o módulo teórico obrigatório do DETRAN.</p>
            </div>
            <div className="bg-[#111827] p-6 rounded-3xl border border-slate-700/80 space-y-3 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-base font-black text-white uppercase">Processo Ágil (20 a 30 Dias)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Faz as aulas práticas de carro e moto de forma intercalada ou consecutiva, agilizando seu processo.</p>
            </div>
            <div className="bg-[#111827] p-6 rounded-3xl border border-slate-700/80 space-y-3 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-base font-black text-white uppercase">Mais Oportunidades</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Amplia suas chances no mercado de trabalho e garante autonomia total de deslocamento no trânsito de Fortaleza.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
