import React from "react";
import { SEOHead } from "../components/SEOHead";
import { Quiz } from "../components/Quiz";
import { CTASection } from "../components/CTASection";

export const QuizPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEOHead
        title="Quiz Teórico DETRAN | Teste Seus Conhecimentos | Auto Escola Ximenes"
        description="Teste rápido com 10 perguntas de legislação e direção defensiva para avaliar sua preparação para a CNH na Auto Escola Ximenes em Fortaleza."
      />

      <div className="py-6 sm:py-10">
        <Quiz />
      </div>

      <CTASection
        title="Deseja iniciar sua preparação prática?"
        subtitle="Entre em contato com a equipe da Auto Escola Ximenes no Pan-Americano e conheça nossa estrutura para as aulas teóricas e práticas."
        buttonLabel="FALAR COM UM ATENDENTE NO WHATSAPP"
      />
    </div>
  );
};
