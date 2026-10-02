import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useSpring, useInView } from "motion/react";
import {
  Smartphone,
  Stethoscope,
  BookOpen,
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

interface StepData {
  numero: string;
  titulo: string;
  shortTitle: string;
  icone: React.ComponentType<{ className?: string }>;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
}

const steps: StepData[] = [
  {
    numero: "01",
    titulo: "Matrícula e Aulas Teóricas EAD",
    shortTitle: "Matrícula & EAD",
    icone: Smartphone,
    accentColor: "text-amber-600",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/30"
  },
  {
    numero: "02",
    titulo: "Abertura no DETRAN e Exames",
    shortTitle: "DETRAN & Exames",
    icone: Stethoscope,
    accentColor: "text-blue-600",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/30"
  },
  {
    numero: "03",
    titulo: "Prova Teórica",
    shortTitle: "Prova Teórica",
    icone: BookOpen,
    accentColor: "text-purple-600",
    accentBg: "bg-purple-500/10",
    accentBorder: "border-purple-500/30"
  },
  {
    numero: "04",
    titulo: "Aulas Práticas no Veículo",
    shortTitle: "Aulas Práticas",
    icone: GraduationCap,
    accentColor: "text-emerald-600",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/30"
  },
  {
    numero: "05",
    titulo: "Aprovação e Emissão da CNH",
    shortTitle: "Aprovação & CNH",
    icone: Award,
    accentColor: "text-amber-700",
    accentBg: "bg-amber-500/15",
    accentBorder: "border-amber-500/40"
  }
];

interface StepItemProps {
  step: StepData;
  index: number;
  total: number;
  onActivate: (index: number) => void;
}

const StepItem: React.FC<StepItemProps> = ({ step, index, total, onActivate }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const inView = useInView(itemRef, {
    margin: "-20% 0px -20% 0px"
  });

  useEffect(() => {
    if (inView) {
      onActivate(index);
    }
  }, [inView, index, onActivate]);

  const isEven = index % 2 === 0;

  return (
    <div ref={itemRef} id={`step-flow-${index}`} className="relative my-10 sm:my-16">
      <div
        className={`flex items-center ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } flex-row`}
      >
        {/* Card de Conteúdo da Etapa (Apple-style reveal) */}
        <div className="w-full md:w-[calc(50%-3rem)] ml-14 sm:ml-16 md:ml-0">
          <motion.div
            animate={{
              opacity: inView ? 1 : 0.35,
              scale: inView ? 1 : 0.94,
              y: inView ? 0 : 22
            }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1]
            }}
            className={`group bg-white border-2 rounded-3xl p-6 sm:p-8 transition-all duration-500 ${
              inView
                ? "border-[#FFC905] shadow-[0_16px_40px_rgba(245,158,11,0.2)] ring-1 ring-[#FFC905]/50"
                : "border-slate-200/90 shadow-xs hover:border-slate-300"
            }`}
          >
            {/* Topo do Card com Ícone, Indicador de Fase e Badge de Ativo */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-11 h-11 rounded-2xl ${step.accentBg} ${step.accentBorder} border flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    inView ? "scale-110" : ""
                  }`}
                >
                  <step.icone className={`w-5 h-5 ${step.accentColor}`} />
                </div>
                
                <span
                  className={`text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full transition-colors ${
                    inView
                      ? "bg-amber-100 text-amber-900 border border-amber-300/80"
                      : "bg-slate-100 text-slate-500 border border-slate-200"
                  }`}
                >
                  Etapa {step.numero} de 05
                </span>
              </div>

              {inView && (
                <span className="flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/60 animate-pulse">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Em progresso</span>
                </span>
              )}
            </div>

            {/* Título sem descrição: grande, limpo e com peso visual */}
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-black text-slate-950 tracking-tight leading-tight">
              {step.titulo}
            </h3>
          </motion.div>
        </div>

        {/* Nó Central na Linha do Tempo */}
        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 z-10">
          <motion.div
            animate={{
              scale: inView ? 1.18 : 0.95,
              backgroundColor: inView ? "#FFC905" : "#FFFFFF",
              borderColor: inView ? "#D97706" : "#CBD5E1",
              boxShadow: inView
                ? "0 0 25px rgba(245, 158, 11, 0.75)"
                : "0 2px 6px rgba(0, 0, 0, 0.05)"
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center cursor-pointer select-none"
          >
            <span
              className={`font-mono text-xs sm:text-sm font-black transition-colors ${
                inView ? "text-slate-950" : "text-slate-400"
              }`}
            >
              {step.numero}
            </span>
          </motion.div>
        </div>

        {/* Espaçador para o lado oposto no Desktop */}
        <div className="hidden md:block md:w-[calc(50%-3rem)]" />
      </div>
    </div>
  );
};

export const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  // Animação contínua da barra de progresso (laser beam) estilo Apple
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 75%"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001
  });

  const handleActivate = useCallback((index: number) => {
    setActiveStep(index);
  }, []);

  const scrollToStep = (index: number) => {
    const el = document.getElementById(`step-flow-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Como funciona o processo da sua primeira CNH
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Acompanhamento passo a passo do primeiro atendimento até o dia do exame prático e a emissão da sua carteira.
          </p>
        </motion.div>

        {/* Barra Flutuante de Navegação e Status Estilo Apple */}
        <div className="sticky top-20 sm:top-24 z-20 flex justify-center mb-8 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="pointer-events-auto bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md px-3.5 sm:px-5 py-2 rounded-full flex items-center gap-2 sm:gap-3"
          >
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 hidden sm:inline">
              Fase:
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {steps.map((st, i) => (
                <button
                  key={st.numero}
                  type="button"
                  onClick={() => scrollToStep(i)}
                  className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    activeStep === i
                      ? "bg-[#FFC905] text-slate-950 shadow-sm scale-105"
                      : activeStep > i
                      ? "bg-amber-100 text-amber-800"
                      : "bg-slate-100 text-slate-400 hover:text-slate-600"
                  }`}
                >
                  <span>{st.numero}</span>
                  {activeStep === i && (
                    <span className="hidden md:inline text-[11px] font-extrabold">
                      • {st.shortTitle}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Linha do Tempo Dinâmica com Animação no Scroll */}
        <div ref={containerRef} className="relative py-4 sm:py-8">
          
          {/* Linha de Fundo Cinza */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-slate-200 rounded-full pointer-events-none" />

          {/* Linha de Luz Dourada (Laser Beam estilo Apple que cresce no scroll) */}
          <motion.div
            style={{ scaleY: smoothProgress, transformOrigin: "top" }}
            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1.5 -translate-x-1/2 bg-gradient-to-b from-amber-400 via-[#FFC905] to-amber-500 rounded-full shadow-[0_0_18px_rgba(245,158,11,0.85)] pointer-events-none"
          />

          {/* Renderização das 5 Etapas com Ativação Dinâmica no Scroll */}
          <div className="space-y-4 sm:space-y-8">
            {steps.map((step, idx) => (
              <StepItem
                key={step.numero}
                step={step}
                index={idx}
                total={steps.length}
                onActivate={handleActivate}
              />
            ))}
          </div>

        </div>

        {/* Banner Inferior com o CTA Solicitado */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-14 sm:mt-20 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="font-heading text-xl sm:text-2xl font-bold text-slate-950">
              Deseja iniciar sua primeira CNH com tranquilidade?
            </h4>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm font-semibold text-emerald-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Processo transparente e 100% regulamentado pelo DETRAN-CE</span>
            </div>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <WhatsAppButton
              id="how-it-works-btn-cta"
              size="lg"
              label="QUERO ENTENDER MELHOR O PROCESSO"
              className="w-full sm:w-auto shadow-md hover:shadow-lg justify-center"
              mensagem="Olá! Vi o passo a passo da CNH no site e quero entender melhor o processo na Auto Escola Ximenes."
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
