import { ChatbotItem } from "../types/types";
import { chatbotKnowledgeBase, chatbotDefaultOptions } from "../data/chatbotData";
import { getWhatsAppUrl } from "../config/siteConfig";

export interface ChatbotMatchResult {
  encontrado: boolean;
  item?: ChatbotItem;
  resposta: string;
  acaoBtn?: {
    label: string;
    url: string;
  };
}

function normalizarTexto(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^\w\s]/gi, " ") // remove pontuações
    .replace(/\s+/g, " ")
    .trim();
}

export const chatbotService = {
  getInitialOptions(): string[] {
    return chatbotDefaultOptions;
  },

  getAllItems(): ChatbotItem[] {
    return chatbotKnowledgeBase;
  },

  getItemById(id: string): ChatbotItem | undefined {
    return chatbotKnowledgeBase.find(item => item.id === id);
  },

  /**
   * Processa a entrada do usuário SEM INTELIGÊNCIA ARTIFICIAL,
   * utilizando estritamente palavras-chave e banco de conhecimento local.
   */
  processUserInput(input: string): ChatbotMatchResult {
    const inputNormalizado = normalizarTexto(input);
    if (!inputNormalizado) {
      return {
        encontrado: false,
        resposta: "Por favor, digite sua dúvida ou escolha uma das opções acima.",
      };
    }

    // 1. Verificação se coincide exatamente com o título de alguma pergunta cadastrada
    const matchExato = chatbotKnowledgeBase.find(
      item => normalizarTexto(item.pergunta) === inputNormalizado
    );
    if (matchExato) {
      return this.formatResult(matchExato);
    }

    // 2. Pontuação baseada em palavras-chave
    const tokensUsuario = inputNormalizado.split(" ").filter(t => t.length > 1);

    let melhorItem: ChatbotItem | null = null;
    let maiorPontuacao = 0;

    for (const item of chatbotKnowledgeBase) {
      let pontuacao = 0;
      const perguntaNormalizada = normalizarTexto(item.pergunta);

      // Palavras-chave do item
      for (const palavraChave of item.palavrasChave) {
        const pkNormalizada = normalizarTexto(palavraChave);

        // Se a frase do usuário contém a palavra-chave inteira (ex: "quanto custa", "primeira cnh")
        if (inputNormalizado.includes(pkNormalizada)) {
          pontuacao += pkNormalizada.includes(" ") ? 8 : 4;
        } else {
          // Token por token
          const pkTokens = pkNormalizada.split(" ");
          for (const token of tokensUsuario) {
            if (pkTokens.includes(token)) {
              pontuacao += 2;
            }
          }
        }
      }

      // Recompensa se tokens do usuário aparecem no título da pergunta
      for (const token of tokensUsuario) {
        if (perguntaNormalizada.includes(token)) {
          pontuacao += 1;
        }
      }

      if (pontuacao > maiorPontuacao) {
        maiorPontuacao = pontuacao;
        melhorItem = item;
      }
    }

    // Limiar de pontuação para considerar correspondência confiável
    if (melhorItem && maiorPontuacao >= 3) {
      return this.formatResult(melhorItem);
    }

    // Fallback: nenhuma correspondência suficiente encontrada
    return {
      encontrado: false,
      resposta: "Não encontrei uma resposta para essa dúvida em nosso banco de dados. Mas nossa equipe está pronta para te atender imediatamente!",
      acaoBtn: {
        label: "FALAR COM ATENDENTE",
        url: getWhatsAppUrl(`Olá! Estava no chatbot do site da autoescola e gostaria de tirar uma dúvida sobre: "${input}"`)
      }
    };
  },

  formatResult(item: ChatbotItem): ChatbotMatchResult {
    let acaoBtn: { label: string; url: string } | undefined;

    if (item.acaoSugerida) {
      if (item.acaoSugerida.tipo === "whatsapp") {
        acaoBtn = {
          label: item.acaoSugerida.texto,
          url: getWhatsAppUrl(item.acaoSugerida.urlOuMensagem)
        };
      } else {
        acaoBtn = {
          label: item.acaoSugerida.texto,
          url: item.acaoSugerida.urlOuMensagem
        };
      }
    }

    return {
      encontrado: true,
      item,
      resposta: item.resposta,
      acaoBtn
    };
  }
};
