import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Car,
  Bike,
  Layers,
  Bus,
  Check,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Clock,
  CheckCircle2
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface InteractivePlanQuizProps {
  onNavigate?: (path: string) => void;
}

interface QuizOption {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

interface QuizStep {
  id: number;
  question: string;
  subtitle: string;
  options: QuizOption[];
}

export const InteractivePlanQuiz: React.FC<InteractivePlanQuizProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const steps: QuizStep[] = [
    {
      id: 0,
      question: "Qual serviço você precisa realizar?",
      subtitle: "Selecione o objetivo da sua habilitação:",
      options: [
        {
          id: "1hab",
          label: "1ª Habilitação",
          description: "Primeira carteira de motorista. Para quem quer aprender com calma, método e respeito ao seu ritmo."
        },
        {
          id: "inclusao",
          label: "Inclusão / Adição de Categoria",
          description: "Já possui CNH e deseja adicionar Moto (A) ou Carro (B)."
        },
        {
          id: "mudanca",
          label: "Mudança de Categoria",
          description: "Evolução para categorias profissionais como Categoria D (Vans, Micro-ônibus e Ônibus)."
        }
      ]
    },
    {
      id: 1,
      question: "Qual categoria você deseja obter?",
      subtitle: "Selecione o tipo de veículo para as suas aulas práticas:",
      options: [
        {
          id: "B",
          label: "Categoria B — Carro",
          description: "Veículos leves com ar-condicionado e direção elétrica.",
          icon: <Car className="w-4 h-4 text-slate-700" />
        },
        {
          id: "A",
          label: "Categoria A — Moto",
          description: "Motos e motonetas em pista de treino oficial com circuito de equilíbrio.",
          icon: <Bike className="w-4 h-4 text-slate-700" />
        },
        {
          id: "AB",
          label: "Categoria AB — Carro e Moto",
          description: "Formação combinada para conduzir automóveis e motocicletas.",
          icon: <Layers className="w-4 h-4 text-slate-700" />
        },
        {
          id: "D",
          label: "Categoria D — Ônibus e Vans",
          description: "Transporte de passageiros, escolar e veículos de grande porte.",
          icon: <Bus className="w-4 h-4 text-slate-700" />
        }
      ]
    },
    {
      id: 2,
      question: "Você já tem experiência com o veículo?",
      subtitle: "Essa informação ajuda a dimensionar a quantidade de aulas adequada para você:",
      options: [
        {
          id: "sim",
          label: "Sim, já tenho boa prática de condução",
          description: "Já dirijo ou piloto com facilidade e preciso apenas me habituar às exigências do exame."
        },
        {
          id: "mais_ou_menos",
          label: "Mais ou menos, ainda sinto insegurança",
          description: "Já tentei dirigir, mas preciso reforçar baliza, arrancadas em ladeira e trânsito urbano."
        },
        {
          id: "nao",
          label: "Não, começarei do zero",
          description: "Nunca conduzi. Quero aprender desde os comandos básicos com instrutores pacientes."
        }
      ]
    },
    {
      id: 3,
      question: "O que você mais prioriza na sua formação?",
      subtitle: "Defina o aspecto principal para o seu planejamento:",
      options: [
        {
          id: "seguranca",
          label: "Segurança e Previsibilidade",
          description: "Treinamento abrangente com simulados práticos para fazer o exame com máxima confiança."
        },
        {
          id: "custo_beneficio",
          label: "Custo-Benefício Equilibrado",
          description: "Harmonia entre uma carga horária consistente e condições adequadas ao seu orçamento."
        },
        {
          id: "economia",
          label: "Economia e Agilidade",
          description: "Foco na carga horária necessária para cumprir os requisitos e obter a CNH com eficiência."
        }
      ]
    },
    {
      id: 4,
      question: "Quando pretende iniciar suas aulas?",
      subtitle: "Planejamos nossa agenda para atender sua previsão:",
      options: [
        {
          id: "dias",
          label: "Nos próximos dias (imediato)",
          description: "Desejo iniciar o quanto antes com agendamento direto."
        },
        {
          id: "semanas",
          label: "Nas próximas semanas",
          description: "Quero organizar minha rotina e reservar vaga para as próximas semanas."
        },
        {
          id: "meses",
          label: "Nos próximos meses",
          description: "Estou planejando meu tempo para iniciar nos próximos meses."
        },
        {
          id: "semestre",
          label: "No próximo semestre",
          description: "Estou pesquisando com antecedência para dar início no próximo semestre."
        }
      ]
    }
  ];

