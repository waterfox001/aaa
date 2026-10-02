import React from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  Clock,
  Check,
  ArrowRight,
  ShieldCheck,
  HelpCircle
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface DetranSimuladoSectionProps {
  onNavigate: (path: string) => void;
}

export const DetranSimuladoSection: React.FC<DetranSimuladoSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 text-center lg:text-left"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Preparação Teórica
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
              Simulado DETRAN para a prova teórica
            </h2>

            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Pratique com questões estruturadas nos mesmos moldes do exame oficial do DETRAN-CE.
            </p>

            {/* Core Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center hover:border-slate-300 transition-colors shadow-2xs">
                <span className="font-heading font-bold text-xl sm:text-2xl text-slate-950 block">
                  30
                </span>
                <span className="text-xs text-slate-500 block mt-0.5">
                  Questões
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center hover:border-slate-300 transition-colors shadow-2xs">
                <span className="font-heading font-bold text-xl sm:text-2xl text-slate-950 block">
                  40 min
                </span>
                <span className="text-xs text-slate-500 block mt-0.5">
                  Tempo padrão
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center hover:border-slate-300 transition-colors shadow-2xs">
                <span className="font-heading font-bold text-xl sm:text-2xl text-emerald-700 block">
                  70%
                </span>
                <span className="text-xs text-slate-500 block mt-0.5">
                  Pontuação mínima
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                id="btn-detran-simulado-cta"
                href="/simulado"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-xs active:scale-[0.98]"
              >
                <BookOpen className="w-4 h-4" />
                <span>Acessar Simulado</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Sample Question Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <span className="text-xs font-semibold text-slate-700">
                  Exemplo de Questão
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>Tempo sugerido: 40:00</span>
                </span>
              </div>

              <div className="space-y-3.5">
                <h4 className="font-heading text-sm font-semibold text-slate-900 leading-snug">
                  Diante da placa de regulamentação R-1 ("PARADA OBRIGATÓRIA"), o condutor deve:
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600">
                    A) Reduzir a velocidade e prosseguir caso não aviste pedestres.
                  </div>

                  <div className="p-3 rounded-xl bg-white border-2 border-slate-900 text-slate-950 font-medium flex items-center justify-between shadow-2xs">
                    <span>B) Parar totalmente o veículo antes de entrar na via.</span>
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600">
                    C) Acionar a buzina para alertar condutores transversais.
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Explicação:</strong> A placa R-1 determina a parada total e obrigatória antes da linha de retenção.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate("/simulado")}
                  className="cta-yellow group w-full py-3.5 rounded-xl text-slate-950 text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <span>Iniciar Simulado Completo</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
