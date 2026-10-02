import React from "react";
import { SEOHead } from "../components/SEOHead";
import { CTASection } from "../components/CTASection";
import { siteConfig } from "../config/siteConfig";
import brunaPhoto from "../assets/images/bruna_depoimento_1789328118279.jpg";
import carlosPhoto from "../assets/images/carlos_emanuel_1789328277800.jpg";
import ricardoPhoto from "../assets/images/ricardo_gomes_1789328894476.jpg";
import { Users, Car, HeartHandshake, Star, MapPin, ExternalLink, CheckCircle2 } from "lucide-react";
import { WhatsAppButton } from "../components/WhatsAppButton";

export const AboutPage: React.FC<{ onNavigate: (path: string) => void }> = () => {
  return (
    <div className="bg-white text-slate-900 min-h-screen py-10">
      <SEOHead
        title={`Sobre a ${siteConfig.nome} em Fortaleza | História e Metodologia`}
        description={`Fundada em 2012 no Pan-Americano em Fortaleza. Conheça a história da ${siteConfig.nome}, frota com ar e direção elétrica e formação focada no aprendizado humanizado.`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-slate-200">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Desde 2012 no Pan-Americano
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-slate-950">
            Tradição, acolhimento e compromisso com o seu aprendizado
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            A {siteConfig.nome} foi fundada em 2012 com a missão de transformar o aprendizado de trânsito em Fortaleza em uma experiência acolhedora, transparente e eficaz. Nossa prioridade é formar condutores conscientes, seguros e preparados para o trânsito real.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <WhatsAppButton
              label="QUERO SER O PRÓXIMO APROVADO!"
              size="md"
              mensagem="Olá! Li sobre a história da Auto Escola Ximenes e quero ser o próximo aprovado com vocês!"
            />
          </div>
        </div>
      </div>

      {/* Pilares */}
      <section className="py-16 border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-950">Instrutores Pacientes</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Profissionais credenciados pelo DETRAN-CE com metodologia humanizada para acolher quem nunca tocou no volante ou sente receio de dirigir.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-950">Frota Climatizada</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Veículos revisados com ar-condicionado, direção elétrica suave e duplo comando de pedais para máxima segurança durante o aprendizado.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-950">Aulas Práticas de 2 Horas</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Aulas organizadas em blocos de 2 horas de prática contínua (norma CONTRAN), permitindo maior aproveitamento e fixação das manobras.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Depoimentos em Destaque */}
      <section className="py-16 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
              Depoimentos Verificados
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Relatos reais de alunos formados
            </h2>
            <p className="text-sm text-slate-600">
              Histórias reais de alunos que conquistaram a habilitação na Auto Escola Ximenes em Fortaleza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bruna Albuquerque */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={brunaPhoto}
                      alt="Bruna Albuquerque - Aluna da Auto Escola Ximenes"
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full object-cover border border-slate-200 flex-shrink-0"
                    />
                    <div>
                      <span className="font-semibold text-sm text-slate-900 block">Bruna Albuquerque</span>
                      <span className="text-xs text-slate-500">
                        Aulas Práticas com Sérgio
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic bg-white p-3.5 rounded-xl border border-slate-200/60">
                  "Conheci a autoescola por indicação, amei o atendimento da recepção, deixou tudo bem explicado e o meu instrutor foi o Sérgio, bastante paciente. Foquei bastante no que vou fazer na prova e aprendi muito além!"
                </p>
              </div>

              <span className="text-xs font-medium text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Aluna Habilitada
              </span>
            </div>

            {/* Carlos Emanuel */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={carlosPhoto}
                      alt="Carlos Emanuel - Aluno Aprovado Auto Escola Ximenes"
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full object-cover border border-slate-200 flex-shrink-0"
                    />
                    <div>
                      <span className="font-semibold text-sm text-slate-900 block">Carlos Emanuel</span>
                      <span className="text-xs text-slate-500">
                        Aprovado no DETRAN-CE
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic bg-white p-3.5 rounded-xl border border-slate-200/60">
                  "Excelente autoescola! Desde o primeiro dia fui muito bem atendido e orientado. Os instrutores são extremamente qualificados e passam confiança durante as aulas. O método de ensino fez toda a diferença!"
                </p>
              </div>

              <span className="text-xs font-medium text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Aprovado no Exame
              </span>
            </div>

            {/* Ricardo Gomes */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={ricardoPhoto}
                      alt="Ricardo Gomes - Aluno Aprovado Auto Escola Ximenes"
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full object-cover border border-slate-200 flex-shrink-0"
                    />
                    <div>
                      <span className="font-semibold text-sm text-slate-900 block">Ricardo Gomes</span>
                      <span className="text-xs text-slate-500">
                        Processo Concluído
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic bg-white p-3.5 rounded-xl border border-slate-200/60">
                  "Excelente experiência com a Auto Escola Ximenes! Fui muito bem atendido desde o início, com muita atenção e respeito. Destaque para o suporte que esclareceu todas as minhas dúvidas durante o processo."
                </p>
              </div>

              <span className="text-xs font-medium text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Aprovado no Exame
              </span>
            </div>

          </div>

          <div className="mt-10 text-center">
            <a
              id="about-btn-ver-mais-google"
              href="https://maps.app.goo.gl/1E4Mz6mvzFjJwfQx6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-300 hover:border-amber-400 text-slate-800 hover:text-slate-950 font-bold text-xs uppercase tracking-wider shadow-2xs hover:shadow-xs transition-all duration-200 group"
            >
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-slate-900 font-black">4.5</span>
              </div>
              <span className="border-l border-slate-200 pl-2.5">VER TODAS AS AVALIAÇÕES NO GOOGLE</span>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-600 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Institutional Location Bar */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-slate-700 flex-shrink-0" />
            <div>
              <span className="font-semibold text-sm text-slate-900 block">Sede Própria no Pan-Americano</span>
              <span className="text-xs text-slate-600">Rua Amazonas, 220 - Pan-Americano, Fortaleza - CE</span>
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/WjqdJ3WnktRSh6J97"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <span>Ver no Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </section>

      <CTASection
        title="Quer ser o próximo aprovado?"
        subtitle="Conheça a metodologia da Auto Escola Ximenes e conquiste sua carteira de motorista com suporte dedicado em Fortaleza."
        buttonLabel="QUERO SER O PRÓXIMO APROVADO!"
        mensagem="Olá! Li sobre a história da Auto Escola Ximenes no site e quero ser o próximo aprovado com vocês!"
      />
    </div>
  );
};