  const handleSelectOption = (optionId: string) => {
    const updatedAnswers = { ...answers, [currentStep]: optionId };
    setAnswers(updatedAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const getRecommendation = () => {
    const servico = answers[0] || "1hab";
    const categoria = answers[1] || "B";
    const experiencia = answers[2] || "nao";
    const prioridade = answers[3] || "seguranca";
    const prazo = answers[4] || "dias";

    let score = 0;
    if (servico === "1hab") score += 2;
    else if (servico === "inclusao") score += 1;
    else score += 1;

    if (categoria === "AB") score += 2;

    if (experiencia === "nao") score += 4;
    else if (experiencia === "mais_ou_menos") score += 2;
    else score += 0;

    if (prioridade === "seguranca") score += 3;
    else if (prioridade === "custo_beneficio") score += 2;
    else score += 0;

    let pacoteNome = "Plano Recomendado: 15+ Aulas Práticas";
    let aulasNumero = "15 a 20 aulas práticas";
    let perfilNome = "Segurança e Confiança";
    let motivo = "Carga horária estruturada para desenvolver consistência em manobras de baliza, controle de ladeira e circulação urbana com instrutores atenciosos.";

    if (score <= 2 || (experiencia === "sim" && prioridade === "economia")) {
      pacoteNome = "Plano Recomendado: 4+ Aulas Práticas";
      aulasNumero = "4 a 8 aulas práticas";
      perfilNome = "Treino Focado e Reciclagem";
      motivo = "Como você já possui familiaridade com o veículo, este pacote foca estritamente nas rotas de exame, baliza padronizada e correção de detalhes práticos.";
    } else if (score >= 3 && score <= 5) {
      pacoteNome = "Plano Recomendado: 10+ Aulas Práticas";
      aulasNumero = "10 a 15 aulas práticas";
      perfilNome = "Custo-Benefício";
      motivo = "Equilíbrio entre investimento equilibrado e horas práticas suficientes para consolidar sua segurança ao volante antes da prova.";
    } else if (score >= 6 && score <= 8) {
      pacoteNome = "Plano Recomendado: 15+ Aulas Práticas";
      aulasNumero = "15 a 25 aulas práticas";
      perfilNome = "Segurança e Consistência";
      motivo = "Indicado para quem busca tranquilidade no aprendizado. Carga de aulas ampla com treino intensivo de baliza e vias urbanas.";
    } else {
      pacoteNome = "Plano Recomendado: 20+ Aulas Práticas";
      aulasNumero = "20 ou mais aulas práticas";
      perfilNome = "Formação Abrangente";
      motivo = "Ideal para quem inicia do zero absoluto ou escolheu o combo Carro & Moto (Cat. AB), garantindo domínio completo de todas as etapas práticas.";
    }

    const catLabels: Record<string, string> = {
      B: "Carro (Categoria B)",
      A: "Moto (Categoria A)",
      AB: "Carro e Moto (Categoria AB)",
      D: "Ônibus e Vans (Categoria D)"
    };

    const servicoLabels: Record<string, string> = {
      "1hab": "1ª Habilitação",
      inclusao: "Inclusão de Categoria",
      mudanca: "Mudança de Categoria"
    };

    const expLabels: Record<string, string> = {
      sim: "Com prática prévia",
      mais_ou_menos: "Experiência moderada",
      nao: "Iniciando do zero"
    };

    const prazoLabels: Record<string, string> = {
      dias: "Nos próximos dias",
      semanas: "Nas próximas semanas",
      meses: "Nos próximos meses",
      semestre: "No próximo semestre"
    };

    const whatsappMsg = `Olá! Realizei o questionário no site da Auto Escola Ximenes.\nMeu perfil indicou o *${pacoteNome}* (${aulasNumero})\n• Serviço: ${servicoLabels[servico] || servico}\n• Categoria: ${catLabels[categoria] || categoria}\n• Experiência: ${expLabels[experiencia] || experiencia}\n• Previsão: ${prazoLabels[prazo] || prazo}\n\nGostaria de mais orientações sobre a matrícula.`;

    return {
      score,
      pacoteNome,
      aulasNumero,
      perfilNome,
      motivo,
      servicoLabel: servicoLabels[servico] || servico,
      catLabel: catLabels[categoria] || categoria,
      expLabel: expLabels[experiencia] || experiencia,
      prazoLabel: prazoLabels[prazo] || prazo,
      whatsappMsg
    };
  };

  const recommendation = isCompleted ? getRecommendation() : null;

  return (
    <section id="quiz-plano-ideal" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-10"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
            Descubra o plano de aulas ideal para o seu perfil
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Responda a 5 perguntas rápidas para receber uma indicação de carga horária compatível com sua experiência e objetivos.
          </p>
        </motion.div>

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs"
        >
            
            <AnimatePresence mode="wait">
              {!isCompleted ? (
                <motion.div
                  key={`step-${currentStep}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Progress Indicator */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="font-medium text-slate-900">
                        Pergunta {currentStep + 1} de {steps.length}
                      </span>
                      <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-slate-950 rounded-full transition-all duration-300"
                        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="space-y-5">
                    <div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-950">
                        {steps[currentStep].question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        {steps[currentStep].subtitle}
                      </p>
                    </div>

                    {/* Options List */}
                    <div className="space-y-2.5">
                      {steps[currentStep].options.map((option) => {
                        const isSelected = answers[currentStep] === option.id;
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => handleSelectOption(option.id)}
                            className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-center justify-between gap-3 ${
                              isSelected
                                ? "bg-slate-50 border-slate-950 text-slate-950 ring-1 ring-slate-950 scale-[1.005]"
                                : "bg-white hover:bg-slate-50 hover:border-slate-300 border-slate-200 text-slate-700"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              {option.icon && (
                                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  {option.icon}
                                </div>
                              )}
                              <div>
                                <span className="text-sm font-semibold block">
                                  {option.label}
                                </span>
                                {option.description && (
                                  <span className="text-xs text-slate-500 mt-0.5 block leading-relaxed">
                                    {option.description}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                              isSelected ? "bg-slate-950 border-slate-950 text-white" : "border-slate-300"
                            }`}>
                              {isSelected && <Check className="w-3 h-3" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Navigation Footer */}
                    <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                      {currentStep > 0 ? (
                        <button
                          type="button"
                          onClick={handlePreviousStep}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Voltar</span>
                        </button>
                      ) : <div />}

                      <span className="text-xs text-slate-400">
                        Selecione uma opção para continuar
                      </span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Recommendation View */
                <motion.div
                  key="recommendation"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-center space-y-6"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-medium">
                    <span>Resultado da Avaliação: {recommendation?.perfilNome}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block">
                      Carga recomendada para seu perfil
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-950">
                      {recommendation?.pacoteNome}
                    </h3>
                    <p className="text-sm font-semibold text-slate-700">
                      {recommendation?.aulasNumero}
                    </p>
                  </div>

                  {/* Details Card */}
                  <div className="max-w-lg mx-auto p-5 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-3 shadow-2xs">
                    <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-200 text-xs text-slate-600">
                      <div>
                        <span className="text-slate-400 font-medium block">Serviço:</span>
                        <strong className="text-slate-900 block mt-0.5">{recommendation?.servicoLabel}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 font-medium block">Categoria:</span>
                        <strong className="text-slate-900 block mt-0.5">{recommendation?.catLabel}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 font-medium block">Experiência:</span>
                        <strong className="text-slate-900 block mt-0.5">{recommendation?.expLabel}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 font-medium block">Previsão:</span>
                        <strong className="text-slate-900 block mt-0.5">{recommendation?.prazoLabel}</strong>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-semibold text-slate-800 block">
                        Por que este plano é indicado:
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {recommendation?.motivo}
                      </p>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      id="quiz-btn-choose-plan"
                      href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(recommendation?.whatsappMsg || "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-yellow group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
                    >
                      <span>Consultar este plano no WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById("planos-desconto");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-wider transition-colors"
                    >
                      <span>Ver todos os planos</span>
                    </button>
                  </div>

                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Refazer questionário</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

      </div>
    </section>
  );
};
