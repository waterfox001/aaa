import React from "react";
import { SEOHead } from "../components/SEOHead";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Car, CheckCircle2, ArrowRight } from "lucide-react";
import { CTASection } from "../components/CTASection";
import { siteConfig } from "../config/siteConfig";

export const CNHBPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="py-12 bg-white text-slate-900 min-h-screen">
      <SEOHead
        title={`CNH Categoria B (Carro) em Fortaleza | Frota Nova Climatizada ${siteConfig.nome}`}
        description="Aprenda a dirigir com calma e segurança. CNH Categoria B em Fortaleza com veículos com ar-condicionado, direção elétrica e instrutores credenciados na Auto Escola Ximenes."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Carros de Passeio & Utilitários
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
              CNH Categoria B em Fortaleza
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              Dirija com autonomia e tranquilidade. Nossa frota na Auto Escola Ximenes é composta por veículos modernos com direção elétrica, ar-condicionado e aulas práticas em blocos de 2 horas (norma CONTRAN) com duplo comando de pedais para você aprender sem medo e com máxima segurança.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <WhatsAppButton
                label="QUERO MINHA HABILITAÇÃO DE CARRO"
                size="md"
                mensagem="Olá! Tenho interesse na CNH Categoria B (Carro) na Auto Escola Ximenes e gostaria de consultar horários e turmas."
              />
              <button
                type="button"
                onClick={() => onNavigate("/simulado")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Acessar Simulado</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-7 space-y-5 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-slate-950">Resumo da Categoria B</h3>
                  <span className="text-xs text-slate-500">Automóveis e utilitários leves até 3.500 kg</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700 border-t border-slate-200/80 pt-4">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Carga Teórica:</span>
                  <span className="font-semibold text-slate-900">45 horas/aula</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Carga Prática:</span>
                  <span className="font-semibold text-slate-900">20 horas/aula</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Veículos:</span>
                  <span className="font-semibold text-slate-900">Direção elétrica e ar-condicionado</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Aulas Práticas:</span>
                  <span className="font-semibold text-slate-900">Blocos de 2h (norma CONTRAN)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <section className="py-14 border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="font-heading text-base font-bold text-slate-950">Controle do Veículo</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Instrução prática voltada para o controle suave de embreagem, aceleração gradual, frenagem precisa e baliza sem mistério.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="font-heading text-base font-bold text-slate-950">Circulação em Vias Urbanas</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Treinamento em condições reais de trânsito em Fortaleza, respeitando a sinalização e regras de preferência do DETRAN-CE.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="font-heading text-base font-bold text-slate-950">Instrutores Pacientes</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Explicações claras no seu ritmo, sem pressa nem pressão, transmitindo total tranquilidade ao volante.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Deseja aprender a dirigir com tranquilidade?"
        subtitle="Converse com a equipe da Auto Escola Ximenes no Pan-Americano e dê início às suas aulas de carro."
        buttonLabel="QUERO MINHA HABILITAÇÃO DE CARRO"
        mensagem="Olá! Quero dar início à minha CNH Categoria B (Carro) na Auto Escola Ximenes. Poderiam me orientar sobre a matrícula?"
      />
    </div>
  );
};
