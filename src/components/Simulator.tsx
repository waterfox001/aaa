import React, { useState, useEffect } from "react";
import { Question, SimulatorResultData } from "../types/types";
import { questionService } from "../services/questionService";
import { ProgressBar } from "./ProgressBar";
import { SimulatorQuestion } from "./SimulatorQuestion";
import { SimulatorResult } from "./SimulatorResult";
import {
  BookOpen,
  Clock,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckSquare,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Zap,
  Award
} from "lucide-react";

export const Simulator: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [questionCount, setQuestionCount] = useState<30 | 20>(30);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [finalized, setFinalized] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [result, setResult] = useState<SimulatorResultData | null>(null);

  // Iniciar Simulado (sorteia questões aleatórias sem repetição)
  const startSimulator = async (count = questionCount) => {
    setLoading(true);
    try {
      const selected = await questionService.getRandomSimulado(count);
      setQuestions(selected);
      setCurrentIndex(0);
      setUserAnswers({});
      setFinalized(false);
      setTimeSpent(0);
      setResult(null);
      setStarted(true);
    } finally {
      setLoading(false);
    }
  };

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (started && !finalized) {
      interval = setInterval(() => {
        setTimeSpent(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [started, finalized]);

  // Resposta selecionada na hora
  const handleSelectAnswer = (answerIndex: number) => {
    if (!questions[currentIndex]) return;
    const currentQ = questions[currentIndex];
    
    // Não permite alterar se já respondeu esta questão
    if (userAnswers[currentQ.id] !== undefined) return;

    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: answerIndex
    }));
  };

  const handleFinish = () => {
    const res = questionService.calculateResult(questions, userAnswers, timeSpent);
    setResult(res);
    setFinalized(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1));
  };

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(userAnswers).length;

  // Estatísticas em tempo real
  const correctCount = Object.entries(userAnswers).filter(([qId, ans]) => {
    const q = questions.find(item => item.id === Number(qId));
    return q && q.respostaCorreta === ans;
  }).length;

  const wrongCount = answeredCount - correctCount;
  const remainingCount = totalQuestions - answeredCount;
  const minRequiredToPass = questionCount === 30 ? 20 : 14;
  const isApprovedSoFar = correctCount >= minRequiredToPass;

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // 1. Tela Inicial de Apresentação do Simulado
  if (!started) {
    return (
      <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4">
        <div className="bg-[#111827] border border-slate-700/80 rounded-3xl p-6 sm:p-12 shadow-2xl space-y-8 relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-400/40 text-xs font-black text-amber-400 uppercase tracking-widest">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Respostas na Hora • 100% Grátis</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              SIMULADO OFICIAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">DETRAN-CE</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Teste seus conhecimentos com correção e gabarito imediato a cada questão. Veja na hora se acertou ou errou, com comentários e explicações baseadas no Código de Trânsito Brasileiro.
            </p>

            {/* Instant feedback highlight feature */}
            <div className="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/40 text-left flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                <Zap className="w-5 h-5 fill-slate-950" />
              </div>
              <div className="text-xs space-y-1">
                <strong className="text-amber-400 font-bold block text-sm">
                  Correção Instantânea em Cada Questão
                </strong>
                <p className="text-slate-200 leading-relaxed">
                  Ao clicar na alternativa, você descobre na hora se a resposta foi certa (verde) ou errada (vermelho), com a justificativa técnica para aprender de verdade antes do exame oficial.
                </p>
              </div>
            </div>

            {/* Official Rule Alert Box */}
            <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-5 text-left space-y-2.5 shadow-lg">
              <div className="flex items-center gap-2 text-slate-300 font-semibold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Critérios do Exame Teórico:</span>
              </div>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Prova Teórica:</strong> Composta por 30 questões de múltipla escolha. Para aprovação, é necessário atingir no mínimo 20 acertos (70%).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Conteúdo:</strong> Legislação de Trânsito, Direção Defensiva, Primeiros Socorros, Meio Ambiente e Mecânica Básica.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Question Mode Selector */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <span className="text-xs font-semibold text-slate-400 uppercase">Quantidade de Questões:</span>
            <div className="inline-flex rounded-xl bg-slate-900 p-1.5 border border-slate-800">
              <button
                type="button"
                onClick={() => setQuestionCount(30)}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  questionCount === 30
                    ? "bg-slate-100 text-slate-950 shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                30 Questões (Exame Completo - Mínimo 20)
              </button>
              <button
                type="button"
                onClick={() => setQuestionCount(20)}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  questionCount === 20
                    ? "bg-slate-100 text-slate-950 shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ⚡ 20 Questões (Treino Expresso)
              </button>
            </div>
          </div>

          {/* Quick Rules Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-slate-950 font-black">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-sm font-black text-white uppercase">{questionCount} Questões</h4>
              <p className="text-xs text-slate-300">
                {questionCount === 30 ? "Simulação fidedigna da prova teórica oficial com 30 itens." : "Versão condensada para praticar em poucos minutos."}
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center text-slate-950 font-black">
                <Zap className="w-5 h-5 fill-slate-950" />
              </div>
              <h4 className="font-heading text-sm font-black text-white uppercase">Respostas na Hora</h4>
              <p className="text-xs text-slate-300">Feedback instantâneo assim que você marca a alternativa com justificativa técnica.</p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-slate-950 font-black">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-sm font-black text-white uppercase">Tempo Livre</h4>
              <p className="text-xs text-slate-300">Cronômetro sem pressão para você ler com calma e absorver cada regra do trânsito.</p>
            </div>
          </div>

          {/* Start CTA */}
          <div className="text-center pt-4">
            <button
              id="btn-comecar-simulado"
              onClick={() => startSimulator(questionCount)}
              disabled={loading}
              className="btn-yellow-fluid inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black uppercase text-base tracking-wider shadow-2xl active:scale-95 cursor-pointer"
            >
              <Zap className="w-6 h-6 fill-slate-950" />
              <span>{loading ? "PREPARANDO QUESTÕES..." : `COMEÇAR SIMULADO (${questionCount} QUESTÕES COM RESPOSTA NA HORA)`}</span>
            </button>
            <p className="text-xs text-slate-400 mt-3 font-semibold">
              *Você pode fazer quantas vezes quiser. As questões são sorteadas aleatoriamente a cada tentativa.
            </p>
          </div>

        </div>
      </div>
    );
  }

  // 2. Tela de Resultado Final
  if (finalized && result) {
    return (
      <div className="max-w-4xl mx-auto py-10 px-4">
        <SimulatorResult
          result={result}
          questions={questions}
          userAnswers={userAnswers}
          onRestart={() => startSimulator(questionCount)}
        />
      </div>
    );
  }

  // 3. Tela Ativa do Simulado com Resposta Imediata
  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-10 px-4 space-y-6">
      
      {/* Real-time Controller Bar */}
      <div className="bg-[#111827] border border-slate-700/80 rounded-3xl p-5 sm:p-7 space-y-5 shadow-xl">
        
        {/* Top Ticker: Live Score and Status */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-white block">
                Simulado DETRAN-CE • Resposta Imediata
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                Tempo: {formatTimer(timeSpent)}
              </span>
            </div>
          </div>

          {/* Real-time Scoreboard */}
          <div className="flex items-center gap-2 sm:gap-3 bg-slate-900 px-3 sm:px-4 py-2 rounded-2xl border border-slate-800 text-xs">
            <div className="flex items-center gap-1 text-emerald-400 font-mono font-bold" title="Respostas corretas">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{correctCount} certas</span>
            </div>

            <span className="text-slate-700">|</span>

            <div className="flex items-center gap-1 text-rose-400 font-mono font-bold" title="Respostas incorretas">
              <XCircle className="w-4 h-4 text-rose-400" />
              <span>{wrongCount} erradas</span>
            </div>

            <span className="text-slate-700">|</span>

            <div className="text-slate-400 font-mono" title="Questões restantes">
              <span>{remainingCount} restantes</span>
            </div>
          </div>

          {/* Finalize Button */}
          <button
            id="btn-finalizar-simulado-topo"
            onClick={handleFinish}
            className="text-xs font-bold text-slate-400 hover:text-amber-400 underline transition-colors cursor-pointer"
          >
            Finalizar e Ver Resumo
          </button>
        </div>

        {/* Real-time Target Achievement Status Banner */}
        <div className={`p-2.5 sm:p-3 rounded-xl border text-xs flex items-center justify-between gap-3 ${
          isApprovedSoFar
            ? "bg-emerald-950/40 border-emerald-500/60 text-emerald-300"
            : "bg-slate-900/80 border-slate-800 text-slate-300"
        }`}>
          <div className="flex items-center gap-2">
            {isApprovedSoFar ? (
              <Award className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            ) : (
              <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
            )}
            <span>
              {isApprovedSoFar ? (
                <strong className="text-emerald-300">🎉 Parabéns! Você atingiu {correctCount} acertos (mínimo de {minRequiredToPass} para aprovação no DETRAN).</strong>
              ) : (
                <span>Meta oficial DETRAN: <strong>{minRequiredToPass} acertos</strong>. Você tem <strong>{correctCount}</strong> (faltam {Math.max(0, minRequiredToPass - correctCount)} para aprovação).</span>
              )}
            </span>
          </div>

          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
            {Math.round((answeredCount / totalQuestions) * 100)}% concluído
          </span>
        </div>

        {/* Progress bar */}
        <ProgressBar
          current={currentIndex + 1}
          total={totalQuestions}
          label={`Questão ${currentIndex + 1} de ${totalQuestions} (${answeredCount} respondidas)`}
        />

        {/* Color-Coded Question Palette (1..30) */}
        <div className="space-y-1.5 pt-1 border-t border-slate-800">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Seletor de questões:</span>
            <div className="flex items-center gap-3 text-[10px]">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Certa</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500 inline-block" /> Errada</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block" /> Atual</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 max-h-32 overflow-y-auto pr-1">
            {questions.map((q, idx) => {
              const answer = userAnswers[q.id];
              const isAnswered = answer !== undefined;
              const isCorrect = isAnswered && answer === q.respostaCorreta;
              const isCurrent = currentIndex === idx;

              let btnBg = "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600";
              if (isAnswered) {
                btnBg = isCorrect
                  ? "bg-emerald-600 text-white border-emerald-500"
                  : "bg-rose-600 text-white border-rose-500";
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl text-xs font-mono font-black border transition-all cursor-pointer ${btnBg} ${
                    isCurrent ? "ring-2 ring-amber-400 scale-110 shadow-md z-10" : ""
                  }`}
                  title={`Questão ${idx + 1}${isAnswered ? (isCorrect ? ": Acertou" : ": Errou") : ": Em aberto"}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Question Box with Immediate Feedback */}
      {currentQuestion && (
        <SimulatorQuestion
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={totalQuestions}
          selectedAnswer={userAnswers[currentQuestion.id]}
          onSelectAnswer={handleSelectAnswer}
          onNextQuestion={handleNext}
          onFinish={handleFinish}
          isLastQuestion={currentIndex === totalQuestions - 1}
        />
      )}

      {/* Bottom Secondary Controls */}
      <div className="flex items-center justify-between gap-4 pt-1">
        <button
          id="btn-simulado-anterior"
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none text-white font-bold text-xs border border-slate-700 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Questão Anterior</span>
        </button>

        <div className="flex items-center gap-2">
          {currentIndex < totalQuestions - 1 ? (
            <button
              id="btn-simulado-proxima-rodape"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 transition-all cursor-pointer"
            >
              <span>Avançar</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          ) : (
            <button
              id="btn-simulado-concluir-rodape"
              onClick={handleFinish}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-xl active:scale-95 cursor-pointer"
            >
              <span>Ver Resultado Geral</span>
            </button>
          )}
        </div>
      </div>

      {/* Unanswered Notice */}
      {answeredCount < totalQuestions && (
        <div className="flex items-center gap-2 text-xs text-slate-400 justify-center">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
          <span>Você respondeu {answeredCount} de {totalQuestions} questões. O placar atualiza em tempo real!</span>
        </div>
      )}

    </div>
  );
};
