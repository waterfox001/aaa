import React from "react";
import { Question, SimulatorResultData } from "../types/types";
import { whatsappMessages } from "../utils/whatsapp";
import { CheckCircle2, XCircle, RotateCcw, Share2, Award, Clock, HelpCircle, ChevronDown, AlertTriangle, ShieldCheck } from "lucide-react";

interface SimulatorResultProps {
  result: SimulatorResultData;
  questions: Question[];
  userAnswers: Record<number, number>;
  onRestart: () => void;
}

export const SimulatorResult: React.FC<SimulatorResultProps> = ({
  result,
  questions,
  userAnswers,
  onRestart
}) => {
  const letters = ["A", "B", "C", "D"];
  const whatsappUrl = whatsappMessages.resultadoSimulado(
    result.acertos,
    result.totalQuestoes,
    result.porcentagem
  );

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs < 10 ? "0" : ""}${secs}s`;
  };

  const isApproved = result.porcentagem >= 70;

  return (
    <div className="space-y-12">
      {/* Result Card */}
      <div className="bg-[#111827] border-2 border-amber-400 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-400/40 text-xs font-black text-amber-400 uppercase tracking-widest">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Resultado do Simulado DETRAN-CE</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            {result.classificacao}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {result.mensagem}
          </p>

          {/* Large Metrics Bento Box */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 pb-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5">
              <span className="text-[11px] font-black uppercase text-slate-400 block tracking-wider">
                Acertos
              </span>
              <span className="text-3xl sm:text-4xl font-black text-amber-400 font-mono">
                {result.acertos}
              </span>
              <span className="text-[10px] text-slate-500 font-bold block">
                de {result.totalQuestoes} questões
              </span>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5">
              <span className="text-[11px] font-black uppercase text-slate-400 block tracking-wider">
                Erros
              </span>
              <span className="text-3xl sm:text-4xl font-black text-slate-400 font-mono">
                {result.erros}
              </span>
              <span className="text-[10px] text-slate-500 font-bold block">
                questões
              </span>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5">
              <span className="text-[11px] font-black uppercase text-slate-400 block tracking-wider">
                Aproveitamento
              </span>
              <span className={`text-3xl sm:text-4xl font-black font-mono ${isApproved ? "text-emerald-400" : "text-amber-400"}`}>
                {result.porcentagem}%
              </span>
              <span className="text-[10px] text-slate-500 font-bold block">
                {isApproved ? "Apto (≥70%)" : "Mínimo: 70%"}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Tempo de prova utilizado: <strong className="text-white">{formatTime(result.tempoGastoSegundos)}</strong></span>
          </div>

          {/* Official Rule Notice */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 text-left space-y-2 mt-2">
            <div className="flex items-center gap-2 text-amber-400 font-black uppercase text-[11px] tracking-wider">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Regras Oficiais do DETRAN para a Prova Teórica:</span>
            </div>
            <p className="text-slate-300 leading-relaxed space-y-1">
              • Na prova teórica oficial, são <strong className="text-white">30 questões</strong> e o candidato <strong className="text-amber-400">precisa acertar 20 das 30 questões</strong> para ser aprovado.<br />
              • A Autoescola Ximenes oferece reforço prático e teórico completo com <strong className="text-emerald-400">94% de aprovação</strong> e suporte humanizado em todas as etapas.<br />
              • Na Autoescola Ximenes, o tempo médio para conclusão de todo o processo é de apenas <strong className="text-white">20 a 30 dias</strong>.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a
              id="btn-whatsapp-resultado"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow-fluid w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-black uppercase tracking-wider text-sm shadow-xl active:scale-95"
            >
              <Share2 className="w-5 h-5 text-slate-950" />
              <span>ENVIAR RESULTADO NO WHATSAPP</span>
            </a>

            <button
              id="btn-reiniciar-simulado"
              onClick={onRestart}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white hover:text-amber-400 border border-slate-700 font-bold uppercase tracking-wider text-sm transition-all active:scale-95"
            >
              <RotateCcw className="w-4 h-4 text-amber-400" />
              <span>REFAZER COM NOVAS QUESTÕES</span>
            </button>
          </div>
        </div>
      </div>

      {/* Breakdown by Subject */}
      <div className="bg-[#111827] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-xl">
        <h3 className="font-heading text-xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" />
          <span>Desempenho por Matéria</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(result.detalhesPorAssunto).map(([assunto, stats]: [string, { acertos: number; total: number }]) => {
            const perc = Math.round((stats.acertos / stats.total) * 100);
            return (
              <div key={assunto} className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-white capitalize">{assunto}</span>
                  <span className="text-amber-400 font-mono">{stats.acertos}/{stats.total} ({perc}%)</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-500"
                    style={{ width: `${perc}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Complete Question by Question Review */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <h3 className="font-heading text-2xl font-black text-white uppercase tracking-tight">
              REVISÃO COMPLETA DO SIMULADO
            </h3>
            <p className="text-xs text-slate-400">
              Analise cada questão, confira seu acerto ou erro e leia a explicação técnica do Código de Trânsito Brasileiro.
            </p>
          </div>
          <span className="text-xs font-bold text-slate-300 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800">
            Total: {questions.length} questões
          </span>
        </div>

        <div className="space-y-6">
          {questions.map((q, idx) => {
            const userAnswer = userAnswers[q.id];
            const isCorrect = userAnswer === q.respostaCorreta;

            return (
              <div
                key={q.id}
                className={`border rounded-3xl p-6 sm:p-8 space-y-5 transition-all ${
                  isCorrect
                    ? "border-emerald-500/40 bg-slate-900/70"
                    : "border-amber-400/40 bg-slate-900/80"
                }`}
              >
                {/* Header status */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-black text-white text-base">
                      #{idx + 1}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-amber-400 font-black uppercase text-[10px] tracking-wider">
                      {q.assunto}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 font-bold">
                    {isCorrect ? (
                      <span className="text-emerald-400 flex items-center gap-1 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Resposta Correta</span>
                      </span>
                    ) : (
                      <span className="text-rose-400 flex items-center gap-1 text-xs">
                        <XCircle className="w-4 h-4 text-rose-400" />
                        <span>Resposta Incorreta</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Enunciado */}
                <p className="font-heading text-base sm:text-lg font-bold text-white leading-relaxed">
                  {q.pergunta}
                </p>

                {/* Alternativas */}
                <div className="space-y-2">
                  {q.alternativas.map((alt, altIdx) => {
                    const isSelected = userAnswer === altIdx;
                    const isRight = q.respostaCorreta === altIdx;

                    let bgStyle = "bg-slate-950/60 border-slate-800 text-slate-300";
                    if (isRight) {
                      bgStyle = "bg-emerald-950/30 border-emerald-500/60 text-emerald-200 font-semibold";
                    } else if (isSelected && !isRight) {
                      bgStyle = "bg-rose-950/30 border-rose-500/60 text-rose-200 line-through";
                    }

                    return (
                      <div
                        key={altIdx}
                        className={`p-3.5 rounded-2xl border text-xs sm:text-sm flex items-start gap-3 ${bgStyle}`}
                      >
                        <span className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center font-mono font-bold flex-shrink-0 text-xs">
                          {letters[altIdx]}
                        </span>
                        <span className="pt-0.5">{alt}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Explicação */}
                {q.explicacao && (
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
                    <span className="font-bold text-amber-400 block uppercase tracking-wider text-[10px]">
                      💡 Explicação Oficial / Fundamentação:
                    </span>
                    <p className="leading-relaxed">{q.explicacao}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
