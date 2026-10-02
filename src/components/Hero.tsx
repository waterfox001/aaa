import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Car,
  Bike,
  Layers,
  Bus,
  CheckCircle2,
  Award,
  CreditCard,
  Banknote,
  TrendingDown,
  Zap,
  RotateCcw,
  BadgeCheck,
  Check,
  ShieldCheck,
  Clock,
  Target,
  Users
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { WhatsAppButton } from "./WhatsAppButton";

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<"servicos" | "diferenciais">("servicos");
  const [selectedCategory, setSelectedCategory] = useState<"B" | "A" | "AB" | "D">("B");

  const categoryDetails = {
    B: {
      title: "Categoria B — Carro",
      subtitle: "Automóveis de passeio e utilitários leves",
      specs: [
        "Veículos com ar-condicionado e direção elétrica",
        "Agenda inteligente que agiliza tudo!",
        "Treino prático de baliza, ladeira e vias urbanas"
      ],
      time: "20 a 30 dias"
    },
    A: {
      title: "Categoria A — Moto",
      subtitle: "Motocicletas, motonetas e ciclomotores",
      specs: [
        "Agenda inteligente que agiliza tudo!",
        "Treino em circuito exclusivo que simula o exame real",
        "Equipe qualificada e preparada pra te ensinar do zero."
      ],
      time: "20 a 30 dias"
    },
    AB: {
      title: "Categoria AB — Carro & Moto",
      subtitle: "Formação completa para automóvel e motocicleta",
      specs: [
        "Acompanhamento para 2 categorias em um só processo."
      ],
      time: "30 a 45 dias"
    },
    D: {
      title: "Categoria D — Ônibus & Vans",
      subtitle: "Transporte profissional de passageiros",
      specs: [
        "Veículo próprio para instrução com duplo comando",
        "Qualificação para transporte de passageiros e turismo",
        "Acompanhamento personalizado em cada manobra"
      ],
      time: "20 a 30 dias"
    }
  };

  const currentCat = categoryDetails[selectedCategory];

  return (
    <section className="relative bg-white text-slate-900 pt-8 pb-14 md:py-16 lg:py-20 border-b border-slate-200 overflow-hidden">
      {/* Subtle ambient light gradient background */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-1/3 w-[450px] h-[450px] bg-slate-100/60 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Direct Heading, Subtitle & Clear Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.1] text-slate-950"
            >
              Sua CNH com transparência e praticidade
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Nossa experiência, prática e atenção. Uma conquista que você leva para a vida.
            </motion.p>

            {/* Direct CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <WhatsAppButton
                id="hero-btn-primary-cnh"
                label="INICIAR MINHA HABILITAÇÃO"
                size="lg"
                className="w-full sm:w-auto text-center"
                mensagem="Olá! Gostaria de iniciar meu processo de habilitação na Auto Escola Ximenes."
              />

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("planos-desconto");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 font-bold text-xs uppercase tracking-wider transition-all duration-200 text-center shadow-xs active:scale-[0.98]"
              >
                Conhecer os Planos
              </button>
            </motion.div>

            {/* Institutional Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-500"
            >
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Credenciada pelo DETRAN-{siteConfig.estado}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Users className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Atendimento presencial no Pan-Americano</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Clean Interactive Category & Services Card */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              
              {/* Card Header with 2 Tabs */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl w-full">
                  <button
                    type="button"
                    onClick={() => setActiveTab("servicos")}
                    className={`flex-1 py-2 px-2 rounded-lg text-xs font-bold transition-all text-center ${
                      activeTab === "servicos"
                        ? "bg-white text-slate-900 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Categorias
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("diferenciais")}
                    className={`flex-1 py-2 px-2 rounded-lg text-xs font-bold transition-all text-center ${
                      activeTab === "diferenciais"
                        ? "bg-white text-slate-900 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Diferenciais
                  </button>
                </div>
              </div>

              {/* Animated Tab Content with AnimatePresence */}
              <AnimatePresence mode="wait">
                {/* TAB 1: CATEGORIAS */}
                {activeTab === "servicos" && (
                  <motion.div
                    key="tab-servicos"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="pt-4 space-y-4"
                  >
                    {/* Category Switcher */}
                    <div className="grid grid-cols-4 gap-1.5 bg-slate-100 p-1 rounded-xl">
                      {(["B", "A", "AB", "D"] as const).map(cat => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setSelectedCategory(cat)}
                          className={`py-2 px-1 rounded-lg text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                            selectedCategory === cat
                              ? "bg-[#FFC905] text-slate-950 shadow-xs font-black"
                              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                          }`}
                        >
                          {cat === "B" && <Car className="w-3.5 h-3.5" />}
                          {cat === "A" && <Bike className="w-3.5 h-3.5" />}
                          {cat === "AB" && <Layers className="w-3.5 h-3.5" />}
                          {cat === "D" && <Bus className="w-3.5 h-3.5" />}
                          <span>Cat. {cat}</span>
                        </button>
                      ))}
                    </div>

                    {/* Category Details with fluid slide-fade */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`cat-details-${selectedCategory}`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3"
                      >
                        <div>
                          <h4 className="font-heading text-sm font-bold text-slate-900">
                            {currentCat.title}
                          </h4>
                          <span className="text-xs text-slate-500">
                            {currentCat.subtitle}
                          </span>
                        </div>

                        <div className="space-y-2 text-xs text-slate-700">
                          {currentCat.specs.map((spec, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Action Group */}
                    <div className="space-y-2 pt-1">
                      <WhatsAppButton
                        id="hero-card-category-whatsapp"
                        label={`INICIAR NA CATEGORIA ${selectedCategory}`}
                        size="md"
                        className="w-full text-center"
                        mensagem={`Olá! Gostaria de obter informações sobre a matrícula na Categoria ${selectedCategory} da Auto Escola Ximenes.`}
                      />

                      <div className="text-center pt-1">
                        <button
                          type="button"
                          onClick={() => onNavigate(`/cnh-${selectedCategory.toLowerCase()}`)}
                          className="group text-xs font-semibold text-slate-600 hover:text-slate-950 inline-flex items-center gap-1 transition-colors"
                        >
                          <span>Saiba mais sobre a Categoria {selectedCategory}</span>
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 2: DIFERENCIAIS */}
                {activeTab === "diferenciais" && (
                  <motion.div
                    key="tab-diferenciais"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="pt-4 space-y-3"
                  >
                    <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 transition-all hover:bg-slate-100/80">
                        <Award className="w-4 h-4 text-[#D9AC0B] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-xs text-slate-900 font-semibold">
                            Metodologia focada em segurança
                          </strong>
                          <span className="text-[11px] text-slate-600 leading-relaxed block">
                            Treinamento completo nas rotas e manobras exigidas no teste prático do DETRAN-CE. Sem esquecer de te preparar pro trânsito do dia a dia.
                          </span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 transition-all hover:bg-slate-100/80">
                        <Zap className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-xs text-slate-900 font-semibold">
                            Agenda Inteligente
                          </strong>
                          <span className="text-[11px] text-slate-600 leading-relaxed block">
                            Matrícula ágil com agendamento organizado para você não perder tempo.
                          </span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 transition-all hover:bg-slate-100/80">
                        <Car className="w-4 h-4 text-[#D9AC0B] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-xs text-slate-900 font-semibold">
                            Frota moderna
                          </strong>
                          <span className="text-[11px] text-slate-600 leading-relaxed block">
                            Veículos confortáveis e bem mantidos para o seu melhor rendimento nas aulas práticas.
                          </span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 transition-all hover:bg-slate-100/80">
                        <Clock className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-xs text-slate-900 font-semibold">
                            Acompanhamento individual
                          </strong>
                          <span className="text-[11px] text-slate-600 leading-relaxed block">
                            Atenção individualizada do inicio ao fim do seu processo.
                          </span>
                        </div>
                      </div>
                    </div>

                    <WhatsAppButton
                      id="hero-card-differentials-whatsapp"
                      label="FALAR COM UM INSTRUTOR"
                      size="md"
                      className="w-full text-center"
                      mensagem="Olá! Gostaria de conversar com a equipe sobre o método e as aulas práticas da Auto Escola Ximenes."
                    />
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
