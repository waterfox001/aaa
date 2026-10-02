import React from "react";
import { motion } from "motion/react";
import { Hero } from "../components/Hero";
import { PricingPlans } from "../components/PricingPlans";
import { InteractivePlanQuiz } from "../components/InteractivePlanQuiz";
import { DetranSimuladoSection } from "../components/DetranSimuladoSection";
import { BenefitsSection } from "../components/BenefitsSection";
import { HowItWorks } from "../components/HowItWorks";
import { AboutSection } from "../components/AboutSection";
import { FAQ } from "../components/FAQ";
import { CTASection } from "../components/CTASection";
import { SEOHead } from "../components/SEOHead";
import { siteConfig } from "../config/siteConfig";
import brunaPhoto from "../assets/images/bruna_depoimento_1789328118279.jpg";
import carlosPhoto from "../assets/images/carlos_emanuel_1789328277800.jpg";
import ricardoPhoto from "../assets/images/ricardo_gomes_1789328894476.jpg";
import {
  Star,
  ArrowRight,
  Clock,
  Building2,
  Navigation,
  ExternalLink,
  Users,
  CheckCircle2
} from "lucide-react";
import { WhatsAppButton } from "../components/WhatsAppButton";

interface HomeProps {
  onNavigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0 bg-white text-slate-900">
      <SEOHead
        title="Auto Escola Ximenes em Fortaleza | Habilitação com Segurança e Transparência"
        description="Auto Escola Ximenes no bairro Pan-Americano em Fortaleza. Aulas práticas com instrutores dedicados, frota com ar-condicionado e metodologia focada no seu aprendizado."
      />

      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Pricing Plans Section */}
      <PricingPlans onNavigate={onNavigate} />

      {/* 4. Interactive Plan Quiz (Qualifying Quiz) */}
      <InteractivePlanQuiz onNavigate={onNavigate} />

      {/* 5. Sobre Nós — O Método Ximenes */}
      <AboutSection />

      {/* 6. Simulado DETRAN Section */}
      <DetranSimuladoSection onNavigate={onNavigate} />

      {/* 7. Benefits & Differentials */}
      <BenefitsSection onStartClick={() => {
        const plansEl = document.getElementById("planos-desconto");
        if (plansEl) plansEl.scrollIntoView({ behavior: "smooth" });
      }} />

      {/* 8. How It Works */}
      <HowItWorks />

      {/* 9. Verified Student Testimonials */}
      <section id="depoimentos" className="bg-white py-16 md:py-20 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto mb-12 space-y-3"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Depoimentos de Alunos
            </span>
            
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              O que dizem os alunos formados pela Ximenes
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Relatos reais de quem vivenciou nosso método de ensino e conquistou sua carteira de habilitação.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bruna Albuquerque */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-4 shadow-xs hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={brunaPhoto}
                    alt="Bruna Albuquerque - Aluna da Auto Escola Ximenes"
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border border-slate-200 flex-shrink-0"
                  />
                  <div>
                    <span className="font-semibold text-slate-900 text-sm block">Bruna Albuquerque</span>
                    <span className="text-xs text-slate-500">
                      Instrutor Sérgio • Aulas Práticas
                    </span>
                  </div>
                </div>

                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic bg-white p-3.5 rounded-xl border border-slate-200/60">
                  "Conheci a autoescola por indicação, amei o atendimento da recepção, deixou tudo bem explicado e o meu instrutor foi o Sérgio, bastante paciente. Foquei bastante no que vou fazer na prova e aprendi muito além!"
                </p>
              </div>

              <span className="text-xs font-medium text-slate-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Aluna Habilitada • Categoria B
              </span>
            </motion.div>

            {/* Carlos Emanuel */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-4 shadow-xs hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={carlosPhoto}
                    alt="Carlos Emanuel - Aluno Auto Escola Ximenes"
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border border-slate-200 flex-shrink-0"
                  />
                  <div>
                    <span className="font-semibold text-slate-900 text-sm block">Carlos Emanuel</span>
                    <span className="text-xs text-slate-500">
                      Formação Prática de Carro
                    </span>
                  </div>
                </div>

                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic bg-white p-3.5 rounded-xl border border-slate-200/60">
                  "Excelente autoescola! Desde o primeiro dia fui muito bem atendido e orientado. Os instrutores são extremamente qualificados e passam confiança durante as aulas. O método de ensino fez toda a diferença!"
                </p>
              </div>

              <span className="text-xs font-medium text-slate-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Aluno Habilitado • Categoria B
              </span>
            </motion.div>

            {/* Ricardo Gomes */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-4 shadow-xs hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={ricardoPhoto}
                    alt="Ricardo Gomes - Aluno Auto Escola Ximenes"
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border border-slate-200 flex-shrink-0"
                  />
                  <div>
                    <span className="font-semibold text-slate-900 text-sm block">Ricardo Gomes</span>
                    <span className="text-xs text-slate-500">
                      Processo de Habilitação
                    </span>
                  </div>
                </div>

                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic bg-white p-3.5 rounded-xl border border-slate-200/60">
                  "Excelente experiência! Davison, Neuzirene e Mairla foram super prestativos, esclareceram todas as minhas dúvidas e deram suporte total. Concluí todas as etapas práticas e fui aprovado com tranquilidade!"
                </p>
              </div>

              <span className="text-xs font-medium text-slate-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Aluno Habilitado • Categoria AB
              </span>
            </motion.div>

          </div>

          {/* Social Proof Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
          >
            <a
              id="btn-ver-mais-google"
              href="https://maps.app.goo.gl/1E4Mz6mvzFjJwfQx6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 hover:text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xs hover:shadow-md transition-all duration-200 active:scale-[0.98] group cursor-pointer"
            >
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-slate-900 font-black">4.5</span>
              </div>
              <span className="border-l border-slate-200 pl-2.5">VER AVALIAÇÕES NO GOOGLE</span>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-800 transition-colors" />
            </a>

            <a
              id="testimonials-btn-whatsapp-cta"
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Olá! Vi os depoimentos no site e gostaria de saber como iniciar minha habilitação na Auto Escola Ximenes.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto cta-yellow group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
            >
              <Users className="w-4 h-4 text-slate-950" />
              <span>FALAR COM NOSSA EQUIPE</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

        </div>
      </section>

      {/* 10. Location & Google Maps Section */}
      <section id="localizacao" className="bg-slate-50 py-16 md:py-20 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                  Venha nos visitar no Pan-Americano
                </h3>

                <div className="space-y-3 pt-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Endereço:</strong>
                      <span>Rua Amazonas, 220 - Pan-Americano, Fortaleza - CE, CEP 60440-190</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Horário de Atendimento:</strong>
                      <span>Segunda a Sexta: 08:00 às 12:00 e 14:00 às 18:00</span>
                      <span className="block text-slate-500">Sábado: 08:00 às 12:00</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-2.5">
                  <a
                    href="https://maps.app.goo.gl/WjqdJ3WnktRSh6J97"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xs active:scale-[0.98]"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Ver no Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <WhatsAppButton
                    size="sm"
                    label="AGENDAR VISITA NA UNIDADE"
                    className="shadow-xs"
                    mensagem="Olá! Gostaria de agendar uma visita na unidade Pan-Americano da Auto Escola Ximenes para conhecer e me matricular!"
                  />
                </div>
              </div>

              {/* Map Embed Container */}
              <div className="lg:col-span-7">
                <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xs h-72 sm:h-80 w-full bg-slate-100">
                  <iframe
                    title="Localização Auto Escola Ximenes no Google Maps"
                    src="https://maps.google.com/maps?q=Rua%20Amazonas,%20220,%20Pan-Americano,%20Fortaleza%20CE&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-800 shadow-xs pointer-events-none">
                    Rua Amazonas, 220 - Pan-Americano
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section id="faq" className="bg-white py-16 md:py-20 border-b border-slate-200 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-3 mb-8"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Dúvidas Comuns
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Perguntas Frequentes sobre a Habilitação
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              Principais esclarecimentos sobre exames, aulas práticas, prazos e etapas do processo no DETRAN-CE.
            </p>
          </motion.div>

          <FAQ
            initialLimit={2}
            allowExpand={true}
            showSearch={false}
            onNavigate={onNavigate}
          />
        </div>
      </section>

      {/* 12. Final CTA Banner */}
      <CTASection />
    </div>
  );
};
