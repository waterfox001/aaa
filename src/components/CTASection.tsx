import React from "react";
import { motion } from "motion/react";
import { WhatsAppButton } from "./WhatsAppButton";
import { ShieldCheck, Clock, MapPin, Check } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  mensagem?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Pronto para iniciar sua habilitação?",
  subtitle = `Entre em contato com nossa equipe em ${siteConfig.cidade} para esclarecer dúvidas sobre turmas, documentação e agendamento de aulas práticas.`,
  buttonLabel = "FALAR COM UM ATENDENTE NO WHATSAPP",
  mensagem = "Olá! Gostaria de obter mais informações sobre matrículas e horários na Auto Escola Ximenes."
}) => {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 border-t border-slate-200 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-xs text-center space-y-6"
        >
          {/* Subtle warm backdrop glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-50/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Atendimento e Matrículas
            </span>

            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              {title}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Institutional Highlights */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-slate-600">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Circuito Exclusivo para moto</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>Horários flexíveis</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>Pan-Americano, Fortaleza</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Frota moderna</span>
            </div>
          </div>

          <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <WhatsAppButton
              id="cta-section-btn"
              label={buttonLabel}
              size="lg"
              mensagem={mensagem}
              className="w-full sm:w-auto shadow-md"
            />
          </div>
          
          <p className="relative z-10 text-xs text-slate-400">
            Atendimento presencial e via WhatsApp no número <strong className="text-slate-700">{siteConfig.telefone}</strong> • Segunda a sábado
          </p>

        </motion.div>
      </div>
    </section>
  );
};
