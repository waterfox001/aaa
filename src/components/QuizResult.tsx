import React from "react";
import { whatsappMessages } from "../utils/whatsapp";
import { Award, RotateCcw, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";

interface QuizResultProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);
  const whatsappUrl = whatsappMessages.resultadoQuiz(score, total);

  const getFeedback = () => {
    if (percentage >= 80) {
      return {
        titulo: "Ótimo senso de direção e noções de trânsito!",
        subtitulo: "Você demonstrou boa base teórica. Com as nossas aulas práticas estruturadas, você estará pronto para o exame prático do DETRAN."
      };
    }
    if (percentage >= 60) {
      return {
        titulo: "Bom aproveitamento inicial!",
        subtitulo: "Você já compreende regras importantes de trânsito. O curso teórico e os simulados vão consolidar seu aprendizado."
      };
    }
    return {
      titulo: "Pronto para aprender do zero!",
      subtitulo: "Nossa metodologia foi desenhada especialmente para quem está começando agora, com instrutores pacientes e ensino passo a passo."
    };
  };

  const feedback = getFeedback();

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs text-center space-y-6 max-w-2xl mx-auto">
      <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 mx-auto">
        <Award className="w-7 h-7" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider block">
          Resultado do Quiz
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
          Você acertou {score} de {total} questões
        </h2>
        <div className="inline-block bg-slate-100 px-3.5 py-1 rounded-full text-slate-800 font-semibold text-xs">
          Aproveitamento: {percentage}%
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-xl space-y-1.5 text-left">
        <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>{feedback.titulo}</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed pl-6">
          {feedback.subtitulo}
        </p>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-2 border-t border-slate-100">
        <a
          id="btn-quiz-cta-whatsapp"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFC905] hover:bg-[#ffcf1f] text-slate-950 font-semibold uppercase tracking-wider text-xs transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Consultar matrícula no WhatsApp</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>

        <button
          id="btn-quiz-refazer"
          type="button"
          onClick={onRestart}
          className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Refazer o Quiz</span>
        </button>
      </div>
    </div>
  );
};
