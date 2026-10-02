import React from "react";
import { SEOHead } from "../components/SEOHead";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Bus, CheckCircle2, ShieldCheck, Award, ArrowRight, Clock, AlertCircle, Sparkles } from "lucide-react";
import { CTASection } from "../components/CTASection";
import { siteConfig } from "../config/siteConfig";

export const CNHDPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="py-12 bg-[#0A0E17] text-white">
      <SEOHead
        title="CNH Categoria D (Ônibus e Vans) em Fortaleza | Autoescola Ximenes"
        description="Mude para a Categoria D na Autoescola Ximenes em Fortaleza. Habilite-se para dirigir vans, micro-ônibus e ônibus. Conclusão rápida em 20 a 30 dias."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-slate-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-400/40 text-xs font-black text-amber-400 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Habilitação Profissional de Passageiros</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight">
              CNH CATEGORIA D <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">ÔNIBUS & VANS</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Dê um salto na sua carreira profissional como motorista. Com a Categoria D na <strong className="text-white">Autoescola Ximenes</strong> em {siteConfig.cidade}, você fica habilitado para conduzir ônibus urbanos e rodoviários, vans executivas, micro-ônibus e transporte escolar. Processo ágil com tempo médio de conclusão de <span className="text-amber-400 font-bold">20 a 30 dias</span>!
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <WhatsAppButton
                label="INICIAR MUDANÇA PARA CATEGORIA D"
                size="md"
                mensagem="Olá! Tenho interesse na CNH Categoria D (Ônibus e Vans) na Autoescola Ximenes. Gostaria de saber os requisitos e valores."
              />
              <button
                onClick={() => onNavigate("/simulado")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white hover:text-amber-400 border border-slate-700 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Fazer Simulado Teórico</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#111827] border-2 border-amber-400 rounded-3xl p-7 sm:p-8 space-y-6 shadow-2xl shadow-amber-500/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center font-black shadow-md">
                  <Bus className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-black text-white uppercase">Resumo Categoria D</h3>
                  <span className="text-xs text-amber-400 font-bold">Veículos com mais de 8 passageiros</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-4">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Tempo Médio:</span>
                  <span className="font-bold text-amber-400">20 a 30 dias</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Idade Mínima:</span>
                  <span className="font-bold text-white">21 anos completos</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Requisito de CNH:</span>
                  <span className="font-bold text-white">Habilitado há 2 anos na B ou 1 ano na C</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Histórico de Infrações:</span>
                  <span className="font-bold text-white">Sem infração gravíssima nos últimos 12 meses</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Exame Toxicológico:</span>
                  <span className="font-bold text-white">Obrigatório em laboratório credenciado</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Início das Aulas:</span>
                  <span className="font-bold text-emerald-400">Imediato sem fila de espera</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <section className="py-16 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-black uppercase text-amber-400 tracking-widest block">
              Vantagens Profissionais
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              POR QUE MUDAR PARA A CATEGORIA D NA XIMENES?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111827] p-7 rounded-3xl border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-base font-black text-white uppercase">Processo Ágil (20 a 30 dias)</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Como você já possui CNH, não precisa refazer o curso teórico comum de 45h. Realize apenas as aulas práticas e os exames específicos, concluindo em poucas semanas.
              </p>
            </div>

            <div className="bg-[#111827] p-7 rounded-3xl border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-base font-black text-white uppercase">Treino no Percurso Oficial DETRAN</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Aulas práticas no veículo oficial em rotas reais de exame do DETRAN-CE, garantindo total domínio das dimensões, pontos cegos e paradas regulamentares com 94% de aprovação.
              </p>
            </div>

            <div className="bg-[#111827] p-7 rounded-3xl border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-base font-black text-white uppercase">Alta Empregabilidade no Ceará</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Empresas de ônibus de Fortaleza, vans escolares, turismo no litoral cearense e frotas executivas buscam continuamente motoristas com a categoria D regularizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="PRONTO PARA DIRIGIR PROFISSIONALMENTE?"
        subtitle="Agende agora sua mudança para a Categoria D na Autoescola Ximenes com condições facilitadas de parcelamento."
        buttonLabel="QUERO MINHA CNH D"
        mensagem="Olá! Quero dar entrada na minha CNH D na Autoescola Ximenes. Como podemos agendar?"
      />
    </div>
  );
};
