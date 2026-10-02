import React from "react";
import { motion } from "motion/react";
import {
  Heart,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Quote
} from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-nos" className="bg-slate-50 py-16 md:py-20 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            História e Propósito
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
            Sobre Nós: O Método Ximenes
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Uma abordagem transparente, humana e focada na preparação consistente de cada condutor.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-200/80 text-slate-800 text-xs font-semibold">
              <span>Desde 2012 • Nova Gestão em 2022</span>
            </div>

            <p>
              Em 2022, logo após a pandemia — período em que tantos negócios não resistiram —, uma nova gestão assumiu a continuidade dessa história. Não para reinventá-la, mas para compreendê-la, aprendê-la a fundo e levá-la mais longe. Foi assim que o <strong>Método Ximenes</strong> amadureceu e ganhou a forma que tem hoje.
            </p>

            <p>
              Somos uma empresa movida por ideias, com um propósito claro: transformar toda a burocracia associada ao nome "auto escola" em uma experiência surpreendentemente leve, clara e humana.
            </p>

            <p>
              Crescemos com o trabalho diário de cada colaborador, com honestidade e empatia. Quem chega até nós vem pela certeza de seriedade e resultado, e encontra uma equipe que se preocupa genuinamente com quem está no banco do aluno.
            </p>

            <p>
              Nosso objetivo vai além de habilitar motoristas: queremos mudar a percepção sobre o processo de habilitação e ser a referência de quem procura respeito, paciência no ensino e atendimento presente.
            </p>

            {/* Quote Box */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs relative mt-4">
              <Quote className="w-6 h-6 text-slate-300 absolute top-4 right-4 pointer-events-none" />
              <p className="text-sm sm:text-base font-heading font-medium text-slate-900 italic leading-snug">
                "Acreditamos que, com o método certo, tirar a CNH deixa de ser assustador. Vira o começo da sua liberdade."
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <WhatsAppButton
                id="about-btn-whatsapp"
                label="QUERO SER O PRÓXIMO APROVADO"
                size="md"
                className="shadow-xs"
                mensagem="Olá! Li sobre a história da Auto Escola Ximenes e o Método Ximenes. Quero ser o próximo aprovado com vocês!"
              />
              <a
                href="#planos-desconto"
                className="group inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors"
              >
                <span>Conhecer nossos planos</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Values */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 hover:shadow-md hover:border-slate-300 transition-all duration-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 flex-shrink-0">
                  <Award className="w-4 h-4 text-[#D9AC0B]" />
                </div>
                <h3 className="font-heading text-base font-bold text-slate-900">
                  Metodologia Focada no Exame
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-12">
                Aulas práticas que preparam o aluno exatamente para o percurso avaliado pelo DETRAN-CE, minimizando nervosismo e corrigindo dificuldades.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 hover:shadow-md hover:border-slate-300 transition-all duration-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 flex-shrink-0">
                  <Heart className="w-4 h-4 text-rose-600" />
                </div>
                <h3 className="font-heading text-base font-bold text-slate-900">
                  Experiência Leve e Acolhedora
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-12">
                Desmistificamos a burocracia com atendimento ágil, instrutores pacientes e orientação detalhada em todas as fases do processo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 hover:shadow-md hover:border-slate-300 transition-all duration-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="font-heading text-base font-bold text-slate-900">
                  Transparência e Respeito
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-12">
                Contratos claros, sem taxas ocultas, opções de pagamento acessíveis e suporte contínuo até a emissão da sua carteira de habilitação.
              </p>
            </div>

            {/* Pillars Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Empatia no Ensino",
                "Atendimento Presente",
                "Instrutores Pacientes",
                "Frota Equipada",
                "Sede Própria em Fortaleza"
              ].map((pill, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center gap-1.5 shadow-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{pill}</span>
                </span>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
