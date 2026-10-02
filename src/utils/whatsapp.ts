import { siteConfig, getWhatsAppUrl } from "../config/siteConfig";

export const whatsappMessages = {
  queroMinhaCnh: () =>
    getWhatsAppUrl(`Olá! Acessei o site da ${siteConfig.nome} e quero dar início à minha CNH. Como funciona?`),

  consultarValores: (categoria?: string) =>
    getWhatsAppUrl(
      categoria
        ? `Olá! Vim pelo site e gostaria de consultar os valores e condições de pagamento para a CNH Categoria ${categoria}.`
        : `Olá! Vim pelo site e gostaria de consultar a tabela de valores atualizada da autoescola.`
    ),

  falarComAtendente: (origem?: string) =>
    getWhatsAppUrl(
      origem
        ? `Olá! Estou no site da autoescola (${origem}) e gostaria de conversar com um atendente.`
        : `Olá! Vim pelo site e gostaria de conversar com um atendente.`
    ),

  queroSaberMais: (assunto?: string) =>
    getWhatsAppUrl(
      assunto
        ? `Olá! Gostaria de saber mais informações sobre ${assunto}.`
        : `Olá! Gostaria de saber mais informações sobre a autoescola.`
    ),

  resultadoSimulado: (acertos: number, total: number, porcentagem: number) => {
    const texto = `Olá! Fiz o simulado no site da autoescola e acertei ${acertos} de ${total} questões (${porcentagem}%). Gostaria de saber mais sobre a CNH.`;
    return getWhatsAppUrl(texto);
  },

  resultadoQuiz: (acertos: number, total: number) => {
    const texto = `Olá! Fiz o Quiz no site da autoescola e acertei ${acertos} de ${total} perguntas! Quero me preparar para a CNH.`;
    return getWhatsAppUrl(texto);
  },

  categoriaEspecifica: (cat: "A" | "B" | "AB") => {
    const nomes = {
      A: "Categoria A (Moto)",
      B: "Categoria B (Carro)",
      AB: "Categoria AB (Carro e Moto)"
    };
    return getWhatsAppUrl(`Olá! Vim pelo site e gostaria de saber mais sobre a CNH ${nomes[cat]}.`);
  },

  duvidaLocalidade: (bairro: string) => {
    return getWhatsAppUrl(`Olá! Sou de ${bairro} em ${siteConfig.cidade} e gostaria de saber sobre as aulas e turmas na autoescola.`);
  }
};
