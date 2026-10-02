export type SubjectType =
  | "legislação"
  | "sinalização"
  | "direção defensiva"
  | "primeiros socorros"
  | "meio ambiente"
  | "mecânica básica"
  | "cidadania"
  | "circulação"
  | "infrações";

export type DifficultyType = "facil" | "medio" | "dificil";

export interface Question {
  id: number;
  pergunta: string;
  alternativas: [string, string, string, string];
  respostaCorreta: number; // 0, 1, 2, ou 3
  explicacao: string;
  categoria: "A" | "B" | "AB" | "Geral";
  assunto: SubjectType;
  dificuldade: DifficultyType;
  placaOuImagemUrl?: string;
}

export interface QuizQuestionItem {
  id: number;
  pergunta: string;
  alternativas: [string, string, string, string];
  respostaCorreta: number;
  explicacaoCurta: string;
  dicaRapida?: string;
}

export interface ChatbotItem {
  id: string;
  pergunta: string;
  palavrasChave: string[];
  resposta: string;
  categoria: "geral" | "financeiro" | "documentos" | "provas" | "contato" | "categorias";
  acaoSugerida?: {
    texto: string;
    tipo: "whatsapp" | "link";
    urlOuMensagem: string;
  };
}

export interface ChatbotMessageItem {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: string[];
  actionBtn?: {
    label: string;
    url: string;
  };
  timestamp: Date;
}

export interface FAQItem {
  id: string;
  pergunta: string;
  resposta: string;
  categoria: "Geral" | "Primeira Habilitação" | "Aulas e Provas" | "Pagamento e Documentos";
}

export interface SimulatorState {
  questoes: Question[];
  respostasUsuario: Record<number, number>; // questionId -> alternativaEscolhida
  questaoAtualIndex: number;
  finalizado: boolean;
  tempoRestanteSegundos: number;
}

export interface SimulatorResultData {
  totalQuestoes: number;
  acertos: number;
  erros: number;
  porcentagem: number;
  classificacao: string;
  mensagem: string;
  tempoGastoSegundos: number;
  detalhesPorAssunto: Record<string, { acertos: number; total: number }>;
}
