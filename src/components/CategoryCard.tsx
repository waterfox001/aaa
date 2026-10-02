import React from "react";
import { Bike, Car, Layers, Bus, Check, ArrowRight } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export interface CategoryInfo {
  codigo: "A" | "B" | "AB" | "D";
  nome: string;
  subtitulo: string;
  descricao: string;
  veiculos: string;
  cargaHoraria: string;
  destaques: string[];
}

export const defaultCategories: CategoryInfo[] = [
  {
    codigo: "A",
    nome: "Categoria A",
    subtitulo: "Motocicletas & Ciclomotores",
    descricao: "Habilitação para conduzir veículos motorizados de duas ou três rodas, como motos, motonetas e triciclos.",
    veiculos: "Motos de qualquer cilindrada, ciclomotores e motonetas",
    cargaHoraria: "45h teóricas + 20h práticas de direção",
    destaques: [
      "Aulas práticas em blocos de 2 horas",
      "Treino focado em postura, equilíbrio e circuito de exame",
      "Motos revisadas com partida elétrica",
      "Instrutores dedicados com foco no seu aprendizado"
    ]
  },
  {
    codigo: "B",
    nome: "Categoria B",
    subtitulo: "Carros de Passeio & Utilitários",
    descricao: "Habilitação para dirigir automóveis, SUVs, minivans e caminhonetes de até 3.500 kg de peso bruto total.",
    veiculos: "Automóveis de passeio até 8 passageiros + motorista",
    cargaHoraria: "45h teóricas + 20h práticas de direção",
    destaques: [
      "Veículos com ar-condicionado e direção elétrica",
      "Aulas práticas em blocos de 2 horas",
      "Treino focado em controle de veículo, baliza e percurso urbano",
      "Acompanhamento individualizado e sem pressa"
    ]
  },
  {
    codigo: "AB",
    nome: "Categoria AB",
    subtitulo: "Carro & Moto",
    descricao: "Processo integrado para quem deseja conduzir automóveis e motocicletas, unificando exames e etapas.",
    veiculos: "Todos os veículos autorizados nas categorias A e B",
    cargaHoraria: "45h teóricas + 20h práticas de carro + 20h de moto",
    destaques: [
      "Unificação de exames clínicos do DETRAN-CE",
      "Curso teórico aproveitado para ambas as categorias",
      "Flexibilidade na programação das aulas de carro e moto",
      "Acompanhamento completo em ambas as bancas avaliadoras"
    ]
  },
  {
    codigo: "D",
    nome: "Categoria D",
    subtitulo: "Ônibus, Vans & Micro-ônibus",
    descricao: "Habilitação profissional para conduzir veículos de transporte coletivo de passageiros, vans escolares e turismo.",
    veiculos: "Ônibus, micro-ônibus e vans com mais de 8 passageiros",
    cargaHoraria: "20h práticas de direção veicular + Módulo de passageiros",
    destaques: [
      "Veículo próprio revisado e adaptado para treinamento",
      "Formação prática voltada às manobras e porte do veículo",
      "Preparação técnica e defensiva para o exame prático",
      "Requisito: 21+ anos e habilitado há 2 anos na B ou 1 ano na C"
    ]
  }
];

interface CategoryCardProps {
  category: CategoryInfo;
  onNavigateDetails?: (path: string) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onNavigateDetails }) => {
  const getIcon = () => {
    switch (category.codigo) {
      case "A":
        return <Bike className="w-6 h-6 text-slate-900" />;
      case "B":
        return <Car className="w-6 h-6 text-slate-900" />;
      case "AB":
        return <Layers className="w-6 h-6 text-slate-900" />;
      case "D":
        return <Bus className="w-6 h-6 text-slate-900" />;
    }
  };

  const getDetailsPath = () => {
    switch (category.codigo) {
      case "A":
        return "/cnh-a";
      case "B":
        return "/cnh-b";
      case "AB":
        return "/cnh-ab";
      case "D":
        return "/cnh-d";
    }
  };

  return (
    <div className="relative flex flex-col justify-between rounded-2xl transition-all duration-200 p-6 sm:p-7 bg-white border border-slate-200 hover:border-slate-300 shadow-xs">
      <div>
        {/* Card Header: Icon & Category Code */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
            {getIcon()}
          </div>
          <span className="font-heading font-bold text-lg text-slate-500 uppercase">
            Cat. {category.codigo}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-heading text-xl font-bold text-slate-950 tracking-tight leading-snug">
          {category.nome}
        </h3>
        <p className="text-xs text-slate-500 font-medium mt-0.5 mb-3">
          {category.subtitulo}
        </p>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
          {category.descricao}
        </p>

        {/* Technical Specs Pill */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 mb-5 space-y-2 text-xs">
          <div>
            <span className="font-medium text-slate-500 text-[11px] block">Veículos Permitidos:</span>
            <span className="font-semibold text-slate-800">{category.veiculos}</span>
          </div>
          <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
            <span className="font-medium text-slate-500 text-[11px]">Carga Horária:</span>
            <span className="font-semibold text-slate-950">{category.cargaHoraria}</span>
          </div>
        </div>

        {/* Feature List */}
        <div className="space-y-2 mb-6">
          {category.destaques.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Area */}
      <div className="space-y-2.5 pt-4 border-t border-slate-100">
        <WhatsAppButton
          id={`btn-cta-categoria-${category.codigo.toLowerCase()}`}
          label={`INICIAR NA CATEGORIA ${category.codigo}`}
          mensagem={`Olá! Vim pelo site da Auto Escola Ximenes e gostaria de me informar sobre a ${category.nome}. Quais são as próximas turmas e horários?`}
          className="w-full justify-center"
        />

        {onNavigateDetails && (
          <button
            type="button"
            onClick={() => onNavigateDetails(getDetailsPath())}
            className="w-full py-2 text-center text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors flex items-center justify-center gap-1.5 group"
          >
            <span>Ver detalhes da Categoria {category.codigo}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-slate-400" />
          </button>
        )}
      </div>
    </div>
  );
};
