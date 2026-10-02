import React from "react";
import { SEOHead } from "../components/SEOHead";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { CTASection } from "../components/CTASection";
import { siteConfig } from "../config/siteConfig";
import { MapPin, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Navigation, ExternalLink, Clock, Building2 } from "lucide-react";

export const FortalezaPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-slate-900 min-h-screen py-12">
      <SEOHead
        title={`Auto Escola em Fortaleza - CE | Sede Pan-Americano ${siteConfig.nome}`}
        description="Auto Escola Ximenes em Fortaleza no bairro Pan-Americano. Desde 2012 formando condutores nas categorias A, B, AB e D. Aulas práticas de 2 horas (norma 2026), frota com ar e 94% de aprovação."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-slate-200">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-black text-slate-800 uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-[#D9AC0B]" />
            <span>Pan-Americano • Fortaleza - CE</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight text-slate-900">
            SUA AUTO ESCOLA DE CONFIANÇA EM <span className="text-[#1E232A] underline decoration-[#FFC905] decoration-4">FORTALEZA</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Se você busca aprovação ágil (20 a 30 dias), atendimento transparente e instrutores credenciados que ensinam com paciência e metodologia, a {siteConfig.nome} é a sua melhor escolha na capital cearense.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <WhatsAppButton
              label="CONSULTAR HORÁRIOS E VALORES"
              size="md"
              mensagem="Olá! Quero saber as opções de turmas e valores da Auto Escola Ximenes em Fortaleza."
            />
            <button
              onClick={() => onNavigate("/simulado")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Simulado DETRAN-CE Online</span>
              <ArrowRight className="w-4 h-4 text-[#D9AC0B]" />
            </button>
          </div>
        </div>
      </div>

      {/* Sede e Mapa Interativo */}
      <section className="py-16 border-b border-slate-200 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-black text-slate-800 uppercase tracking-wider bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                  <Building2 className="w-4 h-4 text-[#D9AC0B]" />
                  <span>Sede Própria</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                  Como Chegar à Auto Escola Ximenes
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Nossa sede fica na Rua Amazonas, 220, no bairro Pan-Americano em Fortaleza. Fácil acesso por transporte público, ônibus e principais vias da cidade.
                </p>

                <div className="space-y-3 pt-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#D9AC0B] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Endereço:</strong>
                      <span>Rua Amazonas, 220 - Pan-Americano, Fortaleza - CE, 60440-190</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#D9AC0B] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Horário:</strong>
                      <span>Segunda a Sexta: 08h às 12h e 14h às 18h</span>
                      <span className="block text-slate-500">Sábado: 08h às 12h</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href="https://maps.app.goo.gl/WjqdJ3WnktRSh6J97"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider transition-all shadow-sm"
                  >
                    <Navigation className="w-4 h-4 text-[#FFC905]" />
                    <span>ABRIR NO GOOGLE MAPS</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Map embed */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-md h-80 sm:h-96 w-full bg-slate-200">
                  <iframe
                    title="Localização no Google Maps"
                    src="https://maps.google.com/maps?q=Rua%20Amazonas,%20220,%20Pan-Americano,%20Fortaleza%20CE&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Preparação focada */}
      <section className="py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-black text-slate-800 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Preparação Específica para a Prova do DETRAN-CE</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                  PREPARAÇÃO FOCADA NO PADRÃO DETRAN-CE
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Os exames práticos em Fortaleza são realizados nas sedes do DETRAN-CE (como na Maraponga). Nossos instrutores treinam detalhadamente cada procedimento exigido pelos examinadores — domínio seguro de pedais, volante, sinalização e circulação em vias reais — em aulas práticas de no mínimo 2 horas consecutivas (norma 2026), para que você chegue no exame com tranquilidade e passe de primeira.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <WhatsAppButton
                  label="TIRAR DÚVIDAS NO WHATSAPP"
                  size="md"
                  mensagem="Olá! Quero saber como funciona a preparação para o exame prático do Detran na Auto Escola Ximenes."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
