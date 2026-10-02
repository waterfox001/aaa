import React from "react";
import { SEOHead } from "../components/SEOHead";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Bike, CheckCircle2, ArrowRight } from "lucide-react";
import { CTASection } from "../components/CTASection";
import { siteConfig } from "../config/siteConfig";

export const CNHAPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="py-12 bg-white text-slate-900 min-h-screen">
      <SEOHead
        title={`CNH Categoria A (Moto) em Fortaleza | ${siteConfig.nome}`}
        description="Tire sua CNH de moto em Fortaleza na Auto Escola Ximenes com instrutores dedicados, motos revisadas e aulas práticas em blocos de 2h (norma CONTRAN)."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Motocicletas & Ciclomotores
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
              CNH Categoria A em Fortaleza
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              Agilidade e autonomia no dia a dia ou para o trabalho. Na Auto Escola Ximenes você treina os percursos e manobras exigidas no exame prático do DETRAN-CE (prancha de equilíbrio, labirinto, cones e frenagem) com instrutores pacientes e motos reguladas.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <WhatsAppButton
                label="QUERO MINHA HABILITAÇÃO DE MOTO"
                size="md"
                mensagem="Olá! Tenho interesse na CNH Categoria A (Moto) na Auto Escola Ximenes e gostaria de consultar as opções de turmas."
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
                  <Bike className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-slate-950">Resumo da Categoria A</h3>
                  <span className="text-xs text-slate-500">Veículos de 2 ou 3 rodas com motor</span>
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
                  <span className="font-semibold text-slate-900">Motos 150cc e 160cc revisadas</span>
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
              <h4 className="font-heading text-base font-bold text-slate-950">Apoio Paciente</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Instrutores ao seu lado desde as primeiras voltas na pista, orientando embreagem, equilíbrio e frenagem segura.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="font-heading text-base font-bold text-slate-950">Aulas de 2 Horas</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Agendamentos em blocos práticos de 2 horas para garantir maior tempo de circuito e evolução constante no controle da moto.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="font-heading text-base font-bold text-slate-950">Motos Revisadas</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Partida elétrica, protetor de pernas e motor regulado para estabilidade absoluta na prancha e nas manobras.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Deseja pilotar com segurança e confiança?"
        subtitle="Entre em contato com nossos atendentes e garanta sua vaga na Categoria A da Auto Escola Ximenes."
        buttonLabel="QUERO MINHA HABILITAÇÃO DE MOTO"
        mensagem="Olá! Quero tirar minha CNH Categoria A (Moto) na Auto Escola Ximenes. Como posso fazer minha matrícula?"
      />
    </div>
  );
};
