import React from "react";
import { motion } from "motion/react";
import {
  Users,
  Car,
  Clock,
  Calendar,
  Zap,
  Compass
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface BenefitsSectionProps {
  onStartClick?: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onStartClick }) => {
  const benefits = [
    {
      id: "benefit-instrutores",
      tag: "Acolhimento",
      iconBg: "bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950",
      glowColor: "bg-amber-400/35",
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-slate-950" />,
      titulo: "Instrutores pacientes e credenciados"
    },
    {
      id: "benefit-frota",
      tag: "Conforto & Tecnologia",
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600 text-white",
      glowColor: "bg-blue-500/35",
      icon: <Car className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      titulo: "Frota com ar-condicionado"
    },
    {
      id: "benefit-rotina",
      tag: "Flexibilidade Total",
      iconBg: "bg-gradient-to-br from-emerald-400 to-emerald-600 text-white",
      glowColor: "bg-emerald-500/35",
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      titulo: "Agenda Inteligente"
    },
    {
      id: "benefit-metodologia-vida",
      tag: "Metodologia Exclusiva",
      iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600 text-white",
      glowColor: "bg-purple-500/35",
      icon: <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      titulo: "Treinamento prático e seguro"
    },
    {
      id: "benefit-horarios",
      tag: "Segunda a Sábado",
      iconBg: "bg-gradient-to-br from-rose-500 to-orange-500 text-white",
      glowColor: "bg-rose-500/35",
      icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      titulo: "Horários flexíveis de segunda a sábado"
    },
    {
      id: "benefit-inicio-imediato",
      tag: "Início Imediato",
      iconBg: "bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-950",
      glowColor: "bg-yellow-400/35",
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-slate-950" />,
      titulo: "Início rápido"
    }
  ];

  const handleStart = () => {
    if (onStartClick) {
      onStartClick();
    } else {
      const el = document.getElementById("planos-desconto");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        const url = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Olá! Gostaria de começar minhas aulas na Auto Escola Ximenes.")}`;
        window.open(url, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200 overflow-hidden relative">
      {/* Luzes de ambiência de fundo sutis */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50/50 rounded-full blur-2xl pointer-events-none -ml-24 -mb-24" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Badge removida conforme solicitado) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
            Estrutura planejada para sua tranquilidade
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Cada etapa da sua formação é pensada com metodologia humanizada, veículos de alto padrão e total flexibilidade para você conquistar a sua CNH sem estresse.
          </p>
        </motion.div>

        {/* Grid de Ícones Flutuantes (2 por linha no Mobile, sem caixas/bordas circundando, foco total no título) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 lg:gap-14 max-w-4xl mx-auto">
          {benefits.map((b, idx) => (
            <motion.div
              key={b.id}
              id={b.id}
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group flex flex-col items-center text-center p-2 sm:p-4 select-none cursor-default"
            >
              {/* Ícone Flutuante com brilho e efeito Apple */}
              <div className="relative mb-3 sm:mb-4">
                <div
                  className={`absolute -inset-2.5 rounded-3xl blur-xl opacity-30 group-hover:opacity-75 transition-opacity duration-500 ${b.glowColor}`}
                />
                <div
                  className={`relative w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-translate-y-1.5 transition-all duration-300 ${b.iconBg}`}
                >
                  {b.icon}
                </div>
              </div>

              {/* Tag Superior Discreta */}
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                {b.tag}
              </span>

              {/* Título de Alto Impacto (Foco no título, sem descrição pesada) */}
              <h3 className="font-heading text-sm sm:text-lg md:text-xl font-black text-slate-950 group-hover:text-amber-600 transition-colors leading-snug">
                {b.titulo}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* CTA Inferior sem setas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-14 sm:mt-18 text-center"
        >
          <button
            id="btn-benefits-cta"
            type="button"
            onClick={handleStart}
            className="cta-yellow inline-flex items-center justify-center px-8 py-4 rounded-xl text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <span>Quero iniciar meu processo na Ximenes</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
