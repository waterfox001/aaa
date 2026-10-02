import React, { useState } from "react";
import { quizQuestions } from "../data/quizQuestions";
import { QuizQuestion } from "./QuizQuestion";
import { QuizResult } from "./QuizResult";
import { ProgressBar } from "./ProgressBar";
import { ArrowRight, BookOpen, Clock, ShieldCheck } from "lucide-react";

export const Quiz: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null)
  );
  const [isFinished, setIsFinished] = useState(false);

  const startQuiz = () => {
    setSelectedAnswers(new Array(quizQuestions.length).fill(null));
    setCurrentIndex(0);
    setIsFinished(false);
    setStarted(true);
  };

  const handleSelectAnswer = (answerIdx: number) => {
    if (selectedAnswers[currentIndex] !== null) return;
    const updated = [...selectedAnswers];
    updated[currentIndex] = answerIdx;
    setSelectedAnswers(updated);
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const totalScore = selectedAnswers.reduce<number>((acc, ans, idx) => {
    if (ans === quizQuestions[idx].respostaCorreta) return acc + 1;
    return acc;
  }, 0);

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto py-8 px-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 text-center space-y-6 shadow-xs">
          
          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider block">
              Avaliação de Conhecimentos
            </span>
            <h1 className="font-heading text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Você está preparado para a prova teórica?
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed max-w-lg mx-auto">
              Teste seus conhecimentos básicos de trânsito em 10 perguntas rápidas com feedback imediato para cada resposta.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <span className="text-xs font-bold text-slate-900 block">10 Perguntas</span>
              <span className="text-xs text-slate-500">Objetivas e práticas</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <span className="text-xs font-bold text-slate-900 block">Feedback Imediato</span>
              <span className="text-xs text-slate-500">Explicação fundamentada</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <span className="text-xs font-bold text-slate-900 block">Acesso Direto</span>
              <span className="text-xs text-slate-500">Sem necessidade de cadastro</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              id="btn-iniciar-quiz"
              type="button"
              onClick={startQuiz}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#FFC905] hover:bg-[#ffcf1f] text-slate-950 font-semibold uppercase text-xs tracking-wider transition-colors"
            >
              <span>Iniciar Questionário</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto py-8 px-4">
        <QuizResult
          score={totalScore}
          total={quizQuestions.length}
          onRestart={startQuiz}
        />
      </div>
    );
  }

  const currentQ = quizQuestions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 space-y-5">
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
        <ProgressBar
          current={currentIndex + 1}
          total={quizQuestions.length}
          label={`Pergunta ${currentIndex + 1} de ${quizQuestions.length}`}
        />
      </div>

      <QuizQuestion
        question={currentQ}
        questionIndex={currentIndex}
        totalQuestions={quizQuestions.length}
        selectedAnswer={selectedAnswers[currentIndex]}
        onSelectAnswer={handleSelectAnswer}
        onNext={handleNext}
      />
    </div>
  );
};
