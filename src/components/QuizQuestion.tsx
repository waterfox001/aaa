import React from "react";
import { QuizQuestionItem } from "../types/types";
import { Check, ArrowRight, Lightbulb, X } from "lucide-react";

interface QuizQuestionProps {
  question: QuizQuestionItem;
  questionIndex: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  onNext: () => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onNext
}) => {
  const letters = ["A", "B", "C", "D"];
  const answered = selectedAnswer !== null;
  const isCorrect = answered && selectedAnswer === question.respostaCorreta;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span className="px-2.5 py-1 rounded-md bg-slate-100 font-semibold text-slate-700 uppercase tracking-wider">
          Quiz Teórico
        </span>
        <span className="font-medium text-slate-700">
          Pergunta {questionIndex + 1} de {totalQuestions}
        </span>
      </div>

      <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-950 leading-relaxed">
        {question.pergunta}
      </h3>

      {/* Alternatives */}
      <div className="space-y-2.5 pt-1">
        {question.alternativas.map((alt, idx) => {
          const isChosen = selectedAnswer === idx;
          const isTheCorrectOne = idx === question.respostaCorreta;

          let btnStyle = "bg-white text-slate-700 border-slate-200 hover:bg-slate-50";
          if (answered) {
            if (isTheCorrectOne) {
              btnStyle = "bg-emerald-50 text-emerald-950 border-emerald-500 font-medium ring-1 ring-emerald-500";
            } else if (isChosen && !isTheCorrectOne) {
              btnStyle = "bg-rose-50 text-rose-950 border-rose-300 font-medium line-through";
            } else {
              btnStyle = "bg-slate-50 text-slate-400 border-slate-200 opacity-60";
            }
          }

          return (
            <button
              key={idx}
              type="button"
              id={`quiz-alt-${idx}`}
              disabled={answered}
              onClick={() => onSelectAnswer(idx)}
              className={`w-full text-left p-4 rounded-xl border transition-colors flex items-start gap-3.5 ${btnStyle}`}
            >
              <div
                className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 ${
                  answered && isTheCorrectOne
                    ? "bg-emerald-600 text-white"
                    : answered && isChosen
                    ? "bg-rose-600 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {letters[idx]}
              </div>
              <span className="text-sm leading-snug flex-1">
                {alt}
              </span>
            </button>
          );
        })}
      </div>

      {/* Immediate feedback section */}
      {answered && (
        <div className="pt-4 border-t border-slate-100 space-y-4">
          <div
            className={`p-4 rounded-xl border flex items-start gap-3 text-xs leading-relaxed ${
              isCorrect
                ? "bg-emerald-50/80 border-emerald-200 text-emerald-900"
                : "bg-amber-50/80 border-amber-200 text-amber-950"
            }`}
          >
            {isCorrect ? (
              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            ) : (
              <X className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
            )}
            <div className="space-y-1">
              <strong className="block font-semibold">
                {isCorrect ? "Resposta Correta!" : "Atenção ao conceito:"}
              </strong>
              <p>{question.explicacaoCurta}</p>
            </div>
          </div>

          <div className="flex justify-end pt-1">
            <button
              type="button"
              onClick={onNext}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <span>{questionIndex < totalQuestions - 1 ? "Próxima Pergunta" : "Ver Resultado"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
