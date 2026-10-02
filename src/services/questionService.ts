import { Question, SimulatorResultData, SubjectType } from "../types/types";
import { detranQuestions } from "../data/questions";

/**
 * Interface preparada para futura substituição por Supabase ou Firebase
 */
export interface IQuestionRepository {
  getQuestions(limit?: number, subject?: SubjectType): Promise<Question[]>;
  getQuestionById(id: number): Promise<Question | undefined>;
}

class LocalQuestionRepository implements IQuestionRepository {
  async getQuestions(limit = 20, subject?: SubjectType): Promise<Question[]> {
    let pool = [...detranQuestions];
    if (subject) {
      pool = pool.filter(q => q.assunto.toLowerCase() === subject.toLowerCase());
    }

    // Embaralhar (Fisher-Yates) para garantir aleatoriedade sem repetição
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, Math.min(limit, shuffled.length));
  }

  async getQuestionById(id: number): Promise<Question | undefined> {
    return detranQuestions.find(q => q.id === id);
  }
}

export const questionService = {
  repository: new LocalQuestionRepository(),

  /**
   * Obtém 20 questões aleatórias (ou outra quantidade definida) para o simulado oficial
   */
  async getRandomSimulado(count = 20, subject?: SubjectType): Promise<Question[]> {
    return this.repository.getQuestions(count, subject);
  },

  /**
   * Avalia as respostas do simulado e retorna métricas detalhadas
   */
  calculateResult(
    questoes: Question[],
    respostasUsuario: Record<number, number>,
    tempoGastoSegundos: number
  ): SimulatorResultData {
    let acertos = 0;
    const detalhesPorAssunto: Record<string, { acertos: number; total: number }> = {};

    questoes.forEach(q => {
      const respostaDada = respostasUsuario[q.id];
      const acertou = respostaDada !== undefined && respostaDada === q.respostaCorreta;

      if (acertou) {
        acertos++;
      }

      const assuntoNome = q.assunto;
      if (!detalhesPorAssunto[assuntoNome]) {
        detalhesPorAssunto[assuntoNome] = { acertos: 0, total: 0 };
      }
      detalhesPorAssunto[assuntoNome].total++;
      if (acertou) {
        detalhesPorAssunto[assuntoNome].acertos++;
      }
    });

    const total = questoes.length;
    const erros = total - acertos;
    const porcentagem = total > 0 ? Math.round((acertos / total) * 100) : 0;

    const isApproved = total === 30 ? acertos >= 20 : porcentagem >= 70;

    let classificacao = "";
    let mensagem = "";

    if (total === 30) {
      if (acertos >= 26) {
        classificacao = "Excelente desempenho!";
        mensagem = `Parabéns! Você acertou ${acertos} das 30 questões (o DETRAN exige acertar no mínimo 20 de 30). Seu índice de conhecimento é altíssimo para passar de primeira!`;
      } else if (acertos >= 20) {
        classificacao = "Aprovado no Simulado DETRAN!";
        mensagem = `Muito bem! Você acertou ${acertos} das 30 questões (mínimo necessário: 20 acertos). Você seria aprovado na prova teórica oficial do DETRAN!`;
      } else if (acertos >= 15) {
        classificacao = "Você está quase lá.";
        mensagem = `Você acertou ${acertos} das 30 questões. O DETRAN exige acertar 20 das 30 questões. Revise o gabarito abaixo e tente novamente para garantir sua aprovação!`;
      } else {
        classificacao = "Você precisa revisar o conteúdo.";
        mensagem = `Você acertou ${acertos} de 30 questões. Na prova oficial são necessários 20 acertos. Não se preocupe: continue praticando! E lembre-se que o DETRAN permite refazer a prova uma vez de graça caso reprove.`;
      }
    } else {
      if (porcentagem >= 85) {
        classificacao = "Excelente desempenho!";
        mensagem = "Parabéns! Você demonstrou domínio completo dos conteúdos do DETRAN. Suas chances de aprovação na prova oficial são altíssimas (o DETRAN exige 20 de 30 questões)!";
      } else if (porcentagem >= 70) {
        classificacao = "Bom desempenho (Aprovado).";
        mensagem = "Muito bem! Você atingiu a média exigida para a prova do DETRAN (acertar 20 de 30 questões). Continue praticando!";
      } else if (porcentagem >= 50) {
        classificacao = "Você está evoluindo.";
        mensagem = "Você já assimilou boa parte do conteúdo, mas ainda precisa de um reforço para atingir os 20 acertos necessários nas 30 questões da prova oficial. Revise o gabarito!";
      } else {
        classificacao = "Você precisa estudar mais.";
        mensagem = "Não desanime! Revise a explicação de cada pergunta abaixo e refaça o teste. Na Auto Escola Ximenes você conta com suporte dos melhores instrutores e simulados contínuos até atingir a nota máxima!";
      }
    }

    return {
      totalQuestoes: total,
      acertos,
      erros,
      porcentagem,
      classificacao,
      mensagem,
      tempoGastoSegundos,
      detalhesPorAssunto
    };
  },

  getAllQuestions(): Question[] {
    return detranQuestions;
  }
};
