import React from "react";
import { SEOHead } from "../components/SEOHead";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { CategoryCard, defaultCategories } from "../components/CategoryCard";
import { HowItWorks } from "../components/HowItWorks";
import { CTASection } from "../components/CTASection";
import { CheckCircle2, FileText, UserCheck, ArrowRight } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const CNHPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="py-12 bg-white text-slate-900 min-h-screen">
      <SEOHead
        title="Primeira Habilitação (CNH) em Fortaleza | Passo a Passo Completo"
        description="Orientações completas para emissão da primeira CNH em Fortaleza. Documentos, requisitos, etapas e exames práticos com a Auto Escola Ximenes."
      />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-slate-200">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Processo de Habilitação
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
            Primeira Habilitação em Fortaleza
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Entenda todos os requisitos, documentos necessários e as etapas regulamentadas para conquistar sua Carteira Nacional de Habilitação com acompanhamento individualizado na {siteConfig.nome}.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <WhatsAppButton
              label="INICIAR MINHA PRIMEIRA CNH"
              size="md"
              mensagem="Olá! Gostaria de informações sobre a Primeira Habilitação e horários de turmas na Auto Escola Ximenes."
            />
            <button
              type="button"
              onClick={() => onNavigate("/simulado")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Acessar Simulado DETRAN</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Requirements & Documents */}
      <section className="py-14 border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Box 1: Requisitos Obrigatórios */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-lg font-bold text-slate-950">
                  Requisitos Obrigatórios
                </h2>
              </div>
              <p className="text-xs text-slate-500">
                Conforme estabelecido pelo Código de Trânsito Brasileiro (CTB) e resoluções do CONTRAN:
              </p>

              <ul className="space-y-3 pt-1 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Idade mínima de 18 anos</strong> completos no momento da abertura do processo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Saber ler e escrever</strong> em língua portuguesa.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Documento de identidade oficial com foto (RG)</strong> e CPF próprio regular.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Comprovante de residência</strong> recente em Fortaleza ou região metropolitana.</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Documentos para Matrícula */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-lg font-bold text-slate-950">
                  Documentação para Matrícula
                </h2>
              </div>
              <p className="text-xs text-slate-500">
                Apresente os originais na autoescola ou envie fotos nítidas para abertura do processo:
              </p>

              <ul className="space-y-3 pt-1 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 flex-shrink-0 mt-0.5" />
                  <span><strong>RG original</strong> ou Carteira de Trabalho/Passaporte em bom estado.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 flex-shrink-0 mt-0.5" />
                  <span><strong>CPF regular</strong> (caso não conste no documento de identidade).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 flex-shrink-0 mt-0.5" />
                  <span><strong>Comprovante de endereço</strong> recente (água, energia, internet ou telefone).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 flex-shrink-0 mt-0.5" />
                  <span>Nossa equipe auxilia na abertura do RENACH e no agendamento dos exames clínicos.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider block">
              Categorias
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Escolha a modalidade adequada para você
            </h2>
            <p className="text-sm text-slate-600">
              Cursos práticos com veículos revisados e instrutores credenciados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {defaultCategories.map(cat => (
              <CategoryCard
                key={cat.codigo}
                category={cat}
                onNavigateDetails={onNavigate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      <CTASection
        title="Pronto para dar o primeiro passo rumo à sua CNH?"
        subtitle="Entre em contato com nossa equipe no Pan-Americano e inicie suas aulas práticas com veículos modernos e atendimento humanizado."
        buttonLabel="QUERO MINHA PRIMEIRA HABILITAÇÃO"
        mensagem="Olá! Quero dar início à minha Primeira Habilitação na Auto Escola Ximenes. Poderiam me orientar sobre as turmas?"
      />
    </div>
  );
};
