import React from "react";
import { Question } from "../types/types";
import { CheckCircle2, XCircle, ArrowRight, Sparkles, BookOpen, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SimulatorQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer?: number;
  onSelectAnswer: (index: number) => void;
  onNextQuestion?: () => void;
  onFinish?: () => void;
  isLastQuestion?: boolean;
}

export const SimulatorQuestion: React.FC<SimulatorQuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onNextQuestion,
  onFinish,
  isLastQuestion
}) => {
  const letters = ["A", "B", "C", "D"];
  const isAnswered = selectedAnswer !== undefined;
  const isUserCorrect = isAnswered && selectedAnswer === question.respostaCorreta;

  return (
    <div className="bg-[#111827] border border-slate-700/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
      
      {/* Top Metadata Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-slate-900 border border-amber-400/40 text-amber-400 font-black uppercase tracking-wider">
            {question.assunto}
          </span>
          {question.dificuldade && (
            <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px] uppercase font-bold">
              {question.dificuldade}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-mono font-bold">
            Questão <span className="text-amber-400 font-black text-sm">{questionNumber}</span> de {totalQuestions}
          </span>
        </div>
      </div>

      {/* Question Text */}
      <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
        {question.pergunta}
      </h3>

      {/* Alternatives List */}
      <div className="space-y-3 pt-1">
        {question.alternativas.map((alt, index) => {
          const isThisChosen = selectedAnswer === index;
          const isThisCorrect = question.respostaCorreta === index;

          let btnStyles = "bg-slate-900 text-slate-200 border-slate-700/80 hover:border-amber-400 hover:bg-slate-800/90 cursor-pointer";
          let letterBadgeStyles = "bg-slate-800 text-amber-400 border border-slate-700";

          if (isAnswered) {
            if (isThisCorrect) {
              btnStyles = "bg-emerald-500/15 border-2 border-emerald-500 text-emerald-100 shadow-lg shadow-emerald-950/50 cursor-default";
              letterBadgeStyles = "bg-emerald-500 text-slate-950 font-black";
            } else if (isThisChosen && !isThisCorrect) {
              btnStyles = "bg-rose-500/15 border-2 border-rose-500 text-rose-100 shadow-lg shadow-rose-950/50 cursor-default";
              letterBadgeStyles = "bg-rose-500 text-white font-black";
            } else {
              btnStyles = "bg-slate-900/40 text-slate-500 border-slate-800/60 opacity-50 cursor-default";
              letterBadgeStyles = "bg-slate-800/60 text-slate-500 border border-slate-800";
            }
          }

          return (
            <button
              key={index}
              type="button"
              id={`simulado-alt-${index}`}
              disabled={isAnswered}
              onClick={() => onSelectAnswer(index)}
              className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 active:scale-[0.99] group ${btnStyles}`}
            >
              {/* Letter Badge */}
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5 transition-colors ${letterBadgeStyles}`}
              >
                {letters[index]}
              </div>

              {/* Alternative Text */}
              <div className="flex-1 space-y-1">
                <span className="text-sm sm:text-base leading-snug block">
                  {alt}
                </span>

                {/* Instant tag indicator */}
                {isAnswered && isThisCorrect && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 pt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isThisChosen ? "Você acertou!" : "Resposta correta do DETRAN"}</span>
                  </span>
                )}

                {isAnswered && isThisChosen && !isThisCorrect && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-400 pt-0.5">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Você marcou esta opção (Incorreta)</span>
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Immediate Instant Feedback Card */}
      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`p-5 sm:p-6 rounded-2xl border-2 space-y-3 ${
              isUserCorrect
                ? "bg-emerald-950/40 border-emerald-500/80 shadow-xl shadow-emerald-950/40"
                : "bg-rose-950/40 border-rose-500/80 shadow-xl shadow-rose-950/40"
            }`}
          >
            {/* Feedback Header */}
            <div className="flex items-center justify-between gap-3 border-b pb-3 border-slate-700/50">
              <div className="flex items-center gap-2">
                {isUserCorrect ? (
                  <>
                    <div className="w-7 h-7 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-black">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-heading font-black text-sm sm:text-base text-emerald-400 uppercase tracking-wide block">
                        Resposta Correta!
                      </span>
                      <span className="text-[11px] text-emerald-200/80">
                        Ponto computado no seu placar oficial.
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-7 h-7 rounded-lg bg-rose-500 text-white flex items-center justify-center font-black">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-heading font-black text-sm sm:text-base text-rose-400 uppercase tracking-wide block">
                        Resposta Incorreta!
                      </span>
                      <span className="text-[11px] text-rose-200/80">
                        A resposta certa é a <strong className="text-white">Letra {letters[question.respostaCorreta]}</strong>.
                      </span>
                    </div>
                  </>
                )}
              </div>

              <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Base CTB</span>
              </span>
            </div>

            {/* Explanation text */}
            <div className="space-y-1.5 pt-1">
              <span className="text-xs font-black uppercase tracking-wider text-slate-300 block">
                Explicação / Justificativa Oficial:
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {question.explicacao}
              </p>
            </div>

            {/* Next / Finish Button inside the feedback card for immediate flow */}
            <div className="pt-3 border-t border-slate-700/50 flex items-center justify-end">
              {!isLastQuestion && onNextQuestion && (
                <button
                  type="button"
                  id="btn-feedback-proxima"
                  onClick={onNextQuestion}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
                >
                  <span>Próxima Questão</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              )}

              {isLastQuestion && onFinish && (
                <button
                  type="button"
                  id="btn-feedback-finalizar"
                  onClick={onFinish}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-500/30 active:scale-95 transition-all animate-pulse"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Finalizar e Ver Resultado Completo</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
