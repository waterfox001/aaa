import React from "react";
import { WhatsAppButton } from "./WhatsAppButton";
import { Award, RefreshCw, PlusCircle, ShieldAlert, HeartHandshake, Bus } from "lucide-react";

export interface ServiceItem {
  id: string;
  titulo: string;
  categoria: string;
  descricao: string;
  icone: React.ReactNode;
  mensagemWhatsapp: string;
}

export const servicesList: ServiceItem[] = [
  {
    id: "primeira-hab",
    titulo: "Primeira Habilitação",
    categoria: "Categorias A, B e AB",
    descricao: "Comece do zero com o Método Ximenes: instrutores dedicados, material completo e aulas práticas de no mínimo 2 horas (norma 2026).",
    icone: <Award className="w-5 h-5 text-slate-950" />,
    mensagemWhatsapp: "Olá! Gostaria de saber valores e como funciona a Primeira Habilitação na Auto Escola Ximenes."
  },
  {
    id: "adicao-cat",
    titulo: "Adição de Categoria",
    categoria: "Inclua Moto (A) ou Carro (B)",
    descricao: "Já é habilitado? Adicione uma nova categoria sem refazer curso teórico. Acompanhamento direto, etapas claras e burocracia por nossa conta.",
    icone: <PlusCircle className="w-5 h-5 text-slate-950" />,
    mensagemWhatsapp: "Olá! Já possuo CNH e quero adicionar uma nova categoria na Auto Escola Ximenes."
  },
  {
    id: "mudanca-cat-d",
    titulo: "Mudança para Categoria D",
    categoria: "Vans, Micro-ônibus e Ônibus",
    descricao: "Formação profissional para transporte escolar, turismo e coletivo com veículos adequados e instrutores credenciados.",
    icone: <Bus className="w-5 h-5 text-slate-950" />,
    mensagemWhatsapp: "Olá! Gostaria de saber sobre a mudança para a Categoria D na Auto Escola Ximenes."
  },
  {
    id: "renovacao-cnh",
    titulo: "Renovação de CNH",
    categoria: "Simples ou com EAR",
    descricao: "Auxiliamos em todas as etapas da renovação da sua carteira de motorista, com orientação de taxas e agendamentos.",
    icone: <RefreshCw className="w-5 h-5 text-slate-950" />,
    mensagemWhatsapp: "Olá! Preciso renovar minha CNH e gostaria de suporte na Auto Escola Ximenes."
  },
  {
    id: "perca-medo",
    titulo: "Perca o Medo de Dirigir",
    categoria: "Aulas para Habilitados",
    descricao: "Treinamento humanizado e acolhedor para condutores já habilitados que sentem insegurança em vias movimentadas e cruzamentos.",
    icone: <HeartHandshake className="w-5 h-5 text-slate-950" />,
    mensagemWhatsapp: "Olá! Já sou habilitado(a) mas gostaria de fazer aulas práticas para perder o receio no trânsito."
  },
  {
    id: "reciclagem",
    titulo: "Curso de Reciclagem",
    categoria: "Condutores Infratores",
    descricao: "Assessoria transparente para regularização da CNH suspensa, com direcionamento seguro para restabelecer seu direito de dirigir.",
    icone: <ShieldAlert className="w-5 h-5 text-slate-950" />,
    mensagemWhatsapp: "Olá! Gostaria de informações sobre o Curso de Reciclagem na Auto Escola Ximenes."
  }
];

export const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
  return (
    <div className="bg-white border border-slate-200 hover:border-[#FFC905] rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFC905] to-[#FCC90D] flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
            {service.icone}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
            {service.categoria}
          </span>
        </div>

        <h3 className="font-heading text-lg sm:text-xl font-black text-slate-900 uppercase tracking-tight mb-2 group-hover:text-slate-950">
          {service.titulo}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
          {service.descricao}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100">
        <WhatsAppButton
          id={`btn-service-${service.id}`}
          label="CONSULTAR DETALHES"
          size="sm"
          mensagem={service.mensagemWhatsapp}
          className="w-full justify-center"
        />
      </div>
    </div>
  );
};
